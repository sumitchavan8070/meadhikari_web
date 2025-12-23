"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Headercopy from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import axios from "axios";
import { BASE_URL } from "@/utils/globalStrings";
import styles from "../BlogPost.module.css";
import ConversionStripSecond from "@/components/ConversionStripSecound";
import OurPresenceSection from "@/app/about/OurPresenceSection";
import OfferBannerSecond from "@/components/OfferBannerSecond";
import ConversionStripFirst from "@/components/ConversionStripFirst";
import { FaSpinner } from "react-icons/fa";

export default function BlogPost({ params }) {
  const searchParams = useSearchParams();
  const [language, setLanguage] = useState(searchParams.get("lang") || "en");
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tableOfContents, setTableOfContents] = useState([]);
  const [headerHeight, setHeaderHeight] = useState(0);

  const fetchBlog = useCallback(async () => {
    try {
      const response = await axios.get(`${BASE_URL}/blogs/${params.slug}`);
      setBlog(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [params.slug]);

  useEffect(() => {
    fetchBlog();

    // Calculate header height dynamically
    const headerElement = document.querySelector("header");
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }

    // Update header height on window resize
    const handleResize = () => {
      const headerElement = document.querySelector("header");
      if (headerElement) {
        setHeaderHeight(headerElement.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [params.slug, fetchBlog]);

  useEffect(() => {
    if (blog && blog.content[language]) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(blog.content[language], "text/html");
      const headings = Array.from(doc.querySelectorAll("h1, h2")).map(
        (heading, index) => {
          if (!heading.id) {
            heading.id = `toc-${index + 1}`;
          }
          return {
            id: heading.id,
            text: heading.textContent,
            level: parseInt(heading.tagName.substring(1), 10),
          };
        }
      );
      setTableOfContents(headings);
    }
  }, [blog, language]);

  const formatDate = useCallback((dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }, []);

  const scrollToSection = useCallback(
    (id) => {
      const element = document.getElementById(id);
      if (element) {
        const scrollPosition =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight -
          20;
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
    },
    [headerHeight]
  );

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#F5F9FF] to-[#E6F0FF]">
        <FaSpinner className="animate-spin text-5xl text-[#1BA9BC] mb-4" />
        <p className="text-[#2966C1] font-medium">Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#055AAB] mb-4">Error</h1>
          <p className="text-[#2966C1] mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-[#1BA9BC] to-[#2966C1] text-white font-medium hover:shadow-lg transition-all"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#055AAB] mb-4">
            404 - Blog Not Found
          </h1>
          <Link
            href="/blogs"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-[#1BA9BC] to-[#2966C1] text-white font-medium hover:shadow-lg transition-all"
          >
            ← Back to Blogs
          </Link>
        </div>
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
    <div
      className={styles.blogContainer}
      style={{ paddingTop: `${headerHeight}px` }}
    >
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <Headercopy />
      </header>

      <div className="w-full h-2 bg-gradient-to-r from-[#1BA9BC] to-[#2966C1] mt-20"></div>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ">
        <div className="w-full mx-auto">
          <div className="flex justify-between items-start mb-8 flex-col md:flex-row gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#055AAB] to-[#1BA9BC]">
              {blog.title[displayLanguage]}
            </h1>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  language === "en"
                    ? "bg-gradient-to-r from-[#1BA9BC] to-[#2966C1] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("mr")}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  language === "mr"
                    ? "bg-gradient-to-r from-[#1BA9BC] to-[#2966C1] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                मराठी
              </button>
            </div>
          </div>

          {!contentAvailable[language] && (
            <div className="p-4 mb-6 rounded-lg bg-blue-50 text-blue-800 border border-blue-200">
              {language === "en"
                ? "Marathi version not available. Showing English content."
                : "मराठी आवृत्ती उपलब्ध नाही. इंग्रजी मजकूर दाखवला जात आहे."}
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8">
            <main className="lg:w-3/4 w-full">
              <div className="flex items-center text-[#4A6FA9] mb-6">
                <span className="mr-4">By {blog.author}</span>
                <span className="mr-4">•</span>
                <span>{formatDate(blog.date)}</span>
                <span className="mr-4 ml-4">•</span>
                <span>{blog.readingTime} read</span>
              </div>

              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title[displayLanguage]}
                  className="w-full h-auto rounded-xl shadow-md mb-8"
                  loading="lazy"
                />
              )}

              {tableOfContents.length > 0 && (
                <div className="bg-[#F5F9FF] p-6 rounded-xl border border-[#E6F0FF] mb-8">
                  <h2 className="text-xl font-bold text-[#055AAB] mb-4">
                    Table of Contents
                  </h2>
                  <ul className="space-y-2">
                    {tableOfContents.map((item) => (
                      <li
                        key={item.id}
                        className={`ml-${(item.level - 1) * 2}`}
                      >
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.id);
                          }}
                          className="flex items-center text-[#2966C1] hover:text-[#1BA9BC] transition-colors"
                        >
                          <span className="mr-2">🌿</span>
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <article
                className={`${styles.blogContent} prose max-w-none`}
                dangerouslySetInnerHTML={{
                  __html: blog.content[displayLanguage],
                }}
              />
            </main>

            <aside className="lg:w-1/4 w-full lg:block hidden">
              <div className="sticky top-28 space-y-6">
                <ConversionStripSecond />
                <OurPresenceSection />
                <OfferBannerSecond />
              </div>
            </aside>
          </div>
          <ConversionStripFirst />
        </div>
      </section>

      <div className="w-full h-2 bg-gradient-to-r from-[#1BA9BC] to-[#2966C1]"></div>
      <Footer />
    </div>
  );
}
