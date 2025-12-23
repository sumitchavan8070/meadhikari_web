// "use client";

// import React, { useState, useRef } from "react";
// import "./syllabusStyles.css"; // Import the CSS file for scoped styling

// const PageContentSection = () => {
//   const [activeTab, setActiveTab] = useState("syllabus");
//   const solvePaperRef = useRef(null); // Reference to the "Solve Paper" section

//   const jsonData = {
//     syllabus: ``,
//     previousYearPapers: [
//       { year: 2024, name: "Talathi Bharti 2024", link: null },
//     ],
//     currentNews: [
//       {
//         title: "New Exam Dates Announced",
//         date: "Oct 15, 2024",
//         link: null,
//       },
//     ],
//     officialWebsite: "https://mahabhumi.gov.in/",
//   };

//   const scrollToSolvePaper = () => {
//     if (solvePaperRef.current) {
//       solvePaperRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="container mx-auto p-4 md:p-8 mt-16">
//       {/* Horizontal Navigation Bar */}
//       <div className="flex flex-wrap gap-2 justify-center mb-8">
//         {[
//           { label: "About Exam", value: "syllabus" },
//           { label: "Previous Year Paper PDF", value: "papers" },
//           { label: "Current News", value: "news" },
//           { label: "Official Website", value: "website" },
//         ].map((tab) => (
//           <button
//             key={tab.value}
//             className={`px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm sm:text-base ${
//               activeTab === tab.value
//                 ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             }`}
//             onClick={() => handleTabChange(tab.value)}
//             aria-label={`Switch to ${tab.label} tab`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Content Area */}
//       <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-8">
//         {/* Syllabus Tab */}
//         {activeTab === "syllabus" && (
//           <div className="syllabus-container">
//             {/* <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 md:mb-6">

//             </h2> */}
//             <div
//               className="syllabus-content space-y-4 text-sm md:text-base overflow-x-auto"
//               dangerouslySetInnerHTML={{ __html: jsonData.syllabus }}
//             />
//           </div>
//         )}

