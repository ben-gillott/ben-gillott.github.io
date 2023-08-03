import "./Blog.scss";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post.jsx";

const client = axios.create({
  baseURL: "https://api.github.com/repos/ben-gillott/ben-gillott.github.io/contents/src/assets/posts?ref=src",
});
var ran = false;

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!ran) {
      getPosts();
      ran = true;
    }
  }, []);

  async function getPosts() {
    const response = await client.get();

    function handleFile(p) {
      if (p.type === "file" && p.name === "simple.md") {
        setPosts((posts) => [...posts, p.download_url]);
      }
    }
    response.data.map((p) => handleFile(p));
  }

  return (
    <div className="blog">
      <ul>
        {posts.map((p) => (
          <Post key={p} url={p} />
        ))}
      </ul>
    </div>
  );
}
