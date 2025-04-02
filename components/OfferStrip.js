// // "use client";
// // import React, { useEffect, useRef, useState } from "react";
// // import axios from "axios";
// // import { BASE_URL } from "@/utils/globalStrings";

// // const OfferStrip = () => {
// //   const [coupons, setCoupons] = useState([]); // State to store fetched coupons
// //   const textRef = useRef(null);

// //   // Fetch coupons from the server
// //   useEffect(() => {
// //     const fetchCoupons = async () => {
// //       try {
// //         const response = await axios.get(`${BASE_URL}/coupons/all`); // Fetch all coupons
// //         const activeCoupons = response.data.filter(
// //           (coupon) =>
// //             coupon.isActive && new Date(coupon.expiryDate) > new Date()
// //         ); // Filter active and unexpired coupons
// //         setCoupons(activeCoupons); // Set only active coupons in state
// //       } catch (error) {
// //         console.error("Error fetching coupons:", error);
// //       }
// //     };

// //     fetchCoupons();
// //   }, []);

// //   // Combine static offers and fetched active coupons
// //   const newsData = [
// //     {
// //       text: "📚 Check out the previous year question papers and mock tests!",
// //       link: "https://www.meadhikari.com/previous-year-paper",
// //     },

// //     ...coupons.map((coupon) => ({
// //       text: coupon.text,
// //       link: coupon.link,
// //       offerCode: coupon.code, // Include coupon code as a special offer code
// //     })),
// //   ];

// //   // Scrolling logic
// //   useEffect(() => {
// //     const scrollText = () => {
// //       if (textRef.current) {
// //         textRef.current.scrollLeft += 1;
// //         if (textRef.current.scrollLeft >= textRef.current.scrollWidth / 2) {
// //           textRef.current.scrollLeft = 0; // Reset scroll for infinite effect
// //         }
// //       }
// //     };

// //     const interval = setInterval(scrollText, 20);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <div className="relative flex items-center bg-gradient-to-tr from-blue-700 to-purple-400 text-white overflow-hidden px-6 py-3.5 font-[sans-serif]">
// //       {/* Full-Height Flashing Offer Label */}
// //       <div className="absolute top-0 left-0 h-full bg-red-600 text-white font-bold px-10 flex items-center text-lg">
// //         Offers
// //       </div>

// //       {/* Scrolling News Text */}
// //       <div
// //         ref={textRef}
// //         className="whitespace-nowrap overflow-hidden flex-1 ml-24"
// //         style={{ display: "flex" }}
// //       >
// //         {/* Duplicate the newsData to create seamless looping */}
// //         {[...newsData, ...newsData].map((item, index) => (
// //           <div key={index} className="inline-flex items-center mx-8">
// //             {/* Conditional Link */}
// //             {item.link ? (
// //               <a
// //                 href={item.link}
// //                 className="text-base underline hover:text-yellow-300 transition duration-200"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //               >
// //                 {item.text}
// //                 {item.offerCode && (
// //                   <span className="bg-yellow-400 text-blue-800 font-semibold px-2 ml-2 rounded">
// //                     Use Code: {item.offerCode}
// //                   </span>
// //                 )}
// //               </a>
// //             ) : (
// //               <p className="text-base">
// //                 {item.text}
// //                 {item.offerCode && (
// //                   <span className="bg-yellow-400 text-blue-800 font-semibold px-2 ml-2 rounded">
// //                     Use Code: {item.offerCode}
// //                   </span>
// //                 )}
// //               </p>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default OfferStrip;
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import { BASE_URL } from "@/utils/globalStrings";

// const ArrowRightIcon = () => (
//   <svg
//     width="14"
//     height="14"
//     viewBox="0 0 24 24"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M5 12H19M19 12L12 5M19 12L12 19"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const OfferStrip = () => {
//   const [coupons, setCoupons] = useState([]);
//   const textRef = useRef(null);
//   const containerRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const fetchCoupons = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/coupons/all`);
//         const activeCoupons = response.data.filter(
//           (coupon) =>
//             coupon.isActive && new Date(coupon.expiryDate) > new Date()
//         );
//         setCoupons(activeCoupons);
//       } catch (error) {
//         console.error("Error fetching coupons:", error);
//       }
//     };

//     fetchCoupons();
//   }, []);

//   const newsData = [
//     {
//       text: "🚀 Previous year papers + mock tests bundle!",
//       link: "https://www.meadhikari.com/previous-year-paper",
//       isSpecial: true,
//     },
//     ...coupons.map((coupon) => ({
//       text: coupon.text,
//       link: coupon.link,
//       offerCode: coupon.code,
//     })),
//   ];

//   // Smooth infinite scrolling animation
//   useEffect(() => {
//     if (!textRef.current || newsData.length === 0) return;

//     const contentWidth = textRef.current.scrollWidth / 2;
//     let animationFrame;
//     let speed = 1; // Pixels per frame

//     const animate = () => {
//       if (textRef.current) {
//         textRef.current.scrollLeft += speed;

//         // Reset position seamlessly
//         if (textRef.current.scrollLeft >= contentWidth - 1) {
//           textRef.current.scrollLeft = 0;
//         }

