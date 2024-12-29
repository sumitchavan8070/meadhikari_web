// // // // import React from "react";

// // // // const LoginPopup = ({ isOpen, closePopup }) => {
// // // //   if (!isOpen) return null;

// // // //   return (
// // // //     <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
// // // //       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
// // // //         <button
// // // //           onClick={closePopup}
// // // //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
// // // //         >
// // // //           <svg
// // // //             xmlns="http://www.w3.org/2000/svg"
// // // //             fill="none"
// // // //             stroke="currentColor"
// // // //             className="w-6 h-6"
// // // //             viewBox="0 0 24 24"
// // // //             strokeWidth="2"
// // // //           >
// // // //             <path
// // // //               strokeLinecap="round"
// // // //               strokeLinejoin="round"
// // // //               d="M6 18L18 6M6 6l12 12"
// // // //             />
// // // //           </svg>
// // // //         </button>
// // // //         <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
// // // //           Sign In
// // // //         </h2>
// // // //         <form className="space-y-4">
// // // //           <div>
// // // //             <label className="block text-gray-800 text-sm mb-2">Username</label>
// // // //             <input
// // // //               type="text"
// // // //               name="username"
// // // //               className="w-full p-3 border border-gray-300 rounded-md text-sm outline-none"
// // // //               placeholder="Enter username"
// // // //               required
// // // //             />
// // // //           </div>
// // // //           <div>
// // // //             <label className="block text-gray-800 text-sm mb-2">Password</label>
// // // //             <input
// // // //               type="password"
// // // //               name="password"
// // // //               className="w-full p-3 border border-gray-300 rounded-md text-sm outline-none"
// // // //               placeholder="Enter password"
// // // //               required
// // // //             />
// // // //           </div>
// // // //           <div className="flex justify-between items-center">
// // // //             <label className="flex items-center">
// // // //               <input type="checkbox" name="remember" className="mr-2" />
// // // //               Remember me
// // // //             </label>
// // // //             <a href="#" className="text-sm text-blue-600 hover:underline">
// // // //               Forgot password?
// // // //             </a>
// // // //           </div>
// // // //           <div>
// // // //             <button
// // // //               type="submit"
// // // //               className="w-full py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
// // // //             >
// // // //               Sign In
// // // //             </button>
// // // //           </div>
// // // //         </form>
// // // //         <p className="text-center text-sm text-gray-600 mt-6">
// // // //           Don't have an account?{" "}
// // // //           <a href="#" className="text-blue-600 hover:underline">
// // // //             Register here
// // // //           </a>
// // // //         </p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default LoginPopup;

// // // import React from "react";

// // // const LoginPopup = ({ isOpen, closePopup }) => {
// // //   if (!isOpen) return null;

// // //   return (
// // //     <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
// // //       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
// // //         {/* Close Icon */}
// // //         <button
// // //           onClick={closePopup}
// // //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
// // //         >
// // //           <svg
// // //             xmlns="http://www.w3.org/2000/svg"
// // //             fill="none"
// // //             stroke="currentColor"
// // //             className="w-6 h-6"
// // //             viewBox="0 0 24 24"
// // //             strokeWidth="2"
// // //           >
// // //             <path
// // //               strokeLinecap="round"
// // //               strokeLinejoin="round"
// // //               d="M6 18L18 6M6 6l12 12"
// // //             />
// // //           </svg>
// // //         </button>
// // //         <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
// // //           Sign In
// // //         </h2>
// // //         <form className="space-y-4">
// // //           <div>
// // //             <label className="block text-gray-800 text-sm mb-2">Username</label>
// // //             <input
// // //               type="text"
// // //               name="username"
// // //               className="w-full p-3 border border-gray-300 rounded-md text-sm outline-none"
// // //               placeholder="Enter username"
// // //               required
// // //             />
// // //           </div>
// // //           <div>
// // //             <label className="block text-gray-800 text-sm mb-2">Password</label>
// // //             <input
// // //               type="password"
// // //               name="password"
// // //               className="w-full p-3 border border-gray-300 rounded-md text-sm outline-none"
// // //               placeholder="Enter password"
// // //               required
// // //             />
// // //           </div>
// // //           <div className="flex justify-between items-center">
// // //             <label className="flex items-center">
// // //               <input type="checkbox" name="remember" className="mr-2" />
// // //               Remember me
// // //             </label>
// // //             <a href="#" className="text-sm text-blue-600 hover:underline">
// // //               Forgot password?
// // //             </a>
// // //           </div>
// // //           <div>
// // //             <button
// // //               type="submit"
// // //               className="w-full py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
// // //             >
// // //               Sign In
// // //             </button>
// // //           </div>
// // //         </form>
// // //         <p className="text-center text-sm text-gray-600 mt-6">
// // //           Don't have an account?{" "}
// // //           <a href="#" className="text-blue-600 hover:underline">
// // //             Register here
// // //           </a>
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LoginPopup;

