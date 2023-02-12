import './Blog.css'
import React from 'react';
import {useContext, useEffect, useState} from "react"
import { Context } from '../Context';

function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const { isAuth, setAuth } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        //------- Change here to proper backend address
        let res = await fetch("http://localhost:5000/login ", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        
        let result = await res.json();
        localStorage.setItem('token', result.token);
        console.log(localStorage.getItem('token'));
        if (result.status === "ok") {
            console.log("got a token")
            setAuth(() => 1);
            console.log(isAuth)
        } else {
            console.log("nope, didn't get a token")
            setAuth(() => 0);
            console.log(isAuth)
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>  
                <div className="container">   
                    <label>Username : </label>   
                    <input type="text" placeholder="Enter Username" name="username" onChange = {(e) => setUserName(e.target.value)} required />  <br></br>
                    <label>Password : </label>   
                    <input type="password" placeholder="Enter Password" name="password" onChange = {(e) => setPassword(e.target.value)} required></input>  
                    <button type="submit">Login</button>   
                </div> 
            </form>
        </div>
        
    )
} 

export default Login