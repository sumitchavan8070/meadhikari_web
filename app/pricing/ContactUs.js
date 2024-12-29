// import React from "react";

// const ContactUs = ({ contactInfo }) => {
//   const {
//     fullNamePlaceholder,
//     streetPlaceholder,
//     cityPlaceholder,
//     postcodePlaceholder,
//     emailPlaceholder,
//     messagePlaceholder,
//     emailAddress,
//     googleMapUrl,
//   } = contactInfo;

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

//           <form>
//             <div className="space-y-4 mt-8">
//               <input
//                 type="text"
//                 placeholder={fullNamePlaceholder}
//                 className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
//               />
//               <input
//                 type="text"
//                 placeholder={streetPlaceholder}
//                 className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
//               />
//               <div className="grid grid-cols-2 gap-6">
//                 <input
//                   type="text"
//                   placeholder={cityPlaceholder}
//                   className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
//                 />
//                 <input
//                   type="text"
//                   placeholder={postcodePlaceholder}
//                   className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
//                 />
//               </div>
//               <input
//                 type="email"
//                 placeholder={emailPlaceholder}
//                 className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
//               />
//               <textarea
//                 placeholder={messagePlaceholder}
//                 className="px-2 pt-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
//               ></textarea>
//             </div>

//             <button
//               type="button"
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

//           <ul className="mt-4 flex flex-wrap justify-center gap-4 lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2">
//             <li className="flex items-center text-yellow-400">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16px"
//                 height="16px"
//                 fill="currentColor"
//                 viewBox="0 0 479.058 479.058"
//               >
//                 <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
//               </svg>
//               <a
//                 href={`mailto:${emailAddress}`}
//                 className="text-current text-sm ml-3"
//               >
//                 {emailAddress}
//               </a>
//             </li>
//           </ul>
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

import React from "react";

const ContactUs = ({ contactInfo }) => {
  const {
    fullNamePlaceholder,
    streetPlaceholder,
    cityPlaceholder,
    postcodePlaceholder,
    emailPlaceholder,
    messagePlaceholder,
    emailAddress,
    googleMapUrl,
    locationAddress, // Location information variable
  } = contactInfo;

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

          <form>
            <div className="space-y-4 mt-8">
              <input
                type="text"
                placeholder={fullNamePlaceholder}
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />
              <input
                type="text"
                placeholder={streetPlaceholder}
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder={cityPlaceholder}
                  className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
                />
                <input
                  type="text"
                  placeholder={postcodePlaceholder}
                  className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
                />
              </div>
              <input
                type="email"
                placeholder={emailPlaceholder}
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />
              <textarea
                placeholder={messagePlaceholder}
                className="px-2 pt-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              ></textarea>
            </div>

            <button
              type="button"
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

          <ul className="mt-4 flex flex-wrap justify-center gap-4 lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2">
            <li className="flex items-center text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                viewBox="0 0 479.058 479.058"
              >
                <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
              </svg>
              <a
                href={`mailto:${emailAddress}`}
                className="text-current text-sm ml-3"
              >
                {emailAddress}
              </a>
            </li>
            <li className="flex items-center text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.612 0 0 114.618 0 256s114.612 256 256 256 256-114.618 256-256S397.388 0 256 0zm0 482C127.598 482 30 384.402 30 256S127.598 30 256 30s226 97.598 226 226-97.598 226-226 226zm0-391c-91.192 0-165 73.806-165 165s73.808 165 165 165 165-73.806 165-165-73.808-165-165-165zm0 300c-74.44 0-135-60.56-135-135S181.56 75 256 75s135 60.56 135 135-60.56 135-135 135z" />
              </svg>
              <span className="text-current text-sm ml-3">
                {locationAddress}
              </span>
            </li>
          </ul>
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
    </div>
  );
};

export default ContactUs;