// // import React, { useState } from "react";

// // const LoginPopup = ({ isOpen, closePopup }) => {
// //   const [isRegistering, setIsRegistering] = useState(false);

// //   if (!isOpen) return null;

// //   const handleToggleForm = () => {
// //     setIsRegistering((prev) => !prev);
// //   };

// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
// //       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
// //         {/* Close Icon */}
// //         <button
// //           onClick={closePopup}
// //           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
// //         >
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             fill="none"
// //             stroke="currentColor"
// //             className="w-6 h-6"
// //             viewBox="0 0 24 24"
// //             strokeWidth="2"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               d="M6 18L18 6M6 6l12 12"
// //             />
// //           </svg>
// //         </button>
// //         <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
// //           {isRegistering ? "Create an Account" : "Sign In"}
// //         </h2>

// //         {isRegistering ? (
// //           <form className="space-y-6">
// //             <div>
// //               <label className="text-gray-800 text-sm mb-2 block">
// //                 Email Id
// //               </label>
// //               <input
// //                 name="email"
// //                 type="text"
// //                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
// //                 placeholder="Enter email"
// //               />
// //             </div>
// //             <div>
// //               <label className="text-gray-800 text-sm mb-2 block">
// //                 Password
// //               </label>
// //               <input
// //                 name="password"
// //                 type="password"
// //                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
// //                 placeholder="Enter password"
// //               />
// //             </div>
// //             <div>
// //               <label className="text-gray-800 text-sm mb-2 block">
// //                 Confirm Password
// //               </label>
// //               <input
// //                 name="cpassword"
// //                 type="password"
// //                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
// //                 placeholder="Confirm your password"
// //               />
// //             </div>
// //             <div className="flex items-center">
// //               <input
// //                 id="remember-me"
// //                 name="remember-me"
// //                 type="checkbox"
// //                 className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// //               />
// //               <label
// //                 htmlFor="remember-me"
// //                 className="text-gray-800 ml-3 block text-sm"
// //               >
// //                 I accept the{" "}
// //                 <a
// //                   href="#"
// //                   className="text-blue-600 font-semibold hover:underline"
// //                 >
// //                   Terms and Conditions
// //                 </a>
// //               </label>
// //             </div>
// //             <div className="!mt-12">
// //               <button
// //                 type="button"
// //                 className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
// //               >
// //                 Create an account
// //               </button>
// //             </div>
// //             <p className="text-gray-800 text-sm mt-6 text-center">
// //               Already have an account?{" "}
// //               <a
// //                 href="#"
// //                 onClick={handleToggleForm}
// //                 className="text-blue-600 font-semibold hover:underline ml-1"
// //               >
// //                 Login here
// //               </a>
// //             </p>
// //           </form>
// //         ) : (
// //           <form className="space-y-4">
// //             <div>
// //               <label className="text-gray-800 text-sm mb-2 block">
// //                 Username
// //               </label>
// //               <input
// //                 name="username"
// //                 type="text"
// //                 className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
// //                 placeholder="Enter username"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label className="text-gray-800 text-sm mb-2 block">
// //                 Password
// //               </label>
// //               <input
// //                 name="password"
// //                 type="password"
// //                 className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
// //                 placeholder="Enter password"
// //                 required
// //               />
// //             </div>
// //             <div className="flex justify-between items-center">
// //               <label className="flex items-center">
// //                 <input type="checkbox" name="remember" className="mr-2" />
// //                 Remember me
// //               </label>
// //               <a href="#" className="text-sm text-blue-600 hover:underline">
// //                 Forgot password?
// //               </a>
// //             </div>
// //             <div>
// //               <button
// //                 type="submit"
// //                 className="w-full py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
// //               >
// //                 Sign In
// //               </button>
// //             </div>
// //             <p className="text-center text-sm text-gray-600 mt-6">
// //               Don't have an account?{" "}
// //               <a
// //                 href="#"
// //                 onClick={handleToggleForm}
// //                 className="text-blue-600 hover:underline"
// //               >
// //                 Register here
// //               </a>
// //             </p>
// //           </form>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginPopup;

// import React, { useState } from "react";

// const LoginPopup = ({ isOpen, closePopup }) => {
//   const [isRegistering, setIsRegistering] = useState(false);

//   if (!isOpen) return null;

//   const handleToggleForm = () => {
//     setIsRegistering((prev) => !prev);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
//         {/* Close Icon */}
//         <button
//           onClick={closePopup}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             stroke="currentColor"
//             className="w-6 h-6"
//             viewBox="0 0 24 24"
//             strokeWidth="2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//         <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
//           {isRegistering ? "Create an Account" : "Sign In"}
//         </h2>

