import "./Post.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
  }, [props.url]);

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

  //Post test
  return (
    <div className="container">
      <p> Hello post </p>
      <ReactMarkdown className="markdown" remarkPlugins={[remarkGFM, remarkMath]} rehypePlugins={[rehypeMathjax, rehypeRaw]} components={{ code: code }} children={markdown} />
    </div>
  );
}
