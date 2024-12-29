// // import React, { useState } from "react";

// // const testimonialsData = [
// //   {
// //     image: "https://readymadeui.com/team-2.webp",
// //     name: "Ajay Patil",
// //     position: "MPSC Aspirant",
// //     message:
// //       "Meadhikari's previous year question papers and mock tests are a blessing for MPSC preparation. The detailed solutions and analysis helped me improve my performance.",
// //     rating: 5,
// //   },
// //   {
// //     image: "https://readymadeui.com/team-5.webp",
// //     name: "Sneha Joshi",
// //     position: "PSI Candidate",
// //     message:
// //       "The structured mock test series is fantastic. It gave me real-time exam experience and boosted my confidence for the PSI exam.",
// //     rating: 4,
// //   },
// //   {
// //     image: "https://readymadeui.com/team-2.webp",
// //     name: "Vikram Deshmukh",
// //     position: "Talathi Exam Aspirant",
// //     message:
// //       "Meadhikari's resources are very well-organized. I found exactly what I needed for my Talathi exam preparation. Highly recommended!",
// //     rating: 5,
// //   },
// //   {
// //     image: "https://readymadeui.com/team-5.webp",
// //     name: "Priyanka Kulkarni",
// //     position: "Clerk Typist Candidate",
// //     message:
// //       "The mock tests and study material are amazing. The platform is user-friendly, and it helped me stay focused on my Clerk Typist exam preparation.",
// //     rating: 4,
// //   },
// //   {
// //     image: "https://readymadeui.com/team-2.webp",
// //     name: "Rohit Pawar",
// //     position: "Maharashtra Police Aspirant",
// //     message:
// //       "The content on Meadhikari is top-notch. The practice tests and regular updates made my preparation for the Maharashtra Police exam much easier.",
// //     rating: 5,
// //   },
// // ];

// // const Testimonials = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const handlePrev = () => {
// //     setCurrentIndex(
// //       (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
// //     );
// //   };

// //   const handleNext = () => {
// //     setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
// //   };

// //   const visibleTestimonials = [
// //     ...testimonialsData.slice(currentIndex),
// //     ...testimonialsData.slice(0, 4 - (testimonialsData.length - currentIndex)),
// //   ].slice(0, 4);

// //   return (
// //     <div className="pl-10 font-[sans-serif] mt-4 mb-20 bg-gray-50">
// //       <div className="max-w-[80%] mx-auto">
// //         <h2 className="text-gray-900 text-4xl font-extrabold text-center">
// //           What Our Happy Students Say
// //         </h2>
// //         <div className="grid lg:grid-cols-3 gap-6 max-lg:max-w-2xl">
// //           <div className="col-span-2">
// //             <p className="text-sm text-gray-700 mt-6 leading-relaxed">
// //               At Meadhikari, we are dedicated to providing the best preparation
// //               tools for Maharashtra government exams like MPSC, PSI, Talathi,
// //               Clerk Typist, and more. Our students appreciate the quality of our
// //               resources and the impact they have on their success. Here's what
// //               they have to say:
// //             </p>
// //           </div>

// //           <div className="flex space-x-4 items-end justify-end">
// //             <button
// //               aria-label="Previous testimonial"
// //               className="bg-gray-200 w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer transition-transform duration-300 transform hover:scale-110"
// //               onClick={handlePrev}
// //             >
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 className="w-3 fill-gray-800 inline"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path
// //                   fillRule="evenodd"
// //                   d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
// //                   clipRule="evenodd"
// //                 />
// //               </svg>
// //             </button>
// //             <button
// //               aria-label="Next testimonial"
// //               className="bg-blue-600 w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer transition-transform duration-300 transform hover:scale-110"
// //               onClick={handleNext}
// //             >
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 className="w-3 fill-white inline"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path
// //                   fillRule="evenodd"
// //                   d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
// //                   clipRule="evenodd"
// //                 />
// //               </svg>
// //             </button>
// //           </div>
// //         </div>

