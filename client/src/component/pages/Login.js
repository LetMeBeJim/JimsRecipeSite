import './Blog.css'
import React from 'react';
import {useEffect, useState} from "react"

function Login() {
    
    return (
        <div>
            <form>  
                <div class="container">   
                    <label>Username : </label>   
                    <input type="text" placeholder="Enter Username" name="username" required />  <br></br>
                    <label>Password : </label>   
                    <input type="password" placeholder="Enter Password" name="password" required></input>  
                    <button type="submit">Login</button>   
                </div> 
            </form>
        </div>
        
    )
} 

export default Login