//         {/* Previous Year Papers Tab */}
//         {activeTab === "papers" && (
//           <div className="animate-fade-in">
//             <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 md:mb-6">
//               Previous Year Papers
//             </h2>
//             <div className="overflow-x-auto">
//               <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden text-sm md:text-base">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="py-3 px-4 text-left font-semibold text-gray-700">
//                       Paper Name
//                     </th>
//                     <th className="py-3 px-4 text-left font-semibold text-gray-700">
//                       Year
//                     </th>
//                     <th className="py-3 px-4 text-left font-semibold text-gray-700">
//                       Download PDF
//                     </th>
//                     <th className="py-3 px-4 text-left font-semibold text-gray-700">
//                       Solve Paper
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {jsonData.previousYearPapers.map((paper, index) => (
//                     <tr
//                       key={index}
//                       className={`border-b ${
//                         index % 2 === 0 ? "bg-gray-50" : ""
//                       }`}
//                     >
//                       <td className="py-3 px-4 text-gray-700">{paper.name}</td>
//                       <td className="py-3 px-4 text-gray-700">{paper.year}</td>
//                       <td className="py-3 px-4">
//                         <a
//                           href={paper.link}
//                           className="text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-all duration-300"
//                           aria-label={`Download paper for year ${paper.year}`}
//                         >
//                           Download PDF
//                         </a>
//                       </td>
//                       <td className="py-3 px-4">
//                         <button
//                           onClick={scrollToSolvePaper}
//                           className="gradient-disco-text flex items-center gap-2 transition-all duration-300"
//                           aria-label={`Solve paper for year ${paper.year}`}
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth="1.5"
//                             stroke="#ff7eb3"
//                             className="w-4 h-4 md:w-5 md:h-5"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                             />
//                           </svg>
//                           Solve Paper
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {activeTab === "news" && (
//           <div className="animate-fade-in">
//             <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 md:mb-6">
//               Current News
//             </h2>
//             <div className="overflow-x-auto">
//               <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden text-sm md:text-base">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="py-3 px-4 text-left font-semibold text-gray-700">
//                       Title
//                     </th>
//                     <th className="py-3 px-4 text-left font-semibold text-gray-700">
//                       Date
//                     </th>
//                     <th className="py-3 px-4 text-left font-semibold text-gray-700">
//                       Link
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {jsonData.currentNews.map((news, index) => (
//                     <tr
//                       key={index}
//                       className={`border-b ${
//                         index % 2 === 0 ? "bg-gray-50" : ""
//                       }`}
//                     >
//                       <td className="py-3 px-4 text-gray-700">
//                         {news.link ? (
//                           <a
//                             href={news.link}
//                             className="text-blue-600 hover:text-blue-800 transition-all duration-300"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             {news.title}
//                           </a>
//                         ) : (
//                           <span className="text-gray-500">{news.title}</span>
//                         )}
//                       </td>
//                       <td className="py-3 px-4 text-gray-700">{news.date}</td>
//                       <td className="py-3 px-4 text-gray-700">
//                         {news.link ? (
//                           <a
//                             href={news.link}
//                             className="text-blue-600 hover:text-blue-800 transition-all duration-300"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             View Details
//                           </a>
//                         ) : (
//                           <span className="text-gray-500">No Link</span>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {/* Official Website Tab */}
//         {activeTab === "website" && (
//           <div className="animate-fade-in flex flex-col items-center justify-center h-48 md:h-64">
//             <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 md:mb-6">
//               Official Website
//             </h2>
//             <a
//               href={jsonData.officialWebsite}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 text-sm md:text-base hover:from-indigo-600 hover:to-purple-700"
//               aria-label="Visit official website"
//             >
//               Visit Official Website
//             </a>
//           </div>
//         )}
//       </div>

//       {/* Solve Paper Section */}
//       <div ref={solvePaperRef} className="mt-16">
//         <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient">
//           Available Previous Year Papers
//         </h2>
//       </div>
//     </section>
//   );
// };

// export default PageContentSection;

"use client";

import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import "./syllabusStyles.css"; // Import the CSS file for scoped styling
import QuizCard from "@/app/previous-year-paper/components/QuizCard";
import { useAuth } from "@/Context/AuthContext";
import { useQuestions } from "@/Context/QuestionsContext";
import { useRouter } from "next/navigation";
import { BASE_URL, FREE_QUIZ_NUMBER } from "@/utils/globalStrings";
import axios from "axios";
import SubscriptionPopup from "@/app/previous-year-paper/components/SubscriptionPopup";

const PageContentSection = ({ questionsData = [] }) => {
  const [activeTab, setActiveTab] = useState(""); // Default active tab will be set dynamically
  const [tabConfig, setTabConfig] = useState([]); // Dynamically populated tab configuration
  const [isLoading, setIsLoading] = useState(true);
  const [isSubscriptionActive, setIsSubscriptionActive] = useState(false);
  const [loadingCard, setLoadingCard] = useState(null);
  const [isSubscriptionPopupOpen, setIsSubscriptionPopupOpen] = useState(false);
  const { user, openLoginPopup } = useAuth();
  const { updatePaperMeta, setQuestions } = useQuestions();
  const router = useRouter();
  const solvePaperRef = useRef(null); // Reference to the "Solve Paper" section

  // Enrich questionsData with attempted counts
  const enrichedQuestionsData = useMemo(() => {
    return questionsData.map((quiz) => ({
      ...quiz,
      attempted: quiz.attempted || `${(Math.random() * 4 + 1).toFixed(1)}k`,
    }));
  }, [questionsData]);

  // Fetch tab configuration from an external source (e.g., API or JSON file)
  useEffect(() => {
    // Simulate fetching data from an API or JSON file
    const fetchTabConfig = async () => {
      const dynamicConfig = [
        {
          label: "Previous Year Papers",
          value: "papers",
          isVisible: true,
          type: "papers", // Special type to show QuizCards
        },
        {
          label: "About Exam",
          value: "syllabus",
          isVisible: true,
          content: `<!DOCTYPE html>
<html lang="mr">


<body>
    <h1>परीक्षेचे स्वरुप व त्या अनुषंगिक सूचना</h1>

    <table border="1">
    <tr>
        <th rowspan="2">अ.क्र</th>
        <th rowspan="2">पदाचे नाव</th>
        <th colspan="2">मराठी</th>
        <th colspan="2">इंग्रजी</th>
        <th colspan="2">सामान्य ज्ञान</th>
        <th colspan="2">बौद्धिक चाचणी / अंकगणित</th>
        <th colspan="2">एकूण गुण</th>
    </tr>
    <tr>
        <th>प्रश्न</th>
        <th>गुण</th>
        <th>प्रश्न</th>
        <th>गुण</th>
        <th>प्रश्न</th>
        <th>गुण</th>
        <th>प्रश्न</th>
        <th>गुण</th>
        <th>प्रश्न</th>
        <th>गुण</th>
    </tr>
    <tr>
        <td>१</td>
        <td>तलाठी</td>
        <td>२५</td>
        <td>५०</td>
        <td>२५</td>
        <td>५०</td>
        <td>२५</td>
        <td>५०</td>
        <td>२५</td>
        <td>५०</td>
        <td>१००</td>
        <td>२००</td>
    </tr>
</table>


    <h2>परीक्षेचे स्वरुप</h2>
    <ul>
        <li>परिक्षा कालावधी :- २ तास (१२० मिनिटे)</li>
        <li>परिक्षा ही ऑनलाईन (Computer Based Test) पध्दतीने घेण्यात येईल. परीक्षेच्या प्रश्नपत्रिका वस्तुनिष्ठ बहुपर्यायी स्वरुपाच्या असतील. प्रश्नपत्रिकेतील प्रत्येक प्रश्नास आधिकाधिक ०२ गुण ठेवण्यात येतील.</li>
        <li>महाराष्ट्र शासन, सामान्य प्रशासन विभागाकडील शासन निर्णय क्र. प्रानिमं१२२२/प्र.क्र५४/का.१३-अ दि. ४ मे २०२२ मधील तरतुदीनुसार तलाठी पदासाठी पदवी ही कमीत कमी अर्हता असल्याने सदर पदासाठी परीक्षेचा दर्जा भारतातील मान्यताप्राप्त विद्यापीठाच्या पदवी परीक्षेच्या दर्जाच्या समान राहील. परंतु मराठी व इंग्रजी या विषयाच्या प्रश्नपत्रिकेचा दर्जा उच्च माध्यमिक शालांत परीक्षेच्या (इयत्ता १२ वी ) च्या दर्जाच्या समान राहील व लेखी परीक्षेला मराठी, इंग्रजी, सामान्य ज्ञान व बौध्दीक चाचणी या विषयावर प्रश्नाकरीता प्रत्येकी ५० गुण ठेवून एकुण २०० गुणांची लेखी परीक्षा घेण्यात येईल.</li>
        <li>शासन निर्णय, महसूल व वन विभाग क्र. प्रनिमं- २००९/प्र.क्र.३५६/ई-१०, दि.०१/०१/२०१० मधील तरतुदीनुसार व शासन निर्णय, सामान्य प्रशासन शासन निर्णय क्र. प्रानिमं१२२२/प्र.क्र५४/का.१३-अ दि. ४ मे २०२२ मधील तरतुदीनूसार या पदांकरिता मौखिक परीक्षा (मुलाखती) घेण्यात येणार नाहीत.</li>
        <li>उमेदवारांची निवडसूची तयार करणेसाठी शासन परिपत्रक, सामान्य प्रशासन विभाग क्र.एसआरव्ही-१०९७/प्र.क्र.३१/९८/१६अ, दि.१६/३/१९९९ आणि शासन शुध्दीपत्रक, सामान्य प्रशासन विभाग क्र. संकीर्ण१११९/प्र.क्र३९/१६-अ, दि. दि. १९/१२/२०१८ तसेच शासन निर्णय क्र. प्रानिमं१२२२/प्र.क्र५४/का.१३-अ दि. ४ मे २०२२ अन्वये कार्यवाही करण्यात येईल.</li>
        <li>शासन निर्णय, सामान्य प्रशासन विभाग क्र. प्रानिमं१२२२/प्र.क्र५४/का.१३ - अ दि. ४ मे २०२२ मधील तरतुदीनुसार गुणवत्ता यादीमध्ये अंतर्भाव करण्यासाठी उमेदवारांनी एकुण गुणांच्या किमान ४५ टक्के गुण प्राप्त करणे आवश्यक राहील.</li>
        <li>परीक्षेचा निकाल (निवडसुची) तयार करतांना परीक्षेत ज्या उमेदवारांना समान गुण असतील अशा उमेदवारांचा प्राधान्यक्रम हा महाराष्ट्र शासन निर्णय, सामान्य प्रशासन विभाग शासन निर्णय क्र. प्रानिमं१२२२/प्र.क्र५४/का.१३-अ दि. ४ मे २०२२ मध्ये नमुद निकषांच्या आधारे क्रमवार लावला जाईल.</li>
        <li>परिक्षा ही Computer Based Test पध्दतीने घेण्यात येणार असून प्रत्येक सत्राच्या प्रश्नपत्रिका स्वतंत्रपणे उपलब्ध केल्या जाणार असून एकापेक्षा जास्त सत्रात परिक्षा आयोजित करण्यात येणार आहे. सत्र १ ते अंतिम सत्र यामधील प्रश्नपत्रिकेचे स्वरुप व त्याची काठिण्यता तपासण्यात येऊन त्याचे समानीकरण करणेचे (Normalization) पध्दतीने गुणांक निश्चित करुन निकाल जाहीर करणेत येईल. (Normalization) बाबत TCS कंपनीकडून देण्यात आलेले सुत्र वेबसाईटवर माहितीसाठी प्रकाशित केलेला आहे. सदर (Normalization) सर्व परिक्षार्थी यांना बंधनकार कराहील. याची सर्व परिक्षार्थी यांनी नोंद घ्यावी.</li>
    </ul>

    <h1>पदाच्या निवडीसाठी कार्यपध्दती, आवश्यक कागदपत्रे तसेच महत्वाच्या अटी व शर्ती (सर्व उमेदवारांसाठी)</h1>

<ul>
    <li>
        तलाठी पदासाठी अर्ज केलेला उमेदवार हा महाराष्ट्र राज्याचा रहिवासी असावा व त्याचेकडे महाराष्ट्र राज्याचे अधिवास प्रमाणपत्र असणे आवश्यक आहे.
    </li>
    <li>
        तलाठी पदासाठी अर्ज केलेल्या उमेदवारांसाठी शासन निर्णय क्र. रिपभ/प्र.क्र/६६/२०११/ई-१० दि.१७ जून २०११ नुसार ज्या परिक्षार्थीकडे अधिवास प्रमाणपत्र (Domicile Certificate) उपलब्ध नसल्यास त्यांनी त्यांचा जन्म महाराष्ट्र राज्यात झाला असल्याचा जन्म दाखला (Birth Certificate) सादर करणे आवश्यक आहे. अशा प्रकरणात अधिवास प्रमाणपत्राची अट लागू राहणार नाही. सदर परिक्षार्थीकडे अधिवास प्रमाणपत्र तसेच जन्म तारखेचा दाखला उपलब्ध नसल्यास, त्या परिक्षार्थीने आपला शाळा सोडल्याचा दाखला सादर करणे आवश्यक राहील. परंतू सदर शाळा सोडल्याच्या दाखल्यामध्ये त्या परिक्षार्थीचा जन्म हा महाराष्ट्र राज्यात झाल्याची नोंद असणे आवश्यक आहे. अशा प्रकरणात अधिवास प्रमाणपत्राची अट लागू राहणार नाही. ज्या उमेदवाराचा जन्म महाराष्ट्र राज्यात झाला नसेल परंतू महाराष्ट्र राज्यातील रहिवास सलग १५ वर्षे व त्यापेक्षा अधिक कालावधीचा आहे अशा परीक्षार्थी / उमेदवारांसाठी अधिवास प्रमाणपत्र (Domicile Certificate) आवश्यक राहील.
    </li>
    <li>
        उमेदवाराने अर्ज केला अथवा विहित अर्हता धारण केली म्हणजे परीक्षेला बोलाविण्याचा अथवा नियुक्तीचा हक्क प्राप्त झाला असे नाही.
    </li>
    <li>
        आरक्षित मागास प्रवर्गाचा दावा करणाऱ्या उमेदवारांना ज्या संदर्भातील सक्षम अधिकाऱ्याने दिलेले जात प्रमाणपत्र (Caste Certificate) व उपलब्ध असल्यास जात वैधता प्रमाणपत्र (Validity Certificate) निवडीअंती सादर करणे आवश्यक आहे.
    </li>
    <li>
        जात वैधता प्रमाणपत्र उपलब्ध नसल्यास, शासन निर्णय, सामान्य प्रशासन विभाग क्र. बीसीसी-२०११/प्र.क्र.१०६४/२०११/१६-ब, दि.१२/१२/२०११ मधील तरतुदीनुसार, याचिका क्र.२१३६/२०११ व अन्य याचिकांवर मा. मुंबई उच्च न्यायालयाच्या औरंगाबाद खंडपीठाने दि. २५/८/२०११ रोजी दिलेल्या आदेशाच्या विरोधात मा. सर्वोच्च न्यायालय, नवी दिल्ली येथे दाखल केलेल्या एसएलपी मधील आदेशाच्या अधीन राहून तात्पूरते नियुक्त आदेश निर्गमित केल्याच्या दिनांकापासून ०६ महिन्याचे आत जात वैधता प्रमाणपत्र सादर करणे अनिवार्य आहे, अन्यथा त्यांची नियुक्ती पुर्वलक्षी प्रभावाने रद्द करण्यात येईल.
    </li>
    <li>
        उमेदवारांना परीक्षेसाठी स्वखर्चाने उपस्थित रहावे लागेल. परिक्षेसाठी नेमून दिलेल्या परिक्षा केंद्रावर दिलेल्या वेळेपुर्वी १ तास अगोदर उपस्थित रहावे.
    </li>
    <li>
        नियुक्ती होणाऱ्या उमेदवारास शासन निर्णय दि. २१/१०/२००५ नुसार लागु करण्यात आलेली नवीन परिभाषिक अंशदायी निवृत्तीवेतन योजना (New Defined Contributory Pension Scheme) लागू राहील. त्यांना महाराष्ट्र नागरी सेवा (निवृत्तीवेनाचे अंशराशीकरण) नियम १९८४ आणि सर्वसाधारण भविष्य निर्वाहनिधी योजना लागू राहणार नाही. तथापि, सदर नियमात भविष्यात काही बदल झाल्यास त्याप्रमाणे योजना लागू राहील.
    </li>
    <li>
        सदर भरती प्रक्रिया राज्यस्तरावरुन एकत्रितरित्या राबविली जात असली तरी, सदर तलाठी संवर्गाची यादी तयार करताना त्या- त्या जिल्हयात भरावयाच्या पदांचा विचार करुन, प्रत्येक जिल्हयाची स्वतंत्र निवड यादी तयार करण्यात येऊन त्यानुसार प्रत्येक जिल्हयाची स्वतंत्र निवड यादी जाहीर केली जाईल. उमेदवारास मिळालेले गुण त्याने अर्ज केलेल्या जिल्हयाकरीताच विचारार्थ घेतले जातील व त्याचा अन्य जिल्हयातील निवड यादीशी कोणताही संबंध असणार नाही.
    </li>
    <li>
        उमेदवारांना ज्या जिल्हयाच्या निवडसूची मध्ये निवड जाहीर केली आहे अशा पात्र उमेदवारांना संबंधित जिल्हा हेच नियुक्तीसाठी कार्यक्षेत्र असणार आहे. निवडसूचीतील उमेदवार आवश्यक ती पात्रता पूर्ण करतील त्यांना कागदपत्रे पडताळणीअंती वैद्यकीय व चारित्र पडताळणी पूर्ण करुन नियुक्तीपत्र देण्यात येतील. नियुक्ती बाबतचे सर्व अधिकार हे संबंधित जिल्हयाचे जिल्हाधिकारी यांना असतील.
    </li>
    <li>
        अंतिम निवड यादीतील पात्र उमेदवारांनी सादर केलेल्या विविध प्रमाणपत्राच्या साक्षांकित प्रती मुळ प्रमाणपत्राचे आधारे कागदपत्रे तपासणीवेळी तपासण्यात येतील. सदर प्रमाणपत्राच्या साक्षांकित प्रती मुळ प्रमाणपत्राच्या आधारे कागदपत्र तपासण्याच्या वेळी उपलब्ध करुन देणे उमेदवारांना बंधनकारक राहील. त्यामधील प्रमाणपत्रे खोटी किंवा चुकीची आढळल्यास संबंधित उमेदवारास अपात्र ठरवण्यात येईल.
    </li>
</ul>

    
    <h1> शैक्षणिक अर्हता</h1>

    <ul>
        <li>
            जाहिरातीमध्ये नमुद पदांसाठी अर्ज करणेकामी जाहिरात प्रसिध्दी दि. २६/०६/२०२३ रोजी उमेदवाराने पुढील प्रमाणे शैक्षणिक अर्हता पुर्णतः धारण करणे आवश्यक आहे.
            <ul>
                <li>
                    महाराष्ट्र शासन महसूल व वन विभाग मुंबई यांचेकडील दि. १ जुलै २०१० च्या अधिसूचनेनुसार उमेदवार कोणत्याही शासन मान्यताप्राप्त विद्यापीठाचा पदवीधर असावा.
                </li>
                <li>
                    शासन निर्णय, माहिती तंत्रज्ञान (सा.प्र.वि.) क्र. मातंस - २०१२/प्र.क्र२७७/३९, दि. ४ / २ /२०१३ मध्ये नमूद केल्यानुसार संगणक/ माहिती तंत्रज्ञान विषयक परीक्षा उत्तीर्ण असणे आवश्यक आहे. नसल्यास, शासन निर्णय, सामान्य प्रशासन विभाग क्र. प्रशिक्षण- २०००/प्र.क्र६१/२००१/३९, दि.१९/३/२००३ नुसार संगणकाची अर्हता नियुक्तीच्या दिनांकापासून २ (दोन) वर्षाच्या आत प्राप्त करणे आवश्यक राहील.
                </li>
                <li>
                    मराठी भाषेचे ज्ञान आवश्यक आहे.
                </li>
                <li>
                    माध्यमिक शालांत परीक्षेत मराठी / हिंदी विषयाचा समावेश नसल्यास, निवड झालेल्या उमेदवारांना एतदर्थ मंडळाची मराठी / हिंदी भाषा परिक्षा उत्तीर्ण होणे आवश्यक राहील.
                </li>
            </ul>
        </li>
        <li>
            माजी सैनिकांच्या शैक्षणिक अर्हता : -
            <ul>
                <li>
                    पदवी ही पात्रता असलेल्या आणि तांत्रिक अथवा व्यावसायिक कामाचा अनुभव आवश्यक ठरविलेला नसलेल्या पदांच्या बाबतीत १५ वर्षे सेवा झालेल्या माजी सैनिकांनी एस. एस. सी उत्तीर्ण असल्याचे किंवा इंडियन आर्मी स्पेशल सर्टिफिकेट एज्युकेशन अथवा तत्सम प्रमाणपत्र असल्यास ते अशा पदांना अर्ज करु शकतात.
                </li>
            </ul>
        </li>
    </ul>



    <h2>पात्रता</h2>
    <ul>
        <li>
            भारतीय नागरिकत्व
        </li>
        <li>
            वयोमर्यादा
            </li>
    </ul>
    

    <table border="1">
        <thead>
            <tr>
                <th>अ.क्र.</th>
                <th>प्रवर्ग / उपप्रवर्ग</th>
                <th>किमान वयोमर्यादा</th>
                <th>कमाल वयोमर्यादा</th>
            </tr>
        </thead>
        <tbody>
            <!-- 1. खुल्या उमेदवारांसाठी -->
            <tr>
                <td>१</td>
                <td>खुल्या उमेदवारांसाठी</td>
                <td>१८ वर्ष</td>
                <td>३८ वर्ष</td>
            </tr>

            <!-- 2. मागासवर्गीय उमेदवारांसाठी -->
            <tr>
                <td>२</td>
                <td>मागासवर्गीय उमेदवारांसाठी</td>
                <td>१८ वर्ष</td>
                <td>४३ वर्ष</td>
            </tr>

            <!-- 3. पदवीधारक उमेदवारांसाठी -->
            <tr>
                <td>३</td>
                <td>पदवीधारक उमेदवारांसाठी</td>
                <td>१८ वर्ष</td>
                <td>५५ वर्ष</td>
            </tr>

            <!-- 4. सैनिकांचे -->
            <tr>
                <td>४</td>
                <td>सैनिकांचे</td>
                <td>१८ वर्ष</td>
                <td>४५ वर्ष</td>
            </tr>

            <!-- 5. खेळाडू उमेदवारांसाठी -->
            <tr>
                <td>५</td>
                <td>खेळाडू उमेदवारांसाठी</td>
                <td>१८ वर्ष</td>
                <td>४३ वर्ष</td>
            </tr>

            <!-- 6. दिव्यांग उमेदवारांसाठी -->
            <tr>
                <td>६</td>
                <td>दिव्यांग उमेदवारांसाठी</td>
                <td>१८ वर्ष</td>
                <td>४५ वर्ष</td>
            </tr>

            <!-- 7. प्रकल्पग्रस्त आणि भुकंपग्रस्त उमेदवारांसाठी -->
            <tr>
                <td>७</td>
                <td>प्रकल्पग्रस्त आणि भुकंपग्रस्त उमेदवारांसाठी</td>
                <td>१८ वर्ष</td>
                <td>४५ वर्ष</td>
            </tr>

            <!-- 8. माजी सैनिक उमेदवारांसाठी -->
            <tr>
                <td>८</td>
                <td>माजी सैनिक उमेदवारांसाठी</td>
                <td>१८ वर्ष</td>
                <td>४५ वर्ष</td>
            </tr>
        </tbody>
    </table>
    <ul>
    <li>
            <strong>तथापि,</strong> महाराष्ट्र शासन, सामान्य प्रशासन विभागाकडील शासन निर्णय सनिव २०२३ / प्र.क्र / १४ / कार्या ९२ दि. ३ मार्च २०२३ अन्वये दि. ३१ डिसेंबर २०२३ पुर्वी प्रसिध्द होणाऱ्या भरती जाहिराती करिता कमाल वयोमर्यादेच्या दोन वर्षे शिथिलता दिलेली असल्याने वर नमूद सर्व प्रवर्गासाठी कमाल वयोमर्यादेच्या दोन वर्षे इतकी शिथिलता असेल.
        </li>
    </ul>


    <h2>परीक्षा शुल्क (फी)</h2>
    <table border="1">
        <thead>
            <tr>
                <th>अ.क्र.</th>
                <th>पदाचे नाव</th>
                <th>खुला प्रवर्ग</th>
                <th>राखीव प्रवर्ग (मागास प्रवर्ग व आर्थिकदृष्टया दुर्बल घटक)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>१</td>
                <td>तलाठी - पेसा क्षेत्राबाहेरील</td>
                <td>१०००/-</td>
                <td>९००/-</td>
            </tr>
            <tr>
                <td>२</td>
                <td>तलाठी - पेसा क्षेत्रातील</td>
                <td>९००/-</td>
                <td>माजी सैनिकांना परिक्षा शुल्क आकारले जाणार नाही.</td>
            </tr>
        </tbody>
    </table>

    <h2>परीक्षा शुल्क ना परतावा (Non-refundable) आहे.</h2>

    <p>पूर्ण झाल्यावर उपलब्ध होणाऱ्या <strong>Submit</strong> बटनावर क्लिक केल्यानंतर <strong>Pay Fees</strong> या बटनावर क्लिक केल्यानंतर किंवा मुखपृष्ठावरील <strong>माझे खाते</strong> या सदराखालील अर्ज केलेल्या पदाच्या यादीतील <strong>Fees Not Paid</strong> अशी सद्यस्थिती लिहिलेल्या जाहिरात / पद / परीक्षेसामोरील <strong>Pay Now</strong> या लिंकवर क्लिक करुन परीक्षा शुल्काचा भरणा करता येईल.</p>

    <h2>परीक्षा शुल्काचा भरणा खालील पध्दतीने करता येईल</h2>
    <ul>
        <li><strong>ऑनलाईन पध्दतीने:</strong>
            <ul>
                <li>परीक्षा शुल्काचा भरणा प्रणालीद्वारे उपलब्ध करुन दिलेल्या पेमेंट गेटवेच्या माध्यमातून क्रेडिट कार्ड, डेबिट कार्ड अथवा नेटबँकिंगद्वारे परीक्षा शुल्क अदा करता येईल.</li>
                <li>परीक्षा शुल्काचा भरणा करताना बँक खात्यातून परीक्षा शुल्काची रक्कमेची वजावट झाल्यानंतर परीक्षा शुल्काचा भरणा यशस्वीपणे झाला (<strong>Payment Successful</strong>) असल्याचा संदेश ऑनलाईन अर्जप्रणालीच्या पृष्ठावर प्रदर्शित झाल्याशिवाय व परीक्षा शुल्काची पावती तयार झाल्याशिवाय संकेतस्थळावरील संबंधित पृष्ठावरुन आणि / अथवा खात्यातून लॉग आऊट होऊ नये.</li>
                <li>परीक्षा शुल्काचा भरणा केल्यानंतर उमेदवाराला त्याच्या प्रोफाईलमध्ये परीक्षा शुल्का भरणा यशस्वी झाला आहे किंवा कसे, याची स्थिती (<strong>Status</strong>) लगेचच अवगत होईल. खात्यातून Logout होण्यापुर्वी परीक्षा शुल्क यशस्वीपणे भरले असल्याबाबत व बँकेकडून व्यवहार (<strong>Transaction</strong>) पूर्ण झाला असल्याबाबत खात्री करण्याची जबाबदारी उमेदवाराची आहे.</li>
                <li>परीक्षा शुल्काचा भरणा यशस्वी न झाल्यास पुन्हा शुल्क भरण्याची कार्यवाही प्रस्तुत जाहिरातीच्या अनुषंगाने विहीत दिनांक / विहित वेळेपूर्वीच करणे आवश्यक आहे. कोणत्याही कारणास्तव व्यवहार अयशस्वी ठरल्यास यासंदर्भातील तक्रारींची दखल घेतली जाणार नाही. विहीत मुदतीत परीक्षा शुल्काचा भरणा करु न शकणाऱ्या उमेदवारांचा संबंधित भरतीप्रक्रियेकरिता विचार केला जाणार नाही.</li>
            </ul>
        </li>
    </ul>



    <ul>
    <h2>पदसंख्या व आरक्षणासंदर्भात सर्वसाधारण तरतुदी</h2>
        <ul>
            <li> पदसंख्या व आरक्षणामध्ये शासनाच्या संबंधित विभागांच्या सूचनेनुसार बदल (कमी / वाढ) होण्याची शक्यता आहे.</li>
            <li> पदसंख्या व आरक्षणामध्ये बदल झाल्यास याबाबतची घोषणा / सूचना वेळोवेळी कार्यालयाच्या संकेतस्थळावर प्रसिध्द करण्यात येईल.</li>
            <li> प्रस्तुत जाहिरातीमध्ये नमूद संवर्गामध्ये काही मागास प्रवर्ग व समांतर आरक्षणाची पदे उपलब्ध नाहीत.</li>
            <li> महिलांसाठी आरक्षित पदांकरिता दावा करणाऱ्या उमेदवारांनी महाराष्ट्राचे अधिवासी असल्याबाबत प्रमाणपत्र सादर करावे.</li>
            <li> विमुक्त जाती (अ), भटक्या जमाती (ब, क, ड) प्रवर्गासाठी आरक्षित असलेली पदे आंतरपरिवर्तनीय आहेत.</li>
            <li> जात / जमात राज्य शासनाकडून आरक्षणासाठी पात्र असल्याचे घोषित केली असल्यासच आरक्षणाच्या दाव्यासाठी पात्र असतील.</li>
            <li> समांतर आरक्षणाबाबत शासन परिपत्रकानुसार कार्यवाही करण्यात येईल.</li>
            <li> आर्थिकदृष्टया दुर्बल घटकांतील (ईडब्लूएस) उमेदवारांना विहित प्रमाणपत्र पडताळणीसाठी सादर करणे आवश्यक राहील.</li>
            <li> सामाजिक न्याय व विशेष सहाय्य विभागाच्या शासन परिपत्रकानुसार कार्यवाही केली जाईल.</li>
            <li>उन्नत आणि प्रगत व्यक्ती / गट यामध्ये मोडत नसल्याचे प्रमाणपत्र आवश्यक आहे.</li>
            <li>मागास प्रवर्गाच्या उमेदवारांचा खुल्या पदांवर निवडीसाठी विचार शासनाच्या धोरणानुसार होईल.</li>
            <li>खुल्या गटातील उमेदवारांसाठी पात्रता निकष आवश्यक आहेत.</li>
            <li>कोणत्याही प्रकारच्या आरक्षणाचा लाभ फक्त महाराष्ट्राचे रहिवासी असणाऱ्या उमेदवारांना अनुज्ञेय आहे.</li>
            <li>आरक्षणाचा दावा करणाऱ्या उमेदवारांकडे आवश्यक प्रमाणपत्र असणे बंधनकारक आहे.</li>
            <li>विविध न्यायालयीन प्रकरणे अंतिम निर्णयाच्या अधीन राहून पदभरती प्रक्रिया केली जाईल.</li>
            <li>खेळाडू आरक्षण:
                <ul>
                    <li>खेळाडू आरक्षणासंदर्भात शासन निर्णय लागू होतील.</li>
                    <li>खेळाडूंनी पात्रता प्रमाणपत्र परीक्षा अर्जाच्या अंतिम दिनांकाआधी सादर करणे आवश्यक आहे.</li>
                    <li>खेळाडूंच्या प्राविण्य प्रमाणपत्राची पडताळणी आवश्यक आहे.</li>
                </ul>
            </li>
            <li>दिव्यांग आरक्षण:
                <ul>
                    <li>दिव्यांग व्यक्ती हक्क अधिनियम २०१६ अंतर्गत आरक्षण कार्यवाही केली जाईल.</li>
                    <li>तलाठी संवर्गासाठी दिव्यांगांची पदे सुनिश्चित केली आहेत.</li>
                    <li>दिव्यांग व्यक्तींसाठी असलेली पदे भरावयाच्या एकूण पदसंख्येच्या आधारावर असतील.</li>
                </ul>
            </li>
            <li>अनाथ आरक्षण:
                <ul>
                    <li>अनाथ व्यक्तींचे आरक्षण शासन निर्णयानुसार राहील.</li>
                    <li>अनाथ उमेदवारांना महिला व बालविकास विभागाचे प्रमाणपत्र आवश्यक आहे.</li>
                    <li>अनाथ प्रमाणपत्र पडताळणीच्या अधीन राहील.</li>
                </ul>
            </li>
            <li>माजी सैनिक आरक्षण:
                <ul>
                    <li>माजी सैनिक उमेदवारांनी जिल्हा सैनिक बोर्डात नावनोंदणी करणे आवश्यक आहे.</li>
                    <li>माजी सैनिकांसाठी १५% राखीव पदे आहेत.</li>
                </ul>
            </li>
            <li>प्रकल्पग्रस्तांसाठीचे आरक्षण:
                <ul>
                    <li>प्रकल्पग्रस्त उमेदवारांनी सक्षम अधिकाऱ्यांचे प्रमाणपत्र सादर करणे आवश्यक आहे.</li>
                </ul>
            </li>
        </ul>
</ul>


<h2>तलाठी (पेसा क्षेत्रातील) पदांसाठी अर्ज सादर करणाऱ्या उमेदवारांसाठी महत्वाच्या सूचना</h2>

<ul>
    <li>पेसा (PESA) क्षेत्रातील तलाठी पदे म्हणजेच अनुसूचित क्षेत्रातील तलाठी पदे होय.</li>
    <li>शासन अधिसूचना क्र. आरबी / टीसी/ई-१३०१३ (४) नोटिफिकेशन-१४७४/२०१४ दि.९/६/२०१४ नुसार सदर पदे आवश्यक शैक्षणिक अर्हता असलेल्या स्थानिक अनुसूचित जमातीच्या उमेदवारांमधून भरण्यात येतील.</li>
    <li>स्थानिक अनुसूचित जमातीचा उमेदवार याचा अर्थ "जे उमेदवार स्वतः किंवा त्यांचे वैवाहिक साथीदार किंवा ज्यांचे माता पिता किंवा आजी-आजोबा हे दि.२६ जानेवारी १९५० पासून आजपर्यंत संबंधित जिल्हयाच्या अनुसूचित क्षेत्रात सलगपणे राहत आले आहेत, असे अनुसूचित जमातीचे उमेदवार" असा होय.</li>
    <li>अनुसूचित जमातीचे उमेदवार स्वतः किंवा त्यांचे वैवाहिक साथीदार किंवा ज्यांचे माता पिता किंवा आजी-आजोबा संबंधित जिल्हयाच्या अनुसूचित क्षेत्रामध्ये दि. २६ जानेवारी १९५० पासून सातत्याने वास्तव्य करीत आहेत. असे उमेदवार तलाठी (पेसा क्षेत्रातील) पदासाठी अर्ज करू शकतील.</li>
    <li>अनुसूचित क्षेत्रातील उमेदवाराकडे अनुसूचित क्षेत्रातील स्थानिक (मूळ) रहिवासी असल्याबाबतचा महसूली पुरावा असणे आवश्यक आहे. तसेच सदर उमेदवारांनी अंतिम निवड झाल्यानंतर त्यांना नियुक्ती देण्यापुर्वी त्यांनी अनुसूचित क्षेत्रामधील स्थानिक रहिवासी असल्याबाबत सादर केलेल्या महसूली पुराव्याबाबत पडताळणी केली जाईल. त्यानंतरच निवड झालेल्या उमेदवारांना अनुसूचित क्षेत्रात (पेसा) नियुक्ती दिली जाईल.</li>
    <li>अनुसूचित (पेसा) क्षेत्रातील अनुसूचित जमाती व्यतिरिक्त अन्य संवर्गाची पदे ही स्वतंत्रपणे दर्शविण्यात आलेली नसून परिशिष्ट - १ मध्ये सामाजिक व समांतर आरक्षणात एकत्रित दर्शविण्यात आलेली आहे.</li>
</ul>



</body>

</html>

`,
          type: "html", // Type of content (e.g., HTML, array, URL)
        },
        {
          label: "Current News",
          value: "news",
          isVisible: true,
          content: [
            // {
            //   title: "New Exam Dates Announced",
            //   date: "Oct 15, 2024",
            //   link: "#",
            // },
            // {
            //   title: "Admit Cards Released",
            //   date: "Sep 20, 2024",
            //   link: null,
            // },
          ],
          type: "array", // Type of content (array of objects)
        },
        {
          label: "Official Website",
          value: "website",
          isVisible: true,
          content: "https://mahabhumi.gov.in/",
          type: "url", // Type of content (URL string)
        },
      ];

      // Simulate a delay (e.g., network request)
      setTimeout(() => {
        setTabConfig(dynamicConfig);
        // Set "papers" tab as active first (Previous Year Papers)
        const papersTab = dynamicConfig.find(tab => tab.value === "papers" && tab.isVisible);
        setActiveTab(papersTab?.value || dynamicConfig[0]?.value || "");
        setIsLoading(false);
      }, 1000);
    };

    fetchTabConfig();
  }, []);

  // Fetch subscription status
  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      if (user) {
        try {
          const response = await axios.get(`${BASE_URL}/${user._id}`);
          setIsSubscriptionActive(response.data.user.isSubscriptionActive);
        } catch (error) {
          console.error("Error fetching subscription status:", error);
        }
      }
    };
    fetchSubscriptionStatus();
  }, [user]);

  // Handle start test
  const handleStartTest = useCallback(async (catID, subcatId, yearId, cardIndex, paper) => {
    if (!user) {
      openLoginPopup();
      return;
    }

    setLoadingCard(cardIndex);

    try {
      if (cardIndex < FREE_QUIZ_NUMBER || isSubscriptionActive) {
        const [categoriesResponse, papersResponse] = await Promise.all([
          axios.get(`${BASE_URL}/exam-categories/get-all-exam-category`),
          axios.get(`${BASE_URL}/papers/${catID}/${subcatId}/${yearId}`)
        ]);

        const allCategories = categoriesResponse.data;
        const categoryDetail = allCategories.find((cat) => cat._id === catID);

        setQuestions(papersResponse.data.questions);
        updatePaperMeta({
          name: paper?.title,
          logo: categoryDetail?.image || "/default-error-logo.png",
          year: paper?.paper?.QPYear,
        });

        router.push("/test");
      } else {
        setIsSubscriptionPopupOpen(true);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      updatePaperMeta({
        name: "Error Loading Paper",
        logo: "/default-error-logo.png",
      });
    } finally {
      setLoadingCard(null);
    }
  }, [user, isSubscriptionActive, openLoginPopup, router, setQuestions, updatePaperMeta]);

  const scrollToSolvePaper = useCallback(() => {
    if (solvePaperRef.current) {
      solvePaperRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Memoize visible tabs to prevent unnecessary recalculations
  const visibleTabs = useMemo(() => {
    return tabConfig.filter((tab) => tab.isVisible);
  }, [tabConfig]);

  // Memoize tab change handler
  const handleTabChange = useCallback((value) => {
    setActiveTab(value);
  }, []);

  return (
    <section data-section="tabs" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
      {/* Section Header */}
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#055AAB] via-[#1BA9BC] to-[#2966C1]">
            Complete Exam Resources
          </span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
          Access previous year papers, syllabus, news, and official information all in one place
        </p>
      </div>

      {/* Horizontal Navigation Bar */}
      <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center mb-6 sm:mb-8 md:mb-12 px-2">
        {visibleTabs.map((tab) => (
          <button
            key={tab.value}
            className={`px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 rounded-full transition-all duration-300 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap ${
              activeTab === tab.value
                ? "bg-gradient-to-r from-[#055AAB] to-[#2966C1] text-white shadow-lg transform scale-105"
                : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-[#055AAB] focus:outline-none focus:ring-2 focus:ring-[#055AAB] shadow-sm"
            }`}
            onClick={() => handleTabChange(tab.value)}
            aria-label={`Switch to ${tab.label} tab`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="w-full bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Render content based on activeTab */}
        {visibleTabs.map((tab) => {
          if (activeTab === tab.value) {
            switch (tab.type) {
              case "papers":
                // Show QuizCards for Previous Year Papers
                return (
                  <div key={tab.value} className="animate-fade-in">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
                      <div className="flex-1">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#055AAB] to-[#1BA9BC] mb-1 sm:mb-2">
                          {tab.label}
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                          Practice with {enrichedQuestionsData.length}+ authentic previous year papers
                        </p>
                      </div>
                      {!isSubscriptionActive && (
                        <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-50 border border-orange-200 rounded-lg w-full sm:w-auto">
                          <span className="text-xs sm:text-sm text-orange-600 font-semibold">
                            Free: {FREE_QUIZ_NUMBER} | Premium: {enrichedQuestionsData.length - FREE_QUIZ_NUMBER}+
                          </span>
                        </div>
                      )}
                    </div>
                    {enrichedQuestionsData && enrichedQuestionsData.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
                        {enrichedQuestionsData.map((quiz, qIndex) => (
                          <QuizCard
                            key={`${quiz.paper?.catID}-${quiz.paper?.yearId}-${qIndex}`}
                            title={quiz.title}
                            time={`${quiz.time} min`}
                            questions={`${quiz.questions} Questions`}
                            marks={`${quiz.marks} Marks`}
                            languages={quiz.languages.join(", ")}
                            attempted={quiz.attempted}
                            buttonText={
                              loadingCard === qIndex
                                ? "Loading..."
                                : qIndex < FREE_QUIZ_NUMBER || isSubscriptionActive
                                ? "Start Test"
                                : "Unlock Premium"
                            }
                            free={quiz.free}
                            live={quiz.live}
                            onButtonClick={() =>
                              handleStartTest(
                                quiz.paper.catID,
                                quiz.paper.subCatId,
                                quiz.paper.yearId,
                                qIndex,
                                quiz
                              )
                            }
                            onUnlockClick={() =>
                              handleStartTest(
                                quiz.paper.catID,
                                quiz.paper.subCatId,
                                quiz.paper.yearId,
                                qIndex,
                                quiz
                              )
                            }
                            paper={quiz.paper}
                            cardIndex={qIndex}
                            isSubscriptionActive={isSubscriptionActive}
                            FREE_QUIZ_NUMBER={FREE_QUIZ_NUMBER}
                            user={user}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-8">
                        <p>No papers available yet.</p>
                      </div>
                    )}
                  </div>
                );

              case "html":
                return (
                  <div key={tab.value} className="syllabus-container">
                    {tab.content ? (
                      <div
                        className="syllabus-content space-y-4 text-sm md:text-base overflow-x-auto"
                        dangerouslySetInnerHTML={{ __html: tab.content }}
                      />
                    ) : (
                      <div className="text-center text-gray-500 py-8">
                        <p>Will update soon...</p>
                      </div>
                    )}
                  </div>
                );

              case "array":
                return (
                  <div key={tab.value} className="animate-fade-in">
                    <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 md:mb-6">
                      {tab.label}
                    </h2>
                    {Array.isArray(tab.content) && tab.content.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden text-sm md:text-base">
                          <thead className="bg-gray-100">
                            <tr>
                              {tab.value === "papers" && (
                                <>
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
                                </>
                              )}
                              {tab.value === "news" && (
                                <>
                                  <th className="py-3 px-4 text-left font-semibold text-gray-700">
                                    Title
                                  </th>
                                  <th className="py-3 px-4 text-left font-semibold text-gray-700">
                                    Date
                                  </th>
                                  <th className="py-3 px-4 text-left font-semibold text-gray-700">
                                    Link
                                  </th>
                                </>
                              )}
                            </tr>
                          </thead>
                          <tbody>
                            {tab.content.map((item, index) => (
                              <tr
                                key={index}
                                className={`border-b ${
                                  index % 2 === 0 ? "bg-gray-50" : ""
                                }`}
                              >
                                {tab.value === "papers" && (
                                  <>
                                    <td className="py-3 px-4 text-gray-700">
                                      {item.name}
                                    </td>
                                    <td className="py-3 px-4 text-gray-700">
                                      {item.year}
                                    </td>
                                    <td className="py-3 px-4">
                                      {item.link ? (
                                        <a
                                          href={item.link}
                                          className="text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-all duration-300"
                                          aria-label={`Download paper for year ${item.year}`}
                                        >
                                          Download PDF
                                        </a>
                                      ) : (
                                        <span className="text-gray-500">
                                          No Link
                                        </span>
                                      )}
                                    </td>
                                    <td className="py-3 px-4">
                                      <button
                                        onClick={scrollToSolvePaper}
                                        className="gradient-disco-text flex items-center gap-2 transition-all duration-300"
                                        aria-label={`Solve paper for year ${item.year}`}
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
                                  </>
                                )}
                                {tab.value === "news" && (
                                  <>
                                    <td className="py-3 px-4 text-gray-700">
                                      {item.link ? (
                                        <a
                                          href={item.link}
                                          className="text-blue-600 hover:text-blue-800 transition-all duration-300"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          {item.title}
                                        </a>
                                      ) : (
                                        <span className="text-gray-500">
                                          {item.title}
                                        </span>
                                      )}
                                    </td>
                                    <td className="py-3 px-4 text-gray-700">
                                      {item.date}
                                    </td>
                                    <td className="py-3 px-4 text-gray-700">
                                      {item.link ? (
                                        <a
                                          href={item.link}
                                          className="text-blue-600 hover:text-blue-800 transition-all duration-300"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          View Details
                                        </a>
                                      ) : (
                                        <span className="text-gray-500">
                                          No Link
                                        </span>
                                      )}
                                    </td>
                                  </>
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="text-center text-gray-500 py-8">
                        <p>Will update soon...</p>
                      </div>
                    )}
                  </div>
                );

              case "url":
                return (
                  <div
                    key={tab.value}
                    className="animate-fade-in flex flex-col items-center justify-center h-64 md:h-80"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 md:mb-8">
                      {tab.label}
                    </h2>
                    {tab.content ? (
                      <a
                        href={tab.content}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 text-sm md:text-base"
                        aria-label="Visit official website"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                          />
                        </svg>
                        Visit Official Website
                      </a>
                    ) : (
                      <div className="text-center text-gray-500 py-8">
                        <p>Will update soon...</p>
                      </div>
                    )}
                  </div>
                );

              default:
                return null;
            }
          }
          return null;
        })}
      </div>


      {/* Subscription Popup */}
      {isSubscriptionPopupOpen && (
        <SubscriptionPopup
          onClose={() => setIsSubscriptionPopupOpen(false)}
          onRedirect={() => router.push("/pricing")}
        />
      )}
    </section>
  );
};

export default PageContentSection;
