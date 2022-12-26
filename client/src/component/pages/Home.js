import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import '../../App.css'


function Home() {

    return (
        <>
            <div className="container">
                <div className="home-container">
                    <div className="foreword">
                        <h2>Welcome!</h2>
                        <p>Welcome to my super cute site, presented to you by me, Jim! Personally, I really like my site, the orange theme is quite refreshing. I hope this page makes your day brighter.</p>
                        <p>Originally, this site is for featuring my favourite recipes, but now I think it would be a better idea to turn it into a more generalized personal website. But, right now, there is a lot of work to be done, so the site is going to be really empty.</p>
                        <p>I am an engineer, a soon-to-be computer scientist, with, even though a lot of my friends would disagree, a good taste in picking colour. Explore everything I have here and enjoy your stay!</p>
                    </div>
                    <div className="pic-1">
                        <img src={'/images/a.jpg'} alt="pic-2" />
                        <div className="text-over">Hello!</div>
                    </div>
                    <div className="txt-1"> 
                        <p>The picture that I wanted isn't here right now, I'm working on picking one and updating this picture.</p>
                        <p>I made a hover over effect for the images, so if you hover over them there are little words that appear, I think they are pretty cute.</p>
                        <p>I studied Chemical Engineering at the University of Toronto, and I am finishing up Computer Science at Toronto Metropolitan University. Overall, Toronto is a pretty good place from my experiences. Food choices get boring after a while though.</p>
                    </div>
                    <div className="vid-1">
                        <img src={'/images/gif1.gif'} alt="loading..." />
                        <div className="text-over-2">Nice to see you!</div>
                    </div>
                    <div className="txt-2">
                        <h2>About This Site</h2>
                        <p>Now, the fate of this site is still uncertain, but it will go through a lot more constructions.</p>
                        <p>Likely, this will turn out to be a place to hold my hobbies and maybe even a to-do list.</p>
                        <p>Why recipe? Because, after having no idea about what to have for dinner one time too many, I decided to order Hello Fresh, and since then I have always wanted to perserve the recipes I got in some place more permanent.</p>
                        <p>Of course, the recipes from Hello Fresh hasn't been added to the database, soon though.</p>
                        <br></br>
                    </div>
                    <div className="pic-2">
                        <img src={'/images/b.jpg'} alt="pic-2" />
                        <div className="text-over">你好!</div>
                    </div>
                    <div className="vid-2">
                        <img src={'/images/gif2.gif'} alt="loading..." />
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
                                    <img src={'/images/project1.jpg'}  alt="loading..."/>
                                </a>
                            </div>
                            <div className="project">
                                <Link>
                                    <img src={'/images/project2.jpg'} alt="loading..."/>
                                </Link>
                            </div>
                            <div className="project">
                                <Link>
                                    <img src={'/images/project2.jpg'} alt="loading..."/>
                                </Link>
                            </div>
                            <div className="project">
                                <Link>
                                    <img src={'/images/project2.jpg'} alt="loading..."/>
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