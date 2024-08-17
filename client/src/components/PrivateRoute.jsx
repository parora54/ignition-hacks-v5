// src/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ element }) => {
  const { user } = useAuth();

  return user ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
