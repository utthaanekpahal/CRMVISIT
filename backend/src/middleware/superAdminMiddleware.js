const superAdminMiddleware = (req, res, next) => {
  try {
    // authMiddleware pehle hi req.user set kar chuka hoga

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Please Login",
      });
    }

    // Sirf Super Admin allow hoga
    if (req.user.role !== "superadmin") {
      return res.status(403).json({
        success: false,
        message: "Access Denied! Only Super Admin can perform this action.",
      });
    }

    next();

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export default superAdminMiddleware;