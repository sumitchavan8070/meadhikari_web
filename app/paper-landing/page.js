// // // "use client";
// // // import React, { useRef, useState, useEffect } from "react";
// // // import PaperLanding from "./PaperLanding";
// // // import Headercopy from "@/components/Headercopy";
// // // import Footer from "@/components/Footer";
// // // import Sidebar from "./components/Sidebar";
// // // import OfferStrip from "@/components/OfferStrip";
// // // import axios from "axios";
// // // import { BASE_URL } from "@/utils/globalStrings";

// // // const PaperLandingPage = () => {
// // //   const [showMoveToTop, setShowMoveToTop] = useState(false);
// // //   const categoryRefs = useRef([]);

// // //   const [categoriesData, setCategoriesData] = useState([]);
// // //   const [loading, setLoading] = useState(false);

// // //   useEffect(() => {
// // //     fetchAllData();
// // //   }, []);

// // //   const fetchAllData = async () => {
// // //     try {
// // //       setLoading(true);

// // //       const categoryResponse = await axios.get(
// // //         `${BASE_URL}/exam-categories/get-all-exam-category`
// // //       );
// // //       const categories = categoryResponse.data.map(
// // //         ({ _id, catName, catShortName, image, categoryNumber }) => ({
// // //           _id,
// // //           name: catName.trim(),
// // //           shortName: catShortName || "",
// // //           image,
// // //           categoryNumber,
// // //           questionsData: [],
// // //         })
// // //       );

// // //       const papersPromises = categories.map((category) =>
// // //         axios.get(`${BASE_URL}/papers/${category._id}`)
// // //       );
// // //       const papersResponses = await Promise.all(papersPromises);

// // //       const enrichedCategories = categories.map((category, index) => {
// // //         const papers = papersResponses[index].data;
// // //         // const questionsData = papers.map((paper) => ({
// // //         //   title: paper.subCatName,
// // //         //   time: 60,
// // //         //   marks: paper.questions.length,
// // //         //   questions: paper.questions.length,
// // //         //   languages: ["Marathi"],
// // //         //   free: true,
// // //         //   live: paper.QPYear === new Date().getFullYear().toString(),
// // //         //   paper: paper,
// // //         // }));
// // //         const questionsData = papers.map((paper) =>
// // //           // console.log("------paper", paper),
// // //           ({
// // //             title: paper.questionPaperName || paper.subCatName, // Use questionPaperName if available, else subCatName
// // //             time: 60,
// // //             marks: paper.questions.length,
// // //             questions: paper.questions.length,
// // //             languages: ["Marathi"],
// // //             free: true,
// // //             live: paper.QPYear === new Date().getFullYear().toString(),
// // //             paper: paper,
// // //           })
// // //         );

// // //         return { ...category, questionsData };
// // //       });

// // //       setCategoriesData(enrichedCategories);
// // //       setLoading(false);
// // //     } catch (error) {
// // //       console.error("Error fetching data:", error);
// // //       setLoading(false);
// // //     }
// // //   };

// // //   categoryRefs.current = categoriesData.map(
// // //     (_, i) => categoryRefs.current[i] || React.createRef()
// // //   );

// // //   const handleCategoryClick = (index) => {
// // //     categoryRefs.current[index]?.current.scrollIntoView({ behavior: "smooth" });
// // //   };

// // //   const scrollToTop = () => {
// // //     window.scrollTo({ top: 0, behavior: "smooth" });
// // //   };

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setShowMoveToTop(window.scrollY > 300);
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => {
// // //       window.removeEventListener("scroll", handleScroll);
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className="w-full overflow-x-hidden bg-gray-50">
// // //       {loading ? (
// // //         <div className="flex justify-center items-center h-screen bg-white">
// // //           <p className="text-lg font-semibold text-gray-600">Loading...</p>
// // //         </div>
// // //       ) : (
// // //         <>
// // //           <Headercopy />

// // //           <div className="w-full pt-[23%] sm:pt-[23%] md:pt-[5%]">
// // //             <OfferStrip />
// // //           </div>

// // //           {/* <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-6 shadow-md sticky top-0 z-10">
// // //             <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
// // //               {categoriesData.map((category, index) => (
// // //                 <button
// // //                   key={index}
// // //                   onClick={() => handleCategoryClick(index)}
// // //                   className="flex flex-col items-center bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
// // //                 >
// // //                   <span className="text-sm font-medium text-gray-800">
// // //                     {category.name}
// // //                   </span>
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           </div> */}

