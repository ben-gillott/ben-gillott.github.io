import "./Post.scss";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// var md = require("../../assets/posts/simple.md");

export default function Post() {
  // const markdown = `Just a link: https://reactjs.com.`;
  const file_name = "simple.md";
  const [post, setPost] = useState("");

  useEffect(() => {
    import(`../../assets/posts/${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  return <ReactMarkdown children={post} remarkPlugins={[remarkGfm]} />;
}
