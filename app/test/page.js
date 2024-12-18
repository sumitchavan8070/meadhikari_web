// // // // // // // // // // // // // "use client"; // This marks the component as a Client Component
// // // // // // // // // // // // // import React, { useState, useEffect } from "react";

// // // // // // // // // // // // // const questions = [
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 1,
// // // // // // // // // // // // //     question:
// // // // // // // // // // // // //       "Match the Modi 3.0 Cabinet Ministers to their respective ministries:",
// // // // // // // // // // // // //     options: [
// // // // // // // // // // // // //       "1-D, 2-C, 3-A, 4-B",
// // // // // // // // // // // // //       "1-A, 2-C, 3-B, 4-D",
// // // // // // // // // // // // //       "1-B, 2-C, 3-A, 4-D",
// // // // // // // // // // // // //       "1-C, 2-A, 3-D, 4-B",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //     listA: [
// // // // // // // // // // // // //       "1. Ashwini Vaishnaw",
// // // // // // // // // // // // //       "2. Shivraj Singh Chouhan",
// // // // // // // // // // // // //       "3. Manohar Lal Khattar",
// // // // // // // // // // // // //       "4. Gajendra Shekhawat",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //     listB: [
// // // // // // // // // // // // //       "A. Minister of Agriculture and Farmers' Welfare",
// // // // // // // // // // // // //       "B. Minister of Culture and Tourism",
// // // // // // // // // // // // //       "C. Minister of Information and Broadcasting and Railways",
// // // // // // // // // // // // //       "D. Minister of Power, along with the Housing and Urban Affairs",
// // // // // // // // // // // // //     ],
// // // // // // // // // // // // //   },
// // // // // // // // // // // // // ];

// // // // // // // // // // // // // const page = () => {
// // // // // // // // // // // // //   const [timeLeft, setTimeLeft] = useState(900); // 15 minutes timer
// // // // // // // // // // // // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // // // // // // // // // // // //   const [selectedOption, setSelectedOption] = useState({});
// // // // // // // // // // // // //   const [visited, setVisited] = useState([]);

// // // // // // // // // // // // //   // Timer Logic
// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const timer = setInterval(() => {
// // // // // // // // // // // // //       setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
// // // // // // // // // // // // //     }, 1000);
// // // // // // // // // // // // //     return () => clearInterval(timer);
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   // Format time
// // // // // // // // // // // // //   const formatTime = (seconds) => {
// // // // // // // // // // // // //     const minutes = Math.floor(seconds / 60);
// // // // // // // // // // // // //     const secs = seconds % 60;
// // // // // // // // // // // // //     return `${minutes.toString().padStart(2, "0")}:${secs
// // // // // // // // // // // // //       .toString()
// // // // // // // // // // // // //       .padStart(2, "0")}`;
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // Handle option selection
// // // // // // // // // // // // //   const handleOptionSelect = (questionId, option) => {
// // // // // // // // // // // // //     setSelectedOption({ ...selectedOption, [questionId]: option });
// // // // // // // // // // // // //     if (!visited.includes(questionId)) setVisited([...visited, questionId]);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="min-h-screen bg-gray-50 p-4">
// // // // // // // // // // // // //       {/* Header */}
// // // // // // // // // // // // //       <div className="flex justify-between items-center bg-blue-500 text-white px-6 py-2 rounded">
// // // // // // // // // // // // //         <h1 className="text-xl font-bold">Take a Test</h1>
// // // // // // // // // // // // //         <div>
// // // // // // // // // // // // //           Time Left:{" "}
// // // // // // // // // // // // //           <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* Question Panel */}
// // // // // // // // // // // // //       <div className="mt-6 grid grid-cols-12 gap-4">
// // // // // // // // // // // // //         {/* Question Section */}
// // // // // // // // // // // // //         <div className="col-span-9 bg-white shadow-md p-6 rounded">
// // // // // // // // // // // // //           <h2 className="text-lg font-semibold mb-4">
// // // // // // // // // // // // //             Question {questions[currentQuestion].id}:{" "}
// // // // // // // // // // // // //             {questions[currentQuestion].question}
// // // // // // // // // // // // //           </h2>

// // // // // // // // // // // // //           {/* Lists */}
// // // // // // // // // // // // //           <div className="grid grid-cols-2 gap-4">
// // // // // // // // // // // // //             <div>
// // // // // // // // // // // // //               <h3 className="font-bold mb-2">List A:</h3>
// // // // // // // // // // // // //               <ul className="list-disc list-inside">
// // // // // // // // // // // // //                 {questions[currentQuestion].listA.map((item, index) => (
// // // // // // // // // // // // //                   <li key={index}>{item}</li>
// // // // // // // // // // // // //                 ))}
// // // // // // // // // // // // //               </ul>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //             <div>
// // // // // // // // // // // // //               <h3 className="font-bold mb-2">List B:</h3>
// // // // // // // // // // // // //               <ul className="list-disc list-inside">
// // // // // // // // // // // // //                 {questions[currentQuestion].listB.map((item, index) => (
// // // // // // // // // // // // //                   <li key={index}>{item}</li>
// // // // // // // // // // // // //                 ))}
// // // // // // // // // // // // //               </ul>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //           {/* Options */}
// // // // // // // // // // // // //           <div className="mt-6">
// // // // // // // // // // // // //             {questions[currentQuestion].options.map((option, index) => (
// // // // // // // // // // // // //               <label
// // // // // // // // // // // // //                 key={index}
// // // // // // // // // // // // //                 className={`block cursor-pointer border p-2 rounded-md ${
// // // // // // // // // // // // //                   selectedOption[questions[currentQuestion].id] === option
// // // // // // // // // // // // //                     ? "bg-blue-200 border-blue-400"
// // // // // // // // // // // // //                     : "hover:bg-gray-100"
// // // // // // // // // // // // //                 }`}
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 <input
// // // // // // // // // // // // //                   type="radio"
// // // // // // // // // // // // //                   name={`question-${questions[currentQuestion].id}`}
// // // // // // // // // // // // //                   value={option}
// // // // // // // // // // // // //                   checked={
// // // // // // // // // // // // //                     selectedOption[questions[currentQuestion].id] === option
// // // // // // // // // // // // //                   }
// // // // // // // // // // // // //                   onChange={() =>
// // // // // // // // // // // // //                     handleOptionSelect(questions[currentQuestion].id, option)
// // // // // // // // // // // // //                   }
// // // // // // // // // // // // //                   className="mr-2"
// // // // // // // // // // // // //                 />
// // // // // // // // // // // // //                 {option}
// // // // // // // // // // // // //               </label>
// // // // // // // // // // // // //             ))}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {/* Navigation Section */}
// // // // // // // // // // // // //         <div className="col-span-3 bg-white shadow-md p-4 rounded">
// // // // // // // // // // // // //           <h3 className="font-semibold mb-4">Question Navigation</h3>
// // // // // // // // // // // // //           <div className="grid grid-cols-5 gap-2">
// // // // // // // // // // // // //             {questions.map((q, index) => (
// // // // // // // // // // // // //               <button
// // // // // // // // // // // // //                 key={q.id}
// // // // // // // // // // // // //                 className={`p-2 rounded ${
// // // // // // // // // // // // //                   visited.includes(q.id)
// // // // // // // // // // // // //                     ? "bg-green-400 text-white"
// // // // // // // // // // // // //                     : "bg-gray-200"
// // // // // // // // // // // // //                 }`}
// // // // // // // // // // // // //                 onClick={() => setCurrentQuestion(index)}
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 {q.id}
// // // // // // // // // // // // //               </button>
// // // // // // // // // // // // //             ))}
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* Action Buttons */}
// // // // // // // // // // // // //       <div className="flex justify-end gap-4 mt-6">
// // // // // // // // // // // // //         <button className="bg-yellow-400 px-4 py-2 rounded text-white hover:bg-yellow-500 transition">
// // // // // // // // // // // // //           Mark for Review & Next
// // // // // // // // // // // // //         </button>
// // // // // // // // // // // // //         <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition">
// // // // // // // // // // // // //           Clear Response
// // // // // // // // // // // // //         </button>
// // // // // // // // // // // // //         <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition">
// // // // // // // // // // // // //           Save & Next
// // // // // // // // // // // // //         </button>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default page;

// // // // // // // // // // // // "use client"; // Mark as Client Component

// // // // // // // // // // // // import React, { useState } from "react";

// // // // // // // // // // // // const page = () => {
// // // // // // // // // // // //   const questions = [
// // // // // // // // // // // //     {
// // // // // // // // // // // //       id: 1,
// // // // // // // // // // // //       question:
// // // // // // // // // // // //         "Match the Modi 3.0 Cabinet Ministers to their respective ministries:",
// // // // // // // // // // // //       options: [
// // // // // // // // // // // //         "1-D, 2-C, 3-A, 4-B",
// // // // // // // // // // // //         "1-A, 2-C, 3-B, 4-D",
// // // // // // // // // // // //         "1-B, 2-C, 3-A, 4-D",
// // // // // // // // // // // //         "1-C, 2-A, 3-D, 4-B",
// // // // // // // // // // // //       ],
// // // // // // // // // // // //     },
// // // // // // // // // // // //     {
// // // // // // // // // // // //       id: 2,
// // // // // // // // // // // //       question: "Who is the Minister of Commerce and Industry in 2024?",
// // // // // // // // // // // //       options: [
// // // // // // // // // // // //         "Amit Shah",
// // // // // // // // // // // //         "Piyush Goyal",
// // // // // // // // // // // //         "Nirmala Sitharaman",
// // // // // // // // // // // //         "Jyotiraditya Scindia",
// // // // // // // // // // // //       ],
// // // // // // // // // // // //     },
// // // // // // // // // // // //     // Add more questions here
// // // // // // // // // // // //   ];

// // // // // // // // // // // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // // // // // // // // // // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // // // // // // // // // // //   const [markedQuestions, setMarkedQuestions] = useState([]);

// // // // // // // // // // // //   // Handle Option Selection
// // // // // // // // // // // //   const handleOptionSelect = (index) => {
// // // // // // // // // // // //     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Handle Navigation
// // // // // // // // // // // //   const navigateToQuestion = (index) => setCurrentQuestion(index);

// // // // // // // // // // // //   // Mark for Review
// // // // // // // // // // // //   const handleMarkForReview = () => {
// // // // // // // // // // // //     if (!markedQuestions.includes(currentQuestion)) {
// // // // // // // // // // // //       setMarkedQuestions([...markedQuestions, currentQuestion]);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   // Render question number buttons
// // // // // // // // // // // //   const renderQuestionNumbers = () => {
// // // // // // // // // // // //     return questions.map((_, index) => (
// // // // // // // // // // // //       <button
// // // // // // // // // // // //         key={index}
// // // // // // // // // // // //         onClick={() => navigateToQuestion(index)}
// // // // // // // // // // // //         className={`w-8 h-8 m-1 rounded-full ${
// // // // // // // // // // // //           currentQuestion === index
// // // // // // // // // // // //             ? "bg-red-500 text-white"
// // // // // // // // // // // //             : markedQuestions.includes(index)
// // // // // // // // // // // //             ? "bg-purple-500 text-white"
// // // // // // // // // // // //             : "bg-gray-300 text-black"
// // // // // // // // // // // //         }`}
// // // // // // // // // // // //       >
// // // // // // // // // // // //         {index + 1}
// // // // // // // // // // // //       </button>
// // // // // // // // // // // //     ));
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="flex h-screen">
// // // // // // // // // // // //       {/* Left Panel - Main Test Area */}
// // // // // // // // // // // //       <div className="flex-1 p-4">
// // // // // // // // // // // //         {/* Header */}
// // // // // // // // // // // //         <div className="flex justify-between items-center mb-4 border-b pb-2">
// // // // // // // // // // // //           <h1 className="text-2xl font-bold">
// // // // // // // // // // // //             Narendra Modi 3.0: Cabinet Minister's Live Test
// // // // // // // // // // // //           </h1>
// // // // // // // // // // // //           <div className="text-gray-500">Time Left: 08:28</div>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Question */}
// // // // // // // // // // // //         <div className="mb-4">
// // // // // // // // // // // //           <h3 className="text-lg font-semibold mb-2">
// // // // // // // // // // // //             Question {currentQuestion + 1}:{" "}
// // // // // // // // // // // //             {questions[currentQuestion].question}
// // // // // // // // // // // //           </h3>
// // // // // // // // // // // //           {/* Options */}
// // // // // // // // // // // //           <ul>
// // // // // // // // // // // //             {questions[currentQuestion].options.map((option, index) => (
// // // // // // // // // // // //               <li key={index} className="mb-2">
// // // // // // // // // // // //                 <label className="flex items-center">
// // // // // // // // // // // //                   <input
// // // // // // // // // // // //                     type="radio"
// // // // // // // // // // // //                     name={`question-${currentQuestion}`}
// // // // // // // // // // // //                     checked={selectedAnswers[currentQuestion] === index}
// // // // // // // // // // // //                     onChange={() => handleOptionSelect(index)}
// // // // // // // // // // // //                     className="mr-2"
// // // // // // // // // // // //                   />
// // // // // // // // // // // //                   {option}
// // // // // // // // // // // //                 </label>
// // // // // // // // // // // //               </li>
// // // // // // // // // // // //             ))}
// // // // // // // // // // // //           </ul>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Navigation Buttons */}
// // // // // // // // // // // //         <div className="flex justify-between mt-4">
// // // // // // // // // // // //           <button
// // // // // // // // // // // //             onClick={handleMarkForReview}
// // // // // // // // // // // //             className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             Mark for Review & Next
// // // // // // // // // // // //           </button>
// // // // // // // // // // // //           <button
// // // // // // // // // // // //             onClick={() => setSelectedAnswers({})}
// // // // // // // // // // // //             className="bg-gray-300 px-4 py-2 rounded"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             Clear Response
// // // // // // // // // // // //           </button>
// // // // // // // // // // // //           <button
// // // // // // // // // // // //             onClick={() =>
// // // // // // // // // // // //               currentQuestion < questions.length - 1
// // // // // // // // // // // //                 ? setCurrentQuestion(currentQuestion + 1)
// // // // // // // // // // // //                 : alert("Test Submitted!")
// // // // // // // // // // // //             }
// // // // // // // // // // // //             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // // // // // //           >
// // // // // // // // // // // //             {currentQuestion < questions.length - 1 ? "Next" : "Submit Test"}
// // // // // // // // // // // //           </button>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Right Panel - Question Navigation */}
// // // // // // // // // // // //       <div className="w-1/4 bg-gray-100 p-4 border-l">
// // // // // // // // // // // //         <h2 className="text-lg font-semibold mb-4">SECTION: Test</h2>
// // // // // // // // // // // //         <div className="grid grid-cols-5 gap-2">{renderQuestionNumbers()}</div>

// // // // // // // // // // // //         {/* Action Buttons */}
// // // // // // // // // // // //         <div className="mt-8">
// // // // // // // // // // // //           <button className="bg-blue-500 text-white px-4 py-2 w-full mb-2 rounded">
// // // // // // // // // // // //             Question Paper
// // // // // // // // // // // //           </button>
// // // // // // // // // // // //           <button className="bg-green-500 text-white px-4 py-2 w-full rounded">
// // // // // // // // // // // //             Submit Test
// // // // // // // // // // // //           </button>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default page;

// // // // // // // // // // // "use client"; // Mark as Client Component

// // // // // // // // // // // import React, { useState } from "react";

// // // // // // // // // // // const page = () => {
// // // // // // // // // // //   const questions = [
// // // // // // // // // // //     {
// // // // // // // // // // //       id: 1,
// // // // // // // // // // //       question:
// // // // // // // // // // //         "Match the Modi 3.0 Cabinet Ministers to their respective ministries:",
// // // // // // // // // // //       options: [
// // // // // // // // // // //         "1-D, 2-C, 3-A, 4-B",
// // // // // // // // // // //         "1-A, 2-C, 3-B, 4-D",
// // // // // // // // // // //         "1-B, 2-C, 3-A, 4-D",
// // // // // // // // // // //         "1-C, 2-A, 3-D, 4-B",
// // // // // // // // // // //       ],
// // // // // // // // // // //     },
// // // // // // // // // // //     {
// // // // // // // // // // //       id: 2,
// // // // // // // // // // //       question: "Who is the Minister of Commerce and Industry in 2024?",
// // // // // // // // // // //       options: [
// // // // // // // // // // //         "Amit Shah",
// // // // // // // // // // //         "Piyush Goyal",
// // // // // // // // // // //         "Nirmala Sitharaman",
// // // // // // // // // // //         "Jyotiraditya Scindia",
// // // // // // // // // // //       ],
// // // // // // // // // // //     },
// // // // // // // // // // //     // Add more questions here
// // // // // // // // // // //   ];

// // // // // // // // // // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // // // // // // // // // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // // // // // // // // // //   const [markedQuestions, setMarkedQuestions] = useState([]);

// // // // // // // // // // //   // Handle Option Selection
// // // // // // // // // // //   const handleOptionSelect = (index) => {
// // // // // // // // // // //     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
// // // // // // // // // // //   };

// // // // // // // // // // //   // Handle Navigation
// // // // // // // // // // //   const navigateToQuestion = (index) => setCurrentQuestion(index);

// // // // // // // // // // //   // Mark for Review
// // // // // // // // // // //   const handleMarkForReview = () => {
// // // // // // // // // // //     if (!markedQuestions.includes(currentQuestion)) {
// // // // // // // // // // //       setMarkedQuestions([...markedQuestions, currentQuestion]);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // Render question number buttons
// // // // // // // // // // //   const renderQuestionNumbers = () => {
// // // // // // // // // // //     return questions.map((_, index) => (
// // // // // // // // // // //       <button
// // // // // // // // // // //         key={index}
// // // // // // // // // // //         onClick={() => navigateToQuestion(index)}
// // // // // // // // // // //         className={`w-8 h-8 m-1 rounded-full ${
// // // // // // // // // // //           currentQuestion === index
// // // // // // // // // // //             ? "bg-red-500 text-white"
// // // // // // // // // // //             : markedQuestions.includes(index)
// // // // // // // // // // //             ? "bg-purple-500 text-white"
// // // // // // // // // // //             : "bg-gray-300 text-black"
// // // // // // // // // // //         }`}
// // // // // // // // // // //       >
// // // // // // // // // // //         {index + 1}
// // // // // // // // // // //       </button>
// // // // // // // // // // //     ));
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="flex h-screen">
// // // // // // // // // // //       {/* Left Panel - Main Test Area */}
// // // // // // // // // // //       <div className="flex-1 p-4">
// // // // // // // // // // //         {/* Header */}
// // // // // // // // // // //         <div className="flex justify-between items-center mb-4 border-b pb-2">
// // // // // // // // // // //           <h1 className="text-2xl font-bold">
// // // // // // // // // // //             Narendra Modi 3.0: Cabinet Minister's Live Test
// // // // // // // // // // //           </h1>
// // // // // // // // // // //           <div className="text-gray-500">Time Left: 08:28</div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Question */}
// // // // // // // // // // //         <div className="mb-4">
// // // // // // // // // // //           <h3 className="text-lg font-semibold mb-2">
// // // // // // // // // // //             Question {currentQuestion + 1}:{" "}
// // // // // // // // // // //             {questions[currentQuestion].question}
// // // // // // // // // // //           </h3>
// // // // // // // // // // //           {/* Options */}
// // // // // // // // // // //           <ul>
// // // // // // // // // // //             {questions[currentQuestion].options.map((option, index) => (
// // // // // // // // // // //               <li key={index} className="mb-2">
// // // // // // // // // // //                 <label className="flex items-center">
// // // // // // // // // // //                   <input
// // // // // // // // // // //                     type="radio"
// // // // // // // // // // //                     name={`question-${currentQuestion}`}
// // // // // // // // // // //                     checked={selectedAnswers[currentQuestion] === index}
// // // // // // // // // // //                     onChange={() => handleOptionSelect(index)}
// // // // // // // // // // //                     className="mr-2"
// // // // // // // // // // //                   />
// // // // // // // // // // //                   {option}
// // // // // // // // // // //                 </label>
// // // // // // // // // // //               </li>
// // // // // // // // // // //             ))}
// // // // // // // // // // //           </ul>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Navigation Buttons */}
// // // // // // // // // // //         <div className="flex justify-between mt-4">
// // // // // // // // // // //           <button
// // // // // // // // // // //             onClick={handleMarkForReview}
// // // // // // // // // // //             className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
// // // // // // // // // // //           >
// // // // // // // // // // //             Mark for Review & Next
// // // // // // // // // // //           </button>
// // // // // // // // // // //           <button
// // // // // // // // // // //             onClick={() => setSelectedAnswers({})}
// // // // // // // // // // //             className="bg-gray-300 px-4 py-2 rounded"
// // // // // // // // // // //           >
// // // // // // // // // // //             Clear Response
// // // // // // // // // // //           </button>
// // // // // // // // // // //           <button
// // // // // // // // // // //             onClick={() =>
// // // // // // // // // // //               currentQuestion < questions.length - 1
// // // // // // // // // // //                 ? setCurrentQuestion(currentQuestion + 1)
// // // // // // // // // // //                 : alert("Test Submitted!")
// // // // // // // // // // //             }
// // // // // // // // // // //             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // // // // //           >
// // // // // // // // // // //             {currentQuestion < questions.length - 1 ? "Next" : "Submit Test"}
// // // // // // // // // // //           </button>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Right Panel - Question Navigation */}
// // // // // // // // // // //       <div className="w-1/4 bg-gray-100 p-4 border-l">
// // // // // // // // // // //         <h2 className="text-lg font-semibold mb-4">SECTION: Test</h2>
// // // // // // // // // // //         <div className="grid grid-cols-5 gap-2">{renderQuestionNumbers()}</div>

