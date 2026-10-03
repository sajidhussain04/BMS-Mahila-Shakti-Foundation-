// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShopByCategory from "./components/ShopByCategory";
import FeaturedProducts from "./components/FeaturedProducts";
import AboutSection from "./components/AboutSection";
import TestimonialsAndTips from "./components/TestimonialsAndTips";
import Footer from "./components/Footer";
import AllProducts from "./pages/AllProducts"; // ✅ import new page
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import ProductDetail from "./pages/ProductDetail";
import LoginPage from "./pages/LoginPage";
import CategoryPage from "./pages/CategoryPage";
import HealthEducation from "./pages/HealthEducation"; 
 import SalePage from "./pages/SalePage";

const App = () => {
  return (
    <>
      <Navbar />

      {/* Routes */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ShopByCategory />
              <FeaturedProducts />
              <AboutSection />
              <TestimonialsAndTips />
            </>
          }
        />

        {/* All Products Page */}
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/category/Health-Education" element={<HealthEducation />} />
       <Route path="/sale" element={<SalePage />} />



      </Routes>

      <Footer />
    </>
  );
};

export default App;
