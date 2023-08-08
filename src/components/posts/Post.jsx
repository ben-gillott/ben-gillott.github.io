import "./Post.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import remarkGFM from "remark-gfm";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import rehypeRaw from "rehype-raw";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Post(props) {
  const [markdown, setMarkdown] = useState();

  useEffect(() => {
    console.log("Post use effect");
    async function downloadPost() {
      console.log("downloading post");
      const client = axios.create({
        baseURL: props.url,
      });
      setMarkdown((await client.get()).data);
    }

    downloadPost();
  }, [props]);

  function code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter {...props} children={String(children).replace(/\n$/, "")} style={coy} language={match[1]} PreTag="div" />
    ) : (
      <code {...props} className={className}>
        {children}
      </code>
    );
  }

  const BlogPosts = {
    "first-blog-post": {
      title: "First Blog Post",
      description: "Hello lorem ipsum",
    },
    "second-blog-post": {
      title: "Second Blog Post",
      description: "Hello React Router v6",
    },
  };

  const { slug } = useParams();
  const post = BlogPosts[slug];
  if (!post) {
    return <span>The blog post you've requested doesn't exist.</span>;
  }
  const { title, description } = post;

  return (
    <div className="container">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  // //Post test
  // return (
  //   <div className="container">
  //     <h1> Post Title </h1>
  //     <p> Post Content </p>
  //     {/* <ReactMarkdown className="markdown" remarkPlugins={[remarkGFM, remarkMath]} rehypePlugins={[rehypeMathjax, rehypeRaw]} components={{ code: code }} children={markdown} /> */}
  //   </div>
  // );
}
