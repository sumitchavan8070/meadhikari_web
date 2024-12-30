// // "use client";
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { FaCheckCircle } from "react-icons/fa"; // For checkmarks next to features
// // import { BASE_URL } from "@/utils/globalStrings"; // Import the BASE_URL

// // const PricePage = () => {
// //   const [plans, setPlans] = useState([]); // State to store plans
// //   const [couponCode, setCouponCode] = useState("");
// //   const [discount, setDiscount] = useState(0);
// //   const [isLoading, setIsLoading] = useState(false); // Loading state for applying coupon
// //   const [isPurchased, setIsPurchased] = useState(false); // Track if the plan is purchased
// //   const [error, setError] = useState(""); // State for error handling

// //   useEffect(() => {
// //     // Fetch the plans data when the component mounts
// //     const fetchPlans = async () => {
// //       try {
// //         const response = await axios.get(`${BASE_URL}/plans/get-all`);
// //         setPlans(response.data); // Assuming response.data contains the plans array
// //       } catch (error) {
// //         setError("Failed to load plans. Please try again later.");
// //         console.error("Error fetching plans", error);
// //       }
// //     };
// //     fetchPlans();
// //   }, []);

// //   const handleCouponChange = (e) => {
// //     setCouponCode(e.target.value);
// //   };

// //   const applyCoupon = () => {
// //     setIsLoading(true); // Show loading state
// //     setTimeout(() => {
// //       if (couponCode === "DISCOUNT10") {
// //         setDiscount(10); // 10% discount
// //       } else if (couponCode === "DISCOUNT20") {
// //         setDiscount(20); // 20% discount
// //       } else {
// //         setDiscount(0); // Invalid coupon
// //       }
// //       setIsLoading(false); // Hide loading state after applying coupon
// //     }, 1000); // Simulate a delay for applying coupon
// //   };

// //   return (
// //     <section className="bg-[#F7FAFC] py-16 px-6">
// //       <div className="w-[90%] mx-auto text-center">
// //         <h2 className="text-gray-800 text-4xl font-extrabold text-center mb-8">
// //           Choose Your <span className="text-blue-600">Meadhikari</span> Plan
// //         </h2>
// //         <p className="text-lg text-gray-600 mb-12">
// //           Choose the plan that best fits your needs and get started with
// //           unlimited learning!
// //         </p>

// //         {/* Error Handling */}
// //         {error && <p className="text-red-600 mb-4">{error}</p>}

// //         {/* Promo Code Section */}
// //         <div className="mb-12 text-center">
// //           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
// //             <h3 className="text-2xl font-semibold mb-4 text-gray-800">
// //               Have a coupon code?
// //             </h3>
// //             <div className="flex items-center justify-center mb-4">
// //               <input
// //                 type="text"
// //                 value={couponCode}
// //                 onChange={handleCouponChange}
// //                 className="border-2 border-gray-300 p-2 rounded-lg text-lg w-3/4 mr-2"
// //                 placeholder="Enter coupon code"
// //                 aria-label="Coupon Code"
// //               />
// //               <button
// //                 onClick={applyCoupon}
// //                 className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
// //                 disabled={isLoading}
// //                 aria-label="Apply Coupon"
// //               >
// //                 {isLoading ? "Applying..." : "Apply"}
// //               </button>
// //             </div>
// //             {discount > 0 && (
// //               <p className="mt-4 text-green-600">
// //                 Coupon applied! You get a {discount}% discount.
// //               </p>
// //             )}
// //             {discount === 0 && couponCode && !isLoading && (
// //               <p className="mt-4 text-red-600">
// //                 Invalid coupon code. Please try again.
// //               </p>
// //             )}
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
// //           {plans.map((plan, index) => {
// //             const finalPrice =
// //               plan.price !== "0"
// //                 ? plan.price - (plan.price * discount) / 100
// //                 : 0;
// //             const formattedPrice =
// //               plan.price === "0" ? "Free" : `₹${finalPrice}`;
// //             const features = plan.features || []; // Ensure features are always an array
// //             let planIcon = "📘"; // Default icon for standard plans

// //             if (plan.plan === "free") {
// //               planIcon = "💡"; // Icon for Free plan
// //             } else if (plan.popular) {
// //               planIcon = "🔥"; // Icon for Popular plans
// //             }

