import '../../../App.css'
import './page.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import {DataRecipe} from '../../data.js';
import setupA from './setupA.js'

function b() {
    const data = DataRecipe(2);
    return (
        <>
            <Container className="recipe-container">
                {data ?  
                (setupA(data)) : (
                    <p>Loading...</p>
                )}
                <div className="bottom-buffer"></div>
            </Container>
        </>
    )
}


export default b;