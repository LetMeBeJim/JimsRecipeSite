import '../../../App.css'
import './page.css'
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
                {data ?  (data.recipe.filter((item) => item._id=== 1)
                .map((x,i) => {
                    //change to page format
                    return (
                        <>
                            <div className="top-buffer"></div>
                            <Row>
                                <Col className="individual_photo_container" sm={12} md={6} lg={6} xl={6}>
                                    <img className="individual_photo" alt="loading" src={x.path} />
                                </Col>
                                <Col className="info_card">
                                    <Row sm={12} md={6} lg={6} xl={6}>{x.name}</Row>
                                    <Row sm={12} md={6} lg={6} xl={6}>{x.ingredients}</Row>
                                </Col>
                            </Row>
                            <div className="top-buffer"></div>
                            <Row>
                                <Col sm={12} md={12} lg={12} xl={12}>
                                    {
                                        x.steps.split(".").map(function(item, idx) {
                                            if (item === ""){
                                                return (
                                                    ""
                                                );
                                            }
                                            return (
                                                <span key={idx}>
                                                    {idx+1}.{item}
                                                    <br/>
                                                    <br/>
                                                </span>
                                            )
                                        })
                                    }
                                </Col>
                            </Row>
                            <div className="top-buffer"></div>
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