// //         <div className="grid lg:grid-cols-4 lg:gap-12 gap-6 mt-16">
// //           {visibleTestimonials.length > 0 ? (
// //             visibleTestimonials.map((testimonial, index) => (
// //               <div
// //                 key={index}
// //                 className="max-w-[360px] h-auto py-5 pl-14 pr-4 bg-white border-2 rounded-3xl relative shadow-lg transition-transform duration-300 transform hover:scale-105"
// //               >
// //                 <img
// //                   src={testimonial.image}
// //                   alt={testimonial.name}
// //                   className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-300"
// //                 />

// //                 <div>
// //                   <h4 className="text-gray-900 text-base font-semibold">
// //                     {testimonial.name}
// //                   </h4>
// //                   <p className="mt-1 text-xs text-gray-500">
// //                     {testimonial.position}
// //                   </p>
// //                 </div>

// //                 <div className="mt-4">
// //                   <p className="text-gray-800 text-sm leading-relaxed">
// //                     {testimonial.message}
// //                   </p>
// //                 </div>

// //                 <div className="flex space-x-1 mt-4">
// //                   {Array.from({ length: 5 }).map((_, starIndex) => (
// //                     <svg
// //                       key={starIndex}
// //                       className={`w-4 ${
// //                         starIndex < testimonial.rating
// //                           ? "fill-blue-600"
// //                           : "fill-[#CED5D8]"
// //                       }`}
// //                       viewBox="0 0 14 13"
// //                       fill="none"
// //                       xmlns="http://www.w3.org/2000/svg"
// //                     >
// //                       <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
// //                     </svg>
// //                   ))}
// //                 </div>
// //               </div>
// //             ))
// //           ) : (
// //             <div className="col-span-4 text-center text-gray-500">
// //               No testimonials available.
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Testimonials;

// import React, { useState } from "react";

// const testimonialsData = [
//   {
//     image: "https://readymadeui.com/team-2.webp",
//     name: "अजय पाटील",
//     position: "MPSC प्रवेश परीक्षा विद्यार्थी",
//     message:
//       "Meadhikari च्या मागील वर्षीच्या प्रश्नपत्रिका आणि मॉक टेस्ट्स माझ्या MPSC तयारीसाठी एक आशीर्वाद आहेत. सखोल विश्लेषण आणि समाधानांनी माझे परफॉर्मन्स सुधारण्यात मदत केली.",
//     rating: 5,
//   },
//   {
//     image: "https://readymadeui.com/team-5.webp",
//     name: "स्नेहा जोशी",
//     position: "PSI उमेदवार",
//     message:
//       "संरचित मॉक टेस्ट्स सीरिज अप्रतिम आहेत. याने मला वास्तविक परीक्षेचा अनुभव दिला आणि PSI परीक्षेसाठी माझा आत्मविश्वास वाढवला.",
//     rating: 4,
//   },
//   {
//     image: "https://readymadeui.com/team-2.webp",
//     name: "विक्रम देशमुख",
//     position: "तलाठी परीक्षा विद्यार्थी",
//     message:
//       "Meadhikari च्या साधनसामग्री खूपच व्यवस्थित आहेत. मला माझ्या तलाठी परीक्षा तयारीसाठी आवश्यक सर्वकाही मिळाले. खूप शिफारसीय!",
//     rating: 5,
//   },
//   {
//     image: "https://readymadeui.com/team-5.webp",
//     name: "प्रियंका कुलकर्णी",
//     position: "क्लार्क टायपिस्ट उमेदवार",
//     message:
//       "मॉक टेस्ट्स आणि अभ्यास सामग्री अत्युत्तम आहेत. प्लॅटफॉर्म वापरण्यास सोयीस्कर आहे आणि यामुळे मला माझ्या क्लार्क टायपिस्ट परीक्षा तयारीवर लक्ष केंद्रित करण्यात मदत झाली.",
//     rating: 4,
//   },
//   {
//     image: "https://readymadeui.com/team-2.webp",
//     name: "रोहित पवार",
//     position: "महाराष्ट्र पोलिस प्रवेश परीक्षा विद्यार्थी",
//     message:
//       "Meadhikari च्या सामग्रीचा दर्जा खूप उच्च आहे. सराव चाचण्या आणि नियमित अद्यतने यांनी महाराष्ट्र पोलिस परीक्षेसाठी माझी तयारी खूप सोपी केली.",
//     rating: 5,
//   },
// ];

// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
//   };

//   const visibleTestimonials = [
//     ...testimonialsData.slice(currentIndex),
//     ...testimonialsData.slice(0, 4 - (testimonialsData.length - currentIndex)),
//   ].slice(0, 4);

//   return (
//     <div className="pl-10 font-[sans-serif] mt-4 mb-20 bg-gray-50">
//       <div className="max-w-[80%] mx-auto">
//         <h2 className="text-gray-900 text-4xl font-extrabold text-center">
//           आमचे आनंदी विद्यार्थी काय सांगतात
//         </h2>
//         <div className="grid lg:grid-cols-3 gap-6 max-lg:max-w-2xl">
//           <div className="col-span-2">
//             <p className="text-sm text-gray-700 mt-6 leading-relaxed">
//               Meadhikari मध्ये, आम्ही MPSC, PSI, तलाठी, क्लार्क टायपिस्ट आणि इतर
//               महाराष्ट्र सरकारी परीक्षांसाठी सर्वोत्तम तयारी साधने प्रदान
//               करण्यासाठी समर्पित आहोत. आमच्या विद्यार्थ्यांना आमच्या
//               साधनसामग्रीचा दर्जा आणि त्याचा त्यांच्या यशावर होणारा प्रभाव खूप
//               आवडतो. ते काय सांगतात ते पहा:
//             </p>
//           </div>

//           <div className="flex space-x-4 items-end justify-end">
//             <button
//               aria-label="Previous testimonial"
//               className="bg-gray-200 w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer transition-transform duration-300 transform hover:scale-110"
//               onClick={handlePrev}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-3 fill-gray-800 inline"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//             <button
//               aria-label="Next testimonial"
//               className="bg-blue-600 w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer transition-transform duration-300 transform hover:scale-110"
//               onClick={handleNext}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-3 fill-white inline"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-4 lg:gap-12 gap-6 mt-16">
//           {visibleTestimonials.length > 0 ? (
//             visibleTestimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="max-w-[360px] h-auto py-5 pl-14 pr-4 bg-white border-2 rounded-3xl relative shadow-lg transition-transform duration-300 transform hover:scale-105"
//               >
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-300"
//                 />

//                 <div>
//                   <h4 className="text-gray-900 text-base font-semibold">
//                     {testimonial.name}
//                   </h4>
//                   <p className="mt-1 text-xs text-gray-500">
//                     {testimonial.position}
//                   </p>
//                 </div>

//                 <div className="mt-4">
//                   <p className="text-gray-800 text-sm leading-relaxed">
//                     {testimonial.message}
//                   </p>
//                 </div>

//                 <div className="flex space-x-1 mt-4">
//                   {Array.from({ length: 5 }).map((_, starIndex) => (
//                     <svg
//                       key={starIndex}
//                       className={`w-4 ${
//                         starIndex < testimonial.rating
//                           ? "fill-blue-600"
//                           : "fill-[#CED5D8]"
//                       }`}
//                       viewBox="0 0 14 13"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
//                     </svg>
//                   ))}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-span-4 text-center text-gray-500">
//               No testimonials available.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import React, { useState } from "react";

