"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Headercopy from "@/components/Headercopy";
import Footer from "@/components/Footer";
import Link from "next/link";
import axios from "axios";
import { BASE_URL } from "@/utils/globalStrings";
import Sidebar from "@/app/previous-year-paper/components/Sidebar";
import ConversionStripFirst from "@/components/ConversionStripFirst";

export default function BlogPost({ params }) {
  const searchParams = useSearchParams();
  const [language, setLanguage] = useState(searchParams.get("lang") || "en");
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blogs/${params.slug}`);
        setBlog(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.slug]);

  // Function to format date as "dd mm yyyy"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0"); // Ensure 2 digits for day
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Ensure 2 digits for month
    const year = date.getFullYear();
    return `${day} /${month} /${year}`;
  };

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

  if (!blog) {
    return (
      <div className="pt-16 md:pt-20 lg:pt-24">
        <Headercopy />

        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              404 - Blog Not Found
            </h1>
            <Link
              href="/blogs"
              className="inline-block bg-[#6D28D9] text-white px-6 py-3 rounded-lg hover:bg-[#5B21B6] transition"
            >
              ← Back to Blogs
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const contentAvailable = {
    en: !!blog.content.en,
    mr: !!blog.content.mr,
  };

  const displayLanguage = contentAvailable[language]
    ? language
    : contentAvailable.en
    ? "en"
    : "mr";

  return (
    <div className="pt-16 md:pt-20 lg:pt-24">
      <Headercopy />
      {/* Gradient below the header */}
      <div className="w-full h-2 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
      <section className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full mx-auto">
          <div className="flex justify-between items-start mb-8 flex-col md:flex-row gap-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {blog.title[displayLanguage]}
            </h1>
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

          {!contentAvailable[language] && (
            <div className="mb-6 p-4 bg-yellow-100 text-yellow-800 rounded-lg">
              {language === "en"
                ? "Marathi version not available. Showing English content."
                : "मराठी आवृत्ती उपलब्ध नाही. इंग्रजी मजकूर दाखवला जात आहे."}
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8">
            <main className="lg:w-2/2">
              <div className="flex items-center text-gray-600 mb-6">
                <span className="mr-4">By {blog.author}</span>
                <span className="mr-4">•</span>
                <span>{formatDate(blog.date)}</span>{" "}
                {/* Format the date here */}
                <span className="mr-4 ml-4">•</span>
                <span>{blog.readingTime} read</span>
              </div>

              <img
                src={blog.image}
                alt={blog.title[displayLanguage]}
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-8"
              />

              <article
                className="prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: blog.content[displayLanguage],
                }}
              />
            </main>
            <aside className="lg:w-1/3 mt-8 lg:mt-0">
              <Sidebar />
            </aside>
          </div>
          <ConversionStripFirst></ConversionStripFirst>
        </div>
      </section>
      <div className="w-full h-2 bg-gradient-to-r from-purple-500 to-indigo-500"></div>

      <Footer />
    </div>
  );
}
