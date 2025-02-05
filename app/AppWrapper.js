// "use client"; // Mark this as a client-side component

// import React, { useEffect, useState } from "react";
// import LoginPopup from "@/components/LoginPopup"; // Adjust the path to your LoginPopup component
// import { useAuth } from "@/Context/AuthContext"; // Import useAuth hook

// const AppWrapper = ({ children }) => {
//   const { user } = useAuth(); // Get the user from the AuthContext
//   const [showLoginPopup, setShowLoginPopup] = useState(false);

//   useEffect(() => {
//     let interval;

//     // If the user is not logged in, show the login popup every 30 seconds
//     if (!user) {
//       interval = setInterval(() => {
//         setShowLoginPopup(true);
//       }, 15000); // 30 seconds
//     }

//     // Cleanup the interval when the component unmounts or the user logs in
//     return () => {
//       if (interval) {
//         clearInterval(interval);
//       }
//     };
//   }, [user]); // Run this effect whenever the user state changes

//   // Close the login popup
//   const closeLoginPopup = () => {
//     setShowLoginPopup(false);
//   };

//   return (
//     <>
//       {/* Render the children (your main application content) */}
//       {children}

//       {/* Render the LoginPopup if showLoginPopup is true */}
//       {showLoginPopup && (
//         <LoginPopup isOpen={true} closePopup={closeLoginPopup} />
//       )}
//     </>
//   );
// };

// export default AppWrapper;

"use client"; // Mark this as a client-side component

import React, { useEffect, useState, useRef } from "react";
import LoginPopup from "@/components/LoginPopup"; // Adjust the path to your LoginPopup component
import { useAuth } from "@/Context/AuthContext"; // Import useAuth hook

const AppWrapper = ({ children }) => {
  const { user } = useAuth(); // Get the user from the AuthContext
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const intervalRef = useRef(null); // Ref to store the interval ID

  useEffect(() => {
    // Clear any existing interval when the component unmounts or user logs in
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // If the user is logged in, do nothing
    if (user) {
      return;
    }

    // If the popup is already open, do nothing
    if (showLoginPopup) {
      return;
    }

    // Set up the interval to show the popup every 15 seconds
    intervalRef.current = setInterval(() => {
      setShowLoginPopup(true); // Open the popup
    }, 30000); // 30 seconds

    // Cleanup the interval when the component unmounts or the user logs in
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [user, showLoginPopup]); // Re-run effect when user or showLoginPopup changes

  // Close the login popup
  const closeLoginPopup = () => {
    setShowLoginPopup(false); // Close the popup
  };

  return (
    <>
      {/* Render the children (your main application content) */}
      {children}

      {/* Render the LoginPopup if showLoginPopup is true */}
      {showLoginPopup && (
        <LoginPopup isOpen={true} closePopup={closeLoginPopup} />
      )}
    </>
  );
};

export default AppWrapper;