//         // Slow down on hover
//         if (textRef.current.dataset.hover === "true") {
//           speed = Math.max(0.2, speed * 0.95);
//         } else {
//           speed = Math.min(1, speed * 1.05);
//         }
//       }
//       animationFrame = requestAnimationFrame(animate);
//     };

//     animationFrame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationFrame);
//   }, [newsData]);

//   // Auto-hide on mobile after 10 seconds
//   useEffect(() => {
//     if (typeof window !== "undefined" && window.innerWidth < 640) {
//       const timer = setTimeout(() => setIsVisible(false), 10000);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className={`relative bg-[linear-gradient(107.12deg,#055AAB_4.81%,#2966C1_98.9%)] text-white overflow-hidden py-2 font-[sans-serif] transition-all duration-300 ${
//         isVisible ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
//       }`}
//     >
//       {/* Scrolling Content */}
//       <div
//         ref={textRef}
//         data-hover="false"
//         onMouseEnter={(e) => (e.currentTarget.dataset.hover = "true")}
//         onMouseLeave={(e) => (e.currentTarget.dataset.hover = "false")}
//         className="whitespace-nowrap overflow-hidden pl-16 sm:pl-24 pr-4 py-1"
//       >
//         {[...newsData, ...newsData].map((item, index) => (
//           <div
//             key={index}
//             className="inline-flex items-center mx-4 sm:mx-6 align-middle"
//           >
//             {item.link ? (
//               <a
//                 href={item.link}
//                 className={`text-xs sm:text-sm ${
//                   item.isSpecial ? "font-bold" : "font-medium"
//                 } text-white hover:text-[#BFE0FF] transition-colors flex items-center group`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span className="inline-block mr-1">{item.text}</span>
//                 {item.offerCode && (
//                   <span className="ml-1 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] sm:text-xs flex items-center border border-white/10 hover:bg-white/30 transition-all">
//                     <span className="font-mono font-bold">
//                       {item.offerCode}
//                     </span>
//                     <ArrowRightIcon className="ml-1" />
//                   </span>
//                 )}
//                 {item.isSpecial && (
//                   <span className="ml-1 animate-[pulse_2s_infinite]">✨</span>
//                 )}
//               </a>
//             ) : (
//               <p className="text-xs sm:text-sm font-medium">{item.text}</p>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Close button (mobile only) */}
//       {typeof window !== "undefined" && window.innerWidth < 640 && (
//         <button
//           onClick={() => setIsVisible(false)}
//           className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white/70 hover:text-white text-lg"
//           aria-label="Close offers"
//         >
//           &times;
//         </button>
//       )}
//     </div>
//   );
// };

// export default OfferStrip;
"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/utils/globalStrings";

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const OfferStrip = () => {
  const [coupons, setCoupons] = useState([]);
  const textRef = useRef(null);
  const contentRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/coupons/all`);
        setCoupons(
          response.data.filter(
            (coupon) =>
              coupon.isActive && new Date(coupon.expiryDate) > new Date()
          )
        );
      } catch (error) {
        console.error("Error fetching coupons:", error);
      }
    };
    fetchCoupons();
  }, []);

  const newsData = [
    {
      text: "🚀 Previous year papers + mock tests bundle!",
      link: "https://www.meadhikari.com/previous-year-paper",
      isSpecial: true,
    },
    ...coupons.map((coupon) => ({
      text: coupon.text,
      link: coupon.link,
      offerCode: coupon.code,
    })),
  ];

  // Calculate content width and setup animation
  useEffect(() => {
    if (!contentRef.current || newsData.length === 0) return;

    const updateWidth = () => {
      setContentWidth(contentRef.current.scrollWidth / 2);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    let scrollPos = 0;
    let animationId;
    let lastTimestamp = 0;
    const speed = 0.8; // pixels per frame

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (textRef.current) {
        scrollPos = (scrollPos + speed * (delta / 16)) % contentWidth;
        textRef.current.scrollLeft = scrollPos;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", updateWidth);
    };
  }, [newsData, contentWidth]);

  return (
    <div className="relative bg-[linear-gradient(107.12deg,#055AAB_4.81%,#2966C1_98.9%)] text-white overflow-hidden py-2 font-[sans-serif]">
      {/* Infinite scrolling content */}
      <div
        ref={textRef}
        className="whitespace-nowrap overflow-hidden pl-16 pr-4 py-1 scroll-smooth"
        style={{ scrollBehavior: "auto" }}
      >
        <div
          ref={contentRef}
          className="inline-flex"
          style={{ display: "inline-flex" }}
        >
          {[...newsData, ...newsData, ...newsData].map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-6 align-middle relative"
              style={{ paddingLeft: index === 0 ? "2rem" : "0" }}
            >
              {item.link ? (
                <a
                  href={item.link}
                  className={`text-sm ${
                    item.isSpecial ? "font-bold" : "font-medium"
                  } text-white hover:text-[#BFE0FF] transition-colors flex items-center`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{item.text}</span>
                  {item.offerCode && (
                    <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs flex items-center border border-white/10">
                      <span className="font-mono font-bold mr-1">
                        {item.offerCode}
                      </span>
                      <ArrowRightIcon />
                    </span>
                  )}
                  {item.isSpecial && (
                    <span className="ml-1 animate-pulse">✨</span>
                  )}
                </a>
              ) : (
                <p className="text-sm font-medium">{item.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferStrip;
