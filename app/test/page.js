// // // // // "use client";
// // // // // import React, { useState, useEffect } from "react";
// // // // // import Sidebar from "./Sidebar";
// // // // // import Header from "./Header";
// // // // // import StatsRow from "./StatsRow";
// // // // // import QuestionPanel from "./QuestionPanel";
// // // // // import FooterControls from "./FooterControls";
// // // // // import EndModal from "./EndModal";
// // // // // import { useQuestions } from "@/Context/QuestionsContext";

// // // // // const Page = () => {
// // // // //   const { questions } = useQuestions();

// // // // //   const totalQuestions = 100;
// // // // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // // // //   const [markedQuestions, setMarkedQuestions] = useState([]);
// // // // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // // // //   const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
// // // // //   const [paused, setPaused] = useState(false);
// // // // //   const [showEndModal, setShowEndModal] = useState(false);
// // // // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle
// // // // //   const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

// // // // //   // Timer logic
// // // // //   useEffect(() => {
// // // // //     if (!paused) {
// // // // //       const interval = setInterval(() => {
// // // // //         setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// // // // //       }, 1000);
// // // // //       if (timer === 60) alert("⚠️ Hurry up! Only 1 minute left.");
// // // // //       return () => clearInterval(interval);
// // // // //     }
// // // // //   }, [paused, timer]);

// // // // //   const formatTime = (time) => {
// // // // //     const minutes = Math.floor(time / 60);
// // // // //     const seconds = time % 60;
// // // // //     return `${minutes.toString().padStart(2, "0")}:${seconds
// // // // //       .toString()
// // // // //       .padStart(2, "0")}`;
// // // // //   };

// // // // //   const handleOptionSelect = (index) => {
// // // // //     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
// // // // //   };

// // // // //   const handleMarkForReview = () => {
// // // // //     if (markedQuestions.includes(currentQuestion)) {
// // // // //       setMarkedQuestions(markedQuestions.filter((q) => q !== currentQuestion));
// // // // //     } else {
// // // // //       setMarkedQuestions([...markedQuestions, currentQuestion]);
// // // // //     }
// // // // //   };

// // // // //   const navigateToQuestion = (index) => setCurrentQuestion(index);

// // // // //   const handleNextQuestion = () => {
// // // // //     if (currentQuestion < totalQuestions - 1) {
// // // // //       setCurrentQuestion(currentQuestion + 1);
// // // // //     }
// // // // //   };

// // // // //   const handlePrevQuestion = () => {
// // // // //     if (currentQuestion > 0) {
// // // // //       setCurrentQuestion(currentQuestion - 1);
// // // // //     }
// // // // //   };

// // // // //   const togglePause = () => setPaused(!paused);

// // // // //   const handleKeyDown = (e) => {
// // // // //     if (e.key === "ArrowRight") {
// // // // //       handleNextQuestion();
// // // // //     }
// // // // //     if (e.key === "ArrowLeft") {
// // // // //       handlePrevQuestion();
// // // // //     }
// // // // //     if (e.key === "r" || e.key === "R") handleMarkForReview();
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     window.addEventListener("keydown", handleKeyDown);
// // // // //     return () => window.removeEventListener("keydown", handleKeyDown);
// // // // //   }, [currentQuestion]);

// // // // //   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

// // // // //   return (
// // // // //     <div
// // // // //       className={`h-screen flex flex-col overflow-hidden ${
// // // // //         isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
// // // // //       }`}
// // // // //     >
// // // // //       <Header
// // // // //         toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
// // // // //         toggleDarkMode={toggleDarkMode}
// // // // //         isDarkMode={isDarkMode}
// // // // //         timer={formatTime(timer)}
// // // // //         togglePause={togglePause}
// // // // //         paused={paused}
// // // // //       />
// // // // //       <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
// // // // //         <Sidebar
// // // // //           totalQuestions={questions.length}
// // // // //           currentQuestion={currentQuestion}
// // // // //           markedQuestions={markedQuestions}
// // // // //           selectedAnswers={selectedAnswers}
// // // // //           navigateToQuestion={navigateToQuestion}
// // // // //           isSidebarOpen={isSidebarOpen}
// // // // //           setIsSidebarOpen={setIsSidebarOpen}
// // // // //           isDarkMode={isDarkMode}
// // // // //         />

