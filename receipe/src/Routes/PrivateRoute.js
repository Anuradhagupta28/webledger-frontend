import React from "react";
import { useNavigate } from "react-router-dom";


export const PrivateRoute = ({ children }) => {
  const isLogin = localStorage.getItem("token");
  const navigate = useNavigate();

  if (!isLogin) {
    
    alert("please login")
    return navigate("/login");
  } else {
    return children;
  }
};