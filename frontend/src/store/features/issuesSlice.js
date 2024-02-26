import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import { data } from "../../data";
import axios from "axios";

export const addIssue= createAsyncThunk(
    'issues/addIssue',
    async(data, thunkAPI) => {
        try {
            console.log('income new issue', data)
            const res = await axios.post(`${BASE_URL}/api/issues`, data)
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

export const fetchIssues = createAsyncThunk(
    'issues/fetchIssues',
    async(_, thunkAPI) => {
        try {
            const res = await axios.get(`${BASE_URL}/api/issues`)
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

export const deleteIssueById = createAsyncThunk(
    'issues/deleteIssueById',
    async (id) => {
        try {
           const res = axios.delete(`${BASE_URL}/api/issues/${id}`).then((res) => res.data)
           return res
        } catch (error) {
            console.log(error)
        }
    }
)


//console.log('data', data)
const initialState = {
    data: [],
    error: '',
    loading: true
}


export const issuesSlice = createSlice({
    name: 'issues',
    initialState,
    reducers : {
        filterIssues: (state, action) => {
            console.log('filtering', state.data)
              if(action.payload == "all"){
                state.data = state.data;
              } else {
                const filteredIssues = state.data.filter((issue) => issue.status !== action.payload)
                state.data = filteredIssues;
              }
               
        },
        filterByProject: (state, action) => {
         console.log('paylload', action.payload)
         const dd =  state.data.filter((issue) => issue.project_id !== action.payload);
         console.log('dd', dd)
         state.data = dd;
        },
        filterByCreator: (state, action) => {

        },
        filterByUser: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(addIssue.pending, (state, action) => {
            state.loading = true
         })
         .addCase(addIssue.fulfilled, (state, action) => {
            console.log('action', action)
            state.loading = false;
            state.data = [...state.data, action.payload]
         })
         .addCase(addIssue.rejected, (state, action) =>{
            state.loading = true;
         })

         builder.addCase(fetchIssues.pending, (state, action) => {
            state.loading = true
         })
         .addCase(fetchIssues.fulfilled, (state, action) => {
            console.log("issues fetched", action.payload)
            state.loading = false
            state.data = action.payload.issues
         })
         .addCase(fetchIssues.rejected, (state, action) => {
            state.loading = true,
            state.data = action.payload
         })

         builder.addCase(deleteIssueById.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(deleteIssueById.fulfilled, (state, action) => {
            console.log('ppp', action.payload)
            state.loading = false;
            state.error  =  null;     
         })
         .addCase(deleteIssueById.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.msg;
         })
    }
});

export const { filterIssues, filterByProject } = issuesSlice.actions;
export default issuesSlice.reducer;