// // //           <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-6 shadow-md sticky top-0 z-10">
// // //             <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
// // //               {categoriesData.map((category, index) => (
// // //                 <button
// // //                   key={index}
// // //                   onClick={() => handleCategoryClick(index)}
// // //                   className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
// // //                 >
// // //                   {/* Image on top */}
// // //                   <div className="flex items-center justify-center mb-2">
// // //                     <img
// // //                       src={category.image} // Use category.image for the image source
// // //                       alt={category.name}
// // //                       className="w-16 h-16 object-contain" // Adjust the size of the image
// // //                     />
// // //                   </div>
// // //                   {/* Centered text below the image */}
// // //                   <span className="text-lg font-semibold text-gray-800 text-center">
// // //                     {category.shortName}
// // //                   </span>
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <div className="flex flex-1 flex-col lg:flex-row w-full">
// // //             <aside className="lg:block lg:w-64 bg-gray-100 border-r border-gray-200 shadow-md hidden lg:flex">
// // //               <Sidebar />
// // //             </aside>

// // //             <main className="flex-1 p-6 lg:p-8 bg-white rounded-lg shadow-md w-full">
// // //               {categoriesData.map((category, index) => (
// // //                 <div
// // //                   key={index}
// // //                   ref={categoryRefs.current[index]}
// // //                   className="mb-12 animate-fade-in"
// // //                 >
// // //                   <PaperLanding categoriesData={[category]} />
// // //                 </div>
// // //               ))}
// // //             </main>
// // //           </div>

// // //           {showMoveToTop && (
// // //             <button
// // //               onClick={scrollToTop}
// // //               className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-110"
// // //             >
// // //               ↑
// // //             </button>
// // //           )}

// // //           <footer className="bg-[#F9FAFC] py-6 mt-10 w-full">
// // //             <Footer />
// // //           </footer>
// // //         </>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default PaperLandingPage;

// // "use client";

// // import React, { useRef, useState, useEffect } from "react";
// // import PaperLanding from "./PaperLanding";
// // import Headercopy from "@/components/Headercopy";
// // import Footer from "@/components/Footer";
// // import Sidebar from "./components/Sidebar";
// // import OfferStrip from "@/components/OfferStrip";
// // import axios from "axios";
// // import { BASE_URL } from "@/utils/globalStrings";

// // const PaperLandingPage = () => {
// //   const [showMoveToTop, setShowMoveToTop] = useState(false);
// //   const categoryRefs = useRef([]);
// //   const [categoriesData, setCategoriesData] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     fetchAllData();
// //   }, []);

// //   const fetchAllData = async () => {
// //     try {
// //       setLoading(true);
// //       const categoryResponse = await axios.get(
// //         `${BASE_URL}/exam-categories/get-all-exam-category`
// //       );
// //       const categories = categoryResponse.data.map(
// //         ({ _id, catName, catShortName, image, categoryNumber }) => ({
// //           _id,
// //           name: catName.trim(),
// //           shortName: catShortName || "",
// //           image,
// //           categoryNumber,
// //           questionsData: [],
// //         })
// //       );

// //       const papersPromises = categories.map((category) =>
// //         axios.get(`${BASE_URL}/papers/${category._id}`)
// //       );
// //       const papersResponses = await Promise.all(papersPromises);

