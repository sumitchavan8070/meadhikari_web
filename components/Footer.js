"use client";
import { Context } from "@/Context/Context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Footer = () => {
  return (
    <footer className="px-3 pt-4 lg:px-9 bg-gray-50 bg-[#F9FAFC]">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a href="#" className="inline-flex items-center">
            <Image
              src="/images/example.png"
              alt="logo"
              width={200}
              height={200}
            />
            {/* <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
              Meadhikari
            </span> */}
          </a>
          <div className="mt-6 lg:max-w-xl">
            <p className="text-sm text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              felis mi, faucibus dignissim lorem id, imperdiet interdum mauris.
              Vestibulum ultrices sed libero non porta. Vivamus malesuada urna
              eu nibh malesuada, non finibus massa laoreet. Nunc nisi velit,
              feugiat a semper quis, pulvinar id libero. Vivamus mi diam,
              consectetur non orci ut, tincidunt pretium justo. In vehicula
              porta molestie. Suspendisse potenti.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Popular Courses
          </p>
          <a href="#">UPSC - Union Public Service Commission</a>
          <a href="#">General Knowledge</a>
          <a href="#">MBA</a>
          <p className="text-base font-bold tracking-wide text-gray-900">
            Popular Topics
          </p>
          <a href="#">Human Resource Management</a>
          <a href="#">Operations Management</a>
          <a href="#">Marketing Management</a>
        </div>

        <div>
          <p className="text-base font-bold tracking-wide text-gray-900">
            COMPANY IS ALSO AVAILABLE ON
          </p>
          <div className="flex items-center gap-1 px-2">
            <a href="#" className="w-full min-w-xl">
              <Image
                src="https://mcqmate.com/public/images/icons/playstore.svg"
                alt="Playstore Button"
                width={135}
                height={70}
              />
            </a>
            <a
              className="w-full min-w-xl"
              href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA"
            >
              <Image
                src="https://mcqmate.com/public/images/icons/youtube.svg"
                alt="Youtube Button"
                width={135}
                height={70}
              />
            </a>
          </div>
          <p className="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a href="#" title="send email">
              contact@meadhikari.com
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2025 Meadhikari. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy &amp; Cookies Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Disclaimer
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
  return (
    <div classNameName="mt-28 text-[#02073E] px-10 xl:px-0 pt-16 xl:w-[1250px] mx-auto  items-start bg-[#F9FAFC]">
      <div classNameName="flex flex-wrap justify-start lg:justify-between gap-10 border-b-2 pb-12">
        <div classNameName="mr-10">
          <h3 classNameName="font-medium text-xl mb-7">Company</h3>
          <p classNameName="mb-3">About</p>
          <p classNameName="mb-3">Affiliate</p>
          <p classNameName="mb-3">Carrers & culture</p>
          <p classNameName="mb-3">Blog</p>
          <p classNameName="mb-3">Press</p>
        </div>
        {/* <div classNameName="mr-10">
                    <h3 classNameName="font-medium text-xl mb-7">About us</h3>
                    <p classNameName="mb-3">Support center</p>
                    <p classNameName="mb-3">Customer support</p>
                    <p classNameName="mb-3">About us</p>
                    <p classNameName="mb-3">Copyright</p>
                    <p classNameName="mb-3">Popular Campain</p>
                </div> */}
        {/* <div classNameName="mr-10">
                    <h3 classNameName="font-medium text-xl mb-7">Our Information</h3>
                    <p classNameName="mb-3">Return policy</p>
                    <p classNameName="mb-3">Privacy policy</p>
                    <p classNameName="mb-3">Terms and conditions</p>
                    <p classNameName="mb-3">Site Map</p>
                    <p classNameName="mb-3">Store Hours</p>
                </div> */}
        <div classNameName="mr-10">
          <h3 classNameName="font-medium text-xl mb-7">My Account</h3>
          <p classNameName="mb-3">Press inquiries</p>
          <p classNameName="mb-3">Social Media</p>
          <p classNameName="mb-3">Directories</p>
          <p classNameName="mb-3">Images & B-roll</p>
          <p classNameName="mb-3">Permissions</p>
        </div>
        <div classNameName="mr-10">
          <h3 classNameName="font-medium text-xl mb-7">Policy</h3>
          <p classNameName="mb-3">Application security</p>
          <p classNameName="mb-3">Software principles</p>
          <p classNameName="mb-3">Unwanted software policy</p>
          <p classNameName="mb-3">Responsible supply chain</p>
        </div>
      </div>
      <div classNameName="my-8 text-gray-700 flex flex-col lg:flex-row items-center justify-between">
        <div classNameName="flex flex-col lg:flex-row items-center">
          {/* <img src="/logo.png" /> */}
          {/* <Image
                        src="/logo.png"
                        alt="Company Logo"
                        width={200}
                        height={80}
                    /> */}
          <p classNameName="mt-2 text-sm lg:ml-5">
            Copyright by 2024 Meadhikari
          </p>
        </div>
        {/* <div classNameName="flex items-center mt-5">
                    <p classNameName="ml-5">Home</p>
                    <p classNameName="ml-5">Adversite</p>
                    <p classNameName="ml-5">Supports</p>
                    <p classNameName="ml-5">blogs</p>
                    <p classNameName="ml-5">FAQ</p>
                </div> */}
      </div>
    </div>
  );
};

// export default Footer

export default Footer;
