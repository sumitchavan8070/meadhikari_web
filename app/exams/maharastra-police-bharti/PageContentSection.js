"use client";

import React, { useState, useRef } from "react";
import "./syllabusStyles.css"; // Import the CSS file for scoped styling

const PageContentSection = () => {
  const [activeTab, setActiveTab] = useState("syllabus");
  const solvePaperRef = useRef(null); // Reference to the "Solve Paper" section

  const jsonData = {
    syllabus: ` <h1>तलाठी भरती परीक्षेचा अभ्यासक्रम (Syllabus)</h1> <div> <h2>परीक्षेची माहिती (Exam Details)</h2> <table border="1"> <tr> <th>विषय</th> <th>प्रश्न संख्या</th> <th>गुण</th> <th>वेळ (मिनिटे)</th> </tr> <tr> <td>जनरल स्टडीज (General Studies)</td> <td>25</td> <td>50</td> <td rowspan="4">90 मिनिटे</td> </tr> <tr> <td>गणित आणि बुद्धिमत्ता चाचणी (Mathematics & Reasoning)</td> <td>25</td> <td>50</td> </tr> <tr> <td>मराठी भाषा कौशल्य (Marathi Language Skills)</td> <td>25</td> <td>50</td> </tr> <tr> <td>इंग्रजी भाषा कौशल्य (English Language Skills)</td> <td>25</td> <td>50</td> </tr> <tr> <th>एकूण</th> <th>100</th> <th>200</th> <th>90 मिनिटे</th> </tr> </table> </div> <div> <h2>अभ्यासक्रम (Detailed Syllabus)</h2> <h3>१. जनरल स्टडीज (General Studies)</h3> <ul> <li>भारतीय राज्यघटना</li> <li>महाराष्ट्राचा इतिहास आणि संस्कृती</li> <li>भारतीय अर्थव्यवस्था आणि नियोजन</li> <li>भूगोल: भारत आणि महाराष्ट्राचा भौगोलिक विश्लेषण</li> <li>पर्यावरण आणि परिसंस्था</li> <li>चालू घडामोडी (Current Affairs)</li> </ul> <h3>२. गणित आणि बुद्धिमत्ता चाचणी (Mathematics and Reasoning)</h3> <ul> <li>अंकगणित (Arithmetic): सरासरी, शेकडेवारी, नफा तोटा, सरळव्याज आणि चक्रवाढ व्याज</li> <li>बुद्धिमत्ता चाचणी (Reasoning): श्रृंखला, वेन आकृती, दिशा संबंधित प्रश्न</li> <li>सांख्यिकी आणि डेटा विश्लेषण</li> </ul> <h3>३. मराठी भाषा कौशल्य (Marathi Language Skills)</h3> <ul> <li>मराठी व्याकरण: शब्दसमूह, वाक्यरचना, विरामचिन्हे</li> <li>मराठी निबंध लेखन</li> <li>मराठीतील सामान्य शब्दसंग्रह</li> </ul> <h3>४. इंग्रजी भाषा कौशल्य (English Language Skills)</h3> <ul> <li>English Grammar: Tenses, Articles, Prepositions</li> <li>Comprehension Passages</li> <li>Vocabulary and Synonyms/Antonyms</li> </ul> <h3>५. कौशल्य चाचणी (Skill Test)</h3> <ul> <li>टाइपिंग कौशल्य (मराठी आणि इंग्रजी)</li> <li>डेटा एंट्री कौशल्य</li> <li>ऑफिस संगणक वापराची मूलभूत क्षमता</li> </ul> <h3>६. इतर महत्त्वाचे घटक (Other Important Topics)</h3> <ul> <li>ग्रामीण विकास आणि पंचायत राज</li> <li>कृषी आणि शेतकऱ्यांशी संबंधित योजना</li> <li>महाराष्ट्रातील सामाजिक कल्याण योजना</li> </ul> </div> <p><strong>नोंद:</strong> वरील अभ्यासक्रम सामान्य स्वरूपात दिला आहे. अधिक माहितीसाठी अधिकृत जाहिरात तपासा.</p> `,
    previousYearPapers: [
      { year: 2023, name: "Talathi Bharti Prelims", link: "#" },
      { year: 2022, name: "Talathi Bharti Mains", link: "#" },
      { year: 2021, name: "Talathi Bharti Final Exam", link: "#" },
    ],
    currentNews: [
      {
        title: "New Exam Dates Announced",
        date: "Oct 15, 2023",
        link: "https://example.com/new-exam-dates", // Link exists
      },
      {
        title: "Study Material Updates",
        date: "Sep 20, 2023",
        link: null,
      },
    ],
    officialWebsite: "https://example.com",
  };

  const scrollToSolvePaper = () => {
    if (solvePaperRef.current) {
      solvePaperRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="container mx-auto p-4 md:p-8 mt-16">
      {/* Horizontal Navigation Bar */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {[
          { label: "Syllabus", value: "syllabus" },
          { label: "Previous Year Paper PDF", value: "papers" },
          { label: "Current News", value: "news" },
          { label: "Official Website", value: "website" },
        ].map((tab) => (
          <button
            key={tab.value}
            className={`px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm sm:text-base ${
              activeTab === tab.value
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            }`}
            onClick={() => setActiveTab(tab.value)}
            aria-label={`Switch to ${tab.label} tab`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-8">
        {/* Syllabus Tab */}
        {activeTab === "syllabus" && (
          <div className="syllabus-container">
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 md:mb-6">
              Syllabus
            </h2>
            <div
              className="syllabus-content space-y-4 text-sm md:text-base overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: jsonData.syllabus }}
            />
          </div>
        )}

        {/* Previous Year Papers Tab */}
        {activeTab === "papers" && (
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 md:mb-6">
              Previous Year Papers
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden text-sm md:text-base">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold text-gray-700">
                      Paper Name
                    </th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-700">
                      Year
                    </th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-700">
                      Download PDF
                    </th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-700">
                      Solve Paper
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jsonData.previousYearPapers.map((paper, index) => (
                    <tr
                      key={index}
                      className={`border-b ${
                        index % 2 === 0 ? "bg-gray-50" : ""
                      }`}
                    >
                      <td className="py-3 px-4 text-gray-700">{paper.name}</td>
                      <td className="py-3 px-4 text-gray-700">{paper.year}</td>
                      <td className="py-3 px-4">
                        <a
                          href={paper.link}
                          className="text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-all duration-300"
                          aria-label={`Download paper for year ${paper.year}`}
                        >
                          Download PDF
                        </a>
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={scrollToSolvePaper}
                          className="gradient-disco-text flex items-center gap-2 transition-all duration-300"
                          aria-label={`Solve paper for year ${paper.year}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#ff7eb3"
                            className="w-4 h-4 md:w-5 md:h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Solve Paper
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "news" && (
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 md:mb-6">
              Current News
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden text-sm md:text-base">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold text-gray-700">
                      Title
                    </th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-700">
                      Date
                    </th>
                    <th className="py-3 px-4 text-left font-semibold text-gray-700">
                      Link
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jsonData.currentNews.map((news, index) => (
                    <tr
                      key={index}
                      className={`border-b ${
                        index % 2 === 0 ? "bg-gray-50" : ""
                      }`}
                    >
                      <td className="py-3 px-4 text-gray-700">
                        {news.link ? (
                          <a
                            href={news.link}
                            className="text-blue-600 hover:text-blue-800 transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {news.title}
                          </a>
                        ) : (
                          <span className="text-gray-500">{news.title}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-gray-700">{news.date}</td>
                      <td className="py-3 px-4 text-gray-700">
                        {news.link ? (
                          <a
                            href={news.link}
                            className="text-blue-600 hover:text-blue-800 transition-all duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Details
                          </a>
                        ) : (
                          <span className="text-gray-500">No Link</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Official Website Tab */}
        {activeTab === "website" && (
          <div className="animate-fade-in flex flex-col items-center justify-center h-48 md:h-64">
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 md:mb-6">
              Official Website
            </h2>
            <a
              href={jsonData.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 text-sm md:text-base hover:from-indigo-600 hover:to-purple-700"
              aria-label="Visit official website"
            >
              Visit Official Website
            </a>
          </div>
        )}
      </div>

      {/* Solve Paper Section */}
      <div ref={solvePaperRef} className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient">
          Available Previous Year Papers
        </h2>
      </div>
    </section>
  );
};

export default PageContentSection;
