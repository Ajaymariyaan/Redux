import React from "react";


const initialState = {

    names:[]
};

function NameReducer(state=initialState,action){

    switch (action.type) {

        case 'ADD_NAME':
            return{names:[...state.names,action.payload]};
        case 'REMOVE_NAME':
            return{ names: state.names.filter((_, idx) => idx !== action.payload)};
            
            default:
                return state;
         
    }
}

export default NameReducer;