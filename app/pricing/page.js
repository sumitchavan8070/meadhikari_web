// import Image from "next/image";
// import { CheckCircleIcon } from "@heroicons/react/solid";
// import Footer from "@/components/Footer";
// import { ArrowNarrowRightIcon, AtSymbolIcon, CodeIcon, ChatIcon, PhoneIcon } from "@heroicons/react/solid";
// import Link from "next/link";
// import Header from "@/components/Header";

// const page = () => {
//   return (
//     <div className="relative">
//       <div
//         className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
//         aria-hidden="true"
//       >
//         <div
//           className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
//           style={{
//             clipPath:
//               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//           }}
//         ></div>
//       </div>

//       <Header />
//       {/* New Features */}
//       <section className="bg-white-100">

//         <div className="container mx-auto max-w-xl py-20 space-y-12 lg:px-8 lg:max-w-7xl">
//           <div>
//             <h2 className="text-3xl font-bold text-center sm:text-5xl">New Features</h2>
//             <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
//               Explore the latest features that enhance your learning experience and make it even more exciting.
//             </p>
//           </div>

//           <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
//             {/* Features List */}
//             <div>
//               <div className="space-y-12">
//                 {/* Feature 1 */}
//                 <div className="flex">
//                   <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-100">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-rocket"
//                       >
//                         <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
//                         <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
//                         <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
//                         <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
//                       </svg>
//                     </div>
//                   </div>
//                   <div className="ml-4">
//                     <h4 className="text-lg font-medium leading-6">Advanced Learning Algorithms</h4>
//                     <p className="mt-2 text-gray-700">
//                       Discover our improved learning algorithms that adapt to your preferences and provide even more personalized learning suggestions.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Feature 2 */}
//                 <div className="flex">
//                   <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-100">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-bookmark-plus"
//                       >
//                         <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
//                         <line x1="12" y1="7" x2="12" y2="13"></line>
//                         <line x1="15" y1="10" x2="9" y2="10"></line>
//                       </svg>
//                     </div>
//                   </div>
//                   <div className="ml-4">
//                     <h4 className="text-lg font-medium leading-6">Interactive Learning Resources</h4>
//                     <p className="mt-2 text-gray-700">
//                       Access an extensive library of interactive resources that make your learning journey engaging and interactive.
//                     </p>
//                   </div>
//                 </div>
//                 {/* Feature 3 */}
//                 <div className="flex">
//                   <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center w-12 h-12 rounded-md bg-white-100">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
//                         class="lucide lucide-video">
//                         <path d="m22 8-6 4 6 4V8Z"></path>
//                         <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
//                       </svg>
//                     </div>
//                   </div>
//                   <div className="ml-4">
//                     <h4 className="text-lg font-medium leading-6">Enhanced Video Streaming</h4>
//                     <p className="mt-2 text-gray-700">
//                       Experience seamless video integration with enhanced streaming capabilities, providing a better and more uninterrupted learning experience.
//                     </p>
//                   </div>
//                 </div>
//                 {/* Feature 4 */}

//                 <div className="flex">
//                   <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center w-12 h-12 rounded-md bg-white-100">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
//                         class="lucide lucide-video">
//                         <path d="m22 8-6 4 6 4V8Z"></path>
//                         <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
//                       </svg>
//                     </div>
//                   </div>
//                   <div className="ml-4">
//                     <h4 className="text-lg font-medium leading-6">Enhanced Video Streaming</h4>
//                     <p className="mt-2 text-gray-700">
//                       Experience seamless video integration with enhanced streaming capabilities, providing a better and more uninterrupted learning experience.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Feature Image */}
//             <div className="mt-10 lg:mt-0">
//               <img
//                 src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8Y29tcHV0ZXJ8ZW58MHwwfHx8MTY5OTE3MDk1N3ww&ixlib=rb-4.0.3&q=80&w=1080"
//                 alt="Youtube Button"
//                 className="mx-auto rounded-lg shadow-lg bg-gray-500"
//                 style={{ color: "transparent" }}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Writing has never been so easy */}
//       <div class=" px-2 py-10">

//         <div id="features" class="mx-auto max-w-6xl">
//           <p class="text-center text-base font-semibold leading-7 text-primary-500">Features</p>
//           <h2 class="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
//             Writing has never been so easy
//           </h2>
//           <ul class="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
//             <li class="rounded-xl bg-[#F9FAFC] px-6 py-8 shadow-sm">

//               <Image
//                 height={40}
//                 width={40}
//                 src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
//                 alt=""
//                 className="mx-auto"
//               />
//               <h3 class="my-3 font-display font-medium">Powered by ChatGPT</h3>
//               <p class="mt-1.5 text-sm leading-6 text-secondary-500">
//                 the cutting-edge language model that makes interactions a breeze. With its user-friendly interface,
//                 effortlessly tap into the world of AI-generated text.
//               </p>

//             </li>
//             <li class="rounded-xl  px-6 py-8 shadow-sm bg-[#F9FAFC]">
//               <Image
//                 height={40}
//                 width={40}
//                 src="https://www.svgrepo.com/show/530442/port-detection.svg"
//                 alt=""
//                 className="mx-auto"

//               />

//               <h3 class="my-3 font-display font-medium">Easy to use</h3>
//               <p class="mt-1.5 text-sm leading-6 text-secondary-500">
//                 Simply input your subject, click the generate button, and the result will appear in seconds just like
//                 magick.
//               </p>

//             </li>
//             <li class="rounded-xl bg-[#F9FAFC] px-6 py-8 shadow-sm">
//               <Image
//                 height={40}
//                 width={40}
//                 src="https://www.svgrepo.com/show/530440/machine-vision.svg"
//                 alt=""
//                 className="mx-auto"

//               />
//               <h3 class="my-3 font-display font-medium">Custom settings</h3>
//               <p class="mt-1.5 text-sm leading-6 text-secondary-500">
//                 We offer advanced customization. You can freely combine options like roles, languages, publish, tones,
//                 lengths,
//                 and formats.
//               </p>

//             </li>
//             <li class="rounded-xl bg-[#F9FAFC] px-6 py-8 shadow-sm">
//               <a href="/pricing" class="group">
//                 <Image
//                   height={40}
//                   width={40}
//                   src="https://www.svgrepo.com/show/530440/machine-vision.svg"
//                   alt=""
//                   className="mx-auto"

