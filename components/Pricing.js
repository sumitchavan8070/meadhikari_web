import React from "react";

const Pricing = () => {
  return (
    <div className="pl-10 font-[sans-serif] mt-4 mb-40">
      <div className="max-w-[80%] mx-auto">
        <h2 className="text-gray-800 text-4xl font-extrabold text-center mb-8">
          Choose Your <span className="text-blue-600">Meadhikari</span> Plan
        </h2>
        <div className="grid lg:grid-cols-3 gap-6 max-lg:max-w-2xl mt-8">
          {/* Basic Plan */}
          <div className="py-8 px-6 bg-white border-2 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold text-gray-800">Basic Plan</h3>
            <p className="mt-2 text-gray-600">
              Perfect for individuals starting out.
            </p>
            <div className="mt-4">
              <p className="text-3xl font-bold text-blue-600">$19.99</p>
              <p className="text-sm text-gray-500">per month</p>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Access to all practice papers</li>
              <li>Performance tracking</li>
              <li>Email support</li>
            </ul>
            <button className="mt-6 py-3 px-6 bg-blue-600 text-white rounded-full w-full hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>

          {/* Standard Plan */}
          <div className="py-8 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-2 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold">Standard Plan</h3>
            <p className="mt-2">For small teams or serious learners</p>
            <div className="mt-4">
              <p className="text-3xl font-bold">$49.99</p>
              <p className="text-sm">per month</p>
            </div>
            <ul className="mt-4 space-y-2">
              <li>Everything in Basic Plan</li>
              <li>Monthly progress reports</li>
              <li>Priority support</li>
              <li>Exclusive study material</li>
            </ul>
            <button className="mt-6 py-3 px-6 bg-white text-blue-600 rounded-full w-full hover:bg-blue-100 transition duration-300">
              Get Started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="py-8 px-6 bg-white border-2 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="text-xl font-bold text-gray-800">Premium Plan</h3>
            <p className="mt-2 text-gray-600">
              For advanced learners or enterprises
            </p>
            <div className="mt-4">
              <p className="text-3xl font-bold text-blue-600">$99.99</p>
              <p className="text-sm text-gray-500">per month</p>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Everything in Standard Plan</li>
              <li>Dedicated mentor support</li>
              <li>One-on-one sessions</li>
              <li>Exclusive access to webinars</li>
            </ul>
            <button className="mt-6 py-3 px-6 bg-blue-600 text-white rounded-full w-full hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
