import React, { useRef, useState } from "react";
import "./Newblog.css"; // Import CSS file for styling
import { useNavigate } from "react-router-dom";
import { server } from "../../App";

const Newblog = () => {
  const navigate = useNavigate();

  const titleRef = useRef();
  const ingredientsRef = useRef();
  const procedureRef = useRef();
  const imageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", titleRef.current.value);
    const ingredientsList = ingredientsRef.current.value.split(" ");

    ingredientsList.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}]`, ingredient);
    });

    formData.append("procedure", procedureRef.current.value);
    formData.append("image", imageRef.current.files[0]);
    console.log(imageRef.current.files[0]);

    try {
      const response = await fetch(`${server}/user/create-post`, {
        method: "POST",
        credentials: "include",

        body: formData,
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        console.log("success");
        navigate("/blog");
      } else {
        console.log("not successed");
      }
    } catch (error) {
      console.log("Some error occurred !", error);
    }
  };

  return (
    <div className="new-post-container">
      <h2>Create a New Blog Post</h2>
      <form
        className="new-post-form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" ref={titleRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="content">Procedure:</label>
          <textarea id="content" name="content" ref={procedureRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="author">Ingredients:</label>
          <input
            type="text"
            id="author"
            name="author"
            ref={ingredientsRef}
            required
          />
        </div>
        {/* Add image input */}
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <div>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*" // Specify accepted file types (images in this case)
              ref={imageRef}
            />
          </div>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Newblog;
