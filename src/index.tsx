import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Layout from "./_Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginationTask from "./pages/PaginationTask/PaginationTask";
import Home from "./pages/Home/Home";
import PrimeDividers from "./pages/PrimeDividers/PrimeDividers";
import ValidateBrackets from "./pages/ValidateBrackets/ValidateBrackets";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="task-pagination" element={<PaginationTask />}></Route>
          <Route path="prime-dividers" element={<PrimeDividers />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
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
