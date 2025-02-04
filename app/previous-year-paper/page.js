// // "use client";

// // import React, { useRef, useState, useEffect } from "react";
// // import dynamic from "next/dynamic";
// // import axios from "axios";
// // import Headercopy from "@/components/Headercopy";
// // import Footer from "@/components/Footer";
// // import Sidebar from "./components/Sidebar";
// // import OfferStrip from "@/components/OfferStrip";
// // import { BASE_URL } from "@/utils/globalStrings";

// // const PaperLanding = dynamic(() => import("./PaperLanding"), { ssr: false });

// // const PaperLandingPage = () => {
// //   const [categoriesData, setCategoriesData] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [showMoveToTop, setShowMoveToTop] = useState(false);

// //   const categoryRefs = useRef([]);

// //   useEffect(() => {
// //     fetchAllData();
// //   }, []);

// //   const fetchAllData = async () => {
// //     try {
// //       setLoading(true);

// //       // Fetch categories
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
// //           questionsData: [], // Initially empty, questions will be fetched later
// //         })
// //       );

// //       // Fetch paper metadata for each category
// //       const papersPromises = categories.map((category) =>
// //         axios.get(`${BASE_URL}/papers/web/${category._id}`)
// //       );
// //       const papersResponses = await Promise.all(papersPromises);

// //       // Enrich categories with paper metadata
// //       const enrichedCategories = categories.map((category, index) => {
// //         const papersMetadata = papersResponses[index].data;

// //         // Sort papers by QPYear in ascending order
// //         const sortedPapers = papersMetadata.sort((a, b) => b.QPYear - a.QPYear);

// //         const questionsData = sortedPapers.map((paper) => ({
// //           title: paper.questionPaperName || paper.subCatName,
// //           time: 60,
// //           marks: paper.questionsLength, // Placeholder, will be updated when questions are fetched
// //           questions: paper.questionsLength, // Use the questionsLength property
// //           languages: ["Marathi"],
// //           free: true,
// //           live: paper.QPYear === new Date().getFullYear().toString(),
// //           paper: paper, // Include paper metadata
// //         }));

// //         return { ...category, questionsData };
// //       });

// //       setCategoriesData(enrichedCategories);
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };
// //   const handleScroll = () => {
// //     setShowMoveToTop(window.scrollY > 300);
// //   };

// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   useEffect(() => {
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <div className="w-full bg-gray-50 overflow-x-hidden">
// //       <Headercopy />

// //       <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
// //         <OfferStrip />
// //       </div>

// //       <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-6 shadow-md sticky top-0 z-10">
// //         <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
// //           {loading
// //             ? [...Array(6)].map((_, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg animate-pulse"
// //                 >
// //                   <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
// //                   <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
// //                 </div>
// //               ))
// //             : categoriesData.map((category, index) => (
// //                 <button
// //                   key={index}
// //                   onClick={() => {
// //                     if (categoryRefs.current[index]) {
// //                       categoryRefs.current[index].scrollIntoView({
// //                         behavior: "smooth",
// //                       });
// //                     }
// //                   }}
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
// //         <aside className="lg:w-64 bg-gray-100 border-r border-gray-200 shadow-md hidden lg:flex">
// //           <Sidebar />
// //         </aside>

// //         <main className="flex-1 p-6 lg:p-8 bg-white rounded-lg shadow-md w-full">
// //           {loading
// //             ? [...Array(3)].map((_, index) => (
// //                 <div
// //                   key={index}
// //                   className="mb-12 bg-gray-200 animate-pulse h-48 rounded-lg"
// //                 ></div>
// //               ))
// //             : categoriesData.map((category, index) => (
// //                 <div
// //                   key={index}
// //                   ref={(el) => (categoryRefs.current[index] = el)}
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

// // page.js

// import React from "react";
// import Headercopy from "@/components/Headercopy";
// import Footer from "@/components/Footer";
// import PaperLandingPage from "./PaperLandingPage"; // Import the PaperLandingPage component

// export const metadata = {
//   title: "Previous Year Papers | MPSC, Talathi, Police Bharti Papers",
//   description:
//     "Find MPSC previous year papers, Talathi papers, Police Bharti papers, and more. Browse various categories and get access to the latest exam papers.",
//   keywords:
//     "MPSC, MPSC previous year paper, Talathi paper, Police Bharti papers, exam papers, previous year papers, government exams, question papers, MPSC exams, Talathi exams, Police Bharti exams",
//   robots: "index, follow", // Allow search engines to index and follow the links
// };

// const Page = () => {
//   return (
//     <div className="w-full bg-gray-50 overflow-x-hidden">
//       {/* Header */}
//       <Headercopy />

//       {/* Main Content */}
//       <PaperLandingPage />

//       {/* Footer */}
//       <footer className="bg-[#F9FAFC] py-6 mt-10 w-full">
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default Page;

// app/previous-year-papers/page.js
import React from "react";
import Headercopy from "@/components/Headercopy";
import Footer from "@/components/Footer";
import PaperLandingPage from "./PaperLandingPage"; // Import the PaperLandingPage component
import axios from "axios";
import { BASE_URL } from "@/utils/globalStrings";

export const metadata = {
  title: "Previous Year Papers | MPSC, Talathi, Police Bharti Papers",
  description:
    "Find MPSC previous year papers, Talathi papers, Police Bharti papers, and more. Browse various categories and get access to the latest exam papers.",
  keywords:
    "MPSC, MPSC previous year paper, Talathi papers, Police Bharti papers, exam papers, previous year papers, government exams, question papers, MPSC exams, Talathi exams, Police Bharti exams",
  robots: "index, follow", // Allow search engines to index and follow the links
};

// Fetch data on the server
async function fetchCategoriesData() {
  try {
    // Fetch categories
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

    // Fetch paper metadata for each category
    const papersPromises = categories.map((category) =>
      axios.get(`${BASE_URL}/papers/web/${category._id}`)
    );
    const papersResponses = await Promise.all(papersPromises);

    // Enrich categories with paper metadata
    const enrichedCategories = categories.map((category, index) => {
      const papersMetadata = papersResponses[index].data;

      // Sort papers by QPYear in ascending order
      const sortedPapers = papersMetadata.sort((a, b) => b.QPYear - a.QPYear);

      const questionsData = sortedPapers.map((paper) => ({
        title: paper.questionPaperName || paper.subCatName,
        time: 60,
        marks: paper.questionsLength,
        questions: paper.questionsLength,
        languages: ["Marathi"],
        free: true,
        live: paper.QPYear === new Date().getFullYear().toString(),
        paper: paper,
      }));

      return { ...category, questionsData };
    });

    return enrichedCategories;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function Page() {
  // Fetch data on the server
  const categoriesData = await fetchCategoriesData();

  return (
    <div className="w-full bg-gray-50 overflow-x-hidden">
      {/* Header */}
      <Headercopy />

      {/* Main Content */}
      <PaperLandingPage categoriesData={categoriesData} />

      {/* Footer */}
      <footer className="bg-[#F9FAFC] py-6 mt-10 w-full">
        <Footer />
      </footer>
    </div>
  );
}
