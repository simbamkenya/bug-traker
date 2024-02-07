import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

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
        fetchIssues: (state, action) => {

        }
    }
});


export const { fetchIssues } = issuesSlice.actions;
export default issuesSlice.reducer;