// // // // //         <QuestionPanel
// // // // //           currentQuestion={currentQuestion}
// // // // //           questions={questions}
// // // // //           selectedAnswers={selectedAnswers}
// // // // //           handleOptionSelect={handleOptionSelect}
// // // // //           isDarkMode={isDarkMode}
// // // // //           handleNextQuestion={handleNextQuestion}
// // // // //           handlePrevQuestion={handlePrevQuestion}
// // // // //         />
// // // // //       </main>
// // // // //       <StatsRow
// // // // //         totalQuestions={totalQuestions}
// // // // //         selectedAnswers={selectedAnswers}
// // // // //         markedQuestions={markedQuestions}
// // // // //         isDarkMode={isDarkMode}
// // // // //       />

// // // // //       <FooterControls
// // // // //         handleMarkForReview={handleMarkForReview}
// // // // //         showEndModal={showEndModal}
// // // // //         setShowEndModal={setShowEndModal}
// // // // //         isDarkMode={isDarkMode}
// // // // //       />
// // // // //       <EndModal showEndModal={showEndModal} setShowEndModal={setShowEndModal} />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Page;

// // // // "use client";
// // // // import React, { useState, useEffect } from "react";
// // // // import Sidebar from "./Sidebar";
// // // // import Header from "./Header";
// // // // import StatsRow from "./StatsRow";
// // // // import QuestionPanel from "./QuestionPanel";
// // // // import FooterControls from "./FooterControls";
// // // // import EndModal from "./EndModal";
// // // // import { useQuestions } from "@/Context/QuestionsContext";

// // // // const Page = () => {
// // // //   const { questions } = useQuestions();

// // // //   const totalQuestions = 100;
// // // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // // //   const [markedQuestions, setMarkedQuestions] = useState([]);
// // // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // // //   const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
// // // //   const [paused, setPaused] = useState(false);
// // // //   const [showEndModal, setShowEndModal] = useState(false);
// // // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle
// // // //   const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

// // // //   // Timer logic
// // // //   useEffect(() => {
// // // //     if (!paused) {
// // // //       const interval = setInterval(() => {
// // // //         setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// // // //       }, 1000);
// // // //       if (timer === 60) alert("⚠️ Hurry up! Only 1 minute left.");
// // // //       return () => clearInterval(interval);
// // // //     }
// // // //   }, [paused, timer]);

// // // //   // Confirmation dialog on page refresh or close
// // // //   useEffect(() => {
// // // //     const handleBeforeUnload = (e) => {
// // // //       e.preventDefault();
// // // //       e.returnValue = ""; // This triggers the browser's default dialog
// // // //     };

// // // //     window.addEventListener("beforeunload", handleBeforeUnload);

// // // //     return () => {
// // // //       window.removeEventListener("beforeunload", handleBeforeUnload);
// // // //     };
// // // //   }, []);

// // // //   const formatTime = (time) => {
// // // //     const minutes = Math.floor(time / 60);
// // // //     const seconds = time % 60;
// // // //     return `${minutes.toString().padStart(2, "0")}:${seconds
// // // //       .toString()
// // // //       .padStart(2, "0")}`;
// // // //   };

// // // //   const handleOptionSelect = (index) => {
// // // //     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
// // // //   };

// // // //   const handleMarkForReview = () => {
// // // //     if (markedQuestions.includes(currentQuestion)) {
// // // //       setMarkedQuestions(markedQuestions.filter((q) => q !== currentQuestion));
// // // //     } else {
// // // //       setMarkedQuestions([...markedQuestions, currentQuestion]);
// // // //     }
// // // //   };

// // // //   const navigateToQuestion = (index) => setCurrentQuestion(index);

// // // //   const handleNextQuestion = () => {
// // // //     if (currentQuestion < totalQuestions - 1) {
// // // //       setCurrentQuestion(currentQuestion + 1);
// // // //     }
// // // //   };

// // // //   const handlePrevQuestion = () => {
// // // //     if (currentQuestion > 0) {
// // // //       setCurrentQuestion(currentQuestion - 1);
// // // //     }
// // // //   };

// // // //   const togglePause = () => setPaused(!paused);

// // // //   const handleKeyDown = (e) => {
// // // //     if (e.key === "ArrowRight") {
// // // //       handleNextQuestion();
// // // //     }
// // // //     if (e.key === "ArrowLeft") {
// // // //       handlePrevQuestion();
// // // //     }
// // // //     if (e.key === "r" || e.key === "R") handleMarkForReview();
// // // //   };

