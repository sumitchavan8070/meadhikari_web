import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Footer from "@/components/Footer";
import { ArrowNarrowRightIcon, AtSymbolIcon, CodeIcon, ChatIcon, PhoneIcon } from "@heroicons/react/solid";
import Link from "next/link";


const page = () => {
  return (
    <div className="bg-white ">


      {/* Support & Why Choose Meadhikari Section */}
      <div
        id="support"
        className="container flex flex-col-reverse xl:flex-row w-full max-w-[1250px] mx-auto justify-center text-center xl:text-left h-full xl:my-16"
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
            Why Choose Meadhikari for MPSC and Maharashtra Exam Preparation?
          </h2>
          <p className="xl:leading-8 mt-5 xl:mt-10 text-base xl:text-lg text-gray-700">
            Meadhikari sets the standard for public services exam preparation in Maharashtra. Our platform offers
            previous year question papers, tailored MPSC study materials, and tools to ensure your preparation journey is
            complete and efficient. Join the Meadhikari community today and access everything from free MPSC online classes
            to personalized study plans.
          </p>

        
        </div>
      </div>


      {/* Footer Section */}
      <section className="bg-[#F9FAFC] rounded-[50px] py-[80px]">
        <div className=" flex items-center items-center container ">
          <Image
            src="/Mask group.svg"
            alt="meAdhikari Support"
            width={600}
            height={600}
          />
          <div className="flex flex-col gap-[47px] ">
            <h2 className="text-[40px] font-regular">Why Choose
              <span className="text-[#fd853a]"> Meadhikari </span> for MPSC and Maharashtra Exam Preparation?</h2>
            <p className="font-medium text-[#98a2b3]">At Meadhikari, we are dedicated to helping you succeed in the Maharashtra Public Service Commission (MPSC) exams with top-notch study materials, practice papers, and personalized guidance.</p>
            <div className="flex items-center justify-start">
              <div className="w-1/2">
                <p className="block text-[36px] font-medium">450+</p>
                <p className="block text-lg mt-1.5 text-[#98a2b3]">Exam papers</p>
              </div>
              <div className="w-1/2">
                <p className="block text-[36px] font-medium">450+</p>
                <p className="block text-lg mt-1.5 text-[#98a2b3]">Answer keys</p>
              </div>
            </div>

            <Link href={'tel:+91-9595678795'} className="rounded-xl border-2 border-[#151515] w-fit hover:bg-[#FD853A] transition-all text-black px-2 py-2 rounded-md font-semibold">
              Get started
            </Link>
          </div>


        </div>


      </section>
      <div className="pt-16 px-10">
      </div>
    </div>


  );
};

export default page;
