import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getUserDetails } from "../services/userServices";

export const CheckUserLogin = ({ children }) => {
  const location = useLocation();
  const user = getUserDetails();
  if (user?.email) {
    return <Navigate to="/admin/blogs" state={{ path: location.pathname }} />;
  }

  return children;
};