const testimonialsData = [
  {
    image: "https://readymadeui.com/team-2.webp",
    name: "अजय पाटील",
    position: "MPSC प्रवेश परीक्षा विद्यार्थी",
    district: "पुणे",
    message:
      "Meadhikari च्या मागील वर्षीच्या प्रश्नपत्रिका आणि मॉक टेस्ट्स माझ्या MPSC तयारीसाठी एक आशीर्वाद आहेत. सखोल विश्लेषण आणि समाधानांनी माझे परफॉर्मन्स सुधारण्यात मदत केली.",
    rating: 5,
  },
  {
    image: "https://readymadeui.com/team-5.webp",
    name: "स्नेहा जोशी",
    position: "PSI उमेदवार",
    district: "मुंबई",
    message:
      "संरचित मॉक टेस्ट्स सीरिज अप्रतिम आहेत. याने मला वास्तविक परीक्षेचा अनुभव दिला आणि PSI परीक्षेसाठी माझा आत्मविश्वास वाढवला.",
    rating: 4,
  },
  {
    image: "https://readymadeui.com/team-2.webp",
    name: "विक्रम देशमुख",
    position: "तलाठी परीक्षा विद्यार्थी",
    district: "नासिक",
    message:
      "Meadhikari च्या साधनसामग्री खूपच व्यवस्थित आहेत. मला माझ्या तलाठी परीक्षा तयारीसाठी आवश्यक सर्वकाही मिळाले. खूप शिफारसीय!",
    rating: 5,
  },
  {
    image: "https://readymadeui.com/team-5.webp",
    name: "प्रियंका कुलकर्णी",
    position: "क्लार्क टायपिस्ट उमेदवार",
    district: "औरंगाबाद",
    message:
      "मॉक टेस्ट्स आणि अभ्यास सामग्री अत्युत्तम आहेत. प्लॅटफॉर्म वापरण्यास सोयीस्कर आहे आणि यामुळे मला माझ्या क्लार्क टायपिस्ट परीक्षा तयारीवर लक्ष केंद्रित करण्यात मदत झाली.",
    rating: 4,
  },
  {
    image: "https://readymadeui.com/team-2.webp",
    name: "रोहित पवार",
    position: "महाराष्ट्र पोलिस प्रवेश परीक्षा विद्यार्थी",
    district: "सोलापूर",
    message:
      "Meadhikari च्या सामग्रीचा दर्जा खूप उच्च आहे. सराव चाचण्या आणि नियमित अद्यतने यांनी महाराष्ट्र पोलिस परीक्षेसाठी माझी तयारी खूप सोपी केली.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const visibleTestimonials = [
    ...testimonialsData.slice(currentIndex),
    ...testimonialsData.slice(0, 4 - (testimonialsData.length - currentIndex)),
  ].slice(0, 4);

  return (
    <div className="pl-10 font-[sans-serif] mt-4 mb-20 bg-gray-50">
      <div className="max-w-[80%] mx-auto">
        <h2 className="text-gray-900 text-4xl font-extrabold text-center">
          आमचे आनंदी विद्यार्थी काय सांगतात
        </h2>
        <div className="grid lg:grid-cols-3 gap-6 max-lg:max-w-2xl">
          <div className="col-span-2">
            <p className="text-sm text-gray-700 mt-6 leading-relaxed">
              Meadhikari मध्ये, आम्ही MPSC, PSI, तलाठी, क्लार्क टायपिस्ट आणि इतर
              महाराष्ट्र सरकारी परीक्षांसाठी सर्वोत्तम तयारी साधने प्रदान
              करण्यासाठी समर्पित आहोत. आमच्या विद्यार्थ्यांना आमच्या
              साधनसामग्रीचा दर्जा आणि त्याचा त्यांच्या यशावर होणारा प्रभाव खूप
              आवडतो. ते काय सांगतात ते पहा:
            </p>
          </div>

          <div className="flex space-x-4 items-end justify-end">
            <button
              aria-label="Previous testimonial"
              className="bg-gray-200 w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer transition-transform duration-300 transform hover:scale-110"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-gray-800 inline"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              aria-label="Next testimonial"
              className="bg-blue-600 w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer transition-transform duration-300 transform hover:scale-110"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-white inline"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 lg:gap-12 gap-6 mt-16">
          {visibleTestimonials.length > 0 ? (
            visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="max-w-[360px] h-auto py-5 pl-14 pr-4 bg-white border-2 rounded-3xl relative shadow-lg transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-300"
                />

                <div>
                  <h4 className="text-gray-900 text-base font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    {testimonial.position} - {testimonial.district}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {testimonial.message}
                  </p>
                </div>

                <div className="flex space-x-1 mt-4">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className={`w-4 ${
                        starIndex < testimonial.rating
                          ? "fill-blue-600"
                          : "fill-[#CED5D8]"
                      }`}
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-4 text-center text-gray-500">
              No testimonials available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
