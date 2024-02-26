import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import { data } from "../../data";
import axios from "axios";

//console.log('data', data)
const initialState = {
    data: [],
    error: '',
    loading: true
}

export const addProject = createAsyncThunk(
    'projects/addProject',
    async(data, thunkAPI) => {
        console.log('incomeing project', data)
        try {
            const res = await axios.post(`${BASE_URL}/api/project`, data)
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

export const fetchProjects = createAsyncThunk(
    'projects/fetchProjects',
    async(_, thunkAPI) => {
        try {
            const res = await axios.get(`${BASE_URL}/api/projects`)
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

export const deleteProjectById = createAsyncThunk(
    'projects/deleteProjectById',
    async (id) => {
        try {
           const res = axios.delete(`${BASE_URL}/api/projects/${id}`).then((res) => res.data)
           return res
        } catch (error) {
            console.log(error)
        }
    }
)
export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers : {
        fetchPro: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(addProject.pending, (state, action) => {
            state.loading = true
         })
         .addCase(addProject.fulfilled, (state, action) => {
            console.log('action', action)
            state.loading = false;
            state.data = [...state.data, action.payload]
         })
         .addCase(addProject.rejected, (state, action) =>{
            state.loading = true;
         })
        

        builder.addCase(fetchProjects.pending, (state, action) => {
            state.loading = true
         })
         .addCase(fetchProjects.fulfilled, (state, action) => {
            console.log('actons pro', action.payload.projects)
            state.loading = false
            state.data = action.payload.projects;
         })
         .addCase(fetchProjects.rejected, (state, action) => {
            state.loading = true
         })

         builder.addCase(deleteProjectById.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(deleteProjectById.fulfilled, (state, action) => {
            state.loading = false;
            state.error  =  null;
            
         })
         .addCase(deleteProjectById.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.msg;
         })
    }
});


export const { fetchPro } = projectsSlice.actions;
export default projectsSlice.reducer;