// //             return (
// //               <div
// //                 key={index}
// //                 className={`relative rounded-lg p-6 transition-transform transform group flex flex-col justify-between shadow-xl ${
// //                   plan.popular
// //                     ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-2xl scale-105 hover:scale-110"
// //                     : "bg-white hover:shadow-2xl"
// //                 }`}
// //               >
// //                 {/* Ribbon for Popular Plan */}
// //                 {plan.popular && (
// //                   <div className="absolute top-0 left-0 bg-yellow-400 text-white text-sm font-bold px-4 py-1 rounded-tr-lg rounded-bl-lg shadow-lg z-10">
// //                     Most Popular
// //                   </div>
// //                 )}

// //                 {/* Plan Icon */}
// //                 <div className="flex items-center justify-center">
// //                   <div
// //                     className={`text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 ${
// //                       plan.popular
// //                         ? "text-white"
// //                         : "text-yellow-500 group-hover:text-yellow-400"
// //                     }`}
// //                   >
// //                     {planIcon}
// //                   </div>
// //                 </div>

// //                 {/* Plan Details */}
// //                 <h3
// //                   className={`text-2xl font-semibold mb-4 ${
// //                     plan.popular ? "text-white" : "text-gray-800"
// //                   }`}
// //                 >
// //                   {plan.plan.charAt(0).toUpperCase() + plan.plan.slice(1)} Plan
// //                 </h3>
// //                 <p
// //                   className={`text-xl font-medium mb-4 ${
// //                     plan.popular ? "text-gray-100" : "text-gray-600"
// //                   }`}
// //                 >
// //                   {/* No description available */}
// //                   {plan.description || "No description available"}
// //                 </p>
// //                 <p
// //                   className={`text-4xl font-bold mb-4 ${
// //                     plan.popular ? "text-white" : "text-primary"
// //                   }`}
// //                 >
// //                   {formattedPrice}{" "}
// //                   <span
// //                     className={`text-lg ${
// //                       plan.popular ? "text-gray-300" : "text-gray-600"
// //                     }`}
// //                   >
// //                     {plan.durationInDays
// //                       ? `${plan.durationInDays} days`
// //                       : "Unlimited"}
// //                   </span>
// //                 </p>

// //                 {/* Feature List */}
// //                 <ul className="text-left mb-6">
// //                   {features.map((feature, index) => (
// //                     <li
// //                       key={index}
// //                       className={`flex items-center mb-3 text-sm sm:text-base ${
// //                         plan.popular ? "text-gray-200" : "text-gray-700"
// //                       }`}
// //                     >
// //                       <FaCheckCircle
// //                         className={`mr-2 ${
// //                           plan.popular ? "text-white" : "text-green-500"
// //                         }`}
// //                       />
// //                       <span>{feature}</span>
// //                     </li>
// //                   ))}
// //                 </ul>

// //                 {/* Button with Inverse Design for Popular Plan */}
// //                 <a
// //                   href={isPurchased ? "#" : plan.buttonLink || "#"} // Disable link if purchased
// //                   className={`w-full py-3 px-6 rounded-lg text-center font-semibold transition duration-300 hover:scale-105 hover:shadow-lg mt-4 ${
// //                     plan.popular
// //                       ? "bg-white text-blue-700 hover:bg-gray-200"
// //                       : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
// //                   }`}
// //                   aria-label={`Subscribe to ${plan.plan}`}
// //                 >
// //                   {isPurchased ? "Purchased" : "Choose Plan"}
// //                 </a>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default PricePage;

// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaCheckCircle } from "react-icons/fa"; // For checkmarks next to features
// import { BASE_URL } from "@/utils/globalStrings"; // Import the BASE_URL
// import { useAuth } from "@/Context/AuthContext"; // Import useAuth hook
// import LoginPopup from "@/components/LoginPopup";

// const PricePage = () => {
//   const { user } = useAuth(); // Access the logged-in user data from AuthContext
//   const [plans, setPlans] = useState([]); // State to store plans
//   const [couponCode, setCouponCode] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const [isLoading, setIsLoading] = useState(false); // Loading state for applying coupon
//   const [isPurchased, setIsPurchased] = useState(false); // Track if the plan is purchased
//   const [error, setError] = useState(""); // State for error handling
//   const [isLoginOpen, setIsLoginOpen] = useState(false); // State to control login popup visibility

