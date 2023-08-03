import "./Post.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import math from "remark-math";
import katex from "rehype-katex";

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
    console.log(response.data);
    setMarkdown(response.data);
  }

  //Post test
  return (
    <div className="markdown">
      <ReactMarkdown remarkPlugins={[gfm, math, katex]} children={markdown} />
    </div>
  );
}
