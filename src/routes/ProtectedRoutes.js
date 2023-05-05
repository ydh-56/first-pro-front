import React from "react";
import { Outlet, Navigate, Route, redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ isLoggedIn }) => {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn) {
    return isLoggedIn === true && loggedIn === true ? <Outlet /> : <Navigate to="/" />;
  } else {
    return isLoggedIn === false && loggedIn === false ? <Outlet /> : <Navigate to="/" />;
  }
};

export default ProtectedRoutes;
