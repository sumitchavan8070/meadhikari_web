import React from "react";

const PageLandingBanner = () => {
  return (
    <div className="bg-gray-800 font-sans min-h-[350px] relative w-full rounded overflow-hidden mb-10">
      <div className="grid lg:grid-cols-2 w-full h-full absolute inset-0">
        <div className="p-4 lg:block max-lg:hidden">
          <img
            src="https://readymadeui.com/image-1.webp"
            className="object-cover w-full h-full"
            alt="img"
          />
        </div>

        <div className="flex flex-col items-center lg:items-end justify-center text-center lg:text-right px-8 relative bg-[#262464] rounded-tl-[206px] z-20 before:absolute before:inset-0 before:!left-auto before:bg-[#293587] before:w-2/3 before:rounded-bl-[206px] before:-z-10">
          <h3 className="font-bold sm:text-4xl text-2xl text-yellow-400">
            Unlock Your Potential
          </h3>
          <p className="text-sm text-gray-300 mt-4">
            Access a vast collection of previous year question papers, complete
            with solutions, to enhance your exam preparation. Practice at your
            own pace and solve as many papers as you need to excel.
          </p>

          <button
            type="button"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-4 px-8 font-semibold rounded w-max mt-8"
          >
            Solve Papers
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageLandingBanner;
