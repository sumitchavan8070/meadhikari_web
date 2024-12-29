import Image from "next/image";

const appImages = [
  "/app_mockups/1.png",
  "/app_mockups/2.png",
  "/app_mockups/3.png",
  "/app_mockups/5.png",
];

const AppImagesSection = () => (
  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-[100px] text-center container">
    <h3 className="text-3xl font-semibold text-gray-900 mb-12">
      Explore Our App
    </h3>
    <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
      {appImages.map((src, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={600}
            height={900}
            className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:opacity-80"
          />
        </div>
      ))}
    </div>
  </div>
);

export default AppImagesSection;
