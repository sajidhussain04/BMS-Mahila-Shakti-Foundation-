import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const products = [
  {
    id: 1,
    name: "Organic Cotton Sanitary Pads",
    description: "Pack of 30 | Regular Flow",
    price: 249,
    originalPrice: 310,
    rating: 4.2,
    badge: "20% OFF",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product1.png",
    category: "Sanitary Pads",
  },
  {
    id: 2,
    name: "Medical Grade Silicone Menstrual Cup",
    description: "Size B | Reusable",
    price: 599,
    rating: 4.5,
    badge: "BESTSELLER",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product2.png",
    category: "Menstrual Cups",
  },
  {
    id: 3,
    name: "Complete Menstrual Wellness Kit",
    description: "Pads, Pain Relief, Hygiene Products",
    price: 899,
    originalPrice: 1099,
    rating: 4.3,
    imgSrc: "/src/assets/product3.png",
    category: "Wellness Kits",
  },
  {
    id: 4,
    name: "Herbal Menstrual Relief Tea",
    description: "20 Tea Bags | Cramp Relief",
    price: 199,
    rating: 4.0,
    badge: "NEW",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product4.png",
    category: "Herbal Products",
  },
  {
    id: 5,
    name: "Cooling Feminine Wash",
    description: "Aloe Vera | pH Balanced | 200ml",
    price: 299,
    originalPrice: 350,
    rating: 4.4,
    badge: "TRENDING",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product5.png",
    category: "Sanitary Pads",
  },
  {
    id: 6,
    name: "Organic Cotton Panty Liners",
    description: "Pack of 50 | Daily Freshness",
    price: 199,
    rating: 4.1,
    badge: "NEW ARRIVAL",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product6.png",
    category: "Sanitary Pads",
  },
  {
    id: 7,
    name: "Pain Relief Roll-On",
    description: "Natural Oil Blend | Period Pain",
    price: 349,
    originalPrice: 399,
    rating: 4.6,
    badge: "TOP PICK",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product7.png",
    category: "Wellness Kits",
  },
  {
    id: 8,
    name: "Menstrual Heating Patch",
    description: "Instant Relief | 5 Patches Pack",
    price: 249,
    rating: 4.3,
    imgSrc: "/src/assets/product8.png",
    category: "Wellness Kits",
  },
  {
    id: 9,
    name: "Reusable Period Underwear",
    description: "Leak Proof | Comfortable | Washable",
    price: 699,
    originalPrice: 799,
    rating: 4.5,
    badge: "HOT DEAL",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product9.png",
    category: "Sanitary Pads",
  },
  {
    id: 10,
    name: "Menstrual Comfort Essential Oil",
    description: "Soothing Aroma | Stress Relief",
    price: 449,
    rating: 4.2,
    imgSrc: "/src/assets/product10.png",
    category: "Herbal Products",
  },
  {
    id: 11,
    name: "Organic Chamomile Tea",
    description: "Caffeine-Free | Relax & Calm",
    price: 249,
    rating: 4.4,
    badge: "STAFF FAVORITE",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product11.png",
    category: "Herbal Products",
  },
  {
    id: 12,
    name: "Menstrual Hygiene Travel Pouch",
    description: "Compact | Waterproof | Stylish",
    price: 299,
    rating: 4.3,
    badge: "TRENDING",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product12.png",
    category: "Wellness Kits",
  },
  {
    id: 13,
    name: "Ultra Soft Organic Sanitary Pads",
    description: "Pack of 20 | Heavy Flow Protection",
    price: 279,
    originalPrice: 329,
    rating: 4.5,
    badge: "POPULAR",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product13.png",
    category: "Sanitary Pads",
  },
  {
    id: 14,
    name: "Night Protection Sanitary Pads",
    description: "XL Size | Leak Guard | 10 Pads",
    price: 229,
    rating: 4.3,
    badge: "NEW ARRIVAL",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product14.png",
    category: "Sanitary Pads",
  },
  {
    id: 15,
    name: "Eco-Friendly Bamboo Sanitary Pads",
    description: "Pack of 25 | Biodegradable | Rash-Free",
    price: 259,
    originalPrice: 299,
    rating: 4.6,
    badge: "TRENDING",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product15.png",
    category: "Sanitary Pads",
  },
  {
    id: 16,
    name: "Compact Menstrual Cup with Sterilizer",
    description: "Includes Case | Size S",
    price: 749,
    originalPrice: 899,
    rating: 4.7,
    badge: "PREMIUM",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product16.png",
    category: "Menstrual Cups",
  },
  {
    id: 17,
    name: "Soft Silicone Menstrual Cup",
    description: "Size M | Flexible Fit | Reusable",
    price: 499,
    rating: 4.4,
    badge: "TRENDING",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product17.png",
    category: "Menstrual Cups",
  },
  {
    id: 18,
    name: "Advanced Comfort Menstrual Cup",
    description: "Medical Grade | Size L | Long Stem",
    price: 649,
    rating: 4.5,
    imgSrc: "/src/assets/product18.png",
    category: "Menstrual Cups",
  },
  {
    id: 19,
    name: "Period Care Starter Kit",
    description: "Pads, Wash, Pain Relief Combo",
    price: 799,
    originalPrice: 950,
    rating: 4.3,
    badge: "BEST VALUE",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product19.png",
    category: "Wellness Kits",
  },
  {
    id: 20,
    name: "Ultimate Menstrual Care Box",
    description: "Tea, Roll-On, Pads, Cup Combo",
    price: 999,
    originalPrice: 1199,
    rating: 4.6,
    badge: "TOP PICK",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product20.png",
    category: "Wellness Kits",
  },
  {
    id: 21,
    name: "Travel-Friendly Period Kit",
    description: "Compact Essentials | On-the-Go Relief",
    price: 649,
    rating: 4.2,
    imgSrc: "/src/assets/product21.png",
    category: "Wellness Kits",
  },
  {
    id: 22,
    name: "Herbal Cramps Relief Balm",
    description: "Ayurvedic Formula | Natural Comfort",
    price: 299,
    rating: 4.4,
    badge: "NEW",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product22.png",
    category: "Herbal Products",
  },
  {
    id: 23,
    name: "Herbal Detox Tea for Women",
    description: "Supports Hormonal Balance | 25 Bags",
    price: 349,
    originalPrice: 399,
    rating: 4.5,
    badge: "HOT DEAL",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product23.png",
    category: "Herbal Products",
  },
  {
    id: 24,
    name: "Herbal Relaxation Oil",
    description: "Calming Blend | Massage & Aromatherapy",
    price: 499,
    rating: 4.6,
    badge: "BESTSELLER",
    badgeColor: "bg-orange-600",
    imgSrc: "/src/assets/product24.png",
    category: "Herbal Products",
  },
];

