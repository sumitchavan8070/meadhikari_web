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
    <div className="sticky top-[70px] left-0 w-full z-40 bg-[linear-gradient(107.12deg,#055AAB_4.81%,#2966C1_98.9%)] text-white overflow-hidden py-2 font-[sans-serif]" style={{ marginTop: '0', marginBottom: '0' }}>
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
