 import React, { Component } from "react";
import {Provider} from "react-redux";
//  import store from "@/store/Store";
import store from "@/store/Store";
// import Counter from "./CounterRTK";
  


 function Provider1( {Component,pageProps}){



    return(

        <>
        <Provider store={store}>
            <Component {...pageProps}/>
{/* <Counter/> */}
        </Provider>
        </>
    )
 }

 export default Provider1;



// import { Provider } from "react-redux";
// // import store from "../store/Store";
// import store from "@/store/Store";
// import NameHomePage from "./NameHomePage";

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//       <NameHomePage/>
//     </Provider>
//   );
// }
