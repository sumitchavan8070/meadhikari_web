// // // import React, { useState } from "react";
// // // import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import FaEye and FaEyeSlash icons
// // // import { useAuth } from "@/Context/AuthContext"; // Import useAuth hook

// // // const LoginPopup = ({ isOpen, closePopup }) => {
// // //   const { login, register, loading, error } = useAuth(); // Get login, register, loading, and error from context
// // //   const [isRegistering, setIsRegistering] = useState(false);
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [name, setName] = useState("");
// // //   const [username, setUsername] = useState("");
// // //   const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

// // //   // Regex for username validation
// // //   const usernameRegex = /^[a-zA-Z0-9_]+$/;

// // //   const handleUsernameChange = (e) => {
// // //     const input = e.target.value;

// // //     // Prevent leading spaces, quotes, or special characters
// // //     if (/^\s|['"`!@#$%^&*(),.?":{}|<>]/.test(input)) {
// // //       alert(
// // //         "Username cannot start with spaces, contain quotes, or special characters."
// // //       );
// // //       return;
// // //     }

// // //     // Allow valid usernames
// // //     if (usernameRegex.test(input) || input === "") {
// // //       setUsername(input);
// // //     } else {
// // //       alert("Username can only contain letters, numbers, and underscores.");
// // //     }
// // //   };

// // //   if (!isOpen) return null;

// // //   const handleToggleForm = () => {
// // //     setIsRegistering((prev) => !prev);
// // //   };

// // //   const handleLogin = async (e) => {
// // //     e.preventDefault();
// // //     await login(email.toLowerCase(), password); // Call login function from AuthContext
// // //     if (!loading && !error) closePopup(); // Close popup if login is successful
// // //   };

// // //   const handleRegister = async (e) => {
// // //     e.preventDefault();
// // //     await register(name, username, email.toLowerCase(), password); // Call register function from AuthContext
// // //     if (!loading && !error) closePopup(); // Close popup after successful registration
// // //   };

// // //   const togglePasswordVisibility = () => {
// // //     setPasswordVisible((prev) => !prev); // Toggle the password visibility state
// // //   };

// // //   return (
// // //     <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
// // //       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative z-60">
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
// // //           {isRegistering ? "Create an Account" : "Sign In"}
// // //         </h2>

