import "./Blog.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

// const post = https://api.github.com/repos/{username}/{repository_name}/contents/{file_path}
// const uri = "https://api.github.com/repos/ben-gillott/ben-gillott.github.io/contents/src/assets/posts/simple.md"
const client = axios.create({
  baseURL: "https://raw.githubusercontent.com/ben-gillott/ben-gillott.github.io/src/src/assets/posts",
});

export default function Blog() {
  const [post, setPost] = React.useState("Loading");

  React.useEffect(() => {
    getPost();
  }, []);

  async function getPost() {
    const response = await client.get("/simple.md");
    setPost(response.data);
    console.log(response.data);
  }
  getPost();

  //Post test
  return (
    <div className="blog">
      <p>{post}</p>
    </div>
  );
}
