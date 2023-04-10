import "./Post.scss";

import Markdown from "markdown-to-jsx";
import React, { useState, useEffect } from "react";

export default function Post(props) {
  const file_name = "test.md";
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

  return (
    <div className="container">
      <Markdown>{post}</Markdown>
    </div>
  );
}
