import React from "react";
//import Spinner from "../Spinner/Spinner";

const Posts = ({storys, loading}) => {
   if (loading) {
    return <h2>Loading.....</h2>;
  }

  return (
    <ul className="list-group mb-4 ">
      {storys.map(story => (
        <li key={story.id}  className="list-group-item pr-4">
          {story.id}
          {story.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
