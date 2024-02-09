import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { data } from "../../data";
import axios from "axios";

//console.log('data', data)
const initialState = {
    data: [
        {
            name: 'simba'
        },
        {
           name: 'coleworld'
        },
    ],
    error: '',
    loading: true
}

export const addSpace = createAsyncThunk(
    'spaces/addSpace',
    async(data, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/api/space`, data)
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

export const fetchSpaces = createAsyncThunk(
    'users/fetchSpaces',
    async(_, thunkAPI) => {
        try {
            const res = await axios.get(`${BASE_URL}/api/spaces`)
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

export const deleteSpaceById = createAsyncThunk(
    'space/deleteSpaceById',
    async (id) => {
        try {
           const res = axios.delete(`${BASE_URL}/api/spaces/${id}`).then((res) => res.data)
           return res
        } catch (error) {
            console.log(error)
        }
    }
)


export const spacesSlice = createSlice({
    name: 'spaces',
    initialState,
    reducers : {
        fetchSp: (state, action) => {

        }
    },
    extraReducers: (builder) => {

        builder.addCase(addSpace.pending, (state, action) => {
            state.loading = true
         })
         .addCase(addSpace.fulfilled, (state, action) => {
            console.log('action', action)
            state.loading = false;
            state.data = [...state.data, action.payload]
         })
         .addCase(addSpace.rejected, (state, action) =>{
            state.loading = true;
         })
        

        builder.addCase(fetchSpaces.pending, (state, action) => {
            state.loading = true
         })
         .addCase(fetchSpaces.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload.users
         })
         .addCase(fetchSpaces.rejected, (state, action) => {
            state.loading = true
         })

         builder.addCase(deleteSpaceById.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(deleteSpaceById.fulfilled, (state, action) => { 
            console.log('ppp', action.payload)
            state.loading = false;
            state.error  =  null;
         })
         .addCase(deleteSpaceById.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.msg;
         })
    }
});


export default spacesSlice.reducer;