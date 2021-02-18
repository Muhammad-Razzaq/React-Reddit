import React, { useState, useEffect } from "react";
import axios from "axios";
import './../Dashboard/dashboard.css';

function Reddit() {
    const [posts, setPosts] = useState([]);

    React.useEffect(() => {
        axios.get(`https://www.reddit.com/r/reactjs.json`)
            .then(res => {
                const newPost = res.data.data.children
                    .map(obj => obj.data);

                setPosts(newPost);
            });
    }, [])

    return (
        <>
            <div className="show">
                <h1 style={{textAlign:"center", textTransform:"uppercase"}}>Dashboard</h1>
                <h2 style={{textAlign:"center"}}>/r/reactjs</h2>
                    {posts.map(post => (
                        <div className="box">
                        <h3 key={post.id}>{post.title}</h3>
                        <span>{post.selftext}</span>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default Reddit;