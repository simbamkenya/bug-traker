import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants";


export const fetchIssueTypes = createAsyncThunk(
    'issueTypes/fetchIssueTypes',
    async () => {
        try {
           const res = await axios.get(`${BASE_URL}/api/issuesTypes`).then((res) => res.data)
           return res
        } catch (error) {
            console.log(error)
        }
    }
)
export const addIssueType = createAsyncThunk(
    'issueTypes/addIssueType',
    async (data, thunkAPI) => {
        try {
            console.log('new issue type', data)
           const res = await axios.post(`${BASE_URL}/api/issuesTypes`, data)
           return res.data
        } catch (error) {
            if(error.response && error.response.data.message){
                return thunkAPI.rejectWithValue(error.response.data.message)
              } else {
                return thunkAPI.rejectWithValue(error.message) 
              }
        }
    }
)

const initialState = {
    data: [],
    error: '',
    loading: true
}

export const issueTypesSlice = createSlice({
    name: 'issueTypes',
    initialState,
    reducers: {
        editIssue: (state, action) => {
        }
    },
    extraReducers: (builder) => {
     builder.addCase(fetchIssueTypes.pending, (state, action) => {
        state.loading = true
     })
     .addCase(fetchIssueTypes.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.issueTypes
     })
     .addCase(fetchIssueTypes.rejected, (state, action) => {
        state.loading = true
     })
    }
})

export const { editIssue } = issueTypesSlice.actions;
export default issueTypesSlice.reducer;