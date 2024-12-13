// "use client";

// import React, { useState } from "react";

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         company: "",
//         email: "",
//         phoneNumber: "",
//         message: "",
//         agreeToPolicy: false,
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === "checkbox" ? checked : value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!formData.agreeToPolicy) {
//             alert("You must agree to the privacy policy.");
//             return;
//         }

//         // Open email client
//         const mailtoLink = `mailto:sdchavan8070@gmail.com?subject=Contact Form Submission&body=First Name: ${formData.firstName}%0ALast Name: ${formData.lastName}%0ACompany: ${formData.company}%0AEmail: ${formData.email}%0APhone Number: ${formData.phoneNumber}%0AMessage: ${formData.message}`;
//         window.open(mailtoLink, "_blank");

//         setFormData({
//             firstName: "",
//             lastName: "",
//             company: "",
//             email: "",
//             phoneNumber: "",
//             message: "",
//             agreeToPolicy: false,
//         });
//     };

//     return (
//         <div className="isolate px-6 py-24 sm:pb-32 lg:px-8">
//             {/* <div
//                 className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
//                 aria-hidden="true"
//             >
//                 <div
//                     className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
//                     style={{
//                         clipPath:
//                             "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//                     }}
//                 ></div>
//             </div> */}
//             <div className="mx-auto max-w-2xl text-center">
//                 <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//                     Contact Us
//                 </h2>
//                 <p className="mt-2 text-lg leading-8 text-gray-600">
//                     Fill out the form below to contact us.
//                 </p>
//             </div>
//             <form
//                 onSubmit={handleSubmit}
//                 className="mx-auto mt-16 max-w-xl sm:mt-20"
//             >
//                 <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//                     <div>
//                         <label
//                             htmlFor="firstName"
//                             className="block text-sm font-semibold leading-6 text-gray-900"
//                         >
//                             First name
//                         </label>
//                         <input
//                             type="text"
//                             name="firstName"
//                             id="firstName"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             required
//                             className="block w-full mt-2.5 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
//                         />
//                     </div>
//                     <div>
//                         <label
//                             htmlFor="lastName"
//                             className="block text-sm font-semibold leading-6 text-gray-900"
//                         >
//                             Last name
//                         </label>
//                         <input
//                             type="text"
//                             name="lastName"
//                             id="lastName"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             required
//                             className="block w-full mt-2.5 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
//                         />
//                     </div>
//                     <div className="sm:col-span-2">
//                         <label
//                             htmlFor="company"
//                             className="block text-sm font-semibold leading-6 text-gray-900"
//                         >
//                             Company
//                         </label>
//                         <input
//                             type="text"
//                             name="company"
//                             id="company"
//                             value={formData.company}
//                             onChange={handleChange}
//                             required
//                             className="block w-full mt-2.5 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
//                         />
//                     </div>
//                     <div className="sm:col-span-2">
//                         <label
//                             htmlFor="email"
//                             className="block text-sm font-semibold leading-6 text-gray-900"
//                         >
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             name="email"
//                             id="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             className="block w-full mt-2.5 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
//                         />
//                     </div>
//                     <div className="sm:col-span-2">
//                         <label
//                             htmlFor="phoneNumber"
//                             className="block text-sm font-semibold leading-6 text-gray-900"
//                         >
//                             Phone number
//                         </label>
//                         <input
//                             type="tel"
//                             name="phoneNumber"
//                             id="phoneNumber"
//                             value={formData.phoneNumber}
//                             onChange={handleChange}
//                             required
//                             className="block w-full mt-2.5 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
//                         />
//                     </div>
//                     <div className="sm:col-span-2">
//                         <label
//                             htmlFor="message"
//                             className="block text-sm font-semibold leading-6 text-gray-900"
//                         >
//                             Message
//                         </label>
//                         <textarea
//                             name="message"
//                             id="message"
//                             rows="4"
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                             className="block w-full mt-2.5 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
//                         ></textarea>
//                     </div>
//                     <div className="flex gap-x-4 sm:col-span-2">
//                         <div className="flex h-6 items-center">
//                             <input
//                                 type="checkbox"
//                                 name="agreeToPolicy"
//                                 id="agreeToPolicy"
//                                 checked={formData.agreeToPolicy}
//                                 onChange={handleChange}
//                                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                             />
//                         </div>
//                         <label
//                             htmlFor="agreeToPolicy"
//                             className="text-sm leading-6 text-gray-600"
//                         >
//                             By selecting this, you agree to our
//                             <a href="#" className="font-semibold text-indigo-600">
//                                 privacy&nbsp;policy
//                             </a>
//                             .
//                         </label>
//                     </div>
//                 </div>
//                 <div className="mt-10">
//                     <button
//                         type="submit"
//                         className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600"
//                     >
//                         Let's talk
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default ContactForm;

"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
    agreeToPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreeToPolicy) {
      alert("You must agree to the privacy policy.");
      return;
    }

    // Open email client
    const mailtoLink = `mailto:sdchavan8070@gmail.com?subject=Contact Form Submission&body=First Name: ${formData.firstName}%0ALast Name: ${formData.lastName}%0ACompany: ${formData.company}%0AEmail: ${formData.email}%0APhone Number: ${formData.phoneNumber}%0AMessage: ${formData.message}`;
    window.open(mailtoLink, "_blank");

    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phoneNumber: "",
      message: "",
      agreeToPolicy: false,
    });
  };

  return (
    <div className="isolate px-6 py-24 sm:pb-32 lg:px-8">
      {/* <div
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
            </div> */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Us
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Fill out the form below to contact us.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="block w-full mt-2.5 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="block w-full mt-2.5 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Company
            </label>
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="block w-full mt-2.5 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full mt-2.5 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="block w-full mt-2.5 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="block w-full mt-2.5 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            ></textarea>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <input
                type="checkbox"
                name="agreeToPolicy"
                id="agreeToPolicy"
                checked={formData.agreeToPolicy}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <label
              htmlFor="agreeToPolicy"
              className="text-sm leading-6 text-gray-600"
            >
              By selecting this, you agree to our
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600"
          >
            Let&lsquo;s talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
