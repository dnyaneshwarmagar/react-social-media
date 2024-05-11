import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./postsSlice";
import detailSlice from "./detailSlice";

 const store = configureStore({
    reducer:{
        posts:postsSlice,
        details:detailSlice
    }
});

export default store;