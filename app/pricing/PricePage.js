"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCheckCircle, FaLock } from "react-icons/fa";
import { BASE_URL } from "@/utils/globalStrings";
import { useAuth } from "@/Context/AuthContext";
import LoginPopup from "@/components/LoginPopup";
import QuizCard from "../previous-year-paper/components/QuizCard";
import { useQuestions } from "@/Context/QuestionsContext";
import { useRouter } from "next/navigation";
import { quizzesFirst, quizzesSecound } from "./demoquiz";
import ConversionStripFirst from "@/components/ConversionStripFirst";

const PricePage = () => {
  const { user } = useAuth();
  const [plans, setPlans] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [discountDetails, setDiscountDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingPlans, setIsFetchingPlans] = useState(true);
  const [isPurchased, setIsPurchased] = useState(false);
  const [error, setError] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [isSubscriptionActive, setIsSubscriptionActive] = useState(false);
  const [subscriptionPlanID, setSubscriptionPlanID] = useState(null);
  const [subscriptionStartDate, setSubscriptionStartDate] = useState(null);
  const [subscriptionExpiryDate, setSubscriptionExpiryDate] = useState(null);
  const { setQuestions } = useQuestions();
  const router = useRouter();

  const updateUserDetails = async () => {
    if (user?._id) {
      try {
        const response = await axios.get(`${BASE_URL}/${user._id}`);
        const {
          isSubscriptionActive,
          subscriptionPlanID,
          subscriptionStartDate,
          subscriptionExpiryDate,
        } = response.data.user;

        setIsSubscriptionActive(isSubscriptionActive);
        setSubscriptionPlanID(subscriptionPlanID);
        setSubscriptionStartDate(subscriptionStartDate);
        setSubscriptionExpiryDate(subscriptionExpiryDate);
      } catch (error) {
        console.error("Error fetching user details", error);
      }
    }
  };

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/plans/get-all`);
        setPlans(response.data);
      } catch (error) {
        setError("Failed to load plans. Please try again later.");
      } finally {
        setIsFetchingPlans(false);
      }
    };

    const loadRazorpayScript = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => setRazorpayLoaded(true);
      script.onerror = () =>
        setError("Failed to load Razorpay. Please try again.");
      document.body.appendChild(script);
    };

    fetchPlans();
    loadRazorpayScript();

    if (user?._id) {
      updateUserDetails();
    }
  }, [user]);

  const handleCouponChange = (e) => setCouponCode(e.target.value);

  const applyCoupon = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/coupons/validate`, {
        code: couponCode,
      });

      const { discountPercentage, maxDiscountAmount, associatedPlan } =
        response.data;

      const planIndex = plans.findIndex((plan) => plan._id === associatedPlan);

      if (planIndex !== -1) {
        const originalPrice = plans[planIndex].price;
        const discountAmount = (originalPrice * discountPercentage) / 100;
        const finalDiscount =
          discountAmount > maxDiscountAmount
            ? maxDiscountAmount
            : discountAmount;
        const discountedPrice = originalPrice - finalDiscount;

        const updatedPlans = [...plans];
        updatedPlans[planIndex] = {
          ...updatedPlans[planIndex],
          discountedPrice,
        };
        setPlans(updatedPlans);
        setDiscountDetails({
          discountPercentage,
          maxDiscountAmount,
          associatedPlan,
        });
      } else {
        setError("Invalid plan associated with coupon.");
      }
    } catch (error) {
      setDiscountDetails(null);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Failed to validate coupon. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const removeCoupon = () => {
    setCouponCode("");
    setDiscountDetails(null);
    setError("");
    setPlans((prevPlans) =>
      prevPlans.map((plan) => ({
        ...plan,
        discountedPrice: undefined,
      }))
    );
  };

  const handleChoosePlan = (plan) => {
    if (isSubscriptionActive) {
      return; // Don't proceed with plan selection if subscription is active
    }
    const finalPrice = plan.discountedPrice || plan.price;

    if (finalPrice < 19) {
      alert("This is a free plan and is not available for purchase.");
      return;
    }

    if (!user) {
      setIsLoginOpen(true);
    } else if (razorpayLoaded) {
      const options = {
        // key: "rzp_test_9Oqxns8kejKZpZ", // Razorpay Test Key  rzp_live_ac5iKugH3uLMLO
        key: "rzp_live_ac5iKugH3uLMLO", // Razorpay Test Key

        amount: finalPrice * 100,
        currency: "INR",
        name: "Meadhikari",
        description: `${
          plan.plan.charAt(0).toUpperCase() + plan.plan.slice(1)
        } Plan`,
        image: "https://your-logo-url.com/logo.png",
        handler: async function (response) {
          try {
            const paymentData = {
              newPlanId: plan._id,
              purchasePaymentId: response.razorpay_payment_id,
              couponCode: couponCode,
            };

            // Update subscription on success
            const updateResponse = await axios.put(
              `${BASE_URL}/update-subscription/${user._id}`,
              paymentData
            );

            if (updateResponse.status === 200) {
              setIsPurchased(true);
              await updateUserDetails();
              // alert("Payment Successful! Subscription updated.");
            } else {
              alert("Oops ⚠️! Something went wrong. Please try again.");
            }
          } catch (error) {
            alert("Oops ⚠️! Something went wrong. Please try again.");
            console.error("Error updating subscription", error);
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
        },
        notes: {
          plan: plan.plan,
        },
        theme: {
          color: "#007bff",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } else {
      setError("Razorpay is not loaded. Please try again later.");
    }
  };

  const closeLoginPopup = () => setIsLoginOpen(false);

  const activePlanName = plans.find(
    (plan) => plan._id === subscriptionPlanID
  )?.plan;

  const [loadingCard, setLoadingCard] = useState(null);

  const handleStartTest = async (questionsData, cardIndex) => {
    setQuestions(questionsData);
    router.push(`/test`);
    setLoadingCard(null);
  };
  return (
    <section className="bg-[#F7FAFC] py-16 px-6">
      <div className="w-[90%] mx-auto text-center">
        <h2 className="text-gray-800 text-4xl font-extrabold mb-8">
          Choose Your <span className="text-blue-600">Meadhikari</span> Plan
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Choose the plan that best fits your needs and get started with
          unlimited learning!
        </p>

        <div className="mb-12">
          {isSubscriptionActive ? (
            <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl w-[90%] max-w-3xl mx-auto transition-transform transform hover:scale-105 ease-in-out duration-300">
              <div className="text-center mb-6">
                <h3 className="text-4xl font-semibold text-indigo-600">
                  Active Subscription
                </h3>
              </div>
              <p className="text-lg mb-6 text-gray-600 text-center leading-relaxed">
                Your current plan is active, and you have access to all the
                features and content.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-8 text-lg text-gray-800">
                <p className="mb-3">
                  <strong className="font-semibold">Plan Name:</strong>{" "}
                  {activePlanName
                    ? activePlanName.charAt(0).toUpperCase() +
                      activePlanName.slice(1)
                    : "Unknown"}
                </p>
                <p className="mb-3">
                  <strong className="font-semibold">Start Date:</strong>{" "}
                  {new Date(subscriptionStartDate).toLocaleDateString()}
                </p>
                <p className="mb-3">
                  <strong className="font-semibold">Expiry Date:</strong>{" "}
                  {new Date(subscriptionExpiryDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-stretch gap-6 p-4">
              {/* Quiz Cards Section - Left */}
              <div className="w-full md:w-1/5 flex flex-col gap-4">
                {quizzesFirst.map((quiz, qIndex) => (
                  <div key={qIndex} className="w-full px-2">
                    <QuizCard
                      title={quiz.title}
                      time={`${quiz.time} min`}
                      questions={`${quiz.questions} Questions`}
                      marks={`${quiz.marks} Marks`}
                      languages={quiz.languages.join(", ")}
                      attempted={quiz.attempted}
                      buttonText={
                        loadingCard === qIndex ? "Loading..." : "Start Test"
                      }
                      free={quiz.free}
                      live={quiz.live}
                      demo={quiz.demo}
                      onButtonClick={() =>
                        handleStartTest(quiz.paper.questions, qIndex)
                      }
                    />
                  </div>
                ))}
              </div>

              {/* No Plan Active Section - Center */}
              <div className="w-full md:w-3/5 bg-blue-50 text-blue-700 p-8 rounded-xl shadow-2xl flex flex-col justify-center transition-transform transform hover:scale-105 ease-in-out duration-300">
                <h3 className="text-3xl md:text-4xl font-semibold text-indigo-600 text-center">
                  No Plan Active
                </h3>
                <p className="text-base md:text-lg mt-4 text-gray-600 text-center leading-relaxed">
                  It looks like you haven’t activated a plan yet. Please choose
                  a plan to start your journey and unlock unlimited access to
                  content.
                </p>
              </div>

              {/* Quiz Cards Section - Right */}
              <div className="w-full md:w-1/5 flex flex-col gap-4">
                {quizzesSecound.map((quiz, qIndex) => (
                  <div key={qIndex} className="w-full px-2">
                    <QuizCard
                      title={quiz.title}
                      time={`${quiz.time} min`}
                      questions={`${quiz.questions} Questions`}
                      marks={`${quiz.marks} Marks`}
                      languages={quiz.languages.join(", ")}
                      attempted={quiz.attempted}
                      buttonText={
                        loadingCard === qIndex ? "Loading..." : "Start Test"
                      }
                      free={quiz.free}
                      live={quiz.live}
                      demo={quiz.demo}
                      onButtonClick={() =>
                        handleStartTest(quiz.paper.questions, qIndex)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Promo Code Section */}
        {!isSubscriptionActive && (
          <div className="mb-12 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Have a coupon code?
              </h3>
              <div className="flex items-center justify-center mb-4">
                <input
                  type="text"
                  value={couponCode}
                  onChange={handleCouponChange}
                  className="border-2 border-gray-300 p-2 rounded-lg text-lg w-3/4 mr-2"
                  placeholder="Enter coupon code"
                  aria-label="Coupon Code"
                />
                <button
                  onClick={applyCoupon}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                  disabled={isLoading}
                  aria-label="Apply Coupon"
                >
                  {isLoading ? "Applying..." : "Apply"}
                </button>
              </div>
              {discountDetails && (
                <div>
                  <p className="mt-4 text-blue-600">
                    Coupon applied! You get a{" "}
                    {discountDetails.discountPercentage}% discount.
                  </p>
                  <button
                    onClick={removeCoupon}
                    className="mt-2 text-red-600 hover:text-red-800 transition duration-300"
                    aria-label="Remove Coupon"
                  >
                    Remove Coupon
                  </button>
                </div>
              )}
              {!discountDetails && error && (
                <p className="mt-4 text-red-600">{error}</p>
              )}
            </div>
          </div>
        )}

        {/* Plans Section */}
        {isFetchingPlans ? (
          <div className="relative w-[80%] h-64 mx-auto bg-gray-200 rounded-lg overflow-hidden">
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {plans.map((plan, index) => {
              const finalPrice = plan.discountedPrice || plan.price;
              const formattedPrice =
                plan.price === "0" ? "Free" : `₹${finalPrice}`;
              const features = plan.features || [];
              let planIcon = "📘";

              if (plan.plan === "free") {
                planIcon = "💡";
              } else if (plan.popular) {
                planIcon = "🔥";
              }

              return (
                <div
                  key={index}
                  className={`relative rounded-lg p-6 transition-transform transform group flex flex-col justify-between shadow-xl ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-2xl scale-105 hover:scale-110"
                      : "bg-white hover:shadow-2xl"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 bg-yellow-400 text-white text-sm font-bold px-4 py-1 rounded-tr-lg rounded-bl-lg shadow-lg z-10">
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-center justify-center">
                    <div
                      className={`text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 ${
                        plan.popular
                          ? "text-white"
                          : "text-yellow-500 group-hover:text-yellow-400"
                      }`}
                    >
                      {planIcon}
                    </div>
                  </div>

                  <h3
                    className={`text-2xl font-semibold mb-4 ${
                      plan.popular ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {plan.plan.charAt(0).toUpperCase() + plan.plan.slice(1)}{" "}
                    Plan
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
                    {formattedPrice}{" "}
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

                  <ul className="text-left mb-6">
                    {features.map((feature, index) => (
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

                  <button
                    onClick={() => handleChoosePlan(plan)}
                    className={`w-full py-3 px-6 rounded-lg text-center font-semibold transition duration-300 hover:scale-105 hover:shadow-lg mt-4 ${
                      plan.popular
                        ? "bg-white text-blue-700 hover:bg-gray-200"
                        : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                    }`}
                    disabled={isSubscriptionActive}
                    aria-label={`Subscribe to ${plan.plan}`}
                  >
                    {isSubscriptionActive ? (
                      <div className="flex justify-center items-center">
                        <FaLock className="mr-2" />
                        Subscribed
                      </div>
                    ) : (
                      "Choose Plan"
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <ConversionStripFirst />

      <LoginPopup isOpen={isLoginOpen} closePopup={closeLoginPopup} />
    </section>
  );
};

export default PricePage;
