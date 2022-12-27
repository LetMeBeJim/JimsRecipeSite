import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'
import '../../App.css'


function Home() {

    return (
        <>
            <div className="container">
                <Container className="home-container" sm={12} md={12} lg={12} xl={12}>
                <div className="top-buffer"></div>
                    <Row className="foreword" sm={12} md={12} lg={12} xl={12}>
                        <h2>Welcome!</h2>
                        <p>Welcome to my super cute site, presented to you by me, Jim! Personally, I really like my site, the orange theme is quite refreshing. I hope this page makes your day brighter.</p>
                        <p>Originally, this site is for featuring my favourite recipes, but now I think it would be a better idea to turn it into a more generalized personal website. But, right now, there is a lot of work to be done, so the site is going to be really empty.</p>
                        <p>I am an engineer, a soon-to-be computer scientist, with, even though a lot of my friends would disagree, a good taste in picking colour. Explore everything I have here and enjoy your stay!</p>
                    </Row>
                    <div className="top-buffer"></div>
                    <Row className="first-row" sm={12} md={12} lg={12} xl={12}>
                        <Col className="pic-1" sm={12} md={12} lg={6} xl={6}>
                            <img src={'/images/a.jpg'} alt="pic-2" />
                        </Col>
                        <Col className="txt-1" sm={12} md={12} lg={6} xl={6}> 
                            <h2>About Me</h2>
                            <div className="top-buffer"></div>
                            <p>The picture that I wanted isn't here right now, I'm working on picking one and updating this picture.</p>
                            <p>I used to have a hover over effect for the images, so if you were to hover over them there are little words that appear, they will be back one day.</p>
                            <p>I studied Chemical Engineering at the University of Toronto, and I am finishing up Computer Science at Toronto Metropolitan University. Overall, Toronto is a pretty good place from my experiences. Food choices get boring after a while though.</p>
                        </Col>
                    </Row>
                    <div className="top-buffer"></div>
                    <Row className="vid-1" sm={12} md={12} lg={12} xl={12}>
                        <p>Welcome</p>
                    </Row>
                    <div className="top-buffer"></div>
                    <Row className="second-row" sm={12} md={12} lg={12} xl={12}>
                        <Col className="txt-2" sm={12} md={12} lg={6} xl={6}>
                            <h2>About This Site</h2>
                            <div className="top-buffer"></div>
                            <p>Now, the fate of this site is still uncertain, but it will go through a lot more constructions.</p>
                            <p>Likely, this will turn out to be a place to hold my hobbies and maybe even a to-do list.</p>
                            <p>Why recipe? Because, after having no idea about what to have for dinner one time too many, I decided to order Hello Fresh, and since then I have always wanted to perserve the recipes I got in some place more permanent.</p>
                            <p>Of course, the recipes from Hello Fresh hasn't been added to the database, soon though.</p>
                            <br></br>
                        </Col>
                        <Col className="pic-2" sm={12} md={12} lg={6} xl={6}>
                            <img src={'/images/b.jpg'} alt="pic-2" />
                        </Col>
                    </Row>
                    <div className="top-buffer"></div>
                    <Row className="vid-2" sm={12} md={12} lg={12} xl={12}>
                        <p>Projects</p>
                    </Row>
                    <div className="top-buffer"></div>
                    <Row className="projects" sm={12} md={12} lg={12} xl={12}>
                        <Row className="project-row" sm={12} md={12} lg={12} xl={12}>
                            <Col className="project-title" sm={3} md={3} lg={3} xl={3}>
                                Discord Bot
                            </Col>
                            <Col className="project-title" sm={3} md={3} lg={3} xl={3}>
                                WIP
                            </Col>
                            <Col className="project-title" sm={3} md={3} lg={3} xl={3}>
                                WIP
                            </Col>
                            <Col className="project-title" sm={3} md={3} lg={3} xl={3}>
                                WIP
                            </Col>
                        </Row>
                        <Row className="project-row" sm={12} md={12} lg={12} xl={12}>
                            <Col className="project" sm={3} md={3} lg={3} xl={3}>
                                <a href="https://github.com/LetMeBeJim/LilJasper">
                                    <img src={'/images/project1.jpg'}  alt="loading..."/>
                                </a>
                            </Col>
                            <Col className="project" sm={3} md={3} lg={3} xl={3}>
                                <Link>
                                    <img src={'/images/project2.jpg'} alt="loading..."/>
                                </Link>
                            </Col>
                            <Col className="project" sm={3} md={3} lg={3} xl={3}> 
                                <Link>
                                    <img src={'/images/project2.jpg'} alt="loading..."/>
                                </Link>
                            </Col>
                            <Col className="project" sm={3} md={3} lg={3} xl={3}>
                                <Link>
                                    <img src={'/images/project2.jpg'} alt="loading..."/>
                                </Link>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </div>
        </>
    )

}


export default Home