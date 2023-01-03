import './Blog.css'
import React from 'react';
import Markdown from "markdown-to-jsx"
import {useEffect, useState} from "react"

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
    return (
        <div>
            <img src={"https://mime-rs.b-cdn.net/play/tired?text=" + time + "+" + "and you should be coding"} alt="meme"/>
            <article className="article">
                <div className="container">
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