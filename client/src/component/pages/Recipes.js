import '../../App.css'
import './Recipes.css'
import wip from '../../component/images/project2.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import { IGEmbed } from 'react-ig-embed';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
            <Container className="recipe-container">
                {(typeof backendData.recipe === 'undefined') ? (
                    <p>Loading...</p>
                ): (backendData.recipe.map((x, i) => {
                    //individual json object here
                    //ok _id change to insta link, name change to recipe name price change to time needed
                    return (
                        <>
                            <a className="cards" href={ "/recipes/"+ x.page } style={{ textDecoration: 'none'}}>
                                <div className="top-buffer"></div>
                                <Row className="card_container fancy_card">
                                    <Col className="insta" sm={8} md={8} lg={6} xl={6}>
                                        <IGEmbed url={x.link} />
                                    </Col>
                                    <Col sm={4} md={4} lg={4} xl={4}>{x.name}</Col>
                                    <Col className="difficulty"sm={0} md={0} lg={2} xl={2}>{x.price}</Col>
                                </Row> 
                            </a>   
                        </>
                    )
                })
                )}
                <div className="bottom-buffer"></div>
            </Container>
        </>
    )
}


export default Recipes;