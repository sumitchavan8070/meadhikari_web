import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Footer from "@/components/Footer";
import { ArrowNarrowRightIcon, AtSymbolIcon, CodeIcon, ChatIcon, PhoneIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Header from "@/components/Header";


const page = () => {
  return (
    <div>
      <div class="pt-12 container mx-auto px-4">
        <div class="mb-12 flex flex-wrap -mx-4 justify-center">
          <div class="px-4 relative w-full lg:w-8/12 text-center">
            <h6 class="mb-2 text-lg font-bold uppercase text-lightBlue-500">We are here</h6>
            <h2 class="text-4xl font-bold mt-0 mb-1 text-blueGray-700">Are you looking for answers?</h2>
            <p class="mt-2 mb-4 text-xl leading-relaxed text-blueGray-400">You have no idea who I am. You do not know me at all. Have you ever written a song line that a full crowd would shout when you enter the stage? I do not think so.</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4 items-center justify-center -mt-6"><button class="inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-white bg-lightBlue-500 border-lightBlue-500 active:bg-lightBlue-600 active:border-lightBlue-600 text-sm px-6 py-2 shadow hover:shadow-lg rounded-md"><i class="mr-1 fas fa-comment"></i> Chat with us</button></div>
        <div class="flex flex-wrap -mx-4 mt-12">
          <div class="px-4 relative w-full lg:w-3/12 w-full md:w-6/12 w-6/12 border-r">
            <div class="text-center py-6">
              <div class="text-white bg-lightBlue-500 shadow-lg rounded rounded-full justify-center items-center inline-flex text-center p-2 mb-6 w-16 h-16">
                <i class="fas fa-map-marker-alt text-lg"></i>
              </div>
              <h4 class="text-xl font-bold leading-tight mt-0 mb-2">Address</h4>
              <div class="mb-4">
                <p class="text-blueGray-500">12124 First Street, nr 54</p>
              </div>
            </div>
          </div>
          <div class="px-4 relative w-full lg:w-3/12 w-full md:w-6/12 w-6/12 border-r">
            <div class="text-center py-6">
              <div class="text-white bg-lightBlue-500 shadow-lg rounded rounded-full justify-center items-center inline-flex text-center p-2 mb-6 w-16 h-16">
                <i class="fas fa-envelope text-lg"></i>
              </div>
              <h4 class="text-xl font-bold leading-tight mt-0 mb-2">Email</h4>
              <div class="mb-4">
                <p class="text-blueGray-500">hello@email.com</p>
              </div>
            </div>
          </div>
          <div class="px-4 relative w-full lg:w-3/12 w-full md:w-6/12 w-6/12 border-r">
            <div class="text-center py-6">
              <div class="text-white bg-lightBlue-500 shadow-lg rounded rounded-full justify-center items-center inline-flex text-center p-2 mb-6 w-16 h-16"><i class="fas fa-mobile-alt text-lg"></i></div>
              <h4 class="text-xl font-bold leading-tight mt-0 mb-2">Phone</h4>
              <div class="mb-4">
                <p class="text-blueGray-500">+1(424) 535 3523</p>
              </div>
            </div>
          </div>
          <div class="px-4 relative w-full lg:w-3/12 w-full md:w-6/12 w-6/12">
            <div class="text-center py-6">
              <div class="text-white bg-lightBlue-500 shadow-lg rounded rounded-full justify-center items-center inline-flex text-center p-2 mb-6 w-16 h-16">
                <i class="fas fa-user-circle text-lg"></i>
              </div>
              <h4 class="text-xl font-bold leading-tight mt-0 mb-2">Contact</h4>
              <div class="mb-4">
                <p class="text-blueGray-500">Andrew Samian</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default page;
