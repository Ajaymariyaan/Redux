// import { useDispatch, useSelector} from "react-redux";

// function CounterPage(){

//     const count = useSelector(State => State.count);
//     const dispatch = useDispatch() ;



//     return(<>

//     <h2>Hello Redux </h2>
//     <h1> {count}</h1>

//     <button onClick={()=>dispatch({type:"INCREMENT"})}>INCREMENT</button>
//     <button onClick={()=>dispatch({type:"DECREMENT"})}>DECREMENT </button>
//     </>)
// }
// export default CounterPage;
import { useSelector, useDispatch } from 'react-redux';

export default function CounterPage() {
  const count = useSelector((state) => state.count); // access state
  const dispatch = useDispatch(); // to dispatch actions

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}
