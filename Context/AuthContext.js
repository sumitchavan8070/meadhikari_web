// "use client";

// // import { createContext, useState, useContext, useEffect } from "react";
// // import axios from "axios";
// // import { BASE_URL } from "@/utils/globalStrings";

// // // Create the Auth Context
// // const AuthContext = createContext();

// // // AuthProvider Component
// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   // Check for token and user data on initial load
// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     const storedUser = localStorage.getItem("user");

// //     if (token && storedUser) {
// //       setUser(JSON.parse(storedUser)); // Parse user data stored in localStorage
// //     }
// //   }, []);

// //   // Login function
// //   const login = async (email, password) => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const response = await axios.post(`${BASE_URL}/login`, {
// //         email,
// //         password,
// //       });
// //       // Save token and user to localStorage (or sessionStorage)
// //       localStorage.setItem("token", response.data.token);
// //       localStorage.setItem("user", JSON.stringify(response.data.user)); // Save user data
// //       setUser(response.data.user);
// //       setLoading(false);
// //     } catch (err) {
// //       setError(err.response?.data?.message || "Something went wrong");
// //       setLoading(false);
// //     }
// //   };

// //   // Register function with automatic login
// //   const register = async (name, username, email, password) => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const response = await axios.post(`${BASE_URL}/register`, {
// //         name,
// //         username,
// //         email,
// //         password,
// //       });
// //       // After successful registration, automatically log the user in
// //       login(email, password); // Log in with the email and password provided
// //       setLoading(false);
// //     } catch (err) {
// //       setError(err.response?.data?.message || "Something went wrong");
// //       setLoading(false);
// //     }
// //   };

// //   // Logout function
// //   const logout = () => {
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("user"); // Remove user data from localStorage
// //     setUser(null);
// //   };

// //   return (
// //     <AuthContext.Provider
// //       value={{ user, login, register, logout, loading, error }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // // Custom hook to use the AuthContext
// // export const useAuth = () => useContext(AuthContext);

// // AuthContext.js
// import { createContext, useState, useContext, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, setUser, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
"use client";

import { createContext, useState, useContext, useEffect, useRef } from "react";
import LoginPopup from "@/components/LoginPopup";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const intervalRef = useRef(null);

  // Initialize user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Auto-show popup logic
  useEffect(() => {
    if (user || isLoginPopupOpen) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      safeSetLoginPopupOpen(true);
    }, 10000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [user, isLoginPopupOpen]);

  const safeSetLoginPopupOpen = (value) => {
    // Prevent opening if already open, or closing if already closed
    if (value === isLoginPopupOpen) return;
    setIsLoginPopupOpen(value);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
        isLoginPopupOpen,
        setLoginPopupIsOpen: safeSetLoginPopupOpen,
        openLoginPopup: () => safeSetLoginPopupOpen(true),
        closeLoginPopup: () => safeSetLoginPopupOpen(false),
      }}
    >
      {children}
      {isLoginPopupOpen && <LoginPopup />}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
