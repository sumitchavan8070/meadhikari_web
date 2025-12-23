import {
  CONVERSION_FIRST_DARK_IMAGE_WEB,
  CONVERSION_FIRST_LITE_IMAGE_WEB,
  STARTING_PRICE,
} from "@/utils/globalStrings";

const ConversionStripFirst = () => {
  return (
    <div className="bg-[linear-gradient(107.12deg,_#FFFFFF_4.81%,_#BFE0FF_96.97%)] py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden my-6 sm:my-8 md:my-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
          {/* Left Section */}
          <div className="lg:w-1/2 text-center lg:text-left w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4">
              Online Solve Papers @ Meadhikari
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-700">
              Solve papers easily with our interactive UI 📄✨. Practice with
              previous year mock tests!
            </p>
            <a
              href="/pricing"
              className="inline-block bg-white text-gray-900 py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200 text-sm sm:text-base font-semibold"
            >
              {STARTING_PRICE}
            </a>
          </div>

          {/* Images Section - Show both images side by side on larger screens */}
          <div className="lg:w-1/2 w-full flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <div className="w-full sm:w-1/2 flex justify-center">
              <img
                src={CONVERSION_FIRST_LITE_IMAGE_WEB}
                alt="Meadhikari Lite Interface"
                className="rounded-lg shadow-lg hover:shadow-xl transition duration-200 w-full h-auto max-w-full"
              />
            </div>
            <div className="w-full sm:w-1/2 flex justify-center">
              <img
                src={CONVERSION_FIRST_DARK_IMAGE_WEB}
                alt="Meadhikari Dark Interface"
                className="rounded-lg shadow-lg hover:shadow-xl transition duration-200 w-full h-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionStripFirst;
