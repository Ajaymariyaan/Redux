import React from "react";
import {createSlice} from "@reduxjs/toolkit";





const formSlice = createSlice({

    name:"form",
    initialState:{
        userName:""
        
        },
    reducers:{
        addName:((state,action)=>
        {
         state.userName=action.payload;
    })
        
      
    },

    
});

export const {addName} = formSlice.actions;
export default formSlice.reducer;
