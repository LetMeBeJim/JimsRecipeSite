import React, { useState } from 'react';
import '../../App.css'


function AddRecipe() {
    const [result, setResult] = useState(0);

    const handleClick = async (e) => {
        let res = await fetch("http://localhost:5000/secret ", {
            method: 'post', 
            headers: new Headers({
                'authorization': localStorage.getItem('token'), 
                'Content-Type': 'application/x-www-form-urlencoded'
            }), 
            body: 'A=1&B=2'
        });
        setResult(await res.json());
    } 
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        //------- Change here to proper backend address
        const formData = new FormData(e.target);
        const data = {};
        formData.forEach((value, key) => (data[key] = value));
        console.log(data)
        let res = await fetch("http://localhost:5000/secret/ins ", {
            method: "POST",
            headers: {
                'authorization': localStorage.getItem('token'), 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        
        let result = await res.json();
    }
    
    return (
        <>
            <button onClick={handleClick}>
                click me
            </button>    
            <div>
            <form onSubmit = {handleSubmit}>  
                <div className="container">   
                    <label>ID : </label>   
                    <input type="text" placeholder="Enter ID" name="_id" required />  <br></br>
                    <label>Name : </label>   
                    <input type="text" placeholder="Enter name" name="name" required></input>  <br></br>
                    <label>Difficulty : </label>   
                    <input type="text" placeholder="Enter Difficulty" name="difficulty" required />  <br></br>
                    <label>Page : </label>   
                    <input type="text" placeholder="Enter Page" name="page" required />  <br></br>
                    <label>Path : </label>   
                    <input type="text" placeholder="Enter Path" name="path" required />  <br></br>
                    <label>Steps : </label>   
                    <input type="text" placeholder="Enter Steps" name="steps" required />  <br></br>
                    <label>Ingredients : </label>   
                    <input type="text" placeholder="Enter Ingredients" name="ingredients" required />  <br></br>
                    <button type="submit">Submit</button>   
                </div> 
            </form>
        </div>   
        </>

    )
}


export default AddRecipe