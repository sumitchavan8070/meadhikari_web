// // import React, { useState } from "react";

// // const FAQ = () => {
// //   const [activeIndex, setActiveIndex] = useState(null);

// //   const toggleAccordion = (index) => {
// //     setActiveIndex(activeIndex === index ? null : index);
// //   };

// //   const faqData = [
// //     {
// //       question: "What types of exams does Meadhikari focus on?",
// //       answer:
// //         "Meadhikari is dedicated to helping students prepare for Maharashtra government exams, including MPSC, PSI, Talathi, Clerk Typist, Maharashtra Police, and more.",
// //     },
// //     {
// //       question: "Does Meadhikari provide previous year question papers?",
// //       answer:
// //         "Yes, Meadhikari provides a vast collection of previous year question papers for Maharashtra government exams to help aspirants understand the exam pattern and practice effectively.",
// //     },
// //     {
// //       question: "Are there mock tests available for MPSC and other exams?",
// //       answer:
// //         "Absolutely! Meadhikari offers a series of mock tests designed to simulate real exam conditions, helping you gauge your preparation and improve your performance.",
// //     },
// //     {
// //       question: "Is Meadhikari free to use?",
// //       answer:
// //         "Meadhikari offers a combination of free and premium resources. You can access free question papers and a few mock tests, while premium subscriptions unlock additional tests and features.",
// //     },
// //     {
// //       question: "How can I contact Meadhikari for support?",
// //       answer:
// //         "You can reach out to us through the 'Contact Us' section on the app or website. Our support team is available to assist you with any questions or issues.",
// //     },
// //   ];

// //   return (
// //     <div className="font-[sans-serif] space-y-6 w-full mx-auto mt-14 px-4 mb-14">
// //       <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
// //         Frequently Asked Questions
// //       </h2>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[80%] mx-auto">
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
//       question: "Meadhikari कोणत्या परीक्षांसाठी सहाय्य प्रदान करते?",
//       answer:
//         "Meadhikari महाराष्ट्र सरकारी परीक्षा, जसे की MPSC, PSI, तलाठी, क्लर्क टायपिस्ट, महाराष्ट्र पोलीस आणि इतरांसाठी तयारी करणाऱ्या विद्यार्थ्यांना सहाय्य प्रदान करते.",
//     },
//     {
//       question: "Meadhikari पूर्वीच्या प्रश्नपत्रिका उपलब्ध करतो का?",
//       answer:
//         "होय, Meadhikari महाराष्ट्र सरकारी परीक्षांसाठी पूर्वीच्या प्रश्नपत्रिका प्रदान करतो, ज्यामुळे विद्यार्थ्यांना परीक्षेची संरचना समजून घ्यायला आणि योग्य तयारी करायला मदत होते.",
//     },
//     {
//       question: "MPSC आणि इतर परीक्षांसाठी mock टेस्ट उपलब्ध आहेत का?",
//       answer:
//         "नक्कीच! Meadhikari MPSC आणि इतर परीक्षांसाठी mock टेस्ट उपलब्ध करतो, ज्यामुळे तुम्ही तुमच्या तयारीची तपासणी करू शकता आणि तुमच्या कामगिरीत सुधारणा करू शकता.",
//     },
//     {
//       question: "Meadhikari चा वापर फ्री आहे का?",
//       answer:
//         "Meadhikari मध्ये काही फ्री आणि प्रीमियम संसाधने आहेत. तुम्ही फ्री प्रश्नपत्रिका आणि काही mock टेस्ट वापरू शकता, आणि प्रीमियम सब्सक्रिप्शन अतिरिक्त टेस्ट आणि वैशिष्ट्ये उघडते.",
//     },
//     {
//       question: "Meadhikari साठी मी कसा संपर्क करू शकतो?",
//       answer:
//         "तुम्ही 'Contact Us' विभागाद्वारे आमच्याशी संपर्क साधू शकता. आमची समर्थन टीम कोणत्याही प्रश्नांसाठी किंवा अडचणींसाठी सहाय्य करण्यासाठी उपलब्ध आहे.",
//     },
//     {
//       question: "Meadhikari च्या सब्सक्रिप्शन प्लान्स काय आहेत?",
//       answer:
//         "Meadhikari तीन प्रकारचे सब्सक्रिप्शन प्लान्स ऑफर करतो: \n1. ₹299 प्रति वर्ष \n2. ₹199 सहा महिने \n3. ₹99 प्रति महिना.",
//     },
//   ];

