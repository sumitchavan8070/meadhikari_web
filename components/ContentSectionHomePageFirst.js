import React from "react";

const ContentSectionHomePageFirst = () => {
  return (
    <div className="bg-gray-100 px-6 py-12 font-sans">
      <div className="lg:max-w-7xl max-w-lg mx-auto px-6 py-8 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Section */}
          <div className="max-h-80">
            <img
              src="https://readymadeui.com/management-img.webp"
              alt="Immerse Yourself in Creativity"
              className="rounded-md object-cover w-full h-full"
            />
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-3xl font-extrabold text-purple-700 mb-4">
              Immerse Yourself in Creativity
            </h2>
            <p className="text-gray-600 text-sm leading-6">
              Unleash your imagination and explore a world of endless
              possibilities. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <ul className="list-disc text-sm text-gray-600 space-y-2 pl-4 mt-6">
              <li>Discover innovative ideas.</li>
              <li>Create unique projects.</li>
              <li>Collaborate with like-minded individuals.</li>
              <li>Transform your visions into reality.</li>
            </ul>
            <div className="mt-6">
              <a
                href="javascript:void(0);"
                className="text-purple-600 text-sm font-semibold hover:underline"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionHomePageFirst;