// // // // // // // // // // //         {/* Action Buttons */}
// // // // // // // // // // //         <div className="mt-8">
// // // // // // // // // // //           <button className="bg-blue-500 text-white px-4 py-2 w-full mb-2 rounded">
// // // // // // // // // // //             Question Paper
// // // // // // // // // // //           </button>
// // // // // // // // // // //           <button className="bg-green-500 text-white px-4 py-2 w-full rounded">
// // // // // // // // // // //             Submit Test
// // // // // // // // // // //           </button>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default page;

// // // // // // // // // // "use client";
// // // // // // // // // // import React, { useState, useEffect } from "react";

// // // // // // // // // // const page = () => {
// // // // // // // // // //   const questions = [
// // // // // // // // // //     {
// // // // // // // // // //       id: 1,
// // // // // // // // // //       question:
// // // // // // // // // //         "Match the Modi 3.0 Cabinet Ministers to their respective ministries:",
// // // // // // // // // //       options: [
// // // // // // // // // //         "1-D, 2-C, 3-A, 4-B",
// // // // // // // // // //         "1-A, 2-C, 3-B, 4-D",
// // // // // // // // // //         "1-B, 2-C, 3-A, 4-D",
// // // // // // // // // //         "1-C, 2-A, 3-D, 4-B",
// // // // // // // // // //       ],
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       id: 2,
// // // // // // // // // //       question: "Who is the Minister of Commerce and Industry in 2024?",
// // // // // // // // // //       options: [
// // // // // // // // // //         "Amit Shah",
// // // // // // // // // //         "Piyush Goyal",
// // // // // // // // // //         "Nirmala Sitharaman",
// // // // // // // // // //         "Jyotiraditya Scindia",
// // // // // // // // // //       ],
// // // // // // // // // //     },
// // // // // // // // // //     // Add more questions here...
// // // // // // // // // //   ];

// // // // // // // // // //   const totalQuestions = 25;
// // // // // // // // // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // // // // // // // // //   const [markedQuestions, setMarkedQuestions] = useState([]);
// // // // // // // // // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // // // // // // // // //   const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
// // // // // // // // // //   const [paused, setPaused] = useState(false);
// // // // // // // // // //   const [showInstructions, setShowInstructions] = useState(false);

// // // // // // // // // //   // Timer logic
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (!paused) {
// // // // // // // // // //       const interval = setInterval(() => {
// // // // // // // // // //         setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// // // // // // // // // //       }, 1000);
// // // // // // // // // //       return () => clearInterval(interval);
// // // // // // // // // //     }
// // // // // // // // // //   }, [paused]);

// // // // // // // // // //   const formatTime = (time) => {
// // // // // // // // // //     const minutes = Math.floor(time / 60);
// // // // // // // // // //     const seconds = time % 60;
// // // // // // // // // //     return `${minutes.toString().padStart(2, "0")}:${seconds
// // // // // // // // // //       .toString()
// // // // // // // // // //       .padStart(2, "0")}`;
// // // // // // // // // //   };

// // // // // // // // // //   const handleOptionSelect = (index) => {
// // // // // // // // // //     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
// // // // // // // // // //   };

// // // // // // // // // //   const handleMarkForReview = () => {
// // // // // // // // // //     if (!markedQuestions.includes(currentQuestion)) {
// // // // // // // // // //       setMarkedQuestions([...markedQuestions, currentQuestion]);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const navigateToQuestion = (index) => setCurrentQuestion(index);

// // // // // // // // // //   const togglePause = () => setPaused(!paused);

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="flex flex-col h-screen">
// // // // // // // // // //       {/* Header */}
// // // // // // // // // //       <div className="flex justify-between items-center px-5 py-3 bg-gray-200 border-b">
// // // // // // // // // //         <h2 className="text-lg font-semibold text-gray-700">
// // // // // // // // // //           Narendra Modi 3.0: Cabinet Minister's Live Test
// // // // // // // // // //         </h2>
// // // // // // // // // //         <div className="flex space-x-3 items-center">
// // // // // // // // // //           <div className="text-gray-600 font-medium">
// // // // // // // // // //             <strong>Time Left:</strong> {formatTime(timer)}
// // // // // // // // // //           </div>
// // // // // // // // // //           <button
// // // // // // // // // //             onClick={() => document.documentElement.requestFullscreen()}
// // // // // // // // // //             className="bg-blue-500 text-white px-3 py-1 rounded"
// // // // // // // // // //           >
// // // // // // // // // //             Enter Full Screen
// // // // // // // // // //           </button>
// // // // // // // // // //           <button
// // // // // // // // // //             onClick={togglePause}
// // // // // // // // // //             className="bg-yellow-500 text-white px-3 py-1 rounded"
// // // // // // // // // //           >
// // // // // // // // // //             {paused ? "Resume" : "Pause"}
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Main Content */}
// // // // // // // // // //       <div className="flex flex-1">
// // // // // // // // // //         {/* Left Panel */}
// // // // // // // // // //         <div className="flex-1 p-5">
// // // // // // // // // //           <h3 className="text-lg font-semibold mb-2">
// // // // // // // // // //             Question No. {currentQuestion + 1}
// // // // // // // // // //           </h3>
// // // // // // // // // //           <p className="text-gray-700 mb-4">
// // // // // // // // // //             {questions[currentQuestion]?.question}
// // // // // // // // // //           </p>
// // // // // // // // // //           <ul className="space-y-3">
// // // // // // // // // //             {questions[currentQuestion]?.options.map((option, index) => (
// // // // // // // // // //               <li key={index} className="flex items-center space-x-2">
// // // // // // // // // //                 <input
// // // // // // // // // //                   type="radio"
// // // // // // // // // //                   name={`question-${currentQuestion}`}
// // // // // // // // // //                   checked={selectedAnswers[currentQuestion] === index}
// // // // // // // // // //                   onChange={() => handleOptionSelect(index)}
// // // // // // // // // //                   className="w-4 h-4"
// // // // // // // // // //                 />
// // // // // // // // // //                 <span>{option}</span>
// // // // // // // // // //               </li>
// // // // // // // // // //             ))}
// // // // // // // // // //           </ul>
// // // // // // // // // //           <div className="flex justify-between mt-5">
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={handleMarkForReview}
// // // // // // // // // //               className="bg-purple-700 text-white px-4 py-2 rounded"
// // // // // // // // // //             >
// // // // // // // // // //               Mark for Review & Next
// // // // // // // // // //             </button>
// // // // // // // // // //             <button className="bg-gray-400 text-white px-4 py-2 rounded">
// // // // // // // // // //               Clear Response
// // // // // // // // // //             </button>
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={() =>
// // // // // // // // // //                 setCurrentQuestion((prev) =>
// // // // // // // // // //                   Math.min(prev + 1, totalQuestions - 1)
// // // // // // // // // //                 )
// // // // // // // // // //               }
// // // // // // // // // //               className="bg-blue-600 text-white px-4 py-2 rounded"
// // // // // // // // // //             >
// // // // // // // // // //               Save & Next
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Right Panel */}
// // // // // // // // // //         <div className="w-1/4 bg-blue-50 p-5">
// // // // // // // // // //           <h4 className="font-bold mb-3">SECTION: Test</h4>
// // // // // // // // // //           <div className="grid grid-cols-5 gap-2">
// // // // // // // // // //             {[...Array(totalQuestions)].map((_, index) => (
// // // // // // // // // //               <button
// // // // // // // // // //                 key={index}
// // // // // // // // // //                 onClick={() => navigateToQuestion(index)}
// // // // // // // // // //                 className={`w-10 h-10 rounded-full text-white font-semibold ${
// // // // // // // // // //                   currentQuestion === index
// // // // // // // // // //                     ? "bg-red-600"
// // // // // // // // // //                     : markedQuestions.includes(index)
// // // // // // // // // //                     ? "bg-purple-600"
// // // // // // // // // //                     : selectedAnswers[index] !== undefined
// // // // // // // // // //                     ? "bg-green-600"
// // // // // // // // // //                     : "bg-gray-300"
// // // // // // // // // //                 }`}
// // // // // // // // // //               >
// // // // // // // // // //                 {index + 1}
// // // // // // // // // //               </button>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="mt-5 space-y-2">
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={() => setShowInstructions(true)}
// // // // // // // // // //               className="w-full bg-blue-600 text-white px-4 py-2 rounded"
// // // // // // // // // //             >
// // // // // // // // // //               Instructions
// // // // // // // // // //             </button>
// // // // // // // // // //             <button className="w-full bg-green-600 text-white px-4 py-2 rounded">
// // // // // // // // // //               Submit Test
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Instructions Modal */}
// // // // // // // // // //       {showInstructions && (
// // // // // // // // // //         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
// // // // // // // // // //           <div className="bg-white p-5 rounded-lg max-w-md w-full">
// // // // // // // // // //             <h2 className="text-xl font-bold mb-3">Instructions</h2>
// // // // // // // // // //             <p className="text-gray-600 mb-4">
// // // // // // // // // //               - Read all questions carefully before answering. <br />
// // // // // // // // // //               - Use the navigation panel to switch between questions. <br />-
// // // // // // // // // //               Review your answers before submitting the test.
// // // // // // // // // //             </p>
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={() => setShowInstructions(false)}
// // // // // // // // // //               className="bg-blue-500 text-white px-4 py-2 rounded"
// // // // // // // // // //             >
// // // // // // // // // //               Close
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default page;

// // // // // // // // // // "use client";
// // // // // // // // // // import React, { useState, useEffect } from "react";

// // // // // // // // // // const page = () => {
// // // // // // // // // //   const questions = [
// // // // // // // // // //     {
// // // // // // // // // //       id: 1,
// // // // // // // // // //       question:
// // // // // // // // // //         "Match the Modi 3.0 Cabinet Ministers to their respective ministries:",
// // // // // // // // // //       options: [
// // // // // // // // // //         "1-D, 2-C, 3-A, 4-B",
// // // // // // // // // //         "1-A, 2-C, 3-B, 4-D",
// // // // // // // // // //         "1-B, 2-C, 3-A, 4-D",
// // // // // // // // // //         "1-C, 2-A, 3-D, 4-B",
// // // // // // // // // //       ],
// // // // // // // // // //     },
// // // // // // // // // //     {
// // // // // // // // // //       id: 2,
// // // // // // // // // //       question: "Who is the Minister of Commerce and Industry in 2024?",
// // // // // // // // // //       options: [
// // // // // // // // // //         "Amit Shah",
// // // // // // // // // //         "Piyush Goyal",
// // // // // // // // // //         "Nirmala Sitharaman",
// // // // // // // // // //         "Jyotiraditya Scindia",
// // // // // // // // // //       ],
// // // // // // // // // //     },
// // // // // // // // // //     // Add more questions here...
// // // // // // // // // //   ];

// // // // // // // // // //   const totalQuestions = 25;
// // // // // // // // // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // // // // // // // // //   const [markedQuestions, setMarkedQuestions] = useState([]);
// // // // // // // // // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // // // // // // // // //   const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
// // // // // // // // // //   const [paused, setPaused] = useState(false);
// // // // // // // // // //   const [showInstructions, setShowInstructions] = useState(false);
// // // // // // // // // //   const [showEndModal, setShowEndModal] = useState(false);

// // // // // // // // // //   // Timer logic
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (!paused) {
// // // // // // // // // //       const interval = setInterval(() => {
// // // // // // // // // //         setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// // // // // // // // // //       }, 1000);
// // // // // // // // // //       if (timer === 60) alert("⚠️ Hurry up! Only 1 minute left.");
// // // // // // // // // //       return () => clearInterval(interval);
// // // // // // // // // //     }
// // // // // // // // // //   }, [paused, timer]);

// // // // // // // // // //   const formatTime = (time) => {
// // // // // // // // // //     const minutes = Math.floor(time / 60);
// // // // // // // // // //     const seconds = time % 60;
// // // // // // // // // //     return `${minutes.toString().padStart(2, "0")}:${seconds
// // // // // // // // // //       .toString()
// // // // // // // // // //       .padStart(2, "0")}`;
// // // // // // // // // //   };

// // // // // // // // // //   const handleOptionSelect = (index) => {
// // // // // // // // // //     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
// // // // // // // // // //   };

// // // // // // // // // //   const handleMarkForReview = () => {
// // // // // // // // // //     if (!markedQuestions.includes(currentQuestion)) {
// // // // // // // // // //       setMarkedQuestions([...markedQuestions, currentQuestion]);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const navigateToQuestion = (index) => setCurrentQuestion(index);

// // // // // // // // // //   const togglePause = () => setPaused(!paused);

// // // // // // // // // //   const handleKeyDown = (e) => {
// // // // // // // // // //     if (e.key === "ArrowRight") {
// // // // // // // // // //       setCurrentQuestion((prev) => Math.min(prev + 1, totalQuestions - 1));
// // // // // // // // // //     }
// // // // // // // // // //     if (e.key === "ArrowLeft") {
// // // // // // // // // //       setCurrentQuestion((prev) => Math.max(prev - 1, 0));
// // // // // // // // // //     }
// // // // // // // // // //     if (e.key === "r" || e.key === "R") handleMarkForReview();
// // // // // // // // // //   };

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     window.addEventListener("keydown", handleKeyDown);
// // // // // // // // // //     return () => window.removeEventListener("keydown", handleKeyDown);
// // // // // // // // // //   }, [currentQuestion]);

// // // // // // // // // //   const summary = {
// // // // // // // // // //     answered: Object.keys(selectedAnswers).length,
// // // // // // // // // //     notVisited:
// // // // // // // // // //       totalQuestions -
// // // // // // // // // //       Object.keys(selectedAnswers).length -
// // // // // // // // // //       markedQuestions.length,
// // // // // // // // // //     marked: markedQuestions.length,
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="flex flex-col h-screen">
// // // // // // // // // //       {/* Header */}
// // // // // // // // // //       <div className="flex justify-between items-center px-5 py-3 bg-gray-200 shadow-md">
// // // // // // // // // //         <h2 className="text-xl font-bold text-blue-700">
// // // // // // // // // //           Narendra Modi 3.0: Cabinet Minister's Live Test
// // // // // // // // // //         </h2>
// // // // // // // // // //         <div className="flex space-x-4 items-center">
// // // // // // // // // //           <div className="text-gray-700 font-semibold">
// // // // // // // // // //             <span className="text-gray-600">Time Left:</span>{" "}
// // // // // // // // // //             {formatTime(timer)}
// // // // // // // // // //           </div>
// // // // // // // // // //           <button
// // // // // // // // // //             onClick={() => document.documentElement.requestFullscreen()}
// // // // // // // // // //             className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded shadow"
// // // // // // // // // //           >
// // // // // // // // // //             Full Screen
// // // // // // // // // //           </button>
// // // // // // // // // //           <button
// // // // // // // // // //             onClick={togglePause}
// // // // // // // // // //             className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded shadow"
// // // // // // // // // //           >
// // // // // // // // // //             {paused ? "Resume" : "Pause"}
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Summary */}
// // // // // // // // // //       <div className="flex justify-around bg-gray-100 py-3 text-gray-600 border-b">
// // // // // // // // // //         <span>✅ Answered: {summary.answered}</span>
// // // // // // // // // //         <span>📌 Marked for Review: {summary.marked}</span>
// // // // // // // // // //         <span>🚫 Not Visited: {summary.notVisited}</span>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Main Content */}
// // // // // // // // // //       <div className="flex flex-1">
// // // // // // // // // //         {/* Left Panel */}
// // // // // // // // // //         <div className="flex-1 p-5">
// // // // // // // // // //           <h3 className="text-lg font-bold mb-3">
// // // // // // // // // //             Question {currentQuestion + 1}
// // // // // // // // // //           </h3>
// // // // // // // // // //           <p className="mb-5 text-gray-800">
// // // // // // // // // //             {questions[currentQuestion]?.question}
// // // // // // // // // //           </p>
// // // // // // // // // //           <ul className="space-y-4">
// // // // // // // // // //             {questions[currentQuestion]?.options.map((option, index) => (
// // // // // // // // // //               <li key={index} className="flex items-center space-x-2">
// // // // // // // // // //                 <input
// // // // // // // // // //                   type="radio"
// // // // // // // // // //                   checked={selectedAnswers[currentQuestion] === index}
// // // // // // // // // //                   onChange={() => handleOptionSelect(index)}
// // // // // // // // // //                   className="w-5 h-5"
// // // // // // // // // //                 />
// // // // // // // // // //                 <span className="text-gray-700">{option}</span>
// // // // // // // // // //               </li>
// // // // // // // // // //             ))}
// // // // // // // // // //           </ul>
// // // // // // // // // //           <div className="flex justify-between mt-6">
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={handleMarkForReview}
// // // // // // // // // //               className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded"
// // // // // // // // // //             >
// // // // // // // // // //               Mark for Review
// // // // // // // // // //             </button>
// // // // // // // // // //             <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">
// // // // // // // // // //               Clear
// // // // // // // // // //             </button>
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={() => navigateToQuestion(currentQuestion + 1)}
// // // // // // // // // //               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
// // // // // // // // // //             >
// // // // // // // // // //               Next
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Right Panel */}
// // // // // // // // // //         <div className="w-1/4 bg-gray-50 p-4 border-l">
// // // // // // // // // //           <h4 className="font-bold text-gray-700 mb-4">Questions</h4>
// // // // // // // // // //           <div className="grid grid-cols-5 gap-2">
// // // // // // // // // //             {[...Array(totalQuestions)].map((_, index) => (
// // // // // // // // // //               <button
// // // // // // // // // //                 key={index}
// // // // // // // // // //                 onClick={() => navigateToQuestion(index)}
// // // // // // // // // //                 className={`w-10 h-10 text-white rounded shadow ${
// // // // // // // // // //                   currentQuestion === index
// // // // // // // // // //                     ? "bg-red-600"
// // // // // // // // // //                     : markedQuestions.includes(index)
// // // // // // // // // //                     ? "bg-purple-600"
// // // // // // // // // //                     : selectedAnswers[index] !== undefined
// // // // // // // // // //                     ? "bg-green-600"
// // // // // // // // // //                     : "bg-gray-400"
// // // // // // // // // //                 }`}
// // // // // // // // // //               >
// // // // // // // // // //                 {index + 1}
// // // // // // // // // //               </button>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* End Test Modal */}
// // // // // // // // // //       {showEndModal && (
// // // // // // // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// // // // // // // // // //           <div className="bg-white p-6 rounded shadow-lg">
// // // // // // // // // //             <h2 className="text-xl font-bold mb-4">Submit Test</h2>
// // // // // // // // // //             <p>Are you sure you want to submit the test?</p>
// // // // // // // // // //             <div className="mt-4 flex justify-end space-x-3">
// // // // // // // // // //               <button
// // // // // // // // // //                 onClick={() => setShowEndModal(false)}
// // // // // // // // // //                 className="text-gray-500"
// // // // // // // // // //               >
// // // // // // // // // //                 Cancel
// // // // // // // // // //               </button>
// // // // // // // // // //               <button className="bg-red-600 text-white px-4 py-2 rounded">
// // // // // // // // // //                 Submit
// // // // // // // // // //               </button>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default page;

// // // // // // // // // "use client";
// // // // // // // // // import React, { useState, useEffect } from "react";

// // // // // // // // // const Page = () => {
// // // // // // // // //   const totalQuestions = 100; // Updated to 100 questions
// // // // // // // // //   const questions = [...Array(totalQuestions)].map((_, idx) => ({
// // // // // // // // //     id: idx + 1,
// // // // // // // // //     question: `Question ${idx + 1}: Sample question text here.`,
// // // // // // // // //     options: ["Option A", "Option B", "Option C", "Option D"],
// // // // // // // // //   }));

// // // // // // // // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // // // // // // // //   const [markedQuestions, setMarkedQuestions] = useState([]);
// // // // // // // // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // // // // // // // //   const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
// // // // // // // // //   const [paused, setPaused] = useState(false);
// // // // // // // // //   const [showEndModal, setShowEndModal] = useState(false);

