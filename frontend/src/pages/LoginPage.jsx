// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert("✅ Login successful!");
        localStorage.setItem("loggedIn", true);
        navigate("/");
      } else {
        alert("❌ Invalid email or password");
      }
    } else {
      const newUser = { username, email, password };
      localStorage.setItem("user", JSON.stringify(newUser));
      alert("✅ Registration successful! Please login.");
      setIsLogin(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-white flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 relative">
        <div className="text-center mb-6">
          <img
            src="/logo.png"
            alt="BMS Foundation"
            className="mx-auto w-14 h-14 mb-2"
          />
          <h1 className="text-2xl font-bold text-[#8a0351]">
            {isLogin ? "Welcome Back!" : "Create an Account"}
          </h1>
          <p className="text-gray-500 text-sm">
            {isLogin
              ? "Login to continue your shopping journey"
              : "Join us to empower women together"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8a0351]"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8a0351]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8a0351]"
          />

          <button
            type="submit"
            className="w-full bg-[#8a0351] hover:bg-[#700240] text-white py-2.5 rounded-lg font-semibold transition-all duration-200"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-[#8a0351] font-semibold hover:underline"
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-[#8a0351] font-semibold hover:underline"
              >
                Login
              </button>
            </>
          )}
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#8a0351] via-orange-500 to-pink-600 rounded-b-lg"></div>
      </div>
    </div>
  );
};

export default LoginPage;
