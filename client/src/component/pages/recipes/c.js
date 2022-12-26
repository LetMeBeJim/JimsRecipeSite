import '../../../App.css'
import '../Recipes.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Data from '../../data.js';


function a() {
    const data = Data();
    return (
        <>
            <Container className="recipe-container">
                {data ?  (data.recipe.filter((item) => item.name === 'ccccc ccccc')
                .map((x,i) => {
                    //change to page format
                    return (
                        <>
                            <Row>
                                <Col className="individual_photo" sm={12} md={8} lg={8} xl={8}>{x.path}</Col>
                                <Col className="info_card">
                                    <Row sm={12} md={4} lg={4} xl={4}>{x.name}</Row>
                                    <Row sm={12} md={4} lg={4} xl={4}>{x.ingredients}</Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={12} lg={12} xl={12}>{x.steps}</Col>
                            </Row>
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