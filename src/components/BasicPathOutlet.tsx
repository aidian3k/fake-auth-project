import React, { FC, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { fakeAuthenticationProvider } from "../core/auth";

export const BasicPathOutlet: FC = () => {
  const [logoutAction, setLogoutAction] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    fakeAuthenticationProvider.signOut();
    setLogoutAction(!logoutAction);
    navigate("/main");
  };

  useEffect(() => {}, [logoutAction]);

  function basicLinkStyling() {
    return "block rounded md:bg-transparent text-blue-500 sp-0";
  }

  return (
    <>
      <nav className="border-gray-200 p-3 flex justify-between bg-gray-800">
        <div className={"flex gap-2"}>
          <Link
            to={"main"}
            className={
              location.pathname.includes("main")
                ? "font-bold " + basicLinkStyling()
                : "font-normal " + basicLinkStyling()
            }
          >
            Go to main page
          </Link>
          <Link
            to={"/private/first"}
            className={
              location.pathname.includes("first")
                ? "font-bold " + basicLinkStyling()
                : "font-normal " + basicLinkStyling()
            }
          >
            Go to the first private page
          </Link>
          {fakeAuthenticationProvider.isAuthenticated && (
            <Link
              to={"/private/second"}
              className={
                location.pathname.includes("second")
                  ? "font-bold " + basicLinkStyling()
                  : "font-normal " + basicLinkStyling()
              }
            >
              Go to the second private page
            </Link>
          )}
        </div>
        <div className={""}>
          {fakeAuthenticationProvider.isAuthenticated ? (
            <div className={"flex gap-2"}>
              <p className={"text-blue-500"}>
                Logged in as: {fakeAuthenticationProvider.username}
              </p>
              <button
                onClick={() => handleLogout()}
                className={"text-blue-500"}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login", { state: location.pathname })}
            >
              <p className={"text-blue-500"}>Login</p>
            </button>
          )}
        </div>
      </nav>

      <Outlet />
    </>
  );
};
