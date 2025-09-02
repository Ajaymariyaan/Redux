import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

function FormHomePage(){
    const userName= useSelector((state)=>state.formname.userName);
    const router = useRouter();
const handleClick = () =>{
    router.push("./Form")
}
return (<>

<h1>Hello</h1>
<h1>{userName}</h1>
<button onClick={handleClick}>Login page</button>
</>)
}


export default FormHomePage;