// // //         {isRegistering ? (
// // //           <form onSubmit={handleRegister} className="space-y-6">
// // //             {/* Name */}
// // //             <div>
// // //               <label className="text-gray-800 text-sm mb-2 block">
// // //                 Your Name
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
// // //                 placeholder="Enter your name"
// // //                 required
// // //                 value={name}
// // //                 onChange={(e) => setName(e.target.value)}
// // //               />
// // //             </div>
// // //             {/* Username */}
// // //             <div>
// // //               <label className="text-gray-800 text-sm mb-2 block">
// // //                 Username
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
// // //                 placeholder="Enter your username"
// // //                 required
// // //                 value={username}
// // //                 onChange={handleUsernameChange} // Custom validation logic
// // //               />
// // //             </div>
// // //             {/* Email */}
// // //             <div>
// // //               <label className="text-gray-800 text-sm mb-2 block">
// // //                 Email Id
// // //               </label>
// // //               <input
// // //                 type="email"
// // //                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
// // //                 placeholder="Enter your email"
// // //                 required
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //               />
// // //             </div>
// // //             {/* Password */}
// // //             <div className="relative">
// // //               <label className="text-gray-800 text-sm mb-2 block">
// // //                 Password
// // //               </label>
// // //               <input
// // //                 type={passwordVisible ? "text" : "password"}
// // //                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
// // //                 placeholder="Enter password"
// // //                 required
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //               />
// // //               <button
// // //                 type="button"
// // //                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
// // //                 onClick={togglePasswordVisibility}
// // //               >
// // //                 {passwordVisible ? (
// // //                   <FaEyeSlash className="w-6 h-6 mt-6" />
// // //                 ) : (
// // //                   <FaEye className="w-6 h-6 mt-6" />
// // //                 )}
// // //               </button>
// // //             </div>
// // //             {/* Terms & Conditions */}
// // //             <div className="flex items-center">
// // //               <input
// // //                 id="terms"
// // //                 name="terms"
// // //                 type="checkbox"
// // //                 className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// // //                 required
// // //               />
// // //               <label
// // //                 htmlFor="terms"
// // //                 className="text-gray-800 ml-3 block text-sm"
// // //               >
// // //                 I accept the{" "}
// // //                 <a
// // //                   href="#"
// // //                   className="text-blue-600 font-semibold hover:underline"
// // //                 >
// // //                   Terms and Conditions
// // //                 </a>
// // //               </label>
// // //             </div>
// // //             {/* Submit Button */}
// // //             <div className="!mt-12">
// // //               <button
// // //                 type="submit"
// // //                 className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
// // //                 disabled={loading}
// // //               >
// // //                 {loading ? "Creating Account..." : "Create an account"}
// // //               </button>
// // //             </div>
// // //             <p className="text-gray-800 text-sm mt-6 text-center">
// // //               Already have an account?{" "}
// // //               <a
// // //                 href="#"
// // //                 onClick={handleToggleForm}
// // //                 className="text-blue-600 font-semibold hover:underline ml-1"
// // //               >
// // //                 Login here
// // //               </a>
// // //             </p>
// // //           </form>
// // //         ) : (
// // //           <form onSubmit={handleLogin} className="space-y-4">
// // //             {/* Email */}
// // //             <div>
// // //               <label className="text-gray-800 text-sm mb-2 block">Email</label>
// // //               <input
// // //                 type="email"
// // //                 className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
// // //                 placeholder="Enter your email"
// // //                 required
// // //                 value={email}
// // //                 onChange={(e) => setEmail(e.target.value)}
// // //               />
// // //             </div>
// // //             {/* Password */}
// // //             <div className="relative">
// // //               <label className="text-gray-800 text-sm mb-2 block">
// // //                 Password
// // //               </label>
// // //               <input
// // //                 type={passwordVisible ? "text" : "password"}
// // //                 className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
// // //                 placeholder="Enter password"
// // //                 required
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //               />
// // //               <button
// // //                 type="button"
// // //                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
// // //                 onClick={togglePasswordVisibility}
// // //               >
// // //                 {passwordVisible ? (
// // //                   <FaEyeSlash className="w-6 h-6 mt-6" />
// // //                 ) : (
// // //                   <FaEye className="w-6 h-6 mt-6" />
// // //                 )}
// // //               </button>
// // //             </div>
// // //             {/* Submit Button */}
// // //             <div>
// // //               <button
// // //                 type="submit"
// // //                 className="w-full py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
// // //                 disabled={loading}
// // //               >
// // //                 {loading ? "Logging in..." : "Sign In"}
// // //               </button>
// // //             </div>
// // //             <p className="text-center text-sm text-gray-600 mt-6">
// // //               Dont have an account?{" "}
// // //               <a
// // //                 href="#"
// // //                 onClick={handleToggleForm}
// // //                 className="text-blue-600 hover:underline"
// // //               >
// // //                 Register here
// // //               </a>
// // //             </p>
// // //           </form>
// // //         )}
// // //         {/* Error Message */}
// // //         {error && <div className="text-red-500 text-sm mt-4">{error}</div>}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LoginPopup;

// // import React, { useState } from "react";
// // import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import FaEye and FaEyeSlash icons
// // import { useAuth } from "@/Context/AuthContext"; // Import useAuth hook
// // import axios from "axios";
// // import { BASE_URL } from "@/utils/globalStrings";

// // const LoginPopup = ({ isOpen, closePopup }) => {
// //   const { login, register, forgotPassword, loading, error } = useAuth(); // Add forgotPassword from context
// //   const [isRegistering, setIsRegistering] = useState(false);
// //   const [isForgotPassword, setIsForgotPassword] = useState(false); // State to toggle forgot password form
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [name, setName] = useState("");
// //   const [username, setUsername] = useState("");
// //   const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

