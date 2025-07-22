// // // "use client";

// // // import { SiPhonepe, SiGooglepay } from "react-icons/si";
// // // import { RiQrCodeLine } from "react-icons/ri";
// // // import { motion } from "framer-motion";
// // // import { Sparkles, Zap, Shield } from "lucide-react";

// // // const PaymentMethods = () => {
// // //   const methods = [
// // //     {
// // //       id: "google-pay",
// // //       name: "Google Pay",
// // //       icon: <SiGooglepay className="text-3xl sm:text-4xl" />,
// // //       color: "#4285F4",
// // //       gradient: "from-blue-400 to-blue-600",
// // //       bgGradient: "from-blue-50 to-blue-100",
// // //       description: "Pay instantly with Google Pay",
// // //     },
// // //     {
// // //       id: "phonepe",
// // //       name: "PhonePe",
// // //       icon: <SiPhonepe className="text-3xl sm:text-4xl" />,
// // //       color: "#5F259F",
// // //       gradient: "from-purple-400 to-purple-600",
// // //       bgGradient: "from-purple-50 to-purple-100",
// // //       description: "Quick payments via PhonePe",
// // //     },
// // //     {
// // //       id: "scan-pay",
// // //       name: "Scan & Pay",
// // //       icon: <RiQrCodeLine className="text-3xl sm:text-4xl" />,
// // //       color: "#00D4AA",
// // //       gradient: "from-emerald-400 to-teal-500",
// // //       bgGradient: "from-emerald-50 to-teal-100",
// // //       description: "Scan QR with any UPI app",
// // //     },
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
// // //       {/* Floating Background Elements */}
// // //       <div className="fixed inset-0 overflow-hidden pointer-events-none">
// // //         <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
// // //         <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
// // //         <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
// // //       </div>

// // //       <div className="relative max-w-6xl mx-auto">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8 }}
// // //           viewport={{ once: true }}
// // //           className="bg-white/80 backdrop-blur-lg rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/20"
// // //         >
// // //           {/* Header */}
// // //           <div className="text-center mb-8 sm:mb-12">
// // //             <motion.div
// // //               initial={{ scale: 0.8, opacity: 0 }}
// // //               whileInView={{ scale: 1, opacity: 1 }}
// // //               transition={{ duration: 0.6, delay: 0.2 }}
// // //               className="inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full mb-6 shadow-xl relative overflow-hidden"
// // //             >
// // //               <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 animate-pulse opacity-50"></div>
// // //               <Sparkles className="mr-2 text-lg sm:text-xl relative z-10" />
// // //               <span className="text-sm sm:text-lg font-bold relative z-10">
// // //                 We Accept All Major Payments
// // //               </span>
// // //               <Zap className="ml-2 text-lg sm:text-xl relative z-10" />
// // //             </motion.div>

// // //             <motion.h2
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.6, delay: 0.4 }}
// // //               className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6"
// // //             >
// // //               Lightning Fast Payments
// // //             </motion.h2>

// // //             <motion.p
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.6, delay: 0.6 }}
// // //               className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
// // //             >
// // //               Experience seamless transactions with multiple secure payment
// // //               options designed for your convenience
// // //             </motion.p>
// // //           </div>

// // //           {/* Payment Methods */}
// // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-16">
// // //             {methods.map((method, index) => (
// // //               <motion.div
// // //                 key={method.id}
// // //                 initial={{ opacity: 0, y: 50, rotateY: -15 }}
// // //                 whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
// // //                 transition={{
// // //                   duration: 0.7,
// // //                   delay: index * 0.2,
// // //                   type: "spring",
// // //                   stiffness: 100,
// // //                 }}
// // //                 whileHover={{
// // //                   y: -10,
// // //                   scale: 1.05,
// // //                   rotateY: 5,
// // //                   transition: { duration: 0.3 },
// // //                 }}
// // //                 className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500"
// // //                 style={{
// // //                   background: `linear-gradient(135deg, ${method.color}08, ${method.color}15)`,
// // //                 }}
// // //               >
// // //                 {/* Animated Background */}
// // //                 <div
// // //                   className={`absolute inset-0 bg-gradient-to-br ${method.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
// // //                 ></div>

