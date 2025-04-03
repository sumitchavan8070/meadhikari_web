// import React from "react";

// const offerBannerData = {
//   backgroundImage:
//     "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sheerid.com%2Fshoppers%2Fwp-content%2Fuploads%2Fsites%2F4%2F2021%2F05%2FStudent_banner_2000x450.png&f=1&nofb=1&ipt=eac0550e87414742379dcdd1d5a54508b0636ece64bf91d47d2f6e800ff9c4c5&ipo=images", // Snow background (change to fit your theme)
//   title: "Get an Extra",
//   discount: "5% off",
//   subtitle: "Grab Previous Year Question Papers at Most Affordable Rates",
//   buttonText: "Download App Now",
//   appLink: "https://play.google.com/store/apps/details?id=com.sc.meadhikari", // Update with the correct app link
//   appIcon: "/icon/app-icon.png", // Local path to the app icon
// };

// const OfferBannerSecond = () => {
//   const {
//     backgroundImage,
//     title,
//     discount,
//     subtitle,
//     buttonText,
//     appLink,
//     appIcon,
//   } = offerBannerData;

//   return (
//     <section className="relative bg-black py-6 text-white text-center overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url('${backgroundImage}')`,
//           backgroundSize: "cover",
//           opacity: 0.3,
//         }}
//       ></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         {/* Title */}
//         <p className="text-xl md:text-3xl font-semibold">
//           {title} <span className="text-yellow-400 font-bold">{discount}</span>{" "}
//           on All Previous Year Question Papers!
//         </p>

//         {/* Subtitle */}
//         <p className="text-sm md:text-lg mt-2">{subtitle}</p>

//         {/* Download Button */}
//         <div className="mt-4">
//           <a
//             href={appLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-yellow-400 text-black py-2 px-6 rounded-md cursor-pointer hover:bg-yellow-500 transition duration-300"
//           >
//             {buttonText}
//           </a>
//         </div>

//         {/* App Icons */}
//         <div className="mt-4 flex justify-center">
//           <a
//             href={appLink}
//             aria-label="Download App"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src={appIcon}
//               alt="Google Play Store"
//               className="w-32 h-auto md:w-40 object-contain"
//             />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OfferBannerSecond;
import React from "react";
import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";

const OfferBannerSecond = () => {
  const offerData = {
    title: "Get Exclusive Access to",
    highlight: "Previous Year Papers",
    subtitle: "Enhance your exam preparation with our comprehensive collection",
    buttonText: "Download Now",
    appLink: "https://play.google.com/store/apps/details?id=com.sc.meadhikari",
  };

  return (
    <section className="relative overflow-hidden rounded-xl border border-[#E6F0FF] shadow-lg">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1BA9BC] to-[#2966C1] opacity-90"></div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-cover"></div>

      {/* Content */}
      <div className="relative z-10 p-6 text-center">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          {offerData.title}{" "}
          <span className="text-yellow-300">{offerData.highlight}</span>
        </h3>

        {/* Subtitle */}
        <p className="text-white/80 text-sm md:text-base mb-6 max-w-2xl mx-auto">
          {offerData.subtitle}
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center">
          <a
            href={offerData.appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-[#055AAB] hover:bg-gray-50 font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-xs"
          >
            <FaGooglePlay className="text-xl" />
            <span>{offerData.buttonText}</span>
          </a>

          {/* Rating */}
          <div className="mt-4 flex items-center justify-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-white text-sm"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBannerSecond;