// //   // Regex for username validation
// //   const usernameRegex = /^[a-zA-Z0-9_]+$/;

// //   const handleUsernameChange = (e) => {
// //     const input = e.target.value;

// //     // Prevent leading spaces, quotes, or special characters
// //     if (/^\s|['"`!@#$%^&*(),.?":{}|<>]/.test(input)) {
// //       alert(
// //         "Username cannot start with spaces, contain quotes, or special characters."
// //       );
// //       return;
// //     }

// //     // Allow valid usernames
// //     if (usernameRegex.test(input) || input === "") {
// //       setUsername(input);
// //     } else {
// //       alert("Username can only contain letters, numbers, and underscores.");
// //     }
// //   };

// //   if (!isOpen) return null;

// //   const handleToggleForm = () => {
// //     setIsRegistering((prev) => !prev);
// //     setIsForgotPassword(false); // Reset forgot password state when toggling forms
// //   };

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     await login(email.toLowerCase(), password); // Call login function from AuthContext
// //     if (!loading && !error) closePopup(); // Close popup if login is successful
// //   };

// //   const handleRegister = async (e) => {
// //     e.preventDefault();
// //     await register(name, username, email.toLowerCase(), password); // Call register function from AuthContext
// //     if (!loading && !error) closePopup(); // Close popup after successful registration
// //   };

// //   const handleForgotPassword = async (e) => {
// //     e.preventDefault();

// //     try {
// //       // Send a POST request to the forgot-password endpoint
// //       const response = await axios.post(`${BASE_URL}/forgot-password`, {
// //         email: email.toLowerCase(), // Send the email in lowercase
// //       });

// //       // Handle the response from the server
// //       if (response.data.success) {
// //         alert("Password reset email sent. Please check your inbox.");
// //         setIsForgotPassword(false); // Reset the forgot password form
// //       } else {
// //         alert(response.data.message || "Failed to send password reset email.");
// //       }
// //     } catch (error) {
// //       // Handle errors (e.g., network issues, server errors)
// //       console.error("Error sending forgot password request:", error);
// //       alert(
// //         error.response?.data?.message ||
// //           "An error occurred while processing your request."
// //       );
// //     }
// //   };
// //   const togglePasswordVisibility = () => {
// //     setPasswordVisible((prev) => !prev); // Toggle the password visibility state
// //   };

// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
// //       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative z-60">
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
// //           {isForgotPassword
// //             ? "Forgot Password"
// //             : isRegistering
// //             ? "Create an Account"
// //             : "Sign In"}
// //         </h2>

