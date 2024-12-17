// import React from "react";

// const OfferBannerSecond = () => {
//   return (
//     <section className="relative bg-black py-6 text-white text-center overflow-hidden">
//       {/* Snow Animation */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage:
//             "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yEy_daJHcHvuIPCV9dM3ZwHaCe%26pid%3DApi&f=1&ipt=a18b5b3af7281255e4e6f06d0515a63512511797366368c5906a420a436096c4&ipo=images')", // Update this path as needed
//           backgroundSize: "cover",
//           opacity: 0.3,
//         }}
//       ></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         {/* Title */}
//         <p className="text-xl md:text-3xl font-semibold">
//           Get an Extra <span className="text-yellow-400 font-bold">5% off</span>{" "}
//           on All-Academic Writings !!!
//         </p>

//         {/* Subtitle */}
//         <p className="text-sm md:text-lg mt-2">
//           Grab High-Quality Documents at Most Affordable Rates
//         </p>

//         {/* Download Button */}
//         <div className="mt-4">
//           <button className="inline-block bg-yellow-400 text-black py-2 px-6 rounded-md cursor-pointer hover:bg-yellow-500 transition duration-300">
//             Download App Now
//           </button>
//         </div>

//         {/* App Icons */}
//         <div className="mt-4 flex justify-center">
//           <a
//             href="https://play.google.com/store/apps/details?id=com.sc.meadhikari"
//             aria-label="Android App"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src="https://www.instantassignmenthelp.com/templates/instantassignmenthelp/images/android-icon.png"
//               alt="Google Play Store"
//               className="w-30 h-auto md:w-30 object-contain"
//             />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OfferBannerSecond;

import React from "react";

// Sample Offer Banner Data
// const offerBannerData = {
//   backgroundImage:
//     "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yEy_daJHcHvuIPCV9dM3ZwHaCe%26pid%3DApi&f=1&ipt=a18b5b3af7281255e4e6f06d0515a63512511797366368c5906a420a436096c4&ipo=images",
//   title: "Get an Extra",
//   discount: "5% off",
//   subtitle: "Grab High-Quality Documents at Most Affordable Rates",
//   buttonText: "Download App Now",
//   appLink: "https://play.google.com/store/apps/details?id=com.sc.meadhikari",
//   appIcon:
//     "https://www.instantassignmenthelp.com/templates/instantassignmenthelp/images/android-icon.png",
// };

const offerBannerData = {
  backgroundImage:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sheerid.com%2Fshoppers%2Fwp-content%2Fuploads%2Fsites%2F4%2F2021%2F05%2FStudent_banner_2000x450.png&f=1&nofb=1&ipt=eac0550e87414742379dcdd1d5a54508b0636ece64bf91d47d2f6e800ff9c4c5&ipo=images", // Snow background (change to fit your theme)
  title: "Get an Extra",
  discount: "5% off",
  subtitle: "Grab Previous Year Question Papers at Most Affordable Rates",
  buttonText: "Download App Now",
  appLink: "https://play.google.com/store/apps/details?id=com.sc.meadhikari", // Update with the correct app link
  appIcon:
    "https://www.instantassignmenthelp.com/templates/instantassignmenthelp/images/android-icon.png", // Ensure the icon is correct for the app
};

const OfferBannerSecond = () => {
  const {
    backgroundImage,
    title,
    discount,
    subtitle,
    buttonText,
    appLink,
    appIcon,
  } = offerBannerData;

  return (
    <section className="relative bg-black py-6 text-white text-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          opacity: 0.3,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Title */}
        <p className="text-xl md:text-3xl font-semibold">
          {title} <span className="text-yellow-400 font-bold">{discount}</span>{" "}
          on All Previous Year Question Papers!
        </p>

        {/* Subtitle */}
        <p className="text-sm md:text-lg mt-2">{subtitle}</p>

        {/* Download Button */}
        <div className="mt-4">
          <a
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black py-2 px-6 rounded-md cursor-pointer hover:bg-yellow-500 transition duration-300"
          >
            {buttonText}
          </a>
        </div>

        {/* App Icons */}
        <div className="mt-4 flex justify-center">
          <a
            href={appLink}
            aria-label="Download App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={appIcon}
              alt="Google Play Store"
              className="w-32 h-auto md:w-40 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OfferBannerSecond;
