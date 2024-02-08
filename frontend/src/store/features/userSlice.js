import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

export const fetchUserById = createAsyncThunk(
    'user/fetchUserById',
    async (id) => {
        try {
           const res = await axios.get(`${BASE_URL}/api/users/${id}`).then((res) => res.data)
           return res
        } catch (error) {
            console.log(error)
        }
    }
)


const initialState = {
    data: '',
    error: '',
    loading: true
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    
    },
    extraReducers: (builder) => {
     builder.addCase(fetchUserById.pending, (state, action) => {
        state.loading = true
     })
     .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.user
     })
     .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = true
     })
    }
})

export default userSlice.reducer;