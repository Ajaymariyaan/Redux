import { addPractice1 } from "@/store/practiceSlice1";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";



function practicePage1(){
    const [input,setInput] = useState("");

const name = useSelector((state)=>state.practice1.name);
const dispatch = useDispatch();




const handleBTN = () =>{

    dispatch(addPractice1(input))
}
    return(<>
    <p> hllo </p>
    <h1>{name}</h1>

    <input 
    placeholder="Enter the Name "
    onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={handleBTN}>Click Me </button>

    </>
    )
}
export default practicePage1;
