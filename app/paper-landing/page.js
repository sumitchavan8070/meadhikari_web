// // // import React from "react";
// // // import PaperLanding from "./PaperLanding";

// // // // Sample categoriesData (replace this with real data or fetching logic)
// // // const categoriesData = [
// // //   {
// // //     name: "Mathematics",
// // //     questionsData: [
// // //       {
// // //         title: "Algebra Basics",
// // //         time: "30 mins",
// // //         questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
// // //         marks: "100",
// // //         languages: ["English", "Hindi"],
// // //         attempted: 1500,
// // //         free: true,
// // //         live: false,
// // //       },
// // //       {
// // //         title: "Geometry Advanced",
// // //         time: "45 mins",
// // //         questions: [{ id: 1 }, { id: 2 }],
// // //         marks: "200",
// // //         languages: ["English"],
// // //         attempted: 2000,
// // //         free: false,
// // //         live: true,
// // //       },
// // //     ],
// // //   },
// // //   {
// // //     name: "Science",
// // //     questionsData: [
// // //       {
// // //         title: "Physics 101",
// // //         time: "40 mins",
// // //         questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
// // //         marks: "150",
// // //         languages: ["English"],
// // //         attempted: 1800,
// // //         free: true,
// // //         live: true,
// // //       },
// // //     ],
// // //   },
// // // ];

// // // export default function PaperLandingPage() {
// // //   return <PaperLanding categoriesData={categoriesData} />;
// // // }

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

// //   // This ensures fetchAllData is always called once, and loading state is correctly managed
// //   useEffect(() => {
// //     fetchAllData();
// //   }, []); // Empty dependency array ensures this runs once on mount

// //   const fetchAllData = async () => {
// //     try {
// //       setLoading(true);

// //       // Fetch category data
// //       const categoryResponse = await axios.get(
// //         `${BASE_URL}/exam-categories/get-all-exam-category`
// //       );
// //       const categories = categoryResponse.data.map(
// //         ({ _id, catName, catShortName, image, categoryNumber }) => ({
// //           _id, // Use _id instead of id
// //           name: catName.trim(),
// //           shortName: catShortName || "",
// //           image,
// //           categoryNumber,
// //           questionsData: [], // Initialize as empty; we'll populate later
// //         })
// //       );

// //       // Fetch papers for each category
// //       const papersPromises = categories.map(
// //         (category) => axios.get(`${BASE_URL}/papers/${category._id}`) // Use _id here
// //       );
// //       const papersResponses = await Promise.all(papersPromises);

// //       // Combine papers into categories
// //       const enrichedCategories = categories.map((category, index) => {
// //         const papers = papersResponses[index].data;
// //         const questionsData = papers.map((paper) => ({
// //           title: paper.subCatName,
// //           time: 60,
// //           marks: paper.questions.length, // Example logic for marks
// //           questions: paper.questions.length,
// //           languages: ["Marathi"], // Static for now; adjust as needed
// //           free: true, // Placeholder; adjust as needed
// //           live: paper.QPYear === new Date().getFullYear().toString(), // If it's this year, set live
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

// //   // Add refs for each category
// //   categoryRefs.current = categoriesData.map(
// //     (_, i) => categoryRefs.current[i] || React.createRef()
// //   );

// //   // Scroll to a specific category
// //   const handleCategoryClick = (index) => {
// //     categoryRefs.current[index]?.current.scrollIntoView({ behavior: "smooth" });
// //   };

// //   // Scroll to top
// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   // Track scroll position for Move to Top button visibility
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
// //       {/* Header Section */}
// //       <Headercopy />

// //       {/* Offer Strip */}
// //       <div className="w-full pt-[23%] sm:pt-[23%] md:pt-[5%]">
// //         <OfferStrip />
// //       </div>

