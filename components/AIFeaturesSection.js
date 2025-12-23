"use client";

import { FaRobot, FaLightbulb, FaFileAlt, FaCrown } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import Link from "next/link";

const AIFeaturesSection = () => {
  const aiFeatures = [
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "AI-Powered Question Explanations",
      description: "Get instant, detailed explanations for every question. Understand concepts better with AI-generated step-by-step solutions.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: <FaFileAlt className="w-8 h-8" />,
      title: "Smart Summary Generation",
      description: "Generate comprehensive summaries of your test performance, weak areas, and improvement suggestions powered by AI.",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "Personalized Learning Path",
      description: "AI analyzes your performance and creates a customized study plan tailored to your strengths and weaknesses.",
      gradient: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#055AAB] via-[#1BA9BC] to-[#2966C1] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-white/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4 border border-white/30">
            <HiSparkles className="animate-spin" style={{ animationDuration: '3s' }} />
            <span>AI-Powered Features</span>
            <FaCrown className="text-yellow-300" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-white px-4">
            Study Smarter with
            <span className="block bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent mt-2">
              AI-Powered Learning
            </span>
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            Exclusive AI features available in Pro Plans to accelerate your exam preparation
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {aiFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-white/20 hover:bg-white/25 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 hover:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.25)] overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              {/* Icon */}
              <div className={`relative inline-flex p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-4 sm:mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl`}>
                <div className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative z-10">{feature.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white mb-2 sm:mb-3 group-hover:text-yellow-200 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-white/85 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>

              {/* Enhanced Decorative glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 rounded-full blur-3xl transition-opacity duration-500`}></div>
              <div className={`absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Pro Plan CTA */}
        <div className="text-center px-4">
          <div className="relative inline-block bg-white/15 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-white/30 hover:border-white/50 max-w-2xl transition-all duration-500 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.3)] overflow-hidden w-full sm:w-auto">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/10 to-orange-300/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4">
              <div className="p-2 bg-yellow-300/20 rounded-full">
                <FaCrown className="text-yellow-300 text-2xl sm:text-3xl animate-pulse" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white text-center sm:text-left">
                Available in Pro Plans Only
              </h3>
            </div>
            <p className="text-white/90 mb-4 sm:mb-6 text-base sm:text-lg md:text-xl leading-relaxed">
              Unlock AI-powered features and accelerate your exam preparation with our Pro subscription plans
            </p>
            <Link
              href="/pricing"
              className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-3 sm:py-4 bg-white text-[#055AAB] font-bold text-base sm:text-lg rounded-xl hover:bg-gradient-to-r hover:from-yellow-100 hover:to-yellow-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-200/50 overflow-hidden w-full sm:w-auto"
            >
                <span className="relative z-10">View Pro Plans</span>
                <HiSparkles className="relative z-10 group-hover:rotate-180 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeaturesSection;

