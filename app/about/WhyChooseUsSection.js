const whyChooseUs = {
  title: "Why Learners Choose Us",
  description:
    "Trusted by thousands of students for comprehensive exam preparation resources and expert guidance.",
  benefits: [
    {
      title: "Curated Study Materials",
      description:
        "All previous year papers with model solutions and detailed explanations.",
      icon: "📚",
    },
    {
      title: "Expert Educators",
      description:
        "Learn from faculty with 10+ years of exam preparation experience.",
      icon: "👨‍🏫",
    },
    {
      title: "Quick Doubt Resolution",
      description:
        "Get your questions answered within 24 hours by our expert team.",
      icon: "⏱️",
    },
    {
      title: "Proven Track Record",
      description:
        "85% of our students achieve their target scores in competitive exams.",
      icon: "📈",
    },
  ],
};

const WhyChooseUsSection = () => (
  <div className="relative bg-white py-24 px-6 overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute -right-20 top-1/3 w-96 h-96 rounded-full bg-blue-50 blur-[100px] z-0"></div>
    <div className="absolute -left-20 bottom-1/4 w-80 h-80 rounded-full bg-cyan-50 blur-[80px] z-0"></div>

    <div className="max-w-7xl mx-auto relative z-10">
      {/* Header with perfect alignment */}
      <div className="text-center mb-20 px-4">
        <div className="inline-flex items-center justify-center mb-6 py-2 px-5 rounded-full bg-blue-50 border border-blue-100">
          <span className="text-sm font-medium text-blue-600 tracking-wider">
            OUR ADVANTAGES
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
          {whyChooseUs.title}
        </h2>
        <div className="mx-auto max-w-2xl">
          <p className="text-xl text-gray-600 leading-relaxed">
            {whyChooseUs.description}
          </p>
        </div>
      </div>

      {/* Benefits Grid - Professionally aligned */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {whyChooseUs.benefits.map((benefit, index) => (
          <div
            key={index}
            className="group flex flex-col h-full p-8 bg-white rounded-xl border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:shadow-sm"
          >
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-4">{benefit.icon}</span>
              <span className="text-sm font-medium text-blue-600 py-1 px-3 rounded-full bg-blue-50">
                0{index + 1}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">
              {benefit.title}
            </h3>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
              {benefit.description}
            </p>

            <div className="mt-auto">
              <a
                href="/previous-year-paper"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group-hover:underline"
              >
                View Resources
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Centered CTA at bottom */}
      <div className="text-center mt-20">
        <a
          href="/previous-year-paper"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors duration-200"
        >
          Explore All Study Materials
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export default WhyChooseUsSection;
