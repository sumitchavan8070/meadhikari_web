// // // import React, { useState } from "react";

// // // const FAQ = () => {
// // //   const [activeIndex, setActiveIndex] = useState(null);

// // //   const toggleAccordion = (index) => {
// // //     setActiveIndex(activeIndex === index ? null : index);
// // //   };

// // //   const faqData = [
// // //     {
// // //       question:
// // //         "Are there any special discounts or promotions available during the event?",
// // //       answer:
// // //         "Auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.",
// // //     },
// // //     {
// // //       question:
// // //         "What are the dates and locations for the product launch events?",
// // //       answer:
// // //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia. Proin aliquam turpis at erat venenatis malesuada. Sed semper, justo vitae consequat fermentum, felis diam posuere ante, sed fermentum quam justo in dui.",
// // //     },
// // //     {
// // //       question: "Can I bring a guest with me to the product launch event?",
// // //       answer:
// // //         "Auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.",
// // //     },
// // //     {
// // //       question: "How can I contact the event organizers?",
// // //       answer:
// // //         "Auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.",
// // //     },
// // //     {
// // //       question: "Is there parking available at the venue?",
// // //       answer:
// // //         "Auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.",
// // //     },
// // //   ];

// // //   return (
// // //     <div className="font-[sans-serif] space-y-6 max-w-3xl mx-auto mt-14 mb-20">
// // //       <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
// // //         Frequently Asked Questions
// // //       </h2>
// // //       {faqData.map((faq, index) => (
// // //         <div
// // //           key={index}
// // //           className={`accordion rounded-lg shadow-lg bg-white ${
// // //             activeIndex === index ? "border-l-4 border-blue-500" : "border"
// // //           } transition-all`}
// // //         >
// // //           <button
// // //             type="button"
// // //             onClick={() => toggleAccordion(index)}
// // //             className={`toggle-button w-full text-base text-left py-5 px-6 text-gray-800 flex items-center rounded-t-lg focus:outline-none`}
// // //           >
// // //             <span className="mr-4 font-semibold">{faq.question}</span>
// // //             <svg
// // //               xmlns="http://www.w3.org/2000/svg"
// // //               className={`arrow transition-all w-3 fill-current ml-auto shrink-0 ${
// // //                 activeIndex === index ? "-rotate-180" : "-rotate-90"
// // //               }`}
// // //               viewBox="0 0 24 24"
// // //             >
// // //               <path
// // //                 fillRule="evenodd"
// // //                 d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
// // //                 clipRule="evenodd"
// // //               ></path>
// // //             </svg>
// // //           </button>
// // //           <div
// // //             className={`content px-6 ${
// // //               activeIndex === index
// // //                 ? "pb-5 max-h-[1000px] opacity-100"
// // //                 : "opacity-0 max-h-0"
// // //             } overflow-hidden transition-all duration-300`}
// // //           >
// // //             <p className="text-sm text-gray-700">{faq.answer}</p>
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default FAQ;

// // import React, { useState } from "react";

// // const FAQ = () => {
// //   const [activeIndex, setActiveIndex] = useState(null);

// //   const toggleAccordion = (index) => {
// //     setActiveIndex(activeIndex === index ? null : index);
// //   };

// //   const faqData = [
// //     {
// //       question:
// //         "Are there any special discounts or promotions available during the event?",
// //       answer:
// //         "Auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.",
// //     },
// //     {
// //       question:
// //         "What are the dates and locations for the product launch events?",
// //       answer:
// //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia. Proin aliquam turpis at erat venenatis malesuada. Sed semper, justo vitae consequat fermentum, felis diam posuere ante, sed fermentum quam justo in dui.",
// //     },
// //     {
// //       question: "Can I bring a guest with me to the product launch event?",
// //       answer:
// //         "Auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.",
// //     },
// //     {
// //       question: "How can I contact the event organizers?",
// //       answer:
// //         "Auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.",
// //     },
// //     {
// //       question: "Is there parking available at the venue?",
// //       answer:
// //         "Auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.",
// //     },
// //   ];

