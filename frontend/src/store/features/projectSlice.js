import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";

export const fetchProjectById = createAsyncThunk(
    'project/fetchProjectById',
    async (id) => {
        try {
           const res = await axios.get(`${BASE_URL}/api/projects/${id}`).then((res) => res.data)
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

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        editProject: (state, action) => {
        }
    },
    extraReducers: (builder) => {
     builder.addCase(fetchProjectById.pending, (state, action) => {
        state.loading = true
     })
     .addCase(fetchProjectById.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.project
     })
     .addCase(fetchProjectById.rejected, (state, action) => {
        state.loading = true
     })
    }
})

export const { editProject } = projectSlice.actions;
export default projectSlice.reducer;