//                 />
//                 <h3 class="my-3 font-display font-medium group-hover:text-primary-500">Free trial</h3>
//                 <p class="mt-1.5 text-sm leading-6 text-secondary-500">We offer a free trial service without login. We
//                   provide
//                   many payment options including pay-as-you-go and subscription.</p>
//               </a>
//             </li>
//             <li class="rounded-xl bg-[#F9FAFC] px-6 py-8 shadow-sm">
//               <a href="/templates" class="group">
//                 <Image
//                   height={40}
//                   width={40}
//                   src="https://www.svgrepo.com/show/530450/page-analysis.svg"
//                   alt=""
//                   className="mx-auto"
//                 />
//                 <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
//                   90+ templates
//                 </h3>
//                 <p class="mt-1.5 text-sm leading-6 text-secondary-500">We offer many templates covering areas such as
//                   writing,
//                   education, lifestyle and creativity to inspire your potential. </p>
//               </a>
//             </li>
//             <li class="rounded-xl bg-[#F9FAFC] px-6 py-8 shadow-sm">
//               <a href="/download" class="group">
//                 <Image
//                   height={40}
//                   width={40}
//                   src="https://www.svgrepo.com/show/530453/mail-reception.svg"
//                   alt=""
//                   className="mx-auto"

//                 />
//                 <h3 class="my-3 font-display font-medium group-hover:text-primary-500">Use Anywhere</h3>
//                 <p class="mt-1.5 text-sm leading-6 text-secondary-500">Our product is compatible with multiple platforms
//                   including Web, Chrome, Windows and Mac, you can use MagickPen anywhere.</p>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div>

//       </div>

//       {/* pricing component */}
//       {/* <div class="bg-white  bg-white-800 py-20 " id="pricing">
//         <div class="relative mx-auto max-w-7xl px-6 text-center lg:px-8 mb-10">
//           <div class="mx-auto max-w-2xl lg:max-w-4xl">
//             <h2 class="text-lg font-semibold leading-8 text-teal-600  text-teal-400">Pricing</h2>
//             <p class="mt-2 text-4xl font-bold tracking-tight text-black-900  text-black-200">Find the right plan for your project</p>
//           </div>
//         </div>
//         <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-6">
//           <div class="mt-16 flex justify-center">