// //   return (
// //     <div className="font-[sans-serif] space-y-6 max-w-3xl mx-auto mt-14">
// //       <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
// //         Frequently Asked Questions
// //       </h2>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// //         {faqData.map((faq, index) => (
// //           <div
// //             key={index}
// //             className={`accordion rounded-lg shadow-lg bg-white ${
// //               activeIndex === index ? "border-l-4 border-blue-500" : "border"
// //             } transition-all`}
// //           >
// //             <button
// //               type="button"
// //               onClick={() => toggleAccordion(index)}
// //               className={`toggle-button w-full text-base text-left py-5 px-6 text-gray-800 flex items-center rounded-t-lg focus:outline-none`}
// //             >
// //               <span className="mr-4 font-semibold">{faq.question}</span>
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 className={`arrow transition-all w-3 fill-current ml-auto shrink-0 ${
// //                   activeIndex === index ? "-rotate-180" : "-rotate-90"
// //                 }`}
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path
// //                   fillRule="evenodd"
// //                   d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
// //                   clipRule="evenodd"
// //                 ></path>
// //               </svg>
// //             </button>
// //             <div
// //               className={`content px-6 ${
// //                 activeIndex === index
// //                   ? "pb-5 max-h-[1000px] opacity-100"
// //                   : "opacity-0 max-h-0"
// //               } overflow-hidden transition-all duration-300`}
// //             >
// //               <p className="text-sm text-gray-700">{faq.answer}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FAQ;

// import React, { useState } from "react";

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const faqData = [
//     {
//       question:
//         "Are there any special discounts or promotions available during the event?",
//       answer:
//         "Auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.",
//     },
//     {
//       question:
//         "What are the dates and locations for the product launch events?",
//       answer:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia. Proin aliquam turpis at erat venenatis malesuada. Sed semper, justo vitae consequat fermentum, felis diam posuere ante, sed fermentum quam justo in dui.",
//     },
//     {
//       question: "Can I bring a guest with me to the product launch event?",
//       answer:
//         "Auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.",
//     },
//     {
//       question: "How can I contact the event organizers?",
//       answer:
//         "Auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.",
//     },
//     {
//       question: "Is there parking available at the venue?",
//       answer:
//         "Auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.",
//     },
//   ];

//   return (
//     <div className="font-[sans-serif] space-y-6 w-full mx-auto mt-14">
//       <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
//         Frequently Asked Questions
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
//         {faqData.map((faq, index) => (
//           <div
//             key={index}
//             className={`accordion rounded-lg shadow-lg bg-white ${
//               activeIndex === index ? "border-l-4 border-blue-500" : "border"
//             } transition-all`}
//           >
//             <button
//               type="button"
//               onClick={() => toggleAccordion(index)}
//               className={`toggle-button w-full text-base text-left py-5 px-6 text-gray-800 flex items-center rounded-t-lg focus:outline-none`}
//             >
//               <span className="mr-4 font-semibold">{faq.question}</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className={`arrow transition-all w-3 fill-current ml-auto shrink-0 ${
//                   activeIndex === index ? "-rotate-180" : "-rotate-90"
//                 }`}
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//             <div
//               className={`content px-6 ${
//                 activeIndex === index
//                   ? "pb-5 max-h-[1000px] opacity-100"
//                   : "opacity-0 max-h-0"
//               } overflow-hidden transition-all duration-300`}
//             >
//               <p className="text-sm text-gray-700">{faq.answer}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;

import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question:
        "Are there any special discounts or promotions available during the event?",
      answer:
        "Auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.",
    },
    {
      question:
        "What are the dates and locations for the product launch events?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia. Proin aliquam turpis at erat venenatis malesuada. Sed semper, justo vitae consequat fermentum, felis diam posuere ante, sed fermentum quam justo in dui.",
    },
    {
      question: "Can I bring a guest with me to the product launch event?",
      answer:
        "Auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.",
    },
    {
      question: "How can I contact the event organizers?",
      answer:
        "Auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.",
    },
    {
      question: "Is there parking available at the venue?",
      answer:
        "Auctor purus, vitae dictum dolor sollicitudin vitae. Sed bibendum purus in efficitur consequat. Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue facilisis sapien, a semper orci facilisis in.",
    },
  ];

  return (
    <div className="font-[sans-serif] space-y-6 w-full mx-auto mt-14 px-4 mb-14">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[80%] mx-auto">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`accordion rounded-lg shadow-lg bg-white ${
              activeIndex === index ? "border-l-4 border-blue-500" : "border"
            } transition-all`}
          >
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className={`toggle-button w-full text-base text-left py-5 px-6 text-gray-800 flex items-center rounded-t-lg focus:outline-none`}
            >
              <span className="mr-4 font-semibold">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`arrow transition-all w-3 fill-current ml-auto shrink-0 ${
                  activeIndex === index ? "-rotate-180" : "-rotate-90"
                }`}
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className={`content px-6 ${
                activeIndex === index
                  ? "pb-5 max-h-[1000px] opacity-100"
                  : "opacity-0 max-h-0"
              } overflow-hidden transition-all duration-300`}
            >
              <p className="text-sm text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
