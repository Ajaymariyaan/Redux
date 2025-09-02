// import { useRouter } from "next/router";
import { useRouter } from 'next/router';

import React, { useState } from "react";
import { useDispatch } from "react-redux";


function LoginPage(){
const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
const [error,setError] = useState("");

const dispatch =useDispatch();
const router = useRouter();


const HandleLogin = () =>{
    if (username === "Ajai" && password === "123")
    {
        dispatch ({type:'LOGIN',payload:{username}});
          router.push('/dashboard');
    }
    else {
        setError('Invalid username or password')
    }
};

    return(
        <div>
        <h1>Login Page </h1>
        <input type="text" onChange={(e)=>setUsername(e.target.value)} >
        </input>

        <input type="text" onChange={(e)=>setPassword(e.target.value)}></input>

        <button onClick={HandleLogin}>Login</button> 

        {error && <p>{error}</p>}


        </div>
    )
}

export default LoginPage;
