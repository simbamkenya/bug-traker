import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";


export const fetchIssueById = createAsyncThunk(
    'issue/fetchIssueById',
    async (id) => {
        try {
           const res = await axios.get(`${BASE_URL}/api/issues/${id}`).then((res) => res.data)
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

export const issueSlice = createSlice({
    name: 'issue',
    initialState,
    reducers: {
        editIssue: (state, action) => {
        }
    },
    extraReducers: (builder) => {
     builder.addCase(fetchIssueById.pending, (state, action) => {
        state.loading = true
     })
     .addCase(fetchIssueById.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.issue
     })
     .addCase(fetchIssueById.rejected, (state, action) => {
        state.loading = true
     })
    }
})

export const { editIssue } = issueSlice.actions;
export default issueSlice.reducer;