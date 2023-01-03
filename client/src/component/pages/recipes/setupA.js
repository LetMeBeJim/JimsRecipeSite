import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function setupA(x) {
    return (
        <>
        <div className="top-buffer"></div>
        <Row>
            <Col className="individual_photo_container" sm={12} md={6} lg={6} xl={6}>
                <img className="individual_photo" alt="loading" src={x.path} />
            </Col>
            <Col className="info_card">
                <Row sm={12} md={6} lg={6} xl={6}>{x.name}</Row>
                <Row sm={12} md={6} lg={6} xl={6}>
                    {
                        x.ingredients.split(",").map(function(item, idx) {
                            if (item === ""){
                                return (
                                    ""
                                );
                            }
                            return (
                                <Col key={idx} sm={12} md={12} lg={12} xl={12}>
                                    <ul>
                                        <li><span key={idx}>
                                            {item}
                                            <br/>
                                        </span></li>
                                    </ul>
                                </Col>
                            )
                        })
                    }
                </Row>
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
}

export function setupB() {
    return(
        <div>hello</div>
    )
}