// // // // // // // // //   // Timer logic
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (!paused) {
// // // // // // // // //       const interval = setInterval(() => {
// // // // // // // // //         setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// // // // // // // // //       }, 1000);
// // // // // // // // //       if (timer === 60) alert("⚠️ Hurry up! Only 1 minute left.");
// // // // // // // // //       return () => clearInterval(interval);
// // // // // // // // //     }
// // // // // // // // //   }, [paused, timer]);

// // // // // // // // //   const formatTime = (time) => {
// // // // // // // // //     const minutes = Math.floor(time / 60);
// // // // // // // // //     const seconds = time % 60;
// // // // // // // // //     return `${minutes.toString().padStart(2, "0")}:${seconds
// // // // // // // // //       .toString()
// // // // // // // // //       .padStart(2, "0")}`;
// // // // // // // // //   };

// // // // // // // // //   const handleOptionSelect = (index) => {
// // // // // // // // //     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
// // // // // // // // //   };

// // // // // // // // //   const handleMarkForReview = () => {
// // // // // // // // //     if (!markedQuestions.includes(currentQuestion)) {
// // // // // // // // //       setMarkedQuestions([...markedQuestions, currentQuestion]);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const navigateToQuestion = (index) => setCurrentQuestion(index);

// // // // // // // // //   const togglePause = () => setPaused(!paused);

// // // // // // // // //   const handleKeyDown = (e) => {
// // // // // // // // //     if (e.key === "ArrowRight") {
// // // // // // // // //       setCurrentQuestion((prev) => Math.min(prev + 1, totalQuestions - 1));
// // // // // // // // //     }
// // // // // // // // //     if (e.key === "ArrowLeft") {
// // // // // // // // //       setCurrentQuestion((prev) => Math.max(prev - 1, 0));
// // // // // // // // //     }
// // // // // // // // //     if (e.key === "r" || e.key === "R") handleMarkForReview();
// // // // // // // // //   };

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     window.addEventListener("keydown", handleKeyDown);
// // // // // // // // //     return () => window.removeEventListener("keydown", handleKeyDown);
// // // // // // // // //   }, [currentQuestion]);

// // // // // // // // //   const summary = {
// // // // // // // // //     answered: Object.keys(selectedAnswers).length,
// // // // // // // // //     marked: markedQuestions.length,
// // // // // // // // //   };

// // // // // // // // //   const handleSubmitTest = () => {
// // // // // // // // //     setShowEndModal(true);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="flex flex-col h-screen">
// // // // // // // // //       {/* Header */}
// // // // // // // // //       <div className="flex justify-between items-center px-5 py-3 bg-gray-200 shadow-md">
// // // // // // // // //         <h2 className="text-xl font-bold text-blue-700">
// // // // // // // // //           Narendra Modi 3.0: Cabinet Minister's Live Test
// // // // // // // // //         </h2>
// // // // // // // // //         <div className="flex space-x-4 items-center">
// // // // // // // // //           <div className="text-gray-700 font-semibold">
// // // // // // // // //             <span className="text-gray-600">Time Left:</span>{" "}
// // // // // // // // //             {formatTime(timer)}
// // // // // // // // //           </div>
// // // // // // // // //           <button
// // // // // // // // //             onClick={() => document.documentElement.requestFullscreen()}
// // // // // // // // //             className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded shadow"
// // // // // // // // //           >
// // // // // // // // //             Full Screen
// // // // // // // // //           </button>
// // // // // // // // //           <button
// // // // // // // // //             onClick={togglePause}
// // // // // // // // //             className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded shadow"
// // // // // // // // //           >
// // // // // // // // //             {paused ? "Resume" : "Pause"}
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Summary */}
// // // // // // // // //       <div className="flex justify-around bg-gray-100 py-3 text-gray-600 border-b">
// // // // // // // // //         <span>✅ Answered: {summary.answered}</span>
// // // // // // // // //         <span>📌 Marked for Review: {summary.marked}</span>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Main Content */}
// // // // // // // // //       <div className="flex flex-1">
// // // // // // // // //         {/* Left Panel */}
// // // // // // // // //         <div className="flex-1 p-5">
// // // // // // // // //           <h3 className="text-lg font-bold mb-3">
// // // // // // // // //             Question {currentQuestion + 1}
// // // // // // // // //           </h3>
// // // // // // // // //           <p className="mb-5 text-gray-800">
// // // // // // // // //             {questions[currentQuestion]?.question}
// // // // // // // // //           </p>
// // // // // // // // //           <ul className="space-y-4">
// // // // // // // // //             {questions[currentQuestion]?.options.map((option, index) => (
// // // // // // // // //               <li key={index} className="flex items-center space-x-2">
// // // // // // // // //                 <input
// // // // // // // // //                   type="radio"
// // // // // // // // //                   checked={selectedAnswers[currentQuestion] === index}
// // // // // // // // //                   onChange={() => handleOptionSelect(index)}
// // // // // // // // //                   className="w-5 h-5"
// // // // // // // // //                 />
// // // // // // // // //                 <span className="text-gray-700">{option}</span>
// // // // // // // // //               </li>
// // // // // // // // //             ))}
// // // // // // // // //           </ul>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Right Panel */}
// // // // // // // // //         <div className="w-1/4 bg-gray-50 p-4 border-l">
// // // // // // // // //           <h4 className="font-bold text-gray-700 mb-4">Questions</h4>
// // // // // // // // //           <div className="grid grid-cols-5 gap-2">
// // // // // // // // //             {[...Array(totalQuestions)].map((_, index) => (
// // // // // // // // //               <button
// // // // // // // // //                 key={index}
// // // // // // // // //                 onClick={() => navigateToQuestion(index)}
// // // // // // // // //                 className={`w-10 h-10 text-white rounded shadow ${
// // // // // // // // //                   currentQuestion === index
// // // // // // // // //                     ? "bg-red-600"
// // // // // // // // //                     : markedQuestions.includes(index)
// // // // // // // // //                     ? "bg-purple-600"
// // // // // // // // //                     : selectedAnswers[index] !== undefined
// // // // // // // // //                     ? "bg-green-600"
// // // // // // // // //                     : "bg-gray-400"
// // // // // // // // //                 }`}
// // // // // // // // //               >
// // // // // // // // //                 {index + 1}
// // // // // // // // //               </button>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Buttons at the Bottom */}
// // // // // // // // //       <div className="flex justify-between px-5 py-3 bg-gray-200 shadow-md">
// // // // // // // // //         <div className="space-x-4">
// // // // // // // // //           <button
// // // // // // // // //             onClick={handleMarkForReview}
// // // // // // // // //             className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded"
// // // // // // // // //           >
// // // // // // // // //             Mark for Review
// // // // // // // // //           </button>
// // // // // // // // //           <button
// // // // // // // // //             onClick={() => navigateToQuestion(currentQuestion - 1)}
// // // // // // // // //             className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
// // // // // // // // //           >
// // // // // // // // //             Clear
// // // // // // // // //           </button>
// // // // // // // // //           <button
// // // // // // // // //             onClick={() => navigateToQuestion(currentQuestion + 1)}
// // // // // // // // //             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
// // // // // // // // //           >
// // // // // // // // //             Next
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //         <button
// // // // // // // // //           onClick={handleSubmitTest}
// // // // // // // // //           className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
// // // // // // // // //         >
// // // // // // // // //           Submit Test
// // // // // // // // //         </button>
// // // // // // // // //       </div>

// // // // // // // // //       {/* End Test Modal */}
// // // // // // // // //       {showEndModal && (
// // // // // // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// // // // // // // // //           <div className="bg-white p-6 rounded shadow-lg">
// // // // // // // // //             <h2 className="text-xl font-bold mb-4">Submit Test</h2>
// // // // // // // // //             <p>Are you sure you want to submit the test?</p>
// // // // // // // // //             <div className="mt-4 flex justify-end space-x-3">
// // // // // // // // //               <button
// // // // // // // // //                 onClick={() => setShowEndModal(false)}
// // // // // // // // //                 className="text-gray-500"
// // // // // // // // //               >
// // // // // // // // //                 Cancel
// // // // // // // // //               </button>
// // // // // // // // //               <button className="bg-red-600 text-white px-4 py-2 rounded">
// // // // // // // // //                 Submit
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Page;

// // // // // // // // "use client";
// // // // // // // // import React, { useState, useEffect } from "react";

// // // // // // // // const Page = () => {
// // // // // // // //   const totalQuestions = 100; // Updated to 100 questions
// // // // // // // //   const questions = [...Array(totalQuestions)].map((_, idx) => ({
// // // // // // // //     id: idx + 1,
// // // // // // // //     question: `Question ${idx + 1}: Sample question text here.`,
// // // // // // // //     options: ["Option A", "Option B", "Option C", "Option D"],
// // // // // // // //   }));

// // // // // // // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // // // // // // //   const [markedQuestions, setMarkedQuestions] = useState([]);
// // // // // // // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // // // // // // //   const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
// // // // // // // //   const [paused, setPaused] = useState(false);
// // // // // // // //   const [showEndModal, setShowEndModal] = useState(false);

// // // // // // // //   // Timer logic
// // // // // // // //   useEffect(() => {
// // // // // // // //     if (!paused) {
// // // // // // // //       const interval = setInterval(() => {
// // // // // // // //         setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// // // // // // // //       }, 1000);
// // // // // // // //       if (timer === 60) alert("⚠️ Hurry up! Only 1 minute left.");
// // // // // // // //       return () => clearInterval(interval);
// // // // // // // //     }
// // // // // // // //   }, [paused, timer]);

// // // // // // // //   const formatTime = (time) => {
// // // // // // // //     const minutes = Math.floor(time / 60);
// // // // // // // //     const seconds = time % 60;
// // // // // // // //     return `${minutes.toString().padStart(2, "0")}:${seconds
// // // // // // // //       .toString()
// // // // // // // //       .padStart(2, "0")}`;
// // // // // // // //   };

// // // // // // // //   const handleOptionSelect = (index) => {
// // // // // // // //     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
// // // // // // // //   };

// // // // // // // //   const handleMarkForReview = () => {
// // // // // // // //     if (!markedQuestions.includes(currentQuestion)) {
// // // // // // // //       setMarkedQuestions([...markedQuestions, currentQuestion]);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const navigateToQuestion = (index) => setCurrentQuestion(index);

// // // // // // // //   const togglePause = () => setPaused(!paused);

// // // // // // // //   const handleKeyDown = (e) => {
// // // // // // // //     if (e.key === "ArrowRight") {
// // // // // // // //       setCurrentQuestion((prev) => Math.min(prev + 1, totalQuestions - 1));
// // // // // // // //     }
// // // // // // // //     if (e.key === "ArrowLeft") {
// // // // // // // //       setCurrentQuestion((prev) => Math.max(prev - 1, 0));
// // // // // // // //     }
// // // // // // // //     if (e.key === "r" || e.key === "R") handleMarkForReview();
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     window.addEventListener("keydown", handleKeyDown);
// // // // // // // //     return () => window.removeEventListener("keydown", handleKeyDown);
// // // // // // // //   }, [currentQuestion]);

// // // // // // // //   const summary = {
// // // // // // // //     answered: Object.keys(selectedAnswers).length,
// // // // // // // //     marked: markedQuestions.length,
// // // // // // // //   };

// // // // // // // //   const handleSubmitTest = () => {
// // // // // // // //     setShowEndModal(true);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="flex flex-col h-screen">
// // // // // // // //       {/* Header */}
// // // // // // // //       <div className="flex justify-between items-center px-5 py-3 bg-gray-200 shadow-md">
// // // // // // // //         <h2 className="text-xl font-bold text-blue-700">
// // // // // // // //           Narendra Modi 3.0: Cabinet Minister's Live Test
// // // // // // // //         </h2>
// // // // // // // //         <div className="flex space-x-4 items-center">
// // // // // // // //           <div className="text-gray-700 font-semibold">
// // // // // // // //             <span className="text-gray-600">Time Left:</span>{" "}
// // // // // // // //             {formatTime(timer)}
// // // // // // // //           </div>
// // // // // // // //           <button
// // // // // // // //             onClick={() => document.documentElement.requestFullscreen()}
// // // // // // // //             className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded shadow"
// // // // // // // //           >
// // // // // // // //             Full Screen
// // // // // // // //           </button>
// // // // // // // //           <button
// // // // // // // //             onClick={togglePause}
// // // // // // // //             className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded shadow"
// // // // // // // //           >
// // // // // // // //             {paused ? "Resume" : "Pause"}
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Summary */}
// // // // // // // //       <div className="flex justify-around bg-gray-100 py-3 text-gray-600 border-b">
// // // // // // // //         <span>✅ Answered: {summary.answered}</span>
// // // // // // // //         <span>📌 Marked for Review: {summary.marked}</span>
// // // // // // // //       </div>

// // // // // // // //       {/* Main Content */}
// // // // // // // //       <div className="flex flex-1">
// // // // // // // //         {/* Left Panel */}
// // // // // // // //         <div className="flex-1 p-5">
// // // // // // // //           <h3 className="text-lg font-bold mb-3">
// // // // // // // //             Question {currentQuestion + 1}
// // // // // // // //           </h3>
// // // // // // // //           <p className="mb-5 text-gray-800">
// // // // // // // //             {questions[currentQuestion]?.question}
// // // // // // // //           </p>
// // // // // // // //           <ul className="space-y-4">
// // // // // // // //             {questions[currentQuestion]?.options.map((option, index) => (
// // // // // // // //               <li key={index} className="flex items-center space-x-2">
// // // // // // // //                 <input
// // // // // // // //                   type="radio"
// // // // // // // //                   checked={selectedAnswers[currentQuestion] === index}
// // // // // // // //                   onChange={() => handleOptionSelect(index)}
// // // // // // // //                   className="w-5 h-5"
// // // // // // // //                 />
// // // // // // // //                 <span className="text-gray-700">{option}</span>
// // // // // // // //               </li>
// // // // // // // //             ))}
// // // // // // // //           </ul>
// // // // // // // //         </div>

// // // // // // // //         {/* Right Panel */}
// // // // // // // //         <div
// // // // // // // //           className="w-1/4 bg-gray-50 p-4 border-l overflow-y-auto"
// // // // // // // //           style={{ maxHeight: "80vh" }} // Apply max height of 85% of the viewport height
// // // // // // // //         >
// // // // // // // //           <h4 className="font-bold text-gray-700 mb-4">Questions</h4>
// // // // // // // //           <div className="grid grid-cols-5 gap-2">
// // // // // // // //             {[...Array(totalQuestions)].map((_, index) => (
// // // // // // // //               <button
// // // // // // // //                 key={index}
// // // // // // // //                 onClick={() => navigateToQuestion(index)}
// // // // // // // //                 className={`w-10 h-10 text-white rounded shadow ${
// // // // // // // //                   currentQuestion === index
// // // // // // // //                     ? "bg-red-600"
// // // // // // // //                     : markedQuestions.includes(index)
// // // // // // // //                     ? "bg-purple-600"
// // // // // // // //                     : selectedAnswers[index] !== undefined
// // // // // // // //                     ? "bg-green-600"
// // // // // // // //                     : "bg-gray-400"
// // // // // // // //                 }`}
// // // // // // // //               >
// // // // // // // //                 {index + 1}
// // // // // // // //               </button>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Buttons at the Bottom */}
// // // // // // // //       <div className="flex justify-between px-5 py-3 bg-gray-200 shadow-md">
// // // // // // // //         <div className="space-x-4">
// // // // // // // //           <button
// // // // // // // //             onClick={handleMarkForReview}
// // // // // // // //             className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded"
// // // // // // // //           >
// // // // // // // //             Mark for Review
// // // // // // // //           </button>
// // // // // // // //           <button
// // // // // // // //             onClick={() => navigateToQuestion(currentQuestion - 1)}
// // // // // // // //             className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
// // // // // // // //           >
// // // // // // // //             Clear
// // // // // // // //           </button>
// // // // // // // //           <button
// // // // // // // //             onClick={() => navigateToQuestion(currentQuestion + 1)}
// // // // // // // //             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
// // // // // // // //           >
// // // // // // // //             Next
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //         <button
// // // // // // // //           onClick={handleSubmitTest}
// // // // // // // //           className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
// // // // // // // //         >
// // // // // // // //           Submit Test
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* End Test Modal */}
// // // // // // // //       {showEndModal && (
// // // // // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// // // // // // // //           <div className="bg-white p-6 rounded shadow-lg">
// // // // // // // //             <h2 className="text-xl font-bold mb-4">Submit Test</h2>
// // // // // // // //             <p>Are you sure you want to submit the test?</p>
// // // // // // // //             <div className="mt-4 flex justify-end space-x-3">
// // // // // // // //               <button
// // // // // // // //                 onClick={() => setShowEndModal(false)}
// // // // // // // //                 className="text-gray-500"
// // // // // // // //               >
// // // // // // // //                 Cancel
// // // // // // // //               </button>
// // // // // // // //               <button className="bg-red-600 text-white px-4 py-2 rounded">
// // // // // // // //                 Submit
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Page;

// // // // // // // "use client";
// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import { FaBars } from "react-icons/fa"; // Importing hamburger icon

// // // // // // // const page = () => {
// // // // // // //   const questions = [
// // // // // // //     {
// // // // // // //       id: 1,
// // // // // // //       question:
// // // // // // //         "Match the Modi 3.0 Cabinet Ministers to their respective ministries:",
// // // // // // //       options: [
// // // // // // //         "1-D, 2-C, 3-A, 4-B",
// // // // // // //         "1-A, 2-C, 3-B, 4-D",
// // // // // // //         "1-B, 2-C, 3-A, 4-D",
// // // // // // //         "1-C, 2-A, 3-D, 4-B",
// // // // // // //       ],
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 2,
// // // // // // //       question: "Who is the Minister of Commerce and Industry in 2024?",
// // // // // // //       options: [
// // // // // // //         "Amit Shah",
// // // // // // //         "Piyush Goyal",
// // // // // // //         "Nirmala Sitharaman",
// // // // // // //         "Jyotiraditya Scindia",
// // // // // // //       ],
// // // // // // //     },
// // // // // // //     // Add more questions here...
// // // // // // //   ];

// // // // // // //   const totalQuestions = 100;
// // // // // // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // // // // // //   const [markedQuestions, setMarkedQuestions] = useState([]);
// // // // // // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // // // // // //   const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
// // // // // // //   const [paused, setPaused] = useState(false);
// // // // // // //   const [showEndModal, setShowEndModal] = useState(false);
// // // // // // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle

// // // // // // //   // Timer logic
// // // // // // //   useEffect(() => {
// // // // // // //     if (!paused) {
// // // // // // //       const interval = setInterval(() => {
// // // // // // //         setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// // // // // // //       }, 1000);
// // // // // // //       if (timer === 60) alert("⚠️ Hurry up! Only 1 minute left.");
// // // // // // //       return () => clearInterval(interval);
// // // // // // //     }
// // // // // // //   }, [paused, timer]);

// // // // // // //   const formatTime = (time) => {
// // // // // // //     const minutes = Math.floor(time / 60);
// // // // // // //     const seconds = time % 60;
// // // // // // //     return `${minutes.toString().padStart(2, "0")}:${seconds
// // // // // // //       .toString()
// // // // // // //       .padStart(2, "0")}`;
// // // // // // //   };

// // // // // // //   const handleOptionSelect = (index) => {
// // // // // // //     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
// // // // // // //   };

// // // // // // //   const handleMarkForReview = () => {
// // // // // // //     if (markedQuestions.includes(currentQuestion)) {
// // // // // // //       setMarkedQuestions(markedQuestions.filter((q) => q !== currentQuestion));
// // // // // // //     } else {
// // // // // // //       setMarkedQuestions([...markedQuestions, currentQuestion]);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const navigateToQuestion = (index) => setCurrentQuestion(index);

// // // // // // //   const togglePause = () => setPaused(!paused);

// // // // // // //   const handleKeyDown = (e) => {
// // // // // // //     if (e.key === "ArrowRight") {
// // // // // // //       setCurrentQuestion((prev) => Math.min(prev + 1, totalQuestions - 1));
// // // // // // //     }
// // // // // // //     if (e.key === "ArrowLeft") {
// // // // // // //       setCurrentQuestion((prev) => Math.max(prev - 1, 0));
// // // // // // //     }
// // // // // // //     if (e.key === "r" || e.key === "R") handleMarkForReview();
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     window.addEventListener("keydown", handleKeyDown);
// // // // // // //     return () => window.removeEventListener("keydown", handleKeyDown);
// // // // // // //   }, [currentQuestion]);

// // // // // // //   const summary = {
// // // // // // //     answered: Object.keys(selectedAnswers).length,
// // // // // // //     notVisited:
// // // // // // //       totalQuestions -
// // // // // // //       Object.keys(selectedAnswers).length -
// // // // // // //       markedQuestions.length,
// // // // // // //     marked: markedQuestions.length,
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="flex flex-col h-screen">
// // // // // // //       {/* Header */}
// // // // // // //       <div className="flex justify-between items-center px-5 py-3 bg-gray-800 shadow-md text-white">
// // // // // // //         <h2 className="text-xl font-bold">
// // // // // // //           Narendra Modi 3.0: Cabinet Minister's Live Test
// // // // // // //         </h2>
// // // // // // //         <div className="flex space-x-4 items-center">
// // // // // // //           <div className="text-gray-300 font-semibold">
// // // // // // //             <span className="text-gray-200">Time Left:</span>{" "}
// // // // // // //             {formatTime(timer)}
// // // // // // //           </div>
// // // // // // //           <button
// // // // // // //             onClick={() => document.documentElement.requestFullscreen()}
// // // // // // //             className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded shadow"
// // // // // // //           >
// // // // // // //             Full Screen
// // // // // // //           </button>
// // // // // // //           <button
// // // // // // //             onClick={togglePause}
// // // // // // //             className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded shadow"
// // // // // // //           >
// // // // // // //             {paused ? "Resume" : "Pause"}
// // // // // // //           </button>
// // // // // // //           {/* Hamburger Menu for Mobile */}
// // // // // // //           <button
// // // // // // //             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// // // // // // //             className="md:hidden text-white"
// // // // // // //           >
// // // // // // //             <FaBars />
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Summary */}
// // // // // // //       <div className="flex justify-around bg-gray-900 py-3 text-white border-b">
// // // // // // //         <span>✅ Answered: {summary.answered}</span>
// // // // // // //         <span>📌 Marked for Review: {summary.marked}</span>
// // // // // // //         <span>🚫 Not Visited: {summary.notVisited}</span>
// // // // // // //       </div>

// // // // // // //       {/* Main Content */}
// // // // // // //       <div className="flex flex-1">
// // // // // // //         {/* Left Panel */}
// // // // // // //         <div
// // // // // // //           className={`flex-1 p-5 ${
// // // // // // //             isSidebarOpen ? "block" : "hidden"
// // // // // // //           } md:block`}
// // // // // // //         >
// // // // // // //           <h3 className="text-lg font-bold mb-3 text-gray-800">
// // // // // // //             Question {currentQuestion + 1}
// // // // // // //           </h3>
// // // // // // //           <p className="mb-5 text-gray-800">
// // // // // // //             {questions[currentQuestion]?.question}
// // // // // // //           </p>
// // // // // // //           <ul className="space-y-4">
// // // // // // //             {questions[currentQuestion]?.options.map((option, index) => (
// // // // // // //               <li key={index} className="flex items-center space-x-2">
// // // // // // //                 <input
// // // // // // //                   type="radio"
// // // // // // //                   checked={selectedAnswers[currentQuestion] === index}
// // // // // // //                   onChange={() => handleOptionSelect(index)}
// // // // // // //                   className="w-5 h-5"
// // // // // // //                 />
// // // // // // //                 <span className="text-gray-700">{option}</span>
// // // // // // //               </li>
// // // // // // //             ))}
// // // // // // //           </ul>
// // // // // // //         </div>