//           </div>
//         </div>
//         <div class="">
//           <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
//             <div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3 lg:gap-8">
//               <div class="flex flex-col rounded-3xl bg-white  bg-whie-900 shadow-xl ring-1 ring-black/10">
//                 <div class="p-8 sm:p-10">
//                   <div class="flex">
//                     <h3 class="text-lg font-semibold leading-8 tracking-tight text-teal-600  text-teal-400" id="tier-basic">Basic (For
//                       individuals)</h3>
//                     <div class="items-center ml-2"></div>
//                   </div>
//                   <div class="mt-4 flex items-baseline text-5xl tracking-tight text-gray-900  text-gray-200 font-semibold">
//                     $0<span class="text-lg font-semibold leading-8 tracking-normal text-gray-500  text-gray-400"></span></div>
//                   <p class="mt-6 text-base leading-7 text-gray-600  text-gray-300">Great for getting started. Sign your first two documents
//                     for free.</p>
//                 </div>
//                 <div class="flex flex-1 flex-col p-2">
//                   <div class="flex flex-1 flex-col justify-between rounded-2xl bg-white-50  bg-white-700 p-6 sm:p-8">
//                     <ul role="list" class="space-y-6">
//                       <li class="flex items-start">
//                         <div class="flex-shrink-0">
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                             stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
//                           </svg>
//                         </div>
//                         <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">1 document</p>
//                       </li>
//                       <li class="flex items-start">
//                         <div class="flex-shrink-0">
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                             stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
//                           </svg>
//                         </div>
//                         <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">10 signees / document</p>
//                       </li>
//                       <li class="flex items-start">
//                         <div class="flex-shrink-0">
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                             stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
//                           </svg>
//                         </div>
//                         <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">Customize signatory name and role</p>
//                       </li>
//                       <li class="flex items-start">
//                         <div class="flex-shrink-0">
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                             stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
//                           </svg>
//                         </div>
//                         <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">No credit card required</p>
//                       </li>
//                     </ul>
//                     <div class="mt-8"><a
//                       class="inline-block w-full rounded-lg bg-teal-600  bg-teal-400 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-teal-700  hover:bg-teal-500 cursor-pointer"
//                       aria-describedby="tier-basic">Get started today</a></div>
//                   </div>
//                 </div>
//               </div>
//               <div class="flex flex-col rounded-3xl bg-white  bg-whie-900 shadow-xl ring-1 ring-black/10">
//                 <div class="p-8 sm:p-10">
//                   <div class="flex">
//                     <h3 class="text-lg font-semibold leading-8 tracking-tight text-teal-600  text-teal-400" id="tier-plus">Plus (For teams)
//                     </h3>
//                     <div class="items-center ml-2">
//                       <p class="rounded-full text-white bg-teal-600  bg-teal-400/10 px-2.5 py-1 text-xs font-semibold leading-5 text-teal-600  text-teal-400">45% OFF
//                       </p>
//                     </div>
//                   </div>
//                   <div class="mt-4 flex items-baseline text-5xl tracking-tight text-gray-900  text-gray-200 font-semibold">
//                     $5<span class="text-lg font-semibold leading-8 tracking-normal text-gray-500  text-gray-400">/month</span></div>
//                   <p class="mt-6 text-base leading-7 text-gray-600  text-gray-300">Need higher quotas? Upgrade and sign up to 10 documents.
//                   </p>
//                 </div>
//                 <div class="flex flex-1 flex-col p-2">
//                   <div class="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50  bg-gray-700 p-6 sm:p-8">
//                     <ul role="list" class="space-y-6">
//                       <li class="flex items-start">
//                         <div class="flex-shrink-0">
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                             stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
//                           </svg>
//                         </div>
//                         <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">10 documents</p>
//                       </li>
//                       <li class="flex items-start">
//                         <div class="flex-shrink-0">
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                             stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
//                           </svg>
//                         </div>
//                         <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">100 signees / document</p>
//                       </li>
//                       <li class="flex items-start">
//                         <div class="flex-shrink-0">
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                             stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
//                           </svg>
//                         </div>
//                         <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">Export your signed documents</p>
//                       </li>
//                       <li class="flex items-start">
//                         <div class="flex-shrink-0">
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                             stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
//                           </svg>
//                         </div>
//                         <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">Shared team accounts</p>
//                       </li>
//                     </ul>
//                     <div class="mt-8"><a
//                       class="inline-block w-full rounded-lg bg-teal-600  bg-teal-400 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-teal-700  hover:bg-teal-500 cursor-pointer"
//                       aria-describedby="tier-plus">Get started today</a></div>
//                   </div>
//                 </div>
//               </div>
//               <div class="flex flex-col rounded-3xl bg-white  bg-whie-900 shadow-xl ring-1 ring-black/10">
//                 <div class="p-8 sm:p-10">
//                   <div class="flex">
//                     <h3 class="text-lg font-semibold leading-8 tracking-tight text-teal-600  text-teal-400" id="tier-custom">Custom (For
//                       enterprises)</h3>
//                     <div class="items-center ml-2"></div>
//                   </div>
//                   <div class="mt-4 flex items-baseline text-5xl tracking-tight text-gray-900  text-gray-200 font-semibold">Contact
//                     us<span class="text-lg font-semibold leading-8 tracking-normal text-gray-500  text-gray-400"></span></div>
//                   <p class="mt-6 text-base leading-7 text-gray-600  text-gray-300">Are you a business looking for higher quotas or custom
//                     features? We can work with you to develop a solution.</p>
//                 </div>
//                 <div class="flex flex-1 flex-col p-2">
//                   <div class="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50  bg-gray-700 p-6 sm:p-8">
//                     <ul role="list" class="space-y-6">
//                       <li class="flex items-start">
//                         <div class="flex-shrink-0">
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                             stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
//                           </svg>
//                         </div>
//                         <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">Custom usage quotas</p>
//                       </li>
//                       <li class="flex items-start">
//                         <div class="flex-shrink-0">
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                             stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
//                           </svg>
//                         </div>
//                         <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">Customized document signing workflows</p>
//                       </li>
//                       <li class="flex items-start">
//                         <div class="flex-shrink-0">
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                             stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
//                           </svg>
//                         </div>
//                         <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">Integration with third-party document management
//                           systems</p>
//                       </li>
//                       <li class="flex items-start">
//                         <div class="flex-shrink-0">
//                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//                             stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
//                           </svg>
//                         </div>
//                         <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">Dedicated account manager &amp; priority support</p>
//                       </li>
//                     </ul>
//                     <div class="mt-8"><a
//                       class="inline-block w-full rounded-lg bg-teal-600  bg-teal-400 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-teal-700  hover:bg-teal-500 cursor-pointer"
//                       aria-describedby="tier-custom">Contact us</a></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}
//       <div class="space-y-5 px-12 pb-[100px] container">
//         <div class="container flex space-x-2">
//           <div class="mx-auto max-w-2xl lg:max-w-4xl text-center p-12">
//             <h2 class="mx-auto text-lg font-semibold leading-8 text-teal-600 text-teal-400">Pricing</h2>
//             <p class="mx-auto mt-2 text-4xl font-bold tracking-tight text-black-900  text-black-200">Find the right plan for your project</p>
//           </div>
//           {/* <div class="no-scrollbar overflow-hidden">
//             <div class="flex no-scrollbar justify-start space-x-6 items-center overflow-x-auto">
//                 <button
//                     class="font-semibold whitespace-nowrap text-base text-gray-500 hover:text-gray-600 transition-colors duration-300">Monthly</button><button
//                     class="font-semibold whitespace-nowrap text-base hover:text-gray-600 transition-colors duration-300 text-gray-900">Annually</button>
//             </div>
//         </div><button class="text-purple-500 font-semibold text-base">(2 months free)</button> */}
//         </div>
//         <div class="demo-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           <div
//             class="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative">
//             <div class="h-full">
//               <div class="h-full z-10 relative">
//                 <div class="flex flex-col flex-1 justify-between h-full space-y-5">
//                   <div class="flex justify-between flex-col">
//                     <div class="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
//                       <span>Starter</span>
//                     </div>
//                     <div class="pt-5 text-gray-500 font-medium text-base space-y-1">
//                       <div class="flex items-center align-bottom"><span class="pt-1.5">$</span>
//                         <div class="ml-1 mr-2 text-2xl md:text-3xl font-bold text-gray-900"><span>10</span>
//                         </div><span class="pt-1.5">per month</span>
//                       </div>
//                       <div class="text-base">billed
//                         annually
//                       </div>
//                     </div>
//                     <div class="">
//                       <ul class="space-y-2 pt-8">
//                         <li class="flex items-center font-medium space-x-2 text-black">
//                           <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                               d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                               stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                               stroke-linejoin="round"></path>
//                           </svg><span>Everything in Free</span>
//                         </li>
//                         <li class="flex items-center font-medium space-x-2 text-black">
//                           <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                               d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                               stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                               stroke-linejoin="round"></path>
//                           </svg><span>5,000 events / month</span>
//                         </li>
//                         <li class="flex items-center font-medium space-x-2 text-black">
//                           <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                               d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                               stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                               stroke-linejoin="round"></path>
//                           </svg><span>Unlimited seats</span>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div class="pt-2">
//                     <a href="/billing" type="button" target="_blank"
//                       class="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-2xl cursor-pointer"><span
//                         class="w-full font-semibold text-base">Choose Starter</span>
//                       <svg class="inline-block h-6" viewBox="0 0 24 25" fill="none"
//                         xmlns="http://www.w3.org/2000/svg">
//                         <path d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5" stroke="currentColor"
//                           stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//                 <div class="hidden">
//                   <ul class="space-y-2 pt-8">
//                     <li class="flex items-center font-medium space-x-2 text-black">
//                       <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                           stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                           stroke-linejoin="round"></path>
//                       </svg><span>Everything in Free</span>
//                     </li>
//                     <li class="flex items-center font-medium space-x-2 text-black">
//                       <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                           stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                           stroke-linejoin="round"></path>
//                       </svg><span>5,000 events / month</span>
//                     </li>
//                     <li class="flex items-center font-medium space-x-2 text-black">
//                       <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                           stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                           stroke-linejoin="round"></path>
//                       </svg><span>Unlimited seats</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             class="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative">
//             <div class="h-full">
//               <div class="h-full z-10 relative">
//                 <div class="flex flex-col flex-1 justify-between h-full space-y-5">
//                   <div class="flex justify-between flex-col">
//                     <div class="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
//                       <span>Startup</span>
//                       <svg class="h-6 w-6 animate-ping-slow text-gray-500" viewBox="0 0 50 50" fill="none"
//                         xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           d="M30.5 25C30.5 28.0376 28.0376 30.5 25 30.5C21.9624 30.5 19.5 28.0376 19.5 25C19.5 21.9624 21.9624 19.5 25 19.5C28.0376 19.5 30.5 21.9624 30.5 25Z"
//                           stroke="currentColor" stroke-opacity="0.7" stroke-width="4"
//                           stroke-linecap="round" stroke-linejoin="round"></path>
//                         <path
//                           d="M38.75 25C38.75 32.5939 32.5939 38.75 25 38.75C17.4061 38.75 11.25 32.5939 11.25 25C11.25 17.4061 17.4061 11.25 25 11.25C32.5939 11.25 38.75 17.4061 38.75 25Z"
//                           stroke="currentColor" stroke-opacity="0.4" stroke-width="4.5"
//                           stroke-linecap="round" stroke-linejoin="round"></path>
//                         <path
//                           d="M47.5 25C47.5 37.4264 37.4264 47.5 25 47.5C12.5736 47.5 2.5 37.4264 2.5 25C2.5 12.5736 12.5736 2.5 25 2.5C37.4264 2.5 47.5 12.5736 47.5 25Z"
//                           stroke="currentColor" stroke-opacity="0.1" stroke-width="5"
//                           stroke-linecap="round" stroke-linejoin="round"></path>
//                       </svg>
//                     </div>
//                     <div class="pt-5 text-gray-500 font-medium text-base space-y-1">
//                       <div class="flex items-center align-bottom"><span class="pt-1.5">$</span>
//                         <div class="ml-1 mr-2 text-2xl md:text-3xl font-bold text-gray-900"><span>16</span>
//                         </div><span class="pt-1.5">per month</span>
//                       </div>
//                       <div class="text-base">billed
//                         annually
//                       </div>
//                     </div>
//                     <div class="">
//                       <ul class="space-y-2 pt-8">
//                         <li class="flex items-center font-medium space-x-2 text-black">
//                           <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                               d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                               stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                               stroke-linejoin="round"></path>
//                           </svg><span>Everything in Starter</span>
//                         </li>
//                         <li class="flex items-center font-medium space-x-2 text-black">
//                           <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                               d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                               stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                               stroke-linejoin="round"></path>
//                           </svg><span>20,000 events / month</span>
//                         </li>
//                         <li class="flex items-center font-medium space-x-2 text-black">
//                           <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                               d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                               stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                               stroke-linejoin="round"></path>
//                           </svg><span>Unlimited seats</span>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div class="pt-2">
//                     <a href="/billing" type="button" target="_blank"
//                       class="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-2xl cursor-pointer"><span
//                         class="w-full font-semibold text-base">Choose Startup</span>
//                       <svg class="inline-block h-6" viewBox="0 0 24 25" fill="none"
//                         xmlns="http://www.w3.org/2000/svg">
//                         <path d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5" stroke="currentColor"
//                           stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//                 <div class="hidden">
//                   <ul class="space-y-2 pt-8">
//                     <li class="flex items-center font-medium space-x-2 text-black">
//                       <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                           stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                           stroke-linejoin="round"></path>
//                       </svg><span>Everything in Starter</span>
//                     </li>
//                     <li class="flex items-center font-medium space-x-2 text-black">
//                       <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                           stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                           stroke-linejoin="round"></path>
//                       </svg><span>20,000 events / month</span>
//                     </li>
//                     <li class="flex items-center font-medium space-x-2 text-black">
//                       <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                           stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                           stroke-linejoin="round"></path>
//                       </svg><span>Unlimited seats</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             class="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative">
//             <div class="h-full">
//               <div class="h-full z-10 relative">
//                 <div class="flex flex-col flex-1 justify-between h-full space-y-5">
//                   <div class="flex justify-between flex-col">
//                     <div class="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
//                       <span>Professional</span>
//                     </div>
//                     <div class="pt-5 text-gray-500 font-medium text-base space-y-1">
//                       <div class="flex items-center align-bottom"><span class="pt-1.5">$</span>
//                         <div class="ml-1 mr-2 text-2xl md:text-3xl font-bold text-gray-900"><span>49</span>
//                         </div><span class="pt-1.5">per month</span>
//                       </div>
//                       <div class="text-base">billed
//                         annually
//                       </div>
//                     </div>
//                     <div class="">
//                       <ul class="space-y-2 pt-8">
//                         <li class="flex items-center font-medium space-x-2 text-black">
//                           <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                               d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                               stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                               stroke-linejoin="round"></path>
//                           </svg><span>Everything in Startup</span>
//                         </li>
//                         <li class="flex items-center font-medium space-x-2 text-black">
//                           <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                               d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                               stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                               stroke-linejoin="round"></path>
//                           </svg><span>80,000 events / mo</span>
//                         </li>
//                         <li class="flex items-center font-medium space-x-2 text-black">
//                           <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                               d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                               stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                               stroke-linejoin="round"></path>
//                           </svg><span>Unlimited seats</span>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div class="pt-2">
//                     <a href="/billing" type="button" target="_blank"
//                       class="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-2xl cursor-pointer"><span
//                         class="w-full font-semibold text-base">Choose Pro</span>
//                       <svg class="inline-block h-6" viewBox="0 0 24 25" fill="none"
//                         xmlns="http://www.w3.org/2000/svg">
//                         <path d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5" stroke="currentColor"
//                           stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//                 <div class="hidden">
//                   <ul class="space-y-2 pt-8">
//                     <li class="flex items-center font-medium space-x-2 text-black">
//                       <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                           stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                           stroke-linejoin="round"></path>
//                       </svg><span>Everything in Startup</span>
//                     </li>
//                     <li class="flex items-center font-medium space-x-2 text-black">
//                       <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                           stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                           stroke-linejoin="round"></path>
//                       </svg><span>80,000 events / mo</span>
//                     </li>
//                     <li class="flex items-center font-medium space-x-2 text-black">
//                       <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                           stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                           stroke-linejoin="round"></path>
//                       </svg><span>Unlimited seats</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             class="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative lg:col-span-2">
//             <div class="h-full">
//               <div class="h-full z-10 relative lg:flex lg:justify-between lg:w-full lg:pr-8 lg:items-center  ">
//                 <div class="flex flex-col flex-1 justify-between h-full space-y-5">
//                   <div class="flex justify-between flex-col">
//                     <div class="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
//                       <span>Free</span>
//                     </div>
//                     <div class="pt-5 text-gray-500 font-medium text-base space-y-1">
//                       <div class="flex items-center align-bottom"><span class="pt-1.5">$</span>
//                         <div class="ml-1 mr-2 text-2xl md:text-3xl font-bold text-gray-900"><span>0</span>
//                         </div><span class="pt-1.5">per month</span>
//                       </div>
//                       <div class="text-base">billed
//                         annually
//                       </div>
//                     </div>
//                     <div class="lg:hidden">
//                       <ul class="space-y-2 pt-8 lg:pt-0">
//                         <li class="flex items-center font-medium space-x-2 text-black">
//                           <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                               d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                               stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                               stroke-linejoin="round"></path>
//                           </svg><span>No credit card required</span>
//                         </li>
//                         <li class="flex items-center font-medium space-x-2 text-black">
//                           <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                               d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                               stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                               stroke-linejoin="round"></path>
//                           </svg><span>Free forever</span>
//                         </li>
//                         <li class="flex items-center font-medium space-x-2 text-gray-600">
//                           <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                               d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                               stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                               stroke-linejoin="round"></path>
//                           </svg><span>3 seats</span>
//                         </li>
//                         <li class="flex items-center font-medium space-x-2 text-gray-600">
//                           <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                               d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                               stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                               stroke-linejoin="round"></path>
//                           </svg><span>200 events / month</span>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div class="pt-2">
//                     <a href="/billing" type="button" target="_blank"
//                       class="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-2xl cursor-pointer"><span
//                         class="w-full font-semibold text-base">Choose Free</span>
//                       <svg class="inline-block h-6" viewBox="0 0 24 25" fill="none"
//                         xmlns="http://www.w3.org/2000/svg">
//                         <path d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5" stroke="currentColor"
//                           stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//                 <div class="hidden lg:block">
//                   <ul class="space-y-2 pt-8 lg:pt-0">
//                     <li class="flex items-center font-medium space-x-2 text-black">
//                       <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                           stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                           stroke-linejoin="round"></path>
//                       </svg><span>No credit card required</span>
//                     </li>
//                     <li class="flex items-center font-medium space-x-2 text-black">
//                       <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                           stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                           stroke-linejoin="round"></path>
//                       </svg><span>Free forever</span>
//                     </li>
//                     <li class="flex items-center font-medium space-x-2 text-gray-600">
//                       <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                           stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                           stroke-linejoin="round"></path>
//                       </svg><span>3 seats</span>
//                     </li>
//                     <li class="flex items-center font-medium space-x-2 text-gray-600">
//                       <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                           d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
//                           stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                           stroke-linejoin="round"></path>
//                       </svg><span>200 events / month</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             class="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative sm:col-span-2 lg:col-span-1">
//             <div class="h-full">
//               <div class="flex flex-col justify-between h-full space-y-5">
//                 <div class="flex justify-between flex-col">
//                   <div class="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
//                     <span>Enterprise</span>
//                   </div>
//                   <div class="pt-5">Contact us for a custom quote and a custom onboarding process.</div>
//                 </div>
//                 <div class="pt-2">
//                   <a href="#" type="button"
//                     class="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-2xl cursor-pointer"><span
//                       class="w-full font-semibold text-base">Contact Sales</span>
//                     <svg class="inline-block h-6" viewBox="0 0 24 25" fill="none"
//                       xmlns="http://www.w3.org/2000/svg">
//                       <path d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5" stroke="currentColor" stroke-width="2"
//                         stroke-linecap="round" stroke-linejoin="round"></path>
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <section className='bg-[#F9FAFC]'>
//         <Footer />
//       </section>
//     </div>

