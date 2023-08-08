import "./Post.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostMetadata, downloadPost } from "./PostUtils.jsx";

import ReactMarkdown from "react-markdown";
import remarkGFM from "remark-gfm";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import rehypeRaw from "rehype-raw";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Post() {
  const { slug } = useParams();
  const [markdown, setMarkdown] = useState();
  const [post, setPost] = useState();

  useEffect(() => {
    getPostMetadata(slug).then((d) => setPost(d));
  }, [slug]);

  useEffect(() => {
    if (post !== undefined) {
      downloadPost(post.download_url).then((d) => setMarkdown(d));
    }
  }, [post]);

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

  if (post === undefined) {
    return (
      <div container="container">
        <h1> That page does not exist.</h1>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1> Title {post.name} </h1>
        <p> {post.download_url} </p>
        <ReactMarkdown className="markdown" remarkPlugins={[remarkGFM, remarkMath]} rehypePlugins={[rehypeMathjax, rehypeRaw]} components={{ code: code }} children={markdown} />
      </div>
    );
  }
}
