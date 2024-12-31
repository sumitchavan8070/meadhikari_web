// // "use client";

// // import React, { useState, useEffect } from "react";
// // import { useRouter } from "next/navigation"; // Correct import for app directory
// // import Sidebar from "./Sidebar";
// // import Header from "./Header";
// // import StatsRow from "./StatsRow";
// // import QuestionPanel from "./QuestionPanel";
// // import FooterControls from "./FooterControls";
// // import EndModal from "./EndModal";
// // import CustomPopup from "./CustomPopup";
// // import { useQuestions } from "@/Context/QuestionsContext";

// // const Page = () => {
// //   const { questions } = useQuestions();
// //   const router = useRouter();

// //   // Redirect to home if no questions are available
// //   useEffect(() => {
// //     // Check immediately when the component mounts or when questions change
// //     if (questions.length === 0) {
// //       router.push("/"); // Redirect to the home page
// //     }
// //   }, [questions.length, router]); // Dependency on questions.length

// //   const totalQuestions = 100;
// //   const [currentQuestion, setCurrentQuestion] = useState(0);
// //   const [markedQuestions, setMarkedQuestions] = useState([]);
// //   const [selectedAnswers, setSelectedAnswers] = useState({});
// //   const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
// //   const [paused, setPaused] = useState(false);
// //   const [showEndModal, setShowEndModal] = useState(false);
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [isDarkMode, setIsDarkMode] = useState(false);
// //   const [showCustomPopup, setShowCustomPopup] = useState(false);
// //   const [leavePending, setLeavePending] = useState(false);

// //   // Timer logic
// //   useEffect(() => {
// //     if (!paused) {
// //       const interval = setInterval(() => {
// //         setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// //       }, 1000);
// //       if (timer === 60) alert("⚠️ Hurry up! Only 1 minute left.");
// //       return () => clearInterval(interval);
// //     }
// //   }, [paused, timer]);

// //   // Handle "beforeunload" event for navigation confirmation
// //   useEffect(() => {
// //     const handleBeforeUnload = (e) => {
// //       if (!leavePending) {
// //         // Prevent default browser popup and trigger custom logic
// //         e.preventDefault();
// //         e.returnValue = ""; // This line is needed for some browsers (like Chrome)

// //         // Show custom popup for navigation warning
// //         setShowCustomPopup(true);
// //       }
// //     };

// //     window.addEventListener("beforeunload", handleBeforeUnload);

// //     return () => {
// //       window.removeEventListener("beforeunload", handleBeforeUnload);
// //     };
// //   }, [leavePending]);

// //   // Handle custom popup actions
// //   const handleCustomPopupClose = () => {
// //     setShowCustomPopup(false); // Close the custom popup
// //   };

// //   const handleLeave = () => {
// //     setLeavePending(true); // Mark that leave action is pending
// //     setShowCustomPopup(true); // Show custom leave confirmation popup
// //   };

// //   const handleConfirmLeave = () => {
// //     setLeavePending(false); // Mark leave action as confirmed
// //     setShowCustomPopup(false); // Hide the custom popup
// //     router.push("/"); // Navigate to the desired page (e.g., home page)
// //   };

// //   const handleCancelLeave = () => {
// //     setLeavePending(false); // Cancel leave action
// //     setShowCustomPopup(false); // Close the custom popup
// //   };

// //   const formatTime = (time) => {
// //     const minutes = Math.floor(time / 60);
// //     const seconds = time % 60;
// //     return `${minutes.toString().padStart(2, "0")}:${seconds
// //       .toString()
// //       .padStart(2, "0")}`;
// //   };

// //   return (
// //     <div
// //       className={`h-screen flex flex-col overflow-hidden ${
// //         isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
// //       }`}
// //     >
// //       <Header
// //         toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
// //         toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
// //         isDarkMode={isDarkMode}
// //         timer={formatTime(timer)}
// //         togglePause={() => setPaused(!paused)}
// //         paused={paused}
// //       />
// //       <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
// //         <Sidebar
// //           totalQuestions={questions.length}
// //           currentQuestion={currentQuestion}
// //           markedQuestions={markedQuestions}
// //           selectedAnswers={selectedAnswers}
// //           navigateToQuestion={setCurrentQuestion}
// //           isSidebarOpen={isSidebarOpen}
// //           setIsSidebarOpen={setIsSidebarOpen}
// //           isDarkMode={isDarkMode}
// //         />
// //         <QuestionPanel
// //           currentQuestion={currentQuestion}
// //           questions={questions}
// //           selectedAnswers={selectedAnswers}
// //           handleOptionSelect={(index) =>
// //             setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index })
// //           }
// //           isDarkMode={isDarkMode}
// //           handleNextQuestion={() =>
// //             setCurrentQuestion((prev) =>
// //               prev < totalQuestions - 1 ? prev + 1 : prev
// //             )
// //           }
// //           handlePrevQuestion={() =>
// //             setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev))
// //           }
// //         />
// //       </main>
// //       <StatsRow
// //         totalQuestions={totalQuestions}
// //         selectedAnswers={selectedAnswers}
// //         markedQuestions={markedQuestions}
// //         isDarkMode={isDarkMode}
// //       />
// //       <FooterControls
// //         handleMarkForReview={() =>
// //           setMarkedQuestions((prev) =>
// //             prev.includes(currentQuestion)
// //               ? prev.filter((q) => q !== currentQuestion)
// //               : [...prev, currentQuestion]
// //           )
// //         }
// //         showEndModal={showEndModal}
// //         setShowEndModal={setShowEndModal}
// //         isDarkMode={isDarkMode}
// //       />
// //       <EndModal showEndModal={showEndModal} setShowEndModal={setShowEndModal} />
// //       {showCustomPopup && (
// //         <CustomPopup
// //           onClose={handleCancelLeave} // Cancel the leave action
// //           onLeave={handleConfirmLeave} // Confirm and leave
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default Page;

