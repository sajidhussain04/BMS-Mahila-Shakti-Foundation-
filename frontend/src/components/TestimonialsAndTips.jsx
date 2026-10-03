import React from "react";

const TestimonialsAndTips = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-[#940051] font-bold text-2xl mb-8 text-center">
        What Women Say & Health Tips
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Testimonials */}
        <div className="md:w-1/2 space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              &quot;The menstrual cup from BMS Foundation has been life-changing. It&apos;s comfortable, eco-friendly, and affordable. Plus, I love that my purchase supports a good cause.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-purple-200 text-purple-600 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A12.083 12.083 0 0112 15c2.21 0 4.26.705 5.879 1.904M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Priya Sharma</p>
                <p className="text-gray-500 text-sm">New Delhi</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">
              &quot;As a teacher in a rural area, I&apos;ve seen how lack of access to menstrual products affects girls&apos; education. Thanks to BMS Foundation&apos;s initiatives, we can now provide these essentials to our students.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-orange-200 text-orange-600 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A12.083 12.083 0 0112 15c2.21 0 4.26.705 5.879 1.904M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Anita Verma</p>
                <p className="text-gray-500 text-sm">Teacher, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menstrual Health Tips */}
        <div className="md:w-1/2 space-y-4">
          <div className="bg-purple-50 border-l-4 border-[#940051] p-4 rounded">
            <p className="font-semibold text-[#940051] mb-1">Change Regularly</p>
            <p className="text-gray-600 text-sm">
              Change your sanitary product every 4-6 hours to prevent infections and maintain hygiene.
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
            <p className="font-semibold text-orange-600 mb-1">Stay Hydrated</p>
            <p className="text-gray-600 text-sm">
              Drink plenty of water to reduce bloating and help with menstrual cramps.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-[#940051] p-4 rounded">
            <p className="font-semibold text-[#940051] mb-1">Proper Disposal</p>
            <p className="text-gray-600 text-sm">
              Wrap used products properly before disposal to maintain hygiene and respect sanitation workers.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-orange-400 p-4 rounded">
            <p className="font-semibold text-orange-600 mb-1">Listen to Your Body</p>
            <p className="text-gray-600 text-sm">
              Rest when needed and don&apos;t hesitate to consult a doctor for severe pain or unusual symptoms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndTips;