// // // // // // //         {/* Right Panel */}
// // // // // // //         <div
// // // // // // //           className="w-1/4 bg-gray-50 p-4 border-l overflow-y-auto"
// // // // // // //           style={{ maxHeight: "80vh" }}
// // // // // // //         >
// // // // // // //           <h4 className="font-bold text-gray-700 mb-4">Questions</h4>
// // // // // // //           <div className="grid grid-cols-5 gap-2">
// // // // // // //             {[...Array(totalQuestions)].map((_, index) => (
// // // // // // //               <button
// // // // // // //                 key={index}
// // // // // // //                 onClick={() => navigateToQuestion(index)}
// // // // // // //                 className={`w-10 h-10 text-white rounded shadow ${
// // // // // // //                   currentQuestion === index
// // // // // // //                     ? "bg-red-600"
// // // // // // //                     : markedQuestions.includes(index)
// // // // // // //                     ? "bg-purple-600"
// // // // // // //                     : selectedAnswers[index] !== undefined
// // // // // // //                     ? "bg-green-600"
// // // // // // //                     : "bg-gray-400"
// // // // // // //                 }`}
// // // // // // //               >
// // // // // // //                 {index + 1}
// // // // // // //               </button>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Bottom Buttons */}
// // // // // // //       <div className="flex flex-col md:flex-row justify-between items-center px-4 py-3 bg-gray-800 text-white border-t">
// // // // // // //         <div className="flex space-x-3 mb-4 md:mb-0">
// // // // // // //           <button
// // // // // // //             onClick={handleMarkForReview}
// // // // // // //             className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded"
// // // // // // //           >
// // // // // // //             {markedQuestions.includes(currentQuestion)
// // // // // // //               ? "Remove from Review"
// // // // // // //               : "Mark for Review"}
// // // // // // //           </button>
// // // // // // //           <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">
// // // // // // //             Clear
// // // // // // //           </button>
// // // // // // //           <button
// // // // // // //             onClick={() => navigateToQuestion(currentQuestion + 1)}
// // // // // // //             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
// // // // // // //           >
// // // // // // //             Next
// // // // // // //           </button>
// // // // // // //         </div>

// // // // // // //         {/* Submit Test Button (Visible in both mobile and desktop) */}
// // // // // // //         <button
// // // // // // //           onClick={() => setShowEndModal(true)}
// // // // // // //           className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
// // // // // // //         >
// // // // // // //           Submit Test
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {/* End Test Modal */}
// // // // // // //       {showEndModal && (
// // // // // // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// // // // // // //           <div className="bg-white p-6 rounded shadow-lg w-96">
// // // // // // //             <h2 className="text-xl font-bold mb-4">Submit Test</h2>
// // // // // // //             <p>Are you sure you want to submit the test?</p>
// // // // // // //             <div className="mt-4 flex justify-end space-x-3">
// // // // // // //               <button
// // // // // // //                 onClick={() => setShowEndModal(false)}
// // // // // // //                 className="text-gray-500"
// // // // // // //               >
// // // // // // //                 Cancel
// // // // // // //               </button>
// // // // // // //               <button className="bg-red-600 text-white px-4 py-2 rounded">
// // // // // // //                 Submit
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default page;

// // // // // // // "use client";
// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import { FaBars, FaSun, FaMoon } from "react-icons/fa"; // Importing hamburger and theme icons

// // // // // // // const Page = () => {
// // // // // // //   const questions = [
// // // // // // //     {
// // // // // // //       id: 1,
// // // // // // //       question:
// // // // // // //         "Match the Modi 3.0 Cabinet Ministers to their respective ministries:",
// // // // // // //       options: [
// // // // // // //         "1-D, 2-C, 3-A, 4-B",
// // // // // // //         "1-A, 2-C, 3-B, 4-D",
// // // // // // //         "1-B, 2-C, 3-A, 4-D",
// // // // // // //         "1-C, 2-A, 3-D, 4-B",
// // // // // // //       ],
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 2,
// // // // // // //       question: "Who is the Minister of Commerce and Industry in 2024?",
// // // // // // //       options: [
// // // // // // //         "Amit Shah",
// // // // // // //         "Piyush Goyal",
// // // // // // //         "Nirmala Sitharaman",
// // // // // // //         "Jyotiraditya Scindia",
// // // // // // //       ],
// // // // // // //     },
// // // // // // //     // Add more questions here...
// // // // // // //   ];

// // // // // // //   const totalQuestions = 100;
// // // // // // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // // // // // //   const [markedQuestions, setMarkedQuestions] = useState([]);
// // // // // // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // // // // // //   const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
// // // // // // //   const [paused, setPaused] = useState(false);
// // // // // // //   const [showEndModal, setShowEndModal] = useState(false);
// // // // // // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle
// // // // // // //   const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

// // // // // // //   // Timer logic
// // // // // // //   useEffect(() => {
// // // // // // //     if (!paused) {
// // // // // // //       const interval = setInterval(() => {
// // // // // // //         setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// // // // // // //       }, 1000);
// // // // // // //       if (timer === 60) alert("⚠️ Hurry up! Only 1 minute left.");
// // // // // // //       return () => clearInterval(interval);
// // // // // // //     }
// // // // // // //   }, [paused, timer]);

// // // // // // //   const formatTime = (time) => {
// // // // // // //     const minutes = Math.floor(time / 60);
// // // // // // //     const seconds = time % 60;
// // // // // // //     return `${minutes.toString().padStart(2, "0")}:${seconds
// // // // // // //       .toString()
// // // // // // //       .padStart(2, "0")}`;
// // // // // // //   };

// // // // // // //   const handleOptionSelect = (index) => {
// // // // // // //     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
// // // // // // //   };

// // // // // // //   const handleMarkForReview = () => {
// // // // // // //     if (markedQuestions.includes(currentQuestion)) {
// // // // // // //       setMarkedQuestions(markedQuestions.filter((q) => q !== currentQuestion));
// // // // // // //     } else {
// // // // // // //       setMarkedQuestions([...markedQuestions, currentQuestion]);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const navigateToQuestion = (index) => setCurrentQuestion(index);

// // // // // // //   const togglePause = () => setPaused(!paused);

// // // // // // //   const handleKeyDown = (e) => {
// // // // // // //     if (e.key === "ArrowRight") {
// // // // // // //       setCurrentQuestion((prev) => Math.min(prev + 1, totalQuestions - 1));
// // // // // // //     }
// // // // // // //     if (e.key === "ArrowLeft") {
// // // // // // //       setCurrentQuestion((prev) => Math.max(prev - 1, 0));
// // // // // // //     }
// // // // // // //     if (e.key === "r" || e.key === "R") handleMarkForReview();
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     window.addEventListener("keydown", handleKeyDown);
// // // // // // //     return () => window.removeEventListener("keydown", handleKeyDown);
// // // // // // //   }, [currentQuestion]);

// // // // // // //   const summary = {
// // // // // // //     answered: Object.keys(selectedAnswers).length,
// // // // // // //     notVisited:
// // // // // // //       totalQuestions -
// // // // // // //       Object.keys(selectedAnswers).length -
// // // // // // //       markedQuestions.length,
// // // // // // //     marked: markedQuestions.length,
// // // // // // //   };

// // // // // // //   // Toggle dark/light mode
// // // // // // //   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       className={isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}
// // // // // // //     >
// // // // // // //       <div className="flex flex-col h-screen">
// // // // // // //         {/* Header */}
// // // // // // //         <div
// // // // // // //           className={`flex justify-between items-center px-5 py-3 ${
// // // // // // //             isDarkMode ? "bg-gray-800" : "bg-gray-100"
// // // // // // //           } shadow-md`}
// // // // // // //         >
// // // // // // //           <h2
// // // // // // //             className={`text-xl font-bold ${
// // // // // // //               isDarkMode ? "text-white" : "text-black"
// // // // // // //             }`}
// // // // // // //           >
// // // // // // //             Meadhikari Live Test
// // // // // // //           </h2>
// // // // // // //           <div className="flex space-x-4 items-center">
// // // // // // //             <div
// // // // // // //               className={`${
// // // // // // //                 isDarkMode ? "text-gray-300" : "text-gray-700"
// // // // // // //               } font-semibold`}
// // // // // // //             >
// // // // // // //               <span
// // // // // // //                 className={`${isDarkMode ? "text-gray-200" : "text-gray-600"}`}
// // // // // // //               >
// // // // // // //                 Time Left:
// // // // // // //               </span>
// // // // // // //               {formatTime(timer)}
// // // // // // //             </div>
// // // // // // //             <button
// // // // // // //               onClick={() => document.documentElement.requestFullscreen()}
// // // // // // //               className={`bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded shadow ${
// // // // // // //                 isDarkMode ? "bg-blue-700" : ""
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               Full Screen
// // // // // // //             </button>
// // // // // // //             <button
// // // // // // //               onClick={togglePause}
// // // // // // //               className={`bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded shadow ${
// // // // // // //                 isDarkMode ? "bg-yellow-600" : ""
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               {paused ? "Resume" : "Pause"}
// // // // // // //             </button>
// // // // // // //             {/* Dark Mode Toggle */}
// // // // // // //             <button
// // // // // // //               onClick={toggleDarkMode}
// // // // // // //               className={`bg-gray-700 text-white px-3 py-1 rounded shadow ${
// // // // // // //                 isDarkMode ? "bg-gray-600" : ""
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               {isDarkMode ? <FaSun /> : <FaMoon />}
// // // // // // //             </button>
// // // // // // //             {/* Hamburger Menu for Mobile */}
// // // // // // //             <button
// // // // // // //               onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// // // // // // //               className="md:hidden text-white"
// // // // // // //             >
// // // // // // //               <FaBars />
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <div
// // // // // // //           className={`flex justify-around py-3 ${
// // // // // // //             isDarkMode ? "bg-gray-800" : "bg-gray-100"
// // // // // // //           } ${isDarkMode ? "text-white" : "text-black"} border-b`}
// // // // // // //         >
// // // // // // //           <span>✅ Answered: {summary.answered}</span>
// // // // // // //           <span>📌 Marked for Review: {summary.marked}</span>
// // // // // // //           <span>🚫 Not Visited: {summary.notVisited}</span>
// // // // // // //         </div>

// // // // // // //         {/* Main Content */}
// // // // // // //         <div className="flex flex-1">
// // // // // // //           {/* Left Panel (Mobile View Toggle) */}
// // // // // // //           <div
// // // // // // //             className={`flex-1 p-5 ${
// // // // // // //               isSidebarOpen ? "block" : "hidden"
// // // // // // //             } md:block ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}
// // // // // // //           >
// // // // // // //             <h3
// // // // // // //               className={`text-lg font-bold mb-3 ${
// // // // // // //                 isDarkMode ? "text-white" : "text-gray-800"
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               Question {currentQuestion + 1}
// // // // // // //             </h3>
// // // // // // //             <p
// // // // // // //               className={`mb-5 ${
// // // // // // //                 isDarkMode ? "text-gray-300" : "text-gray-800"
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               {questions[currentQuestion]?.question}
// // // // // // //             </p>
// // // // // // //             <ul className="space-y-4">
// // // // // // //               {questions[currentQuestion]?.options.map((option, index) => (
// // // // // // //                 <li key={index} className="flex items-center space-x-2">
// // // // // // //                   <input
// // // // // // //                     type="radio"
// // // // // // //                     checked={selectedAnswers[currentQuestion] === index}
// // // // // // //                     onChange={() => handleOptionSelect(index)}
// // // // // // //                     className="w-5 h-5"
// // // // // // //                   />
// // // // // // //                   <span
// // // // // // //                     className={`${
// // // // // // //                       isDarkMode ? "text-gray-300" : "text-gray-700"
// // // // // // //                     }`}
// // // // // // //                   >
// // // // // // //                     {option}
// // // // // // //                   </span>
// // // // // // //                 </li>
// // // // // // //               ))}
// // // // // // //             </ul>
// // // // // // //           </div>

