import './Blog.css'
import React from 'react';
import Markdown from "markdown-to-jsx"
import {useEffect, useState} from "react"
import { DataTasks } from '../data.js';

function Blog() {
    const [postContent, setPostContent] = useState("");
    console.log(postContent);
    const current = new Date();

    const time = current.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    useEffect(() => {
        import("./Markdown/article.md")
            .then(res => {
                fetch(res.default)
                    .then(response=>response.text())
                    .then(response => setPostContent(response))
                    .catch(err => console.log(err));
            })
    }, []);
    const data = DataTasks();
    const refresh = () => window.location.reload()
    return (
        <div>
            <img src={"https://mime-rs.b-cdn.net/play/tired?text=" + time + "+ and you should be coding"} alt="meme"/>
            <article className="article">
                <div className="container">
                <div className="todo">
                    <li>
                    {data ? (data.map((x, i) => {
                        //individual json object here
                        //ok _id change to insta link, name change to recipe name price change to time needed
                        return (
                            <>
                                <ul>{x.detail}</ul>
                            </>
                        )
                    })
                    ) : (
                        <div><p>Loading...</p>
                        {refresh}</div>
                    )}
                    </li>
                </div>
                <div className="blog_container">
                    <div className="post-wrapper">
                        <Markdown>
                            {postContent}
                        </Markdown>
                    </div>
                </div>
                </div>
            </article>
        </div>
        
    )
} 

export default Blog