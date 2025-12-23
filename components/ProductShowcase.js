"use client";

import { FaFileAlt, FaClipboardCheck, FaRocket, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const ProductShowcase = () => {
  const products = [
    {
      icon: <FaFileAlt className="w-10 h-10" />,
      title: "Previous Year Papers",
      description: "Access 2000+ authentic previous year question papers with detailed solutions and explanations",
      features: [
        "2000+ Previous Year Papers",
        "Detailed Solutions & Explanations",
        "Year-wise & Category-wise Access",
        "PDF Download Available"
      ],
      cta: "Explore Papers",
      href: "/previous-year-paper",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      image: "/icon/previous-year-papers.png",
    },
    {
      icon: <FaClipboardCheck className="w-10 h-10" />,
      title: "Mock Test Series",
      description: "Practice with comprehensive mock tests designed by exam experts to simulate real exam conditions",
      features: [
        "Unlimited Mock Tests",
        "Real Exam Pattern",
        "Instant Results & Analytics",
        "Performance Tracking"
      ],
      cta: "Start Mock Test",
      href: "/previous-year-paper",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      image: "/icon/exams-covered.png",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-4 shadow-sm">
            <FaRocket />
            <span>Our Premium Products</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#055AAB] via-[#1BA9BC] to-[#2966C1]">
              Master Your Exams with Our Products
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-2 px-4">
            Comprehensive exam preparation tools designed to help you achieve success
          </p>
          <p className="text-[#055AAB] font-semibold text-sm sm:text-base md:text-lg px-4">
            🎯 Start with Free Tests, Upgrade to Pro for AI Features & Unlimited Access
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 overflow-hidden border-2 border-gray-100 hover:border-[#055AAB]/30"
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              <div className="relative z-10 p-6 sm:p-8 md:p-10">
                {/* Icon and Title */}
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                  <div className={`relative p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br ${product.gradient} text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <div className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative z-10">{product.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800 mb-2 group-hover:text-[#055AAB] transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 sm:gap-3 group/feature">
                      <div className={`p-1.5 rounded-lg bg-gradient-to-br ${product.gradient} opacity-20 group-hover/feature:opacity-100 transition-opacity duration-300`}>
                        <FaCheckCircle className={`text-sm sm:text-lg flex-shrink-0 text-white`} />
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base font-semibold group-hover/feature:text-[#055AAB] transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={product.href}
                  className={`group/btn relative inline-flex items-center justify-center gap-2 w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl bg-gradient-to-r ${product.gradient} text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden`}
                >
                  <span className="relative z-10">{product.cta}</span>
                  <FaRocket className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                </Link>
              </div>

              {/* Enhanced Decorative corner element */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500 blur-2xl`}></div>
              <div className={`absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

