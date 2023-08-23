import "./PostList.scss";
import React, { useState, useEffect } from "react";
import { getPosts } from "./PostUtils.jsx";
import PostPreview from "../preview/PostPreview.jsx";
import Loader from "../loader/Loader.jsx";

export default function PostList() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPosts().then((d) => setPosts(d));
  }, []);

  return (
    <div className="postlist">
      <Loader className="centerLoader" elem={<h1 className="sectionTitle">Posts</h1>} />

      <div className="lineContainer">
        <Loader className="hLine" />
      </div>

      <div>
        {posts !== undefined &&
          Object.keys(posts).map((slug) => (
            <div className="previewContainer" key={slug} style={{ visibility: posts[slug].published ? "visible" : "hidden" }}>
              <Loader elem={<PostPreview key={slug} slug={slug} title={posts[slug].title} description={posts[slug].description} date={posts[slug].date} img={posts[slug].img} />} />
            </div>
          ))}
      </div>
    </div>
  );
}
