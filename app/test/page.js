// // // "use client";

// // // import React, { useState, useEffect } from "react";
// // // import { useRouter } from "next/navigation"; // Correct import for app directory
// // // import Sidebar from "./Sidebar";
// // // import Header from "./Header";
// // // import StatsRow from "./StatsRow";
// // // import QuestionPanel from "./QuestionPanel";
// // // import FooterControls from "./FooterControls";
// // // import EndModal from "./EndModal";
// // // import CustomPopup from "./CustomPopup";
// // // import { useQuestions } from "@/Context/QuestionsContext";

// // // const Page = () => {
// // //   const { questions } = useQuestions();
// // //   const router = useRouter();

// // //   // Redirect to home if no questions are available
// // //   useEffect(() => {
// // //     if (questions.length === 0) {
// // //       router.push("/"); // Redirect to the home page
// // //     }
// // //   }, [questions.length, router]);

// // //   // Calculate the total time based on 60 minutes for 100 questions
// // //   const totalTimeInMinutes = 60; // 60 minutes for 100 questions
// // //   const totalTimeInSeconds = totalTimeInMinutes * 60; // Convert minutes to seconds
// // //   const timePerQuestion = totalTimeInSeconds / questions.length; // Time per question in seconds

// // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // //   const [markedQuestions, setMarkedQuestions] = useState([]);
// // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // //   const [timer, setTimer] = useState(totalTimeInSeconds); // Initialize timer based on total time
// // //   const [paused, setPaused] = useState(false);
// // //   const [showEndModal, setShowEndModal] = useState(false);
// // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// // //   const [isDarkMode, setIsDarkMode] = useState(false);
// // //   const [showCustomPopup, setShowCustomPopup] = useState(false);
// // //   const [leavePending, setLeavePending] = useState(false);

// // //   // Timer logic
// // //   useEffect(() => {
// // //     if (!paused) {
// // //       const interval = setInterval(() => {
// // //         setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// // //       }, 1000);
// // //       if (timer === 60) alert("⚠️ Hurry up! Only 1 minute left.");
// // //       return () => clearInterval(interval);
// // //     }
// // //   }, [paused, timer]);

// // //   // Handle "beforeunload" event for navigation confirmation
// // //   useEffect(() => {
// // //     const handleBeforeUnload = (e) => {
// // //       if (!leavePending) {
// // //         // Prevent default browser popup and trigger custom logic
// // //         e.preventDefault();
// // //         e.returnValue = ""; // This line is needed for some browsers (like Chrome)

// // //         // Show custom popup for navigation warning
// // //         setShowCustomPopup(true);
// // //       }
// // //     };

// // //     window.addEventListener("beforeunload", handleBeforeUnload);

// // //     return () => {
// // //       window.removeEventListener("beforeunload", handleBeforeUnload);
// // //     };
// // //   }, [leavePending]);

// // //   // Handle custom popup actions
// // //   const handleCustomPopupClose = () => {
// // //     setShowCustomPopup(false); // Close the custom popup
// // //   };

// // //   const handleLeave = () => {
// // //     setLeavePending(true); // Mark that leave action is pending
// // //     setShowCustomPopup(true); // Show custom leave confirmation popup
// // //   };

// // //   const handleConfirmLeave = () => {
// // //     setLeavePending(false); // Mark leave action as confirmed
// // //     setShowCustomPopup(false); // Hide the custom popup
// // //     router.push("/"); // Navigate to the desired page (e.g., home page)
// // //   };

// // //   const handleCancelLeave = () => {
// // //     setLeavePending(false); // Cancel leave action
// // //     setShowCustomPopup(false); // Close the custom popup
// // //   };

// // //   const formatTime = (time) => {
// // //     const minutes = Math.floor(time / 60);
// // //     const seconds = time % 60;
// // //     return `${minutes.toString().padStart(2, "0")}:${seconds
// // //       .toString()
// // //       .padStart(2, "0")}`;
// // //   };

