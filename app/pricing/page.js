// import React from "react";
// import { FaCheckCircle } from "react-icons/fa"; // Importing a checkmark icon for features

// const PricePage = () => {
//   const prices = [
//     {
//       plan: "Basic Plan",
//       price: "₹99",
//       duration: "per month",
//       features: [
//         "Access to previous year question papers",
//         "Daily mock tests",
//         "Personalized recommendations",
//       ],
//       buttonText: "Start Now",
//       buttonLink: "/signup",
//       icon: "💡", // Icon for the plan
//     },
//     {
//       plan: "Standard Plan",
//       price: "₹199",
//       duration: "for six months",
//       features: [
//         "Access to all question papers",
//         "Daily mock tests",
//         "Personalized recommendations",
//         "Progress tracking",
//         "Exclusive study materials",
//       ],
//       buttonText: "Start Now",
//       buttonLink: "/signup",
//       icon: "📘", // Icon for the plan
//     },
//     {
//       plan: "Premium Plan",
//       price: "₹299",
//       duration: "per year",
//       features: [
//         "Unlimited access to all question papers",
//         "Daily mock tests",
//         "Personalized recommendations",
//         "Progress tracking",
//         "Exclusive study materials",
//         "Priority support",
//         "Free updates",
//       ],
//       buttonText: "Start Now",
//       buttonLink: "/signup",
//       icon: "🔥", // Icon for the plan
//     },
//   ];

//   return (
//     <section className="bg-[#F7FAFC] py-16 px-6">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-8">
//           Our Pricing Plans
//         </h2>
//         <p className="text-lg text-gray-600 mb-12">
//           Choose the plan that best fits your needs and get started with
//           unlimited learning!
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {prices.map((plan, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl group"
//             >
//               {/* Plan Icon */}
//               <div className="text-5xl mb-6 text-yellow-500 group-hover:text-yellow-400 transition-colors">
//                 {plan.icon}
//               </div>

//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//                 {plan.plan}
//               </h3>
//               <p className="text-4xl font-bold text-primary mb-4">
//                 {plan.price}{" "}
//                 <span className="text-lg text-gray-600">{plan.duration}</span>
//               </p>

//               <ul className="text-left text-gray-700 mb-6">
//                 {plan.features.map((feature, index) => (
//                   <li
//                     key={index}
//                     className="flex items-center mb-3 text-sm sm:text-base"
//                   >
//                     <FaCheckCircle className="text-green-500 mr-2" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               <a
//                 href={plan.buttonLink}
//                 className="w-full bg-gradient-to-r from-yellow-500 to-red-600 text-white py-3 px-6 rounded-lg text-center font-semibold transition duration-300 hover:scale-105 hover:shadow-lg"
//               >
//                 {plan.buttonText}
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricePage;

import React from "react";
import PricePage from "./PricePage";
import Footer from "@/components/Footer"; // Assuming you have a Footer component
import Headercopy from "@/components/Headercopy";
import ContactUs from "./ContactUs";
import { contactInfo } from "../contact/contactInfo";
import OurPresenceSection from "../about/OurPresenceSection";

const Page = () => {
  return (
    <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
      <Headercopy />
      <PricePage />
      <Footer />
    </div>
  );
};

export default Page;
