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
  const dummypost=[
    {
      title:'Spaghetti Carbonara',
      imageUrl:"https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-threeByTwoMediumAt2X-v2.jpg",
      procedure:`Bring a large pot of salted water to a boil.
      Add 350g of spaghetti to the boiling water and cook until al dente.
      While the spaghetti is cooking, heat a large skillet over medium heat.
      Add 150g of diced pancetta or guanciale to the skillet and cook until crispy.
      Optional: Add a minced clove of garlic to the skillet and cook until fragrant, about 1 minute.
      In a separate bowl, whisk together 3 large eggs, 1 cup of grated Pecorino Romano cheese, and a pinch of black pepper.
      Once the spaghetti is cooked, drain it, reserving some pasta water.
      Add the cooked spaghetti to the skillet with the pancetta or guanciale.
      Toss the spaghetti to combine and coat it with the rendered fat.
      Remove the skillet from the heat and quickly pour the egg and cheese mixture over the hot pasta.
      Toss continuously to evenly coat the spaghetti with the sauce.
      If the sauce is too thick, add a splash of reserved pasta water to loosen it up.
      Divide the Spaghetti Carbonara among plates or bowls.
      Garnish with chopped parsley and additional grated cheese if desired.
      Serve immediately while hot.`,
      ingredients:["350g spaghetti",
      "150g pancetta or guanciale"," diced 3 large eggs",
      "1 cup grated Pecorino Romano cheese",
      "1 clove garlic", "minced (optional)",
      "Salt and black pepper to taste",
      "Fresh parsley, chopped (for garnish)"]
    }, {
      title:'Wheat Bun',
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIh3c730fzluPHfhorB0ZiHAn2Ll4VaAjS2OX_MTUR4A&s",
      procedure:`Bring a large pot of salted water to a boil.
      Add 350g of spaghetti to the boiling water and cook until al dente.
      While the spaghetti is cooking, heat a large skillet over medium heat.
      Add 150g of diced pancetta or guanciale to the skillet and cook until crispy.
      Optional: Add a minced clove of garlic to the skillet and cook until fragrant, about 1 minute.
      In a separate bowl, whisk together 3 large eggs, 1 cup of grated Pecorino Romano cheese, and a pinch of black pepper.
      Once the spaghetti is cooked, drain it, reserving some pasta water.
      Add the cooked spaghetti to the skillet with the pancetta or guanciale.
      Toss the spaghetti to combine and coat it with the rendered fat.
      Remove the skillet from the heat and quickly pour the egg and cheese mixture over the hot pasta.
      Toss continuously to evenly coat the spaghetti with the sauce.
      If the sauce is too thick, add a splash of reserved pasta water to loosen it up.
      Divide the Spaghetti Carbonara among plates or bowls.
      Garnish with chopped parsley and additional grated cheese if desired.
      Serve immediately while hot.`,
      ingredients:["350g spaghetti",
      "150g pancetta or guanciale"," diced 3 large eggs",
      "1 cup grated Pecorino Romano cheese",
      "1 clove garlic", "minced (optional)",
      "Salt and black pepper to taste",
      "Fresh parsley, chopped (for garnish)"]
    },
  ]
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
      {dummypost.map((item) => {
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