// //       const enrichedCategories = categories.map((category, index) => {
// //         const papers = papersResponses[index].data;
// //         const questionsData = papers.map((paper) => ({
// //           title: paper.questionPaperName || paper.subCatName,
// //           time: 60,
// //           marks: paper.questions.length,
// //           questions: paper.questions.length,
// //           languages: ["Marathi"],
// //           free: true,
// //           live: paper.QPYear === new Date().getFullYear().toString(),
// //           paper: paper,
// //         }));

// //         return { ...category, questionsData };
// //       });

// //       setCategoriesData(enrichedCategories);
// //       setLoading(false);
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //       setLoading(false);
// //     }
// //   };

// //   categoryRefs.current = categoriesData.map(
// //     (_, i) => categoryRefs.current[i] || React.createRef()
// //   );

// //   const handleCategoryClick = (index) => {
// //     categoryRefs.current[index]?.current.scrollIntoView({ behavior: "smooth" });
// //   };

// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setShowMoveToTop(window.scrollY > 300);
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <div className="w-full overflow-x-hidden bg-gray-50">
// //       <Headercopy />
// //       <div className="w-full pt-[23%] sm:pt-[23%] md:pt-[5%]">
// //         <OfferStrip />
// //       </div>

// //       <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-6 shadow-md sticky top-0 z-10">
// //         <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
// //           {loading
// //             ? [...Array(6)].map((_, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex flex-col items-center p-4 bg-gray-200 rounded-lg animate-pulse"
// //                 >
// //                   <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
// //                   <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
// //                 </div>
// //               ))
// //             : categoriesData.map((category, index) => (
// //                 <button
// //                   key={index}
// //                   onClick={() => handleCategoryClick(index)}
// //                   className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
// //                 >
// //                   <div className="flex items-center justify-center mb-2">
// //                     <img
// //                       src={category.image}
// //                       alt={category.name}
// //                       className="w-16 h-16 object-contain"
// //                     />
// //                   </div>
// //                   <span className="text-lg font-semibold text-gray-800 text-center">
// //                     {category.shortName}
// //                   </span>
// //                 </button>
// //               ))}
// //         </div>
// //       </div>

// //       <div className="flex flex-1 flex-col lg:flex-row w-full">
// //         <aside className="lg:block lg:w-64 bg-gray-100 border-r border-gray-200 shadow-md hidden lg:flex">
// //           <Sidebar />
// //         </aside>

// //         <main className="flex-1 p-6 lg:p-8 bg-white rounded-lg shadow-md w-full">
// //           {loading
// //             ? [...Array(3)].map((_, index) => (
// //                 <div key={index} className="mb-12 animate-pulse">
// //                   <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>
// //                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// //                     {[...Array(6)].map((_, cardIndex) => (
// //                       <div
// //                         key={cardIndex}
// //                         className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-md"
// //                       >
// //                         <div className="w-24 h-16 bg-gray-300 rounded mb-4"></div>
// //                         <div className="h-4 w-2/3 bg-gray-300 rounded mb-2"></div>
// //                         <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               ))
// //             : categoriesData.map((category, index) => (
// //                 <div
// //                   key={index}
// //                   ref={categoryRefs.current[index]}
// //                   className="mb-12"
// //                 >
// //                   <PaperLanding categoriesData={[category]} />
// //                 </div>
// //               ))}
// //         </main>
// //       </div>

// //       {showMoveToTop && (
// //         <button
// //           onClick={scrollToTop}
// //           className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-110"
// //         >
// //           ↑
// //         </button>
// //       )}

// //       <footer className="bg-[#F9FAFC] py-6 mt-10 w-full">
// //         <Footer />
// //       </footer>
// //     </div>
// //   );
// // };

// // export default PaperLandingPage;

// "use client";

// import React, {
//   useRef,
//   useState,
//   useEffect,
//   useCallback,
//   useMemo,
// } from "react";
// import dynamic from "next/dynamic";
// import Headercopy from "@/components/Headercopy";
// import Footer from "@/components/Footer";
// import Sidebar from "./components/Sidebar";
// import OfferStrip from "@/components/OfferStrip";
// import axios from "axios";
// import { BASE_URL } from "@/utils/globalStrings";

