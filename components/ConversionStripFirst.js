const ConversionStripFirst = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
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
              Starting @ 20 ₹/Day🔥
            </a>
          </div>

          <div className="lg:w-1/2 lg:ml-12 flex justify-center">
            <img
              src="https://file-hosting-app.vercel.app/uploads/WebsiteAssest/MeadhikariDarkDash.png"
              alt="Tailwind CSS"
              className="rounded-lg shadow-lg hover:shadow-xl transition duration-200"
              style={{ width: "100%", height: "auto" }} // Image now takes 90% of its container
            />
          </div>
          <div className="lg:w-1/2 lg:ml-12 flex justify-center">
            <img
              src="https://file-hosting-app.vercel.app/uploads/WebsiteAssest/MeadhikariLiteDash.png"
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
