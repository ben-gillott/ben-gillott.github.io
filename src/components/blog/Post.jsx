import "./Post.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import math from "remark-math";
import katex from "rehype-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Post(props) {
  const [markdown, setMarkdown] = useState();
  const [ran, setRan] = useState(false);

  useEffect(() => {
    if (!ran) {
      downloadPost();
      setRan(true);
    }
  });

  async function downloadPost() {
    const client = axios.create({
      baseURL: props.url,
    });
    const response = await client.get();
    setMarkdown(response.data);
  }

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
    <div className="markdown">
      <ReactMarkdown remarkPlugins={[gfm, math, katex]} components={{ code: code }} children={markdown} />
    </div>
  );
}