//   );
// };

// export default page;

import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Footer from "@/components/Footer";
import {
  ArrowNarrowRightIcon,
  AtSymbolIcon,
  CodeIcon,
  ChatIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import Header from "@/components/Header";

const page = () => {
  return (
    <div className="relative">
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
      {/* New Features */}
      <section className="bg-white-100">
        <div className="container mx-auto max-w-xl py-20 space-y-12 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold text-center sm:text-5xl">
              New Features
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center">
              Explore the latest features that enhance your learning experience
              and make it even more exciting.
            </p>
          </div>

          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            {/* Features List */}
            <div>
              <div className="space-y-12">
                {/* Feature 1 */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-rocket"
                      >
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6">
                      Advanced Learning Algorithms
                    </h4>
                    <p className="mt-2 text-gray-700">
                      Discover our improved learning algorithms that adapt to
                      your preferences and provide even more personalized
                      learning suggestions.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-bookmark-plus"
                      >
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                        <line x1="12" y1="7" x2="12" y2="13"></line>
                        <line x1="15" y1="10" x2="9" y2="10"></line>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6">
                      Interactive Learning Resources
                    </h4>
                    <p className="mt-2 text-gray-700">
                      Access an extensive library of interactive resources that
                      make your learning journey engaging and interactive.
                    </p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-white-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-video"
                      >
                        <path d="m22 8-6 4 6 4V8Z"></path>
                        <rect
                          width="14"
                          height="12"
                          x="2"
                          y="6"
                          rx="2"
                          ry="2"
                        ></rect>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6">
                      Enhanced Video Streaming
                    </h4>
                    <p className="mt-2 text-gray-700">
                      Experience seamless video integration with enhanced
                      streaming capabilities, providing a better and more
                      uninterrupted learning experience.
                    </p>
                  </div>
                </div>
                {/* Feature 4 */}

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-white-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-video"
                      >
                        <path d="m22 8-6 4 6 4V8Z"></path>
                        <rect
                          width="14"
                          height="12"
                          x="2"
                          y="6"
                          rx="2"
                          ry="2"
                        ></rect>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6">
                      Enhanced Video Streaming
                    </h4>
                    <p className="mt-2 text-gray-700">
                      Experience seamless video integration with enhanced
                      streaming capabilities, providing a better and more
                      uninterrupted learning experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Image */}
            <div className="mt-10 lg:mt-0">
              {/* <img
                src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8Y29tcHV0ZXJ8ZW58MHwwfHx8MTY5OTE3MDk1N3ww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Youtube Button"
                className="mx-auto rounded-lg shadow-lg bg-gray-500"
                style={{ color: "transparent" }}
              /> */}
              <Image
                src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8Y29tcHV0ZXJ8ZW58MHwwfHx8MTY5OTE3MDk1N3ww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Youtube Button"
                className="mx-auto rounded-lg shadow-lg bg-gray-500"
                width={600}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Writing has never been so easy */}
      <div class=" px-2 py-10">
        <div id="features" class="mx-auto max-w-6xl">
          <p class="text-center text-base font-semibold leading-7 text-primary-500">
            Features
          </p>
          <h2 class="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Writing has never been so easy
          </h2>
          <ul class="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
            <li class="rounded-xl bg-[#F9FAFC] px-6 py-8 shadow-sm">
              <Image
                height={40}
                width={40}
                src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
                alt=""
                className="mx-auto"
              />
              <h3 class="my-3 font-display font-medium">Powered by ChatGPT</h3>
              <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                the cutting-edge language model that makes interactions a
                breeze. With its user-friendly interface, effortlessly tap into
                the world of AI-generated text.
              </p>
            </li>
            <li class="rounded-xl  px-6 py-8 shadow-sm bg-[#F9FAFC]">
              <Image
                height={40}
                width={40}
                src="https://www.svgrepo.com/show/530442/port-detection.svg"
                alt=""
                className="mx-auto"
              />

              <h3 class="my-3 font-display font-medium">Easy to use</h3>
              <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                Simply input your subject, click the generate button, and the
                result will appear in seconds just like magick.
              </p>
            </li>
            <li class="rounded-xl bg-[#F9FAFC] px-6 py-8 shadow-sm">
              <Image
                height={40}
                width={40}
                src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                alt=""
                className="mx-auto"
              />
              <h3 class="my-3 font-display font-medium">Custom settings</h3>
              <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                We offer advanced customization. You can freely combine options
                like roles, languages, publish, tones, lengths, and formats.
              </p>
            </li>
            <li class="rounded-xl bg-[#F9FAFC] px-6 py-8 shadow-sm">
              <a href="/pricing" class="group">
                <Image
                  height={40}
                  width={40}
                  src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                  alt=""
                  className="mx-auto"
                />
                <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
                  Free trial
                </h3>
                <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                  We offer a free trial service without login. We provide many
                  payment options including pay-as-you-go and subscription.
                </p>
              </a>
            </li>
            <li class="rounded-xl bg-[#F9FAFC] px-6 py-8 shadow-sm">
              <a href="/templates" class="group">
                <Image
                  height={40}
                  width={40}
                  src="https://www.svgrepo.com/show/530450/page-analysis.svg"
                  alt=""
                  className="mx-auto"
                />
                <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
                  90+ templates
                </h3>
                <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                  We offer many templates covering areas such as writing,
                  education, lifestyle and creativity to inspire your potential.{" "}
                </p>
              </a>
            </li>
            <li class="rounded-xl bg-[#F9FAFC] px-6 py-8 shadow-sm">
              <a href="/download" class="group">
                <Image
                  height={40}
                  width={40}
                  src="https://www.svgrepo.com/show/530453/mail-reception.svg"
                  alt=""
                  className="mx-auto"
                />
                <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
                  Use Anywhere
                </h3>
                <p class="mt-1.5 text-sm leading-6 text-secondary-500">
                  Our product is compatible with multiple platforms including
                  Web, Chrome, Windows and Mac, you can use MagickPen anywhere.
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div></div>

      {/* pricing component */}
      {/* <div class="bg-white  bg-white-800 py-20 " id="pricing">
        <div class="relative mx-auto max-w-7xl px-6 text-center lg:px-8 mb-10">
          <div class="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 class="text-lg font-semibold leading-8 text-teal-600  text-teal-400">Pricing</h2>
            <p class="mt-2 text-4xl font-bold tracking-tight text-black-900  text-black-200">Find the right plan for your project</p>
          </div>
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-6">
          <div class="mt-16 flex justify-center">

          </div>
        </div>
        <div class="">
          <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-7xl lg:grid-cols-3 lg:gap-8">
              <div class="flex flex-col rounded-3xl bg-white  bg-whie-900 shadow-xl ring-1 ring-black/10">
                <div class="p-8 sm:p-10">
                  <div class="flex">
                    <h3 class="text-lg font-semibold leading-8 tracking-tight text-teal-600  text-teal-400" id="tier-basic">Basic (For
                      individuals)</h3>
                    <div class="items-center ml-2"></div>
                  </div>
                  <div class="mt-4 flex items-baseline text-5xl tracking-tight text-gray-900  text-gray-200 font-semibold">
                    $0<span class="text-lg font-semibold leading-8 tracking-normal text-gray-500  text-gray-400"></span></div>
                  <p class="mt-6 text-base leading-7 text-gray-600  text-gray-300">Great for getting started. Sign your first two documents
                    for free.</p>
                </div>
                <div class="flex flex-1 flex-col p-2">
                  <div class="flex flex-1 flex-col justify-between rounded-2xl bg-white-50  bg-white-700 p-6 sm:p-8">
                    <ul role="list" class="space-y-6">
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">1 document</p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">10 signees / document</p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">Customize signatory name and role</p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">No credit card required</p>
                      </li>
                    </ul>
                    <div class="mt-8"><a
                      class="inline-block w-full rounded-lg bg-teal-600  bg-teal-400 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-teal-700  hover:bg-teal-500 cursor-pointer"
                      aria-describedby="tier-basic">Get started today</a></div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col rounded-3xl bg-white  bg-whie-900 shadow-xl ring-1 ring-black/10">
                <div class="p-8 sm:p-10">
                  <div class="flex">
                    <h3 class="text-lg font-semibold leading-8 tracking-tight text-teal-600  text-teal-400" id="tier-plus">Plus (For teams)
                    </h3>
                    <div class="items-center ml-2">
                      <p class="rounded-full text-white bg-teal-600  bg-teal-400/10 px-2.5 py-1 text-xs font-semibold leading-5 text-teal-600  text-teal-400">45% OFF
                      </p>
                    </div>
                  </div>
                  <div class="mt-4 flex items-baseline text-5xl tracking-tight text-gray-900  text-gray-200 font-semibold">
                    $5<span class="text-lg font-semibold leading-8 tracking-normal text-gray-500  text-gray-400">/month</span></div>
                  <p class="mt-6 text-base leading-7 text-gray-600  text-gray-300">Need higher quotas? Upgrade and sign up to 10 documents.
                  </p>
                </div>
                <div class="flex flex-1 flex-col p-2">
                  <div class="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50  bg-gray-700 p-6 sm:p-8">
                    <ul role="list" class="space-y-6">
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">10 documents</p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">100 signees / document</p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">Export your signed documents</p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">Shared team accounts</p>
                      </li>
                    </ul>
                    <div class="mt-8"><a
                      class="inline-block w-full rounded-lg bg-teal-600  bg-teal-400 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-teal-700  hover:bg-teal-500 cursor-pointer"
                      aria-describedby="tier-plus">Get started today</a></div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col rounded-3xl bg-white  bg-whie-900 shadow-xl ring-1 ring-black/10">
                <div class="p-8 sm:p-10">
                  <div class="flex">
                    <h3 class="text-lg font-semibold leading-8 tracking-tight text-teal-600  text-teal-400" id="tier-custom">Custom (For
                      enterprises)</h3>
                    <div class="items-center ml-2"></div>
                  </div>
                  <div class="mt-4 flex items-baseline text-5xl tracking-tight text-gray-900  text-gray-200 font-semibold">Contact
                    us<span class="text-lg font-semibold leading-8 tracking-normal text-gray-500  text-gray-400"></span></div>
                  <p class="mt-6 text-base leading-7 text-gray-600  text-gray-300">Are you a business looking for higher quotas or custom
                    features? We can work with you to develop a solution.</p>
                </div>
                <div class="flex flex-1 flex-col p-2">
                  <div class="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50  bg-gray-700 p-6 sm:p-8">
                    <ul role="list" class="space-y-6">
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">Custom usage quotas</p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">Customized document signing workflows</p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">Integration with third-party document management
                          systems</p>
                      </li>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-teal-600  text-teal-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                          </svg>
                        </div>
                        <p class="ml-3 text-sm leading-6 text-gray-600  text-gray-300">Dedicated account manager &amp; priority support</p>
                      </li>
                    </ul>
                    <div class="mt-8"><a
                      class="inline-block w-full rounded-lg bg-teal-600  bg-teal-400 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-teal-700  hover:bg-teal-500 cursor-pointer"
                      aria-describedby="tier-custom">Contact us</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div class="space-y-5 px-12 pb-[100px] container">
        <div class="container flex space-x-2">
          <div class="mx-auto max-w-2xl lg:max-w-4xl text-center p-12">
            <h2 class="mx-auto text-lg font-semibold leading-8 text-teal-600 text-teal-400">
              Pricing
            </h2>
            <p class="mx-auto mt-2 text-4xl font-bold tracking-tight text-black-900  text-black-200">
              Find the right plan for your project
            </p>
          </div>
          {/* <div class="no-scrollbar overflow-hidden">
            <div class="flex no-scrollbar justify-start space-x-6 items-center overflow-x-auto">
                <button
                    class="font-semibold whitespace-nowrap text-base text-gray-500 hover:text-gray-600 transition-colors duration-300">Monthly</button><button
                    class="font-semibold whitespace-nowrap text-base hover:text-gray-600 transition-colors duration-300 text-gray-900">Annually</button>
            </div>
        </div><button class="text-purple-500 font-semibold text-base">(2 months free)</button> */}
        </div>
        <div class="demo-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div class="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative">
            <div class="h-full">
              <div class="h-full z-10 relative">
                <div class="flex flex-col flex-1 justify-between h-full space-y-5">
                  <div class="flex justify-between flex-col">
                    <div class="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
                      <span>Starter</span>
                    </div>
                    <div class="pt-5 text-gray-500 font-medium text-base space-y-1">
                      <div class="flex items-center align-bottom">
                        <span class="pt-1.5">$</span>
                        <div class="ml-1 mr-2 text-2xl md:text-3xl font-bold text-gray-900">
                          <span>10</span>
                        </div>
                        <span class="pt-1.5">per month</span>
                      </div>
                      <div class="text-base">billed annually</div>
                    </div>
                    <div class="">
                      <ul class="space-y-2 pt-8">
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>Everything in Free</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>5,000 events / month</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>Unlimited seats</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="pt-2">
                    <a
                      href="/billing"
                      type="button"
                      target="_blank"
                      class="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-2xl cursor-pointer"
                    >
                      <span class="w-full font-semibold text-base">
                        Choose Starter
                      </span>
                      <svg
                        class="inline-block h-6"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="hidden">
                  <ul class="space-y-2 pt-8">
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>Everything in Free</span>
                    </li>
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>5,000 events / month</span>
                    </li>
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>Unlimited seats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative">
            <div class="h-full">
              <div class="h-full z-10 relative">
                <div class="flex flex-col flex-1 justify-between h-full space-y-5">
                  <div class="flex justify-between flex-col">
                    <div class="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
                      <span>Startup</span>
                      <svg
                        class="h-6 w-6 animate-ping-slow text-gray-500"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.5 25C30.5 28.0376 28.0376 30.5 25 30.5C21.9624 30.5 19.5 28.0376 19.5 25C19.5 21.9624 21.9624 19.5 25 19.5C28.0376 19.5 30.5 21.9624 30.5 25Z"
                          stroke="currentColor"
                          stroke-opacity="0.7"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M38.75 25C38.75 32.5939 32.5939 38.75 25 38.75C17.4061 38.75 11.25 32.5939 11.25 25C11.25 17.4061 17.4061 11.25 25 11.25C32.5939 11.25 38.75 17.4061 38.75 25Z"
                          stroke="currentColor"
                          stroke-opacity="0.4"
                          stroke-width="4.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M47.5 25C47.5 37.4264 37.4264 47.5 25 47.5C12.5736 47.5 2.5 37.4264 2.5 25C2.5 12.5736 12.5736 2.5 25 2.5C37.4264 2.5 47.5 12.5736 47.5 25Z"
                          stroke="currentColor"
                          stroke-opacity="0.1"
                          stroke-width="5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div class="pt-5 text-gray-500 font-medium text-base space-y-1">
                      <div class="flex items-center align-bottom">
                        <span class="pt-1.5">$</span>
                        <div class="ml-1 mr-2 text-2xl md:text-3xl font-bold text-gray-900">
                          <span>16</span>
                        </div>
                        <span class="pt-1.5">per month</span>
                      </div>
                      <div class="text-base">billed annually</div>
                    </div>
                    <div class="">
                      <ul class="space-y-2 pt-8">
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>Everything in Starter</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>20,000 events / month</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>Unlimited seats</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="pt-2">
                    <a
                      href="/billing"
                      type="button"
                      target="_blank"
                      class="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-2xl cursor-pointer"
                    >
                      <span class="w-full font-semibold text-base">
                        Choose Startup
                      </span>
                      <svg
                        class="inline-block h-6"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="hidden">
                  <ul class="space-y-2 pt-8">
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>Everything in Starter</span>
                    </li>
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>20,000 events / month</span>
                    </li>
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>Unlimited seats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative">
            <div class="h-full">
              <div class="h-full z-10 relative">
                <div class="flex flex-col flex-1 justify-between h-full space-y-5">
                  <div class="flex justify-between flex-col">
                    <div class="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
                      <span>Professional</span>
                    </div>
                    <div class="pt-5 text-gray-500 font-medium text-base space-y-1">
                      <div class="flex items-center align-bottom">
                        <span class="pt-1.5">$</span>
                        <div class="ml-1 mr-2 text-2xl md:text-3xl font-bold text-gray-900">
                          <span>49</span>
                        </div>
                        <span class="pt-1.5">per month</span>
                      </div>
                      <div class="text-base">billed annually</div>
                    </div>
                    <div class="">
                      <ul class="space-y-2 pt-8">
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>Everything in Startup</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>80,000 events / mo</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>Unlimited seats</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="pt-2">
                    <a
                      href="/billing"
                      type="button"
                      target="_blank"
                      class="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-2xl cursor-pointer"
                    >
                      <span class="w-full font-semibold text-base">
                        Choose Pro
                      </span>
                      <svg
                        class="inline-block h-6"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="hidden">
                  <ul class="space-y-2 pt-8">
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>Everything in Startup</span>
                    </li>
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>80,000 events / mo</span>
                    </li>
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>Unlimited seats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative lg:col-span-2">
            <div class="h-full">
              <div class="h-full z-10 relative lg:flex lg:justify-between lg:w-full lg:pr-8 lg:items-center  ">
                <div class="flex flex-col flex-1 justify-between h-full space-y-5">
                  <div class="flex justify-between flex-col">
                    <div class="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
                      <span>Free</span>
                    </div>
                    <div class="pt-5 text-gray-500 font-medium text-base space-y-1">
                      <div class="flex items-center align-bottom">
                        <span class="pt-1.5">$</span>
                        <div class="ml-1 mr-2 text-2xl md:text-3xl font-bold text-gray-900">
                          <span>0</span>
                        </div>
                        <span class="pt-1.5">per month</span>
                      </div>
                      <div class="text-base">billed annually</div>
                    </div>
                    <div class="lg:hidden">
                      <ul class="space-y-2 pt-8 lg:pt-0">
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>No credit card required</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-black">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>Free forever</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-gray-600">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>3 seats</span>
                        </li>
                        <li class="flex items-center font-medium space-x-2 text-gray-600">
                          <svg
                            class="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          <span>200 events / month</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="pt-2">
                    <a
                      href="/billing"
                      type="button"
                      target="_blank"
                      class="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-2xl cursor-pointer"
                    >
                      <span class="w-full font-semibold text-base">
                        Choose Free
                      </span>
                      <svg
                        class="inline-block h-6"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="hidden lg:block">
                  <ul class="space-y-2 pt-8 lg:pt-0">
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>No credit card required</span>
                    </li>
                    <li class="flex items-center font-medium space-x-2 text-black">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>Free forever</span>
                    </li>
                    <li class="flex items-center font-medium space-x-2 text-gray-600">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>3 seats</span>
                    </li>
                    <li class="flex items-center font-medium space-x-2 text-gray-600">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4444 3.03947C15.1056 2.37412 13.5965 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.6244 21.9793 11.2537 21.939 10.8889M9 11L12 14L22 4"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span>200 events / month</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 p-8 relative sm:col-span-2 lg:col-span-1">
            <div class="h-full">
              <div class="flex flex-col justify-between h-full space-y-5">
                <div class="flex justify-between flex-col">
                  <div class="text-xl md:text-2xl font-bold text-gray-900 flex justify-between">
                    <span>Enterprise</span>
                  </div>
                  <div class="pt-5">
                    Contact us for a custom quote and a custom onboarding
                    process.
                  </div>
                </div>
                <div class="pt-2">
                  <a
                    href="#"
                    type="button"
                    class="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-2xl cursor-pointer"
                  >
                    <span class="w-full font-semibold text-base">
                      Contact Sales
                    </span>
                    <svg
                      class="inline-block h-6"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 12.4999H21L14 19.4999M14 5.5L18 9.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#F9FAFC]">
        <Footer />
      </section>
    </div>
  );
};

export default page;
