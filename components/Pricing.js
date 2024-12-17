import React from "react";

// Pricing data stored separately without button and color properties
const plansData = [
  {
    name: "Basic Plan",
    description: "Perfect for individuals starting out.",
    price: "$19.99",
    features: [
      "Access to all practice papers",
      "Performance tracking",
      "Email support",
    ],
  },
  {
    name: "Standard Plan",
    description: "For small teams or serious learners",
    price: "$49.99",
    features: [
      "Everything in Basic Plan",
      "Monthly progress reports",
      "Priority support",
      "Exclusive study material",
    ],
    isPopular: true, // Marked as popular plan
  },
  {
    name: "Premium Plan",
    description: "For advanced learners or enterprises",
    price: "$99.99",
    features: [
      "Everything in Standard Plan",
      "Dedicated mentor support",
      "One-on-one sessions",
      "Exclusive access to webinars",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="lg:max-w-7xl max-w-lg mx-auto px-6 py-8 bg-white">
      <h2 className="text-gray-800 text-4xl font-extrabold text-center mb-8">
        Choose Your <span className="text-blue-600">Meadhikari</span> Plan
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plansData.map((plan, index) => (
          <div
            key={index}
            className={`py-8 px-6 border-2 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl ${
              plan.isPopular
                ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="mt-2">{plan.description}</p>
            <div className="mt-4">
              <p className="text-3xl font-bold">{plan.price}</p>
              <p className="text-sm">per month</p>
            </div>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <button
              className={`mt-6 py-3 px-6 rounded-lg w-full transition duration-300 ${
                plan.isPopular
                  ? "bg-white text-blue-600 hover:bg-blue-100"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
