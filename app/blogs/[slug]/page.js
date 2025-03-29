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
import styles from "../BlogPost.module.css"; // Import the combined CSS file

export default function BlogPost({ params }) {
  const searchParams = useSearchParams();
  const [language, setLanguage] = useState(searchParams.get("lang") || "en");
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State to store dynamically generated table of contents
  const [tableOfContents, setTableOfContents] = useState([]);

  // State to store header height
  const [headerHeight, setHeaderHeight] = useState(0);

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

    // Calculate header height dynamically
    const headerElement = document.querySelector("header"); // Adjust selector if needed
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
  }, [params.slug]);

  useEffect(() => {
    if (blog && blog.content[language]) {
      // Parse the blog content to extract headings
      const parser = new DOMParser();
      const doc = parser.parseFromString(blog.content[language], "text/html");

      // Extract headings (h1, h2)
      const headings = Array.from(doc.querySelectorAll("h1, h2")).map(
        (heading, index) => {
          // Generate a unique ID if the heading doesn't already have one
          if (!heading.id) {
            heading.id = `toc-${index + 1}`;
          }
          return {
            id: heading.id,
            text: heading.textContent,
            level: parseInt(heading.tagName.replace("H", ""), 10), // Extract heading level (1, 2)
          };
        }
      );

      setTableOfContents(headings);
    }
  }, [blog, language]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day} /${month} /${year}`;
  };

  // Smooth Scroll Functionality
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className={styles.blogContainer}>
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
      <div className={styles.blogContainer}>
        <Headercopy />
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className={styles.title}>Error</h1>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className={`${styles.languageButton} ${styles.active}`}
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
      <div className={styles.blogContainer}>
        <Headercopy />
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className={styles.title}>404 - Blog Not Found</h1>
            <Link
              href="/blogs"
              className={`${styles.languageButton} ${styles.active}`}
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
    <div
      className={styles.blogContainer}
      style={{ paddingTop: `${headerHeight}px` }} // Apply dynamic padding
    >
      <Headercopy />
      {/* Gradient below the header */}
      <div className="w-full h-2 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
      <section className="w-full lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full mx-auto">
          <div className="flex justify-between items-start mb-8 flex-col md:flex-row gap-4">
            <h1 className={styles.title}>{blog.title[displayLanguage]}</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage("en")}
                className={`${styles.languageButton} ${
                  language === "en" ? styles.active : styles.inactive
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("mr")}
                className={`${styles.languageButton} ${
                  language === "mr" ? styles.active : styles.inactive
                }`}
              >
                मराठी
              </button>
            </div>
          </div>

          {!contentAvailable[language] && (
            <div className={styles.warningMessage}>
              {language === "en"
                ? "Marathi version not available. Showing English content."
                : "मराठी आवृत्ती उपलब्ध नाही. इंग्रजी मजकूर दाखवला जात आहे."}
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <main className="lg:w-3/3 w-full">
              {" "}
              {/* Full width on mobile, 2/3 on desktop */}
              <div className={styles.metadata}>
                <span className="mr-4">By {blog.author}</span>
                <span className="mr-4">•</span>
                <span>{formatDate(blog.date)}</span>
                <span className="mr-4 ml-4">•</span>
                <span>{blog.readingTime} read</span>
              </div>
              {/* Banner Image */}
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title[displayLanguage]}
                  className={styles.image} // Style for banner image
                />
              )}
              {/* Table of Contents */}
              {tableOfContents.length > 0 && (
                <div className={styles.tocBox}>
                  <h2>Table of Contents</h2>
                  <ul>
                    {tableOfContents.map((item) => (
                      <li
                        key={item.id}
                        className={`ml-${(item.level - 1) * 2}`}
                      >
                        {/* Add checkbox emoji before the link */}
                        <span role="img" aria-label="checkmark">
                          🌿 {"      "}
                        </span>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            scrollToSection(item.id); // Use custom scroll function
                          }}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Apply scoped styles to the blog content */}
              <article
                className={`${styles.blogContent} prose max-w-none`}
                dangerouslySetInnerHTML={{
                  __html: blog.content[displayLanguage],
                }}
              />
            </main>

            {/* Sidebar */}
            <aside className="lg:w-1/3 w-full lg:block hidden">
              {" "}
              {/* Hidden on mobile, visible on desktop */}
              <Sidebar />
            </aside>
          </div>
          <ConversionStripFirst />
        </div>
      </section>
      <div className="w-full h-2 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
      <Footer />
    </div>
  );
}
