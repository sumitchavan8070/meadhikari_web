// import React, { useRef, useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import html2canvas from "html2canvas";
// import { Pie } from "react-chartjs-2";
// import Chart from "chart.js/auto";

// import { FaSun, FaMoon, FaHome, FaDownload, FaTimes } from "react-icons/fa";
// import { useQuestions } from "@/Context/QuestionsContext";

// const Result = ({ results, formatTime, questions, onClose }) => {
//   const router = useRouter();
//   const resultRef = useRef(null);
//   const [isDarkTheme, setIsDarkTheme] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(0);
//   const [isCapturing, setIsCapturing] = useState(false);
//   const { paperMeta, isLoading } = useQuestions();

//   useEffect(() => {
//     setWindowWidth(window.innerWidth);
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   if (!results) return null;

//   const handleExportAsPng = async () => {
//     if (!resultRef.current) return;

//     try {
//       setIsCapturing(true);
//       const canvas = await html2canvas(resultRef.current, {
//         scale: 2,
//         useCORS: true,
//         allowTaint: true,
//         backgroundColor: isDarkTheme ? "#111827" : "#ffffff",
//         logging: false,
//         onclone: (clonedDoc) => {
//           const images = clonedDoc.getElementsByTagName("img");
//           return Promise.all(
//             Array.from(images).map((img) => {
//               if (img.complete) return Promise.resolve();
//               return new Promise((resolve) => {
//                 img.onload = resolve;
//                 img.onerror = resolve;
//               });
//             })
//           );
//         },
//       });

//       canvas.toBlob(
//         (blob) => {
//           if (!blob) {
//             console.error("Failed to create blob");
//             return;
//           }

//           const url = URL.createObjectURL(blob);
//           const link = document.createElement("a");
//           link.href = url;
//           link.download = "meadhikari-test-results.png";
//           document.body.appendChild(link);
//           link.click();
//           document.body.removeChild(link);
//           URL.revokeObjectURL(url);
//         },
//         "image/png",
//         1.0
//       );
//     } catch (error) {
//       console.error("Failed to export results as PNG:", error);
//     } finally {
//       setIsCapturing(false);
//     }
//   };

//   const performancePercentage = Math.round(
//     (results.correctAnswers / results.totalQuestions) * 100
//   );

//   const chartData = {
//     labels: ["Correct", "Wrong", "Unattempted"],
//     datasets: [
//       {
//         data: [
//           results.correctAnswers,
//           results.wrongAnswers,
//           results.unattempted,
//         ],
//         backgroundColor: ["#3B82F6", "#EF4444", "#10B981"],
//         borderColor: isDarkTheme ? "#1F2937" : "#E5E7EB",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const getUpdatedContentHtml = (html) => {
//     if (!html) return "";

//     const baseUrl = "https://file-hosting-app.vercel.app";

//     return html
//       .replace(/<img\s+src="([^"]+)"(.*?)>/g, (match, path, rest) => {
//         if (path.startsWith("http") || path.startsWith("data:image")) {
//           return `<img src="${path}" ${rest}>`;
//         }
//         return `<img src="${baseUrl}${path}" ${rest}>`;
//       })
//       .replace(
//         /<table/g,
//         `<table style="width: 100%; border-collapse: collapse; margin: 16px 0; ${
//           isDarkTheme ? "border-color: #374151;" : "border-color: #e5e7eb;"
//         }"`
//       )
//       .replace(
//         /<th/g,
//         `<th style="border: 1px solid ${
//           isDarkTheme ? "#374151" : "#e5e7eb"
//         }; padding: 8px; text-align: left; background-color: ${
//           isDarkTheme ? "#1f2937" : "#f3f4f6"
//         }; font-weight: bold;"`
//       )
//       .replace(
//         /<td/g,
//         `<td style="border: 1px solid ${
//           isDarkTheme ? "#374151" : "#e5e7eb"
//         }; padding: 8px; text-align: left;"`
//       );
//   };

//   return (
//     <div
//       className={`fixed inset-0 flex justify-center items-center ${
//         isDarkTheme ? "bg-gray-900/95" : "bg-gray-900/50"
//       } z-50 select-none p-4`}
//       style={{ userSelect: "none" }}
//       onCopy={(e) => e.preventDefault()}
//       onContextMenu={(e) => e.preventDefault()}
//     >
//       <div
//         ref={resultRef}
//         className={`relative p-4 sm:p-6 rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto custom-scrollbar ${
//           isDarkTheme
//             ? "bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100"
//             : "bg-gradient-to-b from-gray-50 to-white text-gray-800"
//         }`}
//       >
//         <button
//           onClick={onClose}
//           className={`absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full ${
//             isDarkTheme
//               ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
//               : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//           } transition-all duration-200`}
//         >
//           <FaTimes className="h-4 w-4 sm:h-5 sm:w-5" />
//         </button>

//         <div className="sm:hidden flex flex-wrap gap-2 mb-4">
//           <button
//             onClick={() => setIsDarkTheme(!isDarkTheme)}
//             className={`flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-sm ${
//               isDarkTheme
//                 ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
//                 : "bg-gray-700 text-white hover:bg-gray-600"
//             }`}
//             disabled={isCapturing}
//           >
//             {isDarkTheme ? <FaSun /> : <FaMoon />}
//             <span>{isDarkTheme ? "Light" : "Dark"}</span>
//           </button>
//           <button
//             onClick={() => router.push("/")}
//             className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm"
//             disabled={isCapturing}
//           >
//             <FaHome />
//             <span>Home</span>
//           </button>
//           <button
//             onClick={handleExportAsPng}
//             className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm"
//             disabled={isCapturing}
//           >
//             <FaDownload />
//             <span>{isCapturing ? "Exporting..." : "Export"}</span>
//           </button>
//         </div>

