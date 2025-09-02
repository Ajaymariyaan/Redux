import { addPractice2 } from "@/store/practice2Sclice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function practiceHome2(){
    const [input,setInput] = useState("");
    const dispatch = useDispatch();
    const name = useSelector((state)=>state.practice2.user)



    const handleclk = () =>{
        dispatch(addPractice2(input))
    }
    return(<>
    <p> Hello </p>
    <input 
    placeholder="enter the name "
    onChange={(e)=>setInput(e.target.value)}
    />
    <button onClick={handleclk}>clk me</button>
<p>{name}</p>
        </>)
}

export default practiceHome2;