// // //                 {/* Glow Effect */}
// // //                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

// // //                 <div className="relative p-6 sm:p-8 text-center">
// // //                   <motion.div
// // //                     whileHover={{ rotate: 360, scale: 1.1 }}
// // //                     transition={{ duration: 0.6 }}
// // //                     className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 shadow-lg bg-gradient-to-br ${method.gradient} text-white`}
// // //                   >
// // //                     {method.icon}
// // //                   </motion.div>

// // //                   <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
// // //                     {method.name}
// // //                   </h3>
// // //                   <p className="text-gray-600 text-sm sm:text-base">
// // //                     {method.description}
// // //                   </p>

// // //                   {/* Floating Badge */}
// // //                   <div className="absolute top-3 right-3 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
// // //                   <div className="absolute top-3 right-3 w-3 h-3 bg-green-500 rounded-full"></div>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>

// // //           {/* QR Code Section */}
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 40 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.4 }}
// // //             className="relative bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-emerald-200/50 shadow-xl overflow-hidden"
// // //           >
// // //             {/* Animated Background Pattern */}
// // //             <div className="absolute inset-0 opacity-5">
// // //               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-400 to-blue-400 animate-pulse"></div>
// // //             </div>

// // //             <div className="relative flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
// // //               {/* QR Code */}
// // //               <motion.div
// // //                 initial={{ scale: 0.8, opacity: 0 }}
// // //                 whileInView={{ scale: 1, opacity: 1 }}
// // //                 transition={{ duration: 0.6, delay: 0.6 }}
// // //                 className="flex-shrink-0"
// // //               >
// // //                 <div className="relative bg-white p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200/50">
// // //                   {/* QR Code Glow */}
// // //                   <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-2xl sm:rounded-3xl blur-xl"></div>

// // //                   <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
// // //                     <div className="text-center">
// // //                       <motion.div
// // //                         animate={{ rotate: 360 }}
// // //                         transition={{
// // //                           duration: 20,
// // //                           repeat: Number.POSITIVE_INFINITY,
// // //                           ease: "linear",
// // //                         }}
// // //                       >
// // //                         <RiQrCodeLine className="text-4xl sm:text-5xl lg:text-6xl text-gray-400 mx-auto mb-2 sm:mb-3" />
// // //                       </motion.div>
// // //                       <p className="text-gray-500 text-sm sm:text-base font-semibold">
// // //                         QR Code
// // //                       </p>
// // //                       <p className="text-gray-400 text-xs sm:text-sm">
// // //                         Powered by Razorpay
// // //                       </p>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </motion.div>

// // //               {/* Instructions */}
// // //               <div className="flex-1 w-full">
// // //                 <motion.h3
// // //                   initial={{ opacity: 0, x: -20 }}
// // //                   whileInView={{ opacity: 1, x: 0 }}
// // //                   transition={{ duration: 0.6, delay: 0.8 }}
// // //                   className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-6 sm:mb-8"
// // //                 >
// // //                   Simple 3-Step Process
// // //                 </motion.h3>

// // //                 <div className="space-y-4 sm:space-y-6">
// // //                   {[
// // //                     {
// // //                       step: "1",
// // //                       title: "Choose your plan",
// // //                       desc: "Select the subscription plan that suits your needs",
// // //                       color: "from-blue-500 to-blue-600",
// // //                     },
// // //                     {
// // //                       step: "2",
// // //                       title: "Scan QR code",
// // //                       desc: "Use Google Pay, PhonePe, or any UPI app to scan",
// // //                       color: "from-purple-500 to-purple-600",
// // //                     },
// // //                     {
// // //                       step: "3",
// // //                       title: "Complete payment",
// // //                       desc: "Enter amount and confirm to activate your plan",
// // //                       color: "from-emerald-500 to-emerald-600",
// // //                     },
// // //                   ].map((item, index) => (
// // //                     <motion.div
// // //                       key={index}
// // //                       initial={{ opacity: 0, x: -30 }}
// // //                       whileInView={{ opacity: 1, x: 0 }}
// // //                       transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
// // //                       className="flex items-start gap-4 sm:gap-6 group"
// // //                     >
// // //                       <div
// // //                         className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${item.color} text-white rounded-full sm:rounded-2xl flex items-center justify-center text-sm sm:text-base font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}
// // //                       >
// // //                         {item.step}
// // //                       </div>
// // //                       <div className="flex-1">
// // //                         <p className="font-bold text-gray-800 text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">
// // //                           {item.title}
// // //                         </p>
// // //                         <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
// // //                           {item.desc}
// // //                         </p>
// // //                       </div>
// // //                     </motion.div>
// // //                   ))}
// // //                 </div>

