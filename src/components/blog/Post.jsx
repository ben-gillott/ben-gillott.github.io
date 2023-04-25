import "./Post.scss";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

// import retro from "markdown-retro";

export default function Post() {
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

  //Post test
  return (
    <ReactMarkdown
      children={post}
      remarkPlugins={[remarkGfm]}
      className="markdown"
    />
  );

  //Syntax highlighting
  // return (
  //   <ReactMarkdown
  //     remarkPlugins={[remarkGfm]}
  //     children={post}
  //     components={{
  //       code({ node, inline, className, children, ...props }) {
  //         const match = /language-(\w+)/.exec(className || "");
  //         return !inline && match ? (
  //           <SyntaxHighlighter
  //             {...props}
  //             children={String(children).replace(/\n$/, "")}
  //             style={dark}
  //             language={match[1]}
  //             PreTag="div"
  //           />
  //         ) : (
  //           <code {...props} className={className}>
  //             {children}
  //           </code>
  //         );
  //       },
  //     }}
  //   />
  // );
}