//   useEffect(() => {
//     // Fetch the plans data when the component mounts
//     const fetchPlans = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/plans/get-all`);
//         setPlans(response.data); // Assuming response.data contains the plans array
//       } catch (error) {
//         setError("Failed to load plans. Please try again later.");
//         console.error("Error fetching plans", error);
//       }
//     };
//     fetchPlans();
//   }, []);

//   const handleCouponChange = (e) => {
//     setCouponCode(e.target.value);
//   };

//   const applyCoupon = () => {
//     setIsLoading(true); // Show loading state
//     setTimeout(() => {
//       if (couponCode === "DISCOUNT10") {
//         setDiscount(10); // 10% discount
//       } else if (couponCode === "DISCOUNT20") {
//         setDiscount(20); // 20% discount
//       } else {
//         setDiscount(0); // Invalid coupon
//       }
//       setIsLoading(false); // Hide loading state after applying coupon
//     }, 1000); // Simulate a delay for applying coupon
//   };

//   const handleChoosePlan = () => {
//     if (!user) {
//       // If the user is not logged in, open the login popup
//       setIsLoginOpen(true);
//     } else {
//       // If the user is logged in, proceed with the plan selection
//       setIsPurchased(true); // Simulate the purchase process (this can be updated to make an API call for actual purchase)
//     }
//   };

//   const closeLoginPopup = () => {
//     setIsLoginOpen(false); // Function to close the login popup
//   };

//   return (
//     <section className="bg-[#F7FAFC] py-16 px-6">
//       <div className="w-[90%] mx-auto text-center">
//         <h2 className="text-gray-800 text-4xl font-extrabold text-center mb-8">
//           Choose Your <span className="text-blue-600">Meadhikari</span> Plan
//         </h2>
//         <p className="text-lg text-gray-600 mb-12">
//           Choose the plan that best fits your needs and get started with
//           unlimited learning!
//         </p>

//         {/* Error Handling */}
//         {error && <p className="text-red-600 mb-4">{error}</p>}

//         {/* Promo Code Section */}
//         <div className="mb-12 text-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
//             <h3 className="text-2xl font-semibold mb-4 text-gray-800">
//               Have a coupon code?
//             </h3>
//             <div className="flex items-center justify-center mb-4">
//               <input
//                 type="text"
//                 value={couponCode}
//                 onChange={handleCouponChange}
//                 className="border-2 border-gray-300 p-2 rounded-lg text-lg w-3/4 mr-2"
//                 placeholder="Enter coupon code"
//                 aria-label="Coupon Code"
//               />
//               <button
//                 onClick={applyCoupon}
//                 className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
//                 disabled={isLoading}
//                 aria-label="Apply Coupon"
//               >
//                 {isLoading ? "Applying..." : "Apply"}
//               </button>
//             </div>
//             {discount > 0 && (
//               <p className="mt-4 text-green-600">
//                 Coupon applied! You get a {discount}% discount.
//               </p>
//             )}
//             {discount === 0 && couponCode && !isLoading && (
//               <p className="mt-4 text-red-600">
//                 Invalid coupon code. Please try again.
//               </p>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {plans.map((plan, index) => {
//             const finalPrice =
//               plan.price !== "0"
//                 ? plan.price - (plan.price * discount) / 100
//                 : 0;
//             const formattedPrice =
//               plan.price === "0" ? "Free" : `₹${finalPrice}`;
//             const features = plan.features || []; // Ensure features are always an array
//             let planIcon = "📘"; // Default icon for standard plans

//             if (plan.plan === "free") {
//               planIcon = "💡"; // Icon for Free plan
//             } else if (plan.popular) {
//               planIcon = "🔥"; // Icon for Popular plans
//             }

