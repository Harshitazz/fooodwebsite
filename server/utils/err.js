export const ErrorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal server error";

  return res.status(500).json({
    success: false,
    message: err.message,
  });
};
