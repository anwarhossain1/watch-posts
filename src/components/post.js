import React from "react";
import { useHistory } from "react-router-dom";
const Post = ({ title }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/posts");
  };
  return (
    <div>
      Post
      <div>
        <button type="button" onClick={handleClick}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Post;
