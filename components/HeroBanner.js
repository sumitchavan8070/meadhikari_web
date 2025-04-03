"use client";

import Image from "next/image";

const ArrowRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeroBanner = () => {
  return (
    <div className="container mb-10 mt-0 md:my-12 lg:my-20 relative scroll-smooth z-40">
      {/* Desktop/Tablet Version */}
      <div className="hidden sm:block">
        {/* Globe */}
        <div className="z-0 absolute left-0 right-0 top-0 bottom-0 m-auto flex items-center justify-center w-full lg:w-fit">
          <div className="mr-8 lg:mr-16 relative animate-[spin_50s_linear_infinite]">
            <Image
              src="/header/globe.png"
              alt="globe"
              width={540}
              height={479}
              className="animate-slowspin w-[300px] md:w-[350px] lg:w-[400px] xl:w-[540px] opacity-80"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="min-h-[280px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[480px] flex items-center justify-center relative z-10">
          <div className="h-full flex flex-col items-start gap-2 w-full justify-between sm:justify-normal">
            {/* Top Tag */}
            <div className="sm:m-0 -mt-20 md:-mt-24 lg:-mt-32 w-fit py-1 px-3.5 rounded-2xl bg-[linear-gradient(92.91deg,_rgba(27,169,188,0.15)_-0.48%,_rgba(41,102,193,0.15)_98.9%)]">
              <p className="text-sm sm:text-base font-semibold capitalize bg-clip-text text-transparent bg-[linear-gradient(92.91deg,_#1BA9BC_-0.48%,_#2966C1_98.9%)]">
                100% Exam Oriented
              </p>
            </div>

            {/* Main Title and Subtitle */}
            <div className="flex flex-col items-end w-full">
              <h1 className="w-full text-[60px] sm:text-[70px] md:text-[80px] lg:text-[100px] xl:text-[125px] 2xl:text-[150px] tracking-tighter font-semibold pb-2 relative flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 bg-clip-text text-transparent bg-[linear-gradient(107.12deg,_#055AAB_4.81%,_#BFE0FF_96.97%)]">
                <span className="inline-block text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[100px] mx-0 md:mx-5">
                  Prepare
                </span>
                <span className="inline-block text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[100px] mx-0 md:mx-10 lg:mx-20">
                  Yourself
                </span>
              </h1>
              <p className="text-[#a0bee5] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[45px] font-medium mx-0 md:mx-10 lg:mx-20">
                with Meadhikari
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block sm:hidden">
        <div className="h-full flex flex-col items-center gap-2 w-full justify-between">
          {/* Top Tag */}
          <div className="w-fit py-1 px-3.5 rounded-2xl bg-[linear-gradient(92.91deg,_rgba(27,169,188,0.15)_-0.48%,_rgba(41,102,193,0.15)_98.9%)] mt-8">
            <p className="text-sm font-semibold capitalize bg-clip-text text-transparent bg-[linear-gradient(92.91deg,_#1BA9BC_-0.48%,_#2966C1_98.9%)]">
              100% Exam Oriented
            </p>
          </div>

          {/* Main Title and Subtitle */}
          <div>
            <h1 className="text-[85px] leading-none tracking-tighter capitalize font-semibold relative flex items-center justify-center flex-wrap bg-clip-text text-transparent bg-[linear-gradient(107.12deg,_#055AAB_4.81%,_#BFE0FF_96.97%)]">
              <span className="inline-block">Prepare</span>
              <span className="inline-block">Yourself</span>
            </h1>
            <p className="text-[#a0bee5] text-[32px] font-medium text-center">
              with Meadhikari
            </p>
          </div>

          {/* Globe Image */}
          <div className="max-h-[165px] overflow-hidden mt-2.5">
            <div className="rounded-full animate-[spin_50s_linear_infinite]">
              <Image
                src="/header/globe.png"
                alt="globe"
                width={386}
                height={384}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Button */}
          <a
            className="cursor-pointer m-auto h-fit p-4 rounded-xl flex items-center justify-center min-w-[85%] w-full gap-1 bg-white border-primary border-[1.87px] shadow-[0_0_13.11px_0_#066AC9] -translate-y-3 relative z-20"
            href="https://www.meadhikari.com/previous-year-paper"
          >
            <div className="flex items-center gap-1">
              <span className="text-primary text-base font-bold">
                Take a Test
              </span>
              <ArrowRightIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
