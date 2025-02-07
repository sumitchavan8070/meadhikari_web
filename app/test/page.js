// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import StatsRow from "./StatsRow";
// import QuestionPanel from "./QuestionPanel";
// import FooterControls from "./FooterControls";
// import EndModal from "./EndModal";
// import CustomPopup from "./CustomPopup";
// import Result from "./Result"; // Import the new Result component
// import { useQuestions } from "@/Context/QuestionsContext";

// const Page = () => {
//   const { questions } = useQuestions();
//   const router = useRouter();

//   useEffect(() => {
//     if (questions.length === 0) {
//       router.push("/");
//     }
//   }, [questions.length, router]);

//   const totalTimeInMinutes = (questions.length / 100) * 60;
//   const totalTimeInSeconds = totalTimeInMinutes * 60;

//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [markedQuestions, setMarkedQuestions] = useState([]);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [timer, setTimer] = useState(totalTimeInSeconds);
//   const [paused, setPaused] = useState(false);
//   const [showEndModal, setShowEndModal] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [showCustomPopup, setShowCustomPopup] = useState(false);
//   const [results, setResults] = useState(null);

//   useEffect(() => {
//     if (!paused && timer > 0) {
//       const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
//       return () => clearInterval(interval);
//     } else if (timer === 0) {
//       handleSubmitTest();
//     }
//   }, [paused, timer]);

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes.toString().padStart(2, "0")}:${seconds
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   const calculateResults = () => {
//     const totalQuestions = questions.length;

//     const correctAnswers = Object.keys(selectedAnswers).filter((key) => {
//       const questionIndex = parseInt(key, 10) - 1;
//       const selectedOption = `option${selectedAnswers[key]}`;

//       return questions[questionIndex + 1]?.answer === selectedOption;
//     }).length;

//     const wrongAnswers = Object.keys(selectedAnswers).length - correctAnswers;
//     const unattempted = totalQuestions - Object.keys(selectedAnswers).length;
//     const markedForReview = markedQuestions.length;

//     const totalMarks = correctAnswers * 4 - wrongAnswers * 1;

//     return {
//       totalQuestions,
//       correctAnswers,
//       wrongAnswers,
//       unattempted,
//       markedForReview,
//       totalMarks,
//       timeTaken: totalTimeInSeconds - timer,
//     };
//   };

//   const handleSubmitTest = () => {
//     const resultData = calculateResults();
//     setResults(resultData);
//   };

//   return (
//     <div
//       className={`h-screen flex flex-col overflow-hidden ${
//         isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
//       }`}
//     >
//       <Header
//         toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
//         toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
//         isDarkMode={isDarkMode}
//         timer={formatTime(timer)}
//         togglePause={() => setPaused(!paused)}
//         paused={paused}
//       />
//       <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
//         <Sidebar
//           totalQuestions={questions.length}
//           currentQuestion={currentQuestion}
//           markedQuestions={markedQuestions}
//           selectedAnswers={selectedAnswers}
//           navigateToQuestion={setCurrentQuestion}
//           isSidebarOpen={isSidebarOpen}
//           setIsSidebarOpen={setIsSidebarOpen}
//           isDarkMode={isDarkMode}
//         />
//         <QuestionPanel
//           currentQuestion={currentQuestion}
//           questions={questions}
//           selectedAnswers={selectedAnswers}
//           handleOptionSelect={(index) =>
//             setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index })
//           }
//           isDarkMode={isDarkMode}
//           handleNextQuestion={() =>
//             setCurrentQuestion((prev) =>
//               prev < questions.length - 1 ? prev + 1 : prev
//             )
//           }
//           handlePrevQuestion={() =>
//             setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev))
//           }
//         />
//       </main>
//       <StatsRow
//         totalQuestions={questions.length}
//         selectedAnswers={selectedAnswers}
//         markedQuestions={markedQuestions}
//         isDarkMode={isDarkMode}
//       />
//       <FooterControls
//         handleMarkForReview={() =>
//           setMarkedQuestions((prev) =>
//             prev.includes(currentQuestion)
//               ? prev.filter((q) => q !== currentQuestion)
//               : [...prev, currentQuestion]
//           )
//         }
//         showEndModal={showEndModal}
//         setShowEndModal={setShowEndModal}
//         isDarkMode={isDarkMode}
//       />
//       <EndModal
//         showEndModal={showEndModal}
//         setShowEndModal={setShowEndModal}
//         onSubmitTest={handleSubmitTest}
//       />
//       {showCustomPopup && (
//         <CustomPopup
//           onClose={() => setShowCustomPopup(false)}
//           onLeave={() => router.push("/")}
//         />
//       )}
//       <Result
//         results={results}
//         formatTime={formatTime}
//         onClose={() => setResults(null)}
//       />
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import Header from "./Header";
import StatsRow from "./StatsRow";
import QuestionPanel from "./QuestionPanel";
import FooterControls from "./FooterControls";
import EndModal from "./EndModal";
import CustomPopup from "./CustomPopup";
import Result from "./Result"; // Import the updated Result component
import { useQuestions } from "@/Context/QuestionsContext";

const Page = () => {
  const { questions } = useQuestions();
  const router = useRouter();

  useEffect(() => {
    if (questions.length === 0) {
      router.push("/");
    }
  }, [questions.length, router]);

  const totalTimeInMinutes = (questions.length / 100) * 60;
  const totalTimeInSeconds = totalTimeInMinutes * 60;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [markedQuestions, setMarkedQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timer, setTimer] = useState(totalTimeInSeconds);
  const [paused, setPaused] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showCustomPopup, setShowCustomPopup] = useState(false);
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (!paused && timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      handleSubmitTest();
    }
  }, [paused, timer]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const calculateResults = () => {
    const totalQuestions = questions.length;

    const correctAnswers = Object.keys(selectedAnswers).filter((key) => {
      const questionIndex = parseInt(key, 10);
      const selectedOption = `option${selectedAnswers[key]}`;
      return questions[questionIndex]?.answer === selectedOption;
    }).length;

    const wrongAnswers = Object.keys(selectedAnswers).length - correctAnswers;
    const unattempted = totalQuestions - Object.keys(selectedAnswers).length;
    const markedForReview = markedQuestions.length;
    const totalMarks = correctAnswers * 4 - wrongAnswers * 1;

    return {
      totalQuestions,
      correctAnswers,
      wrongAnswers,
      unattempted,
      markedForReview,
      totalMarks,
      timeTaken: totalTimeInSeconds - timer,
      selectedAnswers,
    };
  };

  const handleSubmitTest = () => {
    const resultData = calculateResults();
    setResults(resultData);
  };

  return (
    <div
      className={`h-screen flex flex-col overflow-hidden ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Header
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        isDarkMode={isDarkMode}
        timer={formatTime(timer)}
        togglePause={() => setPaused(!paused)}
        paused={paused}
      />
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <Sidebar
          totalQuestions={questions.length}
          currentQuestion={currentQuestion}
          markedQuestions={markedQuestions}
          selectedAnswers={selectedAnswers}
          navigateToQuestion={setCurrentQuestion}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isDarkMode={isDarkMode}
        />
        <QuestionPanel
          currentQuestion={currentQuestion}
          questions={questions}
          selectedAnswers={selectedAnswers}
          handleOptionSelect={(index) =>
            setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index })
          }
          isDarkMode={isDarkMode}
          handleNextQuestion={() =>
            setCurrentQuestion((prev) =>
              prev < questions.length - 1 ? prev + 1 : prev
            )
          }
          handlePrevQuestion={() =>
            setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev))
          }
        />
      </main>
      <StatsRow
        totalQuestions={questions.length}
        selectedAnswers={selectedAnswers}
        markedQuestions={markedQuestions}
        isDarkMode={isDarkMode}
      />
      <FooterControls
        handleMarkForReview={() =>
          setMarkedQuestions((prev) =>
            prev.includes(currentQuestion)
              ? prev.filter((q) => q !== currentQuestion)
              : [...prev, currentQuestion]
          )
        }
        showEndModal={showEndModal}
        setShowEndModal={setShowEndModal}
        isDarkMode={isDarkMode}
      />
      <EndModal
        showEndModal={showEndModal}
        setShowEndModal={setShowEndModal}
        onSubmitTest={handleSubmitTest}
      />
      {showCustomPopup && (
        <CustomPopup
          onClose={() => setShowCustomPopup(false)}
          onLeave={() => router.push("/")}
        />
      )}
      <Result
        results={results}
        formatTime={formatTime}
        questions={questions}
        onClose={() => setResults(null)}
      />
    </div>
  );
};

export default Page;
