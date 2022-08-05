import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import _Layout from "./components/_Layout/_Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskPagination from "./components/TaskPagination";
import Home from "./components/Home";
import PrimeDividers from "./components/PrimeDividers";
import ValidateBrackets from "./components/ValidateBrackets";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<_Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/task-pagination" element={<TaskPagination />}></Route>
          <Route path="/prime-dividers" element={<PrimeDividers />}></Route>
          <Route
            path="/validate-brackets"
            element={<ValidateBrackets />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