// //         {isForgotPassword ? (
// //           <form onSubmit={handleForgotPassword} className="space-y-6">
// //             {/* Email */}
// //             <div>
// //               <label className="text-gray-800 text-sm mb-2 block">Email</label>
// //               <input
// //                 type="email"
// //                 className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
// //                 placeholder="Enter your email"
// //                 required
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />
// //             </div>
// //             {/* Submit Button */}
// //             <div>
// //               <button
// //                 type="submit"
// //                 className="w-full py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
// //                 disabled={loading}
// //               >
// //                 {loading ? "Sending Email..." : "Reset Password"}
// //               </button>
// //             </div>
// //             <p className="text-center text-sm text-gray-600 mt-6">
// //               Remember your password?{" "}
// //               <a
// //                 href="#"
// //                 onClick={() => setIsForgotPassword(false)}
// //                 className="text-blue-600 hover:underline"
// //               >
// //                 Login here
// //               </a>
// //             </p>
// //           </form>
// //         ) : isRegistering ? (
// //           <form onSubmit={handleRegister} className="space-y-6">
// //             {/* Name */}
// //             <div>
// //               <label className="text-gray-800 text-sm mb-2 block">
// //                 Your Name
// //               </label>
// //               <input
// //                 type="text"
// //                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
// //                 placeholder="Enter your name"
// //                 required
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //               />
// //             </div>
// //             {/* Username */}
// //             <div>
// //               <label className="text-gray-800 text-sm mb-2 block">
// //                 Username
// //               </label>
// //               <input
// //                 type="text"
// //                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
// //                 placeholder="Enter your username"
// //                 required
// //                 value={username}
// //                 onChange={handleUsernameChange} // Custom validation logic
// //               />
// //             </div>
// //             {/* Email */}
// //             <div>
// //               <label className="text-gray-800 text-sm mb-2 block">
// //                 Email Id
// //               </label>
// //               <input
// //                 type="email"
// //                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
// //                 placeholder="Enter your email"
// //                 required
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />
// //             </div>
// //             {/* Password */}
// //             <div className="relative">
// //               <label className="text-gray-800 text-sm mb-2 block">
// //                 Password
// //               </label>
// //               <input
// //                 type={passwordVisible ? "text" : "password"}
// //                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
// //                 placeholder="Enter password"
// //                 required
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //               />
// //               <button
// //                 type="button"
// //                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
// //                 onClick={togglePasswordVisibility}
// //               >
// //                 {passwordVisible ? (
// //                   <FaEyeSlash className="w-6 h-6 mt-6" />
// //                 ) : (
// //                   <FaEye className="w-6 h-6 mt-6" />
// //                 )}
// //               </button>
// //             </div>
// //             {/* Terms & Conditions */}
// //             <div className="flex items-center">
// //               <input
// //                 id="terms"
// //                 name="terms"
// //                 type="checkbox"
// //                 className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// //                 required
// //               />
// //               <label
// //                 htmlFor="terms"
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
// //             {/* Submit Button */}
// //             <div className="!mt-12">
// //               <button
// //                 type="submit"
// //                 className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
// //                 disabled={loading}
// //               >
// //                 {loading ? "Creating Account..." : "Create an account"}
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
// //           <form onSubmit={handleLogin} className="space-y-4">
// //             {/* Email */}
// //             <div>
// //               <label className="text-gray-800 text-sm mb-2 block">Email</label>
// //               <input
// //                 type="email"
// //                 className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
// //                 placeholder="Enter your email"
// //                 required
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />
// //             </div>
// //             {/* Password */}
// //             <div className="relative">
// //               <label className="text-gray-800 text-sm mb-2 block">
// //                 Password
// //               </label>
// //               <input
// //                 type={passwordVisible ? "text" : "password"}
// //                 className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
// //                 placeholder="Enter password"
// //                 required
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //               />
// //               <button
// //                 type="button"
// //                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
// //                 onClick={togglePasswordVisibility}
// //               >
// //                 {passwordVisible ? (
// //                   <FaEyeSlash className="w-6 h-6 mt-6" />
// //                 ) : (
// //                   <FaEye className="w-6 h-6 mt-6" />
// //                 )}
// //               </button>
// //             </div>
// //             {/* Submit Button */}
// //             <div>
// //               <button
// //                 type="submit"
// //                 className="w-full py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
// //                 disabled={loading}
// //               >
// //                 {loading ? "Logging in..." : "Sign In"}
// //               </button>
// //             </div>
// //             <p className="text-center text-sm text-gray-600 mt-6">
// //               Dont have an account?{" "}
// //               <a
// //                 href="#"
// //                 onClick={handleToggleForm}
// //                 className="text-blue-600 hover:underline"
// //               >
// //                 Register here
// //               </a>
// //             </p>
// //             {/* Forgot Password Link */}
// //             <p className="text-center text-sm text-gray-600">
// //               <a
// //                 href="#"
// //                 onClick={() => setIsForgotPassword(true)}
// //                 className="text-blue-600 hover:underline"
// //               >
// //                 Forgot Password?
// //               </a>
// //             </p>
// //           </form>
// //         )}
// //         {/* Error Message */}
// //         {error && <div className="text-red-500 text-sm mt-4">{error}</div>}
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginPopup;

// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import FaEye and FaEyeSlash icons
// import { useAuth } from "@/Context/AuthContext"; // Import useAuth hook
// import axios from "axios";
// import { BASE_URL } from "@/utils/globalStrings";