// // Dynamically load PaperLanding to optimize initial load
// const PaperLanding = dynamic(() => import("./PaperLanding"), {
//   loading: () => <div>Loading...</div>, // Fallback while loading
// });

// const PaperLandingPage = () => {
//   const [showMoveToTop, setShowMoveToTop] = useState(false);
//   const categoryRefs = useRef([]);
//   const [categoriesData, setCategoriesData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Memoize the fetch function to avoid unnecessary re-creations
//   const fetchAllData = useCallback(async () => {
//     try {
//       setLoading(true);
//       const categoryResponse = await axios.get(
//         `${BASE_URL}/exam-categories/get-all-exam-category`
//       );

//       const categories = categoryResponse.data.map(
//         ({ _id, catName, catShortName, image, categoryNumber }) => ({
//           _id,
//           name: catName.trim(),
//           shortName: catShortName || "",
//           image,
//           categoryNumber,
//           questionsData: [],
//         })
//       );

//       // Use Promise.allSettled for more resilient error handling
//       const papersPromises = categories.map((category) =>
//         axios.get(`${BASE_URL}/papers/${category._id}`).catch((err) => null)
//       );

//       const papersResponses = await Promise.allSettled(papersPromises);

//       const enrichedCategories = categories.map((category, index) => {
//         const papers =
//           papersResponses[index]?.status === "fulfilled"
//             ? papersResponses[index].value?.data || []
//             : [];
//         const questionsData = papers.map((paper) => ({
//           title: paper.questionPaperName || paper.subCatName,
//           time: 60,
//           marks: paper.questions.length,
//           questions: paper.questions.length,
//           languages: ["Marathi"],
//           free: true,
//           live: paper.QPYear === new Date().getFullYear().toString(),
//           paper,
//         }));

//         return { ...category, questionsData };
//       });

//       setCategoriesData(enrichedCategories);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchAllData();
//   }, [fetchAllData]);

//   // Use debounce to avoid frequent state updates on scroll
//   const debounce = (func, delay) => {
//     let timer;
//     return (...args) => {
//       clearTimeout(timer);
//       timer = setTimeout(() => func(...args), delay);
//     };
//   };

//   const handleScroll = useMemo(() => {
//     return debounce(() => {
//       setShowMoveToTop(window.scrollY > 300);
//     }, 100);
//   }, []);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [handleScroll]);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   categoryRefs.current = categoriesData.map(
//     (_, i) => categoryRefs.current[i] || React.createRef()
//   );

//   const handleCategoryClick = (index) => {
//     categoryRefs.current[index]?.current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="w-full overflow-x-hidden bg-gray-50">
//       <Headercopy />

//       <div className="w-full pt-[23%] sm:pt-[23%] md:pt-[5%]">
//         <OfferStrip />
//       </div>

//       <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-6 shadow-md sticky top-0 z-10">
//         <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//           {loading
//             ? [...Array(6)].map((_, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center p-4 bg-gray-200 rounded-lg animate-pulse"
//                 >
//                   <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
//                   <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
//                 </div>
//               ))
//             : categoriesData.map((category, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleCategoryClick(index)}
//                   className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
//                 >
//                   <div className="flex items-center justify-center mb-2">
//                     <img
//                       src={category.image}
//                       alt={category.name}
//                       className="w-16 h-16 object-contain"
//                     />
//                   </div>
//                   <span className="text-lg font-semibold text-gray-800 text-center">
//                     {category.shortName}
//                   </span>
//                 </button>
//               ))}
//         </div>
//       </div>

//       <div className="flex flex-1 flex-col lg:flex-row w-full">
//         <aside className="lg:block lg:w-64 bg-gray-100 border-r border-gray-200 shadow-md hidden lg:flex">
//           <Sidebar />
//         </aside>

