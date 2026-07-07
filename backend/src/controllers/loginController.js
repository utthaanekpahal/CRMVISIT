import jwt from "jsonwebtoken";

const USER = {
  email: "admin@gmail.com",
  password: "123456",
};

export const login = (req, res) => {
  const { email, password } = req.body;

  if (email !== USER.email) {
    return res.status(401).json({
      success: false,
      message: "Invalid Email",
    });
  }

  if (password !== USER.password) {
    return res.status(401).json({
      success: false,
      message: "Invalid Password",
    });
  }

  const token = jwt.sign(
    { email: USER.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
res.cookie("token", token, {
  httpOnly: true,
  secure: false,      // true in production (HTTPS)
  sameSite: "lax",
  maxAge: 24 * 60 * 60 * 1000,
});

  res.json({
    success: true,
    message: "Login Successful",
    token,
  });
};