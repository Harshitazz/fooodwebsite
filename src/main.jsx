import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About'
import FoodBlog from './components/blogpost/food-blog.jsx';
import Card from './components/blogpost/Card.jsx';
import Newblog from './components/blogpost/Newblog.jsx';
import Chatbot from './components/ChatBot/Chatbot.jsx';
import Final from './components/reciperecomendor/final.jsx';
import Login from './components/user/login.jsx';
import SignUp from './components/user/signup.jsx';
import Ngoform from './components/Ngoforms.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <FoodBlog />,
      },
      {
        path:"/add",
        element:<Newblog/>
      },
      {
        path:"/chatAI",
        element:<Chatbot/>
      },
      {
        path:"/dailyrecipe",
        element:<Final/>
      },
      {path:"/sign-in" ,element:<Login/>},
      {path:"/sign-up" ,element:<SignUp/>},
      {path:"/Ngoforms" ,element:<Ngoform/>},
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
