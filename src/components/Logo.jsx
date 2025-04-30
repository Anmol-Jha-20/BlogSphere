import React from "react";
import BlogSphere from "../assets/BlogSphere.png";

function Logo({ width = "100px" }) {
  return (
    <div>
      <img src={BlogSphere} alt="Logo" width={50} className="rounded" />
    </div>
  );
}

export default Logo;