//         <div className="flex items-center flex-1 min-w-0">
//           {isLoading ? (
//             <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 animate-pulse bg-gray-300 dark:bg-gray-600 rounded-full mr-3" />
//           ) : paperMeta.logo ? (
//             <img
//               src={paperMeta.logo}
//               alt="Paper Logo"
//               className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full object-cover mr-3 border-2 border-transparent hover:border-blue-400 transition-all"
//               onError={(e) => {
//                 e.target.src = "/images/logo.png";
//                 e.target.className =
//                   "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full object-cover mr-3 border-2 border-transparent hover:border-blue-400 transition-all";
//               }}
//             />
//           ) : (
//             <img
//               src="/images/logo.png"
//               alt="Default Logo"
//               className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full object-cover mr-3 border-2 border-transparent hover:border-blue-400 transition-all"
//             />
//           )}

//           <div className="flex flex-col min-w-0">
//             <h1
//               className={`text-lg md:text-xl font-bold ${
//                 isDarkTheme ? "text-blue-300" : "text-blue-600"
//               } truncate md:whitespace-normal md:overflow-visible`}
//             >
//               {paperMeta.name || "Meadhikari Live Test"}
//             </h1>
//             {(paperMeta.year || paperMeta.category) && (
//               <div
//                 className={`text-xs md:text-sm ${
//                   isDarkTheme ? "text-blue-200/80" : "text-blue-600/80"
//                 } truncate md:whitespace-normal md:overflow-visible`}
//               >
//                 {paperMeta.year && <span>{paperMeta.year}</span>}
//                 {paperMeta.year && paperMeta.category && <span> | </span>}
//                 {paperMeta.category && <span>{paperMeta.category}</span>}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="mb-6 sm:mb-8">
//           <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center">
//             <div className="w-full lg:w-1/2">
//               <div className="flex justify-between items-center mb-1 sm:mb-2">
//                 <span className="text-sm sm:text-base font-medium">
//                   Performance:
//                 </span>
//                 <span className="text-sm sm:text-base font-bold text-blue-500">
//                   {performancePercentage}%
//                 </span>
//               </div>
//               <div
//                 className={`w-full h-2 sm:h-3 rounded-full ${
//                   isDarkTheme ? "bg-gray-700" : "bg-gray-200"
//                 } overflow-hidden`}
//               >
//                 <div
//                   className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
//                   style={{ width: `${performancePercentage}%` }}
//                 />
//               </div>

//               <div className="hidden sm:flex justify-between gap-3 mt-4">
//                 <button
//                   onClick={() => setIsDarkTheme(!isDarkTheme)}
//                   className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg ${
//                     isDarkTheme
//                       ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
//                       : "bg-gray-700 text-white hover:bg-gray-600"
//                   } transition-all duration-200`}
//                   disabled={isCapturing}
//                 >
//                   {isDarkTheme ? <FaSun /> : <FaMoon />}
//                   <span className="text-sm">
//                     {isDarkTheme ? "Light Mode" : "Dark Mode"}
//                   </span>
//                 </button>
//                 <button
//                   onClick={() => router.push("/")}
//                   className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm hover:from-blue-600 hover:to-cyan-500 transition-all duration-200"
//                   disabled={isCapturing}
//                 >
//                   <FaHome />
//                   <span>Go to Home</span>
//                 </button>
//                 <button
//                   onClick={handleExportAsPng}
//                   className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
//                   disabled={isCapturing}
//                 >
//                   <FaDownload />
//                   <span>{isCapturing ? "Exporting..." : "Export"}</span>
//                 </button>
//               </div>
//             </div>

//             <div className="w-full lg:w-1/2 mt-4 sm:mt-0">
//               <h3 className="text-center text-sm sm:text-base font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
//                 Performance Breakdown
//               </h3>
//               <div
//                 className="h-48 sm:h-56 md:h-64 mx-auto"
//                 style={{
//                   maxWidth: "100%",
//                   width: windowWidth < 640 ? "100%" : "80%",
//                 }}
//               >
//                 <Pie
//                   data={chartData}
//                   options={{
//                     maintainAspectRatio: false,
//                     responsive: true,
//                     plugins: {
//                       legend: {
//                         position: windowWidth < 640 ? "bottom" : "right",
//                         labels: {
//                           color: isDarkTheme ? "#E5E7EB" : "#1F2937",
//                           padding: 15,
//                           font: {
//                             size: windowWidth < 640 ? 10 : 12,
//                           },
//                           boxWidth: 12,
//                         },
//                       },
//                     },
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mb-6 sm:mb-8">
//           <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-400">
//             Test Summary
//           </h3>
//           <div
//             className={`grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg ${
//               isDarkTheme ? "bg-gray-800" : "bg-gray-100"
//             }`}
//           >
//             {[
//               { label: "Total Questions", value: results.totalQuestions },
//               { label: "Correct Answers", value: results.correctAnswers },
//               { label: "Wrong Answers", value: results.wrongAnswers },
//               { label: "Unattempted", value: results.unattempted },
//               { label: "Total Marks", value: results.totalMarks },
//               { label: "Time Taken", value: formatTime(results.timeTaken) },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className={`p-2 sm:p-3 rounded-md ${
//                   isDarkTheme ? "bg-gray-700" : "bg-white"
//                 } shadow-sm`}
//               >
//                 <p className="text-xs sm:text-sm font-medium text-gray-500">
//                   {item.label}
//                 </p>
//                 <p className="text-sm sm:text-base font-bold">{item.value}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mb-6 sm:mb-8">
//           <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-400">
//             Question Review
//           </h3>
//           <div className="space-y-3 sm:space-y-4">
//             {questions.map((question, index) => {
//               const selectedOptionIndex =
//                 results.selectedAnswers[index] || "N/A";
//               const correctOptionIndex = parseInt(
//                 question.answer.replace("option", "")
//               );
//               const isCorrect = selectedOptionIndex === correctOptionIndex;
//               const isUnattempted = selectedOptionIndex === "N/A";
//               const mark = isCorrect ? 1 : 0;

