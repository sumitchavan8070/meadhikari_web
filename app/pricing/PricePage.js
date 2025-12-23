"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaCheckCircle, FaLock, FaTags, FaTimes } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { BASE_URL, RAZORPAY_LIVE_KEY } from "@/utils/globalStrings";
import { useAuth } from "@/Context/AuthContext";
import LoginPopup from "@/components/LoginPopup";
import QuizCard from "../previous-year-paper/components/QuizCard";
import { useQuestions } from "@/Context/QuestionsContext";
import { useRouter } from "next/navigation";
import { quizzesFirst, quizzesSecound } from "./demoquiz";
import ConversionStripFirst from "@/components/ConversionStripFirst";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import PaymentMethods from "@/components/PaymentMethods";
import PaymentMethodsFirstBanner from "@/components/PaymentMethodsFirstBanner";
import PaymentMethodsOnlyLogos from "@/components/PaymentMethodsOnlyLogos";

const PricePage = () => {
  const { width, height } = useWindowSize();
  // const { user } = useAuth();
  const { user, openLoginPopup } = useAuth();

  const [plans, setPlans] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [discountDetails, setDiscountDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingPlans, setIsFetchingPlans] = useState(true);
  const [isPurchased, setIsPurchased] = useState(false);
  const [error, setError] = useState("");
  // const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [isSubscriptionActive, setIsSubscriptionActive] = useState(false);
  const [subscriptionPlanID, setSubscriptionPlanID] = useState(null);
  const [subscriptionStartDate, setSubscriptionStartDate] = useState(null);
  const [subscriptionExpiryDate, setSubscriptionExpiryDate] = useState(null);
  const { setQuestions } = useQuestions();
  const router = useRouter();
  const [loadingCard, setLoadingCard] = useState(null);
  const [availableCoupons, setAvailableCoupons] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const highlightedCardRef = useRef(null);

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
    fetchAvailableCoupons();

    if (user?._id) {
      updateUserDetails();
    }
  }, [user]);

  const fetchAvailableCoupons = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/coupons/all`);
      setAvailableCoupons(response.data);
    } catch (error) {
      console.error("Error fetching coupons", error);
      setError("Failed to load available coupons");
    }
  };

  const handleCouponChange = (e) => setCouponCode(e.target.value);

  const applyCoupon = async (code = couponCode) => {
    if (!code.trim()) {
      setError("Please enter a coupon code");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/coupons/validate`, {
        code: code,
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
        setError("");

        // Show confetti celebration
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 6000);

        // Scroll to highlighted card after a short delay
        setTimeout(() => {
          if (highlightedCardRef.current) {
            highlightedCardRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 500);
      } else {
        setError("This coupon is not valid for any available plans.");
      }
    } catch (error) {
      setDiscountDetails(null);
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("Failed to validate coupon. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const applyCouponFromList = async (coupon) => {
    // Clear any existing coupon first
    removeCoupon();

    // Set the new coupon code
    setCouponCode(coupon.code);

    // Apply the coupon directly with the code
    await applyCoupon(coupon.code);
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
    if (isSubscriptionActive) return;

    const finalPrice = plan.discountedPrice || plan.price;
    if (finalPrice < 19) {
      alert("This is a free plan and is not available for purchase.");
      return;
    }

    if (!user) {
      openLoginPopup();
    } else if (razorpayLoaded) {
      const options = {
        key: RAZORPAY_LIVE_KEY,
        amount: finalPrice * 100,
        currency: "INR",
        name: "Meadhikari",
        description: `${
          plan.plan.charAt(0).toUpperCase() + plan.plan.slice(1)
        } Plan`,
        image:
          "https://res.cloudinary.com/sdchavan/image/upload/v1743161076/fj7e0wrrgygdpwalbptw.png",
        handler: async function (response) {
          try {
            const paymentData = {
              newPlanId: plan._id,
              purchasePaymentId: response.razorpay_payment_id,
              couponCode: couponCode,
            };

            const updateResponse = await axios.put(
              `${BASE_URL}/update-subscription/${user._id}`,
              paymentData
            );

            if (updateResponse.status === 200) {
              setIsPurchased(true);
              await updateUserDetails();
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
          contact: user.mobileNumber,
        },
        theme: {
          color: "#055AAB",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } else {
      setError("Razorpay is not loaded. Please try again later.");
    }
  };

  const handleStartTest = async (questionsData, cardIndex) => {
    setQuestions(questionsData);
    router.push(`/test`);
    setLoadingCard(null);
  };

  const activePlanName = plans.find(
    (plan) => plan._id === subscriptionPlanID
  )?.plan;

  const activeCoupons = availableCoupons.filter(
    (coupon) => new Date(coupon.expiryDate) > new Date()
  );

  return (
    <section className="bg-gradient-to-b from-[#F5F9FF] to-[#E6F0FF] py-12 md:py-20 px-4 sm:px-6 relative">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(255, 215, 0, 0.4),
                0 0 40px rgba(255, 215, 0, 0.2),
                0 0 60px rgba(255, 215, 0, 0.1);
            }
            50% {
              box-shadow: 0 0 30px rgba(255, 215, 0, 0.6),
                0 0 60px rgba(255, 215, 0, 0.3),
                0 0 90px rgba(255, 215, 0, 0.15);
            }
          }
        `
      }} />
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={2000} // Reduced for better mobile performance
          gravity={0.1} // Slower fall for better visibility
          run={showConfetti}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 9999,
          }}
        />
      )}
      <PaymentMethodsOnlyLogos />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 mt-4 sm:mt-5 px-4">
        <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[linear-gradient(92.91deg,rgba(27,169,188,0.15)_-0.48%,rgba(41,102,193,0.15)_98.9%)]">
          <span className="text-xs sm:text-sm font-semibold bg-clip-text text-transparent bg-[linear-gradient(92.91deg,#1BA9BC_-0.48%,#2966C1_98.9%)]">
            PRICING PLANS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-[linear-gradient(107.12deg,#055AAB_4.81%,#BFE0FF_96.97%)] px-4">
          Choose Your Plan
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#4A6FA9] max-w-3xl mx-auto px-4">
          Select the perfect plan to unlock all features and prepare with
          Meadhikari
        </p>
      </div>

      {/* Active Subscription */}
      {isSubscriptionActive && (
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(5,90,171,0.1)] border border-[#E6EFF9]">
            <div className="text-center">
              <div className="inline-block px-4 py-2 rounded-full bg-[linear-gradient(92.91deg,rgba(27,169,188,0.15)_-0.48%,rgba(41,102,193,0.15)_98.9%)] mb-6">
                <span className="text-sm font-semibold bg-clip-text text-transparent bg-[linear-gradient(92.91deg,#1BA9BC_-0.48%,#2966C1_98.9%)]">
                  ACTIVE PLAN
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#055AAB] mb-3 sm:mb-4">
                {activePlanName?.charAt(0).toUpperCase() +
                  activePlanName?.slice(1) || "Your Plan"}
              </h3>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base md:text-lg text-[#4A6FA9]">
                <p>
                  <span className="font-medium">Start:</span>{" "}
                  {new Date(subscriptionStartDate).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-medium">Expires:</span>{" "}
                  {new Date(subscriptionExpiryDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quiz Cards & No Plan Section */}
      {!isSubscriptionActive && (
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-stretch gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
            {/* Left Quiz Cards */}
            <div className="w-full md:w-1/5 flex flex-col gap-4">
              {quizzesFirst.map((quiz, qIndex) => (
                <QuizCard
                  key={qIndex}
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
                    handleStartTest(quiz.paper?.questions, qIndex)
                  }
                />
              ))}
            </div>

            {/* No Plan Center */}
            <div className="w-full md:w-3/5 bg-gradient-to-r from-[#055AAB] to-[#1BA9BC] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                No Active Plan
              </h3>
              <p className="text-white/90 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                Select a plan below to unlock full access to all test series and
                premium features
              </p>
              <div className="flex items-center animate-bounce">
                <span className="mr-2">👇</span>
              </div>
            </div>

            {/* Right Quiz Cards */}
            <div className="w-full md:w-1/5 flex flex-col gap-4">
              {quizzesSecound.map((quiz, qIndex) => (
                <QuizCard
                  key={qIndex}
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
                    handleStartTest(quiz.paper?.questions, qIndex)
                  }
                />
              ))}
            </div>
          </div>

          {/* <PaymentMethodsOnlyLogos /> */}

          {/* Coupon Section */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16 px-4">
            {/* Coupon Input Section */}
            <div
              className={`w-full lg:w-1/2 bg-white p-4 sm:p-6 rounded-xl shadow-md border-2 transition-all duration-300 relative ${
                discountDetails
                  ? "border-[#FFD700] bg-gradient-to-br from-white to-[#FFF9E6] shadow-lg"
                  : "border-[#E6EFF9]"
              }`}
            >
              {discountDetails && (
                <div className="absolute -top-2 -right-2 z-10">
                  <button
                    onClick={removeCoupon}
                    className="bg-red-500 text-white rounded-full p-2 shadow-lg hover:bg-red-600 transition-all transform hover:scale-110 active:scale-95"
                    title="Remove coupon"
                  >
                    <FaTimes className="text-sm" />
                  </button>
                </div>
              )}
              <div className="flex items-center mb-3 sm:mb-4">
                <div
                  className={`p-2 rounded-lg mr-2 ${
                    discountDetails
                      ? "bg-gradient-to-r from-[#FFD700] to-[#FFA500]"
                      : "bg-[#1BA9BC]"
                  }`}
                >
                  <FaTags
                    className={`text-lg sm:text-xl ${
                      discountDetails ? "text-[#055AAB]" : "text-white"
                    }`}
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#055AAB]">
                  Apply Coupon Code
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={handleCouponChange}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      applyCoupon();
                    }
                  }}
                  className={`flex-1 border-2 p-2 sm:p-3 rounded-lg focus:ring-2 text-sm sm:text-base transition-all ${
                    discountDetails
                      ? "border-[#FFD700] focus:border-[#FFA500] focus:ring-[#FFD700]/20"
                      : "border-[#E6EFF9] focus:border-[#1BA9BC] focus:ring-[#1BA9BC]/20"
                  }`}
                  placeholder="Enter coupon code"
                />
                <button
                  onClick={() => applyCoupon()}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95 text-sm sm:text-base whitespace-nowrap ${
                    discountDetails
                      ? "bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#055AAB] hover:from-[#FFA500] hover:to-[#FF8C00] shadow-md"
                      : "bg-gradient-to-r from-[#055AAB] to-[#1BA9BC] text-white hover:opacity-90"
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4"
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
                      Applying...
                    </span>
                  ) : (
                    "Apply"
                  )}
                </button>
              </div>
              {discountDetails && (
                <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-200 shadow-md">
                  <p className="text-green-700 font-bold flex items-center gap-2 text-base">
                    <FaCheckCircle className="text-green-600 text-lg" />
                    <span>
                      {discountDetails.discountPercentage}% discount applied!
                    </span>
                  </p>
                  <p className="text-sm text-green-600 mt-1 ml-7">
                    Check the highlighted plan below for your discounted price
                  </p>
                </div>
              )}
              {error && (
                <div className="mt-2 p-3 bg-red-50 rounded-lg border-2 border-red-200">
                  <p className="text-red-600 font-medium flex items-center gap-2">
                    <FaTimes className="text-red-500" />
                    {error}
                  </p>
                </div>
              )}
            </div>

            {/* Available Coupons Section */}
            <div className="w-full lg:w-1/2 bg-white p-4 sm:p-6 rounded-xl shadow-md border border-[#E6EFF9]">
              <div className="flex items-center mb-3 sm:mb-4">
                <FaTags className="text-[#1BA9BC] mr-2 text-lg sm:text-xl" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#055AAB]">
                  Active Coupons
                </h3>
              </div>

              {activeCoupons.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeCoupons.map((coupon, index) => (
                    <div
                      key={index}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        couponCode === coupon.code
                          ? "border-[#1BA9BC] bg-[#F5F9FF]"
                          : "border-[#E6EFF9] hover:bg-[#F5F9FF]"
                      }`}
                      onClick={() => applyCouponFromList(coupon)}
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-[#055AAB] break-all">
                          {coupon.code}
                        </span>
                        <span className="bg-[#1BA9BC] text-white text-xs px-2 py-1 rounded whitespace-nowrap ml-2">
                          {coupon.discountPercentage}% OFF
                        </span>
                      </div>
                      <p className="text-sm text-[#4A6FA9] mt-1 truncate">
                        Valid on {coupon.associatedPlanName || "selected plans"}
                      </p>
                      {coupon.maxDiscountAmount && (
                        <p className="text-xs text-[#4A6FA9]">
                          Max discount: ₹{coupon.maxDiscountAmount}
                        </p>
                      )}
                      <p className="text-xs text-[#4A6FA9] mt-1">
                        Valid till:{" "}
                        {new Date(coupon.expiryDate).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="text-[#4A6FA9]">No active coupons available</p>
                  <p className="text-sm text-[#4A6FA9] mt-1">
                    Check back later for special offers
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Pricing Plans Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 mb-8 sm:mb-12 md:mb-16">
        {plans
          .filter((plan) => plan.plan.toLowerCase() !== "free")
          .map((plan, index) => {
            const finalPrice = plan.discountedPrice || plan.price;
            const originalPrice = plan.price;
            const hasDiscount = plan.discountedPrice !== undefined;
            const isHighlighted = discountDetails?.associatedPlan === plan._id;

            return (
              <div
                key={index}
                ref={isHighlighted ? highlightedCardRef : null}
                className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-500 hover:shadow-xl ${
                  isHighlighted
                    ? "border-[#FFD700] shadow-2xl scale-[1.03] bg-gradient-to-br from-white to-[#FFF9E6] ring-4 ring-[#FFD700]/30 animate-pulse-border"
                    : plan.popular
                    ? "border-[#1BA9BC] shadow-lg scale-[1.02]"
                    : "border-[#E6EFF9] hover:border-[#BFE0FF]"
                }`}
                style={
                  isHighlighted
                    ? {
                        animation: "pulse-glow 2s ease-in-out infinite",
                      }
                    : {}
                }
              >
                {/* Highlighted Badge */}
                {isHighlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] text-[#055AAB] text-xs font-bold px-4 py-2 text-center z-10 flex items-center justify-center gap-2">
                    <HiSparkles className="animate-spin" />
                    <span>COUPON APPLIED</span>
                    <HiSparkles className="animate-spin" />
                  </div>
                )}

                {plan.popular && !isHighlighted && (
                  <div className="absolute top-0 right-0 bg-[#1BA9BC] text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                    POPULAR
                  </div>
                )}

                <div className={`p-6 ${isHighlighted ? "pt-16" : ""}`}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-[#055AAB]">
                      {plan.plan.charAt(0).toUpperCase() + plan.plan.slice(1)}
                    </h3>
                    {hasDiscount && (
                      <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#055AAB] text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                        <HiSparkles className="text-[10px]" />
                        SAVE{" "}
                        {Math.round(100 - (finalPrice / originalPrice) * 100)}%
                      </span>
                    )}
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <p className="text-4xl font-extrabold text-[#055AAB] mb-1">
                        ₹{finalPrice}
                      </p>
                      {hasDiscount && (
                        <span className="text-lg text-gray-400 line-through">
                          ₹{originalPrice}
                        </span>
                      )}
                    </div>
                    {hasDiscount && (
                      <div className="mt-2 p-2 bg-green-50 rounded-lg border border-green-200">
                        <p className="text-xs text-green-700 font-semibold flex items-center gap-1">
                          <FaCheckCircle className="text-green-600" />
                          You save ₹{originalPrice - finalPrice}!
                        </p>
                      </div>
                    )}
                    <p className="text-[#4A6FA9] mt-2">
                      {plan.durationInDays || "Lifetime"} Days
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {(plan.features || []).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheckCircle
                          className={`mt-1 mr-2 flex-shrink-0 ${
                            isHighlighted
                              ? "text-[#FFA500]"
                              : "text-[#1BA9BC]"
                          }`}
                        />
                        <span className="text-[#4A6FA9]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleChoosePlan(plan)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      isHighlighted
                        ? "bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#055AAB] hover:from-[#FFA500] hover:to-[#FF8C00] shadow-lg"
                        : plan.popular
                        ? "bg-gradient-to-r from-[#055AAB] to-[#1BA9BC] text-white hover:opacity-90"
                        : "bg-white text-[#055AAB] border-2 border-[#055AAB] hover:bg-[#F0F7FF]"
                    }`}
                    disabled={isSubscriptionActive}
                  >
                    {isSubscriptionActive ? (
                      <span className="flex items-center justify-center">
                        <FaLock className="mr-2" /> Subscribed
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        {isHighlighted && <HiSparkles />}
                        Choose Plan
                        {isHighlighted && <HiSparkles />}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
      </div>

      <PaymentMethods />

      <ConversionStripFirst />
      {/* <LoginPopup
        isOpen={isLoginOpen}
        closePopup={() => setIsLoginOpen(false)}
      /> */}
    </section>
  );
};

export default PricePage;
