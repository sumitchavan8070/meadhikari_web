"use client";

import {
  RiQrCodeLine,
  RiSecurePaymentLine,
  RiShieldCheckLine,
} from "react-icons/ri";
import {
  FaCheckCircle,
  FaStar,
  FaBolt,
  FaShieldAlt,
  FaUsers,
  FaClock,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { BiTrendingUp } from "react-icons/bi";
import Image from "next/image";

const PaymentMethodsFirstBanner = () => {
  const methods = [
    {
      id: "google-pay",
      name: "Google Pay",
      logoPath: "/google-pay-logo.png",
      description: "Pay instantly with Google Pay",
      color: "#4285F4",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      id: "phonepe",
      name: "PhonePe",
      logoPath: "/phonepe-logo.png",
      description: "Quick payments via PhonePe",
      color: "#5F259F",
      bgGradient: "from-purple-50 to-purple-100",
    },
    {
      id: "upi",
      name: "UPI",
      logoPath: "/upi-logo.png",
      description: "Scan QR with any UPI app",
      color: "#FF6B35",
      bgGradient: "from-orange-50 to-orange-100",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#F5F9FF] to-[#E6F0FF]  px-4 sm:px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#1BA9BC]/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[#055AAB]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-[#2966C1]/10 rounded-full blur-xl"></div>
      </div> */}

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center mb-6 px-6 py-3 rounded-full bg-[linear-gradient(92.91deg,rgba(27,169,188,0.15)_-0.48%,rgba(41,102,193,0.15)_98.9%)] border border-[#1BA9BC]/20 shadow-lg">
            <HiSparkles className="text-[#1BA9BC] mr-2 text-lg" />
            <span className="text-sm font-semibold bg-clip-text text-transparent bg-[linear-gradient(92.91deg,#1BA9BC_-0.48%,#2966C1_98.9%)]">
              SECURE PAYMENT METHODS
            </span>
            <FaBolt className="text-[#2966C1] ml-2 text-lg" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-clip-text text-transparent bg-[linear-gradient(107.12deg,#055AAB_4.81%,#BFE0FF_96.97%)] leading-tight">
            Lightning Fast Payments
          </h2>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-[#E6EFF9]">
              <FaShieldAlt className="text-[#1BA9BC] text-sm" />
              <span className="text-sm font-medium text-[#055AAB]">
                Bank Grade Security
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-[#E6EFF9]">
              <RiSecurePaymentLine className="text-[#1BA9BC] text-sm" />
              <span className="text-sm font-medium text-[#055AAB]">
                Instant Processing
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-[#E6EFF9]">
              <FaStar className="text-[#1BA9BC] text-sm" />
              <span className="text-sm font-medium text-[#055AAB]">
                Trusted by Millions
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Supported Apps Section */}
        <div className="mt-16">
          {/* Payment Apps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 py-15 md:py-15">
            {methods.map((app, index) => (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#E6EFF9] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5F9FF]/50 to-[#E6F0FF]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="relative flex items-center gap-4">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center border-2 border-[#E6EFF9] group-hover:scale-110 group-hover:border-[#1BA9BC] transition-all duration-300 shadow-lg">
                    <Image
                      src={app.logoPath || "/placeholder.svg"}
                      alt={`${app.name} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling.style.display =
                          "block";
                      }}
                    />
                    <span className="text-[#055AAB] font-bold text-lg hidden">
                      {app.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-[#055AAB] group-hover:text-[#1BA9BC] transition-colors mb-1">
                      {app.name}
                    </h4>
                    <p className="text-sm text-[#4A6FA9] leading-relaxed">
                      {app.description}
                    </p>

                    {/* Features */}
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center gap-1">
                        <FaClock className="text-[#1BA9BC] text-xs" />
                        <span className="text-xs text-[#4A6FA9]">Instant</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaShieldAlt className="text-[#1BA9BC] text-xs" />
                        <span className="text-xs text-[#4A6FA9]">Secure</span>
                      </div>
                    </div>
                  </div>

                  {/* Check Badge */}
                  <div className="w-8 h-8 bg-gradient-to-r from-[#1BA9BC] to-[#055AAB] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaCheckCircle className="text-white text-sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsFirstBanner;
