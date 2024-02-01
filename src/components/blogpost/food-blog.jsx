import React, { useEffect, useRef, useState } from "react";
import "./FoodBlog.css";
import Section2 from "./2section";
import { Link } from "react-router-dom";
const FoodBlog = () => {
  const postsContainerRef = useRef(null);
  const [showNewPost, setShowNewPost] = useState(false);

  const handleAddPostClick = () => {
    setShowNewPost(true);
  };

  const [Uposts, setUPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const response = await fetch("http://localhost:4000/user/all-posts");
      const json = await response.json();
      setUPosts(json);
      console.log(json);
    };
    fetchAllPosts();
  }, []);

  return (
    <div>
      <div className="icon-container">
        <Link to={"/add"}>
          <button className="add-post-button" onClick={handleAddPostClick}>
            <i className="fa fa-plus fa-solid fa-lg"></i>
          </button>
        </Link>
        <div className="popup">add your post</div>
      </div>

      <h2
        style={{
          fontFamily: "cursive",
          fontStyle: "oblique",
          textAlign: "center",
          backgroundColor: "rgba(33, 73, 42, 0.8)",
          padding: "10px",
          color: "white",
        }}
      >
        Recent blogs
      </h2>
      {Uposts.map((item) => {
        return (
          <Section2
            key={item._id}
            title={item.title}
            procedure={item.procedure}
            ingredients={item.ingredients}
            imageUrl={item.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default FoodBlog;
