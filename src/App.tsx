import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BasicPathOutlet } from "./components/BasicPathOutlet";
import { ProtectedPath } from "./components/ProtectedPath";
import { LoginPage } from "./components/LoginPage";
import { PrivatePage } from "./components/PrivatePage";
import { NotFound } from "./components/NotFound";
import { MainPage } from "./components/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<BasicPathOutlet />}>
          <Route path={"main"} element={<MainPage />}></Route>
          <Route path={"private"} element={<ProtectedPath />}>
            <Route
              path={"first"}
              element={<PrivatePage title={"Welcome on first private page"} />}
            ></Route>
            <Route
              path={"second"}
              element={<PrivatePage title={"Welcome on second private page"} />}
            ></Route>
          </Route>
        </Route>
        <Route path={"login"} element={<LoginPage />}></Route>
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
