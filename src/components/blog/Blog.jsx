import "./Blog.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

const apiURI = "https://api.github.com/repos/ben-gillott/ben-gillott.github.io/contents/src/src/assets/posts/simple.md";
// const rawURI = "https://raw.githubusercontent.com/ben-gillott/ben-gillott.github.io/src/src/assets/posts";

const client = axios.create({
  baseURL: apiURI,
  headers: {
    Authorization: "Bearer AUTH_TOKEN_HERE",
  },
});

export default function Blog() {
  const [post, setPost] = React.useState("Loading");

  React.useEffect(() => {
    getPost();
  }, []);

  //AXIOS METHOD
  async function getPost() {
    const response = await client.get("/simple.md");
    setPost(response.data);
    console.log(response.data);
  }

  return (
    <div className="blog">
      <p>{post}</p>
    </div>
  );
}
