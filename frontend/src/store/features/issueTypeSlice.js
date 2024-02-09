import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";


export const fetchIssueTypeById = createAsyncThunk(
    'issueType/fetchIssueTypeById',
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

export const issueTypeSlice = createSlice({
    name: 'issueType',
    initialState,
    reducers: {
        editIssue: (state, action) => {
        }
    },
    extraReducers: (builder) => {
     builder.addCase(fetchIssueTypeById.pending, (state, action) => {
        state.loading = true
     })
     .addCase(fetchIssueTypeById.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.issueType
     })
     .addCase(fetchIssueTypeById.rejected, (state, action) => {
        state.loading = true
     })
    }
})

export const { editIssue } = issueTypeSlice.actions;
export default issueTypeSlice.reducer;