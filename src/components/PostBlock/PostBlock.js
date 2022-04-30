import React from "react";

import PostForm from "../PostForm";

export default function PostBlock() {
  return (
    <div className="postBlock-bg">
      <div className="container">
        <div className="postBlock-wrapper">
          <h2 className="postBlock-header">Working with POST request</h2>
          <PostForm />
        </div>
      </div>
    </div>
  );
}