const FeaturedProducts = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // ✅ modal state
  const visibleProducts = showAll ? products : products.slice(0, 6);
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  const handleProductClick = (product) => {
    setSelectedProduct(product); // open modal
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="py-10 px-5 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-purple-800">
          Featured Products
        </h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-purple-700 hover:underline flex items-center"
        >
          {showAll ? "Show Less" : "View All"} <span className="ml-1">›</span>
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleProducts.map((item) => (
          <div
            key={item.id}
            onClick={() => handleProductClick(item)} // ✅ open modal on click
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 relative group transform hover:scale-105 cursor-pointer"
          >
            {/* Badge */}
            {item.badge && (
              <span
                className={`${item.badgeColor} text-white text-xs font-semibold uppercase px-3 py-1 rounded-br-lg absolute top-0 left-0`}
              >
                {item.badge}
              </span>
            )}

            {/* Image with Heart Icon */}
            <div className="relative overflow-hidden">
              <img
                src={item.imgSrc}
                alt={item.name}
                className="w-full h-48 object-contain bg-white p-4 transition-transform duration-300 group-hover:scale-110"
              />

              {/* ❤️ Wishlist Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent modal opening
                  addToWishlist(item);
                }}
                aria-label="Add to wishlist"
                className="absolute top-3 right-3 bg-white p-1 rounded-full shadow hover:bg-pink-50 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={isInWishlist(item.id) ? "red" : "none"}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className={`w-6 h-6 ${
                    isInWishlist(item.id) ? "text-red-500" : "text-gray-400"
                  } transition`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                  />
                </svg>
              </button>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-gray-700 font-semibold mb-1">{item.name}</h3>
              <p className="text-gray-500 text-sm mb-1">{item.description}</p>
              <p className="text-xs text-purple-700 font-semibold mb-3">
                {item.category}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-pink-800 font-bold text-lg">
                    ₹{item.price}
                  </span>
                  {item.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ₹{item.originalPrice}
                    </span>
                  )}
                </div>

                <div className="bg-green-100 text-green-800 text-sm px-2 py-0.5 rounded flex items-center gap-1">
                  <span>{item.rating.toFixed(1)}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>

              {/* 🛒 Add to Cart Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent modal opening
                  addToCart(item);
                }}
                className="w-full bg-purple-800 hover:bg-purple-900 text-white py-3 rounded transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4"
                  />
                  <circle cx="7" cy="21" r="1" />
                  <circle cx="17" cy="21" r="1" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times;
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={selectedProduct.imgSrc}
                alt={selectedProduct.name}
                className="w-full md:w-1/2 h-64 object-contain rounded"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2 text-[#8a0351]">
                  {selectedProduct.name}
                </h2>
                <p className="text-gray-600 mb-3">
                  {selectedProduct.description}
                </p>
                <p className="text-sm text-purple-700 font-semibold mb-3">
                  {selectedProduct.category}
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-pink-800 font-bold text-xl">
                    ₹{selectedProduct.price}
                  </span>
                  {selectedProduct.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ₹{selectedProduct.originalPrice}
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => addToCart(selectedProduct)}
                    className="bg-purple-800 hover:bg-purple-900 text-white px-5 py-2 rounded"
                  >
                    🛒 Add to Cart
                  </button>
                  <button
                    onClick={() => addToWishlist(selectedProduct)}
                    className={`px-5 py-2 rounded border ${
                      isInWishlist(selectedProduct.id)
                        ? "bg-red-500 text-white border-red-500"
                        : "border-gray-400 text-gray-700 hover:bg-pink-100"
                    }`}
                  >
                    ❤️{" "}
                    {isInWishlist(selectedProduct.id)
                      ? "In Wishlist"
                      : "Add to Wishlist"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProducts;
