import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

//console.log('data', data)
const initialState = {
    data: [...data],
    error: '',
    loading: true
}

export const spacesSlice = createSlice({
    name: 'spaces',
    initialState,
    reducers : {
        fetchSpaces: (state, action) => {

        }
    }
});


export const { fetchSpaces } = spacesSlice.actions;
export default spacesSlice.reducer;