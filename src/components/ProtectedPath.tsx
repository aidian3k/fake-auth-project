import React, { FC } from "react";
import { fakeAuthenticationProvider } from "../core/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedPath: FC = () => {
  const location = useLocation();

  if (!fakeAuthenticationProvider.isAuthenticated) {
    return (
      <Navigate to={"/login"} state={{ historyPath: location.pathname }} />
    );
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};
