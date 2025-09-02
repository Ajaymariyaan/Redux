// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";



// function NameHomePage(){

// const [name,setName]= useState('');
// const names = useSelector(state=> state.names);
// const dispatch = useDispatch();


// const addName = () =>{
//     if(name.trim()!==''){
//         dispatch({type:'ADD_NAME',payload:name});
//         setName('');
//     }
// }

// const removeName = (index) => {
//  dispatch({type:'REMOVE_NAME',payload:index});
//  setName('');


// }


//     return(<>

// <div>
//     <h1>Name List</h1>

//     <input 
//     type="text"
//     value={name}
//     onChange={(e)=>setName(e.target.value)}
//     placeholder="Enter Your Name "
//     ></input>
// <button onClick={addName}>Add Name</button>

// <ul>
//     {names.map((name,idx)=>
//     (<li key={idx} >
//         {name} <button onClick={() => removeName(idx)}>Remove</button>

//     </li>

//     ))}
// </ul>
// </div>

    
//     </>
//     )
// }

// export default NameHomePage;


import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export default function NameHomePage() {
  const [name, setName] = useState('');
  const names = useSelector(state => state.names);
  const dispatch = useDispatch();

  const addName = () => {
    if (name.trim()) {
      dispatch({ type: 'ADD_NAME', payload: name });
      setName('');
    }
  }

  const removeName = (index) => {
    dispatch({ type: 'REMOVE_NAME', payload: index });
  }

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={addName}>Add</button>
      <ul>
        {names.map((n, idx) => (
          <li key={idx}>
            {n} <button onClick={() => removeName(idx)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
