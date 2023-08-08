import "./PostList.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "./PostUtils.jsx";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((d) => setPosts(d));
  }, []);

  return (
    <div className="postlist">
      <h1> PostLists: </h1>
      <ul>
        {posts.map((p) => (
          <li key={p.name}>
            <Link to={`/posts/${p.name}`}>
              <h3>{p.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