// // //                 <motion.div
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   transition={{ duration: 0.6, delay: 1.8 }}
// // //                   className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-emerald-200/50 shadow-lg"
// // //                 >
// // //                   <div className="flex items-center justify-center gap-2 sm:gap-3">
// // //                     <Shield className="text-emerald-600 text-lg sm:text-xl" />
// // //                     <p className="text-sm sm:text-base text-gray-700 font-medium">
// // //                       <span className="font-bold text-emerald-600">
// // //                         100% Secure
// // //                       </span>{" "}
// // //                       payments processed by Razorpay
// // //                     </p>
// // //                   </div>
// // //                 </motion.div>
// // //               </div>
// // //             </div>
// // //           </motion.div>

// // //           {/* Supported Apps */}
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.6 }}
// // //             className="mt-8 sm:mt-12 text-center"
// // //           >
// // //             <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6 font-medium">
// // //               Compatible with all major UPI apps
// // //             </p>
// // //             <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
// // //               {[
// // //                 {
// // //                   icon: <SiGooglepay className="text-lg sm:text-xl" />,
// // //                   name: "Google Pay",
// // //                   color: "blue",
// // //                 },
// // //                 {
// // //                   icon: <SiPhonepe className="text-lg sm:text-xl" />,
// // //                   name: "PhonePe",
// // //                   color: "purple",
// // //                 },
// // //                 {
// // //                   icon: (
// // //                     <span className="text-xs sm:text-sm font-bold">UPI</span>
// // //                   ),
// // //                   name: "Any UPI App",
// // //                   color: "gray",
// // //                 },
// // //               ].map((app, index) => (
// // //                 <motion.div
// // //                   key={index}
// // //                   initial={{ opacity: 0, scale: 0.8 }}
// // //                   whileInView={{ opacity: 1, scale: 1 }}
// // //                   transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
// // //                   whileHover={{ scale: 1.1, y: -5 }}
// // //                   className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
// // //                 >
// // //                   <div
// // //                     className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-${app.color}-50 flex items-center justify-center text-${app.color}-600`}
// // //                   >
// // //                     {app.icon}
// // //                   </div>
// // //                   <span className="text-xs sm:text-sm font-semibold text-gray-700">
// // //                     {app.name}
// // //                   </span>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </motion.div>
// // //         </motion.div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PaymentMethods;
// // "use client";

// // import { RiQrCodeLine } from "react-icons/ri";
// // import { FaCheckCircle } from "react-icons/fa";
// // import Image from "next/image";

// // const PaymentMethods = () => {
// //   const methods = [
// //     {
// //       id: "google-pay",
// //       name: "Google Pay",
// //       logoPath: "/google-pay-logo.png", // User will place real logo here
// //       description: "Pay instantly with Google Pay",
// //     },
// //     {
// //       id: "phonepe",
// //       name: "PhonePe",
// //       logoPath: "/phonepe-logo.png", // User will place real logo here
// //       description: "Quick payments via PhonePe",
// //     },
// //     {
// //       id: "upi",
// //       name: "UPI",
// //       logoPath: "/upi-logo.png", // User will place real logo here
// //       description: "Scan QR with any UPI app",
// //     },
// //   ];

