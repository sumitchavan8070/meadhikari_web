const ConversionStripSecond = () => {
  return (
    <section className="bg-gray-900 text-white py-5">
      <div className="max-w-6xl mx-auto px-1 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Title Section */}
          <div className="text-center">
            {/* Smaller Title */}
            <p className="text-base mb-2">Online Solve Papers 🔥</p>
          </div>

          <div className="w-full max-w-md">
            <img
              src="https://file-hosting-app.vercel.app/uploads/WebsiteAssest/MeadhikariQuestDashMobile.png"
              alt="Conversion Image"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition duration-200"
            />
          </div>
          <div className="w-full max-w-md">
            <img
              src="https://file-hosting-app.vercel.app/uploads/WebsiteAssest/Meadhikari Question Paper Dashboard.png"
              alt="Conversion Image"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition duration-200"
            />
          </div>

          {/* Pricing Button */}
          <a
            href="/previous-year-paper"
            className="bg-white text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
          >
            20 ₹/Day🔥
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConversionStripSecond;
