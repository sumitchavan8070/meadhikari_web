import React from "react";

const offerBannerData = {
  backgroundImage:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sheerid.com%2Fshoppers%2Fwp-content%2Fuploads%2Fsites%2F4%2F2021%2F05%2FStudent_banner_2000x450.png&f=1&nofb=1&ipt=eac0550e87414742379dcdd1d5a54508b0636ece64bf91d47d2f6e800ff9c4c5&ipo=images", // Snow background (change to fit your theme)
  title: "Get an Extra",
  discount: "5% off",
  subtitle: "Grab Previous Year Question Papers at Most Affordable Rates",
  buttonText: "Download App Now",
  appLink: "https://play.google.com/store/apps/details?id=com.sc.meadhikari", // Update with the correct app link
  appIcon: "/icon/app-icon.png", // Local path to the app icon
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
