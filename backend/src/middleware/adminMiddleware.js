const adminMiddleware = (req, res, next) => {
  try {
    // req.user authMiddleware se aata hai

    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access Denied! Admin Only",
      });
    }

    // Admin hai to next controller pe jao
    next();

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export default adminMiddleware;