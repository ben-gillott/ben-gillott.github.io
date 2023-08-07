import "./Posts.scss";
import { Outlet } from "react-router-dom";

export default function Posts() {
  return (
    <div className="posts">
      <h2>Blog</h2>
      <Outlet />
    </div>
  );
}
