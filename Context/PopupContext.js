// Context/PopupContext.js
"use client";

import { createContext, useState, useContext } from "react";
import { useAuth } from "./AuthContext";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const { user } = useAuth();
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const openLoginPopup = () => {
    if (!user) {
      setIsLoginPopupOpen(true);
    }
  };

  const closeLoginPopup = () => {
    setIsLoginPopupOpen(false);
  };

  return (
    <PopupContext.Provider
      value={{
        isLoginPopupOpen,
        openLoginPopup,
        closeLoginPopup,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);
