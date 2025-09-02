import React from "react";

const initialState = {
    isLoggedIn:false,
    username:''
};

function AuthReducer( state = initialState,action){

    switch (action.type){
        case 'LOGIN':
            return{ ...state,isLoggedIn:true, username:action.payload.username};

        case 'LOGOUT' :
            return { isLoggedIn:false,useename:''};

        default :
        return state ;

  
  
        }
}
export default AuthReducer;
