import React from "react";

const PageLandingBannerThree = () => {
  return (
    <div className="bg-gray-100 font-[sans-serif] relative max-w-4xl mx-auto rounded overflow-hidden mt-4 w-[90%]">
      <div className="grid sm:grid-cols-2 items-center max-sm:gap-10 py-10 border-y-8 border-orange-400">
        <div className="text-center px-6">
          <h3 className="font-extrabold text-5xl text-orange-500 leading-tight">
            <span className="text-gray-800">Special</span> Offer
          </h3>
          <h6 className="text-2xl text-gray-800 mt-2">Limited Time Deal</h6>
          <p className="text-gray-800 text-base leading-relaxed mt-4">
            Discover amazing discounts and deals. Don't miss out on our
            exclusive offers for a limited time.
          </p>

          <button
            type="button"
            className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-400 to-orange-600 hover:bg-orange-500 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-lg w-max mt-8"
          >
            Get Started
          </button>
        </div>

        <div className="bg-gradient-to-tr from-orange-400 to-orange-600 rounded-tl-full rounded-bl-full w-full h-max flex items-center justify-center">
          <div className="p-2">
            <img
              src="https://readymadeui.com/team-image.webp"
              className="h-64 w-64 rounded-full object-cover border-4 border-white"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLandingBannerThree;
