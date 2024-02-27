import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import axios from "axios";


const initialState = {
    data: [],
    error: '',
    loading: true
}

export const addUser = createAsyncThunk(
    'users/addUser',
    async(_, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/api/users`, data)
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

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async(_, thunkAPI) => {
        try {
            const res = await axios.get(`${BASE_URL}/api/users`)
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

export const deleteUserById = createAsyncThunk(
    'users/deleteUsertById',
    async (id) => {
        try {
           const res = axios.delete(`${BASE_URL}/api/users/${id}`).then((res) => res.data)
           return res
        } catch (error) {
            console.log(error)
        }
    }
)


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetch: (state, action) => {       
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addUser.pending, (state, action) => {
            state.loading = true
         })
         .addCase(addUser.fulfilled, (state, action) => {
            console.log('action', action)
            state.loading = false;
            state.data = [...state.data, action.payload]
         })
         .addCase(addUser.rejected, (state, action) =>{
            state.loading = true;
         })
        

        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true
         })
         .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload.users
         })
         .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = true
         })

         builder.addCase(deleteUserById.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(deleteUserById.fulfilled, (state, action) => {
            console.log('ppp', action.payload)
            state.loading = false;
            state.error  =  null;
            
         })
         .addCase(deleteUserById.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.msg;
         })
    }
})

export default usersSlice.reducer;