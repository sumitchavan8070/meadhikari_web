"use client"
import { ChevronRightIcon } from "@heroicons/react/solid";
import Image from 'next/image';


const Company = () => {


    return (
        <section
            class="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40">
            <div class="relative z-10">
                <div
                    class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
                    <svg class="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20" aria-hidden="true">
                        <defs>
                            <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%"
                                patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                                <path d="M.5 200V.5H200" fill="none"></path>
                            </pattern>
                        </defs>
                        <svg x="50%" y="50%" class="overflow-visible fill-blue-50">
                            <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0"></path>
                        </svg>
                        <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)">
                        </rect>
                    </svg>
                </div>
            </div>
            <div class="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl text-center">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Refreshingly Sustainable:
                        <span class="text-blue-600">Boxed Water
                        </span>
                    </h1>
                    <h2 class="mt-6 text-lg leading-8 text-gray-600">
                        Choose a more eco-friendly way to hydrate with our 100% recyclable cartons.
                    </h2>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <a class="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            href="/login">Shop Now
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="relative mx-auto mt-10 max-w-lg">
                    <Image
                        src="/download_app_image.png"
                        alt="Company"
                        className="w-full rounded-2xl border border-gray-100 shadow"
                        width={2000}
                        height={2000}
                    />
                </div>
            </div>
        </section>
    )
    return (
        <div id="colab" className="px-6 sm:px-10 py-16 flex flex-col items-center justify-center mx-auto w-full max-w-[1250px]">

            {/* <h2 className="text-center mt-3 text-2xl lg:text-3xl font-extrabold font-Arvo text-[#0F2137]">Our Exam Preparation App </h2> */}


            <div className="flex flex-col lg:flex-row items-center justify-between">

                <div className="sm:w-1/4 w-full text-center sm:text-left">
                    <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold font-Arvo text-[#0F2137]">
                        Welcome to Meadhikari - MPSC sdsdsExam Preparation App in Maharashtra
                    </h2>
                    {/* Button: Improved the layout on mobile and desktop */}
                    <button className="mt-5 text-[#4F96FF] mx-auto sm:mx-0 flex items-center">
                        <a href="https://play.google.com/store/apps/details?id=com.gradding" className="font-bold pr-1 hover:pr-2 hover:transition duration-300 ease-out">
                            Download App
                        </a>
                        <ChevronRightIcon className="w-6" />
                    </button>
                </div>
                <div className="lg:w-1/1 w-full sm:w-1/2 w-full mt-5 sm:mt-0">
                    <Image
                        src="/download_app_image.png"
                        alt="Company"
                        className="mx-auto lg:ml-10 mt-0 lg:mt-0"
                        width={1000}
                        height={600}
                    />
                </div>
            </div>
        </div>
    );
}

export default Company;
