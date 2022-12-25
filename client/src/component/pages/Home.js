import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'
import '../../App.css'
import first_image from '../../images/1.jpg';
import second_image from '../../images/2.jpg';
import project1 from '../../images/project1.jpg';
import first_gif from '../../images/gif1.gif';
import second_gif from '../../images/gif2.gif';


function Home() {

    return (
        <>
            <div className="container">
                <div className="home-container">
                    <div className="foreword">
                        <h2>Welcome!</h2>
                        <p>Welcome to my super cute site, presented to you by me, Jim! Personally, visiting this site brings me joy, the orange theme makes me feel like I'm suddenly facing an autumn lake with gentle breezes and falling leaves. Plus, the thought of pumpkin spice cheers me up very well. I'm a big fan of minimalist design and autumn colour theme, I hope this page makes your day brighter.</p>
                        <p>Originally, this site is for featuring my favourite recipes, but now I think it would be a better idea to turn it into a more generalized personal website. I get to express myself a little bit, and present to everyone what I think is a cute website.</p>
                        <p>I am an engineer, a soon-to-be computer scientist, with, even though a lot of my friends would disagree, a good taste in picking colour. Explore everything I have here and enjoy your stay!</p>
                    </div>
                    <div className="pic-1">
                        <img src={first_image} alt="pic-2" />
                        <div className="text-over">Hello!</div>
                    </div>
                    <div className="txt-1">
                        <h2>My Time in Toronto</h2>
                        <p>In my opinion, this picture of Toronto kind of suits the aethestics of this website. I like Toronto, I have been in this city for maybe 8 years.</p>
                        <p>I studied Chemical Engineering at the University of Toronto, and I am finishing up Computer Science at Toronto Metropolitan University. Overall, Toronto is a pretty good place to live from my experiences. Maybe the city does have a little bit too many sushi places, and ramen places, and dim sum places.</p>
                    </div>
                    <div className="vid-1">
                        <img src={first_gif} alt="loading..." />
                        <div className="text-over-2">Nice to see you!</div>
                    </div>
                    <div className="txt-2">
                        <h2>About This Site</h2>
                        <p>Now, the fate of this site is still uncertain, but it will go through a lot more constructions</p>

                        <p>Why does it have to be recipe related? Well, because I have had too many days where I just can't think of what to have for dinner, even thought there are so many choices and recipes I know, I just can't pick! In the future, this site will have a function where it randomly selects a recipe for me, emails me the ingredients, and tells me in a very nice tone to start cooking.</p>
                        <br></br>
                    </div>
                    <div className="pic-2">
                        <img src={second_image} alt="pic-2" />
                        <div className="text-over">你好!</div>
                    </div>
                    <div className="vid-2">
                        <img src={second_gif} alt="loading..." />
                        <div className="text-over-2">My other projects</div>
                    </div>
                    <div className="projects">
                        <div className="project-row">
                            <div className="project-title">
                                Discord Bot
                            </div>
                            <div className="project-title">
                                WIP
                            </div>
                            <div className="project-title">
                                WIP
                            </div>
                            <div className="project-title">
                                WIP
                            </div>
                        </div>
                        <div className="project-row">
                            <div className="project">
                                <a href="https://github.com/LetMeBeJim/LilJasper">
                                    <img src={project1}  alt="loading..."/>
                                </a>
                            </div>
                            <div className="project">
                                <Link>
                                    <img src={project1} alt="loading..."/>
                                </Link>
                            </div>
                            <div className="project">
                                <Link>
                                    <img src={project1} alt="loading..."/>
                                </Link>
                            </div>
                            <div className="project">
                                <Link>
                                    <img src={project1} alt="loading..."/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}


export default Home