// // //   return (
// // //     <div
// // //       className={`h-screen flex flex-col overflow-hidden ${
// // //         isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
// // //       }`}
// // //     >
// // //       <Header
// // //         toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
// // //         toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
// // //         isDarkMode={isDarkMode}
// // //         timer={formatTime(timer)}
// // //         togglePause={() => setPaused(!paused)}
// // //         paused={paused}
// // //       />
// // //       <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
// // //         <Sidebar
// // //           totalQuestions={questions.length}
// // //           currentQuestion={currentQuestion}
// // //           markedQuestions={markedQuestions}
// // //           selectedAnswers={selectedAnswers}
// // //           navigateToQuestion={setCurrentQuestion}
// // //           isSidebarOpen={isSidebarOpen}
// // //           setIsSidebarOpen={setIsSidebarOpen}
// // //           isDarkMode={isDarkMode}
// // //         />
// // //         <QuestionPanel
// // //           currentQuestion={currentQuestion}
// // //           questions={questions}
// // //           selectedAnswers={selectedAnswers}
// // //           handleOptionSelect={(index) =>
// // //             setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index })
// // //           }
// // //           isDarkMode={isDarkMode}
// // //           handleNextQuestion={() =>
// // //             setCurrentQuestion((prev) =>
// // //               prev < questions.length - 1 ? prev + 1 : prev
// // //             )
// // //           }
// // //           handlePrevQuestion={() =>
// // //             setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev))
// // //           }
// // //         />
// // //       </main>
// // //       <StatsRow
// // //         totalQuestions={questions.length}
// // //         selectedAnswers={selectedAnswers}
// // //         markedQuestions={markedQuestions}
// // //         isDarkMode={isDarkMode}
// // //       />
// // //       <FooterControls
// // //         handleMarkForReview={() =>
// // //           setMarkedQuestions((prev) =>
// // //             prev.includes(currentQuestion)
// // //               ? prev.filter((q) => q !== currentQuestion)
// // //               : [...prev, currentQuestion]
// // //           )
// // //         }
// // //         showEndModal={showEndModal}
// // //         setShowEndModal={setShowEndModal}
// // //         isDarkMode={isDarkMode}
// // //       />
// // //       <EndModal showEndModal={showEndModal} setShowEndModal={setShowEndModal} />
// // //       {showCustomPopup && (
// // //         <CustomPopup
// // //           onClose={handleCancelLeave} // Cancel the leave action
// // //           onLeave={handleConfirmLeave} // Confirm and leave
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Page;

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

//     // Correct answer count
//     const correctAnswers = Object.keys(selectedAnswers).filter((key) => {
//       const questionIndex = parseInt(key, 10) - 1; // Convert 1-based index to 0-based for accessing `questions`
//       const selectedOption = `option${selectedAnswers[key]}`; // Match the format "optionX"

//       return questions[questionIndex + 1]?.answer === selectedOption; // Compare answers
//     }).length;

//     const wrongAnswers = Object.keys(selectedAnswers).length - correctAnswers;
//     const unattempted = totalQuestions - Object.keys(selectedAnswers).length;
//     const markedForReview = markedQuestions.length;

//     const totalMarks = correctAnswers * 4 - wrongAnswers * 1; // +4 for correct, -1 for wrong

//     return {
//       totalQuestions,
//       correctAnswers,
//       wrongAnswers,
//       unattempted,
//       markedForReview,
//       totalMarks,
//       timeTaken: totalTimeInSeconds - timer, // Time taken in seconds
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
//           handleNextQuestion={() => {
//             console.log("Selected Answers:", selectedAnswers);
//             console.log("Questions:", questions);

//             setCurrentQuestion((prev) =>
//               prev < questions.length - 1 ? prev + 1 : prev
//             );
//           }}
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
//       {results && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow-md">
//             <h2 className="text-lg font-bold mb-4">Test Results</h2>
//             <p>Total Questions: {results.totalQuestions}</p>
//             <p>Correct Answers: {results.correctAnswers}</p>
//             <p>Wrong Answers: {results.wrongAnswers}</p>
//             <p>Unattempted: {results.unattempted}</p>
//             <p>Marked for Review: {results.markedForReview}</p>
//             <p>Total Marks: {results.totalMarks}</p>
//             <p>Total Time Taken: {formatTime(results.timeTaken)}</p>
//             <button
//               onClick={() => router.push("/")}
//               className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
//             >
//               Go to Home
//             </button>
//           </div>
//         </div>
//       )}
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
import Result from "./Result"; // Import the new Result component
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
      const questionIndex = parseInt(key, 10) - 1;
      const selectedOption = `option${selectedAnswers[key]}`;

      return questions[questionIndex + 1]?.answer === selectedOption;
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
        onClose={() => setResults(null)}
      />
    </div>
  );
};

export default Page;
