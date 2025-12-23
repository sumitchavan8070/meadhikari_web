"use client";

import {
  FaClipboardCheck,
  FaBook,
  FaChartBar,
  FaClock,
  FaGraduationCap,
  FaShieldAlt,
} from "react-icons/fa";

const HomePageFeatures = () => {
  const features = [
    {
      icon: <FaClipboardCheck className="w-12 h-12" />,
      title: "Previous Year Papers",
      description: "Access 2000+ authentic previous year question papers with AI-powered detailed solutions",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <FaBook className="w-12 h-12" />,
      title: "Mock Test Series",
      description: "Practice with unlimited mock tests designed by exam experts with instant AI feedback",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <FaChartBar className="w-12 h-12" />,
      title: "Performance Analytics",
      description: "Track your progress with detailed analytics and performance reports",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <FaClock className="w-12 h-12" />,
      title: "Time Management",
      description: "Practice time-bound tests to improve your speed and accuracy",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: <FaGraduationCap className="w-12 h-12" />,
      title: "Expert Guidance",
      description: "Get insights from experienced mentors and subject matter experts",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      icon: <FaShieldAlt className="w-12 h-12" />,
      title: "100% Authentic",
      description: "All content is verified and aligned with official exam patterns",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-64 h-64 sm:w-72 sm:h-72 bg-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold mb-4 shadow-sm">
            <span>✨</span>
            <span>Why Choose Meadhikari</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 px-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#055AAB] via-[#1BA9BC] to-[#2966C1]">
              Everything You Need to Succeed
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            Comprehensive exam preparation tools designed to help you achieve your goals and excel in your exams
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 border border-gray-100 hover:border-[#055AAB]/20 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#055AAB]/0 via-[#1BA9BC]/0 to-[#2966C1]/0 group-hover:from-[#055AAB]/10 group-hover:via-[#1BA9BC]/10 group-hover:to-[#2966C1]/10 transition-all duration-500 -z-0"></div>
              
              {/* Content wrapper */}
              <div className="relative z-10">
                {/* Enhanced Icon with glow */}
                <div className={`relative inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl`}>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative z-10">{feature.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-800 mb-3 group-hover:text-[#055AAB] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>

              {/* Enhanced Decorative Element */}
              <div className={`absolute top-0 right-0 w-40 h-40 ${feature.bgColor} rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10`}></div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageFeatures;