// const LoginPopup = ({ isOpen, closePopup }) => {
//   const { login, register, loading, error } = useAuth(); // Use loading from context
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [isForgotPassword, setIsForgotPassword] = useState(false); // State to toggle forgot password form
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
//   const [isForgotPasswordLoading, setIsForgotPasswordLoading] = useState(false); // Local loading state for forgot password

//   // Regex for username validation
//   const usernameRegex = /^[a-zA-Z0-9_]+$/;

//   const handleUsernameChange = (e) => {
//     const input = e.target.value;

//     // Prevent leading spaces, quotes, or special characters
//     if (/^\s|['"`!@#$%^&*(),.?":{}|<>]/.test(input)) {
//       alert(
//         "Username cannot start with spaces, contain quotes, or special characters."
//       );
//       return;
//     }

//     // Allow valid usernames
//     if (usernameRegex.test(input) || input === "") {
//       setUsername(input);
//     } else {
//       alert("Username can only contain letters, numbers, and underscores.");
//     }
//   };

//   if (!isOpen) return null;

//   const handleToggleForm = () => {
//     setIsRegistering((prev) => !prev);
//     setIsForgotPassword(false); // Reset forgot password state when toggling forms
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     await login(email.toLowerCase(), password); // Call login function from AuthContext
//     if (!loading && !error) closePopup(); // Close popup if login is successful
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     await register(name, username, email.toLowerCase(), password); // Call register function from AuthContext
//     if (!loading && !error) closePopup(); // Close popup after successful registration
//   };

//   const handleForgotPassword = async (e) => {
//     e.preventDefault();

//     try {
//       // Set local loading state to true
//       setIsForgotPasswordLoading(true);

//       // Send a POST request to the forgot-password endpoint
//       const response = await axios.post(`${BASE_URL}/forgot-password`, {
//         email: email.toLowerCase(), // Send the email in lowercase
//       });

//       // Handle the response from the server
//       if (response.data.success) {
//         alert("Password reset email sent. Please check your inbox.");
//         setIsForgotPassword(false); // Reset the forgot password form
//       } else {
//         alert(response.data.message || "Failed to send password reset email.");
//       }
//     } catch (error) {
//       // Handle errors (e.g., network issues, server errors)
//       console.error("Error sending forgot password request:", error);
//       alert(
//         error.response?.data?.message ||
//           "An error occurred while processing your request."
//       );
//     } finally {
//       // Set local loading state to false
//       setIsForgotPasswordLoading(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible((prev) => !prev); // Toggle the password visibility state
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative z-60">
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
//           {isForgotPassword
//             ? "Forgot Password"
//             : isRegistering
//             ? "Create an Account"
//             : "Sign In"}
//         </h2>

