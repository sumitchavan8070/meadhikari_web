// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Headercopy from "@/components/Headercopy";
// import Footer from "@/components/Footer";
// import { motion } from "framer-motion";
// import axios from "axios";
// import { BASE_URL } from "@/utils/globalStrings";
// import Sidebar from "../previous-year-paper/components/Sidebar";
// import ConversionStripFirst from "@/components/ConversionStripFirst";

// const ITEMS_PER_PAGE = 6;

// export default function BlogsPage() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All Blogs");
//   const [isLoading, setIsLoading] = useState(false);
//   const [language, setLanguage] = useState("mr");
//   const [categories, setCategories] = useState([]);
//   const [blogs, setBlogs] = useState([]);
//   const [error, setError] = useState(null);

//   // Fetch data from the backend API
//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get(`${BASE_URL}/blogs/blog-data`);
//         setCategories(response.data.categories);
//         setBlogs(response.data.blogs);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Simulate loading for better UX
//   const simulateLoading = () => {
//     setIsLoading(true);
//     setTimeout(() => setIsLoading(false), 500); // Simulate a 500ms delay
//   };

//   // Filter blogs based on search query and selected category
//   const filteredBlogs = blogs.filter((blog) => {
//     const matchesSearch =
//       blog.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
//       blog.description[language]
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase()) ||
//       blog.tags.some((tag) =>
//         tag.toLowerCase().includes(searchQuery.toLowerCase())
//       );

//     const matchesCategory =
//       selectedCategory === "All Blogs" || blog.category === selectedCategory;

//     return matchesSearch && matchesCategory;
//   });

