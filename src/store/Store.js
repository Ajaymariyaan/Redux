// import {createStore} from "redux";
// // import NameReducer from "./NameReducer";
// // import ThemeReducer from "./ThemeReducer";
// import AuthReducer from "./AuthReducer";

// // import counterReducer from "./CounterReducer";


// const store = createStore (AuthReducer);


// export default store;


// import {configureStore} from "@reduxjs/toolkit";
// import counterReducer from "./CounterReducer";

// const store = configureStore({
 
//     reducer:{
//         counter:counterReducer,
//     },
// });
// export default store;

// import Counter from "@/pages/CounterRTK";
import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./CounterReducer";
// import counterReducer from "./CounterSlice"; 
// import counterReducer from "./CounterReducer";
// import counterReducer from "./CounterReducer"; 
// import Counter from "@/pages/CounterRTK";
import Counter from "./CounterSlice";
import nameSlice from "./nameSlice";
import userSlice from "./userSlice";
import formSlice from "./FormSlice";
import  practice1 from "./practiceSlice1";
import practice2 from "./practice2Sclice";
// import NameReducer from "./NameReducer";
// import Counter from "@/pages/CounterRTK";
const store = configureStore({
  reducer: {
    counter:Counter, 
    name: nameSlice,
    user:userSlice,
    formname:formSlice,
    practice1:practice1,
    practice2:practice2,
  },
});

export default store;