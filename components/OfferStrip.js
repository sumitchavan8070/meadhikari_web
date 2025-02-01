import React, { useEffect, useRef } from "react";

const OfferStrip = () => {
  // const newsData = [
  //   {
  //     text: "Hurry up! Flat 50% off on yearly subscription.",
  //     offerCode: "WINTER50",
  //     link: "https://example.com/winter-sale",
  //   },
  //   {
  //     text: "Get 30% off on all test series. Limited time offer!",
  //     offerCode: "TEST30",
  //     link: "https://example.com/test-series",
  //   },
  //   {
  //     text: "Refer your friends and earn rewards. Start now!",
  //     link: "https://example.com/referral-program",
  //   },
  //   {
  //     text: "Exclusive deal for new users. Join now and save big!",
  //     offerCode: "NEWUSER20",
  //   },
  // ];

  const newsData = [
    {
      text: "Check out the previous year question papers and mock tests.",
      link: "https://www.meadhikari.com/previous-year-paper",
    },
    {
      text: "Find the pricing details for all our services here.",
      link: "https://www.meadhikari.com/pricing",
    },
  ];

  const textRef = useRef(null);

  useEffect(() => {
    const scrollText = () => {
      if (textRef.current) {
        textRef.current.scrollLeft += 1;
        if (textRef.current.scrollLeft >= textRef.current.scrollWidth / 2) {
          textRef.current.scrollLeft = 0; // Reset scroll for infinite effect
        }
      }
    };

    const interval = setInterval(scrollText, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center bg-gradient-to-tr from-blue-700 to-purple-400 text-white overflow-hidden px-6 py-3.5 font-[sans-serif]">
      {/* Full-Height Flashing Offer Label */}
      <div className="absolute top-0 left-0 h-full bg-red-600 text-white font-bold px-10 flex items-center animate-pulse text-lg">
        Offer
      </div>

      {/* Scrolling News Text */}
      <div
        ref={textRef}
        className="whitespace-nowrap overflow-hidden flex-1 ml-24"
        style={{ display: "flex" }}
      >
        {/* Duplicate the newsData to create seamless looping */}
        {[...newsData, ...newsData].map((item, index) => (
          <div key={index} className="inline-flex items-center mx-8">
            {/* Conditional Link */}
            {item.link ? (
              <a
                href={item.link}
                className="text-base underline hover:text-yellow-300 transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.text}
                {item.offerCode && (
                  <span className="bg-yellow-400 text-blue-800 font-semibold px-2 ml-2 rounded">
                    Use Code: {item.offerCode}
                  </span>
                )}
              </a>
            ) : (
              <p className="text-base">
                {item.text}
                {item.offerCode && (
                  <span className="bg-yellow-400 text-blue-800 font-semibold px-2 ml-2 rounded">
                    Use Code: {item.offerCode}
                  </span>
                )}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferStrip;
