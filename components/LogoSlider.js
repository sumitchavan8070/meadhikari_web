"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";

const BASE_URL = "http://www.meadhikari.com"; // Base URL for redirects

const logos = [
  { src: "/logos/dmer.png", url: "/previous-year-paper" },
  { src: "/logos/gst.png", url: "/previous-year-paper" },
  { src: "/logos/krushi.png", url: "/krushi-sevak-bharti" },
  { src: "/logos/pwd.png", url: "/previous-year-paper" },
  { src: "/logos/aadivashiVibhag.png", url: "/previous-year-paper" },
  { src: "/logos/aarogya.png", url: "/previous-year-paper" },
  { src: "/logos/karagruha.png", url: "/previous-year-paper" },
  { src: "/logos/maharastraColor.png", url: "/previous-year-paper" },
  { src: "/logos/mahasul.png", url: "/exams/talathi-bharti" },
  { src: "/logos/mahilaBalvikas.png", url: "/previous-year-paper" },
  { src: "/logos/mpsc.png", url: "/previous-year-paper" },
  { src: "/logos/nyayvibhag.png", url: "/previous-year-paper" },
  { src: "/logos/pashusanvardhan.png", url: "/previous-year-paper" },
  { src: "/logos/pcmc.png", url: "/previous-year-paper" },
  { src: "/logos/police.png", url: "/exams/maharastra-police-bharti" },
  { src: "/logos/vanvibhag.png", url: "/mahaforest-vanrakshak-bharti" },
  { src: "/logos/tait.png", url: "/previous-year-paper" },
];

export default function LogoSlider() {
  return (
    <div className="w-full  py-4 overflow-hidden">
      <Swiper
        loop={true}
        speed={5000} // Smooth continuous movement
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 5 },
          640: { slidesPerView: 4, spaceBetween: 10 },
          1024: { slidesPerView: 6, spaceBetween: 15 },
          1280: { slidesPerView: 10, spaceBetween: 20 },
        }}
        className="mySwiper"
      >
        {[...logos, ...logos].map((logo, index) => (
          <SwiperSlide key={index} className="w-auto flex justify-center">
            {logo.url ? (
              <a href={`${BASE_URL}${logo.url}`} target="_self">
                <Image
                  src={logo.src}
                  alt={`Logo ${index}`}
                  width={100}
                  height={40}
                  className="h-auto"
                />
              </a>
            ) : (
              <Image
                src={logo.src}
                alt={`Logo ${index}`}
                width={100}
                height={40}
                className="h-auto"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
