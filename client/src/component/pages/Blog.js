import './Blog.css'
import React from 'react';
import Markdown from "markdown-to-jsx"
import {useEffect, useState} from "react"

function Blog() {
    const [postContent, setPostContent] = useState("");
    console.log(postContent);

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
    )
} 

export default Blog