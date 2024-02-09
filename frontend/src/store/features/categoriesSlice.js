import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { data } from "../../data"
import axios from "axios";


//console.log('data', data)
const initialState = {
    data: [...data],
    error: '',
    loading: true
}

export const addCategory = createAsyncThunk(
    'categories/addCategory',
    async(data, thunkAPI) => {
        try {
            console.log('addcat', data)
            const res = await axios.post(`${BASE_URL}/api/category`, data)
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

export const deleteCategoryById = createAsyncThunk(
    'categories/deletCategoryById',
    async (id) => {
        try {
           const res = axios.delete(`${BASE_URL}/api/categories/${id}`).then((res) => res.data)
           return res
        } catch (error) {
            console.log(error)
        }
    }
)


export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async(_, thunkAPI) => {
        try {
            const res = await axios.get(`${BASE_URL}/api/category`)
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

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers : {
        fetchCat: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(addCategory.pending, (state, action) => {
            state.loading = true
         })
         .addCase(addCategory.fulfilled, (state, action) => {
            console.log('action', action)
            state.loading = false;
            state.data = [...state.data, action.payload]
         })
         .addCase(addCategory.rejected, (state, action) =>{
            state.loading = true;
         })
        

        builder.addCase(fetchCategories.pending, (state, action) => {
            state.loading = true
         })
         .addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload.categories
         })
         .addCase(fetchCategories.rejected, (state, action) => {
            state.loading = true
         })

         builder.addCase(deleteCategoryById.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(deleteCategoryById.fulfilled, (state, action) => {
            console.log('ppp', action.payload)
            state.loading = false;
            state.error  =  null;     
         })
         .addCase(deleteCategoryById.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.msg;
         })

    }
});


export const { fetchCat } = categoriesSlice.actions;
export default categoriesSlice.reducer;