import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ThemeHomePage(){
    const darkMode = useSelector(state=>state.darkMode);
    const dispatch = useDispatch();
    const toggleTheme = () => {
        dispatch({type:'TOGGLE_THEME'})
    };

    return (

        <div
            style={{textAlign:'center',
                margin:'20px',
                backgroundColor:darkMode? '#333' :'#fff',
                color:darkMode?'#fff':'#333',
                transition:'all 0.9s ease',
                // height:'100%'
                height:'1000px'

            }}>

                <h1>The Theme </h1>
                <button onClick={toggleTheme}>
                    Toggle Button To Color Change 
                </button>

        </div>
    )


}
export default ThemeHomePage;