//         {isRegistering ? (
//           <form className="space-y-6">
//             {/* Name */}
//             <div>
//               <label className="text-gray-800 text-sm mb-2 block">
//                 Your Name
//               </label>
//               <input
//                 name="name"
//                 type="text"
//                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>
//             {/* Username */}
//             <div>
//               <label className="text-gray-800 text-sm mb-2 block">
//                 Username
//               </label>
//               <input
//                 name="username"
//                 type="text"
//                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
//                 placeholder="Enter your username"
//                 required
//               />
//             </div>
//             {/* Email */}
//             <div>
//               <label className="text-gray-800 text-sm mb-2 block">
//                 Email Id
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             {/* Password */}
//             <div>
//               <label className="text-gray-800 text-sm mb-2 block">
//                 Password
//               </label>
//               <input
//                 name="password"
//                 type="password"
//                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
//                 placeholder="Enter password"
//                 required
//               />
//             </div>
//             {/* Terms & Conditions */}
//             <div className="flex items-center">
//               <input
//                 id="terms"
//                 name="terms"
//                 type="checkbox"
//                 className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                 required
//               />
//               <label
//                 htmlFor="terms"
//                 className="text-gray-800 ml-3 block text-sm"
//               >
//                 I accept the
//                 <a
//                   href="#"
//                   className="text-blue-600 font-semibold hover:underline"
//                 >
//                   Terms and Conditions
//                 </a>
//               </label>
//             </div>
//             {/* Submit Button */}
//             <div className="!mt-12">
//               <button
//                 type="submit"
//                 className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
//               >
//                 Create an account
//               </button>
//             </div>
//             <p className="text-gray-800 text-sm mt-6 text-center">
//               Already have an account?
//               <a
//                 href="#"
//                 onClick={handleToggleForm}
//                 className="text-blue-600 font-semibold hover:underline ml-1"
//               >
//                 Login here
//               </a>
//             </p>
//           </form>
//         ) : (
//           <form className="space-y-4">
//             {/* Username */}
//             <div>
//               <label className="text-gray-800 text-sm mb-2 block">
//                 Username
//               </label>
//               <input
//                 name="username"
//                 type="text"
//                 className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
//                 placeholder="Enter username"
//                 required
//               />
//             </div>
//             {/* Password */}
//             <div>
//               <label className="text-gray-800 text-sm mb-2 block">
//                 Password
//               </label>
//               <input
//                 name="password"
//                 type="password"
//                 className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
//                 placeholder="Enter password"
//                 required
//               />
//             </div>
//             {/* Remember Me */}
//             <div className="flex justify-between items-center">
//               <label className="flex items-center">
//                 <input type="checkbox" name="remember" className="mr-2" />
//                 Remember me
//               </label>
//               <a href="#" className="text-sm text-blue-600 hover:underline">
//                 Forgot password?
//               </a>
//             </div>
//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
//               >
//                 Sign In
//               </button>
//             </div>
//             <p className="text-center text-sm text-gray-600 mt-6">
//               Don't have an account?
//               <a
//                 href="#"
//                 onClick={handleToggleForm}
//                 className="text-blue-600 hover:underline"
//               >
//                 Register here
//               </a>
//             </p>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginPopup;

import React, { useState } from "react";

const LoginPopup = ({ isOpen, closePopup }) => {
  const [isRegistering, setIsRegistering] = useState(false);

  if (!isOpen) return null;

  const handleToggleForm = () => {
    setIsRegistering((prev) => !prev);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        {/* Close Icon */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          {isRegistering ? "Create an Account" : "Sign In"}
        </h2>

        {isRegistering ? (
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* Username */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Username
              </label>
              <input
                name="username"
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Email Id
              </label>
              <input
                name="email"
                type="email"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Password */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter password"
                required
              />
            </div>
            {/* Terms & Conditions */}
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
              <label
                htmlFor="terms"
                className="text-gray-800 ml-3 block text-sm"
              >
                I accept the{" "}
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
            {/* Submit Button */}
            <div className="!mt-12">
              <button
                type="submit"
                className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Create an account
              </button>
            </div>
            <p className="text-gray-800 text-sm mt-6 text-center">
              Already have an account?{" "}
              <a
                href="#"
                onClick={handleToggleForm}
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Login here
              </a>
            </p>
          </form>
        ) : (
          <form className="space-y-4">
            {/* Username */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Username
              </label>
              <input
                name="username"
                type="text"
                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                placeholder="Enter username"
                required
              />
            </div>
            {/* Password */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                placeholder="Enter password"
                required
              />
            </div>
            {/* Remember Me */}
            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input type="checkbox" name="remember" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
              >
                Sign In
              </button>
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              Doncleat have an account?{" "}
              <a
                href="#"
                onClick={handleToggleForm}
                className="text-blue-600 hover:underline"
              >
                Register here
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
