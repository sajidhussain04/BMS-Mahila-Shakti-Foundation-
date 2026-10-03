import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-[#940051] text-white py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bold text-2xl mb-4">
          About Bharti Mahila Shakti Foundation
        </h2>
        <p className="mb-8 max-w-3xl mx-auto">
          We are committed to empowering women through access to affordable menstrual hygiene
          products and comprehensive health education. Every purchase from our store directly supports
          our initiatives to provide free products to underprivileged women and girls, and to break the
          stigma around menstruation.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <div className="bg-[#ad3a7a] rounded-lg px-8 py-6">
            <h3 className="font-bold text-xl mb-1">10,000+</h3>
            <p className="text-sm">Women Empowered</p>
          </div>
          <div className="bg-[#ad3a7a] rounded-lg px-8 py-6">
            <h3 className="font-bold text-xl mb-1">50+</h3>
            <p className="text-sm">Communities Reached</p>
          </div>
          <div className="bg-[#ad3a7a] rounded-lg px-8 py-6">
            <h3 className="font-bold text-xl mb-1">5 Years</h3>
            <p className="text-sm">Of Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
