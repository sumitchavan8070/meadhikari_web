


import { CheckCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";

const Support = () => {
    return (
        <div
            id="support"
            className="flex flex-col-reverse xl:flex-row w-full max-w-[1250px] mx-auto justify-center text-center xl:text-left h-full xl:my-16"
        >
            {/* Image Section */}
            <div className="mt-10 mx-auto">
                <Image
                    src="/layout.png"
                    alt="Customer support layout illustration"
                    width={500}
                    height={300}
                    priority
                />
            </div>

            {/* Text Content */}
            <div className="xl:w-[650px] mt-16 xl:mt-20 px-5 lg:px-0">
                <h2 className="font-Arvo font-bold sm:text-3xl text-2xl xl:text-[34px] text-[#0F2137] leading-normal xl:leading-normal sm:leading-snug">
                    Customer support is our main priority, ensuring 100% satisfaction.
                </h2>
                <p className="xl:leading-8 mt-5 xl:mt-10 text-base xl:text-lg text-gray-700">
                    We are dedicated to providing excellent support for competitive exam aspirants. From state-level exams like MPSC and MPPSC to national-level IAS preparation, we ensure students have access to quality resources and personalized guidance.
                </p>

                {/* Features Section */}
                <div className="flex flex-col xl:flex-row justify-center xl:justify-start mt-10 gap-10">
                    {/* Left Column */}
                    <div className="flex flex-col space-y-5">
                        <span className="flex items-center">
                            <CheckCircleIcon className="w-6 text-[#56BBD0]" />
                            <p className="font-bold ml-3">Mock tests for civil services</p>
                        </span>
                        <span className="flex items-center">
                            <CheckCircleIcon className="w-6 text-[#56BBD0]" />
                            <p className="font-bold ml-3">Personalized study plans</p>
                        </span>
                        <span className="flex items-center">
                            <CheckCircleIcon className="w-6 text-[#56BBD0]" />
                            <p className="font-bold ml-3">Expert mentorship programs</p>
                        </span>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col space-y-5">
                        <span className="flex items-center">
                            <CheckCircleIcon className="w-6 text-[#56BBD0]" />
                            <p className="font-bold ml-3">Dedicated IAS preparation</p>
                        </span>
                        <span className="flex items-center">
                            <CheckCircleIcon className="w-6 text-[#56BBD0]" />
                            <p className="font-bold ml-3">Commuter-friendly study tools</p>
                        </span>
                        <span className="flex items-center">
                            <CheckCircleIcon className="w-6 text-[#56BBD0]" />
                            <p className="font-bold ml-3">Exclusive career planning sessions</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;

