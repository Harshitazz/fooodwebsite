import React, { useEffect, useRef, useState } from "react";
import "./2section.css";
import { server } from "../../App";
const Section2 = ({ title, procedure, ingredients, imageUrl }) => {
  return (
    <div className="food-blog2">
      <div className="post-container">
        <img
          src={`${server}/image/${imageUrl}`}
          alt={title}
          className="post-image"
        />
        <h2 className="post-title">{title}</h2>
        <div className="post-procedure">
          <h2>Procedure</h2>
          <p>{procedure}</p>
        </div>
        <div className="post-ingredients">
          <h3>Ingredients:</h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section2;