// //       {/* Enhanced Category Grid */}
// //       <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-6 shadow-md sticky top-0 z-10">
// //         <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
// //           {categoriesData.map((category, index) => (
// //             <button
// //               key={index}
// //               onClick={() => handleCategoryClick(index)}
// //               className="flex flex-col items-center bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
// //             >
// //               <span className="text-sm font-medium text-gray-800">
// //                 {category.name}
// //               </span>
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex flex-1 flex-col lg:flex-row w-full">
// //         {/* Sidebar Section */}
// //         <aside className="lg:block lg:w-64 bg-gray-100 border-r border-gray-200 shadow-md hidden lg:flex">
// //           <Sidebar />
// //         </aside>

// //         {/* Main Content Section */}
// //         <main className="flex-1 p-6 lg:p-8 bg-white rounded-lg shadow-md w-full">
// //           {categoriesData.map((category, index) => (
// //             <div
// //               key={index}
// //               ref={categoryRefs.current[index]}
// //               className="mb-12 animate-fade-in"
// //             >
// //               {/* <h2 className="text-2xl font-bold mb-4 text-gray-800">
// //                 {category.name}
// //               </h2> */}
// //               <PaperLanding categoriesData={[category]} />
// //             </div>
// //           ))}
// //         </main>
// //       </div>

// //       {/* Move to Top Button */}
// //       {showMoveToTop && (
// //         <button
// //           onClick={scrollToTop}
// //           className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-110"
// //         >
// //           ↑
// //         </button>
// //       )}

// //       {/* Footer Section */}
// //       <footer className="bg-[#F9FAFC] py-6 mt-10 w-full">
// //         <Footer />
// //       </footer>
// //     </div>
// //   );
// // };

// // export default PaperLandingPage;

// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import PaperLanding from "./PaperLanding";
// import Headercopy from "@/components/Headercopy";
// import Footer from "@/components/Footer";
// import Sidebar from "./components/Sidebar";
// import OfferStrip from "@/components/OfferStrip";
// import axios from "axios";
// import Lottie from "react-lottie";
// import { BASE_URL } from "@/utils/globalStrings";
// import loaderAnimation from "@/public/loader.json"; // Adjust path as needed

// const PaperLandingPage = () => {
//   const [showMoveToTop, setShowMoveToTop] = useState(false);
//   const categoryRefs = useRef([]);

//   const [categoriesData, setCategoriesData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchAllData();
//   }, []);

//   const fetchAllData = async () => {
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

//       const papersPromises = categories.map((category) =>
//         axios.get(`${BASE_URL}/papers/${category._id}`)
//       );
//       const papersResponses = await Promise.all(papersPromises);

//       const enrichedCategories = categories.map((category, index) => {
//         const papers = papersResponses[index].data;
//         const questionsData = papers.map((paper) => ({
//           title: paper.subCatName,
//           time: 60,
//           marks: paper.questions.length,
//           questions: paper.questions.length,
//           languages: ["Marathi"],
//           free: true,
//           live: paper.QPYear === new Date().getFullYear().toString(),
//           paper: paper,
//         }));

//         return { ...category, questionsData };
//       });

//       setCategoriesData(enrichedCategories);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setLoading(false);
//     }
//   };

//   categoryRefs.current = categoriesData.map(
//     (_, i) => categoryRefs.current[i] || React.createRef()
//   );

