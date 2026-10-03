import React, { useState } from "react";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();

  const handleCartClick = () => navigate("/cart");
  const handleWishlistClick = () => navigate("/wishlist");
  const handleLoginClick = () => navigate("/login");

  return (
    <div className="shadow bg-white sticky top-0 z-50">
      {/* Top Navbar */}
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* ✅ Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="BMS Foundation" className="w-10 h-10" />
          <h1 className="text-xl font-bold text-[#8a0351] hover:text-purple-900 transition-colors duration-200">
            BMS Foundation
          </h1>
        </Link>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-6">
          <select className="border border-gray-300 rounded-l-md px-2 text-sm focus:outline-none">
            <option>All</option>
            <option>Sanitary Pads</option>
            <option>Menstrual Cups</option>
            <option>Herbal Products</option>
          </select>
          <input
            type="text"
            placeholder="Search for sanitary pads, menstrual cups, wellness products."
            className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none"
          />
          <button className="bg-[#8a0351] text-white px-4 rounded-r-md flex items-center justify-center">
            <FaSearch />
            <span className="ml-1">Search</span>
          </button>
        </div>

        {/* Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          {/* 👤 Login */}
          <div
            className="flex flex-col items-center text-sm text-gray-700 cursor-pointer hover:text-[#8a0351] transition"
            onClick={handleLoginClick}
          >
            <FaUser className="text-lg" />
            <span>Login</span>
          </div>

          {/* ❤️ Wishlist */}
          <div
            className="relative flex flex-col items-center text-sm text-gray-700 cursor-pointer hover:text-[#8a0351]"
            onClick={handleWishlistClick}
          >
            <FaHeart className="text-lg" />
            <span>Wishlist</span>
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs px-1.5 rounded-full">
                {wishlist.length}
              </span>
            )}
          </div>

          {/* 🛒 Cart */}
          <div
            className="relative flex flex-col items-center text-sm text-gray-700 cursor-pointer hover:text-[#8a0351]"
            onClick={handleCartClick}
          >
            <FaShoppingCart className="text-lg" />
            <span>Cart</span>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs px-1.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-4">
          <div
            className="flex flex-col items-center text-sm cursor-pointer"
            onClick={handleLoginClick}
          >
            <FaUser />
            <span>Login</span>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block border-t text-sm bg-white">
        <div className="container mx-auto flex justify-center space-x-6 px-4 py-2 text-gray-700">
          <Link to="/all-products" className="hover:text-[#8a0351]">
            All Products
          </Link>
          <Link to="/category/Sanitary-Pads" className="hover:text-[#8a0351]">
            Sanitary Pads
          </Link>
          <Link to="/category/Menstrual-Cups" className="hover:text-[#8a0351]">
            Menstrual Cups
          </Link>
          <Link to="/category/Wellness-Kits" className="hover:text-[#8a0351]">
            Wellness Kits
          </Link>
          <Link to="/category/Herbal-Products" className="hover:text-[#8a0351]">
            Herbal Products
          </Link>
          <Link to="/category/Health-Education" className="hover:text-[#8a0351]">
            Health Education
          </Link>
          <Link to="/sale" className="text-orange-600 font-medium">
            Sale
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-3 space-y-4 text-gray-700">
          {/* Search bar (mobile) */}
          <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none"
            />
            <button className="bg-[#8a0351] text-white px-4 flex items-center justify-center">
              <FaSearch />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-3">
            <Link to="/all-products" onClick={() => setMenuOpen(false)}>
              All Products
            </Link>
            <Link to="/category/Sanitary-Pads" onClick={() => setMenuOpen(false)}>
              Sanitary Pads
            </Link>
            <Link to="/category/Menstrual-Cups" onClick={() => setMenuOpen(false)}>
              Menstrual Cups
            </Link>
            <Link to="/category/Wellness-Kits" onClick={() => setMenuOpen(false)}>
              Wellness Kits
            </Link>
            <Link to="/category/Herbal-Products" onClick={() => setMenuOpen(false)}>
              Herbal Products
            </Link>
            <Link
              to="/category/Health-Education"
              onClick={() => setMenuOpen(false)}
            >
              Health Education
            </Link>
            <Link
              to="/sale"
              onClick={() => setMenuOpen(false)}
              className="text-orange-600 font-medium"
            >
              Sale
            </Link>
          </div>

          {/* Icons (mobile) */}
          <div className="flex justify-around mt-4">
            <div
              className="flex flex-col items-center text-sm cursor-pointer"
              onClick={handleLoginClick}
            >
              <FaUser />
              <span>Login</span>
            </div>
            <div
              className="relative flex flex-col items-center text-sm cursor-pointer"
              onClick={handleWishlistClick}
            >
              <FaHeart />
              <span>Wishlist</span>
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs px-1.5 rounded-full">
                  {wishlist.length}
                </span>
              )}
            </div>
            <div
              className="relative flex flex-col items-center text-sm cursor-pointer"
              onClick={handleCartClick}
            >
              <FaShoppingCart />
              <span>Cart</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs px-1.5 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
