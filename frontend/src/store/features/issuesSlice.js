import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { data } from "../../data";

export const addIssue= createAsyncThunk(
    'issues/addIssue',
    async(data, thunkAPI) => {
        try {
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
    data: [...data],
    error: '',
    loading: true
}


export const issuesSlice = createSlice({
    name: 'issues',
    initialState,
    reducers : {
        fetchIs: (state, action) => {

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
            state.loading = false
            state.data = action.payload.issues
         })
         .addCase(fetchIssues.rejected, (state, action) => {
            state.loading = true
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


export default issuesSlice.reducer;