// // // //   useEffect(() => {
// // // //     window.addEventListener("keydown", handleKeyDown);
// // // //     return () => window.removeEventListener("keydown", handleKeyDown);
// // // //   }, [currentQuestion]);

// // // //   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

// // // //   return (
// // // //     <div
// // // //       className={`h-screen flex flex-col overflow-hidden ${
// // // //         isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
// // // //       }`}
// // // //     >
// // // //       <Header
// // // //         toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
// // // //         toggleDarkMode={toggleDarkMode}
// // // //         isDarkMode={isDarkMode}
// // // //         timer={formatTime(timer)}
// // // //         togglePause={togglePause}
// // // //         paused={paused}
// // // //       />
// // // //       <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
// // // //         <Sidebar
// // // //           totalQuestions={questions.length}
// // // //           currentQuestion={currentQuestion}
// // // //           markedQuestions={markedQuestions}
// // // //           selectedAnswers={selectedAnswers}
// // // //           navigateToQuestion={navigateToQuestion}
// // // //           isSidebarOpen={isSidebarOpen}
// // // //           setIsSidebarOpen={setIsSidebarOpen}
// // // //           isDarkMode={isDarkMode}
// // // //         />

// // // //         <QuestionPanel
// // // //           currentQuestion={currentQuestion}
// // // //           questions={questions}
// // // //           selectedAnswers={selectedAnswers}
// // // //           handleOptionSelect={handleOptionSelect}
// // // //           isDarkMode={isDarkMode}
// // // //           handleNextQuestion={handleNextQuestion}
// // // //           handlePrevQuestion={handlePrevQuestion}
// // // //         />
// // // //       </main>
// // // //       <StatsRow
// // // //         totalQuestions={totalQuestions}
// // // //         selectedAnswers={selectedAnswers}
// // // //         markedQuestions={markedQuestions}
// // // //         isDarkMode={isDarkMode}
// // // //       />

// // // //       <FooterControls
// // // //         handleMarkForReview={handleMarkForReview}
// // // //         showEndModal={showEndModal}
// // // //         setShowEndModal={setShowEndModal}
// // // //         isDarkMode={isDarkMode}
// // // //       />
// // // //       <EndModal showEndModal={showEndModal} setShowEndModal={setShowEndModal} />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Page;

// // // "use client";

// // // import React, { useState, useEffect } from "react";
// // // import Sidebar from "./Sidebar";
// // // import Header from "./Header";
// // // import StatsRow from "./StatsRow";
// // // import QuestionPanel from "./QuestionPanel";
// // // import FooterControls from "./FooterControls";
// // // import CustomPopup from "./CustomPopup"; // Import custom popup
// // // import { useQuestions } from "@/Context/QuestionsContext";
// // // import EndModal from "./EndModal";

// // // const Page = () => {
// // //   const { questions } = useQuestions();

// // //   const totalQuestions = 100;
// // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // //   const [markedQuestions, setMarkedQuestions] = useState([]);
// // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // //   const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
// // //   const [paused, setPaused] = useState(false);
// // //   const [showEndModal, setShowEndModal] = useState(false);
// // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle
// // //   const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state
// // //   const [showCustomPopup, setShowCustomPopup] = useState(false); // Custom popup state

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

// // //   // Custom confirmation dialog on page refresh or close
// // //   useEffect(() => {
// // //     const handleBeforeUnload = (e) => {
// // //       e.preventDefault();
// // //       setShowCustomPopup(true); // Show custom popup instead of default dialog
// // //       e.returnValue = ""; // Prevent default dialog
// // //     };

// // //     window.addEventListener("beforeunload", handleBeforeUnload);

// // //     return () => {
// // //       window.removeEventListener("beforeunload", handleBeforeUnload);
// // //     };
// // //   }, []);

// // //   const handleCustomPopupClose = () => {
// // //     setShowCustomPopup(false);
// // //   };

// // //   const formatTime = (time) => {
// // //     const minutes = Math.floor(time / 60);
// // //     const seconds = time % 60;
// // //     return `${minutes.toString().padStart(2, "0")}:${seconds
// // //       .toString()
// // //       .padStart(2, "0")}`;
// // //   };

// // //   const handleOptionSelect = (index) => {
// // //     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
// // //   };

// // //   const handleMarkForReview = () => {
// // //     if (markedQuestions.includes(currentQuestion)) {
// // //       setMarkedQuestions(markedQuestions.filter((q) => q !== currentQuestion));
// // //     } else {
// // //       setMarkedQuestions([...markedQuestions, currentQuestion]);
// // //     }
// // //   };

