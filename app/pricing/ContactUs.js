// // "use client";

// // import React, { useState } from "react";

// // const ContactUs = ({ contactInfo }) => {
// //   const {
// //     fullNamePlaceholder,
// //     phonePlaceholder,
// //     cityPlaceholder,
// //     messagePlaceholder,
// //     emailAddress,
// //     googleMapUrl,
// //     locationAddress,
// //   } = contactInfo;

// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     phone: "",
// //     city: "",
// //     message: "",
// //   });

// //   const [errors, setErrors] = useState({});

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     // Restrict phone input to numbers only
// //     if (name === "phone" && !/^\d*$/.test(value)) {
// //       return;
// //     }

// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const validateForm = () => {
// //     let newErrors = {};

// //     if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
// //     if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
// //     if (!formData.city.trim()) newErrors.city = "City is required";
// //     if (!formData.message.trim()) newErrors.message = "Message is required";

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (validateForm()) {
// //       console.log("Form Data:", JSON.stringify(formData, null, 2));
// //       alert("Message sent successfully!");
// //     }
// //   };

// //   return (
// //     <div className="overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white m-4 font-[sans-serif]">
// //       <div className="grid md:grid-cols-2 items-center">
// //         <div className="p-8 bg-gray-900">
// //           <h2 className="text-3xl text-white">
// //             Get In <span className="text-yellow-400">Touch</span>
// //           </h2>
// //           <p className="text-sm text-gray-400 mt-4 leading-relaxed">
// //             Have a specific inquiry or looking to explore new opportunities? Our
// //             experienced team is ready to engage with you.
// //           </p>

// //           <form onSubmit={handleSubmit}>
// //             <div className="space-y-4 mt-8">
// //               <input
// //                 type="text"
// //                 name="fullName"
// //                 placeholder={fullNamePlaceholder}
// //                 className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
// //                 value={formData.fullName}
// //                 onChange={handleChange}
// //               />
// //               {errors.fullName && (
// //                 <p className="text-red-500 text-xs">{errors.fullName}</p>
// //               )}

// //               <input
// //                 type="tel"
// //                 name="phone"
// //                 placeholder={phonePlaceholder}
// //                 inputMode="numeric"
// //                 className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
// //                 value={formData.phone}
// //                 onChange={handleChange}
// //               />
// //               {errors.phone && (
// //                 <p className="text-red-500 text-xs">{errors.phone}</p>
// //               )}

// //               <input
// //                 type="text"
// //                 name="city"
// //                 placeholder={cityPlaceholder}
// //                 className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
// //                 value={formData.city}
// //                 onChange={handleChange}
// //               />
// //               {errors.city && (
// //                 <p className="text-red-500 text-xs">{errors.city}</p>
// //               )}

// //               <textarea
// //                 name="message"
// //                 placeholder={messagePlaceholder}
// //                 className="px-2 pt-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none max-h-40 overflow-y-auto"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //               ></textarea>
// //               {errors.message && (
// //                 <p className="text-red-500 text-xs">{errors.message}</p>
// //               )}
// //             </div>

// //             <button
// //               type="submit"
// //               className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-4 py-2.5 tracking-wide text-gray-800 bg-yellow-400 hover:bg-yellow-500"
// //             >
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 width="16px"
// //                 height="16px"
// //                 fill="currentColor"
// //                 className="mr-2"
// //                 viewBox="0 0 548.244 548.244"
// //               >
// //                 <path
// //                   fillRule="evenodd"
// //                   d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
// //                   clipRule="evenodd"
// //                 />
// //               </svg>
// //               Send Message
// //             </button>
// //           </form>
// //         </div>

// //         <div className="z-10 relative h-full max-md:min-h-[350px]">
// //           <iframe
// //             src={googleMapUrl}
// //             className="left-0 top-0 h-full w-full"
// //             frameBorder="0"
// //             allowFullScreen
// //           ></iframe>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactUs;

// "use client";

// import React, { useState } from "react";

// const ContactUs = ({ contactInfo }) => {
//   const {
//     fullNamePlaceholder,
//     phonePlaceholder,
//     cityPlaceholder,
//     messagePlaceholder,
//     emailAddress,
//     googleMapUrl,
//     locationAddress,
//   } = contactInfo;

//   const [formData, setFormData] = useState({
//     fullName: "",
//     phone: "",
//     city: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Restrict phone input to numbers only
//     if (name === "phone" && !/^\d*$/.test(value)) {
//       return;
//     }

//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     let newErrors = {};

//     if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
//     if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
//     if (!formData.city.trim()) newErrors.city = "City is required";
//     if (!formData.message.trim()) newErrors.message = "Message is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       console.log("Form Data:", JSON.stringify(formData, null, 2));

//       // Show custom alert on successful submission
//       alert("🎉 Thank you for contacting us! We will get back to you soon.");

//       // Clear the form after submission
//       setFormData({
//         fullName: "",
//         phone: "",
//         city: "",
//         message: "",
//       });

//       setErrors({});
//     }
//   };

//   return (
//     <div className="overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white m-4 font-[sans-serif]">
//       <div className="grid md:grid-cols-2 items-center">
//         <div className="p-8 bg-gray-900">
//           <h2 className="text-3xl text-white">
//             Get In <span className="text-yellow-400">Touch</span>
//           </h2>
//           <p className="text-sm text-gray-400 mt-4 leading-relaxed">
//             Have a specific inquiry or looking to explore new opportunities? Our
//             experienced team is ready to engage with you.
//           </p>

//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4 mt-8">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder={fullNamePlaceholder}
//                 className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
//                 value={formData.fullName}
//                 onChange={handleChange}
//               />
//               {errors.fullName && (
//                 <p className="text-red-500 text-xs">{errors.fullName}</p>
//               )}

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder={phonePlaceholder}
//                 inputMode="numeric"
//                 className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//               {errors.phone && (
//                 <p className="text-red-500 text-xs">{errors.phone}</p>
//               )}

//               <input
//                 type="text"
//                 name="city"
//                 placeholder={cityPlaceholder}
//                 className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
//                 value={formData.city}
//                 onChange={handleChange}
//               />
//               {errors.city && (
//                 <p className="text-red-500 text-xs">{errors.city}</p>
//               )}

//               <textarea
//                 name="message"
//                 placeholder={messagePlaceholder}
//                 className="px-2 pt-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none max-h-40 overflow-y-auto"
//                 value={formData.message}
//                 onChange={handleChange}
//               ></textarea>
//               {errors.message && (
//                 <p className="text-red-500 text-xs">{errors.message}</p>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-4 py-2.5 tracking-wide text-gray-800 bg-yellow-400 hover:bg-yellow-500"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16px"
//                 height="16px"
//                 fill="currentColor"
//                 className="mr-2"
//                 viewBox="0 0 548.244 548.244"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               Send Message
//             </button>
//           </form>
//         </div>

//         <div className="z-10 relative h-full max-md:min-h-[350px]">
//           <iframe
//             src={googleMapUrl}
//             className="left-0 top-0 h-full w-full"
//             frameBorder="0"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

"use client";

import React, { useState } from "react";

const ContactUs = ({ contactInfo }) => {
  const {
    fullNamePlaceholder,
    phonePlaceholder,
    cityPlaceholder,
    messagePlaceholder,
    emailAddress,
    googleMapUrl,
    locationAddress,
  } = contactInfo;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict phone input to numbers only
    if (name === "phone" && !/^\d*$/.test(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Data:", JSON.stringify(formData, null, 2));

      // Open the modal after successful submission
      setIsModalOpen(true);

      // Clear the form after submission
      setFormData({
        fullName: "",
        phone: "",
        city: "",
        message: "",
      });

      setErrors({});
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal when user clicks on "Close"
  };

  return (
    <div className="overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white m-4 font-[sans-serif]">
      <div className="grid md:grid-cols-2 items-center">
        <div className="p-8 bg-gray-900">
          <h2 className="text-3xl text-white">
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            Have a specific inquiry or looking to explore new opportunities? Our
            experienced team is ready to engage with you.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mt-8">
              <input
                type="text"
                name="fullName"
                placeholder={fullNamePlaceholder}
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs">{errors.fullName}</p>
              )}

              <input
                type="tel"
                name="phone"
                placeholder={phonePlaceholder}
                inputMode="numeric"
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone}</p>
              )}

              <input
                type="text"
                name="city"
                placeholder={cityPlaceholder}
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && (
                <p className="text-red-500 text-xs">{errors.city}</p>
              )}

              <textarea
                name="message"
                placeholder={messagePlaceholder}
                className="px-2 pt-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none max-h-40 overflow-y-auto"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-4 py-2.5 tracking-wide text-gray-800 bg-yellow-400 hover:bg-yellow-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                />
              </svg>
              Send Message
            </button>
          </form>
        </div>

        <div className="z-10 relative h-full max-md:min-h-[350px]">
          <iframe
            src={googleMapUrl}
            className="left-0 top-0 h-full w-full"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Modal for success message */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg text-center max-w-sm">
            <h3 className="text-xl font-semibold text-green-600">
              🎉 Message Sent Successfully!
            </h3>
            <p className="mt-2 text-gray-700">
              Thank you for contacting us. We will get back to you soon.
            </p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
