import '../../App.css'
import './Recipes.css'
import wip from '../../component/images/project2.jpg';
import React, {useEffect, useState} from 'react'

function Recipes() {
    //the following section of code gets backend data, u can go to localhost:5000/api to see it
    //backendData is the entire data
    const [backendData, setBackendData] = useState([{}])
    useEffect(() => {
        //change /api to link in heroku
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
        }, [])
    
    //each stores [ map, map, map ]
    //here's how we are gonna do this: server.js gets all data about all recipes, each page that needs it, just grab what they need, Ex: recipes.js just grab name and pic url, each individual recipe page uses this exact same thing, except it gets everything
    
    //if backendData doesn't exist, then print loading, otherwise map it, use map because map returns something
    
    //add a link attribute
    return (        
        <>
            <div>
                {(typeof backendData.recipe === 'undefined') ? (
                    <p>Loading...</p>
                ): (backendData.recipe.map((x, i) => {
                    //individual json object here
                    return (
                        <>
                            <div className="container">
                                <div className="column">
                                    <div class="card_container">
                                        <div class="fancy_card">
                                            <p> {x._id} </p>
                                            <p> {x.name} </p>                               
                                        </div> 
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                })
                )}
            </div>
            
            <div className="recipes-container">
                <h1>Come back later</h1>
                <img className="wip" src={wip} alt="wip"></img>
            </div>

        </>
    )
}


export default Recipes;