// // // // // // //           {/* Right Panel */}
// // // // // // //           <div
// // // // // // //             className={`w-1/4 p-4 border-l overflow-y-auto ${
// // // // // // //               isDarkMode ? "bg-gray-700" : "bg-gray-50"
// // // // // // //             }`}
// // // // // // //             style={{ maxHeight: "80vh" }}
// // // // // // //           >
// // // // // // //             <h4
// // // // // // //               className={`font-bold ${
// // // // // // //                 isDarkMode ? "text-white" : "text-gray-700"
// // // // // // //               } mb-4`}
// // // // // // //             >
// // // // // // //               Questions
// // // // // // //             </h4>
// // // // // // //             <div className="grid grid-cols-5 gap-2">
// // // // // // //               {[...Array(totalQuestions)].map((_, index) => (
// // // // // // //                 <button
// // // // // // //                   key={index}
// // // // // // //                   onClick={() => navigateToQuestion(index)}
// // // // // // //                   className={`w-10 h-10 text-white rounded shadow ${
// // // // // // //                     currentQuestion === index
// // // // // // //                       ? "bg-red-600"
// // // // // // //                       : markedQuestions.includes(index)
// // // // // // //                       ? "bg-purple-600"
// // // // // // //                       : selectedAnswers[index] !== undefined
// // // // // // //                       ? "bg-green-600"
// // // // // // //                       : "bg-gray-400"
// // // // // // //                   }`}
// // // // // // //                 >
// // // // // // //                   {index + 1}
// // // // // // //                 </button>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Bottom Buttons */}
// // // // // // //         <div
// // // // // // //           className={`flex flex-col md:flex-row justify-between items-center px-4 py-3 border-t ${
// // // // // // //             isDarkMode ? "bg-gray-800" : "bg-gray-100"
// // // // // // //           } text-white`}
// // // // // // //         >
// // // // // // //           <div className="flex space-x-3 mb-4 md:mb-0">
// // // // // // //             <button
// // // // // // //               onClick={handleMarkForReview}
// // // // // // //               className={`bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded ${
// // // // // // //                 isDarkMode ? "bg-purple-600" : ""
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               {markedQuestions.includes(currentQuestion)
// // // // // // //                 ? "Remove from Review"
// // // // // // //                 : "Mark for Review"}
// // // // // // //             </button>
// // // // // // //             <button
// // // // // // //               className={`bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded ${
// // // // // // //                 isDarkMode ? "bg-gray-600" : ""
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               Clear
// // // // // // //             </button>
// // // // // // //             <button
// // // // // // //               onClick={() => navigateToQuestion(currentQuestion + 1)}
// // // // // // //               className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded ${
// // // // // // //                 isDarkMode ? "bg-blue-700" : ""
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               Next
// // // // // // //             </button>
// // // // // // //           </div>

// // // // // // //           {/* Submit Test Button (Visible in both mobile and desktop) */}
// // // // // // //           <button
// // // // // // //             onClick={() => setShowEndModal(true)}
// // // // // // //             className={`bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded ${
// // // // // // //               isDarkMode ? "bg-red-700" : ""
// // // // // // //             }`}
// // // // // // //           >
// // // // // // //             Submit Test
// // // // // // //           </button>
// // // // // // //         </div>

// // // // // // //         {/* End Test Modal */}
// // // // // // //         {showEndModal && (
// // // // // // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// // // // // // //             <div
// // // // // // //               className={`bg-white p-6 rounded shadow-lg w-96 ${
// // // // // // //                 isDarkMode ? "bg-gray-800 text-white" : ""
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               <h2 className="text-xl font-bold mb-4">Submit Test</h2>
// // // // // // //               <p>Are you sure you want to submit the test?</p>
// // // // // // //               <div className="mt-4 flex justify-between">
// // // // // // //                 <button
// // // // // // //                   onClick={() => setShowEndModal(false)}
// // // // // // //                   className={`bg-gray-500 text-white px-4 py-2 rounded ${
// // // // // // //                     isDarkMode ? "bg-gray-600" : ""
// // // // // // //                   }`}
// // // // // // //                 >
// // // // // // //                   Cancel
// // // // // // //                 </button>
// // // // // // //                 <button
// // // // // // //                   onClick={() => alert("Test submitted")}
// // // // // // //                   className={`bg-red-600 text-white px-4 py-2 rounded ${
// // // // // // //                     isDarkMode ? "bg-red-700" : ""
// // // // // // //                   }`}
// // // // // // //                 >
// // // // // // //                   Submit
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Page;

// // // // // // // Final Updated Code with Responsiveness and Enhanced User Experience
// // // // // // "use client";
// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { FaBars, FaSun, FaMoon } from "react-icons/fa"; // Importing hamburger and theme icons

// // // // // // const Page = () => {
// // // // // //   const questions = [
// // // // // //     {
// // // // // //       id: 1,
// // // // // //       question:
// // // // // //         "Match the Modi 3.0 Cabinet Ministers to their respective ministries:",
// // // // // //       options: [
// // // // // //         "1-D, 2-C, 3-A, 4-B",
// // // // // //         "1-A, 2-C, 3-B, 4-D",
// // // // // //         "1-B, 2-C, 3-A, 4-D",
// // // // // //         "1-C, 2-A, 3-D, 4-B",
// // // // // //       ],
// // // // // //     },
// // // // // //     {
// // // // // //       id: 2,
// // // // // //       question: "Who is the Minister of Commerce and Industry in 2024?",
// // // // // //       options: [
// // // // // //         "Amit Shah",
// // // // // //         "Piyush Goyal",
// // // // // //         "Nirmala Sitharaman",
// // // // // //         "Jyotiraditya Scindia",
// // // // // //       ],
// // // // // //     },
// // // // // //     // Add more questions here...
// // // // // //   ];

// // // // // //   const totalQuestions = 100;
// // // // // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // // // // //   const [markedQuestions, setMarkedQuestions] = useState([]);
// // // // // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // // // // //   const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
// // // // // //   const [paused, setPaused] = useState(false);
// // // // // //   const [showEndModal, setShowEndModal] = useState(false);
// // // // // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle
// // // // // //   const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

// // // // // //   // Timer logic
// // // // // //   useEffect(() => {
// // // // // //     if (!paused) {
// // // // // //       const interval = setInterval(() => {
// // // // // //         setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// // // // // //       }, 1000);
// // // // // //       if (timer === 60) alert("⚠️ Hurry up! Only 1 minute left.");
// // // // // //       return () => clearInterval(interval);
// // // // // //     }
// // // // // //   }, [paused, timer]);

// // // // // //   const formatTime = (time) => {
// // // // // //     const minutes = Math.floor(time / 60);
// // // // // //     const seconds = time % 60;
// // // // // //     return `${minutes.toString().padStart(2, "0")}:${seconds
// // // // // //       .toString()
// // // // // //       .padStart(2, "0")}`;
// // // // // //   };

// // // // // //   const handleOptionSelect = (index) => {
// // // // // //     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
// // // // // //   };

// // // // // //   const handleMarkForReview = () => {
// // // // // //     if (markedQuestions.includes(currentQuestion)) {
// // // // // //       setMarkedQuestions(markedQuestions.filter((q) => q !== currentQuestion));
// // // // // //     } else {
// // // // // //       setMarkedQuestions([...markedQuestions, currentQuestion]);
// // // // // //     }
// // // // // //   };

// // // // // //   const navigateToQuestion = (index) => setCurrentQuestion(index);

// // // // // //   const togglePause = () => setPaused(!paused);

// // // // // //   const handleKeyDown = (e) => {
// // // // // //     if (e.key === "ArrowRight") {
// // // // // //       setCurrentQuestion((prev) => Math.min(prev + 1, totalQuestions - 1));
// // // // // //     }
// // // // // //     if (e.key === "ArrowLeft") {
// // // // // //       setCurrentQuestion((prev) => Math.max(prev - 1, 0));
// // // // // //     }
// // // // // //     if (e.key === "r" || e.key === "R") handleMarkForReview();
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     window.addEventListener("keydown", handleKeyDown);
// // // // // //     return () => window.removeEventListener("keydown", handleKeyDown);
// // // // // //   }, [currentQuestion]);

// // // // // //   const summary = {
// // // // // //     answered: Object.keys(selectedAnswers).length,
// // // // // //     notVisited:
// // // // // //       totalQuestions -
// // // // // //       Object.keys(selectedAnswers).length -
// // // // // //       markedQuestions.length,
// // // // // //     marked: markedQuestions.length,
// // // // // //   };

// // // // // //   // Toggle dark/light mode
// // // // // //   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

// // // // // //   return (
// // // // // //     <div
// // // // // //       className={`h-screen flex flex-col overflow-hidden ${
// // // // // //         isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
// // // // // //       }`}
// // // // // //     >
// // // // // //       {/* Header */}
// // // // // //       <header
// // // // // //         className={`flex flex-col p-4 ${
// // // // // //           isDarkMode ? "bg-gray-800" : "bg-gray-100"
// // // // // //         }`}
// // // // // //       >
// // // // // //         <div className="flex justify-between items-center">
// // // // // //           <button
// // // // // //             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// // // // // //             className="p-2 bg-gray-500 text-white rounded"
// // // // // //           >
// // // // // //             <FaBars />
// // // // // //           </button>
// // // // // //           <h1 className="text-lg font-bold">Meadhikari Live Test</h1>
// // // // // //           <button
// // // // // //             onClick={toggleDarkMode}
// // // // // //             className={`p-2 rounded ${
// // // // // //               isDarkMode ? "bg-yellow-300" : "bg-gray-600 text-white"
// // // // // //             }`}
// // // // // //           >
// // // // // //             {isDarkMode ? <FaSun /> : <FaMoon />}
// // // // // //           </button>
// // // // // //         </div>
// // // // // //         <div className="flex justify-between items-center mt-4">
// // // // // //           <div>Time Left: {formatTime(timer)}</div>
// // // // // //           <button
// // // // // //             onClick={() => document.documentElement.requestFullscreen()}
// // // // // //             className="bg-blue-600 text-white px-2 py-1 rounded"
// // // // // //           >
// // // // // //             Fullscreen
// // // // // //           </button>
// // // // // //           <button
// // // // // //             onClick={togglePause}
// // // // // //             className={`px-2 py-1 rounded ${
// // // // // //               paused ? "bg-green-500" : "bg-yellow-500"
// // // // // //             }`}
// // // // // //           >
// // // // // //             {paused ? "Resume" : "Pause"}
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </header>

// // // // // //       {/* Main Section */}
// // // // // //       <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
// // // // // //         {/* Sidebar */}
// // // // // //         <aside
// // // // // //           className={`w-full md:w-1/4 bg-gray-200 p-4 max-w-full overflow-y-auto ${
// // // // // //             isSidebarOpen ? "block" : "hidden md:block"
// // // // // //           }`}
// // // // // //         >
// // // // // //           <h2 className="text-lg font-bold">Questions</h2>
// // // // // //           <div className="grid grid-cols-5 gap-2 mt-2">
// // // // // //             {[...Array(totalQuestions)].map((_, index) => (
// // // // // //               <button
// // // // // //                 key={index}
// // // // // //                 onClick={() => navigateToQuestion(index)}
// // // // // //                 className={`w-10 h-10 rounded overflow-hidden ${
// // // // // //                   currentQuestion === index
// // // // // //                     ? "bg-red-500"
// // // // // //                     : markedQuestions.includes(index)
// // // // // //                     ? "bg-purple-500"
// // // // // //                     : selectedAnswers[index] !== undefined
// // // // // //                     ? "bg-green-500"
// // // // // //                     : "bg-gray-300"
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 {index + 1}
// // // // // //               </button>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </aside>

// // // // // //         {/* Main Question Panel */}
// // // // // //         <section className="flex-1 bg-white p-4 overflow-y-auto">
// // // // // //           <h2 className="text-lg font-bold mb-4">
// // // // // //             Question {currentQuestion + 1}
// // // // // //           </h2>
// // // // // //           <p>{questions[currentQuestion]?.question}</p>
// // // // // //           <ul className="mt-4 space-y-2">
// // // // // //             {questions[currentQuestion]?.options.map((option, index) => (
// // // // // //               <li key={index} className="flex items-center space-x-2">
// // // // // //                 <input
// // // // // //                   type="radio"
// // // // // //                   name="answer"
// // // // // //                   checked={selectedAnswers[currentQuestion] === index}
// // // // // //                   onChange={() => handleOptionSelect(index)}
// // // // // //                 />
// // // // // //                 <label>{option}</label>
// // // // // //               </li>
// // // // // //             ))}
// // // // // //           </ul>
// // // // // //         </section>
// // // // // //       </main>

// // // // // //       {/* Footer Controls */}
// // // // // //       <footer
// // // // // //         className={`p-4 flex justify-between items-center ${
// // // // // //           isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100"
// // // // // //         }`}
// // // // // //       >
// // // // // //         <button
// // // // // //           onClick={handleMarkForReview}
// // // // // //           className="bg-purple-500 text-white px-4 py-2 rounded"
// // // // // //         >
// // // // // //           {markedQuestions.includes(currentQuestion)
// // // // // //             ? "Unmark Review"
// // // // // //             : "Mark for Review"}
// // // // // //         </button>
// // // // // //         <button
// // // // // //           onClick={() => setShowEndModal(true)}
// // // // // //           className="bg-red-500 text-white px-4 py-2 rounded"
// // // // // //         >
// // // // // //           Submit Test
// // // // // //         </button>
// // // // // //       </footer>

// // // // // //       {/* End Test Modal */}
// // // // // //       {showEndModal && (
// // // // // //         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
// // // // // //           <div className="bg-white p-6 rounded">
// // // // // //             <h2 className="text-lg font-bold">Confirm Submission</h2>
// // // // // //             <p>Are you sure you want to submit the test?</p>
// // // // // //             <div className="mt-4 flex justify-end space-x-4">
// // // // // //               <button
// // // // // //                 onClick={() => setShowEndModal(false)}
// // // // // //                 className="bg-gray-300 px-4 py-2 rounded"
// // // // // //               >
// // // // // //                 Cancel
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 onClick={() => alert("Test Submitted!")}
// // // // // //                 className="bg-red-500 text-white px-4 py-2 rounded"
// // // // // //               >
// // // // // //                 Submit
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Page;

// // // // // // Final Updated Code with Responsiveness and Enhanced User Experience
// // // // // // "use client";
// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { FaBars, FaSun, FaMoon } from "react-icons/fa"; // Importing hamburger and theme icons

// // // // // // const Page = () => {
// // // // // //   const questions = [
// // // // // //     {
// // // // // //       id: 1,
// // // // // //       question:
// // // // // //         "Match the Modi 3.0 Cabinet Ministers to their respective ministries:",
// // // // // //       options: [
// // // // // //         "1-D, 2-C, 3-A, 4-B",
// // // // // //         "1-A, 2-C, 3-B, 4-D",
// // // // // //         "1-B, 2-C, 3-A, 4-D",
// // // // // //         "1-C, 2-A, 3-D, 4-B",
// // // // // //       ],
// // // // // //     },
// // // // // //     {
// // // // // //       id: 2,
// // // // // //       question: "Who is the Minister of Commerce and Industry in 2024?",
// // // // // //       options: [
// // // // // //         "Amit Shah",
// // // // // //         "Piyush Goyal",
// // // // // //         "Nirmala Sitharaman",
// // // // // //         "Jyotiraditya Scindia",
// // // // // //       ],
// // // // // //     },
// // // // // //     // Add more questions here...
// // // // // //   ];

// // // // // //   const totalQuestions = 100;
// // // // // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // // // // //   const [markedQuestions, setMarkedQuestions] = useState([]);
// // // // // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // // // // //   const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
// // // // // //   const [paused, setPaused] = useState(false);
// // // // // //   const [showEndModal, setShowEndModal] = useState(false);
// // // // // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle
// // // // // //   const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

// // // // // //   // Timer logic
// // // // // //   useEffect(() => {
// // // // // //     if (!paused) {
// // // // // //       const interval = setInterval(() => {
// // // // // //         setTimer((prev) => (prev > 0 ? prev - 1 : 0));
// // // // // //       }, 1000);
// // // // // //       if (timer === 60) alert("⚠️ Hurry up! Only 1 minute left.");
// // // // // //       return () => clearInterval(interval);
// // // // // //     }
// // // // // //   }, [paused, timer]);

// // // // // //   const formatTime = (time) => {
// // // // // //     const minutes = Math.floor(time / 60);
// // // // // //     const seconds = time % 60;
// // // // // //     return `${minutes.toString().padStart(2, "0")}:${seconds
// // // // // //       .toString()
// // // // // //       .padStart(2, "0")}`;
// // // // // //   };

// // // // // //   const handleOptionSelect = (index) => {
// // // // // //     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
// // // // // //   };

// // // // // //   const handleMarkForReview = () => {
// // // // // //     if (markedQuestions.includes(currentQuestion)) {
// // // // // //       setMarkedQuestions(markedQuestions.filter((q) => q !== currentQuestion));
// // // // // //     } else {
// // // // // //       setMarkedQuestions([...markedQuestions, currentQuestion]);
// // // // // //     }
// // // // // //   };

// // // // // //   const navigateToQuestion = (index) => setCurrentQuestion(index);

// // // // // //   const togglePause = () => setPaused(!paused);

// // // // // //   const handleKeyDown = (e) => {
// // // // // //     if (e.key === "ArrowRight") {
// // // // // //       setCurrentQuestion((prev) => Math.min(prev + 1, totalQuestions - 1));
// // // // // //     }
// // // // // //     if (e.key === "ArrowLeft") {
// // // // // //       setCurrentQuestion((prev) => Math.max(prev, 0));
// // // // // //     }
// // // // // //     if (e.key === "r" || e.key === "R") handleMarkForReview();
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     window.addEventListener("keydown", handleKeyDown);
// // // // // //     return () => window.removeEventListener("keydown", handleKeyDown);
// // // // // //   }, [currentQuestion]);

// // // // // //   const summary = {
// // // // // //     answered: Object.keys(selectedAnswers).length,
// // // // // //     notVisited:
// // // // // //       totalQuestions -
// // // // // //       Object.keys(selectedAnswers).length -
// // // // // //       markedQuestions.length,
// // // // // //     marked: markedQuestions.length,
// // // // // //   };

// // // // // //   // Toggle dark/light mode
// // // // // //   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

// // // // // //   return (
// // // // // //     <div
// // // // // //       className={`h-screen flex flex-col overflow-hidden ${
// // // // // //         isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
// // // // // //       }`}
// // // // // //     >
// // // // // //       {/* Header */}
// // // // // //       <header
// // // // // //         className={`flex flex-col p-4 ${
// // // // // //           isDarkMode ? "bg-gray-800" : "bg-gray-100"
// // // // // //         }`}
// // // // // //       >
// // // // // //         <div className="flex justify-between items-center">
// // // // // //           <button
// // // // // //             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// // // // // //             className={`p-2 bg-gray-500 text-white rounded md:hidden`}
// // // // // //           >
// // // // // //             <FaBars />
// // // // // //           </button>
// // // // // //           <h1 className="text-lg font-bold">Meadhikari Live Test</h1>
// // // // // //           <button
// // // // // //             onClick={toggleDarkMode}
// // // // // //             className={`p-2 rounded ${
// // // // // //               isDarkMode ? "bg-yellow-300" : "bg-gray-600 text-white"
// // // // // //             }`}
// // // // // //           >
// // // // // //             {isDarkMode ? <FaSun /> : <FaMoon />}
// // // // // //           </button>
// // // // // //         </div>
// // // // // //         <div className="flex justify-between items-center mt-4">
// // // // // //           <div>Time Left: {formatTime(timer)}</div>
// // // // // //           <button
// // // // // //             onClick={() => document.documentElement.requestFullscreen()}
// // // // // //             className="bg-blue-600 text-white px-2 py-1 rounded"
// // // // // //           >
// // // // // //             Fullscreen
// // // // // //           </button>
// // // // // //           <button
// // // // // //             onClick={togglePause}
// // // // // //             className={`px-2 py-1 rounded ${
// // // // // //               paused ? "bg-green-500" : "bg-yellow-500"
// // // // // //             }`}
// // // // // //           >
// // // // // //             {paused ? "Resume" : "Pause"}
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </header>

// // // // // //       {/* Main Section */}
// // // // // //       <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
// // // // // //         {/* Sidebar */}
// // // // // //         <aside
// // // // // //           className={`w-full md:w-1/4 bg-gray-200 p-4 max-w-full overflow-y-auto ${
// // // // // //             isSidebarOpen ? "block" : "hidden md:block"
// // // // // //           }`}
// // // // // //         >
// // // // // //           <h2 className="text-lg font-bold">Questions</h2>
// // // // // //           <div className="grid grid-cols-5 gap-2 mt-2">
// // // // // //             {[...Array(totalQuestions)].map((_, index) => (
// // // // // //               <button
// // // // // //                 key={index}
// // // // // //                 onClick={() => navigateToQuestion(index)}
// // // // // //                 className={`w-10 h-10 rounded overflow-hidden ${
// // // // // //                   currentQuestion === index
// // // // // //                     ? "bg-red-500"
// // // // // //                     : markedQuestions.includes(index)
// // // // // //                     ? "bg-purple-500"
// // // // // //                     : selectedAnswers[index] !== undefined
// // // // // //                     ? "bg-green-500"
// // // // // //                     : "bg-gray-300"
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 {index + 1}
// // // // // //               </button>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </aside>

// // // // // //         {/* Main Question Panel */}
// // // // // //         <section className="flex-1 bg-white p-4 overflow-y-auto">
// // // // // //           <h2 className="text-lg font-bold mb-4">
// // // // // //             Question {currentQuestion + 1}
// // // // // //           </h2>
// // // // // //           <p>{questions[currentQuestion]?.question}</p>
// // // // // //           <ul className="mt-4 space-y-2">
// // // // // //             {questions[currentQuestion]?.options.map((option, index) => (
// // // // // //               <li key={index} className="flex items-center space-x-2">
// // // // // //                 <input
// // // // // //                   type="radio"
// // // // // //                   name="answer"
// // // // // //                   checked={selectedAnswers[currentQuestion] === index}
// // // // // //                   onChange={() => handleOptionSelect(index)}
// // // // // //                 />
// // // // // //                 <label>{option}</label>
// // // // // //               </li>
// // // // // //             ))}
// // // // // //           </ul>
// // // // // //         </section>
// // // // // //       </main>

// // // // // //       {/* Footer Controls */}
// // // // // //       <footer
// // // // // //         className={`p-4 flex justify-between items-center ${
// // // // // //           isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100"
// // // // // //         }`}
// // // // // //       >
// // // // // //         <button
// // // // // //           onClick={handleMarkForReview}
// // // // // //           className="bg-purple-500 text-white px-4 py-2 rounded"
// // // // // //         >
// // // // // //           {markedQuestions.includes(currentQuestion)
// // // // // //             ? "Unmark Review"
// // // // // //             : "Mark for Review"}
// // // // // //         </button>
// // // // // //         <button
// // // // // //           onClick={() => setShowEndModal(true)}
// // // // // //           className="bg-red-500 text-white px-4 py-2 rounded"
// // // // // //         >
// // // // // //           Submit Test
// // // // // //         </button>
// // // // // //       </footer>

// // // // // //       {/* End Test Modal */}
// // // // // //       {showEndModal && (
// // // // // //         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
// // // // // //           <div className="bg-white p-6 rounded">
// // // // // //             <h2 className="text-lg font-bold">Confirm Submission</h2>
// // // // // //             <p>Are you sure you want to submit the test?</p>
// // // // // //             <div className="mt-4 flex justify-end space-x-4">
// // // // // //               <button
// // // // // //                 onClick={() => setShowEndModal(false)}
// // // // // //                 className="bg-gray-300 px-4 py-2 rounded"
// // // // // //               >
// // // // // //                 Cancel
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 onClick={() => alert("Test Submitted!")}
// // // // // //                 className="bg-red-500 text-white px-4 py-2 rounded"
// // // // // //               >
// // // // // //                 Submit
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Page;

// // // // // "use client";
// // // // // import React, { useState, useEffect } from "react";
// // // // // import { FaBars, FaSun, FaMoon } from "react-icons/fa";

// // // // // // Sidebar Component
// // // // // const Sidebar = ({
// // // // //   totalQuestions,
// // // // //   currentQuestion,
// // // // //   markedQuestions,
// // // // //   selectedAnswers,
// // // // //   navigateToQuestion,
// // // // //   isSidebarOpen,
// // // // // }) => (
// // // // //   <aside
// // // // //     className={`w-full md:w-1/4 bg-gray-200 p-4 max-w-full overflow-y-auto ${
// // // // //       isSidebarOpen ? "block" : "hidden md:block"
// // // // //     }`}
// // // // //   >
// // // // //     <h2 className="text-lg font-bold">Questions</h2>
// // // // //     <div className="grid grid-cols-5 gap-2 mt-2">
// // // // //       {[...Array(totalQuestions)].map((_, index) => (
// // // // //         <button
// // // // //           key={index}
// // // // //           onClick={() => navigateToQuestion(index)}
// // // // //           className={`w-10 h-10 rounded overflow-hidden ${
// // // // //             currentQuestion === index
// // // // //               ? "bg-red-500"
// // // // //               : markedQuestions.includes(index)
// // // // //               ? "bg-purple-500"
// // // // //               : selectedAnswers[index] !== undefined
// // // // //               ? "bg-green-500"
// // // // //               : "bg-gray-300"
// // // // //           }`}
// // // // //         >
// // // // //           {index + 1}
// // // // //         </button>
// // // // //       ))}
// // // // //     </div>
// // // // //   </aside>
// // // // // );

// // // // // // Header Component
// // // // // const Header = ({
// // // // //   toggleSidebar,
// // // // //   toggleDarkMode,
// // // // //   isDarkMode,
// // // // //   timer,
// // // // //   togglePause,
// // // // //   paused,
// // // // // }) => (
// // // // //   <header
// // // // //     className={`flex flex-col p-4 ${
// // // // //       isDarkMode ? "bg-gray-800" : "bg-gray-100"
// // // // //     }`}
// // // // //   >
// // // // //     <div className="flex justify-between items-center">
// // // // //       <button
// // // // //         onClick={toggleSidebar}
// // // // //         className={`p-2 bg-gray-500 text-white rounded md:hidden`}
// // // // //       >
// // // // //         <FaBars />
// // // // //       </button>
// // // // //       <h1 className="text-lg font-bold">Meadhikari Live Test</h1>
// // // // //       <button
// // // // //         onClick={toggleDarkMode}
// // // // //         className={`p-2 rounded ${
// // // // //           isDarkMode ? "bg-yellow-300" : "bg-gray-600 text-white"
// // // // //         }`}
// // // // //       >
// // // // //         {isDarkMode ? <FaSun /> : <FaMoon />}
// // // // //       </button>
// // // // //     </div>
// // // // //     <div className="flex justify-between items-center mt-4">
// // // // //       <div>Time Left: {timer}</div>
// // // // //       <button
// // // // //         onClick={() => document.documentElement.requestFullscreen()}
// // // // //         className="bg-blue-600 text-white px-2 py-1 rounded"
// // // // //       >
// // // // //         Fullscreen
// // // // //       </button>
// // // // //       <button
// // // // //         onClick={togglePause}
// // // // //         className={`px-2 py-1 rounded ${
// // // // //           paused ? "bg-green-500" : "bg-yellow-500"
// // // // //         }`}
// // // // //       >
// // // // //         {paused ? "Resume" : "Pause"}
// // // // //       </button>
// // // // //     </div>
// // // // //   </header>
// // // // // );

// // // // // // Main Question Component
// // // // // const QuestionPanel = ({
// // // // //   currentQuestion,
// // // // //   questions,
// // // // //   selectedAnswers,
// // // // //   handleOptionSelect,
// // // // // }) => (
// // // // //   <section className="flex-1 bg-white p-4 overflow-y-auto">
// // // // //     <h2 className="text-lg font-bold mb-4">Question {currentQuestion + 1}</h2>
// // // // //     <p>{questions[currentQuestion]?.question}</p>
// // // // //     <ul className="mt-4 space-y-2">
// // // // //       {questions[currentQuestion]?.options.map((option, index) => (
// // // // //         <li key={index} className="flex items-center space-x-2">
// // // // //           <input
// // // // //             type="radio"
// // // // //             name="answer"
// // // // //             checked={selectedAnswers[currentQuestion] === index}
// // // // //             onChange={() => handleOptionSelect(index)}
// // // // //           />
// // // // //           <label>{option}</label>
// // // // //         </li>
// // // // //       ))}
// // // // //     </ul>
// // // // //   </section>
// // // // // );

// // // // // // Footer Controls Component
// // // // // const FooterControls = ({
// // // // //   handleMarkForReview,
// // // // //   showEndModal,
// // // // //   setShowEndModal,
// // // // // }) => (
// // // // //   <footer
// // // // //     className={`p-4 flex justify-between items-center ${
// // // // //       showEndModal ? "bg-gray-800" : "bg-gray-100"
// // // // //     }`}
// // // // //   >
// // // // //     <button
// // // // //       onClick={handleMarkForReview}
// // // // //       className="bg-purple-500 text-white px-4 py-2 rounded"
// // // // //     >
// // // // //       Mark for Review
// // // // //     </button>
// // // // //     <button
// // // // //       onClick={() => setShowEndModal(true)}
// // // // //       className="bg-red-500 text-white px-4 py-2 rounded"
// // // // //     >
// // // // //       Submit Test
// // // // //     </button>
// // // // //   </footer>
// // // // // );

// // // // // // Modal Component for End Test
// // // // // const EndModal = ({ showEndModal, setShowEndModal }) =>
// // // // //   showEndModal && (
// // // // //     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
// // // // //       <div className="bg-white p-6 rounded">
// // // // //         <h2 className="text-lg font-bold">Confirm Submission</h2>
// // // // //         <p>Are you sure you want to submit the test?</p>
// // // // //         <div className="mt-4 flex justify-end space-x-4">
// // // // //           <button
// // // // //             onClick={() => setShowEndModal(false)}
// // // // //             className="bg-gray-300 px-4 py-2 rounded"
// // // // //           >
// // // // //             Cancel
// // // // //           </button>
// // // // //           <button
// // // // //             onClick={() => alert("Test Submitted!")}
// // // // //             className="bg-red-500 text-white px-4 py-2 rounded"
// // // // //           >
// // // // //             Submit
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );

// // // // // const Page = () => {
// // // // //   const questions = [
// // // // //     {
// // // // //       id: 1,
// // // // //       question:
// // // // //         "Match the Modi 3.0 Cabinet Ministers to their respective ministries:",
// // // // //       options: [
// // // // //         "1-D, 2-C, 3-A, 4-B",
// // // // //         "1-A, 2-C, 3-B, 4-D",
// // // // //         "1-B, 2-C, 3-A, 4-D",
// // // // //         "1-C, 2-A, 3-D, 4-B",
// // // // //       ],
// // // // //     },
// // // // //     {
// // // // //       id: 2,
// // // // //       question: "Who is the Minister of Commerce and Industry in 2024?",
// // // // //       options: [
// // // // //         "Amit Shah",
// // // // //         "Piyush Goyal",
// // // // //         "Nirmala Sitharaman",
// // // // //         "Jyotiraditya Scindia",
// // // // //       ],
// // // // //     },
// // // // //     // Add more questions here...
// // // // //   ];

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

// // // // //   const togglePause = () => setPaused(!paused);