//         {isForgotPassword ? (
//           <form onSubmit={handleForgotPassword} className="space-y-6">
//             {/* Email */}
//             <div>
//               <label className="text-gray-800 text-sm mb-2 block">Email</label>
//               <input
//                 type="email"
//                 className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
//                 placeholder="Enter your email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
//                 disabled={isForgotPasswordLoading}
//               >
//                 {isForgotPasswordLoading ? (
//                   <div className="flex items-center justify-center">
//                     <svg
//                       className="animate-spin h-5 w-5 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     <span className="ml-2">Sending Email...</span>
//                   </div>
//                 ) : (
//                   "Reset Password"
//                 )}
//               </button>
//             </div>
//             <p className="text-center text-sm text-gray-600 mt-6">
//               Remember your password?{" "}
//               <a
//                 href="#"
//                 onClick={() => setIsForgotPassword(false)}
//                 className="text-blue-600 hover:underline"
//               >
//                 Login here
//               </a>
//             </p>
//           </form>
//         ) : isRegistering ? (
//           <form onSubmit={handleRegister} className="space-y-6">
//             {/* Name */}
//             <div>
//               <label className="text-gray-800 text-sm mb-2 block">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
//                 placeholder="Enter your name"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             {/* Username */}
//             <div>
//               <label className="text-gray-800 text-sm mb-2 block">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
//                 placeholder="Enter your username"
//                 required
//                 value={username}
//                 onChange={handleUsernameChange} // Custom validation logic
//               />
//             </div>
//             {/* Email */}
//             <div>
//               <label className="text-gray-800 text-sm mb-2 block">
//                 Email Id
//               </label>
//               <input
//                 type="email"
//                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
//                 placeholder="Enter your email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             {/* Password */}
//             <div className="relative">
//               <label className="text-gray-800 text-sm mb-2 block">
//                 Password
//               </label>
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
//                 placeholder="Enter password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 type="button"
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
//                 onClick={togglePasswordVisibility}
//               >
//                 {passwordVisible ? (
//                   <FaEyeSlash className="w-6 h-6 mt-6" />
//                 ) : (
//                   <FaEye className="w-6 h-6 mt-6" />
//                 )}
//               </button>
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
//                 I accept the{" "}
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
//                 disabled={loading}
//               >
//                 {loading ? "Creating Account..." : "Create an account"}
//               </button>
//             </div>
//             <p className="text-gray-800 text-sm mt-6 text-center">
//               Already have an account?{" "}
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
//           <form onSubmit={handleLogin} className="space-y-4">
//             {/* Email */}
//             <div>
//               <label className="text-gray-800 text-sm mb-2 block">Email</label>
//               <input
//                 type="email"
//                 className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
//                 placeholder="Enter your email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             {/* Password */}
//             <div className="relative">
//               <label className="text-gray-800 text-sm mb-2 block">
//                 Password
//               </label>
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
//                 placeholder="Enter password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 type="button"
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
//                 onClick={togglePasswordVisibility}
//               >
//                 {passwordVisible ? (
//                   <FaEyeSlash className="w-6 h-6 mt-6" />
//                 ) : (
//                   <FaEye className="w-6 h-6 mt-6" />
//                 )}
//               </button>
//             </div>
//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
//                 disabled={loading}
//               >
//                 {loading ? "Logging in..." : "Sign In"}
//               </button>
//             </div>
//             <p className="text-center text-sm text-gray-600 mt-6">
//               Dont have an account?{" "}
//               <a
//                 href="#"
//                 onClick={handleToggleForm}
//                 className="text-blue-600 hover:underline"
//               >
//                 Register here
//               </a>
//             </p>
//             {/* Forgot Password Link */}
//             <p className="text-center text-sm text-gray-600">
//               <a
//                 href="#"
//                 onClick={() => setIsForgotPassword(true)}
//                 className="text-blue-600 hover:underline"
//               >
//                 Forgot Password?
//               </a>
//             </p>
//           </form>
//         )}
//         {/* Error Message */}
//         {error && <div className="text-red-500 text-sm mt-4">{error}</div>}
//       </div>
//     </div>
//   );
// };

// export default LoginPopup;

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import FaEye and FaEyeSlash icons
import { useAuth } from "@/Context/AuthContext"; // Import useAuth hook
import axios from "axios";
import { BASE_URL } from "@/utils/globalStrings";
import CustomAlert from "./CustomAlert"; // Import the CustomAlert component