//               return (
//                 <div
//                   key={index}
//                   className={`p-3 sm:p-4 rounded-lg border ${
//                     isUnattempted
//                       ? isDarkTheme
//                         ? "border-gray-700 bg-gray-800"
//                         : "border-gray-300 bg-gray-100"
//                       : isCorrect
//                       ? isDarkTheme
//                         ? "border-blue-700 bg-blue-900/30"
//                         : "border-blue-300 bg-blue-100"
//                       : isDarkTheme
//                       ? "border-red-700 bg-red-900/30"
//                       : "border-red-300 bg-red-100"
//                   }`}
//                 >
//                   <div className="flex flex-wrap justify-between items-center mb-2 sm:mb-3 gap-1 sm:gap-2">
//                     <span className="text-sm sm:text-base font-bold">
//                       Q{index + 1}
//                     </span>
//                     <div className="flex gap-2 sm:gap-3 text-xs sm:text-sm">
//                       <span>
//                         <span className="font-semibold text-emerald-500">
//                           Correct:
//                         </span>{" "}
//                         {correctOptionIndex}
//                       </span>
//                       <span>
//                         <span className="font-semibold text-blue-500">
//                           Chosen:
//                         </span>{" "}
//                         {selectedOptionIndex !== "N/A"
//                           ? selectedOptionIndex
//                           : "—"}
//                       </span>
//                       <span
//                         className={`font-bold ${
//                           mark ? "text-emerald-500" : "text-red-500"
//                         }`}
//                       >
//                         Mark: {mark}
//                       </span>
//                     </div>
//                   </div>