//         <main className="flex-1 p-6 lg:p-8 bg-white rounded-lg shadow-md w-full">
//           {loading
//             ? [...Array(3)].map((_, index) => (
//                 <div key={index} className="mb-12 animate-pulse">
//                   <div className="h-6 w-1/3 bg-gray-200 rounded mb-4"></div>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                     {[...Array(6)].map((_, cardIndex) => (
//                       <div
//                         key={cardIndex}
//                         className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-md"
//                       >
//                         <div className="w-24 h-16 bg-gray-300 rounded mb-4"></div>
//                         <div className="h-4 w-2/3 bg-gray-300 rounded mb-2"></div>
//                         <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))
//             : categoriesData.map((category, index) => (
//                 <div
//                   key={index}
//                   ref={categoryRefs.current[index]}
//                   className="mb-12"
//                 >
//                   <PaperLanding categoriesData={[category]} />
//                 </div>
//               ))}
//         </main>
//       </div>

//       {showMoveToTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-110"
//         >
//           ↑
//         </button>
//       )}

//       <footer className="bg-[#F9FAFC] py-6 mt-10 w-full">
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default PaperLandingPage;

"use client";

import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import Headercopy from "@/components/Headercopy";
import Footer from "@/components/Footer";
import Sidebar from "./components/Sidebar";
import OfferStrip from "@/components/OfferStrip";
import { BASE_URL } from "@/utils/globalStrings";

const PaperLanding = dynamic(() => import("./PaperLanding"), { ssr: false });

const PaperLandingPage = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMoveToTop, setShowMoveToTop] = useState(false);

  const categoryRefs = useRef([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);

      const categoryResponse = await axios.get(
        `${BASE_URL}/exam-categories/get-all-exam-category`
      );
      const categories = categoryResponse.data.map(
        ({ _id, catName, catShortName, image, categoryNumber }) => ({
          _id,
          name: catName.trim(),
          shortName: catShortName || "",
          image,
          categoryNumber,
          questionsData: [],
        })
      );

      const papersPromises = categories.map((category) =>
        axios.get(`${BASE_URL}/papers/${category._id}`)
      );
      const papersResponses = await Promise.all(papersPromises);

      const enrichedCategories = categories.map((category, index) => {
        const papers = papersResponses[index].data;
        const questionsData = papers.map((paper) => ({
          title: paper.questionPaperName || paper.subCatName,
          time: 60,
          marks: paper.questions.length,
          questions: paper.questions.length,
          languages: ["Marathi"],
          free: true,
          live: paper.QPYear === new Date().getFullYear().toString(),
          paper: paper,
        }));

        return { ...category, questionsData };
      });

      setCategoriesData(enrichedCategories);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    setShowMoveToTop(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-gray-50 overflow-x-hidden">
      <Headercopy />

      <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
        <OfferStrip />
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-6 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {loading
            ? [...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg animate-pulse"
                >
                  <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                  <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
                </div>
              ))
            : categoriesData.map((category, index) => (
                <button
                  key={index}
                  onClick={() =>
                    categoryRefs.current[index]?.current.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <div className="flex items-center justify-center mb-2">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <span className="text-lg font-semibold text-gray-800 text-center">
                    {category.shortName}
                  </span>
                </button>
              ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col lg:flex-row w-full">
        <aside className="lg:w-64 bg-gray-100 border-r border-gray-200 shadow-md hidden lg:flex">
          <Sidebar />
        </aside>

        <main className="flex-1 p-6 lg:p-8 bg-white rounded-lg shadow-md w-full">
          {loading
            ? [...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="mb-12 bg-gray-200 animate-pulse h-48 rounded-lg"
                ></div>
              ))
            : categoriesData.map((category, index) => (
                <div
                  key={index}
                  ref={(el) => (categoryRefs.current[index] = el)}
                  className="mb-12"
                >
                  <PaperLanding categoriesData={[category]} />
                </div>
              ))}
        </main>
      </div>

      {showMoveToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-110"
        >
          ↑
        </button>
      )}

      <footer className="bg-[#F9FAFC] py-6 mt-10 w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default PaperLandingPage;
