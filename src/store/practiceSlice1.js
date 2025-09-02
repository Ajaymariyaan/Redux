import {createSlice} from "@reduxjs/toolkit"


const practice1 =createSlice({

    name:"practice1",
    initialState:{
        name:("")
    },
    reducers:{
        addPractice1:((state,action)=>{
            state.name = action.payload ;
        })
    },
});
export const {addPractice1} = practice1.actions;
export default practice1.reducer;