//   // Paginate filtered blogs
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const paginatedBlogs = filteredBlogs.slice(
//     startIndex,
//     startIndex + ITEMS_PER_PAGE
//   );
//   const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

//   // Handle category change
//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1); // Reset to the first page
//     simulateLoading(); // Simulate loading
//   };

//   // Handle search input change
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//     setCurrentPage(1); // Reset to the first page
//     simulateLoading(); // Simulate loading
//   };

//   // Handle language change
//   const handleLanguageChange = (lang) => {
//     setLanguage(lang);
//     setCurrentPage(1); // Reset to the first page
//     simulateLoading(); // Simulate loading
//   };

//   if (error) {
//     return (
//       <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
//         <Headercopy />

//         <section className="min-h-screen flex items-center justify-center px-4">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold text-gray-800 mb-4">Error</h1>
//             <p className="text-gray-600 mb-4">{error}</p>
//             <button
//               onClick={() => window.location.reload()}
//               className="inline-block bg-[#6D28D9] text-white px-6 py-3 rounded-lg hover:bg-[#5B21B6] transition"
//             >
//               Retry
//             </button>
//           </div>
//         </section>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
//       <Headercopy />
//       <ConversionStripFirst />

//       <section className="bg-gradient-to-b from-[#F7FAFC] to-[#EFF3F6] py-16 px-4 sm:px-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Language Toggle */}
//           <div className="flex justify-end mb-4">
//             <button
//               onClick={() => handleLanguageChange("en")}
//               className={`px-4 py-2 rounded-l-lg ${
//                 language === "en"
//                   ? "bg-[#6D28D9] text-white"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//             >
//               English
//             </button>
//             <button
//               onClick={() => handleLanguageChange("mr")}
//               className={`px-4 py-2 rounded-r-lg ${
//                 language === "mr"
//                   ? "bg-[#6D28D9] text-white"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//             >
//               Marathi
//             </button>
//           </div>

//           <h2 className="text-4xl font-bold text-gray-800 mb-8 font-poppins text-center">
//             {language === "en" ? "Our Blogs" : "माहिती प्रसारण"}
//           </h2>

//           {/* Search Bar */}
//           <div className="mb-8 max-w-2xl mx-auto">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder={
//                   language === "en" ? "Search blogs..." : "ब्लॉग शोधा..."
//                 }
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//                 className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:border-transparent"
//               />
//               <svg
//                 className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </div>
//           </div>

//           {/* Category Filter */}
//           <div className="mb-8 flex flex-wrap justify-center gap-2">
//             <button
//               onClick={() => handleCategoryChange("All Blogs")}
//               className={`px-4 py-2 rounded-full transition-colors ${
//                 selectedCategory === "All Blogs"
//                   ? "bg-[#6D28D9] text-white"
//                   : "bg-gray-200 text-gray-700 hover:bg-[#EDE9FE]"
//               }`}
//             >
//               {language === "en" ? "All Blogs" : "सर्व ब्लॉग"}
//             </button>
//             {categories.map((category) => (
//               <button
//                 key={category.slug}
//                 onClick={() => handleCategoryChange(category.name)}
//                 className={`px-4 py-2 rounded-full transition-colors ${
//                   selectedCategory === category.name
//                     ? "bg-[#6D28D9] text-white"
//                     : "bg-gray-200 text-gray-700 hover:bg-[#EDE9FE]"
//                 }`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>

//           {/* Loading State */}
//           {isLoading && (
//             <div className="flex justify-center items-center my-8">
//               <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#6D28D9]"></div>
//             </div>
//           )}

//           {/* Blog Grid */}
//           {!isLoading && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {paginatedBlogs.map((blog) => (
//                 <motion.div
//                   key={blog.id}
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:shadow-xl"
//                 >
//                   <img
//                     src={blog.image}
//                     alt={blog.title[language]}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-6">
//                     <h3 className="text-2xl font-semibold text-[#1F2937] mb-4 font-poppins">
//                       {blog.title[language]}
//                     </h3>
//                     <p className="text-[#4B5563] mb-4">
//                       {blog.description[language]}
//                     </p>
//                     <div className="flex items-center text-sm text-[#6B7280] mb-4">
//                       <span>{blog.category}</span>
//                       <span className="mx-2">•</span>
//                       <span>{blog.readingTime} read</span>
//                     </div>
//                     <Link
//                       href={{
//                         pathname: `/blogs/${blog.slug}`,
//                         query: { lang: language },
//                       }}
//                       className="text-[#6D28D9] font-semibold hover:underline"
//                     >
//                       {language === "en" ? "Read More →" : "अधिक वाचा →"}
//                     </Link>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           )}

//           {/* Pagination */}
//           {!isLoading && (
//             <div className="flex justify-center mt-8">
//               {Array.from({ length: totalPages }, (_, i) => (
//                 <button
//                   key={i + 1}
//                   onClick={() => setCurrentPage(i + 1)}
//                   className={`mx-1 px-4 py-2 rounded-full transition-colors ${
//                     currentPage === i + 1
//                       ? "bg-[#6D28D9] text-white"
//                       : "bg-gray-200 text-gray-700 hover:bg-[#EDE9FE]"
//                   }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       <ConversionStripFirst />

//       <section className="bg-[#F9FAFC]">
//         <Footer />
//       </section>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Headercopy from "@/components/Headercopy";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { BASE_URL } from "@/utils/globalStrings";
import ConversionStripFirst from "@/components/ConversionStripFirst";
import { FaSearch, FaArrowRight, FaRegSadTear } from "react-icons/fa";

const ITEMS_PER_PAGE = 6;
const INITIAL_LOAD_DELAY = 300; // ms for initial loading animation

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Blogs");
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState("mr");
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [showInitialLoader, setShowInitialLoader] = useState(true);

  // Initial loading animation timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialLoader(false);
    }, INITIAL_LOAD_DELAY);
    return () => clearTimeout(timer);
  }, []);

  // Fetch data from the backend API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blogs/blog-data`);
        setCategories(response.data.categories);
        setBlogs(response.data.blogs);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter blogs based on search query and selected category
  const filteredBlogs = blogs.filter((blog) => {
    const title = blog.title[language] || "";
    const description = blog.description[language] || "";
    const tags = blog.tags || [];
    const matchesSearch =
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory =
      selectedCategory === "All Blogs" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Paginate filtered blogs
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Handle language change
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setCurrentPage(1);
  };

  if (error) {
    return (
      <div className="pt-[100px]">
        <Headercopy />
        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-md">
            <FaRegSadTear className="text-5xl text-[#055AAB] mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-[#055AAB] mb-4">Oops!</h1>
            <p className="text-[#2966C1] mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#1BA9BC] to-[#2966C1] text-white font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2 mx-auto"
            >
              Try Again
            </button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // Shimmer Effect Component
  const Shimmer = () => (
    <div className="animate-pulse bg-gray-200 rounded-lg overflow-hidden shadow-md">
      <div className="h-48 bg-gray-300"></div>
      <div className="p-6">
        <div className="h-6 w-1/2 bg-gray-300 rounded mb-4"></div>
        <div className="h-4 w-3/4 bg-gray-300 rounded mb-4"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
      </div>
    </div>
  );

  return (
    <div className="pt-[100px]">
      <Headercopy />
      <section className="bg-gradient-to-b from-[#F5F9FF] to-[#E6F0FF] py-16 px-4 sm:px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Language Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-end mb-6"
          >
            <div className="inline-flex rounded-full bg-gray-100 p-1 shadow-inner">
              <button
                onClick={() => handleLanguageChange("en")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  language === "en"
                    ? "bg-gradient-to-r from-[#1BA9BC] to-[#2966C1] text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                English
              </button>
              <button
                onClick={() => handleLanguageChange("mr")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  language === "mr"
                    ? "bg-gradient-to-r from-[#1BA9BC] to-[#2966C1] text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                मराठी
              </button>
            </div>
          </motion.div>

          {/* Animated Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#055AAB] to-[#1BA9BC]"
          >
            {language === "en" ? "Our Blogs" : "माहिती प्रसारण"}
          </motion.h2>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8 max-w-2xl mx-auto"
          >
            <div className="relative">
              <input
                type="text"
                placeholder={
                  language === "en" ? "Search blogs..." : "ब्लॉग शोधा..."
                }
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BA9BC] focus:border-transparent shadow-sm"
              />
              <FaSearch className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 flex flex-wrap justify-center gap-2"
          >
            <button
              onClick={() => handleCategoryChange("All Blogs")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                selectedCategory === "All Blogs"
                  ? "bg-gradient-to-r from-[#1BA9BC] to-[#2966C1] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {language === "en" ? "All Blogs" : "सर्व ब्लॉग"}
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => handleCategoryChange(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-[#1BA9BC] to-[#2966C1] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Loading State */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[...Array(ITEMS_PER_PAGE)].map((_, index) => (
                <Shimmer key={index} />
              ))}
            </motion.div>
          )}

          {/* Blog Grid */}
          <AnimatePresence>
            {!isLoading && (
              <>
                {paginatedBlogs.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {paginatedBlogs.map((blog) => (
                      <motion.div
                        key={blog.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg"
                      >
                        <div className="relative h-48 bg-gray-100 overflow-hidden">
                          {blog.image ? (
                            <img
                              src={blog.image}
                              alt={blog.title[language] || "Blog image"}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-[#1BA9BC] to-[#2966C1]">
                              <span className="text-white font-medium">
                                {blog.title[language]?.charAt(0) || "M"}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <div className="mb-2">
                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#F5F9FF] text-[#2966C1]">
                              {blog.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-[#055AAB] mb-2 line-clamp-2">
                            {blog.title[language]}
                          </h3>
                          <p className="text-[#4A6FA9] mb-4 line-clamp-3">
                            {blog.description[language]}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-[#4A6FA9]">
                              {blog.readingTime} read
                            </span>
                            <Link
                              href={{
                                pathname: `/blogs/${blog.slug}`,
                                query: { lang: language },
                              }}
                              className="flex items-center text-[#1BA9BC] font-medium hover:text-[#055AAB] group"
                            >
                              {language === "en" ? "Read more" : "वाचा"}
                              <FaArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <FaRegSadTear className="text-4xl text-[#055AAB] mx-auto mb-4" />
                    <p className="text-xl text-[#4A6FA9]">
                      {language === "en"
                        ? "No blogs found matching your criteria"
                        : "तुमच्या शोधाशी जुळणारे ब्लॉग सापडले नाहीत"}
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("All Blogs");
                      }}
                      className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#1BA9BC] to-[#2966C1] text-white text-sm font-medium hover:shadow-lg transition-all"
                    >
                      {language === "en" ? "Reset filters" : "फिल्टर रीसेट करा"}
                    </button>
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>

          {/* Pagination */}
          {!isLoading && totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-12"
            >
              <div className="inline-flex gap-1 bg-gray-100 p-1 rounded-full shadow-inner">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-full text-sm font-medium transition-all flex items-center justify-center ${
                      currentPage === i + 1
                        ? "bg-gradient-to-r from-[#1BA9BC] to-[#2966C1] text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
      <ConversionStripFirst />

      <Footer />
    </div>
  );
}
