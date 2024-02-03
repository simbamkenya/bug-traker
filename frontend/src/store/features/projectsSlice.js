import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

//console.log('data', data)
const initialState = {
    data: [...data],
    error: '',
    loading: true
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers : {
        fetchProjects: (state, action) => {

        }
    }
});


export const { fetchProjects } = projectsSlice.actions;
export default projectsSlice.reducer;