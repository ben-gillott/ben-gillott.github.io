import "./Posts.scss";
import { Outlet } from "react-router-dom";

export default function Posts() {
  return (
    <div className="posts">
      <Outlet />
    </div>
  );
}
