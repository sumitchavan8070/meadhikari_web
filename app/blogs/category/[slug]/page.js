// "use client";
// import React, { useState } from "react";
// import { useSearchParams } from "next/navigation";
// import Headercopy from "@/components/Headercopy";
// import Footer from "@/components/Footer";
// import { blogs } from "../../data/blogs";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function CategoryPage({ params }) {
//   const searchParams = useSearchParams();
//   const [language, setLanguage] = useState(searchParams.get("lang") || "en");
//   const filteredBlogs = blogs.filter((blog) => blog.category === params.slug);

//   return (
//     <div className="pt-16 md:pt-20 lg:pt-24">
//       <Headercopy />
//       <section className="px-4 sm:px-6 lg:px-8 py-12">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//               {language === "en"
//                 ? `Blogs in ${params.slug}`
//                 : `${params.slug} मधील ब्लॉग`}
//             </h2>
//             <div className="flex gap-2">
//               <button
//                 onClick={() => setLanguage("en")}
//                 className={`px-4 py-2 rounded-lg ${
//                   language === "en" ? "bg-[#6D28D9] text-white" : "bg-gray-200"
//                 }`}
//               >
//                 English
//               </button>
//               <button
//                 onClick={() => setLanguage("mr")}
//                 className={`px-4 py-2 rounded-lg ${
//                   language === "mr" ? "bg-[#6D28D9] text-white" : "bg-gray-200"
//                 }`}
//               >
//                 मराठी
//               </button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//             {filteredBlogs.map((blog) => (
//               <motion.div
//                 key={blog.id}
//                 whileHover={{ scale: 1.03 }}
//                 className="bg-white rounded-lg shadow-md overflow-hidden"
//               >
//                 <Link
//                   href={{
//                     pathname: `/blogs/${blog.slug}`,
//                     query: { lang: language },
//                   }}
//                 >
//                   <img
//                     src={blog.image}
//                     alt={blog.title[language]}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4 md:p-6">
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                       {blog.title[language]}
//                     </h3>
//                     <p className="text-gray-600 line-clamp-3">
//                       {blog.description[language]}
//                     </p>
//                     <div className="mt-4 flex items-center text-sm text-gray-500">
//                       <span>{blog.category}</span>
//                       <span className="mx-2">•</span>
//                       <span>{blog.readingTime} read</span>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Headercopy from "@/components/Headercopy";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import axios from "axios";
import { BASE_URL } from "@/utils/globalStrings";

export default function CategoryPage({ params }) {
  const searchParams = useSearchParams();
  const [language, setLanguage] = useState(searchParams.get("lang") || "en");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs by category
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/blogs/category/${params.slug}`
        );
        setFilteredBlogs(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="pt-16 md:pt-20 lg:pt-24">
        <Headercopy />
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#6D28D9]"></div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16 md:pt-20 lg:pt-24">
        <Headercopy />
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Error</h1>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="inline-block bg-[#6D28D9] text-white px-6 py-3 rounded-lg hover:bg-[#5B21B6] transition"
            >
              Retry
            </button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="pt-16 md:pt-20 lg:pt-24">
      <Headercopy />
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              {language === "en"
                ? `Blogs in ${params.slug}`
                : `${params.slug} मधील ब्लॉग`}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 rounded-lg ${
                  language === "en" ? "bg-[#6D28D9] text-white" : "bg-gray-200"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("mr")}
                className={`px-4 py-2 rounded-lg ${
                  language === "mr" ? "bg-[#6D28D9] text-white" : "bg-gray-200"
                }`}
              >
                मराठी
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Link
                  href={{
                    pathname: `/blogs/${blog.slug}`,
                    query: { lang: language },
                  }}
                >
                  <img
                    src={blog.image}
                    alt={blog.title[language]}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 md:p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {blog.title[language]}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">
                      {blog.description[language]}
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <span>{blog.category}</span>
                      <span className="mx-2">•</span>
                      <span>{blog.readingTime} read</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
