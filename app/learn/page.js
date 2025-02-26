"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SubjectContent from "./SubjectContent";
import Headercopy from "@/components/Headercopy";
import Footer from "@/components/Footer";

export default function LearnPage() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Headercopy />
      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-grow pt-20">
        {/* Sidebar Toggle Button for Small Screens */}
        <button
          className="md:hidden bg-blue-600 text-white p-2 m-4 rounded hover:bg-blue-700 transition duration-300"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Close Menu" : "Open Menu"}
        </button>
        {/* Sidebar */}
        <Sidebar
          setSelectedSubject={setSelectedSubject}
          setSelectedChapter={setSelectedChapter}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        {/* Main Content Area */}
        <main
          className={`flex-1 p-6 transition-all duration-300 ${
            isSidebarOpen ? "hidden md:block" : ""
          }`}
        >
          {selectedChapter ? (
            <SubjectContent
              chapter={selectedChapter}
              setSelectedChapter={setSelectedChapter}
            />
          ) : selectedSubject ? (
            <SubjectContent
              subject={selectedSubject}
              setSelectedChapter={setSelectedChapter}
            />
          ) : (
            <p className="text-gray-600 text-lg">
              Select a subject or chapter from the sidebar to start learning.
            </p>
          )}
        </main>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
