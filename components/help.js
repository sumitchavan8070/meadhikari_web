import { ArrowNarrowRightIcon, AtSymbolIcon, CodeIcon } from "@heroicons/react/solid";
import Image from "next/image";

const Help = () => {
    return (
        <div
            id="help"
            className="w-full md:w-[750px] xl:w-[1250px] flex-col xl:flex-row px-12 xl:px-0 mx-auto flex justify-between py-16"
        >
              <div className="mt-20 xl:mt-0">
                <Image
                    // src="https://cf-img-a-in.tosshub.com/sites/visualstory/mptak/uploads/cropped-WhatsApp-Image-2023-11-03-at-12.40.30-PM.jpeg?size=*:900"

                    src="https://im.indiatimes.in/content/2024/Jul/get---2024-07-31T145155038_66aa04a1113cf.jpg?w=720&h=1280&cc=1&webp=1&q=75"
                    alt="meAdhikari Support"
                    width={340}
                    height={300}
                />
            </div>
            <div className="xl:w-2/5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F2137] xl:leading-normal font-Arvo text-center xl:text-left">
                    Need Assistance? The Meadhikari Support Team Is Here for You!
                </h2>
                <p className="mt-5 leading-7 text-center xl:text-left text-base xl:text-lg xl:leading-loose">
                    At meAdhikari, we’re committed to delivering unparalleled support for your test preparation journey. Let us help you with tailored solutions and expert guidance.
                </p>
                <div className="mail-support flex items-center mt-10">
                    <AtSymbolIcon className="w-20 text-white bg-[#FFA42F] p-2 rounded-full" />
                    <div className="ml-5">
                        <h3 className="font-bold text-xl flex items-center">
                            Email Client Support
                            <ArrowNarrowRightIcon className="w-5 ml-3 text-gray-400" />
                        </h3>
                        <p className="mt-2">
                            Reach out to us for personalized assistance, exclusive resources, and expert advice to help you succeed.
                        </p>
                    </div>
                </div>
                <div className="ticket-support flex items-center mt-10">
                    <CodeIcon className="w-20 text-white bg-[#5080FB] p-2 rounded-full" />
                    <div className="ml-5">
                        <h3 className="font-bold text-xl flex items-center">
                            Live Ticket Support
                            <ArrowNarrowRightIcon className="w-5 ml-3 text-gray-400" />
                        </h3>
                        <p className="mt-2">
                            Submit your queries via our ticketing system and receive real-time solutions from our dedicated support team.
                        </p>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default Help;
