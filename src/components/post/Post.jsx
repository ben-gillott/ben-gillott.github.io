import "./Post.scss";

import { NotionAPI } from "notion-client";
import React from "react";
// import { NotionRenderer } from 'react-notion-x'

const notion = new NotionAPI();
const recordMap = await notion.getPage("067dd719a912471ea9a3ac10710e7fdf");

export default function Post() {
  return (
    <div>
      <h1>Notion header:</h1>
      {/* <NotionRenderer blockMap={data} /> */}
    </div>
  );
}
