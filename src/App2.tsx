import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { BasicPathOutlet } from "./components/BasicPathOutlet";
import { ProtectedPath } from "./components/ProtectedPath";
import { LoginPage } from "./components/LoginPage";
import { PrivatePage } from "./components/PrivatePage";
import { fakeAuthenticationProvider } from "./core/auth";

function App() {
  const handlePrivateLoader = () => {
    if (!fakeAuthenticationProvider.isAuthenticated) {
      return redirect("/login");
    }

    return {};
  };

  const router = createBrowserRouter([
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "/",
      element: <BasicPathOutlet />,
      children: [
        {
          path: "main",
          element: <div>This is main</div>,
        },
        {
          path: "private",
          element: <ProtectedPath />,
          loader: handlePrivateLoader,
          children: [
            {
              path: "first",
              element: <PrivatePage title={"First private page"} />,
            },
            {
              path: "second",
              element: <PrivatePage title={"Second private page"} />,
            },
          ],
        },
      ],
    },
    {},
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
