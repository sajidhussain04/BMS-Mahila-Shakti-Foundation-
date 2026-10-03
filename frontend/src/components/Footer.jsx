import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Organization Info */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-2">
            Bharti Mahila Shakti Foundation
          </h2>
          <p className="text-sm mb-4">
            Empowering women through access to menstrual hygiene products and health education since 2018.
          </p>
          <div className="flex space-x-4 text-white text-lg">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Mission</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Health Resources</a></li>
            <li><a href="#" className="hover:underline">Get Involved</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Shipping Policy</a></li>
            <li><a href="#" className="hover:underline">Returns & Refunds</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Info</h3>
          <ul className="text-sm space-y-2">
            <li>
              <span>📍</span> 123 Women’s Health Avenue, New Delhi, India 110001
            </li>
            <li>
              <span>📞</span> +91 98765 43210
            </li>
            <li>
              <span>✉</span> contact@bmsfoundation.org
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2023 Bharti Mahila Shakti Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;