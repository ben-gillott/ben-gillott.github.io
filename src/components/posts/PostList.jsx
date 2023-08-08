import "./PostList.scss";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import Post from "./Post.jsx";

import { Link } from "react-router-dom";

const client = axios.create({
  baseURL: "https://api.github.com/repos/ben-gillott/ben-gillott.github.io/contents/src/assets/posts?ref=src",
});

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("Blog useEffect");
    getPosts();
  }, []);

  async function getPosts() {
    const response = await client.get();

    function handleFile(p) {
      if (p.type === "file") {
        setPosts((posts) => [...posts, p]);
      }
    }

    response.data.map((p) => handleFile(p));
  }

  const BlogPosts = {
    "first-blog-post": {
      title: "First Blog Post",
      description: "Lorem ipsum dolor sit amet, consectetur adip.",
    },
    "second-blog-post": {
      title: "Second Blog Post",
      description: "Hello React Router v6",
    },
  };

  return (
    <div className="postlist">
      <h1> PostLists: </h1>
      <ul>
        {Object.entries(BlogPosts).map(([slug, { title }]) => (
          <li key={slug}>
            <Link to={`/posts/${slug}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
      {/* <Link to="/blog/simplepost"> Post </Link> */}

      {/* <ul>
        {posts.map((p) => (
          <Post key={p.name} rawname={p.name} url={p.download_url} />
        ))}
      </ul> */}
    </div>
  );
}
