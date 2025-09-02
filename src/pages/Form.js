import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addName } from "@/store/FormSlice";




function Form() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [repassword, setRepassword] = useState("");
    const [error, setError] = useState("");
    const [message,setMessage]=useState("");


    const dispatch = useDispatch();
    const router =useRouter();
    


    const handle = () => {
            if(!name||!email||!password||!repassword){
                setError("Enter The Missed Fields")
                return;
            }

            if (password !== repassword) {
                setError("Password Not Same !")
                return;
            }

            else {
                setError("");
                setMessage("SuccesFull");
                dispatch(addName(name));
                router.push("./FormPage")

                return;
            }

        
    }
    return (

        <>
            <div style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '6px' }}>
                <h1>Hello</h1>
                <input placeholder="Enter The Name" type="text" onChange={(e) => setName(e.target.value)}>
                </input>

                <input placeholder="Enter The Email" type="email" onChange={(e) => setEmail(e.target.value)}>
                </input>

                <input placeholder="Enter The PassWord" type="text" onChange={(e) => setPassword(e.target.value)}>
                </input>

                <input placeholder="Re-Enter The PassWord" type="text" onChange={(e) => setRepassword(e.target.value)}>
                </input>

                <button onClick={handle}>
                    Login
                </button>
                <h3 style={{ color: 'red' }}>{error}</h3>
                <h3 style={{color:'green'}}>{message}</h3>

            </div>
        </>
    )
}

export default Form;