//             return (
//               <div
//                 key={index}
//                 className={`relative rounded-lg p-6 transition-transform transform group flex flex-col justify-between shadow-xl ${
//                   plan.popular
//                     ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-2xl scale-105 hover:scale-110"
//                     : "bg-white hover:shadow-2xl"
//                 }`}
//               >
//                 {/* Ribbon for Popular Plan */}
//                 {plan.popular && (
//                   <div className="absolute top-0 left-0 bg-yellow-400 text-white text-sm font-bold px-4 py-1 rounded-tr-lg rounded-bl-lg shadow-lg z-10">
//                     Most Popular
//                   </div>
//                 )}

//                 {/* Plan Icon */}
//                 <div className="flex items-center justify-center">
//                   <div
//                     className={`text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 ${
//                       plan.popular
//                         ? "text-white"
//                         : "text-yellow-500 group-hover:text-yellow-400"
//                     }`}
//                   >
//                     {planIcon}
//                   </div>
//                 </div>

//                 {/* Plan Details */}
//                 <h3
//                   className={`text-2xl font-semibold mb-4 ${
//                     plan.popular ? "text-white" : "text-gray-800"
//                   }`}
//                 >
//                   {plan.plan.charAt(0).toUpperCase() + plan.plan.slice(1)} Plan
//                 </h3>
//                 <p
//                   className={`text-xl font-medium mb-4 ${
//                     plan.popular ? "text-gray-100" : "text-gray-600"
//                   }`}
//                 >
//                   {/* No description available */}
//                   {plan.description || "No description available"}
//                 </p>
//                 <p
//                   className={`text-4xl font-bold mb-4 ${
//                     plan.popular ? "text-white" : "text-primary"
//                   }`}
//                 >
//                   {formattedPrice}{" "}
//                   <span
//                     className={`text-lg ${
//                       plan.popular ? "text-gray-300" : "text-gray-600"
//                     }`}
//                   >
//                     {plan.durationInDays
//                       ? `${plan.durationInDays} days`
//                       : "Unlimited"}
//                   </span>
//                 </p>

//                 {/* Feature List */}
//                 <ul className="text-left mb-6">
//                   {features.map((feature, index) => (
//                     <li
//                       key={index}
//                       className={`flex items-center mb-3 text-sm sm:text-base ${
//                         plan.popular ? "text-gray-200" : "text-gray-700"
//                       }`}
//                     >
//                       <FaCheckCircle
//                         className={`mr-2 ${
//                           plan.popular ? "text-white" : "text-green-500"
//                         }`}
//                       />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Button with Inverse Design for Popular Plan */}
//                 <a
//                   onClick={handleChoosePlan}
//                   href="#"
//                   className={`w-full py-3 px-6 rounded-lg text-center font-semibold transition duration-300 hover:scale-105 hover:shadow-lg mt-4 ${
//                     plan.popular
//                       ? "bg-white text-blue-700 hover:bg-gray-200"
//                       : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
//                   }`}
//                   aria-label={`Subscribe to ${plan.plan}`}
//                 >
//                   {isPurchased ? "Purchased" : "Choose Plan"}
//                 </a>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Login Popup */}
//       <LoginPopup isOpen={isLoginOpen} closePopup={closeLoginPopup} />
//     </section>
//   );
// };

// export default PricePage;

"use client";
import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa"; // For checkmarks next to features
import { BASE_URL } from "@/utils/globalStrings"; // Import the BASE_URL
import { useAuth } from "@/Context/AuthContext"; // Assuming you have an AuthContext to handle user data

