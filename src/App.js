import Navbar from "./components/navbar";
import Card from "./components/card";
import Alert from "./components/alert";
import Home from "./pages/home";
import Menu from "./components/menu";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product";
import Category from "./pages/category";
import Categories from "./pages/categories";
import Cart from "./pages/cart";
import FilterContextProvider from "./FilterContext";
import ThemeButton from "./components/themeButton";

function App() {
  useEffect(() => {
    document.body.className = "dark:bg-slate-600";
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <FilterContextProvider>
        <div
          style={{ paddingTop: 80 }}
          className="flex align-center justify-center"
        >
          <ThemeButton />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/categories/:id" element={<Category />} />
            <Route path="categories" element={<Categories />} />
            <Route path="invoices" element={<Product />} />
          </Routes>
        </div>
      </FilterContextProvider>
    </BrowserRouter>
  );
}

export default App;
