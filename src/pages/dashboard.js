import React from "react";
import { useSelector } from "react-redux";

function DashBoard(){

    const username=useSelector(state =>state.username)

    return(

        <>
        
        <p>{username}</p>

        <h1> Welcome {username}</h1>
        </>
    )
}

export default DashBoard;
