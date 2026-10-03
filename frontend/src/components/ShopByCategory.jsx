import React from "react";

const categories = [
  {
    title: "Sanitary Pads",
    description: "Comfortable & reliable protection",
    icon: (
      <svg
        className="w-10 h-10 text-purple-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
      </svg>
    ),
    bgColor: "bg-purple-100",
  },
  {
    title: "Menstrual Cups",
    description: "Eco-friendly & long-lasting",
    icon: (
      <svg
        className="w-10 h-10 text-orange-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c1.5 2.5 3 5 3 7a3 3 0 01-6 0c0-2 1.5-4.5 3-7z"></path>
      </svg>
    ),
    bgColor: "bg-orange-100",
  },
  {
    title: "Wellness Kits",
    description: "Complete menstrual care solutions",
    icon: (
      <svg
        className="w-10 h-10 text-purple-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="6" y="7" width="12" height="10" rx="2" ry="2"></rect>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v4m-3-2h6"></path>
      </svg>
    ),
    bgColor: "bg-green-100",
  },
  {
    title: "Herbal Products",
    description: "Natural & chemical-free options",
    icon: (
      <svg
        className="w-10 h-10 text-orange-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8s-1.5 2-5 2-5-2-5-2a7 7 0 0010 10c-1.5-3-1-6-1-6z"></path>
      </svg>
    ),
    bgColor: "bg-yellow-100",
  },
];

const ShopByCategory = () => {
  return (
    <section className="py-10 px-5 max-w-7xl mx-auto">
      <h2 className="text-center font-bold text-2xl text-purple-800 mb-10">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map(({ title, description, icon, bgColor }) => (
          <div
            key={title}
            className={`bg-white shadow-md rounded-lg p-6 text-center transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105 cursor-pointer group`}
          >
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto ${bgColor} group-hover:bg-opacity-90 transition-colors duration-300`}
            >
              {React.cloneElement(icon, {
                className: icon.props.className + " group-hover:text-[#8a0351] transition-colors duration-300",
              })}
            </div>
            <h3 className="font-semibold text-gray-700 mb-2 group-hover:text-[#8a0351] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
