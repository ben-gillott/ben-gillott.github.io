import "./PostList.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "./PostUtils.jsx";
import Preview from "../preview/Preview.jsx";
import Loader from "../loader/Loader.jsx";

export default function PostList() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPosts().then((d) => setPosts(d));
  }, []);

  return (
    <div className="postlist">
      <h1> PostLists: </h1>
      <ul>
        {posts !== undefined &&
          Object.keys(posts).map((slug) => (
            <li key={slug} style={{ visibility: posts[slug].published ? "visible" : "hidden" }}>
              <Link to={`/posts/${slug}`}>
                <Loader elem={<Preview key={slug} title={posts[slug].title} date={posts[slug].date} img={posts[slug].img} type="blog" />} />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
