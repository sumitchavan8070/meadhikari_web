import Link from "next/link";
import { ViewListIcon, XIcon } from "@heroicons/react/solid";
import Header from "./Header";
import Image from "next/image";
import HeroSection from "./home/HeroSection";

const HeroBanner = () => {
  return (
    // <div className="relative">

    //   <div
    //     className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
    //     aria-hidden="true"
    //   >
    //     <div
    //       className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
    //       style={{
    //         clipPath:
    //           "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    //       }}
    //     ></div>
    //   </div>

    //   <Header />
    //   <section className="">
    //     <div
    //       class="flex flex-col items-center justify-center text-center sm:px-4 sm:py-20 bg-gradient-to-r from-green-50/50 via-teal-50 to-green-50/50  lg:min-h-screen mx-auto max-w-xl py-20 space-y-12 lg:px-8 lg:max-w-7xl">
    //       {/* <a href=""
    //         class="text-[#5E3BEE] border border-white-700 dark:border-gray-300 rounded-lg py-2 px-4 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-500 dark:hover:text-gray-400">
    //         Forget about spending hundreds $
    //       </a> */}
    //       <h1
    //         class="mx-auto max-w-4xl font-display text-3xl font-bold tracking-normal text-white-300 dark:text-black-300 md:text-5xl lg:text-7xl">
    //         Revolutionize Your Insurance
    //         <span class="relative whitespace-nowrap text-white-600 dark:text-black-300"> Operations</span>
    //         {/* <span class="relative whitespace-nowrap text-orange-500 dark:text-orange-300">
    //         <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#5E3BEE]"
    //           preserveAspectRatio="none">
    //           <path
    //             d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z">
    //           </path>
    //         </svg>
    //         <span class="relative text-[#5E3BEE]">with AI</span>
    //       </span> */}
    //         <span class="relative whitespace-nowrap text-blue-600 ">
    //           <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
    //           <span class="relative"> With AI </span></span>
    //       </h1>
    //       <h2
    //         class="text-[#1C1E53] mx-auto mt-6 max-w-xl text-base md:text-lg lg:text-xl sm:leading-6 md:leading-7 lg:leading-8">
    //         Experience the future of insurance with our cutting-edge AI tool. From underwriting to claims processing, our
    //         intelligent system streamlines and enhances every aspect of your insurance operations.
    //       </h2>
    //       <a class="bg-orange-600 dark:bg-gray-800 rounded-xl text-white dark:text-gray-300 font-medium px-6 py-3 sm:mt-8 mt-6 hover:bg-orange-500 dark:hover:bg-gray-600 transition"
    //         href="">Get started</a>
    //     </div>
    //   </section>

    // </div>

    <div class="font-[sans-serif] max-w-6xl max-md:max-w-md mx-auto">
      <div class="grid md:grid-cols-2 items-center md:gap-10 gap-6">
        <div class="max-md:order-1 max-md:text-center">
          <p class="mt-4 text-sm font-bold text-blue-600">
            <span class="rotate-90 inline-block mr-2 mb-2">|</span> ALL IN ONE
            MEETING SCHEDULER
          </p>
          <h2 class="text-gray-800 md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">
            Schedule meetings effortlessly
          </h2>
          <p class="mt-5 text-base text-gray-500 leading-relaxed">
            Embark on a gastronomic journey with our curated dishes, delivered
            promptly to your doorstep. Elevate your dining experience today.
          </p>

          <div class="mt-10 flex px-4 py-4 rounded-lg bg-gray-100 overflow-hidden">
            <input
              type="email"
              placeholder="Search Something..."
              class="w-full outline-none bg-transparent text-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="20px"
              class="cursor-pointer fill-gray-400"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </div>
        </div>

        <div class="md:h-[400px] p-2">
          <img
            src="https://readymadeui.com/management-img.webp"
            class="w-full h-full object-contain rounded-lg"
            alt="Dining Experience"
          />
        </div>
      </div>

      <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
        <img
          src="https://readymadeui.com/google-logo.svg"
          class="w-28 mx-auto"
          alt="google-logo"
        />
        <img
          src="https://readymadeui.com/facebook-logo.svg"
          class="w-28 mx-auto"
          alt="facebook-logo"
        />
        <img
          src="https://readymadeui.com/linkedin-logo.svg"
          class="w-28 mx-auto"
          alt="linkedin-logo"
        />
        <img
          src="https://readymadeui.com/pinterest-logo.svg"
          class="w-28 mx-auto"
          alt="pinterest-logo"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
