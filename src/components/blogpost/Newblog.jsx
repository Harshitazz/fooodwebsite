import React, { useState } from "react";
import "./Newblog.css"; // Import CSS file for styling

const Newblog = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    image: null, // Add image property to formData
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    // Handle file input separately
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: e.target.files[0], // Only take the first file if multiple files are selected
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission (e.g., send data to server)
    console.log(formData);
    onClose(); // Close the form after submission
  };

  return (
    <div className="new-post-container">
      <h2>Create a New Blog Post</h2>
      <form className="new-post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Ingredients:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
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
              onChange={handleChange}
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
