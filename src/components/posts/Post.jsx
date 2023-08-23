import "./Post.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostMetadata, downloadPost } from "./PostUtils.jsx";
import NoMatch from "../nomatch/NoMatch.jsx";

import ReactMarkdown from "react-markdown";
import remarkGFM from "remark-gfm";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState("loading");
  const [markdown, setMarkdown] = useState();

  useEffect(() => {
    getPostMetadata(slug).then((d) => setPost(d));
  }, [slug]);

  useEffect(() => {
    if (post !== "loading" && post !== undefined) {
      downloadPost(post.filename).then((d) => setMarkdown(d));
    }
  }, [post]);

  function code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter {...props} children={String(children).replace(/\n$/, "")} style={materialDark} language={match[1]} PreTag="div" />
    ) : (
      <code {...props} className={className}>
        {children}
      </code>
    );
  }

  //Three cases: The page is loading (default state), it is undefined (metadata fetch failed), else assume working
  if (post === "loading") {
    return <div className="container" />;
  } else if (post === undefined) {
    return <NoMatch />;
  } else {
    return (
      <div className="container">
        <div className="header">
          <h4 className="date"> {post.date} </h4>
          <h1 className="title"> {post.title} </h1>
          <p className="description"> {post.description} </p>

          <img className="thumbnail" src={post.img} alt="Thumbnail" />
        </div>
        <ReactMarkdown className="markdown" remarkPlugins={[remarkGFM, remarkMath]} rehypePlugins={[rehypeMathjax, rehypeRaw]} components={{ code: code }} children={markdown} />
      </div>
    );
  }
}