//   return (
//     <div className="font-[sans-serif] space-y-6 w-full mx-auto mt-14 px-4 mb-14">
//       <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
//         वारंवार विचारले जाणारे प्रश्न (FAQ)
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[80%] mx-auto">
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
      question: "Meadhikari कोणत्या परीक्षांसाठी सहाय्य प्रदान करते?",
      answer:
        "Meadhikari महाराष्ट्र सरकारी परीक्षा, जसे की MPSC, PSI, तलाठी, क्लर्क टायपिस्ट, महाराष्ट्र पोलीस आणि इतरांसाठी तयारी करणाऱ्या विद्यार्थ्यांना सहाय्य प्रदान करते.",
    },
    {
      question: "Meadhikari पूर्वीच्या प्रश्नपत्रिका उपलब्ध करतो का?",
      answer:
        "होय, Meadhikari महाराष्ट्र सरकारी परीक्षांसाठी पूर्वीच्या प्रश्नपत्रिका प्रदान करतो, ज्यामुळे विद्यार्थ्यांना परीक्षेची संरचना समजून घ्यायला आणि योग्य तयारी करायला मदत होते.",
    },
    {
      question: "MPSC आणि इतर परीक्षांसाठी mock टेस्ट उपलब्ध आहेत का?",
      answer:
        "नक्कीच! Meadhikari MPSC आणि इतर परीक्षांसाठी mock टेस्ट उपलब्ध करतो, ज्यामुळे तुम्ही तुमच्या तयारीची तपासणी करू शकता आणि तुमच्या कामगिरीत सुधारणा करू शकता.",
    },
    {
      question: "Meadhikari चा वापर फ्री आहे का?",
      answer:
        "होय, Meadhikari मध्ये काही फ्री संसाधने उपलब्ध आहेत. तुम्ही फ्री प्रश्नपत्रिका आणि काही mock टेस्ट्स वापरू शकता. परंतु, अधिक टेस्ट्स, मागील प्रश्नपत्रिका, आणि इतर प्रीमियम संसाधनांचा पूर्ण प्रवेश मिळवण्यासाठी तुम्हाला एकदाच पेमेंट करणे आवश्यक आहे.",
    },
    {
      question: "Meadhikari साठी मी कसा संपर्क करू शकतो?",
      answer:
        "तुम्ही 'Contact Us' विभागाद्वारे आमच्याशी संपर्क साधू शकता. आमची समर्थन टीम कोणत्याही प्रश्नांसाठी किंवा अडचणींसाठी सहाय्य करण्यासाठी उपलब्ध आहे.",
    },
    {
      question: "Meadhikari च्या सब्सक्रिप्शन प्लान्स काय आहेत?",
      answer:
        "Meadhikari तीन प्रकारचे सब्सक्रिप्शन प्लान्स ऑफर करतो: \n1. ₹299 प्रति वर्ष \n2. ₹199 सहा महिने \n3. ₹99 प्रति महिना. एकदाच पेमेंट करून, तुम्ही अनलिमिटेड टेस्ट, मागील प्रश्नपत्रिका आणि इतर संसाधनांचा प्रवेश मिळवू शकता.",
    },
  ];

  return (
    <div className="font-[sans-serif] space-y-6 w-full mx-auto mt-14 px-4 mb-14">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        वारंवार विचारले जाणारे प्रश्न (FAQ)
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
