// src/pages/HealthEducation.jsx
import React, { useState } from "react";
import { FaBookOpen, FaHeartbeat, FaLeaf, FaFemale } from "react-icons/fa";

const tips = [
  {
    title: "Understanding Menstrual Hygiene",
    desc: "Learn how proper menstrual hygiene can prevent infections and empower women’s confidence.",
    icon: <FaFemale />,
  },
  {
    title: "Balanced Diet During Periods",
    desc: "Iron-rich foods, fruits, and hydration play a key role in reducing fatigue and cramps.",
    icon: <FaLeaf />,
  },
  {
    title: "Exercise and Wellness",
    desc: "Gentle yoga, walking, and breathing exercises help reduce cramps and stress.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Breaking the Stigma",
    desc: "Empower communities by normalizing open discussions around menstruation and women’s health.",
    icon: <FaBookOpen />,
  },
];

const HealthEducation = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", topic: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! You’ve registered successfully.`);
    setShowModal(false);
    setFormData({ name: "", email: "", topic: "" });
  };

  return (
    <section className="bg-gradient-to-b from-pink-50 to-purple-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#8a0351] mb-4">
          Menstrual Health & Education
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#8a0351] to-pink-500 mx-auto mb-8 rounded-full"></div>

        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-base md:text-lg">
          Empowering women starts with education. Explore tips, guides, and
          expert insights on menstrual health, hygiene, and wellness.
        </p>

        {/* Improved Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              {/* Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-[#8a0351] to-pink-500"></div>

              {/* Icon Bubble */}
              <div className="flex justify-center -mt-6">
                <div className="bg-[#8a0351]/10 text-[#8a0351] text-4xl p-4 rounded-full border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  {tip.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 text-center mt-2 relative z-10">
                <h3 className="font-semibold text-lg mb-3 text-gray-800 group-hover:text-[#8a0351] transition-colors">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tip.desc}
                </p>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Awareness CTA Section */}
        <div className="bg-[#8a0351] text-white mt-20 p-10 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-3">Join Our Awareness Workshops</h2>
          <p className="max-w-2xl mx-auto mb-6 text-sm md:text-base text-pink-100">
            Participate in our free online sessions on menstrual health,
            sustainable product choices, and community education.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-[#8a0351] font-semibold px-8 py-3 rounded-full hover:bg-pink-50 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Register Now
          </button>
        </div>
      </div>

      {/* Registration Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4 animate-fadeIn">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl relative p-8">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-[#8a0351] mb-6 text-center">
              Register for Workshop
            </h3>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#8a0351] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#8a0351] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Interested Topic
                </label>
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#8a0351] focus:outline-none"
                >
                  <option value="">Select a topic</option>
                  <option>Menstrual Hygiene</option>
                  <option>Sustainable Products</option>
                  <option>Community Awareness</option>
                  <option>Health & Nutrition</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8a0351] text-white py-2 rounded-md font-semibold hover:bg-[#700240] transition-all duration-300"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default HealthEducation;
