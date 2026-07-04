import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    console.log(formData);
    alert("Login Successful!");
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="logo">
          <div className="logo-circle">L</div>
          <h2>Welcome Back</h2>
          <p>Sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />

              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="/">Forgot Password?</a>
          </div>

          <button className="login-btn">Login</button>

          <div className="signup">
            Don't have an account? <a href="/">Sign Up</a>
          </div>

        </form>

      </div>
    </div>
  );
};

export default Login;