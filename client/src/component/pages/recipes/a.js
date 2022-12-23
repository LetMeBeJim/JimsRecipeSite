import '../../../App.css'
import '../Recipes.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import InstagramEmbed from 'react-instagram-embed';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Data from '../../data.js';


function a() {
    const data = Data();
    return (
        <>
            <Container className="recipe-container">
                {data ?  (data.recipe.filter((item) => item.name === 'aaaaa aaaaa')
                .map((x,i) => {
                    console.log(x);
                    //change to page format
                    return (
                        <>
                            <a className="cards" href={ "/recipes/"+ x.page } style={{ textDecoration: 'none'}}>
                                <div className="top-buffer"></div>
                                <Row className="card_container fancy_card">
                                    <Col className="insta" sm={8} md={8} lg={6} xl={6}>
                                        <InstagramEmbed url={x.link} />
                                    </Col>
                                    <Col sm={4} md={4} lg={4} xl={4}>{x.name}</Col>
                                    <Col className="difficulty"sm={0} md={0} lg={2} xl={2}>{x.price}</Col>
                                </Row> 
                            </a>   
                        </>
                    )
                })) : (
                    <p>Loading...</p>
                )}
                <div className="bottom-buffer"></div>
            </Container>
        </>
    )
}


export default a;