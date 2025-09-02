// import { decrement, increment, reset } from "@/store/CounterSlice";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";



// function Counter(){
// const dispatch = useDispatch();
// const count =  useSelector((State)=>State.counter.count);



//     return(
//         <>
//         <p>Hello Welcome To the Reduc ToolKit</p>
//         <h1>{count}</h1>
//         <button onClick={()=>dispatch(increment())}>+ </button>
//         <button onClick={()=>dispatch(decrement())}>-</button>
//         <button onClick={()=>dispatch(reset())}>Reset</button>
//         </>
//     )
// }

// export default Counter;
// import { increment,decrement,reset } from "@/store/CounterSlice";
import React, { useState } from "react";
import { increment, decrement, reset } from "@/store/CounterSlice";
import { useDispatch, useSelector } from "react-redux";
import { clearName, setName } from "@/store/nameSlice";

function Counter() {
  const [input,setInput]= useState("");
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter?.count);
  const username = useSelector((state)=>state.name.username)
// console.log(count, "counter");
  return (
    <>
      <p>Hello Welcome To the Redux ToolKit</p>
      <h1>The Count Is :{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
   
   <div>
    <input onChange={(e)=>setInput(e.target.value)} placeholder="Enter Your Name ">
    </input>
    <button onClick={()=>dispatch(setName(input))}>Show Name</button>
    {/* <button onClick={()=>dispatch(clearName)}>
      Clear Name 
    </button> */}

    <h1>{username}</h1>
   </div>
   
    </>
  );
}

export default Counter;