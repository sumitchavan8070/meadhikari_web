import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Footer from "@/components/Footer";
import { ArrowNarrowRightIcon, AtSymbolIcon, CodeIcon, ChatIcon, PhoneIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Header from "@/components/Header";


const page = () => {
  return (
    <div className=" relative">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>

      <Header />




      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 py-[100px] text-center container">
        <h1 class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          <span class="inline-block">Your
            <span class="relative whitespace-nowrap text-blue-600">
              <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
              <span class="relative"> Personal </span></span>
          </span>
          <span class="inline-block">Exam Preparation App</span>
        </h1>

        <p class="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
          <span class="inline-block">Bring functionalities of other apps</span>
          <span class="inline-block">into your Notion workspaces.</span>
        </p>

        <div class="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">

          <div class="relative flex flex-1 flex-col items-stretch sm:flex-none" data-headlessui-state="">
            <Link
              href="/https://play.google.com/store/apps/details?id=com.gradding"
              class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
              id="headlessui-menu-button-:r4:"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Image
                src="/pngfind.com-play-png-347483.png"
                alt="meAdhikari Support"
                width={50}
                height={50}
              />
              <span class="ml-3">Download for Android</span>
            </Link>

          </div>
        </div>
        <div className="mx-auto lg:flex gap-6 p-4 max-w-full py-[40px] sm:grid-cols-2 overflow-x-auto" style={{ display: '-webkit-box' }}>
          <Image
            src="/app_mockups/Apple iPhone 11 Pro Max Screenshot 0.png"
            alt="meAdhikari Support"
            width={150}
            height={150}
            className="mx-auto hover:opacity-75"
          />
          <Image
            src="/app_mockups/Apple iPhone 11 Pro Max Screenshot 1.png"
            alt="Image 2"
            width={150}
            height={150}
            className="mx-auto hover:opacity-75"
          />
          <Image
            src="/app_mockups/Apple iPhone 11 Pro Max Screenshot 2.png"
            alt="Image 3"
            width={150}
            height={150}
            className="mx-auto hover:opacity-75"
          />
          <Image
            src="/app_mockups/Apple iPhone 11 Pro Max Screenshot 3.png"
            alt="Image 4"
            width={150}
            height={150}
            className="mx-auto hover:opacity-75"
          />
          <Image
            src="/app_mockups/Apple iPhone 11 Pro Max Screenshot 4.png"
            alt="Image 5"
            width={150}
            height={150}
            className="mx-auto hover:opacity-75"
          />
        </div>


      </div>



      {/* hire me section  */}
      <section className="">
        <div className="flex flex-col sm:flex-row sm:p-16 items-center container mx-auto max-w-xl py-20 lg:px-8 lg:max-w-7xl">
          <Image
            src="/Mask group.svg"
            alt="meAdhikari Support"
            width={600}
            height={600}
          />
          <div className="flex flex-col gap-[47px] sm:p-16 ">
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
      {/* why chose us section */}
      <section class="py-[100px]">
        <div class="pb-12 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div class="lg:text-center">
              <h2
                class="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                Why choose us?
              </h2>
              <p class="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                We know tech, we know finance. We are fintech experts.
              </p>
              <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                We know how to handle taxation for all the
                countried we operate in. We care for our customers and help them manage cashflows.
              </p>
            </div>

            <div class="mt-10">
              <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div class="relative">
                  <dt>
                    <div
                      class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      {/* <img src="https://www.svgrepo.com/show/503163/api-settings.svg" > */}
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Powerful API</p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div
                      class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      {/* <img src="https://www.svgrepo.com/show/503138/webpack.svg" > */}
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Easy to integrate
                      SDK
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div
                      class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      {/* <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" > */}

                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Low Transaction Cost
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div
                      class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      {/* <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" > */}

                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Powerful Dashboard
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </dd>
                </div>
              </dl>
            </div>

          </div>
        </div>
      </section>



      <div className="">
      </div>


      <section className='bg-[#F9FAFC]'>
        <Footer />
      </section>
    </div>


  );
};

export default page;