//                   <div
//                     className={`mb-2 sm:mb-3 text-sm sm:text-base ${
//                       isDarkTheme ? "text-gray-300" : "text-gray-800"
//                     }`}
//                     dangerouslySetInnerHTML={{
//                       __html: getUpdatedContentHtml(question.question),
//                     }}
//                   />

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                     {["option1", "option2", "option3", "option4"].map(
//                       (optKey, optIdx) => {
//                         const isSelected = selectedOptionIndex === optIdx + 1;
//                         const isCorrectAnswer =
//                           correctOptionIndex === optIdx + 1;

//                         return (
//                           <div
//                             key={optKey}
//                             className={`p-2 sm:p-3 rounded-md border text-xs sm:text-sm ${
//                               isSelected
//                                 ? isCorrectAnswer
//                                   ? "border-emerald-500 bg-emerald-500/10"
//                                   : "border-red-500 bg-red-500/10"
//                                 : isCorrectAnswer
//                                 ? "border-emerald-500 bg-emerald-500/10"
//                                 : isDarkTheme
//                                 ? "border-gray-700 bg-gray-800"
//                                 : "border-gray-300 bg-gray-100"
//                             }`}
//                             dangerouslySetInnerHTML={{
//                               __html: getUpdatedContentHtml(question[optKey]),
//                             }}
//                           />
//                         );
//                       }
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <style jsx>{`
//           .custom-scrollbar::-webkit-scrollbar {
//             width: 6px;
//           }
//           .custom-scrollbar::-webkit-scrollbar-track {
//             background: transparent;
//             margin: 8px 0;
//           }
//           .custom-scrollbar::-webkit-scrollbar-thumb {
//             background: ${isDarkTheme ? "#4B5563" : "#9CA3AF"};
//             border-radius: 3px;
//           }
//           .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//             background: ${isDarkTheme ? "#6B7280" : "#6B7280"};
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// };

// export default Result;
"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import html2canvas from "html2canvas";
import { Pie } from "react-chartjs-2";
import { jsPDF } from "jspdf";
import {
  FaSun,
  FaMoon,
  FaHome,
  FaDownload,
  FaTimes,
  FaFilePdf,
  FaImage,
} from "react-icons/fa";
import { useQuestions } from "@/Context/QuestionsContext";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

const Result = ({ results, formatTime, questions, onClose }) => {
  const router = useRouter();
  const resultRef = useRef(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isCapturing, setIsCapturing] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const { paperMeta, isLoading } = useQuestions();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!results) return null;

  const handleExportAsPng = async () => {
    if (!resultRef.current) return;

    try {
      setIsCapturing(true);
      const canvas = await html2canvas(resultRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: isDarkTheme ? "#111827" : "#ffffff",
        logging: false,
        onclone: (clonedDoc) => {
          const images = clonedDoc.getElementsByTagName("img");
          return Promise.all(
            Array.from(images).map((img) => {
              if (img.complete) return Promise.resolve();
              return new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve;
              });
            })
          );
        },
      });

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            console.error("Failed to create blob");
            return;
          }

          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "meadhikari-test-results.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        },
        "image/png",
        1.0
      );
    } catch (error) {
      console.error("Failed to export results as PNG:", error);
    } finally {
      setIsCapturing(false);
    }
  };

  const handleExportAsPdf = async () => {
    setIsGeneratingPDF(true);

    try {
      // Convert any URL to data URL with proper error handling and CORS support
      const getDataUrl = async (url) => {
        if (!url) return null;

        try {
          // Handle relative paths from different sources
          let fullUrl = url;
          if (url.startsWith("/") && !url.startsWith("/upload")) {
            // For local resources like /images/logo.png
            fullUrl = window.location.origin + url;
          } else if (!url.startsWith("http") && !url.startsWith("/upload")) {
            // For relative paths without leading slash
            fullUrl = window.location.origin + "/" + url;
          } else if (url.startsWith("/upload")) {
            // For file-hosting-app.vercel.app
            fullUrl = `https://file-hosting-app.vercel.app${url}`;
          }

          // For debugging purposes
          // console.log("Fetching image:", fullUrl);

          let dataUrl = null;

          // First try with regular fetch (for same-origin resources)
          try {
            const response = await fetch(fullUrl, {
              mode: "no-cors",
              cache: "no-cache",
              credentials: "same-origin",
              headers: {
                "Cache-Control": "no-cache",
              },
            });

            if (response.ok) {
              const blob = await response.blob();
              dataUrl = await blobToDataUrl(blob);
            }
          } catch (err) {
            console.log(
              `CORS error for ${fullUrl}, trying alternative method:`,
              err
            );
          }

          // If regular fetch failed and it's a cross-origin resource, try using Image object
          if (
            !dataUrl &&
            (fullUrl.includes("file-hosting-app.vercel.app") ||
              fullUrl.includes("res.cloudinary.com"))
          ) {
            dataUrl = await loadImageAsDataUrl(fullUrl);
          }

          return dataUrl;
        } catch (e) {
          console.error("Failed to load image:", url, e);
          return null;
        }
      };

      // Helper function to convert blob to data URL
      const blobToDataUrl = (blob) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => {
            console.error(`Failed to read image as data URL`);
            resolve(null);
          };
          reader.readAsDataURL(blob);
        });
      };

      // Helper function to load image using Image object (bypasses CORS for display)
      const loadImageAsDataUrl = (url) => {
        return new Promise((resolve) => {
          const img = new Image();
          // Set crossOrigin to anonymous to request CORS access
          img.crossOrigin = "anonymous";

          // Create a canvas to draw the image and get data URL
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          img.onload = () => {
            // Set canvas dimensions to match image
            canvas.width = img.width;
            canvas.height = img.height;

            // Draw image on canvas and get data URL
            ctx.drawImage(img, 0, 0);
            try {
              const dataUrl = canvas.toDataURL("image/png");
              resolve(dataUrl);
            } catch (e) {
              console.error("Error converting image to data URL:", e);
              resolve(null);
            }
          };

          img.onerror = () => {
            // console.error(`Failed to load image: ${url}`);

            // As a last resort, try using proxy or no-cors
            if (
              url.includes("file-hosting-app.vercel.app") ||
              url.includes("res.cloudinary.com")
            ) {
              // Try using a CORS proxy - replace with your preferred proxy service
              const corsProxyUrl = `https://images.weserv.nl/?url=${encodeURIComponent(
                url
              )}`;
              // console.log("Trying CORS proxy:", corsProxyUrl);

              const proxyImg = new Image();
              proxyImg.crossOrigin = "anonymous";
              proxyImg.onload = () => {
                canvas.width = proxyImg.width;
                canvas.height = proxyImg.height;
                ctx.drawImage(proxyImg, 0, 0);
                try {
                  const dataUrl = canvas.toDataURL("image/png");
                  resolve(dataUrl);
                } catch (e) {
                  console.error("Error converting proxy image to data URL:", e);
                  resolve(null);
                }
              };
              proxyImg.onerror = () => {
                console.error(
                  `Failed to load image via proxy: ${corsProxyUrl}`
                );
                resolve(null);
              };
              proxyImg.src = corsProxyUrl;
            } else {
              resolve(null);
            }
          };

          // Set image source to trigger loading
          img.src = url;
        });
      };

      // Process HTML content to convert image sources to data URLs
      const processHtmlContent = async (html) => {
        if (!html) return "";

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const images = doc.getElementsByTagName("img");

        for (let i = 0; i < images.length; i++) {
          const img = images[i];
          const src = img.getAttribute("src");

          if (src) {
            // console.log("Processing image in HTML:", src);

            // Handle different image sources appropriately
            let dataUrl;
            if (src.startsWith("/upload")) {
              // For file-hosting-app paths
              dataUrl = await getDataUrl(src); // Function will handle prepending the base URL
            } else if (src.startsWith("https://res.cloudinary.com")) {
              dataUrl = await getDataUrl(src); // Already has full URL
            } else {
              // For other URL patterns or relative paths
              dataUrl = await getDataUrl(src);
            }

            if (dataUrl) {
              img.setAttribute("src", dataUrl);
            } else {
              console.warn(`Could not load image: ${src}`);
            }
          }
        }

        return doc.body.innerHTML;
      };

      // Fetch logos as base64 data URLs with better error handling
      let headerLogoDataUrl = null;
      try {
        headerLogoDataUrl = await getDataUrl("/images/logo.png");
        // console.log(
        //   "Header logo loaded:",
        //   headerLogoDataUrl ? "Success" : "Failed"
        // );
      } catch (e) {
        console.error("Error loading header logo:", e);
      }

      let examLogoDataUrl = null;
      if (paperMeta.logo) {
        try {
          examLogoDataUrl = await getDataUrl(paperMeta.logo);
          // console.log(
          //   "Exam logo loaded:",
          //   examLogoDataUrl ? "Success" : "Failed"
          // );
        } catch (e) {
          console.error("Error loading exam logo:", e);
        }
      }

      // Process questions and options to handle embedded images
      const processedQuestions = await Promise.all(
        questions.map(async (q, index) => {
          // console.log(`Processing question ${index + 1}`);
          return {
            ...q,
            question: await processHtmlContent(q.question),
            option1: await processHtmlContent(q.option1),
            option2: await processHtmlContent(q.option2),
            option3: await processHtmlContent(q.option3),
            option4: await processHtmlContent(q.option4),
          };
        })
      );

      // Get current date for the report
      const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <title>${paperMeta.name || "Test Results"} - Meadhikari</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
              @page {
                size: A4;
                margin: 0;
              }
  
              * {
                box-sizing: border-box;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
  
              body {
                font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #1e293b;
                margin: 0;
                padding: 0;
                -webkit-font-smoothing: antialiased;
              }
  
              /* Header Styling */
              .header {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                height: 18mm;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 15mm;
                background: white;
                border-bottom: 1px solid #e5e7eb;
                z-index: 1000;
              }
  
              .header-logo {
                display: flex;
                align-items: center;
                gap: 10px;
              }
  
              .header-logo img {
                height: 12mm;
                width: auto;
              }
  
              .header-logo span {
                font-size: 14pt;
                font-weight: 700;
                color: #1e293b;
              }
  
              /* Footer Styling */
              .footer {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                height: 15mm;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-top: 1px solid #e5e7eb;
                padding: 0 15mm;
                background: white;
                font-size: 9pt;
                color: #64748b;
                z-index: 1000;
              }
  
              /* Content Styling */
              .content {
                margin: 25mm 15mm 25mm 15mm;
                padding-top: 5mm;
                position: relative;
                z-index: 1;
              }
  
              /* Cover Page Styling */
              .cover-page {
                padding: 40mm 30mm 30mm;
                background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
                min-height: 100vh;
                box-sizing: border-box;
                position: relative;
                text-align: center;
              }
  
              .report-date {
                font-size: 11pt;
                color: #64748b;
                margin-bottom: 15mm;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                font-weight: 500;
              }
  
              .exam-logo {
                width: 60mm;
                margin-bottom: 15mm;
                filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.05));
              }
  
              .performance-box {
                background: linear-gradient(135deg, #eff6ff, #f0f9ff);
                border: 1px solid rgba(59, 130, 246, 0.3);
                border-radius: 12px;
                padding: 15mm;
                margin: 15mm 0;
                text-align: center;
                box-shadow: 0 4px 6px rgba(59, 130, 246, 0.1);
              }
  
              .performance-score {
                color: #2563eb;
                margin: 0;
                font-size: 48pt;
                font-weight: 700;
              }
  
              .performance-label {
                margin: 3mm 0 0;
                color: #3b82f6;
                font-size: 14pt;
                font-weight: 500;
              }
  
              .test-summary {
                margin: 20mm auto 0;
                width: 100%;
                max-width: 130mm;
                border-collapse: separate;
                border-spacing: 0;
                background: white;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
              }
  
              .test-summary th,
              .test-summary td {
                padding: 12px 15px;
                text-align: left;
              }
  
              .test-summary tr:not(:last-child) td,
              .test-summary tr:not(:last-child) th {
                border-bottom: 1px solid #e5e7eb;
              }
  
              .test-summary th {
                background: #f8fafc;
                font-weight: 600;
                color: #334155;
                width: 50%;
              }
  
              .test-summary td {
                background: white;
                font-weight: 500;
              }
  
              /* Question Pages Styling */
              .question {
                background: white;
                border-radius: 10px;
                padding: 12mm;
                margin-bottom: 25mm;
                page-break-inside: avoid;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                border: 1px solid #e5e7eb;
              }
  
              .question-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 5mm;
                border-bottom: 1px solid #e5e7eb;
                padding-bottom: 5mm;
              }
  
              .question-number {
                color: #1e293b;
                margin: 0;
                font-size: 16pt;
                font-weight: 600;
              }
  
              .question-status {
                padding: 5px 15px;
                border-radius: 20px;
                font-weight: 600;
                font-size: 10pt;
              }
  
              .correct {
                background: #d1fae5;
                color: #059669;
                border: 1px solid #059669;
              }
  
              .incorrect {
                background: #fee2e2;
                color: #dc2626;
                border: 1px solid #dc2626;
              }
  
              .unattempted {
                background: #f3f4f6;
                color: #4b5563;
                border: 1px solid #9ca3af;
              }
  
              .question-text {
                margin: 10mm 0;
                font-size: 12pt;
                line-height: 1.6;
              }
  
              .question img {
                max-width: 100%;
                height: auto;
                margin: 5mm auto;
                display: block;
                border-radius: 4px;
              }
  
              .question table {
                width: 100%;
                border-collapse: collapse;
                margin: 5mm 0;
                background: white;
                border-radius: 4px;
                overflow: hidden;
              }
  
              .question table th,
              .question table td {
                padding: 8px 12px;
                border: 1px solid #e5e7eb;
                text-align: left;
              }
  
              .question table th {
                background: #f8fafc;
                font-weight: 600;
                color: #1e293b;
              }
  
              .question table td {
                background: white;
              }
  
              .options {
                margin: 15mm 0;
                columns: 2;
                column-gap: 25mm;
                padding: 5mm;
                background: #f8fafc;
                border-radius: 8px;
              }
  
              .options img {
                max-width: 100%;
                height: auto;
                margin: 3mm 0;
                display: block;
                border-radius: 4px;
              }
  
              .option {
                break-inside: avoid;
                margin-bottom: 10mm;
                padding: 10px 15px;
                position: relative;
                background: white;
                border-radius: 6px;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
                border: 1px solid #e5e7eb;
              }
  
              .option-prefix {
                font-weight: 600;
                color: #334155;
                display: inline-block;
                margin-right: 6px;
              }
  
              .answer-key {
                margin-top: 15mm;
                display: flex;
                justify-content: space-between;
                padding: 12px 20px;
                background: #f8fafc;
                border-radius: 8px;
                font-size: 11pt;
                border: 1px solid #e5e7eb;
              }
  
              .answer-key-item {
                display: flex;
                align-items: center;
                gap: 8px;
              }
  
              .answer-key-item-label {
                font-weight: 600;
                color: #334155;
              }
  
              .answer-key-item-value {
                font-weight: 500;
                padding: 2px 10px;
                background: white;
                border-radius: 15px;
                border: 1px solid #e5e7eb;
              }
  
              .final-page {
                min-height: calc(100vh - 45mm);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background: linear-gradient(135deg, #f8fafc, #f0f9ff);
                padding: 0 30mm;
              }
  
              .final-page h2 {
                color: #1e40af;
                font-size: 28pt;
                margin-bottom: 5mm;
                font-weight: 700;
              }
  
              .final-page p {
                color: #475569;
                margin: 2mm 0;
                text-align: center;
                font-size: 14pt;
              }
  
              .website-link {
                margin-top: 10mm;
                font-size: 16pt;
                color: #3b82f6;
                font-weight: 700;
              }
  
              /* Page break utility */
              .page-break {
                page-break-after: always;
                height: 0;
                margin: 0;
              }
            </style>
          </head>
          <body>
            <!-- Header -->
            <div class="header">
              <div class="header-logo">
                ${
                  headerLogoDataUrl
                    ? `<img src="${headerLogoDataUrl}" alt="Logo">`
                    : ""
                }
                <span>Meadhikari</span>
              </div>
              <div style="font-size: 10pt; color: #64748b;">
                ${currentDate}
              </div>
            </div>
  
            <!-- Footer -->
            <div class="footer">
              <div>Result Report</div>
              <div>© ${new Date().getFullYear()} Meadhikari</div>
            </div>
  
            <!-- Cover Page -->
            <div class="cover-page">
              <div class="report-date">${currentDate}</div>
              ${
                examLogoDataUrl
                  ? `<img src="${examLogoDataUrl}" class="exam-logo" alt="Exam Logo">`
                  : ""
              }
              <h1 style="color: #1e293b; font-size: 28pt; margin: 0 0 10mm; text-align: center; font-weight: 700;">
                ${paperMeta.name || "Test Results"}
              </h1>
              <div class="performance-box">
                <h2 class="performance-score">
                  ${Math.round(
                    (results.correctAnswers / results.totalQuestions) * 100
                  )}%
                </h2>
                <p class="performance-label">Performance Score</p>
              </div>
              <table class="test-summary">
                <tr>
                  <th>Total Questions</th>
                  <td>${results.totalQuestions}</td>
                </tr>
                <tr>
                  <th>Correct Answers</th>
                  <td>${results.correctAnswers}</td>
                </tr>
                <tr>
                  <th>Wrong Answers</th>
                  <td>${results.wrongAnswers}</td>
                </tr>
                <tr>
                  <th>Unattempted</th>
                  <td>${results.unattempted}</td>
                </tr>
                <tr>
                  <th>Total Marks</th>
                  <td>${results.totalMarks}</td>
                </tr>
                <tr>
                  <th>Time Taken</th>
                  <td>${formatTime(results.timeTaken)}</td>
                </tr>
              </table>
            </div>
            <div class="page-break"></div>
  
            <!-- Question Pages -->
            ${processedQuestions
              .map((q, i) => {
                const selected = results.selectedAnswers[i] || "N/A";
                const correct = parseInt(q.answer.replace("option", ""));
                const isCorrect = selected === correct;
                const isUnattempted = selected === "N/A";

                return `
                <div class="content">
                  <div class="question">
                    <div class="question-header">
                      <h3 class="question-number">Question ${i + 1}</h3>
                      <span class="question-status ${
                        isUnattempted
                          ? "unattempted"
                          : isCorrect
                          ? "correct"
                          : "incorrect"
                      }">
                        ${
                          isUnattempted
                            ? "Unattempted"
                            : isCorrect
                            ? "Correct"
                            : "Incorrect"
                        }
                      </span>
                    </div>
  
                    <div class="question-text">
                      ${q.question}
                    </div>
  
                    <div class="options">
                      ${[1, 2, 3, 4]
                        .map((opt) => {
                          const option = q[`option${opt}`];
                          const isSelected = selected === opt;
                          const isCorrectOpt = correct === opt;

                          let optionClass = "";
                          if (isSelected && isCorrectOpt)
                            optionClass = "correct";
                          else if (isSelected && !isCorrectOpt)
                            optionClass = "incorrect";
                          else if (isCorrectOpt) optionClass = "correct";

                          return `
                          <div class="option ${optionClass}">
                            <span class="option-prefix">${String.fromCharCode(
                              64 + opt
                            )}.</span>
                            ${option}
                          </div>
                        `;
                        })
                        .join("")}
                    </div>
  
                    <div class="answer-key">
                      <div class="answer-key-item">
                        <span class="answer-key-item-label">Correct Answer:</span>
                        <span class="answer-key-item-value">${String.fromCharCode(
                          64 + correct
                        )}</span>
                      </div>
                      <div class="answer-key-item">
                        <span class="answer-key-item-label">Your Answer:</span>
                        <span class="answer-key-item-value">${
                          isUnattempted
                            ? "Not Attempted"
                            : String.fromCharCode(64 + selected)
                        }</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="page-break"></div>
              `;
              })
              .join("")}
  
            <!-- Final Page -->
            <div class="final-page">
              <h2>Thank You!</h2>
              <p>We hope this assessment was helpful in your learning journey.</p>
              <p>For more practice tests and educational resources</p>
              <p class="website-link">Visit meadhikari.com</p>
            </div>
          </body>
        </html>
      `;

      // Create and handle iframe with timeout to ensure images load
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      const iframeDoc = iframe.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(htmlContent);
      iframeDoc.close();

      // Give the browser some time to load all images before printing
      setTimeout(() => {
        try {
          iframe.contentWindow.focus();
          iframe.contentWindow.print();
        } catch (error) {
          console.error("Print error:", error);
        } finally {
          // Clean up after a delay to ensure print completes
          setTimeout(() => {
            document.body.removeChild(iframe);
          }, 1000);
        }
      }, 2000); // 2 second delay to load images
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const performancePercentage = Math.round(
    (results.correctAnswers / results.totalQuestions) * 100
  );

  const chartData = {
    labels: ["Correct", "Wrong", "Unattempted"],
    datasets: [
      {
        data: [
          results.correctAnswers,
          results.wrongAnswers,
          results.unattempted,
        ],
        backgroundColor: ["#3B82F6", "#EF4444", "#10B981"],
        borderColor: isDarkTheme ? "#1F2937" : "#E5E7EB",
        borderWidth: 1,
      },
    ],
  };

  const getUpdatedContentHtml = (html) => {
    if (!html) return "";

    const baseUrl = "https://file-hosting-app.vercel.app";

    return html
      .replace(/<img\s+src="([^"]+)"(.*?)>/g, (match, path, rest) => {
        if (path.startsWith("http") || path.startsWith("data:image")) {
          return `<img src="${path}" ${rest}>`;
        }
        return `<img src="${baseUrl}${path}" ${rest}>`;
      })
      .replace(
        /<table/g,
        `<table style="width: 100%; border-collapse: collapse; margin: 16px 0; ${
          isDarkTheme ? "border-color: #374151;" : "border-color: #e5e7eb;"
        }"`
      )
      .replace(
        /<th/g,
        `<th style="border: 1px solid ${
          isDarkTheme ? "#374151" : "#e5e7eb"
        }; padding: 8px; text-align: left; background-color: ${
          isDarkTheme ? "#1f2937" : "#f3f4f6"
        }; font-weight: bold;"`
      )
      .replace(
        /<td/g,
        `<td style="border: 1px solid ${
          isDarkTheme ? "#374151" : "#e5e7eb"
        }; padding: 8px; text-align: left;"`
      );
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center ${
        isDarkTheme ? "bg-gray-900/95" : "bg-gray-900/50"
      } z-50 select-none p-4`}
      style={{ userSelect: "none" }}
      onCopy={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div
        ref={resultRef}
        className={`relative p-4 sm:p-6 rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto custom-scrollbar ${
          isDarkTheme
            ? "bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100"
            : "bg-gradient-to-b from-gray-50 to-white text-gray-800"
        }`}
      >
        <button
          onClick={onClose}
          className={`absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full ${
            isDarkTheme
              ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } transition-all duration-200`}
        >
          <FaTimes className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        <div className="sm:hidden flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className={`flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-sm ${
              isDarkTheme
                ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
            disabled={isCapturing || isGeneratingPDF}
          >
            {isDarkTheme ? <FaSun /> : <FaMoon />}
            <span>{isDarkTheme ? "Light" : "Dark"}</span>
          </button>
          <button
            onClick={() => router.push("/")}
            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm"
            disabled={isCapturing || isGeneratingPDF}
          >
            <FaHome />
            <span>Home</span>
          </button>
          <button
            onClick={handleExportAsPng}
            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm"
            disabled={isCapturing || isGeneratingPDF}
          >
            <FaDownload />
            <span>{isCapturing ? "Exporting..." : "PNG"}</span>
          </button>
          <button
            onClick={handleExportAsPdf}
            className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm"
            disabled={isCapturing || isGeneratingPDF}
          >
            <FaFilePdf />
            <span>{isGeneratingPDF ? "Generating..." : "PDF"}</span>
          </button>
        </div>

        <div className="flex items-center flex-1 min-w-0">
          {isLoading ? (
            <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 animate-pulse bg-gray-300 dark:bg-gray-600 rounded-full mr-3" />
          ) : paperMeta.logo ? (
            <img
              src={paperMeta.logo || "/placeholder.svg"}
              alt="Paper Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full object-cover mr-3 border-2 border-transparent hover:border-blue-400 transition-all"
              onError={(e) => {
                e.target.src = "/images/logo.png";
                e.target.className =
                  "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full object-cover mr-3 border-2 border-transparent hover:border-blue-400 transition-all";
              }}
            />
          ) : (
            <img
              src="/images/logo.png"
              alt="Default Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full object-cover mr-3 border-2 border-transparent hover:border-blue-400 transition-all"
            />
          )}

          <div className="flex flex-col min-w-0">
            <h1
              className={`text-lg md:text-xl font-bold ${
                isDarkTheme ? "text-blue-300" : "text-blue-600"
              } truncate md:whitespace-normal md:overflow-visible`}
            >
              {paperMeta.name || "Meadhikari Live Test"}
            </h1>
            {(paperMeta.year || paperMeta.category) && (
              <div
                className={`text-xs md:text-sm ${
                  isDarkTheme ? "text-blue-200/80" : "text-blue-600/80"
                } truncate md:whitespace-normal md:overflow-visible`}
              >
                {paperMeta.year && <span>{paperMeta.year}</span>}
                {paperMeta.year && paperMeta.category && <span> | </span>}
                {paperMeta.category && <span>{paperMeta.category}</span>}
              </div>
            )}
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center">
            <div className="w-full lg:w-1/2">
              <div className="flex justify-between items-center mb-1 sm:mb-2">
                <span className="text-sm sm:text-base font-medium">
                  Performance:
                </span>
                <span className="text-sm sm:text-base font-bold text-blue-500">
                  {performancePercentage}%
                </span>
              </div>
              <div
                className={`w-full h-2 sm:h-3 rounded-full ${
                  isDarkTheme ? "bg-gray-700" : "bg-gray-200"
                } overflow-hidden`}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  style={{ width: `${performancePercentage}%` }}
                />
              </div>

              <div className="hidden sm:flex justify-between gap-3 mt-4">
                <button
                  onClick={() => setIsDarkTheme(!isDarkTheme)}
                  className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg ${
                    isDarkTheme
                      ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  } transition-all duration-200`}
                  disabled={isCapturing || isGeneratingPDF}
                >
                  {isDarkTheme ? <FaSun /> : <FaMoon />}
                  <span className="text-sm">
                    {isDarkTheme ? "Light Mode" : "Dark Mode"}
                  </span>
                </button>
                <button
                  onClick={() => router.push("/")}
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm hover:from-blue-600 hover:to-cyan-500 transition-all duration-200"
                  disabled={isCapturing || isGeneratingPDF}
                >
                  <FaHome />
                  <span>Go to Home</span>
                </button>
                <button
                  onClick={handleExportAsPng}
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                  disabled={isCapturing || isGeneratingPDF}
                >
                  <FaImage />
                  <span>{isCapturing ? "Exporting..." : "Export PNG"}</span>
                </button>
                <button
                  onClick={handleExportAsPdf}
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm hover:from-orange-600 hover:to-red-600 transition-all duration-200"
                  disabled={isCapturing || isGeneratingPDF}
                >
                  <FaFilePdf />
                  <span>
                    {isGeneratingPDF ? "Generating..." : "Export PDF"}
                  </span>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 mt-4 sm:mt-0">
              <h3 className="text-center text-sm sm:text-base font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Performance Breakdown
              </h3>
              <div
                className="h-48 sm:h-56 md:h-64 mx-auto"
                style={{
                  maxWidth: "100%",
                  width: windowWidth < 640 ? "100%" : "80%",
                }}
              >
                <Pie
                  data={chartData}
                  options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                      legend: {
                        position: windowWidth < 640 ? "bottom" : "right",
                        labels: {
                          color: isDarkTheme ? "#E5E7EB" : "#1F2937",
                          padding: 15,
                          font: {
                            size: windowWidth < 640 ? 10 : 12,
                          },
                          boxWidth: 12,
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-400">
            Test Summary
          </h3>
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg ${
              isDarkTheme ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            {[
              { label: "Total Questions", value: results.totalQuestions },
              { label: "Correct Answers", value: results.correctAnswers },
              { label: "Wrong Answers", value: results.wrongAnswers },
              { label: "Unattempted", value: results.unattempted },
              { label: "Total Marks", value: results.totalMarks },
              { label: "Time Taken", value: formatTime(results.timeTaken) },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-2 sm:p-3 rounded-md ${
                  isDarkTheme ? "bg-gray-700" : "bg-white"
                } shadow-sm`}
              >
                <p className="text-xs sm:text-sm font-medium text-gray-500">
                  {item.label}
                </p>
                <p className="text-sm sm:text-base font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-400">
            Question Review
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {questions.map((question, index) => {
              const selectedOptionIndex =
                results.selectedAnswers[index] || "N/A";
              const correctOptionIndex = Number.parseInt(
                question.answer.replace("option", "")
              );
              const isCorrect = selectedOptionIndex === correctOptionIndex;
              const isUnattempted = selectedOptionIndex === "N/A";
              const mark = isCorrect ? 1 : 0;

              return (
                <div
                  key={index}
                  className={`p-3 sm:p-4 rounded-lg border ${
                    isUnattempted
                      ? isDarkTheme
                        ? "border-gray-700 bg-gray-800"
                        : "border-gray-300 bg-gray-100"
                      : isCorrect
                      ? isDarkTheme
                        ? "border-blue-700 bg-blue-900/30"
                        : "border-blue-300 bg-blue-100"
                      : isDarkTheme
                      ? "border-red-700 bg-red-900/30"
                      : "border-red-300 bg-red-100"
                  }`}
                >
                  <div className="flex flex-wrap justify-between items-center mb-2 sm:mb-3 gap-1 sm:gap-2">
                    <span className="text-sm sm:text-base font-bold">
                      Q{index + 1}
                    </span>
                    <div className="flex gap-2 sm:gap-3 text-xs sm:text-sm">
                      <span>
                        <span className="font-semibold text-emerald-500">
                          Correct:
                        </span>{" "}
                        {correctOptionIndex}
                      </span>
                      <span>
                        <span className="font-semibold text-blue-500">
                          Chosen:
                        </span>{" "}
                        {selectedOptionIndex !== "N/A"
                          ? selectedOptionIndex
                          : "—"}
                      </span>
                      <span
                        className={`font-bold ${
                          mark ? "text-emerald-500" : "text-red-500"
                        }`}
                      >
                        Mark: {mark}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`mb-2 sm:mb-3 text-sm sm:text-base ${
                      isDarkTheme ? "text-gray-300" : "text-gray-800"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: getUpdatedContentHtml(question.question),
                    }}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {["option1", "option2", "option3", "option4"].map(
                      (optKey, optIdx) => {
                        const isSelected = selectedOptionIndex === optIdx + 1;
                        const isCorrectAnswer =
                          correctOptionIndex === optIdx + 1;

                        return (
                          <div
                            key={optKey}
                            className={`p-2 sm:p-3 rounded-md border text-xs sm:text-sm ${
                              isSelected
                                ? isCorrectAnswer
                                  ? "border-emerald-500 bg-emerald-500/10"
                                  : "border-red-500 bg-red-500/10"
                                : isCorrectAnswer
                                ? "border-emerald-500 bg-emerald-500/10"
                                : isDarkTheme
                                ? "border-gray-700 bg-gray-800"
                                : "border-gray-300 bg-gray-100"
                            }`}
                            dangerouslySetInnerHTML={{
                              __html: getUpdatedContentHtml(question[optKey]),
                            }}
                          />
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
            margin: 8px 0;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: ${isDarkTheme ? "#4B5563" : "#9CA3AF"};
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: ${isDarkTheme ? "#6B7280" : "#6B7280"};
          }
        `}</style>
      </div>
    </div>
  );
};

export default Result;
