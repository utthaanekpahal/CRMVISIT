import User from "../model/User.js";
import bcrypt from "bcryptjs";

// Create Sub Admin
export const createSubAdmin = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, Email and Password are required",
      });
    }

    // Check if email already exists
    const existingUser = await User.findOne({
      email: email.trim().toLowerCase(),
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create Sub Admin
    const subAdmin = await User.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password: hashedPassword,
      role: "subadmin",
    });

    res.status(201).json({
      success: true,
      message: "Sub Admin Created Successfully",
      data: {
        id: subAdmin._id,
        name: subAdmin.name,
        email: subAdmin.email,
        role: subAdmin.role,
      },
    });
  } catch (error) {
    console.error("CREATE SUB ADMIN ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};