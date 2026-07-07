import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    // Get token from cookie
    const token = req.cookies.token;

    // Check if token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please Login",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Save user data
    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};

export default authMiddleware;