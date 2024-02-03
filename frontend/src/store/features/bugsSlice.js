import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

//console.log('data', data)
const initialState = {
    data: [...data],
    error: '',
    loading: true
}

export const bugsSlice = createSlice({
    name: 'bugs',
    initialState,
    reducers : {
        fetchBugs: (state, action) => {

        }
    }
});


export const { fetchBugs } = bugsSlice.actions;
export default bugsSlice.reducer;