// // // // //   const handleKeyDown = (e) => {
// // // // //     if (e.key === "ArrowRight") {
// // // // //       setCurrentQuestion((prev) => Math.min(prev + 1, totalQuestions - 1));
// // // // //     }
// // // // //     if (e.key === "ArrowLeft") {
// // // // //       setCurrentQuestion((prev) => Math.max(prev, 0));
// // // // //     }
// // // // //     if (e.key === "r" || e.key === "R") handleMarkForReview();
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     window.addEventListener("keydown", handleKeyDown);
// // // // //     return () => window.removeEventListener("keydown", handleKeyDown);
// // // // //   }, [currentQuestion]);

// // // // //   const summary = {
// // // // //     answered: Object.keys(selectedAnswers).length,
// // // // //     notVisited:
// // // // //       totalQuestions -
// // // // //       Object.keys(selectedAnswers).length -
// // // // //       markedQuestions.length,
// // // // //     marked: markedQuestions.length,
// // // // //   };

// // // // //   // Toggle dark/light mode
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
// // // // //           totalQuestions={totalQuestions}
// // // // //           currentQuestion={currentQuestion}
// // // // //           markedQuestions={markedQuestions}
// // // // //           selectedAnswers={selectedAnswers}
// // // // //           navigateToQuestion={navigateToQuestion}
// // // // //           isSidebarOpen={isSidebarOpen}
// // // // //         />
// // // // //         <QuestionPanel
// // // // //           currentQuestion={currentQuestion}
// // // // //           questions={questions}
// // // // //           selectedAnswers={selectedAnswers}
// // // // //           handleOptionSelect={handleOptionSelect}
// // // // //         />
// // // // //       </main>
// // // // //       <FooterControls
// // // // //         handleMarkForReview={handleMarkForReview}
// // // // //         showEndModal={showEndModal}
// // // // //         setShowEndModal={setShowEndModal}
// // // // //       />
// // // // //       <EndModal showEndModal={showEndModal} setShowEndModal={setShowEndModal} />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Page;

// // // // "use client";
// // // // import React, { useState, useEffect } from "react";
// // // // import { FaBars, FaSun, FaMoon } from "react-icons/fa";

// // // // // Sidebar Component
// // // // const Sidebar = ({
// // // //   totalQuestions,
// // // //   currentQuestion,
// // // //   markedQuestions,
// // // //   selectedAnswers,
// // // //   navigateToQuestion,
// // // //   isSidebarOpen,
// // // // }) => (
// // // //   <aside
// // // //     className={`w-full md:w-1/4 p-4 max-w-full overflow-y-auto ${
// // // //       isSidebarOpen ? "block" : "hidden md:block"
// // // //     }`}
// // // //   >
// // // //     <h2 className="text-lg font-bold">Questions</h2>
// // // //     <div className="grid grid-cols-5 gap-2 mt-2">
// // // //       {[...Array(totalQuestions)].map((_, index) => (
// // // //         <button
// // // //           key={index}
// // // //           onClick={() => navigateToQuestion(index)}
// // // //           className={`w-10 h-10 rounded overflow-hidden ${
// // // //             currentQuestion === index
// // // //               ? "bg-red-500"
// // // //               : markedQuestions.includes(index)
// // // //               ? "bg-purple-500"
// // // //               : selectedAnswers[index] !== undefined
// // // //               ? "bg-green-500"
// // // //               : "bg-gray-300"
// // // //           }`}
// // // //         >
// // // //           {index + 1}
// // // //         </button>
// // // //       ))}
// // // //     </div>
// // // //   </aside>
// // // // );

// // // // // Header Component
// // // // const Header = ({
// // // //   toggleSidebar,
// // // //   toggleDarkMode,
// // // //   isDarkMode,
// // // //   timer,
// // // //   togglePause,
// // // //   paused,
// // // // }) => (
// // // //   <header
// // // //     className={`flex flex-col p-4 ${
// // // //       isDarkMode ? "bg-gray-800" : "bg-gray-100"
// // // //     }`}
// // // //   >
// // // //     <div className="flex justify-between items-center">
// // // //       <button
// // // //         onClick={toggleSidebar}
// // // //         className={`p-2 ${
// // // //           isDarkMode ? "bg-gray-600" : "bg-gray-500"
// // // //         } text-white rounded md:hidden`}
// // // //       >
// // // //         <FaBars />
// // // //       </button>
// // // //       <h1 className="text-lg font-bold">Meadhikari Live Test</h1>
// // // //       <button
// // // //         onClick={toggleDarkMode}
// // // //         className={`p-2 rounded ${
// // // //           isDarkMode ? "bg-yellow-300" : "bg-gray-600 text-white"
// // // //         }`}
// // // //       >
// // // //         {isDarkMode ? <FaSun /> : <FaMoon />}
// // // //       </button>
// // // //     </div>
// // // //     <div className="flex justify-between items-center mt-4">
// // // //       <div className={isDarkMode ? "text-white" : "text-black"}>
// // // //         Time Left: {timer}
// // // //       </div>
// // // //       <button
// // // //         onClick={() => document.documentElement.requestFullscreen()}
// // // //         className="bg-blue-600 text-white px-2 py-1 rounded"
// // // //       >
// // // //         Fullscreen
// // // //       </button>
// // // //       <button
// // // //         onClick={togglePause}
// // // //         className={`px-2 py-1 rounded ${
// // // //           paused ? "bg-green-500" : "bg-yellow-500"
// // // //         }`}
// // // //       >
// // // //         {paused ? "Resume" : "Pause"}
// // // //       </button>
// // // //     </div>
// // // //   </header>
// // // // );

// // // // // Main Question Component
// // // // const QuestionPanel = ({
// // // //   currentQuestion,
// // // //   questions,
// // // //   selectedAnswers,
// // // //   handleOptionSelect,
// // // //   isDarkMode,
// // // // }) => (
// // // //   <section
// // // //     className={`flex-1 p-4 overflow-y-auto ${
// // // //       isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
// // // //     }`}
// // // //   >
// // // //     <h2 className="text-lg font-bold mb-4">Question {currentQuestion + 1}</h2>
// // // //     <p>{questions[currentQuestion]?.question}</p>
// // // //     <ul className="mt-4 space-y-2">
// // // //       {questions[currentQuestion]?.options.map((option, index) => (
// // // //         <li key={index} className="flex items-center space-x-2">
// // // //           <input
// // // //             type="radio"
// // // //             name="answer"
// // // //             checked={selectedAnswers[currentQuestion] === index}
// // // //             onChange={() => handleOptionSelect(index)}
// // // //           />
// // // //           <label>{option}</label>
// // // //         </li>
// // // //       ))}
// // // //     </ul>
// // // //   </section>
// // // // );

// // // // // Footer Controls Component
// // // // const FooterControls = ({
// // // //   handleMarkForReview,
// // // //   showEndModal,
// // // //   setShowEndModal,
// // // //   isDarkMode,
// // // // }) => (
// // // //   <footer
// // // //     className={`p-4 flex justify-between items-center ${
// // // //       isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100"
// // // //     }`}
// // // //   >
// // // //     <button
// // // //       onClick={handleMarkForReview}
// // // //       className="bg-purple-500 text-white px-4 py-2 rounded"
// // // //     >
// // // //       {showEndModal ? "Unmark Review" : "Mark for Review"}
// // // //     </button>
// // // //     <button
// // // //       onClick={() => setShowEndModal(true)}
// // // //       className="bg-red-500 text-white px-4 py-2 rounded"
// // // //     >
// // // //       Submit Test
// // // //     </button>
// // // //   </footer>
// // // // );

// // // // // Modal Component for End Test
// // // // const EndModal = ({ showEndModal, setShowEndModal }) =>
// // // //   showEndModal && (
// // // //     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
// // // //       <div className="bg-white p-6 rounded">
// // // //         <h2 className="text-lg font-bold">Confirm Submission</h2>
// // // //         <p>Are you sure you want to submit the test?</p>
// // // //         <div className="mt-4 flex justify-end space-x-4">
// // // //           <button
// // // //             onClick={() => setShowEndModal(false)}
// // // //             className="bg-gray-300 px-4 py-2 rounded"
// // // //           >
// // // //             Cancel
// // // //           </button>
// // // //           <button
// // // //             onClick={() => alert("Test Submitted!")}
// // // //             className="bg-red-500 text-white px-4 py-2 rounded"
// // // //           >
// // // //             Submit
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );

// // // // const Page = () => {
// // // //   const questions = [
// // // //     {
// // // //       id: 1,
// // // //       question:
// // // //         "Match the Modi 3.0 Cabinet Ministers to their respective ministries:",
// // // //       options: [
// // // //         "1-D, 2-C, 3-A, 4-B",
// // // //         "1-A, 2-C, 3-B, 4-D",
// // // //         "1-B, 2-C, 3-A, 4-D",
// // // //         "1-C, 2-A, 3-D, 4-B",
// // // //       ],
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       question: "Who is the Minister of Commerce and Industry in 2024?",
// // // //       options: [
// // // //         "Amit Shah",
// // // //         "Piyush Goyal",
// // // //         "Nirmala Sitharaman",
// // // //         "Jyotiraditya Scindia",
// // // //       ],
// // // //     },
// // // //     // Add more questions here...
// // // //   ];

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

// // // //   const togglePause = () => setPaused(!paused);

// // // //   const handleKeyDown = (e) => {
// // // //     if (e.key === "ArrowRight") {
// // // //       setCurrentQuestion((prev) => Math.min(prev + 1, totalQuestions - 1));
// // // //     }
// // // //     if (e.key === "ArrowLeft") {
// // // //       setCurrentQuestion((prev) => Math.max(prev, 0));
// // // //     }
// // // //     if (e.key === "r" || e.key === "R") handleMarkForReview();
// // // //   };

// // // //   useEffect(() => {
// // // //     window.addEventListener("keydown", handleKeyDown);
// // // //     return () => window.removeEventListener("keydown", handleKeyDown);
// // // //   }, [currentQuestion]);

// // // //   const summary = {
// // // //     answered: Object.keys(selectedAnswers).length,
// // // //     notVisited:
// // // //       totalQuestions -
// // // //       Object.keys(selectedAnswers).length -
// // // //       markedQuestions.length,
// // // //     marked: markedQuestions.length,
// // // //   };

// // // //   // Toggle dark/light mode
// // // //   const toggleDarkMode = () => {
// // // //     setIsDarkMode(!isDarkMode);
// // // //     document.documentElement.classList.toggle("dark", !isDarkMode);
// // // //     localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
// // // //   };

// // // //   // Apply theme from localStorage on initial load
// // // //   useEffect(() => {
// // // //     const savedTheme = localStorage.getItem("theme");
// // // //     if (savedTheme) {
// // // //       setIsDarkMode(savedTheme === "dark");
// // // //       document.documentElement.classList.toggle("dark", savedTheme === "dark");
// // // //     }
// // // //   }, []);

// // // //   return (
// // // //     <div
// // // //       className={`h-screen flex flex-col overflow-hidden ${
// // // //         isDarkMode ? "dark" : ""
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
// // // //           totalQuestions={totalQuestions}
// // // //           currentQuestion={currentQuestion}
// // // //           markedQuestions={markedQuestions}
// // // //           selectedAnswers={selectedAnswers}
// // // //           navigateToQuestion={navigateToQuestion}
// // // //           isSidebarOpen={isSidebarOpen}
// // // //         />
// // // //         <QuestionPanel
// // // //           currentQuestion={currentQuestion}
// // // //           questions={questions}
// // // //           selectedAnswers={selectedAnswers}
// // // //           handleOptionSelect={handleOptionSelect}
// // // //           isDarkMode={isDarkMode}
// // // //         />
// // // //       </main>
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
// // // import { FaBars, FaSun, FaMoon } from "react-icons/fa";

// // // // Sidebar Component
// // // const Sidebar = ({
// // //   totalQuestions,
// // //   currentQuestion,
// // //   markedQuestions,
// // //   selectedAnswers,
// // //   navigateToQuestion,
// // //   isSidebarOpen,
// // //   isDarkMode,
// // // }) => (
// // //   <aside
// // //     className={`w-full md:w-1/4 p-4 max-w-full overflow-y-auto ${
// // //       isSidebarOpen ? "block" : "hidden md:block"
// // //     }`}
// // //   >
// // //     <h2
// // //       className={`text-lg font-bold ${
// // //         isDarkMode ? "text-white" : "text-black"
// // //       }`}
// // //     >
// // //       Questions
// // //     </h2>
// // //     <div className="grid grid-cols-5 gap-2 mt-2">
// // //       {[...Array(totalQuestions)].map((_, index) => (
// // //         <button
// // //           key={index}
// // //           onClick={() => navigateToQuestion(index)}
// // //           className={`w-10 h-10 rounded overflow-hidden ${
// // //             currentQuestion === index
// // //               ? "bg-red-500"
// // //               : markedQuestions.includes(index)
// // //               ? "bg-purple-500"
// // //               : selectedAnswers[index] !== undefined
// // //               ? "bg-green-500"
// // //               : "bg-gray-300"
// // //           } ${isDarkMode ? "text-white" : "text-black"}`}
// // //         >
// // //           {index + 1}
// // //         </button>
// // //       ))}
// // //     </div>
// // //   </aside>
// // // );

// // // // Header Component
// // // const Header = ({
// // //   toggleSidebar,
// // //   toggleDarkMode,
// // //   isDarkMode,
// // //   timer,
// // //   togglePause,
// // //   paused,
// // // }) => (
// // //   <header
// // //     className={`flex flex-col p-4 ${
// // //       isDarkMode ? "bg-gray-800" : "bg-gray-100"
// // //     }`}
// // //   >
// // //     <div className="flex justify-between items-center">
// // //       <button
// // //         onClick={toggleSidebar}
// // //         className={`p-2 ${
// // //           isDarkMode ? "bg-gray-600" : "bg-gray-500"
// // //         } text-white rounded md:hidden`}
// // //       >
// // //         <FaBars />
// // //       </button>
// // //       <h1
// // //         className={`text-lg font-bold ${
// // //           isDarkMode ? "text-white" : "text-black"
// // //         }`}
// // //       >
// // //         Meadhikari Live Test
// // //       </h1>
// // //       <button
// // //         onClick={toggleDarkMode}
// // //         className={`p-2 rounded ${
// // //           isDarkMode ? "bg-yellow-300" : "bg-gray-600 text-white"
// // //         }`}
// // //       >
// // //         {isDarkMode ? <FaSun /> : <FaMoon />}
// // //       </button>
// // //     </div>
// // //     <div className="flex justify-between items-center mt-4">
// // //       <div className={isDarkMode ? "text-white" : "text-black"}>
// // //         Time Left: {timer}
// // //       </div>
// // //       <button
// // //         onClick={() => document.documentElement.requestFullscreen()}
// // //         className="bg-blue-600 text-white px-2 py-1 rounded"
// // //       >
// // //         Fullscreen
// // //       </button>
// // //       <button
// // //         onClick={togglePause}
// // //         className={`px-2 py-1 rounded ${
// // //           paused ? "bg-green-500" : "bg-yellow-500"
// // //         }`}
// // //       >
// // //         {paused ? "Resume" : "Pause"}
// // //       </button>
// // //     </div>
// // //   </header>
// // // );

// // // // Main Question Component
// // // const QuestionPanel = ({
// // //   currentQuestion,
// // //   questions,
// // //   selectedAnswers,
// // //   handleOptionSelect,
// // //   isDarkMode,
// // // }) => (
// // //   <section
// // //     className={`flex-1 p-4 overflow-y-auto ${
// // //       isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
// // //     }`}
// // //   >
// // //     <h2
// // //       className={`text-lg font-bold mb-4 ${
// // //         isDarkMode ? "text-white" : "text-black"
// // //       }`}
// // //     >
// // //       Question {currentQuestion + 1}
// // //     </h2>
// // //     <p>{questions[currentQuestion]?.question}</p>
// // //     <ul className="mt-4 space-y-2">
// // //       {questions[currentQuestion]?.options.map((option, index) => (
// // //         <li key={index} className="flex items-center space-x-2">
// // //           <input
// // //             type="radio"
// // //             name="answer"
// // //             checked={selectedAnswers[currentQuestion] === index}
// // //             onChange={() => handleOptionSelect(index)}
// // //           />
// // //           <label>{option}</label>
// // //         </li>
// // //       ))}
// // //     </ul>
// // //   </section>
// // // );

// // // // Footer Controls Component
// // // const FooterControls = ({
// // //   handleMarkForReview,
// // //   showEndModal,
// // //   setShowEndModal,
// // //   isDarkMode,
// // // }) => (
// // //   <footer
// // //     className={`p-4 flex justify-between items-center ${
// // //       isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100"
// // //     }`}
// // //   >
// // //     <button
// // //       onClick={handleMarkForReview}
// // //       className="bg-purple-500 text-white px-4 py-2 rounded"
// // //     >
// // //       {showEndModal ? "Unmark Review" : "Mark for Review"}
// // //     </button>
// // //     <button
// // //       onClick={() => setShowEndModal(true)}
// // //       className="bg-red-500 text-white px-4 py-2 rounded"
// // //     >
// // //       Submit Test
// // //     </button>
// // //   </footer>
// // // );

// // // // Modal Component for End Test
// // // const EndModal = ({ showEndModal, setShowEndModal }) =>
// // //   showEndModal && (
// // //     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
// // //       <div className="bg-white p-6 rounded">
// // //         <h2 className="text-lg font-bold">Confirm Submission</h2>
// // //         <p>Are you sure you want to submit the test?</p>
// // //         <div className="mt-4 flex justify-end space-x-4">
// // //           <button
// // //             onClick={() => setShowEndModal(false)}
// // //             className="bg-gray-300 px-4 py-2 rounded"
// // //           >
// // //             Cancel
// // //           </button>
// // //           <button
// // //             onClick={() => alert("Test Submitted!")}
// // //             className="bg-red-500 text-white px-4 py-2 rounded"
// // //           >
// // //             Submit
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );

// // // const Page = () => {
// // //   const questions = [
// // //     {
// // //       id: 1,
// // //       question:
// // //         "Match the Modi 3.0 Cabinet Ministers to their respective ministries:",
// // //       options: [
// // //         "1-D, 2-C, 3-A, 4-B",
// // //         "1-A, 2-C, 3-B, 4-D",
// // //         "1-B, 2-C, 3-A, 4-D",
// // //         "1-C, 2-A, 3-D, 4-B",
// // //       ],
// // //     },
// // //     {
// // //       id: 2,
// // //       question: "Who is the Minister of Commerce and Industry in 2024?",
// // //       options: [
// // //         "Amit Shah",
// // //         "Piyush Goyal",
// // //         "Nirmala Sitharaman",
// // //         "Jyotiraditya Scindia",
// // //       ],
// // //     },
// // //     // Add more questions here...
// // //   ];

// // //   const totalQuestions = 100;
// // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // //   const [markedQuestions, setMarkedQuestions] = useState([]);
// // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // //   const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
// // //   const [paused, setPaused] = useState(false);
// // //   const [showEndModal, setShowEndModal] = useState(false);
// // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle
// // //   const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

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

// // //   const togglePause = () => setPaused(!paused);

// // //   const handleKeyDown = (e) => {
// // //     if (e.key === "ArrowRight") {
// // //       setCurrentQuestion((prev) => Math.min(prev + 1, totalQuestions - 1));
// // //     }
// // //     if (e.key === "ArrowLeft") {
// // //       setCurrentQuestion((prev) => Math.max(prev, 0));
// // //     }
// // //     if (e.key === "r" || e.key === "R") handleMarkForReview();
// // //   };

// // //   useEffect(() => {
// // //     window.addEventListener("keydown", handleKeyDown);
// // //     return () => window.removeEventListener("keydown", handleKeyDown);
// // //   }, [currentQuestion]);

// // //   const summary = {
// // //     answered: Object.keys(selectedAnswers).length,
// // //     notVisited:
// // //       totalQuestions -
// // //       Object.keys(selectedAnswers).length -
// // //       markedQuestions.length,
// // //     marked: markedQuestions.length,
// // //   };

// // //   // Toggle dark/light mode
// // //   const toggleDarkMode = () => {
// // //     setIsDarkMode(!isDarkMode);
// // //   };

// // //   const toggleSidebar = () => {
// // //     setIsSidebarOpen(!isSidebarOpen);
// // //   };

// // //   return (
// // //     <div
// // //       className={`h-screen flex flex-col overflow-hidden ${
// // //         isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
// // //       }`}
// // //     >
// // //       <Header
// // //         toggleSidebar={toggleSidebar}
// // //         toggleDarkMode={toggleDarkMode}
// // //         isDarkMode={isDarkMode}
// // //         timer={formatTime(timer)}
// // //         togglePause={togglePause}
// // //         paused={paused}
// // //       />
// // //       <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
// // //         <Sidebar
// // //           totalQuestions={totalQuestions}
// // //           currentQuestion={currentQuestion}
// // //           markedQuestions={markedQuestions}
// // //           selectedAnswers={selectedAnswers}
// // //           navigateToQuestion={navigateToQuestion}
// // //           isSidebarOpen={isSidebarOpen}
// // //           isDarkMode={isDarkMode}
// // //         />
// // //         <QuestionPanel
// // //           currentQuestion={currentQuestion}
// // //           questions={questions}
// // //           selectedAnswers={selectedAnswers}
// // //           handleOptionSelect={handleOptionSelect}
// // //           isDarkMode={isDarkMode}
// // //         />
// // //       </main>
// // //       <FooterControls
// // //         handleMarkForReview={handleMarkForReview}
// // //         showEndModal={showEndModal}
// // //         setShowEndModal={setShowEndModal}
// // //         isDarkMode={isDarkMode}
// // //       />
// // //       <EndModal showEndModal={showEndModal} setShowEndModal={setShowEndModal} />
// // //     </div>
// // //   );
// // // };

// // // export default Page;

// // // "use client";
// // // import React, { useState, useEffect } from "react";
// // // import { FaBars, FaSun, FaMoon } from "react-icons/fa";

