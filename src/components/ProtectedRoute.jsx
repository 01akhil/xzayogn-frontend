import React from 'react';
import { Navigate,useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Check for the token
  const location = useLocation();

  return token ? children : <Navigate to="/login"state={{from:location}} />; // Redirect if not authenticated
};

export default ProtectedRoute;
