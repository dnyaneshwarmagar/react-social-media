import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail.jsx";
import Home from "./components/Home.jsx";
import store  from "./app/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}></Provider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="item/:id" element={<ItemDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
