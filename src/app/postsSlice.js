import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
    posts: [],
    status:"idle",
    errorMsg: null
};

const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getPosts.pending,(state,action)=>{
            state.status = "loading"
        })
        .addCase(getPosts.fulfilled,(state,action)=>{
            state.posts = action.payload;
           state.status = "idle"
        })
        .addCase(getPosts.rejected,(state,action)=>{
            state.status = "error";
            console.log(action,"dfdf")
            state.errorMsg = action.error.message;
        })
    }

})
export const getPosts = createAsyncThunk("posts/get",async()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        if(!data.length){
            throw new Error("Something went wrong! Try again.")
        }

        data = data.map((item)=>{
            item.imgSrc = `https://picsum.photos/200?random=${item.id}`;
            return item;
        })
        return data;
    }
    catch(error){       
        throw new Error(error);
    }
})
export default postsSlice.reducer;