import jwt from "jsonwebtoken";

export const sendCookie = (user, res, message) => {
  const token = jwt.sign({ _id: user._id }, "sjfldsjfjkddfsu");
  res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 20 * 60 * 1000,
      sameSite: "none",
      secure: true,
      path: "/",
    })
    .json({
      success: true,
      message,
    });
};