// //   return (
// //     <div className="bg-gradient-to-b from-[#F5F9FF] to-[#E6F0FF] py-12 md:py-20 px-4 sm:px-6">
// //       <div className="max-w-7xl mx-auto">
// //         <div>
// //           {/* Header */}
// //           <div className="text-center mb-8 sm:mb-12">
// //             <div className="inline-block mb-4 px-4 py-2 rounded-full bg-[linear-gradient(92.91deg,rgba(27,169,188,0.15)_-0.48%,rgba(41,102,193,0.15)_98.9%)]">
// //               <span className="text-sm font-semibold bg-clip-text text-transparent bg-[linear-gradient(92.91deg,#1BA9BC_-0.48%,#2966C1_98.9%)]">
// //                 PAYMENT METHODS
// //               </span>
// //             </div>
// //             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-[linear-gradient(107.12deg,#055AAB_4.81%,#BFE0FF_96.97%)]">
// //               Multiple Payment Options
// //             </h2>
// //             <p className="text-lg md:text-xl text-[#4A6FA9] max-w-3xl mx-auto">
// //               Choose from various secure payment methods for your convenience
// //             </p>
// //           </div>

// //           {/* Supported Apps */}
// //           <div className="mt-12 text-center">
// //             <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
// //               {methods.map((app, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex items-center gap-3 bg-white px-4 py-3 rounded-full shadow-md border border-[#E6EFF9] hover:shadow-lg transition-all duration-300"
// //                 >
// //                   <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#F5F9FF] to-[#E6F0FF] flex items-center justify-center border border-[#E6EFF9]">
// //                     <Image
// //                       src={app.logoPath || "/placeholder.svg"}
// //                       alt={`${app.name} logo`}
// //                       width={50}
// //                       height={50}
// //                       className="object-contain"
// //                       onError={(e) => {
// //                         // Fallback if image doesn't exist
// //                         e.currentTarget.style.display = "none";
// //                         e.currentTarget.nextElementSibling.style.display =
// //                           "block";
// //                       }}
// //                     />
// //                     {/* Fallback text */}
// //                     <span className="text-[#055AAB] font-bold text-xs hidden">
// //                       {app.name.charAt(0)}
// //                     </span>
// //                   </div>
// //                   <span className="text-xs sm:text-sm font-semibold text-[#055AAB]">
// //                     {app.name}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PaymentMethods;
// "use client";

// import {
//   RiQrCodeLine,
//   RiSecurePaymentLine,
//   RiShieldCheckLine,
// } from "react-icons/ri";
// import { FaCheckCircle, FaStar, FaBolt, FaShieldAlt } from "react-icons/fa";
// import { HiSparkles } from "react-icons/hi";
// import Image from "next/image";

