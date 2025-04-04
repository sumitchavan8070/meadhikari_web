"use client"; // Mark this as a client-side

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

    // Set up the interval to show the popup every 60 seconds
    intervalRef.current = setInterval(() => {
      setShowLoginPopup(true); // Open the popup
    }, 90000); // 60 seconds

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