// // //   const navigateToQuestion = (index) => setCurrentQuestion(index);

// // //   const handleNextQuestion = () => {
// // //     if (currentQuestion < totalQuestions - 1) {
// // //       setCurrentQuestion(currentQuestion + 1);
// // //     }
// // //   };

// // //   const handlePrevQuestion = () => {
// // //     if (currentQuestion > 0) {
// // //       setCurrentQuestion(currentQuestion - 1);
// // //     }
// // //   };

// // //   const togglePause = () => setPaused(!paused);

// // //   const handleKeyDown = (e) => {
// // //     if (e.key === "ArrowRight") {
// // //       handleNextQuestion();
// // //     }
// // //     if (e.key === "ArrowLeft") {
// // //       handlePrevQuestion();
// // //     }
// // //     if (e.key === "r" || e.key === "R") handleMarkForReview();
// // //   };

// // //   useEffect(() => {
// // //     window.addEventListener("keydown", handleKeyDown);
// // //     return () => window.removeEventListener("keydown", handleKeyDown);
// // //   }, [currentQuestion]);

// // //   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

// // //   return (
// // //     <div
// // //       className={`h-screen flex flex-col overflow-hidden ${
// // //         isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
// // //       }`}
// // //     >
// // //       <Header
// // //         toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
// // //         toggleDarkMode={toggleDarkMode}
// // //         isDarkMode={isDarkMode}
// // //         timer={formatTime(timer)}
// // //         togglePause={togglePause}
// // //         paused={paused}
// // //       />
// // //       <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
// // //         <Sidebar
// // //           totalQuestions={questions.length}
// // //           currentQuestion={currentQuestion}
// // //           markedQuestions={markedQuestions}
// // //           selectedAnswers={selectedAnswers}
// // //           navigateToQuestion={navigateToQuestion}
// // //           isSidebarOpen={isSidebarOpen}
// // //           setIsSidebarOpen={setIsSidebarOpen}
// // //           isDarkMode={isDarkMode}
// // //         />

// // //         <QuestionPanel
// // //           currentQuestion={currentQuestion}
// // //           questions={questions}
// // //           selectedAnswers={selectedAnswers}
// // //           handleOptionSelect={handleOptionSelect}
// // //           isDarkMode={isDarkMode}
// // //           handleNextQuestion={handleNextQuestion}
// // //           handlePrevQuestion={handlePrevQuestion}
// // //         />
// // //       </main>
// // //       <StatsRow
// // //         totalQuestions={totalQuestions}
// // //         selectedAnswers={selectedAnswers}
// // //         markedQuestions={markedQuestions}
// // //         isDarkMode={isDarkMode}
// // //       />

// // //       <FooterControls
// // //         handleMarkForReview={handleMarkForReview}
// // //         showEndModal={showEndModal}
// // //         setShowEndModal={setShowEndModal}
// // //         isDarkMode={isDarkMode}
// // //       />
// // //       <EndModal showEndModal={showEndModal} setShowEndModal={setShowEndModal} />
// // //       {showCustomPopup && <CustomPopup onClose={handleCustomPopupClose} />}
// // //     </div>
// // //   );
// // // };

// // // export default Page;

// // // "use client";

// // // import React, { useState, useEffect } from "react";
// // // import { useRouter } from "next/navigation"; // Correct import for app directory
// // // import Sidebar from "./Sidebar";
// // // import Header from "./Header";
// // // import StatsRow from "./StatsRow";
// // // import QuestionPanel from "./QuestionPanel";
// // // import FooterControls from "./FooterControls";
// // // import EndModal from "./EndModal";
// // // import CustomPopup from "./CustomPopup"; // Import CustomPopup
// // // import { useQuestions } from "@/Context/QuestionsContext";

// // // const Page = () => {
// // //   const { questions } = useQuestions();
// // //   const router = useRouter();

// // //   const totalQuestions = 100;
// // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // //   const [markedQuestions, setMarkedQuestions] = useState([]);
// // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // //   const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
// // //   const [paused, setPaused] = useState(false);
// // //   const [showEndModal, setShowEndModal] = useState(false);
// // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// // //   const [isDarkMode, setIsDarkMode] = useState(false);
// // //   const [showCustomPopup, setShowCustomPopup] = useState(false);

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

