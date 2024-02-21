import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

export const registerUser = createAsyncThunk(
    'auth/register',
    async(data, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/api/register`, data)
            return res.data
        } catch (error) {
            if(error.response && error.response.data.message){
                return thunkAPI.rejectWithValue(error.response.data.message)
              } else {
                return thunkAPI.rejectWithValue(error.message) 
              }
        }
    },
);

export const login = createAsyncThunk(
    'auth/login',
    async(data, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/api/login`, data)
          console.log('login res', res)
            return res
        } catch (error) {
            if(error.response && error.response.data.message){
              console.log('err res data message', error.response.data.message)
              //invalid inputs
              return thunkAPI.rejectWithValue(error.response.data.message)
            } else {
              console.log('errpr message', error.message)
              return thunkAPI.rejectWithValue(error.message) 
            }
        }
    },
)


export const logout = createAsyncThunk(
  'auth/logout',
  async(data, thunkAPI) => {  
      try {    
        console.log('logoutslice')
        const tk = localStorage.getItem('access_token');
        const us = JSON.parse(localStorage.getItem('user'))
        console.log('b4 lgt', tk)
        localStorage.clear()
          const res = await axios.post(`${BASE_URL}/api/logout`)
          console.log('lgt', tk)
          return res
      } catch (error) {
          if(error.response && error.response.data.message){
            return thunkAPI.rejectWithValue(error.response.data.message)
          } else {
            return thunkAPI.rejectWithValue(error.message) 
          }
      }
  },
)


const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, 
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, { payload }) => {
            state.userInfo = payload
          },
        isAuth: (state, {payload}) => {
          return state
        }
    }, 
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
           state.loading = true;
           state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
           //set auth state
           state.loading = false;
           let userToken = action.payload.data.token
           let userInfo = action.payload.data.user

           state.userInfo = userInfo
           state.userToken = userToken

           //store token and user data
           let userTk = userToken;
           let userIn = JSON.stringify(userInfo)

           if(userIn && userTk){
           localStorage.setItem('access_token', userToken);
           localStorage.setItem('user',JSON.stringify(userInfo))   
           }         
        })
        .addCase(login.rejected, (state, action) => {
          console.log('failed reject', action.payload)
          state.loading = false;
          state.error = action.payload      
        })

        builder.addCase(logout.pending, (state, action) => {

          state.loading = true;
          state.error = null;
       })
       .addCase(logout.fulfilled, (state, action) => {
          state.loading = false;
          console.log('logout payload', action.payload)
          state.userInfo = {}
          state.userToken = null    
       })
       .addCase(logout.rejected, (state, action) => {
         state.loading = false;
         state.error = action.payload
       })
    }
})

export const { setCredentials, isAuth } = authSlice.actions;
export default authSlice.reducer;