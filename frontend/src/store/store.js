import { configureStore } from "@reduxjs/toolkit";
import issuesReducer from "./features/issuesSlice";

export const store = configureStore({
    reducer: {
        bugs: issuesReducer
    }
})