// // //   // Custom confirmation dialog on page refresh or close
// // //   useEffect(() => {
// // //     const handleBeforeUnload = (e) => {
// // //       e.preventDefault();
// // //       setShowCustomPopup(true); // Show custom popup instead of default dialog
// // //       e.returnValue = ""; // Prevent default dialog
// // //     };

// // //     window.addEventListener("beforeunload", handleBeforeUnload);

// // //     return () => {
// // //       window.removeEventListener("beforeunload", handleBeforeUnload);
// // //     };
// // //   }, []);

// // //   const handleCustomPopupClose = () => {
// // //     setShowCustomPopup(false);
// // //   };

// // //   const formatTime = (time) => {
// // //     const minutes = Math.floor(time / 60);
// // //     const seconds = time % 60;
// // //     return `${minutes.toString().padStart(2, "0")}:${seconds
// // //       .toString()
// // //       .padStart(2, "0")}`;
// // //   };

// // //   const handleOptionSelect = (index) => {
// // //     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
// // //   };

// // //   const handleMarkForReview = () => {
// // //     if (markedQuestions.includes(currentQuestion)) {
// // //       setMarkedQuestions(markedQuestions.filter((q) => q !== currentQuestion));
// // //     } else {
// // //       setMarkedQuestions([...markedQuestions, currentQuestion]);
// // //     }
// // //   };

// // //   const navigateToQuestion = (index) => setCurrentQuestion(index);

// // //   const handleNextQuestion = () => {
// // //     if (currentQuestion < totalQuestions - 1) {
// // //       setCurrentQuestion(currentQuestion + 1);
// // //     }
// // //   };

// // //   const handlePrevQuestion = () => {
// // //     if (currentQuestion > 0) {
// // //       setCurrentQuestion(currentQuestion - 1);
// // //     }
// // //   };

// // //   const togglePause = () => setPaused(!paused);

// // //   const handleKeyDown = (e) => {
// // //     if (e.key === "ArrowRight") {
// // //       handleNextQuestion();
// // //     }
// // //     if (e.key === "ArrowLeft") {
// // //       handlePrevQuestion();
// // //     }
// // //     if (e.key === "r" || e.key === "R") handleMarkForReview();
// // //   };

// // //   useEffect(() => {
// // //     window.addEventListener("keydown", handleKeyDown);
// // //     return () => window.removeEventListener("keydown", handleKeyDown);
// // //   }, [currentQuestion]);

// // //   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

// // //   return (
// // //     <div
// // //       className={`h-screen flex flex-col overflow-hidden ${
// // //         isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
// // //       }`}
// // //     >
// // //       <Header
// // //         toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
// // //         toggleDarkMode={toggleDarkMode}
// // //         isDarkMode={isDarkMode}
// // //         timer={formatTime(timer)}
// // //         togglePause={togglePause}
// // //         paused={paused}
// // //       />
// // //       <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
// // //         <Sidebar
// // //           totalQuestions={questions.length}
// // //           currentQuestion={currentQuestion}
// // //           markedQuestions={markedQuestions}
// // //           selectedAnswers={selectedAnswers}
// // //           navigateToQuestion={navigateToQuestion}
// // //           isSidebarOpen={isSidebarOpen}
// // //           setIsSidebarOpen={setIsSidebarOpen}
// // //           isDarkMode={isDarkMode}
// // //         />
// // //         <QuestionPanel
// // //           currentQuestion={currentQuestion}
// // //           questions={questions}
// // //           selectedAnswers={selectedAnswers}
// // //           handleOptionSelect={handleOptionSelect}
// // //           isDarkMode={isDarkMode}
// // //           handleNextQuestion={handleNextQuestion}
// // //           handlePrevQuestion={handlePrevQuestion}
// // //         />
// // //       </main>
// // //       <StatsRow
// // //         totalQuestions={totalQuestions}
// // //         selectedAnswers={selectedAnswers}
// // //         markedQuestions={markedQuestions}
// // //         isDarkMode={isDarkMode}
// // //       />
// // //       <FooterControls
// // //         handleMarkForReview={handleMarkForReview}
// // //         showEndModal={showEndModal}
// // //         setShowEndModal={setShowEndModal}
// // //         isDarkMode={isDarkMode}
// // //       />
// // //       <EndModal showEndModal={showEndModal} setShowEndModal={setShowEndModal} />
// // //       {showCustomPopup && (
// // //         <CustomPopup
// // //           onClose={handleCustomPopupClose}
// // //           onLeave={() => router.push("/")}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Page;

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
// //         e.preventDefault();
// //         setShowCustomPopup(true);
// //         e.returnValue = ""; // Prevent default dialog
// //       }
// //     };

