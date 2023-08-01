import "./Post.scss";
import React, { useState, useEffect } from "react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import retro from "markdown-retro";
import axios from "axios";

export default function Post(props) {
  const [markdown, setMarkdown] = useState();
  var ran = false;

  useEffect(() => {
    if (!ran) {
      downloadPost();
    }
  });

  async function downloadPost() {
    const client = axios.create({
      baseURL: props.url,
    });
    const response = await client.get();
    console.log(response.data);
    setMarkdown(response.data);
  }

  // const [post, setPost] = useState("");

  // useEffect(() => {
  //   import(`../../assets/posts/${file_name}`)
  //     .then((res) => {
  //       fetch(res.default)
  //         .then((res) => res.text())
  //         .then((res) => setPost(res))
  //         .catch((err) => console.log(err));
  //     })
  //     .catch((err) => console.log(err));
  // });

  //Post test
  // return <ReactMarkdown children={post} remarkPlugins={[remarkGfm]} className="markdown" />;
  return (
    <div className="markdown">
      <p> Markdown: {markdown} </p>
      <hr />
    </div>
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
