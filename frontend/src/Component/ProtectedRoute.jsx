import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:5000/api/auth/check-auth", {
          withCredentials: true,
        });

        setIsAuth(true);
      } catch (err) {
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return isAuth ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;