// //     window.addEventListener("beforeunload", handleBeforeUnload);

// //     return () => {
// //       window.removeEventListener("beforeunload", handleBeforeUnload);
// //     };
// //   }, [leavePending]);

// //   const handleCustomPopupClose = () => {
// //     setShowCustomPopup(false);
// //   };

// //   const handleLeave = () => {
// //     setLeavePending(true);
// //     router.push("/"); // Navigate to home page
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
// //         <CustomPopup onClose={handleCustomPopupClose} onLeave={handleLeave} />
// //       )}
// //     </div>
// //   );
// // };

// // export default Page;

// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation"; // Correct import for app directory
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

//   const totalQuestions = 100;
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [markedQuestions, setMarkedQuestions] = useState([]);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
//   const [paused, setPaused] = useState(false);
//   const [showEndModal, setShowEndModal] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [showCustomPopup, setShowCustomPopup] = useState(false);
//   const [leavePending, setLeavePending] = useState(false);

//   // Timer logic
//   useEffect(() => {
//     if (!paused) {
//       const interval = setInterval(() => {
//         setTimer((prev) => (prev > 0 ? prev - 1 : 0));
//       }, 1000);
//       if (timer === 60) alert("⚠️ Hurry up! Only 1 minute left.");
//       return () => clearInterval(interval);
//     }
//   }, [paused, timer]);

//   // Handle "beforeunload" event for navigation confirmation
//   useEffect(() => {
//     const handleBeforeUnload = (e) => {
//       if (!leavePending) {
//         setShowCustomPopup(true);
//         e.preventDefault(); // Cancel the default action
//         e.returnValue = ""; // Prompt for confirmation (optional, for older browsers)
//       }
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [leavePending]);

//   const handleCustomPopupClose = () => {
//     setShowCustomPopup(false);
//   };

//   const handleLeave = () => {
//     setLeavePending(true); // Mark the leave action as pending
//     router.replace("/"); // Navigate to the home page or another route
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
//               prev < totalQuestions - 1 ? prev + 1 : prev
//             )
//           }
//           handlePrevQuestion={() =>
//             setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev))
//           }
//         />
//       </main>
//       <StatsRow
//         totalQuestions={totalQuestions}
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
//         <CustomPopup onClose={handleCustomPopupClose} onLeave={handleLeave} />
//       )}
//     </div>
//   );
// };

// export default Page;

"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for app directory
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

  const totalQuestions = 100;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [markedQuestions, setMarkedQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
  const [paused, setPaused] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showCustomPopup, setShowCustomPopup] = useState(false);
  const [leavePending, setLeavePending] = useState(false);

  // Timer logic
  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      if (timer === 60) alert("⚠️ Hurry up! Only 1 minute left.");
      return () => clearInterval(interval);
    }
  }, [paused, timer]);

  // Handle "beforeunload" event for navigation confirmation
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!leavePending) {
        // Prevent default browser popup and trigger custom logic
        e.preventDefault();
        e.returnValue = ""; // This line is needed for some browsers (like Chrome)

        // Show custom popup for navigation warning
        setShowCustomPopup(true);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [leavePending]);

  // Handle custom popup actions
  const handleCustomPopupClose = () => {
    setShowCustomPopup(false); // Close the custom popup
  };

  const handleLeave = () => {
    setLeavePending(true); // Mark that leave action is pending
    setShowCustomPopup(true); // Show custom leave confirmation popup
  };

  const handleConfirmLeave = () => {
    setLeavePending(false); // Mark leave action as confirmed
    setShowCustomPopup(false); // Hide the custom popup
    router.push("/"); // Navigate to the desired page (e.g., home page)
  };

  const handleCancelLeave = () => {
    setLeavePending(false); // Cancel leave action
    setShowCustomPopup(false); // Close the custom popup
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
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
              prev < totalQuestions - 1 ? prev + 1 : prev
            )
          }
          handlePrevQuestion={() =>
            setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev))
          }
        />
      </main>
      <StatsRow
        totalQuestions={totalQuestions}
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
      <EndModal showEndModal={showEndModal} setShowEndModal={setShowEndModal} />
      {showCustomPopup && (
        <CustomPopup
          onClose={handleCancelLeave} // Cancel the leave action
          onLeave={handleConfirmLeave} // Confirm and leave
        />
      )}
    </div>
  );
};

export default Page;
