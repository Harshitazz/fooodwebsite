import express from "express";
import { User } from "../models/users.js";
import { Post } from "../models/posts.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import { isAuthenticated } from "../utils/auth.js";
import path from "path";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    //added Date.now to distinct the image names when differenct users
    //uploads images with same name
    cb(null, `${file.fieldname}-${Date.now()}${ext}`);
  },
});

const upload = multer({ storage });

router.post("/register", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      const error = new Error("User Already Exist");
      return next(error);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    sendCookie(user, res, "Registered Successfully");
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      const error = new Error("Invalid Email or Password");
      return next(error);
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      const error = new Error("Invalid Email or Password");
      return next(error);
    }
    sendCookie(user, res, `Welcome back ${user.name}`);
  } catch (error) {
    next(error);
  }
});

router.get("/logout", (req, res) => {
  res
    .clearCookie("token", {
      sameSite: "none",
      httpOnly: true,
      secure: true,
    })
    .json({
      success: true,
      message: "Logged Out Successfully",
    });
});

router.post("/create-post", upload.single("image"), async (req, res, next) => {
  try {
    const { procedure, title, ingredients } = req.body;

    console.log(procedure, title, ingredients);

    console.log("req.file:", req.file);
    const post = await Post.create({
      title,
      imageUrl: req.file ? req.file.filename : null,
      procedure,
      ingredients,
    });

    res.status(200).json({
      success: true,
      message: "Post Added",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/all-posts", async (req, res, next) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    next(error);
  }
});

export default router;
