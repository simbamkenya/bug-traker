import { configureStore } from "@reduxjs/toolkit";

import issuesReducer from "./features/issuesSlice";
import issueReducer from "./features/issueSlice";
import projectsReducer from "./features/projectsSlice";
import projectReducer from "./features/projectSlice";
import spaceReducer from "./features/spaceSlice";
import spacesReducer from "./features/spacesSlice";
import userReducer from "./features/userSlice";
import usersReducer from "./features/usersSlice";
import categoriesReducer from "./features/categoriesSlice";
import categoryReducer from "./features/categorySlice";

export const store = configureStore({
    reducer: {
        issues: issuesReducer,
        issue: issueReducer,
        projects: projectsReducer,
        project: projectReducer,
        spaces: spacesReducer,
        space: spaceReducer,
        user: userReducer,
        users: usersReducer,
        category: categoryReducer,
        categories: categoriesReducer
    }
})
