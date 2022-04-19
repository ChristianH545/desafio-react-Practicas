import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// RUTAS
import App from "./App";
import Detalles from "./pages/Detalles";
import Home from "./pages/Home";
import Capitulos from "./pages/Capitulos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route index element={<Home />} />
      <Route exact path="/detalle/:id" element={<Detalles />} />
      <Route exact path="/capitulos/:id" element={<Capitulos />} />
    </Routes>
  </BrowserRouter>
);