// // "use client";

// // import React, { useState, useEffect } from "react";
// // import { useRouter } from "next/navigation"; // Correct import for app directory
// // import Sidebar from "./Sidebar";
// // import Header from "./Header";
// // import StatsRow from "./StatsRow";
// // import QuestionPanel from "./QuestionPanel";
// // import FooterControls from "./FooterControls";
// // import EndModal from "./EndModal";
// // import CustomPopup from "./CustomPopup";
// // import { useQuestions } from "@/Context/QuestionsContext";

// // const Page = () => {
// //   const { questions } = useQuestions();
// //   const router = useRouter();

// //   // Redirect to home if no questions are available
// //   useEffect(() => {
// //     if (questions.length === 0) {
// //       router.push("/"); // Redirect to the home page
// //     }
// //   }, [questions.length, router]);

// //   // Calculate the total time based on 60 minutes for 100 questions
// //   const totalTimeInMinutes = 60; // 60 minutes for 100 questions
// //   const totalTimeInSeconds = totalTimeInMinutes * 60; // Convert minutes to seconds
// //   const timePerQuestion = totalTimeInSeconds / questions.length; // Time per question in seconds

// //   const [currentQuestion, setCurrentQuestion] = useState(0);
// //   const [markedQuestions, setMarkedQuestions] = useState([]);
// //   const [selectedAnswers, setSelectedAnswers] = useState({});
// //   const [timer, setTimer] = useState(totalTimeInSeconds); // Initialize timer based on total time
// //   const [paused, setPaused] = useState(false);
// //   const [showEndModal, setShowEndModal] = useState(false);
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [isDarkMode, setIsDarkMode] = useState(false);
// //   const [showCustomPopup, setShowCustomPopup] = useState(false);
// //   const [leavePending, setLeavePending] = useState(false);

// //   // Timer logic
// //   useEffect(() => {
// //     if (!paused) {
// //       const interval = setInterval(() => {
// //         setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// //       }, 1000);
// //       if (timer === 60) alert("⚠️ Hurry up! Only 1 minute left.");
// //       return () => clearInterval(interval);
// //     }
// //   }, [paused, timer]);

// //   // Handle "beforeunload" event for navigation confirmation
// //   useEffect(() => {
// //     const handleBeforeUnload = (e) => {
// //       if (!leavePending) {
// //         // Prevent default browser popup and trigger custom logic
// //         e.preventDefault();
// //         e.returnValue = ""; // This line is needed for some browsers (like Chrome)

// //         // Show custom popup for navigation warning
// //         setShowCustomPopup(true);
// //       }
// //     };

// //     window.addEventListener("beforeunload", handleBeforeUnload);

// //     return () => {
// //       window.removeEventListener("beforeunload", handleBeforeUnload);
// //     };
// //   }, [leavePending]);

// //   // Handle custom popup actions
// //   const handleCustomPopupClose = () => {
// //     setShowCustomPopup(false); // Close the custom popup
// //   };

// //   const handleLeave = () => {
// //     setLeavePending(true); // Mark that leave action is pending
// //     setShowCustomPopup(true); // Show custom leave confirmation popup
// //   };

// //   const handleConfirmLeave = () => {
// //     setLeavePending(false); // Mark leave action as confirmed
// //     setShowCustomPopup(false); // Hide the custom popup
// //     router.push("/"); // Navigate to the desired page (e.g., home page)
// //   };

// //   const handleCancelLeave = () => {
// //     setLeavePending(false); // Cancel leave action
// //     setShowCustomPopup(false); // Close the custom popup
// //   };

// //   const formatTime = (time) => {
// //     const minutes = Math.floor(time / 60);
// //     const seconds = time % 60;
// //     return `${minutes.toString().padStart(2, "0")}:${seconds
// //       .toString()
// //       .padStart(2, "0")}`;
// //   };

