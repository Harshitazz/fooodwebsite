import express from "express";
import { mongoDb } from "./data/connection.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.js";
import { ErrorMiddleware } from "./utils/err.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const app = express();

mongoDb();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve uploads directory as static
app.use("/image", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("Heyy");
});

app.use("/user", userRouter);

app.use(ErrorMiddleware);

app.listen(4000, () => {
  console.log("Server is listening...");
});

// routes
// login register allPostsFetch postCreation