//   const handleCategoryClick = (index) => {
//     categoryRefs.current[index]?.current.scrollIntoView({ behavior: "smooth" });
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowMoveToTop(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const lottieOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: loaderAnimation,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   return (
//     <div className="w-full overflow-x-hidden bg-gray-50">
//       {loading ? (
//         <div className="flex justify-center items-center h-screen bg-white">
//           <Lottie options={lottieOptions} height={200} width={200} />
//         </div>
//       ) : (
//         <>
//           <Headercopy />

//           <div className="w-full pt-[23%] sm:pt-[23%] md:pt-[5%]">
//             <OfferStrip />
//           </div>

//           <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-6 shadow-md sticky top-0 z-10">
//             <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//               {categoriesData.map((category, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleCategoryClick(index)}
//                   className="flex flex-col items-center bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//                 >
//                   <span className="text-sm font-medium text-gray-800">
//                     {category.name}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-1 flex-col lg:flex-row w-full">
//             <aside className="lg:block lg:w-64 bg-gray-100 border-r border-gray-200 shadow-md hidden lg:flex">
//               <Sidebar />
//             </aside>

//             <main className="flex-1 p-6 lg:p-8 bg-white rounded-lg shadow-md w-full">
//               {categoriesData.map((category, index) => (
//                 <div
//                   key={index}
//                   ref={categoryRefs.current[index]}
//                   className="mb-12 animate-fade-in"
//                 >
//                   <PaperLanding categoriesData={[category]} />
//                 </div>
//               ))}
//             </main>
//           </div>

//           {showMoveToTop && (
//             <button
//               onClick={scrollToTop}
//               className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-110"
//             >
//               ↑
//             </button>
//           )}

//           <footer className="bg-[#F9FAFC] py-6 mt-10 w-full">
//             <Footer />
//           </footer>
//         </>
//       )}
//     </div>
//   );
// };

// export default PaperLandingPage;

"use client";
import React, { useRef, useState, useEffect } from "react";
import PaperLanding from "./PaperLanding";
import Headercopy from "@/components/Headercopy";
import Footer from "@/components/Footer";
import Sidebar from "./components/Sidebar";
import OfferStrip from "@/components/OfferStrip";
import axios from "axios";
import { BASE_URL } from "@/utils/globalStrings";

const PaperLandingPage = () => {
  const [showMoveToTop, setShowMoveToTop] = useState(false);
  const categoryRefs = useRef([]);

  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(false);

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
        // const questionsData = papers.map((paper) => ({
        //   title: paper.subCatName,
        //   time: 60,
        //   marks: paper.questions.length,
        //   questions: paper.questions.length,
        //   languages: ["Marathi"],
        //   free: true,
        //   live: paper.QPYear === new Date().getFullYear().toString(),
        //   paper: paper,
        // }));
        const questionsData = papers.map((paper) =>
          // console.log("------paper", paper),
          ({
            title: paper.questionPaperName || paper.subCatName, // Use questionPaperName if available, else subCatName
            time: 60,
            marks: paper.questions.length,
            questions: paper.questions.length,
            languages: ["Marathi"],
            free: true,
            live: paper.QPYear === new Date().getFullYear().toString(),
            paper: paper,
          })
        );

        return { ...category, questionsData };
      });

      setCategoriesData(enrichedCategories);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  categoryRefs.current = categoriesData.map(
    (_, i) => categoryRefs.current[i] || React.createRef()
  );

  const handleCategoryClick = (index) => {
    categoryRefs.current[index]?.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowMoveToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-gray-50">
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-white">
          <p className="text-lg font-semibold text-gray-600">Loading...</p>
        </div>
      ) : (
        <>
          <Headercopy />

          <div className="w-full pt-[23%] sm:pt-[23%] md:pt-[5%]">
            <OfferStrip />
          </div>

          {/* <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-6 shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categoriesData.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(index)}
                  className="flex flex-col items-center bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="text-sm font-medium text-gray-800">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div> */}

          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-6 shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {categoriesData.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(index)}
                  className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  {/* Image on top */}
                  <div className="flex items-center justify-center mb-2">
                    <img
                      src={category.image} // Use category.image for the image source
                      alt={category.name}
                      className="w-16 h-16 object-contain" // Adjust the size of the image
                    />
                  </div>
                  {/* Centered text below the image */}
                  <span className="text-lg font-semibold text-gray-800 text-center">
                    {category.shortName}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-1 flex-col lg:flex-row w-full">
            <aside className="lg:block lg:w-64 bg-gray-100 border-r border-gray-200 shadow-md hidden lg:flex">
              <Sidebar />
            </aside>

            <main className="flex-1 p-6 lg:p-8 bg-white rounded-lg shadow-md w-full">
              {categoriesData.map((category, index) => (
                <div
                  key={index}
                  ref={categoryRefs.current[index]}
                  className="mb-12 animate-fade-in"
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
        </>
      )}
    </div>
  );
};

export default PaperLandingPage;