// const PaymentMethods = () => {
//   const methods = [
//     {
//       id: "google-pay",
//       name: "Google Pay",
//       logoPath: "/google-pay-logo.png",
//       description: "Pay instantly with Google Pay",
//       color: "#4285F4",
//       bgGradient: "from-blue-50 to-blue-100",
//     },
//     {
//       id: "phonepe",
//       name: "PhonePe",
//       logoPath: "/phonepe-logo.png",
//       description: "Quick payments via PhonePe",
//       color: "#5F259F",
//       bgGradient: "from-purple-50 to-purple-100",
//     },
//     {
//       id: "upi",
//       name: "UPI",
//       logoPath: "/upi-logo.png",
//       description: "Scan QR with any UPI app",
//       color: "#FF6B35",
//       bgGradient: "from-orange-50 to-orange-100",
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-b from-[#F5F9FF] to-[#E6F0FF] py-12 md:py-20 px-4 sm:px-6 relative overflow-hidden">
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-20 h-20 bg-[#1BA9BC]/10 rounded-full blur-xl"></div>
//         <div className="absolute top-40 right-20 w-32 h-32 bg-[#055AAB]/10 rounded-full blur-xl"></div>
//         <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-[#2966C1]/10 rounded-full blur-xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative">
//         {/* Header */}
//         <div className="text-center mb-12 sm:mb-16">
//           <div className="inline-flex items-center mb-6 px-6 py-3 rounded-full bg-[linear-gradient(92.91deg,rgba(27,169,188,0.15)_-0.48%,rgba(41,102,193,0.15)_98.9%)] border border-[#1BA9BC]/20 shadow-lg">
//             <HiSparkles className="text-[#1BA9BC] mr-2 text-lg" />
//             <span className="text-sm font-semibold bg-clip-text text-transparent bg-[linear-gradient(92.91deg,#1BA9BC_-0.48%,#2966C1_98.9%)]">
//               SECURE PAYMENT METHODS
//             </span>
//             <FaBolt className="text-[#2966C1] ml-2 text-lg" />
//           </div>

//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-clip-text text-transparent bg-[linear-gradient(107.12deg,#055AAB_4.81%,#BFE0FF_96.97%)] leading-tight">
//             Lightning Fast Payments
//           </h2>

//           <p className="text-lg md:text-xl text-[#4A6FA9] max-w-3xl mx-auto leading-relaxed">
//             Experience seamless transactions with multiple secure payment
//             options designed for your convenience
//           </p>

//           {/* Trust Indicators */}
//           <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
//             <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-[#E6EFF9]">
//               <FaShieldAlt className="text-[#1BA9BC] text-sm" />
//               <span className="text-sm font-medium text-[#055AAB]">
//                 Bank Grade Security
//               </span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-[#E6EFF9]">
//               <RiSecurePaymentLine className="text-[#1BA9BC] text-sm" />
//               <span className="text-sm font-medium text-[#055AAB]">
//                 Instant Processing
//               </span>
//             </div>
//             <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-[#E6EFF9]">
//               <FaStar className="text-[#1BA9BC] text-sm" />
//               <span className="text-sm font-medium text-[#055AAB]">
//                 Trusted by Millions
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Payment Methods */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
//           {methods.map((method, index) => (
//             <div
//               key={method.id}
//               className="group relative overflow-hidden rounded-3xl border-2 border-[#E6EFF9] hover:border-[#1BA9BC] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white"
//             >
//               {/* Gradient Overlay */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${method.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
//               ></div>

//               {/* Shine Effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

//               <div className="relative p-8 text-center">
//                 {/* Logo Container */}
//                 <div className="relative inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-3xl mb-6 bg-gradient-to-br from-white to-gray-50 shadow-xl border border-[#E6EFF9] group-hover:scale-110 transition-transform duration-300">
//                   <Image
//                     src={method.logoPath || "/placeholder.svg"}
//                     alt={`${method.name} logo`}
//                     width={80}
//                     height={80}
//                     className="object-contain"
//                     onError={(e) => {
//                       e.currentTarget.style.display = "none";
//                       e.currentTarget.nextElementSibling.style.display =
//                         "block";
//                     }}
//                   />
//                   <span className="text-[#055AAB] font-bold text-xl hidden">
//                     {method.name.charAt(0)}
//                   </span>

//                   {/* Floating Badge */}
//                   <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#1BA9BC] to-[#055AAB] rounded-full flex items-center justify-center shadow-lg">
//                     <FaCheckCircle className="text-white text-xs" />
//                   </div>
//                 </div>

//                 <h3 className="text-xl sm:text-2xl font-bold text-[#055AAB] mb-3 group-hover:text-[#1BA9BC] transition-colors">
//                   {method.name}
//                 </h3>
//                 <p className="text-[#4A6FA9] text-sm sm:text-base leading-relaxed">
//                   {method.description}
//                 </p>

//                 {/* Popular Badge for middle item */}
//                 {index === 1 && (
//                   <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
//                     POPULAR
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* QR Code Section */}
//         <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E6EFF9] shadow-2xl relative overflow-hidden">
//           {/* Background Pattern */}
//           <div className="absolute inset-0 opacity-5">
//             <div className="absolute inset-0 bg-gradient-to-br from-[#055AAB] to-[#1BA9BC]"></div>
//           </div>

//           <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
//             {/* QR Code */}
//             <div className="flex-shrink-0">
//               <div className="relative">
//                 {/* Glow Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#1BA9BC]/20 to-[#055AAB]/20 rounded-3xl blur-2xl scale-110"></div>

//                 <div className="relative bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border-2 border-[#E6EFF9]">
//                   <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-[#F5F9FF] to-[#E6F0FF] rounded-2xl flex items-center justify-center border-2 border-dashed border-[#1BA9BC]/30 relative overflow-hidden">
//                     {/* Animated Border */}
//                     <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-[#1BA9BC] to-[#055AAB] bg-clip-border opacity-20"></div>

//                     <div className="text-center relative z-10">
//                       <div className="relative">
//                         <RiQrCodeLine className="text-5xl sm:text-6xl lg:text-7xl text-[#055AAB] mx-auto mb-4" />
//                         {/* Scanning Line Effect */}
//                         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1BA9BC]/30 to-transparent h-1 animate-pulse"></div>
//                       </div>
//                       <p className="text-[#055AAB] text-base sm:text-lg font-bold mb-2">
//                         Scan to Pay
//                       </p>
//                       <p className="text-[#4A6FA9] text-sm">
//                         Powered by Razorpay
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Instructions */}
//             <div className="flex-1 w-full">
//               <div className="mb-8">
//                 <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-clip-text text-transparent bg-[linear-gradient(107.12deg,#055AAB_4.81%,#1BA9BC_96.97%)] mb-4">
//                   How It Works
//                 </h3>
//                 <p className="text-[#4A6FA9] text-lg">
//                   Follow these simple steps to complete your payment
//                 </p>
//               </div>