const PricePage = () => {
  const { user } = useAuth(); // Access the logged-in user from the AuthContext
  const [plans, setPlans] = useState([]); // State to store plans
  const [error, setError] = useState(""); // State for error handling
  const [isPurchased, setIsPurchased] = useState(false); // Track if the plan is purchased
  const [razorpayLoaded, setRazorpayLoaded] = useState(false); // Track if Razorpay script is loaded

  useEffect(() => {
    // Dynamically load the Razorpay script
    const loadRazorpayScript = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => setRazorpayLoaded(true); // Set flag once loaded
      script.onerror = () =>
        setError("Failed to load Razorpay. Please try again.");
      document.body.appendChild(script);
    };

    loadRazorpayScript(); // Load Razorpay script
  }, []);

  useEffect(() => {
    // Fetch the plans data when the component mounts
    const fetchPlans = async () => {
      try {
        const response = await fetch(`${BASE_URL}/plans/get-all`);
        const data = await response.json();
        setPlans(data); // Assuming response.data contains the plans array
      } catch (error) {
        setError("Failed to load plans. Please try again later.");
        console.error("Error fetching plans", error);
      }
    };
    fetchPlans();
  }, []);

  const handlePayment = (plan) => {
    // Check if Razorpay script is loaded
    if (!razorpayLoaded) {
      alert("Razorpay script not loaded yet. Please try again.");
      return;
    }

    // Check if the user is logged in
    if (!user) {
      alert("Please log in to proceed with the payment.");
      return;
    }

    // Initialize Razorpay payment
    const options = {
      key: "rzp_test_9Oqxns8kejKZpZ", // Replace with your Razorpay Key ID
      amount: plan.price * 100, // Razorpay accepts amount in paise (₹1 = 100 paise)
      currency: "INR",
      name: "Meadhikari",
      description: `Payment for ${plan.plan}`,
      image: "/logo.png", // Optional logo
      handler: function (response) {
        alert("Payment Successful: " + response.razorpay_payment_id);
        setIsPurchased(true); // Mark the plan as purchased
      },
      prefill: {
        name: user.name,
        email: user.email,
        contact: user.contact,
      },
      theme: {
        color: "#00bcd4", // Customize the theme color
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open(); // Open Razorpay checkout
  };

  return (
    <section className="bg-[#F7FAFC] py-16 px-6">
      <div className="w-[90%] mx-auto text-center">
        <h2 className="text-gray-800 text-4xl font-extrabold text-center mb-8">
          Choose Your <span className="text-blue-600">Meadhikari</span> Plan
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Choose the plan that best fits your needs and get started with
          unlimited learning!
        </p>

        {/* Error Handling */}
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {plans.map((plan, index) => {
            return (
              <div
                key={index}
                className={`relative rounded-lg p-6 transition-transform transform group flex flex-col justify-between shadow-xl ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-2xl scale-105 hover:scale-110"
                    : "bg-white hover:shadow-2xl"
                }`}
              >
                {/* Ribbon for Popular Plan */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 bg-yellow-400 text-white text-sm font-bold px-4 py-1 rounded-tr-lg rounded-bl-lg shadow-lg z-10">
                    Most Popular
                  </div>
                )}

                {/* Plan Icon */}
                <div className="flex items-center justify-center">
                  <div
                    className={`text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 ${
                      plan.popular
                        ? "text-white"
                        : "text-yellow-500 group-hover:text-yellow-400"
                    }`}
                  >
                    {plan.plan === "free" ? "💡" : "📘"}
                  </div>
                </div>

                {/* Plan Details */}
                <h3
                  className={`text-2xl font-semibold mb-4 ${
                    plan.popular ? "text-white" : "text-gray-800"
                  }`}
                >
                  {plan.plan.charAt(0).toUpperCase() + plan.plan.slice(1)} Plan
                </h3>
                <p
                  className={`text-xl font-medium mb-4 ${
                    plan.popular ? "text-gray-100" : "text-gray-600"
                  }`}
                >
                  {plan.description || "No description available"}
                </p>
                <p
                  className={`text-4xl font-bold mb-4 ${
                    plan.popular ? "text-white" : "text-primary"
                  }`}
                >
                  ₹{plan.price}{" "}
                  <span
                    className={`text-lg ${
                      plan.popular ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {plan.durationInDays
                      ? `${plan.durationInDays} days`
                      : "Unlimited"}
                  </span>
                </p>

                {/* Feature List */}
                <ul className="text-left mb-6">
                  {plan.features &&
                    plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className={`flex items-center mb-3 text-sm sm:text-base ${
                          plan.popular ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        <FaCheckCircle
                          className={`mr-2 ${
                            plan.popular ? "text-white" : "text-green-500"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                </ul>

                {/* Button for Choosing Plan */}
                <button
                  onClick={() => handlePayment(plan)} // Call payment handler
                  className="w-full py-3 px-6 rounded-lg text-center font-semibold transition duration-300 hover:scale-105 hover:shadow-lg mt-4 bg-blue-600 text-white"
                >
                  {isPurchased ? "Purchased" : "Choose Plan"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricePage;
