import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Footer from "@/components/Footer";
import { ArrowNarrowRightIcon, AtSymbolIcon, CodeIcon, ChatIcon, PhoneIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Header from "@/components/Header";


const page = () => {
  return (
    <div className="bg-white ">

      <Header />

      <div class="bg-white dark:bg-white-800 pt-20 " id="pricing">
        <div class="relative mx-auto max-w-7xl px-6 text-center lg:px-8 mb-10">
          <div class="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 class="text-lg font-semibold leading-8 text-teal-600 dark:text-teal-400">Pricing</h2>
            <p class="mt-2 text-4xl font-bold tracking-tight text-black-900 dark:text-black-200">Find the right plan for your project</p>
          </div>
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-6">
          <div class="mt-16 flex justify-center">
        
          </div>
        </div>
        <div class="">
          <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3 lg:gap-8">
              <div class="flex flex-col rounded-3xl bg-white dark:bg-whie-900 shadow-xl ring-1 ring-black/10">
                <div class="p-8 sm:p-10">
                  <div class="flex">
                    <h3 class="text-lg font-semibold leading-8 tracking-tight text-teal-600 dark:text-teal-400" id="tier-basic">Basic (For
                      individuals)</h3>
                    <div class="items-center ml-2"></div>
                  </div>
                  <div class="mt-4 flex items-baseline text-5xl tracking-tight text-gray-900 dark:text-gray-200 font-semibold">
                    $0<span class="text-lg font-semibold leading-8 tracking-normal text-gray-500 dark:text-gray-400"></span></div>
                  <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">Great for getting started. Sign your first two documents
                    for free.</p>
                </div>
                <div class="flex flex-1 flex-col p-2">
                  <div class="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 dark:bg-gray-700 p-6 sm:p-8">
                    <ul role="list" class="space-y-6">
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">1 document</p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">10 signees / document</p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Customize signatory name and role</p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">No credit card required</p>
                      </li>
                    </ul>
                    <div class="mt-8"><a
                      class="inline-block w-full rounded-lg bg-teal-600 dark:bg-teal-400 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-teal-700 dark:hover:bg-teal-500 cursor-pointer"
                      aria-describedby="tier-basic">Get started today</a></div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col rounded-3xl bg-white dark:bg-whie-900 shadow-xl ring-1 ring-black/10">
                <div class="p-8 sm:p-10">
                  <div class="flex">
                    <h3 class="text-lg font-semibold leading-8 tracking-tight text-teal-600 dark:text-teal-400" id="tier-plus">Plus (For teams)
                    </h3>
                    <div class="items-center ml-2">
                      <p class="rounded-full text-white bg-teal-600 dark:bg-teal-400/10 px-2.5 py-1 text-xs font-semibold leading-5 text-teal-600 dark:text-teal-400">45% OFF
                      </p>
                    </div>
                  </div>
                  <div class="mt-4 flex items-baseline text-5xl tracking-tight text-gray-900 dark:text-gray-200 font-semibold">
                    $5<span class="text-lg font-semibold leading-8 tracking-normal text-gray-500 dark:text-gray-400">/month</span></div>
                  <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">Need higher quotas? Upgrade and sign up to 10 documents.
                  </p>
                </div>
                <div class="flex flex-1 flex-col p-2">
                  <div class="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 dark:bg-gray-700 p-6 sm:p-8">
                    <ul role="list" class="space-y-6">
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">10 documents</p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">100 signees / document</p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Export your signed documents</p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Shared team accounts</p>
                      </li>
                    </ul>
                    <div class="mt-8"><a
                      class="inline-block w-full rounded-lg bg-teal-600 dark:bg-teal-400 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-teal-700 dark:hover:bg-teal-500 cursor-pointer"
                      aria-describedby="tier-plus">Get started today</a></div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col rounded-3xl bg-white dark:bg-whie-900 shadow-xl ring-1 ring-black/10">
                <div class="p-8 sm:p-10">
                  <div class="flex">
                    <h3 class="text-lg font-semibold leading-8 tracking-tight text-teal-600 dark:text-teal-400" id="tier-custom">Custom (For
                      enterprises)</h3>
                    <div class="items-center ml-2"></div>
                  </div>
                  <div class="mt-4 flex items-baseline text-5xl tracking-tight text-gray-900 dark:text-gray-200 font-semibold">Contact
                    us<span class="text-lg font-semibold leading-8 tracking-normal text-gray-500 dark:text-gray-400"></span></div>
                  <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">Are you a business looking for higher quotas or custom
                    features? We can work with you to develop a solution.</p>
                </div>
                <div class="flex flex-1 flex-col p-2">
                  <div class="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 dark:bg-gray-700 p-6 sm:p-8">
                    <ul role="list" class="space-y-6">
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Custom usage quotas</p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Customized document signing workflows</p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Integration with third-party document management
                          systems</p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600 dark:text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Dedicated account manager &amp; priority support</p>
                      </li>
                    </ul>
                    <div class="mt-8"><a
                      class="inline-block w-full rounded-lg bg-teal-600 dark:bg-teal-400 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-teal-700 dark:hover:bg-teal-500 cursor-pointer"
                      aria-describedby="tier-custom">Contact us</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className='bg-[#F9FAFC]'>
        <Footer />
      </section>
    </div>


  );
};

export default page;
