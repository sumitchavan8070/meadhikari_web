import {
  CONVERSION_FIRST_DARK_IMAGE_WEB,
  CONVERSION_FIRST_LITE_IMAGE_WEB,
  STARTING_PRICE,
} from "@/utils/globalStrings";

const ConversionStripFirst = () => {
  return (
    <div className=" bg-[linear-gradient(107.12deg,_#FFFFFF_4.81%,_#BFE0FF_96.97%)]  py-20 md:py-28 relative overflow-hidden my-10">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Section */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Online Solve Papers @ Meadhikari
            </h1>
            <p className="text-base mb-8">
              Solve papers easily with our interactive UI 📄✨. Practice with
              previous year mock tests!
            </p>
            <a
              href="/pricing"
              className="bg-white text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
            >
              {STARTING_PRICE}
            </a>
          </div>

          <div className="lg:w-1/2 lg:ml-12 flex justify-center">
            <img
              src={CONVERSION_FIRST_LITE_IMAGE_WEB}
              alt="Tailwind CSS"
              className="rounded-lg shadow-lg hover:shadow-xl transition duration-200"
              style={{ width: "100%", height: "auto" }} // Image now takes 90% of its container
            />
          </div>
          <div className="lg:w-1/2 lg:ml-12 flex justify-center">
            <img
              src={CONVERSION_FIRST_DARK_IMAGE_WEB}
              alt="Tailwind CSS"
              className="rounded-lg shadow-lg hover:shadow-xl transition duration-200"
              style={{ width: "100%", height: "auto" }} // Image now takes 90% of its container
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionStripFirst;
