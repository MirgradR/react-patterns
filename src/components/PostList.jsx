import React from "react";

const PostList = ({ children }) => {
  const [activePost, setActivePost] = React.useState(null);

  const handleSelectPost = (postId) => setActivePost(postId);

  return React.Children.map(children, (child) =>
    React.cloneElement(child, { activePost, onSelect: handleSelectPost })
  );
};

PostList.Item = ({ post, activePost, onSelect }) => (
  <div
    className={`post-item ${activePost === post.id ? "active" : ""}`}
    onClick={() => onSelect(post.id)}
  >
    <h4>{post.title}</h4>
    {activePost === post.id && <p>{post.body}</p>}
  </div>
);

PostList.Item.displayName = "PostListItem";

export default PostList;
