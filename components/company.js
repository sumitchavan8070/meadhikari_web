import { ChevronRightIcon } from "@heroicons/react/solid";
import Image from 'next/image';

const Company = () => {
    return (
        <div id="colab" className="px-6 sm:px-10 py-16 flex flex-col items-center justify-center mx-auto w-full max-w-[1250px]">
            {/* <h2 className="text-center mt-3 text-2xl lg:text-3xl font-extrabold font-Arvo text-[#0F2137]">Our Exam Preparation App </h2> */}


            <div className="flex flex-col lg:flex-row items-center justify-between">

                <div className="sm:w-1/4 w-full text-center sm:text-left">
                    <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold font-Arvo text-[#0F2137]">
                        Welcome to Meadhikari - MPSC Exam Preparation App in Maharashtra
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