//               <div className="space-y-8">
//                 {[
//                   {
//                     step: "1",
//                     title: "Choose your plan",
//                     desc: "Select the subscription plan that suits your needs",
//                     icon: <FaStar className="text-lg" />,
//                     color: "from-blue-500 to-blue-600",
//                   },
//                   {
//                     step: "2",
//                     title: "Scan QR code",
//                     desc: "Use Google Pay, PhonePe, or any UPI app to scan",
//                     icon: <RiQrCodeLine className="text-lg" />,
//                     color: "from-purple-500 to-purple-600",
//                   },
//                   {
//                     step: "3",
//                     title: "Complete payment",
//                     desc: "Enter amount and confirm to activate your plan",
//                     icon: <FaBolt className="text-lg" />,
//                     color: "from-emerald-500 to-emerald-600",
//                   },
//                 ].map((item, index) => (
//                   <div key={index} className="flex items-start gap-6 group">
//                     <div
//                       className={`relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${item.color} text-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
//                     >
//                       <span className="text-lg sm:text-xl font-bold absolute">
//                         {item.step}
//                       </span>
//                       <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         {item.icon}
//                       </div>
//                     </div>
//                     <div className="flex-1 pt-2">
//                       <p className="font-bold text-[#055AAB] text-lg sm:text-xl lg:text-2xl mb-2 group-hover:text-[#1BA9BC] transition-colors">
//                         {item.title}
//                       </p>
//                       <p className="text-[#4A6FA9] text-base sm:text-lg leading-relaxed">
//                         {item.desc}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Security Badge */}
//               <div className="mt-10 p-6 bg-gradient-to-r from-[#F5F9FF] to-[#E6F0FF] rounded-2xl border border-[#E6EFF9] shadow-lg">
//                 <div className="flex items-center justify-center gap-4">
//                   <div className="flex items-center gap-2">
//                     <RiShieldCheckLine className="text-[#1BA9BC] text-2xl" />
//                     <div>
//                       <p className="text-sm sm:text-base text-[#055AAB] font-bold">
//                         100% Secure
//                       </p>
//                       <p className="text-xs text-[#4A6FA9]">
//                         Bank-grade encryption
//                       </p>
//                     </div>
//                   </div>
//                   <div className="w-px h-12 bg-[#E6EFF9]"></div>
//                   <div className="flex items-center gap-2">
//                     <FaBolt className="text-[#1BA9BC] text-xl" />
//                     <div>
//                       <p className="text-sm sm:text-base text-[#055AAB] font-bold">
//                         Instant
//                       </p>
//                       <p className="text-xs text-[#4A6FA9]">
//                         Real-time processing
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Supported Apps */}
//         <div className="mt-16 text-center">
//           <div className="inline-block mb-8 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-[#E6EFF9] shadow-lg">
//             <p className="text-[#055AAB] text-base sm:text-lg font-bold">
//               Compatible with all major UPI apps
//             </p>
//           </div>