// //   return (
// //     <div
// //       className={`h-screen flex flex-col overflow-hidden ${
// //         isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
// //       }`}
// //     >
// //       <Header
// //         toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
// //         toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
// //         isDarkMode={isDarkMode}
// //         timer={formatTime(timer)}
// //         togglePause={() => setPaused(!paused)}
// //         paused={paused}
// //       />
// //       <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
// //         <Sidebar
// //           totalQuestions={questions.length}
// //           currentQuestion={currentQuestion}
// //           markedQuestions={markedQuestions}
// //           selectedAnswers={selectedAnswers}
// //           navigateToQuestion={setCurrentQuestion}
// //           isSidebarOpen={isSidebarOpen}
// //           setIsSidebarOpen={setIsSidebarOpen}
// //           isDarkMode={isDarkMode}
// //         />
// //         <QuestionPanel
// //           currentQuestion={currentQuestion}
// //           questions={questions}
// //           selectedAnswers={selectedAnswers}
// //           handleOptionSelect={(index) =>
// //             setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index })
// //           }
// //           isDarkMode={isDarkMode}
// //           handleNextQuestion={() =>
// //             setCurrentQuestion((prev) =>
// //               prev < questions.length - 1 ? prev + 1 : prev
// //             )
// //           }
// //           handlePrevQuestion={() =>
// //             setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev))
// //           }
// //         />
// //       </main>
// //       <StatsRow
// //         totalQuestions={questions.length}
// //         selectedAnswers={selectedAnswers}
// //         markedQuestions={markedQuestions}
// //         isDarkMode={isDarkMode}
// //       />
// //       <FooterControls
// //         handleMarkForReview={() =>
// //           setMarkedQuestions((prev) =>
// //             prev.includes(currentQuestion)
// //               ? prev.filter((q) => q !== currentQuestion)
// //               : [...prev, currentQuestion]
// //           )
// //         }
// //         showEndModal={showEndModal}
// //         setShowEndModal={setShowEndModal}
// //         isDarkMode={isDarkMode}
// //       />
// //       <EndModal showEndModal={showEndModal} setShowEndModal={setShowEndModal} />
// //       {showCustomPopup && (
// //         <CustomPopup
// //           onClose={handleCancelLeave} // Cancel the leave action
// //           onLeave={handleConfirmLeave} // Confirm and leave
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // export default Page;

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

//   // Redirect to home if no questions are available
//   useEffect(() => {
//     if (questions.length === 0) {
//       router.push("/"); // Redirect to the home page
//     }
//   }, [questions.length, router]);

//   // Calculate total time dynamically based on the number of questions
//   const timePerQuestionInSeconds = 36; // 36 seconds per question
//   const totalTimeInSeconds = timePerQuestionInSeconds * questions.length; // Total time based on questions
//   const [timer, setTimer] = useState(totalTimeInSeconds); // Initialize timer
//   const [paused, setPaused] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [markedQuestions, setMarkedQuestions] = useState([]);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [showEndModal, setShowEndModal] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [showCustomPopup, setShowCustomPopup] = useState(false);
//   const [leavePending, setLeavePending] = useState(false);

//   // Timer logic
//   useEffect(() => {
//     if (!paused && timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prev) => (prev > 0 ? prev - 1 : 0));
//       }, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [paused, timer]);

//   // Handle "beforeunload" event for navigation confirmation
//   useEffect(() => {
//     const handleBeforeUnload = (e) => {
//       if (!leavePending) {
//         e.preventDefault();
//         e.returnValue = "";
//         setShowCustomPopup(true);
//       }
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [leavePending]);

//   // Handle custom popup actions
//   const handleCustomPopupClose = () => setShowCustomPopup(false);
//   const handleLeave = () => setLeavePending(true);
//   const handleConfirmLeave = () => {
//     setLeavePending(false);
//     setShowCustomPopup(false);
//     router.push("/");
//   };
//   const handleCancelLeave = () => {
//     setLeavePending(false);
//     setShowCustomPopup(false);
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes.toString().padStart(2, "0")}:${seconds
//       .toString()
//       .padStart(2, "0")}`;
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
//       <EndModal showEndModal={showEndModal} setShowEndModal={setShowEndModal} />
//       {showCustomPopup && (
//         <CustomPopup onClose={handleCancelLeave} onLeave={handleConfirmLeave} />
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
import { useQuestions } from "@/Context/QuestionsContext";

const Page = () => {
  const { questions } = useQuestions();
  const router = useRouter();

  // Redirect if no questions are available
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
  const [leavePending, setLeavePending] = useState(false);
  const [results, setResults] = useState(null);

  // Timer logic
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
    // Dummy logic to calculate results
    const totalQuestions = questions.length;
    const correctAnswers = Object.keys(selectedAnswers).length; // Assuming each selected answer is correct for simplicity
    return {
      totalQuestions,
      correctAnswers,
      percentage: ((correctAnswers / totalQuestions) * 100).toFixed(2),
    };
  };

  const handleSubmitTest = () => {
    const resultData = calculateResults();
    setResults(resultData);
    // alert("Test submitted! Your results are ready.");
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
      {results && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-bold mb-4">Test Results</h2>
            <p>Total Questions: {results.totalQuestions}</p>
            <p>Correct Answers: {results.correctAnswers}</p>
            <p>Percentage: {results.percentage}%</p>
            <button
              onClick={() => router.push("/")}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
