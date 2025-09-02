import React from "react";


const initialState = {darkMode:false};

function ThemeReducer (state = initialState,action){
    switch(action.type){

        case 'TOGGLE_THEME':
            return{darkMode:!state.darkMode};
        default :
        return state;
        
    }


}


export default ThemeReducer;
