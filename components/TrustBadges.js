"use client";

import { FaUsers, FaAward, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

const TrustBadges = () => {
  const badges = [
    {
      icon: <FaUsers className="w-8 h-8" />,
      number: "50,000+",
      label: "Active Students",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      number: "95%",
      label: "Success Rate",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <FaCheckCircle className="w-8 h-8" />,
      number: "2000+",
      label: "Previous Papers",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      number: "75+",
      label: "Exam Categories",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-r from-[#055AAB] via-[#1BA9BC] to-[#2966C1] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="text-center group transform hover:scale-105 transition-all duration-300"
            >
              <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${badge.color} text-white mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl`}>
                {badge.icon}
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors duration-300">
                {badge.number}
              </div>
              <div className="text-white/90 text-sm md:text-base font-semibold">
                {badge.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;