// // // // Sidebar Component
// // // const Sidebar = ({
// // //   totalQuestions,
// // //   currentQuestion,
// // //   markedQuestions,
// // //   selectedAnswers,
// // //   navigateToQuestion,
// // //   isSidebarOpen,
// // //   isDarkMode,
// // // }) => (
// // //   <aside
// // //     className={`w-full md:w-1/4 p-4 max-w-full overflow-y-auto ${
// // //       isSidebarOpen ? "block" : "hidden md:block"
// // //     }`}
// // //   >
// // //     <h2
// // //       className={`text-lg font-bold ${
// // //         isDarkMode ? "text-white" : "text-black"
// // //       }`}
// // //     >
// // //       Questions
// // //     </h2>
// // //     <div className="grid grid-cols-5 gap-2 mt-2">
// // //       {[...Array(totalQuestions)].map((_, index) => (
// // //         <button
// // //           key={index}
// // //           onClick={() => navigateToQuestion(index)}
// // //           className={`w-10 h-10 rounded overflow-hidden ${
// // //             currentQuestion === index
// // //               ? "bg-red-500"
// // //               : markedQuestions.includes(index)
// // //               ? "bg-purple-500"
// // //               : selectedAnswers[index] !== undefined
// // //               ? "bg-green-500"
// // //               : "bg-gray-300"
// // //           } ${isDarkMode ? "text-white" : "text-black"}`}
// // //         >
// // //           {index + 1}
// // //         </button>
// // //       ))}
// // //     </div>
// // //   </aside>
// // // );

// // // // Header Component
// // // const Header = ({
// // //   toggleSidebar,
// // //   toggleDarkMode,
// // //   isDarkMode,
// // //   timer,
// // //   togglePause,
// // //   paused,
// // // }) => (
// // //   <header
// // //     className={`flex flex-col md:flex-row justify-between items-center p-4 ${
// // //       isDarkMode ? "bg-gray-800" : "bg-gray-100"
// // //     }`}
// // //   >
// // //     <div className="flex items-center mb-4 md:mb-0">
// // //       <button
// // //         onClick={toggleSidebar}
// // //         className={`p-2 ${
// // //           isDarkMode ? "bg-gray-600" : "bg-gray-500"
// // //         } text-white rounded md:hidden`}
// // //       >
// // //         <FaBars />
// // //       </button>
// // //       <h1
// // //         className={`ml-4 text-lg font-bold ${
// // //           isDarkMode ? "text-white" : "text-black"
// // //         }`}
// // //       >
// // //         Meadhikari Live Test
// // //       </h1>
// // //     </div>

// // //     <div className="flex items-center space-x-4">
// // //       <div className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>
// // //         Time Left: {timer}
// // //       </div>
// // //       <button
// // //         onClick={() => document.documentElement.requestFullscreen()}
// // //         className="bg-blue-600 text-white px-2 py-1 rounded"
// // //       >
// // //         Fullscreen
// // //       </button>
// // //       <button
// // //         onClick={togglePause}
// // //         className={`px-2 py-1 rounded ${
// // //           paused ? "bg-green-500" : "bg-yellow-500"
// // //         }`}
// // //       >
// // //         {paused ? "Resume" : "Pause"}
// // //       </button>
// // //       <button
// // //         onClick={toggleDarkMode}
// // //         className={`p-2 rounded ${
// // //           isDarkMode ? "bg-yellow-300" : "bg-gray-600 text-white"
// // //         }`}
// // //       >
// // //         {isDarkMode ? <FaSun /> : <FaMoon />}
// // //       </button>
// // //     </div>
// // //   </header>
// // // );

// // // // Main Question Component
// // // const QuestionPanel = ({
// // //   currentQuestion,
// // //   questions,
// // //   selectedAnswers,
// // //   handleOptionSelect,
// // //   isDarkMode,
// // // }) => (
// // //   <section
// // //     className={`flex-1 p-4 overflow-y-auto ${
// // //       isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
// // //     }`}
// // //   >
// // //     <h2
// // //       className={`text-lg font-bold mb-4 ${
// // //         isDarkMode ? "text-white" : "text-black"
// // //       }`}
// // //     >
// // //       Question {currentQuestion + 1}
// // //     </h2>
// // //     <p>{questions[currentQuestion]?.question}</p>
// // //     <ul className="mt-4 space-y-2">
// // //       {questions[currentQuestion]?.options.map((option, index) => (
// // //         <li key={index} className="flex items-center space-x-2">
// // //           <input
// // //             type="radio"
// // //             name="answer"
// // //             checked={selectedAnswers[currentQuestion] === index}
// // //             onChange={() => handleOptionSelect(index)}
// // //           />
// // //           <label>{option}</label>
// // //         </li>
// // //       ))}
// // //     </ul>
// // //   </section>
// // // );

// // // // Footer Controls Component
// // // const FooterControls = ({
// // //   handleMarkForReview,
// // //   showEndModal,
// // //   setShowEndModal,
// // //   isDarkMode,
// // // }) => (
// // //   <footer
// // //     className={`p-4 flex justify-between items-center ${
// // //       isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100"
// // //     }`}
// // //   >
// // //     <button
// // //       onClick={handleMarkForReview}
// // //       className="bg-purple-500 text-white px-4 py-2 rounded"
// // //     >
// // //       {showEndModal ? "Unmark Review" : "Mark for Review"}
// // //     </button>
// // //     <button
// // //       onClick={() => setShowEndModal(true)}
// // //       className="bg-red-500 text-white px-4 py-2 rounded"
// // //     >
// // //       Submit Test
// // //     </button>
// // //   </footer>
// // // );

// // // // Modal Component for End Test
// // // const EndModal = ({ showEndModal, setShowEndModal }) =>
// // //   showEndModal && (
// // //     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
// // //       <div className="bg-white p-6 rounded">
// // //         <h2 className="text-lg font-bold">Confirm Submission</h2>
// // //         <p>Are you sure you want to submit the test?</p>
// // //         <div className="mt-4 flex justify-end space-x-4">
// // //           <button
// // //             onClick={() => setShowEndModal(false)}
// // //             className="bg-gray-300 px-4 py-2 rounded"
// // //           >
// // //             Cancel
// // //           </button>
// // //           <button
// // //             onClick={() => alert("Test Submitted!")}
// // //             className="bg-red-500 text-white px-4 py-2 rounded"
// // //           >
// // //             Submit
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );

// // // const Page = () => {
// // //   const questions = [
// // //     {
// // //       id: 1,
// // //       question:
// // //         "Match the Modi 3.0 Cabinet Ministers to their respective ministries:",
// // //       options: [
// // //         "1-D, 2-C, 3-A, 4-B",
// // //         "1-A, 2-C, 3-B, 4-D",
// // //         "1-B, 2-C, 3-A, 4-D",
// // //         "1-C, 2-A, 3-D, 4-B",
// // //       ],
// // //     },
// // //     {
// // //       id: 2,
// // //       question: "Who is the Minister of Commerce and Industry in 2024?",
// // //       options: [
// // //         "Amit Shah",
// // //         "Piyush Goyal",
// // //         "Nirmala Sitharaman",
// // //         "Jyotiraditya Scindia",
// // //       ],
// // //     },
// // //     // Add more questions here...
// // //   ];

// // //   const totalQuestions = 100;
// // //   const [currentQuestion, setCurrentQuestion] = useState(0);
// // //   const [markedQuestions, setMarkedQuestions] = useState([]);
// // //   const [selectedAnswers, setSelectedAnswers] = useState({});
// // //   const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
// // //   const [paused, setPaused] = useState(false);
// // //   const [showEndModal, setShowEndModal] = useState(false);
// // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle
// // //   const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

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

// // //   const togglePause = () => setPaused(!paused);

// // //   const handleKeyDown = (e) => {
// // //     if (e.key === "ArrowRight") {
// // //       setCurrentQuestion((prev) => Math.min(prev + 1, totalQuestions - 1));
// // //     }
// // //     if (e.key === "ArrowLeft") {
// // //       setCurrentQuestion((prev) => Math.max(prev, 0));
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
// // //           totalQuestions={totalQuestions}
// // //           currentQuestion={currentQuestion}
// // //           markedQuestions={markedQuestions}
// // //           selectedAnswers={selectedAnswers}
// // //           navigateToQuestion={navigateToQuestion}
// // //           isSidebarOpen={isSidebarOpen}
// // //           isDarkMode={isDarkMode}
// // //         />
// // //         <QuestionPanel
// // //           currentQuestion={currentQuestion}
// // //           questions={questions}
// // //           selectedAnswers={selectedAnswers}
// // //           handleOptionSelect={handleOptionSelect}
// // //           isDarkMode={isDarkMode}
// // //         />
// // //       </main>
// // //       <FooterControls
// // //         handleMarkForReview={handleMarkForReview}
// // //         showEndModal={showEndModal}
// // //         setShowEndModal={setShowEndModal}
// // //         isDarkMode={isDarkMode}
// // //       />
// // //       <EndModal showEndModal={showEndModal} setShowEndModal={setShowEndModal} />
// // //     </div>
// // //   );
// // // };

// // // export default Page;

// // "use client";
// // import React, { useState, useEffect } from "react";
// // import { FaBars, FaSun, FaMoon } from "react-icons/fa";

// // // Sidebar Component
// // const Sidebar = ({
// //   totalQuestions,
// //   currentQuestion,
// //   markedQuestions,
// //   selectedAnswers,
// //   navigateToQuestion,
// //   isSidebarOpen,
// //   isDarkMode,
// // }) => (
// //   <aside
// //     className={`w-full md:w-1/4 p-4 max-w-full overflow-y-auto ${
// //       isSidebarOpen ? "block" : "hidden md:block"
// //     }`}
// //   >
// //     <h2
// //       className={`text-lg font-bold ${
// //         isDarkMode ? "text-white" : "text-black"
// //       }`}
// //     >
// //       Questions
// //     </h2>
// //     <div className="grid grid-cols-5 gap-2 mt-2">
// //       {[...Array(totalQuestions)].map((_, index) => (
// //         <button
// //           key={index}
// //           onClick={() => navigateToQuestion(index)}
// //           className={`w-10 h-10 rounded overflow-hidden ${
// //             currentQuestion === index
// //               ? "bg-red-500"
// //               : markedQuestions.includes(index)
// //               ? "bg-purple-500"
// //               : selectedAnswers[index] !== undefined
// //               ? "bg-green-500"
// //               : "bg-gray-300"
// //           } ${isDarkMode ? "text-white" : "text-black"}`}
// //         >
// //           {index + 1}
// //         </button>
// //       ))}
// //     </div>
// //   </aside>
// // );

// // // Header Component
// // const Header = ({
// //   toggleSidebar,
// //   toggleDarkMode,
// //   isDarkMode,
// //   timer,
// //   togglePause,
// //   paused,
// // }) => (
// //   <header
// //     className={`flex flex-col md:flex-row justify-between items-center p-4 ${
// //       isDarkMode ? "bg-gray-800" : "bg-gray-100"
// //     }`}
// //   >
// //     <div className="flex items-center mb-4 md:mb-0">
// //       <button
// //         onClick={toggleSidebar}
// //         className={`p-2 ${
// //           isDarkMode ? "bg-gray-600" : "bg-gray-500"
// //         } text-white rounded md:hidden`}
// //       >
// //         <FaBars />
// //       </button>
// //       <h1
// //         className={`ml-4 text-lg font-bold ${
// //           isDarkMode ? "text-white" : "text-black"
// //         }`}
// //       >
// //         Meadhikari Live Test
// //       </h1>
// //     </div>

// //     <div className="flex items-center space-x-4">
// //       <div className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>
// //         Time Left: {timer}
// //       </div>
// //       <button
// //         onClick={() => document.documentElement.requestFullscreen()}
// //         className="bg-blue-600 text-white px-2 py-1 rounded"
// //       >
// //         Fullscreen
// //       </button>
// //       <button
// //         onClick={togglePause}
// //         className={`px-2 py-1 rounded ${
// //           paused ? "bg-green-500" : "bg-yellow-500"
// //         }`}
// //       >
// //         {paused ? "Resume" : "Pause"}
// //       </button>
// //       <button
// //         onClick={toggleDarkMode}
// //         className={`p-2 rounded ${
// //           isDarkMode ? "bg-yellow-300" : "bg-gray-600 text-white"
// //         }`}
// //       >
// //         {isDarkMode ? <FaSun /> : <FaMoon />}
// //       </button>
// //     </div>
// //   </header>
// // );

// // // StatsRow Component
// // const StatsRow = ({ totalQuestions, selectedAnswers, markedQuestions }) => {
// //   const attempted = Object.keys(selectedAnswers).length; // Attempted questions
// //   const notVisited = totalQuestions - attempted - markedQuestions.length; // Not visited questions
// //   const markedForReview = markedQuestions.length; // Marked for review questions

// //   return (
// //     <div className="w-full flex justify-between items-center p-4 bg-gray-200">
// //       <div className="flex items-center space-x-2">
// //         <span className="font-bold">Marked for Review:</span>
// //         <span>{markedForReview}</span>
// //       </div>
// //       <div className="flex items-center space-x-2">
// //         <span className="font-bold">Attempted Questions:</span>
// //         <span>{attempted}</span>
// //       </div>
// //       <div className="flex items-center space-x-2">
// //         <span className="font-bold">Not Visited:</span>
// //         <span>{notVisited}</span>
// //       </div>
// //     </div>
// //   );
// // };

// // // Main Question Component
// // const QuestionPanel = ({
// //   currentQuestion,
// //   questions,
// //   selectedAnswers,
// //   handleOptionSelect,
// //   isDarkMode,
// // }) => (
// //   <section
// //     className={`flex-1 p-4 overflow-y-auto ${
// //       isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
// //     }`}
// //   >
// //     <h2
// //       className={`text-lg font-bold mb-4 ${
// //         isDarkMode ? "text-white" : "text-black"
// //       }`}
// //     >
// //       Question {currentQuestion + 1}
// //     </h2>
// //     <p>{questions[currentQuestion]?.question}</p>
// //     <ul className="mt-4 space-y-2">
// //       {questions[currentQuestion]?.options.map((option, index) => (
// //         <li key={index} className="flex items-center space-x-2">
// //           <input
// //             type="radio"
// //             name="answer"
// //             checked={selectedAnswers[currentQuestion] === index}
// //             onChange={() => handleOptionSelect(index)}
// //           />
// //           <label>{option}</label>
// //         </li>
// //       ))}
// //     </ul>
// //   </section>
// // );

// // // Footer Controls Component
// // const FooterControls = ({
// //   handleMarkForReview,
// //   showEndModal,
// //   setShowEndModal,
// //   isDarkMode,
// // }) => (
// //   <footer
// //     className={`p-4 flex justify-between items-center ${
// //       isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100"
// //     }`}
// //   >
// //     <button
// //       onClick={handleMarkForReview}
// //       className="bg-purple-500 text-white px-4 py-2 rounded"
// //     >
// //       {showEndModal ? "Unmark Review" : "Mark for Review"}
// //     </button>
// //     <button
// //       onClick={() => setShowEndModal(true)}
// //       className="bg-red-500 text-white px-4 py-2 rounded"
// //     >
// //       Submit Test
// //     </button>
// //   </footer>
// // );

// // // Modal Component for End Test
// // const EndModal = ({ showEndModal, setShowEndModal }) =>
// //   showEndModal && (
// //     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
// //       <div className="bg-white p-6 rounded">
// //         <h2 className="text-lg font-bold">Confirm Submission</h2>
// //         <p>Are you sure you want to submit the test?</p>
// //         <div className="mt-4 flex justify-end space-x-4">
// //           <button
// //             onClick={() => setShowEndModal(false)}
// //             className="bg-gray-300 px-4 py-2 rounded"
// //           >
// //             Cancel
// //           </button>
// //           <button
// //             onClick={() => alert("Test Submitted!")}
// //             className="bg-red-500 text-white px-4 py-2 rounded"
// //           >
// //             Submit
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );

// // const Page = () => {
// //   const questions = [
// //     {
// //       id: 1,
// //       question:
// //         "Match the Modi 3.0 Cabinet Ministers to their respective ministries:",
// //       options: [
// //         "1-D, 2-C, 3-A, 4-B",
// //         "1-A, 2-C, 3-B, 4-D",
// //         "1-B, 2-C, 3-A, 4-D",
// //         "1-C, 2-A, 3-D, 4-B",
// //       ],
// //     },
// //     {
// //       id: 2,
// //       question: "Who is the Minister of Commerce and Industry in 2024?",
// //       options: [
// //         "Amit Shah",
// //         "Piyush Goyal",
// //         "Nirmala Sitharaman",
// //         "Jyotiraditya Scindia",
// //       ],
// //     },
// //     // Add more questions here...
// //   ];

// //   const totalQuestions = 100;
// //   const [currentQuestion, setCurrentQuestion] = useState(0);
// //   const [markedQuestions, setMarkedQuestions] = useState([]);
// //   const [selectedAnswers, setSelectedAnswers] = useState({});
// //   const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
// //   const [paused, setPaused] = useState(false);
// //   const [showEndModal, setShowEndModal] = useState(false);
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle
// //   const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

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

// //   const formatTime = (time) => {
// //     const minutes = Math.floor(time / 60);
// //     const seconds = time % 60;
// //     return `${minutes.toString().padStart(2, "0")}:${seconds
// //       .toString()
// //       .padStart(2, "0")}`;
// //   };

// //   const handleOptionSelect = (index) => {
// //     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
// //   };

// //   const handleMarkForReview = () => {
// //     if (markedQuestions.includes(currentQuestion)) {
// //       setMarkedQuestions(markedQuestions.filter((q) => q !== currentQuestion));
// //     } else {
// //       setMarkedQuestions([...markedQuestions, currentQuestion]);
// //     }
// //   };

// //   const navigateToQuestion = (index) => setCurrentQuestion(index);

// //   const togglePause = () => setPaused(!paused);

// //   const handleKeyDown = (e) => {
// //     if (e.key === "ArrowRight") {
// //       setCurrentQuestion((prev) => Math.min(prev + 1, totalQuestions - 1));
// //     }
// //     if (e.key === "ArrowLeft") {
// //       setCurrentQuestion((prev) => Math.max(prev, 0));
// //     }
// //     if (e.key === "r" || e.key === "R") handleMarkForReview();
// //   };

// //   useEffect(() => {
// //     window.addEventListener("keydown", handleKeyDown);
// //     return () => window.removeEventListener("keydown", handleKeyDown);
// //   }, [currentQuestion]);

// //   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

// //   return (
// //     <div
// //       className={`h-screen flex flex-col overflow-hidden ${
// //         isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
// //       }`}
// //     >
// //       <Header
// //         toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
// //         toggleDarkMode={toggleDarkMode}
// //         isDarkMode={isDarkMode}
// //         timer={formatTime(timer)}
// //         togglePause={togglePause}
// //         paused={paused}
// //       />
// //       <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
// //         <Sidebar
// //           totalQuestions={totalQuestions}
// //           currentQuestion={currentQuestion}
// //           markedQuestions={markedQuestions}
// //           selectedAnswers={selectedAnswers}
// //           navigateToQuestion={navigateToQuestion}
// //           isSidebarOpen={isSidebarOpen}
// //           isDarkMode={isDarkMode}
// //         />
// //         <QuestionPanel
// //           currentQuestion={currentQuestion}
// //           questions={questions}
// //           selectedAnswers={selectedAnswers}
// //           handleOptionSelect={handleOptionSelect}
// //           isDarkMode={isDarkMode}
// //         />
// //       </main>
// //       <StatsRow
// //         totalQuestions={totalQuestions}
// //         selectedAnswers={selectedAnswers}
// //         markedQuestions={markedQuestions}
// //       />
// //       <FooterControls
// //         handleMarkForReview={handleMarkForReview}
// //         showEndModal={showEndModal}
// //         setShowEndModal={setShowEndModal}
// //         isDarkMode={isDarkMode}
// //       />
// //       <EndModal showEndModal={showEndModal} setShowEndModal={setShowEndModal} />
// //     </div>
// //   );
// // };

// // export default Page;

// "use client";
// import React, { useState, useEffect } from "react";
// import { FaBars, FaSun, FaMoon } from "react-icons/fa";

// // Sidebar Component
// const Sidebar = ({
//   totalQuestions,
//   currentQuestion,
//   markedQuestions,
//   selectedAnswers,
//   navigateToQuestion,
//   isSidebarOpen,
//   isDarkMode,
// }) => (
//   <aside
//     className={`w-full md:w-1/4 p-4 max-w-full overflow-y-auto ${
//       isSidebarOpen ? "block" : "hidden md:block"
//     }`}
//   >
//     <h2
//       className={`text-lg font-bold ${
//         isDarkMode ? "text-white" : "text-black"
//       }`}
//     >
//       Questions
//     </h2>
//     <div className="grid grid-cols-5 gap-2 mt-2">
//       {[...Array(totalQuestions)].map((_, index) => (
//         <button
//           key={index}
//           onClick={() => navigateToQuestion(index)}
//           className={`w-10 h-10 rounded overflow-hidden ${
//             currentQuestion === index
//               ? "bg-red-500"
//               : markedQuestions.includes(index)
//               ? "bg-purple-500"
//               : selectedAnswers[index] !== undefined
//               ? "bg-green-500"
//               : "bg-gray-300"
//           } ${isDarkMode ? "text-white" : "text-black"}`}
//         >
//           {index + 1}
//         </button>
//       ))}
//     </div>
//   </aside>
// );

