const whyChooseUs = {
  title: "Why Choose Us?",
  description:
    "Our commitment to your success drives us to provide the best study tools and resources for your exam preparation. Our experienced mentors will guide you every step of the way.",
  benefits: [
    {
      title: "Comprehensive Content",
      description: "All exam papers, solutions, and more.",
    },
    {
      title: "Expert Faculty",
      description: "Learn from top educators with years of experience.",
    },
    {
      title: "24/7 Support",
      description: "Get instant help with your questions, anytime.",
    },
    {
      title: "Proven Success",
      description: "Join thousands of successful students.",
    },
  ],
};

const WhyChooseUsSection = () => (
  <div className="font-[sans-serif] bg-gray-800 py-16 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="md:text-5xl text-3xl font-bold md:!leading-[55px] text-white">
        Supercharge Your Exam Prep with Meadhikari
      </h2>
      <p className="mt-6 text-sm leading-relaxed text-gray-300">
        Take your exam preparation to the next level with comprehensive
        resources, expert guidance, and the latest tools to help you succeed.
      </p>
    </div>

    <div className="xl:max-w-7xl max-w-5xl mx-auto mt-12">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6">
        {whyChooseUs.benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-8 bg-gray-300 rounded-lg shadow-xl transition-transform transform hover:scale-105"
          >
            <h3 className="text-gray-800 text-xl font-semibold mb-4">
              {benefit.title}
            </h3>
            <p className="text-sm text-gray-600">{benefit.description}</p>
            <button className="text-sm text-white bg-orange-500 hover:bg-orange-600 px-6 py-3 mt-6 rounded-lg transition duration-300">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default WhyChooseUsSection;
