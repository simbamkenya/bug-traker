import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

//console.log('data', data)
const initialState = {
    data: [...data],
    error: '',
    loading: true
}


export const fetchCategoryById = createAsyncThunk(
    'categories/fetchCategoryById',
    async(id, thunkAPI) => {
        try {
            const res = await axios.get(`${BASE_URL}/api/category/${id}`)
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

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers : {
        fetchCat: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProjectById.pending, (state, action) => {
            state.loading = true
         })
         .addCase(fetchProjectById.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload.project
         })
         .addCase(fetchProjectById.rejected, (state, action) => {
            state.loading = true
         })
    }
});


export const { fetchCat } = categorySlice.actions;
export default categorySlice.reducer;