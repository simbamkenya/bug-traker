import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";


export const fetchSpaceById = createAsyncThunk(
    'space/fetchSpaceById',
    async (id) => {
        try {
           const res = await axios.get(`${BASE_URL}/api/spaces/${id}`).then((res) => res.data)
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

export const spaceSlice = createSlice({
    name: 'space',
    initialState,
    reducers: {
        editSpace: (state, action) => {
        }
    },
    extraReducers: (builder) => {
     builder.addCase(fetchSpaceById.pending, (state, action) => {
        state.loading = true
     })
     .addCase(fetchSpaceById.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.space
     })
     .addCase(fetchSpaceById.rejected, (state, action) => {
        state.loading = true
     })
    }
})

export const { editSpace } = spaceSlice.actions;
export default spaceSlice.reducer;