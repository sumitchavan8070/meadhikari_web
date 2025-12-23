"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Headercopy from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { BASE_URL, BLOG_ITEMS_PER_PAGE } from "@/utils/globalStrings";
import ConversionStripFirst from "@/components/ConversionStripFirst";
import { FaSearch, FaArrowRight, FaRegSadTear } from "react-icons/fa";

const ITEMS_PER_PAGE = BLOG_ITEMS_PER_PAGE;
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

  // // Initial loading animation timer
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowInitialLoader(false);
  //   }, INITIAL_LOAD_DELAY);
  //   return () => clearTimeout(timer);
  // }, []);

  // // Fetch data from the backend API
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${BASE_URL}/blogs/blog-data`);
  //       setCategories(response.data.categories);
  //       setBlogs(response.data.blogs);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // // Filter blogs based on search query and selected category
  // const filteredBlogs = blogs.filter((blog) => {
  //   const title = blog.title[language] || "";
  //   const description = blog.description[language] || "";
  //   const tags = blog.tags || [];
  //   const matchesSearch =
  //     title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     description.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
  //   const matchesCategory =
  //     selectedCategory === "All Blogs" || blog.category === selectedCategory;
  //   return matchesSearch && matchesCategory;
  // });

  // // Paginate filtered blogs
  // const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  // const paginatedBlogs = filteredBlogs.slice(
  //   startIndex,
  //   startIndex + ITEMS_PER_PAGE
  // );
  // const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

  // // Handle category change
  // const handleCategoryChange = (category) => {
  //   setSelectedCategory(category);
  //   setCurrentPage(1);
  // };

  // // Handle search input change
  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value);
  //   setCurrentPage(1);
  // };

  // // Handle language change
  // const handleLanguageChange = (lang) => {
  //   setLanguage(lang);
  //   setCurrentPage(1);
  // };

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
      {/* <section className="bg-gradient-to-b from-[#F5F9FF] to-[#E6F0FF] py-16 px-4 sm:px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
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

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#055AAB] to-[#1BA9BC]"
          >
            {language === "en" ? "Our Blogs" : "माहिती प्रसारण"}
          </motion.h2>

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
      </section> */}

      <section className="min-h-screen">
        {/* Animated Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-center my-8 bg-clip-text text-transparent bg-gradient-to-r from-[#055AAB] to-[#1BA9BC]"
        >
          Our Blogs
        </motion.h2>

        {/* Iframe Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-7xl mx-auto px-4"
        >
          {/* <div className="w-full h-[calc(300vh-200px)]"> */}
          <div className="w-full h-[calc(350vh-200px)] overflow-hidden">
            <iframe
              src="https://blogs.meadhikari.com"
              className="w-full h-full border-0 rounded-lg shadow-lg"
              title="Meadhikari Blogs"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>

      <ConversionStripFirst />

      <Footer />
    </div>
  );
}
