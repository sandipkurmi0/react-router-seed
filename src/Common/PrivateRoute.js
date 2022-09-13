import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ authenticated }) => {
  const auth = authenticated;
  return <div>{auth ? <Outlet /> : <Navigate to={"/"} />}</div>;
};

export default PrivateRoute;
