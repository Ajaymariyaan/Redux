import {createSlice} from "@reduxjs/toolkit";

const practice2Slice = createSlice({

    name:"name",
    initialState:{
        user:("")
    },
    reducers:{
        addPractice2:(state,action)=>{
             state.user=action.payload;

        },
           
        
    },
});
export const {addPractice2} = practice2Slice.actions;
export default practice2Slice.reducer;
