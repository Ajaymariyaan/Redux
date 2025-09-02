import React from "react";
import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice ({

    name:"user",
    initialState:{
        users:[],
        errors:{},
    },
    reducers:{
        addUser:((state ,action)=>{
        state.users.push(action.payload);
         state.errors = {};
        
        }),
        setError:(state,action)=>{
        state.errors=action.payload;


        },
       
    },

});

export const {addUser,setError} = userSlice.actions;
export default userSlice.reducer;
