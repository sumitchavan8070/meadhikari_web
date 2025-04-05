// "use client";

// import { createContext, useState, useContext, useEffect, useRef } from "react";
// import LoginPopup from "@/components/LoginPopup";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
//   const intervalRef = useRef(null);

//   // Initialize user from localStorage
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   // Auto-show popup logic
//   useEffect(() => {
//     if (user || isLoginPopupOpen) {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//         intervalRef.current = null;
//       }
//       return;
//     }

//     intervalRef.current = setInterval(() => {
//       safeSetLoginPopupOpen(true);
//     }, 10000);

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, [user, isLoginPopupOpen]);

//   const safeSetLoginPopupOpen = (value) => {
//     // Prevent opening if already open, or closing if already closed
//     if (value === isLoginPopupOpen) return;
//     setIsLoginPopupOpen(value);
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         setUser,
//         logout,
//         isLoginPopupOpen,
//         setLoginPopupIsOpen: safeSetLoginPopupOpen,
//         openLoginPopup: () => safeSetLoginPopupOpen(true),
//         closeLoginPopup: () => safeSetLoginPopupOpen(false),
//       }}
//     >
//       {children}
//       {isLoginPopupOpen && <LoginPopup />}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
"use client";

import { createContext, useState, useContext, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import LoginPopup from "@/components/LoginPopup";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const intervalRef = useRef(null);

  // Check if current route is /test
  const isTestRoute = pathname?.startsWith("/test");

  // Initialize user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Auto-show popup logic
  useEffect(() => {
    // Skip popup logic if on test route or user is logged in
    if (isTestRoute || user || isLoginPopupOpen) {
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
  }, [user, isLoginPopupOpen, isTestRoute]);

  const safeSetLoginPopupOpen = (value) => {
    // Prevent opening if on test route or no state change needed
    if (isTestRoute || value === isLoginPopupOpen) return;
    setIsLoginPopupOpen(value);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  const openLoginPopup = () => {
    if (!isTestRoute) {
      safeSetLoginPopupOpen(true);
      // Clear any existing interval when manually opened
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const closeLoginPopup = () => {
    safeSetLoginPopupOpen(false);
    // Reset the interval when closed (if not on test route)
    if (!user && !isTestRoute) {
      intervalRef.current = setInterval(() => {
        safeSetLoginPopupOpen(true);
      }, 10000);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
        isLoginPopupOpen,
        setLoginPopupIsOpen: safeSetLoginPopupOpen,
        openLoginPopup,
        closeLoginPopup,
      }}
    >
      {children}
      {isLoginPopupOpen && !isTestRoute && <LoginPopup />}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
