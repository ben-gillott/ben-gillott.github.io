import "./PostList.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "./PostUtils.jsx";

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
                <div className="postLink">
                  <h3>{posts[slug].headline}</h3>
                  <h4>{posts[slug].date} </h4>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