const LoginPopup = ({ isOpen, closePopup }) => {
  const { login, register, loading, error } = useAuth(); // Use loading from context
  const [isRegistering, setIsRegistering] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false); // State to toggle forgot password form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const [isForgotPasswordLoading, setIsForgotPasswordLoading] = useState(false); // Local loading state for forgot password
  const [showCustomAlert, setShowCustomAlert] = useState(false); // State to control custom alert visibility
  const [alertMessage, setAlertMessage] = useState(""); // State to store alert message

  // Regex for username validation
  const usernameRegex = /^[a-zA-Z0-9_]+$/;

  const handleUsernameChange = (e) => {
    const input = e.target.value;

    // Prevent leading spaces, quotes, or special characters
    if (/^\s|['"`!@#$%^&*(),.?":{}|<>]/.test(input)) {
      alert(
        "Username cannot start with spaces, contain quotes, or special characters."
      );
      return;
    }

    // Allow valid usernames
    if (usernameRegex.test(input) || input === "") {
      setUsername(input);
    } else {
      alert("Username can only contain letters, numbers, and underscores.");
    }
  };

  if (!isOpen) return null;

  const handleToggleForm = () => {
    setIsRegistering((prev) => !prev);
    setIsForgotPassword(false); // Reset forgot password state when toggling forms
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email.toLowerCase(), password); // Call login function from AuthContext
    if (!loading && !error) closePopup(); // Close popup if login is successful
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await register(name, username, email.toLowerCase(), password); // Call register function from AuthContext
    if (!loading && !error) closePopup(); // Close popup after successful registration
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      // Set local loading state to true
      setIsForgotPasswordLoading(true);

      // Send a POST request to the forgot-password endpoint
      const response = await axios.post(`${BASE_URL}/forgot-password`, {
        email: email.toLowerCase(), // Send the email in lowercase
      });

      // Handle the response from the server
      if (response.data.success) {
        setAlertMessage("Password reset email sent. Please check your inbox."); // Set custom alert message
        setShowCustomAlert(true); // Show custom alert
        setIsForgotPassword(false); // Reset the forgot password form
      } else {
        setAlertMessage(
          response.data.message || "Failed to send password reset email."
        ); // Set custom alert message
        setShowCustomAlert(true); // Show custom alert
      }
    } catch (error) {
      // Handle errors (e.g., network issues, server errors)
      console.error("Error sending forgot password request:", error);
      setAlertMessage(
        error.response?.data?.message ||
          "An error occurred while processing your request."
      ); // Set custom alert message
      setShowCustomAlert(true); // Show custom alert
    } finally {
      // Set local loading state to false
      setIsForgotPasswordLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev); // Toggle the password visibility state
  };

  const handleCloseCustomAlert = () => {
    setShowCustomAlert(false); // Hide custom alert
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative z-60">
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
          {isForgotPassword
            ? "Forgot Password"
            : isRegistering
            ? "Create an Account"
            : "Sign In"}
        </h2>

        {isForgotPassword ? (
          <form onSubmit={handleForgotPassword} className="space-y-6">
            {/* Email */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input
                type="email"
                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                disabled={isForgotPasswordLoading}
              >
                {isForgotPasswordLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span className="ml-2">Sending Email...</span>
                  </div>
                ) : (
                  "Reset Password"
                )}
              </button>
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              Remember your password?{" "}
              <a
                href="#"
                onClick={() => setIsForgotPassword(false)}
                className="text-blue-600 hover:underline"
              >
                Login here
              </a>
            </p>
          </form>
        ) : isRegistering ? (
          <form onSubmit={handleRegister} className="space-y-6">
            {/* Name */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Your Name
              </label>
              <input
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* Username */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Username
              </label>
              <input
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter your username"
                required
                value={username}
                onChange={handleUsernameChange} // Custom validation logic
              />
            </div>
            {/* Email */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Email Id
              </label>
              <input
                type="email"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Password */}
            <div className="relative">
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <FaEyeSlash className="w-6 h-6 mt-6" />
                ) : (
                  <FaEye className="w-6 h-6 mt-6" />
                )}
              </button>
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
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create an account"}
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
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input
                type="email"
                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Password */}
            <div className="relative">
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <FaEyeSlash className="w-6 h-6 mt-6" />
                ) : (
                  <FaEye className="w-6 h-6 mt-6" />
                )}
              </button>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Sign In"}
              </button>
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              Dont have an account?{" "}
              <a
                href="#"
                onClick={handleToggleForm}
                className="text-blue-600 hover:underline"
              >
                Register here
              </a>
            </p>
            {/* Forgot Password Link */}
            <p className="text-center text-sm text-gray-600">
              <a
                href="#"
                onClick={() => setIsForgotPassword(true)}
                className="text-blue-600 hover:underline"
              >
                Forgot Password?
              </a>
            </p>
          </form>
        )}
        {/* Error Message */}
        {error && <div className="text-red-500 text-sm mt-4">{error}</div>}

        {/* Custom Alert */}
        {showCustomAlert && (
          <CustomAlert
            message={alertMessage}
            onClose={handleCloseCustomAlert}
          />
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
