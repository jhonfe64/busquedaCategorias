import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import App from "./App.jsx";
import Categoria from "./pages/Categoria.jsx";
import Resultados from "./pages/Resultados.jsx";
import Categorias from "./pages/Categorias.jsx";
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header/>
    <BrowserRouter>
      <div className="px-8 max-w-5xl m-auto">
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/categoria/:nombreCategoria" element={<Categoria />}></Route>
          <Route path="/categoria/:nombreCategoria/:nombreSubcategoria" element={<Resultados/>}></Route>
          <Route path="/categorias" element={<Categorias/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
);
