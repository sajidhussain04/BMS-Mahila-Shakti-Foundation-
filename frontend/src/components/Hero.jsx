import React, { useState, useEffect } from "react";
import heroImage1 from "../assets/hero.png"; // First image
import heroImage2 from "../assets/hero2.png"; // Second image (replace with your uploaded one)

const Hero = () => {
  const [showSecondImage, setShowSecondImage] = useState(false);

  // After 3 seconds, switch to second image
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondImage(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-purple-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 py-16 md:py-24 gap-8">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8a0351] mb-4">
            Empowering Women Through Health
          </h1>
          <p className="text-gray-600 mb-6">
            Quality menstrual hygiene products at affordable prices. Every purchase supports our foundation's mission.
          </p>
          <button className="bg-[#8a0351] text-white px-6 py-3 rounded-md hover:bg-[#a0046f] transition">
            Shop Now
          </button>
        </div>

        {/* Right Image with Transition */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          {/* First Image */}
          <img
            src={heroImage1}
            alt="Hero 1"
            className={`w-full max-w-md rounded-md shadow-lg transition-opacity duration-700 ${
              showSecondImage ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Second Image (appears after 3 sec) */}
          <img
            src={heroImage2}
            alt="Hero 2"
            className={`w-full max-w-md rounded-md shadow-lg absolute top-0 left-0 transition-opacity duration-700 ${
              showSecondImage ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
