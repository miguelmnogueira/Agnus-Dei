import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./styles/index.css";
import App from "./App.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Cart from "./pages/CartPage.jsx";
import Nav from "./components/Nav.jsx";
import Admin from "./pages/Admin.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/" element={<ProductPage />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    </BrowserRouter>
);
