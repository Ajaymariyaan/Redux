import React from "react";
import {createSlice} from "@reduxjs/toolkit"

const nameSlice = createSlice({
    name:"name",
    initialState:{username:""},
    reducers:{

        setName:(state,action)=>{
            state.username=action.payload;
        },
        clearName :(state) =>{
            state.username="";


        },
        },
    
});

export const {setName,clearName} = nameSlice.actions;
export default nameSlice.reducer;