// // Header Component
// const Header = ({
//   toggleSidebar,
//   toggleDarkMode,
//   isDarkMode,
//   timer,
//   togglePause,
//   paused,
// }) => (
//   <header
//     className={`flex flex-col md:flex-row justify-between items-center p-4 ${
//       isDarkMode ? "bg-gray-800" : "bg-gray-100"
//     }`}
//   >
//     <div className="flex items-center mb-4 md:mb-0">
//       <button
//         onClick={toggleSidebar}
//         className={`p-2 ${
//           isDarkMode ? "bg-gray-600" : "bg-gray-500"
//         } text-white rounded md:hidden`}
//       >
//         <FaBars />
//       </button>
//       <h1
//         className={`ml-4 text-lg font-bold ${
//           isDarkMode ? "text-white" : "text-black"
//         }`}
//       >
//         Meadhikari Live Test
//       </h1>
//     </div>

//     <div className="flex items-center space-x-4">
//       <div className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>
//         Time Left: {timer}
//       </div>
//       <button
//         onClick={() => document.documentElement.requestFullscreen()}
//         className="bg-blue-600 text-white px-2 py-1 rounded"
//       >
//         Fullscreen
//       </button>
//       <button
//         onClick={togglePause}
//         className={`px-2 py-1 rounded ${
//           paused ? "bg-green-500" : "bg-yellow-500"
//         }`}
//       >
//         {paused ? "Resume" : "Pause"}
//       </button>
//       <button
//         onClick={toggleDarkMode}
//         className={`p-2 rounded ${
//           isDarkMode ? "bg-yellow-300" : "bg-gray-600 text-white"
//         }`}
//       >
//         {isDarkMode ? <FaSun /> : <FaMoon />}
//       </button>
//     </div>
//   </header>
// );

// // StatsRow Component
// const StatsRow = ({
//   totalQuestions,
//   selectedAnswers,
//   markedQuestions,
//   isDarkMode,
// }) => {
//   const attempted = Object.keys(selectedAnswers).length; // Attempted questions
//   const notVisited = totalQuestions - attempted - markedQuestions.length; // Not visited questions
//   const markedForReview = markedQuestions.length; // Marked for review questions

//   return (
//     <div
//       className={`w-full flex justify-between items-center p-4 ${
//         isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
//       }`}
//     >
//       <div className="flex items-center space-x-2">
//         <span className="font-bold">Marked for Review:</span>
//         <span>{markedForReview}</span>
//       </div>
//       <div className="flex items-center space-x-2">
//         <span className="font-bold">Attempted Questions:</span>
//         <span>{attempted}</span>
//       </div>
//       <div className="flex items-center space-x-2">
//         <span className="font-bold">Not Visited:</span>
//         <span>{notVisited}</span>
//       </div>
//     </div>
//   );
// };

// // Question Panel Component
// const QuestionPanel = ({
//   currentQuestion,
//   questions,
//   selectedAnswers,
//   handleOptionSelect,
//   isDarkMode,
// }) => (
//   <section
//     className={`flex-1 p-4 overflow-y-auto ${
//       isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
//     }`}
//   >
//     <h2
//       className={`text-lg font-bold mb-4 ${
//         isDarkMode ? "text-white" : "text-black"
//       }`}
//     >
//       Question {currentQuestion + 1}
//     </h2>
//     <p>{questions[currentQuestion]?.question}</p>
//     <ul className="mt-4 space-y-2">
//       {questions[currentQuestion]?.options.map((option, index) => (
//         <li key={index} className="flex items-center space-x-2">
//           <input
//             type="radio"
//             name="answer"
//             checked={selectedAnswers[currentQuestion] === index}
//             onChange={() => handleOptionSelect(index)}
//           />
//           <label>{option}</label>
//         </li>
//       ))}
//     </ul>
//   </section>
// );

// // Footer Controls Component
// const FooterControls = ({
//   handleMarkForReview,
//   showEndModal,
//   setShowEndModal,
//   isDarkMode,
// }) => (
//   <footer
//     className={`p-4 flex justify-between items-center ${
//       isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100"
//     }`}
//   >
//     <button
//       onClick={handleMarkForReview}
//       className="bg-purple-500 text-white px-4 py-2 rounded"
//     >
//       {showEndModal ? "Unmark Review" : "Mark for Review"}
//     </button>
//     <button
//       onClick={() => setShowEndModal(true)}
//       className="bg-red-500 text-white px-4 py-2 rounded"
//     >
//       Submit Test
//     </button>
//   </footer>
// );

// // Modal Component for End Test
// const EndModal = ({ showEndModal, setShowEndModal }) =>
//   showEndModal && (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded">
//         <h2 className="text-lg font-bold">Confirm Submission</h2>
//         <p>Are you sure you want to submit the test?</p>
//         <div className="mt-4 flex justify-end space-x-4">
//           <button
//             onClick={() => setShowEndModal(false)}
//             className="bg-gray-300 px-4 py-2 rounded"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={() => alert("Test Submitted!")}
//             className="bg-red-500 text-white px-4 py-2 rounded"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );

// const Page = () => {
//   const questions = [
//     {
//       id: 1,
//       question:
//         "Match the Modi 3.0 Cabinet Ministers to their respective ministries:",
//       options: [
//         "1-D, 2-C, 3-A, 4-B",
//         "1-A, 2-C, 3-B, 4-D",
//         "1-B, 2-C, 3-A, 4-D",
//         "1-C, 2-A, 3-D, 4-B",
//       ],
//     },
//     {
//       id: 2,
//       question: "Who is the Minister of Commerce and Industry in 2024?",
//       options: [
//         "Amit Shah",
//         "Piyush Goyal",
//         "Nirmala Sitharaman",
//         "Jyotiraditya Scindia",
//       ],
//     },
//     // Add more questions here...
//   ];

//   const totalQuestions = 100;
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [markedQuestions, setMarkedQuestions] = useState([]);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
//   const [paused, setPaused] = useState(false);
//   const [showEndModal, setShowEndModal] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle
//   const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

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

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes.toString().padStart(2, "0")}:${seconds
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   const handleOptionSelect = (index) => {
//     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
//   };

//   const handleMarkForReview = () => {
//     if (markedQuestions.includes(currentQuestion)) {
//       setMarkedQuestions(markedQuestions.filter((q) => q !== currentQuestion));
//     } else {
//       setMarkedQuestions([...markedQuestions, currentQuestion]);
//     }
//   };

//   const navigateToQuestion = (index) => setCurrentQuestion(index);

//   const togglePause = () => setPaused(!paused);

//   const handleKeyDown = (e) => {
//     if (e.key === "ArrowRight") {
//       setCurrentQuestion((prev) => Math.min(prev + 1, totalQuestions - 1));
//     }
//     if (e.key === "ArrowLeft") {
//       setCurrentQuestion((prev) => Math.max(prev, 0));
//     }
//     if (e.key === "r" || e.key === "R") handleMarkForReview();
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [currentQuestion]);

//   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

//   return (
//     <div
//       className={`h-screen flex flex-col overflow-hidden ${
//         isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
//       }`}
//     >
//       <Header
//         toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
//         toggleDarkMode={toggleDarkMode}
//         isDarkMode={isDarkMode}
//         timer={formatTime(timer)}
//         togglePause={togglePause}
//         paused={paused}
//       />
//       <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
//         <Sidebar
//           totalQuestions={totalQuestions}
//           currentQuestion={currentQuestion}
//           markedQuestions={markedQuestions}
//           selectedAnswers={selectedAnswers}
//           navigateToQuestion={navigateToQuestion}
//           isSidebarOpen={isSidebarOpen}
//           isDarkMode={isDarkMode}
//         />
//         <QuestionPanel
//           currentQuestion={currentQuestion}
//           questions={questions}
//           selectedAnswers={selectedAnswers}
//           handleOptionSelect={handleOptionSelect}
//           isDarkMode={isDarkMode}
//         />
//       </main>
//       <StatsRow
//         totalQuestions={totalQuestions}
//         selectedAnswers={selectedAnswers}
//         markedQuestions={markedQuestions}
//         isDarkMode={isDarkMode}
//       />
//       <FooterControls
//         handleMarkForReview={handleMarkForReview}
//         showEndModal={showEndModal}
//         setShowEndModal={setShowEndModal}
//         isDarkMode={isDarkMode}
//       />
//       <EndModal showEndModal={showEndModal} setShowEndModal={setShowEndModal} />
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";

const Sidebar = ({
  totalQuestions,
  currentQuestion,
  markedQuestions,
  selectedAnswers,
  navigateToQuestion,
  isSidebarOpen,
  setIsSidebarOpen,
  isDarkMode,
}) => (
  <aside
    className={`w-full md:w-1/4 p-4 max-w-full overflow-y-auto ${
      isSidebarOpen ? "block" : "hidden md:block"
    } ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}
  >
    <h2 className="text-lg font-bold">Questions</h2>
    <div className="grid grid-cols-5 gap-2 mt-2">
      {[...Array(totalQuestions)].map((_, index) => {
        const isCurrent = currentQuestion === index;
        const isMarked = markedQuestions.includes(index);
        const isSelected = selectedAnswers[index] !== undefined;

        return (
          <button
            key={index}
            onClick={() => {
              navigateToQuestion(index);
              setIsSidebarOpen(false);
            }}
            className={`w-10 h-10 rounded overflow-hidden ${
              isCurrent
                ? isDarkMode
                  ? "bg-red-600 text-white"
                  : "bg-red-500 text-black"
                : isMarked
                ? isDarkMode
                  ? "bg-purple-600 text-white"
                  : "bg-purple-500 text-black"
                : isSelected
                ? isDarkMode
                  ? "bg-green-600 text-white"
                  : "bg-green-500 text-black"
                : isDarkMode
                ? "bg-gray-700 text-gray-300"
                : "bg-gray-300 text-black"
            }`}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  </aside>
);

// Header Component
const Header = ({
  toggleSidebar,
  toggleDarkMode,
  isDarkMode,
  timer,
  togglePause,
  paused,
}) => (
  <header
    className={`flex flex-col md:flex-row justify-between items-center p-4 ${
      isDarkMode ? "bg-gray-800" : "bg-gray-100"
    }`}
  >
    <div className="flex items-center mb-4 md:mb-0">
      <button
        onClick={toggleSidebar}
        className={`p-2 ${
          isDarkMode ? "bg-gray-600" : "bg-gray-500"
        } text-white rounded md:hidden`}
      >
        <FaBars />
      </button>
      <h1
        className={`ml-4 text-base md:text-lg font-bold ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Meadhikari Live Test
      </h1>
    </div>

    <div className="flex items-center space-x-4">
      <div
        className={`text-sm md:text-lg ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Time Left: {timer}
      </div>
      <button
        onClick={() => document.documentElement.requestFullscreen()}
        className="bg-blue-600 text-white px-2 py-1 rounded"
      >
        Fullscreen
      </button>
      <button
        onClick={togglePause}
        className={`px-2 py-1 rounded ${
          paused ? "bg-green-500" : "bg-yellow-500"
        }`}
      >
        {paused ? "Resume" : "Pause"}
      </button>
      <button
        onClick={toggleDarkMode}
        className={`p-2 rounded ${
          isDarkMode ? "bg-yellow-300" : "bg-gray-600 text-white"
        }`}
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  </header>
);

const StatsRow = ({
  totalQuestions,
  selectedAnswers,
  markedQuestions,
  isDarkMode,
}) => {
  const attempted = Object.keys(selectedAnswers).length; // Attempted questions
  const notVisited = totalQuestions - attempted - markedQuestions.length; // Not visited questions
  const markedForReview = markedQuestions.length; // Marked for review questions

  return (
    <div
      className={`w-full flex flex-col sm:flex-row justify-between items-center p-4 ${
        isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base lg:text-lg">
        <span className="font-bold whitespace-nowrap">Marked for Review:</span>
        <span>{markedForReview}</span>
      </div>
      <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base lg:text-lg">
        <span className="font-bold whitespace-nowrap">
          Attempted Questions:
        </span>
        <span>{attempted}</span>
      </div>
      <div className="flex items-center space-x-2 text-xs sm:text-sm md:text-base lg:text-lg">
        <span className="font-bold whitespace-nowrap">Not Visited:</span>
        <span>{notVisited}</span>
      </div>
    </div>
  );
};

// const QuestionPanel = ({
//   currentQuestion,
//   questions,
//   selectedAnswers,
//   handleOptionSelect,
//   isDarkMode,
//   handleNextQuestion,
//   handlePrevQuestion,
// }) => (
//   <section
//     className={`flex-1 p-4 overflow-y-auto ${
//       isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
//     } flex flex-col`}
//   >
//     <h2
//       className={`text-sm md:text-lg font-bold mb-4 ${
//         isDarkMode ? "text-white" : "text-black"
//       }`}
//     >
//       Question {currentQuestion + 1}
//     </h2>
//     <p>{questions[currentQuestion]?.question}</p>
//     <ul className="mt-4 space-y-2">
//       {questions[currentQuestion]?.options.map((option, index) => (
//         <li key={index} className="flex items-center space-x-2">
//           <input
//             type="radio"
//             name="answer"
//             checked={selectedAnswers[currentQuestion] === index}
//             onChange={() => handleOptionSelect(index)}
//           />
//           <label>{option}</label>
//         </li>
//       ))}
//     </ul>
//     <div className="mt-auto flex justify-between">
//       <button
//         onClick={handlePrevQuestion}
//         className="bg-gray-600 text-white px-4 py-2 rounded"
//       >
//         Previous
//       </button>
//       <button
//         onClick={handleNextQuestion}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Next
//       </button>
//     </div>
//   </section>
// );

// Footer Controls Component

const QuestionPanel = ({
  currentQuestion,
  questions,
  selectedAnswers,
  handleOptionSelect,
  isDarkMode,
  handleNextQuestion,
  handlePrevQuestion,
}) => (
  <section
    className={`flex-1 p-4 overflow-y-auto ${
      isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
    } flex flex-col`}
  >
    <h2
      className={`text-sm md:text-lg font-bold mb-4 ${
        isDarkMode ? "text-white" : "text-black"
      }`}
    >
      Question {currentQuestion + 1}
    </h2>
    <div
      className={`mb-4 ${isDarkMode ? "text-white" : "text-black"}`}
      dangerouslySetInnerHTML={{
        __html: questions[currentQuestion]?.question,
      }}
    />
    <ul className="mt-4 space-y-2">
      {questions[currentQuestion]?.options.map((option, index) => (
        <li
          key={index}
          className={`flex items-center space-x-2 cursor-pointer p-3 rounded-lg ${
            isDarkMode
              ? "hover:bg-gray-700 bg-gray-800"
              : "hover:bg-gray-200 bg-gray-100"
          }`}
        >
          <input
            type="radio"
            name="answer"
            id={`option-${currentQuestion}-${index}`}
            checked={selectedAnswers[currentQuestion] === index}
            onChange={() => handleOptionSelect(index)}
            className="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor={`option-${currentQuestion}-${index}`}
            className="flex-1"
          >
            {option}
          </label>
        </li>
      ))}
    </ul>
    <div className="mt-auto flex justify-between">
      <button
        onClick={handlePrevQuestion}
        className="bg-gray-600 text-white px-4 py-2 rounded"
        disabled={currentQuestion === 0}
      >
        Previous
      </button>
      <button
        onClick={handleNextQuestion}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={currentQuestion === questions.length - 1}
      >
        Next
      </button>
    </div>
  </section>
);

const FooterControls = ({
  handleMarkForReview,
  showEndModal,
  setShowEndModal,
  isDarkMode,
}) => (
  <footer
    className={`p-4 flex justify-between items-center ${
      isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100"
    }`}
  >
    <button
      onClick={handleMarkForReview}
      className="bg-purple-500 text-white px-4 py-2 rounded"
    >
      {showEndModal ? "Unmark Review" : "Mark for Review"}
    </button>
    <button
      onClick={() => setShowEndModal(true)}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Submit Test
    </button>
  </footer>
);

// Modal Component for End Test
const EndModal = ({ showEndModal, setShowEndModal }) =>
  showEndModal && (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded">
        <h2 className="text-lg font-bold">Confirm Submission</h2>
        <p>Are you sure you want to submit the test?</p>
        <div className="mt-4 flex justify-end space-x-4">
          <button
            onClick={() => setShowEndModal(false)}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => alert("Test Submitted!")}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );

const Page = () => {
  // const questions = [
  //   {
  //     id: 1,
  //     question:
  //       "Match the Modi 3.0 Cabinet Ministers to their respective ministries:",
  //     options: [
  //       "1-D, 2-C, 3-A, 4-B",
  //       "1-A, 2-C, 3-B, 4-D",
  //       "1-B, 2-C, 3-A, 4-D",
  //       "1-C, 2-A, 3-D, 4-B",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     question: "Who is the Minister of Commerce and Industry in 2024?",
  //     options: [
  //       "Amit Shah",
  //       "Piyush Goyal",
  //       "Nirmala Sitharaman",
  //       "Jyotiraditya Scindia",
  //     ],
  //   },
  //   // Add more questions here...
  // ];
  const questions = [
    {
      id: 1,
      question: `
        <p>Match the Modi 3.0 Cabinet Ministers to their respective ministries:</p>
       <table border="1">
  <tr>
    <td>राज्य</td>
    <td>लोकसंख्या घनता दर चौ. कि. मी. (2011)</td>
  </tr>
  <tr>
    <td>a. हरियाणा</td>
    <td>i. 123</td>
  </tr>
  <tr>
    <td>b.हिमाचल प्रदेश</td>
    <td>ii. 414</td>
  </tr>
  <tr>
    <td>c. झारखंड</td>
    <td>iii. 573</td>
  </tr>
<tr>
    <td>d. बिहार</td>
    <td>iv. 1106</td>
  </tr>
</table>

      `,
      options: [
        "1-d, 2-b, 3-c, 4-a",
        "1-a, 2-b, 3-c, 4-d",
        "1-b, 2-d, 3-c, 4-a",
        "1-c, 2-a, 3-d, 4-b",
      ],
    },
    {
      id: 2,
      question: `
        <p>Who is the Minister of Commerce and Industry in 2024?</p>
      `,
      options: [
        "Amit Shah",
        "Piyush Goyal",
        "Nirmala Sitharaman",
        "Jyotiraditya Scindia",
      ],
    },
    {
      id: 3,
      question: `
        <p>Consider the following statements regarding the National Income:</p>
        <ul class="list-disc pl-4">
          <li>1. National income is the total value of goods and services produced by the country in a year.</li>
          <li>2. Gross Domestic Product (GDP) is a better indicator of national income than Gross National Product (GNP).</li>
        </ul>
        <p>Which of the above statements is/are correct?</p>
      `,
      options: ["Only 1", "Only 2", "Both 1 and 2", "Neither 1 nor 2"],
    },
    {
      id: 4,
      question: `
        <p>Identify the correct match:</p>
        <table class="min-w-full border-collapse table-auto">
          <thead>
            <tr>
              <th class="border p-2 text-left">Country</th>
              <th class="border p-2 text-left">Currency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2">India</td>
              <td class="border p-2">Rupee</td>
            </tr>
            <tr>
              <td class="border p-2">USA</td>
              <td class="border p-2">Dollar</td>
            </tr>
            <tr>
              <td class="border p-2">Japan</td>
              <td class="border p-2">Yen</td>
            </tr>
            <tr>
              <td class="border p-2">Europe</td>
              <td class="border p-2">Euro</td>
            </tr>
          </tbody>
        </table>
      `,
      options: [
        "India - Dollar, USA - Rupee, Japan - Yen, Europe - Euro",
        "India - Rupee, USA - Dollar, Japan - Yen, Europe - Euro",
        "India - Euro, USA - Dollar, Japan - Rupee, Europe - Yen",
        "India - Rupee, USA - Euro, Japan - Dollar, Europe - Yen",
      ],
    },
  ];

  const totalQuestions = 100;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [markedQuestions, setMarkedQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timer, setTimer] = useState(156); // Timer in seconds (2:36)
  const [paused, setPaused] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

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

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleOptionSelect = (index) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleMarkForReview = () => {
    if (markedQuestions.includes(currentQuestion)) {
      setMarkedQuestions(markedQuestions.filter((q) => q !== currentQuestion));
    } else {
      setMarkedQuestions([...markedQuestions, currentQuestion]);
    }
  };

  const navigateToQuestion = (index) => setCurrentQuestion(index);

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const togglePause = () => setPaused(!paused);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      handleNextQuestion();
    }
    if (e.key === "ArrowLeft") {
      handlePrevQuestion();
    }
    if (e.key === "r" || e.key === "R") handleMarkForReview();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentQuestion]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      className={`h-screen flex flex-col overflow-hidden ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Header
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        timer={formatTime(timer)}
        togglePause={togglePause}
        paused={paused}
      />
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* <Sidebar
          totalQuestions={totalQuestions}
          currentQuestion={currentQuestion}
          markedQuestions={markedQuestions}
          selectedAnswers={selectedAnswers}
          navigateToQuestion={navigateToQuestion}
          isSidebarOpen={isSidebarOpen}
          isDarkMode={isDarkMode}
        /> */}
        <Sidebar
          totalQuestions={totalQuestions}
          currentQuestion={currentQuestion}
          markedQuestions={markedQuestions}
          selectedAnswers={selectedAnswers}
          navigateToQuestion={navigateToQuestion}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen} // Pass the setter here
          isDarkMode={isDarkMode}
        />

        <QuestionPanel
          currentQuestion={currentQuestion}
          questions={questions}
          selectedAnswers={selectedAnswers}
          handleOptionSelect={handleOptionSelect}
          isDarkMode={isDarkMode}
          handleNextQuestion={handleNextQuestion}
          handlePrevQuestion={handlePrevQuestion}
        />
      </main>
      <StatsRow
        totalQuestions={totalQuestions}
        selectedAnswers={selectedAnswers}
        markedQuestions={markedQuestions}
        isDarkMode={isDarkMode}
      />
      <FooterControls
        handleMarkForReview={handleMarkForReview}
        showEndModal={showEndModal}
        setShowEndModal={setShowEndModal}
        isDarkMode={isDarkMode}
      />
      <EndModal showEndModal={showEndModal} setShowEndModal={setShowEndModal} />
    </div>
  );
};

export default Page;
