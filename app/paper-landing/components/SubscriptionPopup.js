// SubscriptionPopup.jsx
import React, { useEffect, useState } from "react";

const SubscriptionPopup = ({ onClose, onRedirect, countdownTime = 5 }) => {
  const [timer, setTimer] = useState(countdownTime);

  useEffect(() => {
    if (timer === 0) {
      onRedirect(); // Redirect to the subscription page when the timer reaches 0
    } else {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, onRedirect]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        {/* <h2 className="text-xl font-bold text-gray-800">
          Active Subscription Required
        </h2> */}
        <p className="mt-4 text-gray-600">
          You need an active subscription to start this test.
        </p>
        <div className="mt-4 text-lg font-semibold text-gray-800">
          Redirecting to subscription page in {timer} seconds...
        </div>
        {/* <div className="mt-6">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Close
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default SubscriptionPopup;
