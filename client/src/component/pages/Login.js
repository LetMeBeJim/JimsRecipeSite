import './Blog.css'
import React from 'react';
import {useEffect, useState} from "react"

function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
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
        console.log(result.token)
        if (result.status === "ok") {
            console.log("got it")
        } else {
            console.log("nope")
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>  
                <div class="container">   
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