//           <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
//             {methods.map((app, index) => (
//               <div
//                 key={index}
//                 className="group flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-[#E6EFF9] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//               >
//                 <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#F5F9FF] to-[#E6F0FF] flex items-center justify-center border border-[#E6EFF9] group-hover:scale-110 transition-transform duration-300">
//                   <Image
//                     src={app.logoPath || "/placeholder.svg"}
//                     alt={`${app.name} logo`}
//                     width={32}
//                     height={32}
//                     className="object-contain"
//                     onError={(e) => {
//                       e.currentTarget.style.display = "none";
//                       e.currentTarget.nextElementSibling.style.display =
//                         "block";
//                     }}
//                   />
//                   <span className="text-[#055AAB] font-bold text-sm hidden">
//                     {app.name.charAt(0)}
//                   </span>
//                 </div>
//                 <span className="text-sm sm:text-base font-bold text-[#055AAB] group-hover:text-[#1BA9BC] transition-colors">
//                   {app.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentMethods;
"use client";

import {
  RiQrCodeLine,
  RiSecurePaymentLine,
  RiShieldCheckLine,
} from "react-icons/ri";
import {
  FaCheckCircle,
  FaStar,
  FaBolt,
  FaShieldAlt,
  FaUsers,
  FaClock,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { BiTrendingUp } from "react-icons/bi";
import Image from "next/image";

const PaymentMethods = () => {
  const methods = [
    {
      id: "google-pay",
      name: "Google Pay",
      logoPath: "/google-pay-logo.png",
      description: "Pay instantly with Google Pay",
      color: "#4285F4",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      id: "phonepe",
      name: "PhonePe",
      logoPath: "/phonepe-logo.png",
      description: "Quick payments via PhonePe",
      color: "#5F259F",
      bgGradient: "from-purple-50 to-purple-100",
    },
    {
      id: "upi",
      name: "UPI",
      logoPath: "/upi-logo.png",
      description: "Scan QR with any UPI app",
      color: "#FF6B35",
      bgGradient: "from-orange-50 to-orange-100",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#F5F9FF] to-[#E6F0FF] py-12 md:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#1BA9BC]/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[#055AAB]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-[#2966C1]/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center mb-6 px-6 py-3 rounded-full bg-[linear-gradient(92.91deg,rgba(27,169,188,0.15)_-0.48%,rgba(41,102,193,0.15)_98.9%)] border border-[#1BA9BC]/20 shadow-lg">
            <HiSparkles className="text-[#1BA9BC] mr-2 text-lg" />
            <span className="text-sm font-semibold bg-clip-text text-transparent bg-[linear-gradient(92.91deg,#1BA9BC_-0.48%,#2966C1_98.9%)]">
              SECURE PAYMENT METHODS
            </span>
            <FaBolt className="text-[#2966C1] ml-2 text-lg" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-clip-text text-transparent bg-[linear-gradient(107.12deg,#055AAB_4.81%,#BFE0FF_96.97%)] leading-tight">
            Lightning Fast Payments
          </h2>

          <p className="text-lg md:text-xl text-[#4A6FA9] max-w-3xl mx-auto leading-relaxed">
            Experience seamless transactions with multiple secure payment
            options designed for your convenience
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-[#E6EFF9]">
              <FaShieldAlt className="text-[#1BA9BC] text-sm" />
              <span className="text-sm font-medium text-[#055AAB]">
                Bank Grade Security
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-[#E6EFF9]">
              <RiSecurePaymentLine className="text-[#1BA9BC] text-sm" />
              <span className="text-sm font-medium text-[#055AAB]">
                Instant Processing
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-[#E6EFF9]">
              <FaStar className="text-[#1BA9BC] text-sm" />
              <span className="text-sm font-medium text-[#055AAB]">
                Trusted by Millions
              </span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {methods.map((method, index) => (
            <div
              key={method.id}
              className="group relative overflow-hidden rounded-3xl border-2 border-[#E6EFF9] hover:border-[#1BA9BC] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white"
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${method.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="relative p-8 text-center">
                {/* Logo Container */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-3xl mb-6 bg-gradient-to-br from-white to-gray-50 shadow-xl border border-[#E6EFF9] group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={method.logoPath || "/placeholder.svg"}
                    alt={`${method.name} logo`}
                    width={80}
                    height={80}
                    className="object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling.style.display =
                        "block";
                    }}
                  />
                  <span className="text-[#055AAB] font-bold text-xl hidden">
                    {method.name.charAt(0)}
                  </span>

                  {/* Floating Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#1BA9BC] to-[#055AAB] rounded-full flex items-center justify-center shadow-lg">
                    <FaCheckCircle className="text-white text-xs" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#055AAB] mb-3 group-hover:text-[#1BA9BC] transition-colors">
                  {method.name}
                </h3>
                <p className="text-[#4A6FA9] text-sm sm:text-base leading-relaxed">
                  {method.description}
                </p>

                {/* Popular Badge for middle item */}
                {index === 1 && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    POPULAR
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* QR Code Section */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E6EFF9] shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-[#055AAB] to-[#1BA9BC]"></div>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* QR Code */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1BA9BC]/20 to-[#055AAB]/20 rounded-3xl blur-2xl scale-110"></div>

                <div className="relative bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border-2 border-[#E6EFF9]">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-[#F5F9FF] to-[#E6F0FF] rounded-2xl flex items-center justify-center border-2 border-dashed border-[#1BA9BC]/30 relative overflow-hidden">
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-[#1BA9BC] to-[#055AAB] bg-clip-border opacity-20"></div>

                    <div className="text-center relative z-10">
                      <div className="relative">
                        <RiQrCodeLine className="text-5xl sm:text-6xl lg:text-7xl text-[#055AAB] mx-auto mb-4" />
                        {/* Scanning Line Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1BA9BC]/30 to-transparent h-1 animate-pulse"></div>
                      </div>
                      <p className="text-[#055AAB] text-base sm:text-lg font-bold mb-2">
                        Scan to Pay
                      </p>
                      <p className="text-[#4A6FA9] text-sm">
                        Powered by Razorpay
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="flex-1 w-full">
              <div className="mb-8">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-clip-text text-transparent bg-[linear-gradient(107.12deg,#055AAB_4.81%,#1BA9BC_96.97%)] mb-4">
                  How It Works
                </h3>
                <p className="text-[#4A6FA9] text-lg">
                  Follow these simple steps to complete your payment
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Choose your plan",
                    desc: "Select the subscription plan that suits your needs",
                    icon: <FaStar className="text-lg" />,
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    step: "2",
                    title: "Scan QR code",
                    desc: "Use Google Pay, PhonePe, or any UPI app to scan",
                    icon: <RiQrCodeLine className="text-lg" />,
                    color: "from-purple-500 to-purple-600",
                  },
                  {
                    step: "3",
                    title: "Complete payment",
                    desc: "Enter amount and confirm to activate your plan",
                    icon: <FaBolt className="text-lg" />,
                    color: "from-emerald-500 to-emerald-600",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-6 group">
                    <div
                      className={`relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${item.color} text-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      {/* Step Number - fades out on hover */}
                      <span className="text-lg sm:text-xl font-bold absolute transition-opacity duration-300 group-hover:opacity-0">
                        {item.step}
                      </span>
                      {/* Icon - fades in on hover */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="font-bold text-[#055AAB] text-lg sm:text-xl lg:text-2xl mb-2 group-hover:text-[#1BA9BC] transition-colors">
                        {item.title}
                      </p>
                      <p className="text-[#4A6FA9] text-base sm:text-lg leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Security Badge */}
              <div className="mt-10 p-6 bg-gradient-to-r from-[#F5F9FF] to-[#E6F0FF] rounded-2xl border border-[#E6EFF9] shadow-lg">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <RiShieldCheckLine className="text-[#1BA9BC] text-2xl" />
                    <div>
                      <p className="text-sm sm:text-base text-[#055AAB] font-bold">
                        100% Secure
                      </p>
                      <p className="text-xs text-[#4A6FA9]">
                        Bank-grade encryption
                      </p>
                    </div>
                  </div>
                  <div className="w-px h-12 bg-[#E6EFF9]"></div>
                  <div className="flex items-center gap-2">
                    <FaBolt className="text-[#1BA9BC] text-xl" />
                    <div>
                      <p className="text-sm sm:text-base text-[#055AAB] font-bold">
                        Instant
                      </p>
                      <p className="text-xs text-[#4A6FA9]">
                        Real-time processing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
