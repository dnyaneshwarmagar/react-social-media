import { createSlice } from "@reduxjs/toolkit";

let initialState ={
    details : "",
} 

let detailsSlice = createSlice({
    name:'details',
    initialState,
    reducers:{
        setDetails:(state,action)=>{
            state.details = action.payload;
        }
    },

});

export default detailsSlice.reducer;

export const {setDetails} = detailsSlice.actions;
