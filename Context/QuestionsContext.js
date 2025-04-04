// "use client";

// import React, { createContext, useState, useContext } from "react";

// const QuestionsContext = createContext();

// export const QuestionsProvider = ({ children }) => {
//   const [questions, setQuestions] = useState([]);

//   return (
//     <QuestionsContext.Provider value={{ questions, setQuestions }}>
//       {children}
//     </QuestionsContext.Provider>
//   );
// };

// export const useQuestions = () => useContext(QuestionsContext);
"use client";
import React, { createContext, useState, useContext } from "react";

const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [state, setState] = useState({
    questions: [],
    paperMeta: {
      name: "",
      logo: null,
      year: "", // Additional metadata
      category: "", // e.g., "UPSC", "NEET"
    },
    isLoading: false,
    error: null,
  });

  const updatePaperMeta = (meta) => {
    setState((prev) => ({
      ...prev,
      paperMeta: { ...prev.paperMeta, ...meta },
    }));
  };

  return (
    <QuestionsContext.Provider
      value={{
        ...state,
        setQuestions: (questions) =>
          setState((prev) => ({ ...prev, questions })),
        updatePaperMeta, // Dedicated function for metadata
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export const useQuestions = () => useContext(QuestionsContext);
