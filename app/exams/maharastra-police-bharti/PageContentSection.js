// "use client";

// import React, { useState, useRef } from "react";
// import "./syllabusStyles.css"; // Import the CSS file for scoped styling

// const PageContentSection = () => {
//   const [activeTab, setActiveTab] = useState("syllabus");
//   const solvePaperRef = useRef(null); // Reference to the "Solve Paper" section

//   const jsonData = {
//     syllabus: ` <h1>तलाठी भरती परीक्षेचा अभ्यासक्रम (Syllabus)</h1> <div> <h2>परीक्षेची माहिती (Exam Details)</h2> <table border="1"> <tr> <th>विषय</th> <th>प्रश्न संख्या</th> <th>गुण</th> <th>वेळ (मिनिटे)</th> </tr> <tr> <td>जनरल स्टडीज (General Studies)</td> <td>25</td> <td>50</td> <td rowspan="4">90 मिनिटे</td> </tr> <tr> <td>गणित आणि बुद्धिमत्ता चाचणी (Mathematics & Reasoning)</td> <td>25</td> <td>50</td> </tr> <tr> <td>मराठी भाषा कौशल्य (Marathi Language Skills)</td> <td>25</td> <td>50</td> </tr> <tr> <td>इंग्रजी भाषा कौशल्य (English Language Skills)</td> <td>25</td> <td>50</td> </tr> <tr> <th>एकूण</th> <th>100</th> <th>200</th> <th>90 मिनिटे</th> </tr> </table> </div> <div> <h2>अभ्यासक्रम (Detailed Syllabus)</h2> <h3>१. जनरल स्टडीज (General Studies)</h3> <ul> <li>भारतीय राज्यघटना</li> <li>महाराष्ट्राचा इतिहास आणि संस्कृती</li> <li>भारतीय अर्थव्यवस्था आणि नियोजन</li> <li>भूगोल: भारत आणि महाराष्ट्राचा भौगोलिक विश्लेषण</li> <li>पर्यावरण आणि परिसंस्था</li> <li>चालू घडामोडी (Current Affairs)</li> </ul> <h3>२. गणित आणि बुद्धिमत्ता चाचणी (Mathematics and Reasoning)</h3> <ul> <li>अंकगणित (Arithmetic): सरासरी, शेकडेवारी, नफा तोटा, सरळव्याज आणि चक्रवाढ व्याज</li> <li>बुद्धिमत्ता चाचणी (Reasoning): श्रृंखला, वेन आकृती, दिशा संबंधित प्रश्न</li> <li>सांख्यिकी आणि डेटा विश्लेषण</li> </ul> <h3>३. मराठी भाषा कौशल्य (Marathi Language Skills)</h3> <ul> <li>मराठी व्याकरण: शब्दसमूह, वाक्यरचना, विरामचिन्हे</li> <li>मराठी निबंध लेखन</li> <li>मराठीतील सामान्य शब्दसंग्रह</li> </ul> <h3>४. इंग्रजी भाषा कौशल्य (English Language Skills)</h3> <ul> <li>English Grammar: Tenses, Articles, Prepositions</li> <li>Comprehension Passages</li> <li>Vocabulary and Synonyms/Antonyms</li> </ul> <h3>५. कौशल्य चाचणी (Skill Test)</h3> <ul> <li>टाइपिंग कौशल्य (मराठी आणि इंग्रजी)</li> <li>डेटा एंट्री कौशल्य</li> <li>ऑफिस संगणक वापराची मूलभूत क्षमता</li> </ul> <h3>६. इतर महत्त्वाचे घटक (Other Important Topics)</h3> <ul> <li>ग्रामीण विकास आणि पंचायत राज</li> <li>कृषी आणि शेतकऱ्यांशी संबंधित योजना</li> <li>महाराष्ट्रातील सामाजिक कल्याण योजना</li> </ul> </div> <p><strong>नोंद:</strong> वरील अभ्यासक्रम सामान्य स्वरूपात दिला आहे. अधिक माहितीसाठी अधिकृत जाहिरात तपासा.</p> `,
//     previousYearPapers: [
//       { year: 2023, name: "Talathi Bharti Prelims", link: "#" },
//       { year: 2022, name: "Talathi Bharti Mains", link: "#" },
//       { year: 2021, name: "Talathi Bharti Final Exam", link: "#" },
//     ],
//     currentNews: [
//       {
//         title: "New Exam Dates Announced",
//         date: "Oct 15, 2023",
//         link: "https://example.com/new-exam-dates", // Link exists
//       },
//       {
//         title: "Study Material Updates",
//         date: "Sep 20, 2023",
//         link: null,
//       },
//     ],
//     officialWebsite: "https://example.com",
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
//           { label: "Syllabus", value: "syllabus" },
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
//             onClick={() => setActiveTab(tab.value)}
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
//             <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 md:mb-6">
//               Syllabus
//             </h2>
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

import React, { useState, useRef, useEffect } from "react";
import "./syllabusStyles.css"; // Import the CSS file for scoped styling

const PageContentSection = () => {
  const [activeTab, setActiveTab] = useState(""); // Default active tab will be set dynamically
  const [tabConfig, setTabConfig] = useState([]); // Dynamically populated tab configuration
  const solvePaperRef = useRef(null); // Reference to the "Solve Paper" section

  // Fetch tab configuration from an external source (e.g., API or JSON file)
  useEffect(() => {
    // Simulate fetching data from an API or JSON file
    const fetchTabConfig = async () => {
      const dynamicConfig = [
        {
          label: "About Exam",
          value: "syllabus",
          isVisible: true,
          content: `
          <h2>पोलीस शिपाई / पोलीस शिपाई चालक / बॅण्डस्मन / सशस्त्र पोलीस 
शिपाई / कारागृह शिपाई भरती</h2>
<h2>परीक्षा शुल्क</h2>

<p>सदर परीक्षेकरीता परीक्षा शुल्क खालीलप्रमाणे लागू:</p>

<table border="1">
    <tr>
        <th>अ.क्र.</th>
        <th>पदाचे नाव</th>
        <th>खुला प्रवर्ग</th>
        <th>मागास प्रवर्ग</th>
    </tr>
    <tr>
        <td>१</td>
        <td>पोलीस शिपाई</td>
        <td>रु. ४५०/-</td>
        <td>रु. ३५०/-</td>
    </tr>
    <tr>
        <td>२</td>
        <td>पोलीस शिपाई चालक</td>
        <td>रु. ४५०/-</td>
        <td>रु. ३५०/-</td>
    </tr>
    <tr>
        <td>३</td>
        <td>सशस्त्र पोलीस शिपाई</td>
        <td>रु. ४५०/-</td>
        <td>रु. ३५०/-</td>
    </tr>
    <tr>
        <td>४</td>
        <td>बॅण्डस्मन</td>
        <td>रु. ४५०/-</td>
        <td>रु. ३५०/-</td>
    </tr>
    <tr>
        <td>५</td>
        <td>कारागृह शिपाई</td>
        <td>रु. ४५०/-</td>
        <td>रु. ३५०/-</td>
    </tr>
</table>

<p><strong>* सदरचे शुल्क ना-परतावा आहे.</strong></p>


<h2> सर्वसाधारण सूचना</h2>

<ul>


    <li><strong> निवड प्रक्रिया</strong>
        <ul>
            <li>पोलीस भरतीच्या प्रक्रियेत तयार करण्यात आलेल्या निवड यादीतील उमेदवाराची निवड तात्पुरती (Provisional selection) असेल.</li>
            <li>निवड यादीमध्ये नावाचा समावेश झाला म्हणून नियुक्तीचा हक्क प्राप्त झाला असे समजण्यात येवू नये.</li>
        </ul>
    </li>

    <li><strong> नियुक्तीनंतरच्या जबाबदाऱ्या</strong>
        <ul>
            <li>पोलीस शिपाई / पोलीस शिपाई चालक / बॅण्डस्मन / राज्य राखीव पोलीस बलातील सशस्त्र पोलीस शिपाई व कारागृह शिपाई संवर्गात भरती प्रक्रियेत निवड होऊन नियुक्ती झालेल्या उमेदवारास महाराष्ट्र पोलीस नियमावली, १९९९ व पोलीस महासंचालक, महाराष्ट्र राज्य, मुंबई व घटक प्रमुखांनी वेळोवेळी विहित केलेली कर्तव्ये पार पाडावी लागतील.</li>
        </ul>
    </li>
</ul>

<h2>आवश्यक कागदपत्रे</h2>

<ul>
    <li>SSC / HSC उत्तीर्ण प्रमाणपत्र</li>
    <li>जन्म दाखला</li>
    <li>रहिवाशी प्रमाणपत्र</li>
    <li>जात प्रमाणपत्र</li>
    <li>जात वैधता प्रमाणपत्र</li>
    <li>संगणक परीक्षा उत्तीर्ण प्रमाणपत्र (MSCIT)</li>
    <li>खेळाडू प्रमाणपत्र व पडताळणी अहवाल अथवा पडताळणीसाठी सादर केलेली पोचपावती (शासन निर्णय दि. १७/३/२०१७ व दि. १९/०३/२०१९ प्रमाणे)</li>
    <li>नॉन-क्रिमी लेयर प्रमाणपत्र (वि.जा-अ, भ.ज-ब, भ.ज-क, भ.ज-ड, विमाप्र, इमाव, एसईबीसी, इडब्लूएस प्रवर्गातील उमेदवारांसाठी)</li>
    <li>माजी सैनिकांसाठी डिस्चार्ज प्रमाणपत्र</li>
    <li>गृहरक्षक दलाकरिता आवश्यक असलेले प्रमाणपत्र (जाहिरात दिनांकास १०९५ दिवस पूर्ण झालेल्या उमेदवारांसाठी)</li>
    <li>प्रकल्पग्रस्त प्रमाणपत्र</li>
    <li>भुकंपग्रस्ताचे प्रमाणपत्र</li>
    <li>पोलीस पाल्य प्रमाणपत्र</li>
    <li>अनाथाबाबतचे प्रमाणपत्र</li>
    <li>अंशकालीन प्रमाणपत्र</li>
    <li>इ. डब्ल्यू. एस. प्रमाणपत्र</li>
    <li>NCC प्रमाणपत्र</li>
</ul>

<p><strong>टीप:</strong> उपरोक्त नमूद कागदपत्रे शासन निर्णयानुसार व परिपत्रकानुसार अंतिम निवड झाल्यानंतर तपासण्यात येतील.</p>

<hr style="border: 1px solid #2563eb; margin: 20px 0;">


<h2>✅ पोलीस शिपाई गट - क</h2>



<h2>सेवा प्रवेश नियम:</h2>

<ul>
    <li>महाराष्ट्र राज्य पोलीस दलातील पोलीस शिपाई या पदासाठी खालील सेवाप्रवेश नियम लागू राहतील.</li>
</ul>

<table border="1">
    <tr>
        <th>सेवा प्रवेश नियम</th>
    </tr>
    <tr>
        <td>
            <ul>
                <li>महाराष्ट्र पोलीस दलातील पोलीस शिपाई पदासाठी महाराष्ट्र पोलीस शिपाई (सेवा प्रवेश) नियम - २०११ व त्यामध्ये वेळोवेळी करण्यात आलेल्या सुधारणांसह.</li>
                <li>वर नमूद सेवाप्रवेश नियम सुधारणांसह <a href="https://www.policerecruitment2024.mahait.org">www.policerecruitment2024.mahait.org</a> व <a href="https://www.mahapolice.gov.in">www.mahapolice.gov.in</a> या संकेत स्थळावर उपलब्ध आहेत.</li>
            </ul>
        </td>
    </tr>
</table>




<h2>लेखी चाचणी</h2>
<ul>
    <li><strong>पात्रता:</strong>
        <ul>
            <li>शारीरिक चाचणीमध्ये <strong>किमान ५०% गुण</strong> मिळवणारे उमेदवारच लेखी परीक्षेसाठी पात्र असतील.</li>
            <li>रिक्त पदांच्या <strong>१:१० प्रमाणात</strong> उमेदवारांना लेखी परीक्षेसाठी बोलावले जाईल.</li>
        </ul>
    </li>

    <li><strong>किमान गुण आवश्यकता:</strong>
        <ul>
            <li>लेखी परीक्षेत उमेदवाराने <strong>किमान ४०% गुण</strong> मिळवणे आवश्यक आहे.</li>
            <li>४०% पेक्षा कमी गुण असलेले उमेदवार <strong>अपात्र ठरतील.</strong></li>
        </ul>
    </li>

    <li><strong>परीक्षेचा स्वरूप व कालावधी:</strong>
        <ul>
            <li>परीक्षा <strong>९० मिनिटांची</strong> असेल.</li>
            <li>सर्व प्रश्न <strong>बहुपर्यायी स्वरूपाचे (MCQ)</strong> असतील.</li>
            <li>लेखी चाचणी <strong>मराठी भाषेत</strong> घेतली जाईल.</li>
            <li>मैदानी चाचणी पार पडल्यानंतर लेखी परीक्षेच्या तारखेची घोषणा केली जाईल.</li>
        </ul>
    </li>

    <li><strong>एकाच दिवशी परीक्षा:</strong>
        <ul>
            <li>संपूर्ण राज्यभरातील सर्व पोलीस घटकांमध्ये <strong>एकाच दिवशी</strong> लेखी परीक्षा घेतली जाईल.</li>
            <li>उमेदवारांनी ऑनलाईन अर्ज भरताना <strong>या बाबींचा विचार करावा</strong>.</li>
        </ul>
    </li>

    <li><strong>लेखी परीक्षेतील विषय:</strong>
        <ul>
            <li><strong>अंकगणित</strong></li>
            <li><strong>सामान्य ज्ञान व चालू घडामोडी</strong></li>
            <li><strong>बुद्धीमत्ता चाचणी</strong></li>
            <li><strong>मराठी व्याकरण</strong></li>
        </ul>
    </li>

    <li><strong>गुणवत्ता यादी व अंतिम निवड:</strong>
        <ul>
            <li>शारीरिक चाचणी व लेखी परीक्षेत मिळालेल्या <strong>एकत्रित गुणांवर</strong> गुणवत्ता यादी तयार केली जाईल.</li>
            <li>शासनाने वेळोवेळी निर्गमित केलेल्या आदेशांनुसार <strong>अंतिम निवड यादी व प्रतीक्षा यादी</strong> प्रसिद्ध केली जाईल.</li>
            <li>(उदा. गृह विभाग शासन निर्णय क्रमांक <strong>पोलीस - १८१९ / प्र. क्र ३१६ / पोल - ५ अ, दिनांक १०/१२/२०२०</strong> नुसार).</li>
        </ul>
    </li>
</ul>


<h2>वयोमर्यादा</h2>
<p>अर्ज सादर करण्याचा अंतिम दिनांक म्हणजेच दिनांक dd/mm/yyyy रोजी किमान व कमाल वयोमर्यादा खालील प्रमाणे राहील:</p>

<h3>i) सामान्य प्रवर्गासाठी</h3>
<table border="1">
<tr>
<th>अ.क्र.</th>
<th>प्रवर्ग</th>
<th>किमान वयोमर्यादा</th>
<th>कमाल वयोमर्यादा</th>
</tr>
<tr>
<td>1</td>
<td>खुला</td>
<td>18 वर्षे</td>
<td>28 वर्षे</td>
</tr>
<tr>
<td>2</td>
<td>मागास प्रवर्ग (अ.जाती, अ.जमाती, वि.जा. - अ, भ.ज. -ब, भ.ज.-क, भ.ज. -ड, वि.मा.प्र., इ.मा.व., एस.ई.बी.सी., इ.डब्ल्यू.एस.)</td>
<td>18 वर्षे</td>
<td>33 वर्षे</td>
</tr>
<tr>
<td>3</td>
<td>प्रकल्पग्रस्त उमेदवार</td>
<td>18 वर्षे</td>
<td>45 वर्षे</td>
</tr>
<tr>
<td>4</td>
<td>भूकंपग्रस्त उमेदवार</td>
<td>18 वर्षे</td>
<td>45 वर्षे</td>
</tr>
<tr>
<td>5</td>
<td>माजी सैनिक उमेदवार</td>
<td>18 वर्षे</td>
<td>उमेदवाराच्या सशस्त्र दलात झालेल्या सेवे इतका कालावधी अधिक ३ वर्षे</td>
</tr>
<tr>
<td>6</td>
<td>अंशकालीन उमेदवार</td>
<td>18 वर्षे</td>
<td>55 वर्षे</td>
</tr>
<tr>
<td>7</td>
<td>अनाथ</td>
<td>18 वर्षे</td>
<td>33 वर्षे</td>
</tr>
</table>

<h3>ii) समांतर आरक्षणांतर्गत येणारे उमेदवार</h3>
<table border="1">
<tr>
<th>अ.क्र.</th>
<th>प्रवर्ग</th>
<th>किमान वयोमर्यादा</th>
<th>कमाल वयोमर्यादा</th>
</tr>
<tr>
<td>1</td>
<td>महिला उमेदवार (खुला वर्ग)</td>
<td>18 वर्षे</td>
<td>28 वर्षे</td>
</tr>
<tr>
<td>2</td>
<td>महिला उमेदवार (मागास प्रवर्ग)</td>
<td>18 वर्षे</td>
<td>33 वर्षे</td>
</tr>
<tr>
<td>3</td>
<td>खेळाडू उमेदवार</td>
<td>18 वर्षे</td>
<td>33 वर्षे</td>
</tr>
<tr>
<td>4</td>
<td>पोलीस पाल्य</td>
<td>18 वर्षे</td>
<td>खुला वर्ग: 28+5 वर्षे<br>मागास प्रवर्ग: 33+5 वर्षे</td>
</tr>
<tr>
<td>5</td>
<td>गृहरक्षक</td>
<td>18 वर्षे</td>
<td>28 वर्षे</td>
</tr>
<tr>
<td>6</td>
<td>माजी सैनिकावर अवलंबून असलेले (मुलगा, मुलगी, पत्नी)</td>
<td>18 वर्षे</td>
<td>खुला वर्ग: 28+3 वर्षे<br>मागास प्रवर्ग: 33+3 वर्षे</td>
</tr>
</table>


<h2> शैक्षणिक अर्हता</h2>
<ul>
    <li>उमेदवारांनी महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळाच्या १२वी परीक्षा किंवा शासनाने समकक्ष म्हणून घोषित केलेली परीक्षा उत्तीर्ण असणे आवश्यक आहे.</li>
    <li>समकक्ष परीक्षांमध्ये खालील समाविष्ट आहेत:
        <ul>
            <li>राष्ट्रीय मुक्त विद्यालय, नवी दिल्ली यांची सिनीयर सेकंडरी स्कूल परीक्षा</li>
            <li>CBSE बारावी परीक्षा</li>
        </ul>
    </li>
    <li>शासन निर्णयानुसार समकक्षता प्राप्त परीक्षांसाठी:
        <ul>
            <li>यशवंतराव चव्हाण मुक्त विद्यापीठ नाशिक (प्रथम वर्ष उत्तीर्ण वा पदवीधर)</li>
            <li>विद्यापीठे, मानीव विद्यापीठे, व ऐच्छिक मान्य शैक्षणिक संस्थांच्या प्रमाणपत्रे</li>
            <li>व्यवसाय शिक्षण परीक्षा मंडळाच्या २ वर्षे कालावधीच्या अभ्यासक्रमांची समकक्षता</li>
            <li>डिप्लोमा इन मेकॅनिकल इंजिनियरिंग</li>
        </ul>
    </li>
    <li>माजी सैनिक उमेदवारांसाठी:
        <ul>
            <li>१५ वर्षे सैनिकी सेवा पूर्ण असलेल्या उमेदवारांना १० वी उत्तीर्ण किंवा IASC प्रमाणपत्र आवश्यक</li>
            <li>१५ वर्षे सेवा पूर्ण नसलेल्यांसाठी १२ वी उत्तीर्ण असणे आवश्यक</li>
        </ul>
    </li>
    <li>नक्षलग्रस्त भागातील विशेष बाब:
        <ul>
            <li>नक्षलग्रस्त भागातील अनुसूचित जमाती उमेदवार किंवा नक्षलवाद्यांच्या हल्ल्यात मृत/गंभीर जखमी पोलीस कर्मचारी यांच्या मुलांसाठी किमान शैक्षणिक पात्रता - ७ वी उत्तीर्ण</li>
        </ul>
    </li>
</ul>

<h2> शारीरिक पात्रता</h2>

<h3>i) पुरुष व महिला उमेदवारांसाठी</h3>
<ul>
    <li><strong>महिला उमेदवार:</strong> किमान उंची १५५ सेमी</li>
    <li><strong>पुरुष उमेदवार:</strong> किमान उंची १६५ सेमी</li>
    <li><strong>पुरुष उमेदवारांसाठी छाती:</strong> 
        <ul>
            <li>न फुगवता: ७९ सेमी</li>
            <li>फुगवून: ८४ सेमी (किमान ५ सेमी फरक आवश्यक)</li>
        </ul>
    </li>
</ul>

<h3>ii) तृतीय पंथी (ट्रान्सजेंडर) उमेदवारांसाठी</h3>
<ul>
    <li>स्वतःची लिंग ओळख <strong>महिला</strong> केल्यास – १५५ सेमी</li>
    <li>स्वतःची लिंग ओळख <strong>पुरुष</strong> केल्यास – १६५ सेमी</li>
    <li>स्वतःची लिंग ओळख <strong>महिला / पुरुष / तृतीय पंथी</strong> केल्यास – छातीच्या मोजमापाची आवश्यकता नाही</li>
</ul>

<h3>iii) नक्षलग्रस्त भागातील उमेदवारांसाठी विशेष सूट</h3>
<ul>
    <li>पुरुष व महिला उमेदवारांसाठी उंचीची ४ सेमी सूट</li>
    <li>छातीच्या मोजमापाची आवश्यकता नाही</li>
</ul>

<h3>iv) खेळाडू उमेदवारांसाठी</h3>
<ul>
    <li>पुरुष व महिला खेळाडूंना उंचीमध्ये २.५ सेमी सूट</li>
</ul>

<h3>v) पोलीस दलातील कर्मचारी कुटुंबीयांसाठी</h3>
<ul>
    <li>बेपत्ता पोलीस कर्मचारी किंवा वैद्यकीय कारणाने सेवानिवृत्त कर्मचाऱ्यांच्या नातेवाईकांसाठी:
        <ul>
            <li>उंची: २.५ सेमी सूट</li>
            <li>छाती: न फुगवता २ सेमी आणि फुगवून १.५ सेमी सूट (फक्त पुरुष उमेदवारांसाठी)</li>
        </ul>
    </li>
</ul>


<h2>अन्य अर्हता</h2>
<ul>
    <li><strong>हलके वाहन चालविण्याचा परवाना (LMV License):</strong>
        <ul>
            <li>उमेदवाराने <strong>मोटार वाहन अधिनियम, १९८८</strong> च्या कलम २ (२१) नुसार हलकी वाहने चालविण्याचा परवाना (LMV) धारण केलेला असावा.</li>
            <li>परवाना नसल्यास, उमेदवाराने पोलीस प्रशिक्षण पूर्ण झाल्यानंतर <strong>२ वर्षांच्या आत परवाना प्राप्त करणे बंधनकारक</strong> राहील. याबाबत बंधपत्र सादर करावे लागेल.</li>
            <li>शारीरिक मोजमापाच्या दिवशी परवाना किंवा त्याची छायांकित प्रत सादर करणे आवश्यक आहे.</li>
        </ul>
    </li>
    
    <li><strong>संगणक हाताळणीचे प्रमाणपत्र:</strong>
        <ul>
            <li>महाराष्ट्र पोलीस शिपाई (सेवाप्रवेश) नियम, २०११ मधील सुधारित नियम १३ नुसार, उमेदवाराकडे शासनाच्या <strong>माहिती व तंत्रज्ञान संचालनालयाकडून मान्यताप्राप्त संगणक हाताळणीचे प्रमाणपत्र</strong> असणे आवश्यक आहे.</li>
            <li>सामान्य प्रशासन विभागाच्या शासन निर्णयानुसार, नियुक्तीच्या <strong>२ वर्षांच्या आत संगणक अर्हता प्राप्त करणे बंधनकारक</strong> राहील.</li>
            <li>शासन निर्णय, माहिती तंत्रज्ञान विभाग (४ फेब्रुवारी २०१३) मधील <strong>८६ मान्यताप्राप्त प्रमाणपत्रांपैकी कोणतेही एक प्रमाणपत्र</strong> ग्राह्य धरले जाईल.</li>
        </ul>
    </li>

    <li><strong>गडचिरोली जिल्ह्यासाठी विशेष अर्हता:</strong>
        <ul>
            <li>गडचिरोली जिल्ह्यातील उमेदवारांना <strong>१०० गुणांची गोंडी आणि माडिया भाषेची लेखी चाचणी</strong> द्यावी लागेल.</li>
            <li>फक्त <strong>गडचिरोली जिल्ह्यातील रहिवासी उमेदवारांनाच</strong> या भरती प्रक्रियेत सहभागी होता येईल.</li>
            <li>तहसीलदारांनी दिलेला <strong>वास्तव्याचा दाखला (Residential Certificate)</strong> अनिवार्य आहे.</li>
            <li>गडचिरोली जिल्ह्याच्या बाहेर उमेदवारांची बदली केली जाणार नाही.</li>
        </ul>
    </li>

    <li><strong>मराठी व हिंदी भाषेचे ज्ञान आवश्यक:</strong>
        <ul>
            <li>माध्यमिक शालांत परीक्षेत मराठी किंवा हिंदी विषय नसेल, तर निवड झालेल्या उमेदवारांना मराठी/हिंदी भाषा परीक्षा उत्तीर्ण होणे आवश्यक राहील.</li>
        </ul>
    </li>

    <li><strong>लहान कुटुंबाचे प्रतिज्ञापत्र:</strong>
        <ul>
            <li>गट अ, ब, क आणि ड मधील सेवा प्रवेशासाठी <strong>लहान कुटुंबाचे प्रतिज्ञापत्र</strong> सादर करणे आवश्यक आहे.</li>
        </ul>
    </li>

    <li><strong>प्रमाणपत्रे व दस्तऐवज सादरीकरण:</strong>
        <ul>
            <li>शैक्षणिक व इतर पात्रतेशी संबंधित सर्व <strong>प्रमाणपत्रे कागदपत्र पडताळणीच्या वेळी सादर करणे बंधनकारक</strong> आहे.</li>
        </ul>
    </li>

    <li><strong>नियुक्तीनंतर अटी:</strong>
        <ul>
            <li>महाराष्ट्र नागरी सेवा (सेवेच्या सर्वसाधारण शर्ती) नियम १९८१ आणि महाराष्ट्र पोलीस अधिनियम १९५१ नुसार सेवा अटी लागू राहतील.</li>
            <li>१ नोव्हेंबर २००५ नंतर निवड झालेल्या उमेदवारांना <strong>राष्ट्रीय निवृत्ती वेतन योजना (NPS)</strong> लागू असेल.</li>
        </ul>
    </li>

    <li><strong>एनसीसी 'C' प्रमाणपत्र:</strong>
        <ul>
            <li>एनसीसी 'C' प्रमाणपत्र असलेल्या उमेदवारांना <strong>५ बोनस गुण</strong> दिले जातील.</li>
        </ul>
    </li>
</ul>

<h2> शारीरिक चाचणी</h2>
<p>महाराष्ट्र पोलीस शिपाई (सेवाप्रवेश) नियम, २०११ नुसार शारीरिक चाचणी ५० गुणांची असेल.</p>

<h3>पुरुष उमेदवारांसाठी:</h3>
<table border="1">
    <tr>
        <th>प्रकार</th>
        <th>गुण</th>
    </tr>
    <tr>
        <td>१६०० मीटर धावणे</td>
        <td>२०</td>
    </tr>
    <tr>
        <td>१०० मीटर धावणे</td>
        <td>१५</td>
    </tr>
    <tr>
        <td>गोळाफेक</td>
        <td>१५</td>
    </tr>
    <tr>
        <td><strong>एकूण</strong></td>
        <td><strong>५०</strong></td>
    </tr>
</table>

<h3>महिला उमेदवारांसाठी:</h3>
<table border="1">
    <tr>
        <th>प्रकार</th>
        <th>गुण</th>
    </tr>
    <tr>
        <td>८०० मीटर धावणे</td>
        <td>२०</td>
    </tr>
    <tr>
        <td>१०० मीटर धावणे</td>
        <td>१५</td>
    </tr>
    <tr>
        <td>गोळाफेक</td>
        <td>१५</td>
    </tr>
    <tr>
        <td><strong>एकूण</strong></td>
        <td><strong>५०</strong></td>
    </tr>
</table>

<h3>तृतीय पंथी उमेदवारांसाठी:</h3>
<table border="1">
    <tr>
        <th>स्वतःची लिंग ओळख</th>
        <th>पुरुष/तृतीय पंथी</th>
        <th>महिला</th>
    </tr>
    <tr>
        <td>१६०० मीटर धावणे</td>
        <td>२०</td>
        <td>८०० मीटर धावणे - २०</td>
    </tr>
    <tr>
        <td>१०० मीटर धावणे</td>
        <td>१५</td>
        <td>१५</td>
    </tr>
    <tr>
        <td>गोळाफेक</td>
        <td>१५</td>
        <td>१५</td>
    </tr>
    <tr>
        <td><strong>एकूण</strong></td>
        <td><strong>५०</strong></td>
        <td><strong>५०</strong></td>
    </tr>
</table>

<hr style="border: 1px solid #2563eb; margin: 20px 0;">


<h2>✅ पोलीस शिपाई चालक:</h2>

<h2> सेवा प्रवेश नियम:</h2>

<ul>
    <li>महाराष्ट्र राज्य पोलीस दलातील पोलीस शिपाई चालक या पदासाठी खालील सेवाप्रवेश नियम लागू राहतील.</li>
</ul>

<table border="1">
    <tr>
        <th>सेवा प्रवेश नियम</th>
    </tr>
    <tr>
        <td>
            <ul>
                <li>महाराष्ट्र सहायक पोलीस उपनिरीक्षक चालक, पोलीस हवालदार चालक, पोलीस नाईक चालक व पोलीस शिपाई चालक (सेवा प्रवेश) नियम, २०१९ व त्यामध्ये वेळोवेळी करण्यात आलेल्या सुधारणांसह</li>
                <li>वर नमूद सेवाप्रवेश नियम सुधारणांसह <a href="https://www.policerecruitment2024.mahait.org">www.policerecruitment2024.mahait.org</a> व <a href="https://www.mahapolice.gov.in">www.mahapolice.gov.in</a> या संकेत स्थळावर उपलब्ध आहेत.</li>
            </ul>
        </td>
    </tr>
</table>


<h2> वयोमर्यादा:</h2>

<p>अर्ज सादर करण्याचा अंतिम दिनांक म्हणजेच दिनांक dd/mm/yyyy रोजी किमान व कमाल वयोमर्यादा खालील प्रमाणे राहील:</p>

<h3>(i) मुख्य प्रवर्गानुसार वयोमर्यादा</h3>

<table border="1">
    <tr>
        <th>अ. क्र.</th>
        <th>प्रवर्ग</th>
        <th>किमान वयोमर्यादा</th>
        <th>कमाल वयोमर्यादा</th>
    </tr>
    <tr>
        <td>1</td>
        <td>खुला</td>
        <td>19 वर्षे</td>
        <td>28 वर्षे</td>
    </tr>
    <tr>
        <td>2</td>
        <td>मागास प्रवर्ग (अ. जाती, अ. जमाती, वि.जा.-अ, भ.ज.-ब, भ.ज.-क, भ.ज.-ड, वि.मा.प्र., इ.मा.व., एस.ई.बी.सी., इ.डब्ल्यू.एस.)</td>
        <td>19 वर्षे</td>
        <td>33 वर्षे</td>
    </tr>
    <tr>
        <td>3</td>
        <td>प्रकल्पग्रस्त उमेदवार</td>
        <td>19 वर्षे</td>
        <td>45 वर्षे</td>
    </tr>
    <tr>
        <td>4</td>
        <td>भूकंपग्रस्त उमेदवार</td>
        <td>19 वर्षे</td>
        <td>45 वर्षे</td>
    </tr>
    <tr>
        <td>5</td>
        <td>माजी सैनिक उमेदवार</td>
        <td>19 वर्षे</td>
        <td>उमेदवाराच्या सशस्त्र दलात झालेल्या सेवेइतका कालावधी अधिक 3 वर्षे</td>
    </tr>
    <tr>
        <td>6</td>
        <td>अंशकालीन पदवीधर उमेदवार</td>
        <td>19 वर्षे</td>
        <td>55 वर्षे</td>
    </tr>
    <tr>
        <td>7</td>
        <td>अनाथ</td>
        <td>19 वर्षे</td>
        <td>33 वर्षे</td>
    </tr>
</table>

<h3>(ii) समांतर आरक्षणांतर्गत येणारे उमेदवार</h3>

<table border="1">
    <tr>
        <th>अ. क्र.</th>
        <th>प्रवर्ग</th>
        <th>किमान वयोमर्यादा</th>
        <th>कमाल वयोमर्यादा</th>
    </tr>
    <tr>
        <td>1</td>
        <td>महिला उमेदवार (खुला वर्ग)</td>
        <td>19 वर्षे</td>
        <td>28 वर्षे</td>
    </tr>
    <tr>
        <td>2</td>
        <td>महिला उमेदवार (मागास प्रवर्ग)</td>
        <td>19 वर्षे</td>
        <td>33 वर्षे</td>
    </tr>
    <tr>
        <td>3</td>
        <td>खेळाडू उमेदवार</td>
        <td>19 वर्षे</td>
        <td>28 वर्षे</td>
    </tr>
    <tr>
        <td>4</td>
        <td>पोलीस पाल्य</td>
        <td>19 वर्षे</td>
        <td>खुला - 28+5 वर्षे<br>मागास - 33+5 वर्षे</td>
    </tr>
    <tr>
        <td>5</td>
        <td>गृहरक्षक</td>
        <td>19 वर्षे</td>
        <td>खुला - 28 वर्षे<br>मागास - 33 वर्षे</td>
    </tr>
    <tr>
        <td>6</td>
        <td>माजी सैनिकावर अवलंबून असलेले (मुलगा, मुलगी, पत्नी)</td>
        <td>19 वर्षे</td>
        <td>खुला - 28+3 वर्षे<br>मागास - 33+3 वर्षे</td>
    </tr>
</table>


<h2> शैक्षणिक अर्हता:</h2>

<h3>(i) शैक्षणिक पात्रता</h3>
<p>महाराष्ट्र माध्यामिक व उच्च माध्यमिक शिक्षण मंडळे अधिनियम, १९६५ (सन १९६५ चा महा.अधिनियम ४१) अन्वये प्रस्थापित केलेल्या विभागीय मंडळाकडून घेण्यात येणारी उच्च माध्यमिक शाळा प्रमाणपत्र परीक्षा (इयत्ता १२ वी) किंवा शासनाने या परीक्षेस समकक्ष म्हणून घोषित केलेली परीक्षा उत्तीर्ण असणे आवश्यक आहे.</p>

<ul>
    <li>राष्ट्रीय मुक्त विद्यालय, नवी दिल्ली यांची सिनीयर सेकंडरी स्कूल परीक्षा तसेच सीबीएसई बारावी परीक्षा या दोन्ही परीक्षा ह्या राज्य मंडळातर्फे घेण्यात येणाऱ्या १२ वी इयत्तेच्या परीक्षेशी समकक्ष आहेत.</li>
    <li>१२ वी इयत्तेच्या परीक्षेशी समकक्षबाबतचे गृह विभाग शासन पत्र क्र. आरसीटी - ०३०५ / सीआर - २६६ / पोल - ५अ, दिनांक २९/०६/२००५ व त्यानंतर वेळोवेळी निर्गमित केलेल्या शासन निर्णयानुसार.</li>
</ul>

<h3>(ii) समकक्षतेबाबत</h3>

<table border="1">
    <tr>
        <th>अ. क्र.</th>
        <th>समकक्ष शैक्षणिक पात्रता</th>
        <th>संबंधित शासन निर्णय</th>
    </tr>
    <tr>
        <td>a)</td>
        <td>यशवंतराव चव्हाण मुक्त विद्यापीठ नाशिक (प्रथम वर्ष उत्तीर्ण वा पदवीधारक उमेदवार)</td>
        <td>शासन निर्णय क्र. साप्रवि आरजीडी १५/११/प्र.क्र.८९/१३, दिनांक २०/५/२०११</td>
    </tr>
    <tr>
        <td>b)</td>
        <td>विद्यापीठे, मानीव विद्यापीठे, ऐच्छिक मान्य शैक्षणिक संस्था यांनी प्रदान केलेल्या पदवीका समकक्षता</td>
        <td>क्र. समक १०९९/प्र.क्र.१३४/मशि-३, दिनांक १४/६/१९९९ व २८/२/२००७</td>
    </tr>
    <tr>
        <td>c)</td>
        <td>व्यवसाय शिक्षण परीक्षा मंडळाने उच्च शिक्षणासाठी २ स्तराची समकक्षता निश्चित केलेले अभ्यासक्रम</td>
        <td>क्र. व्हीओसी २०१२/५९१/प्र.क्र. २४५ (अ) / व्यशि-४, दिनांक २८/९/२०१२</td>
    </tr>
    <tr>
        <td>d)</td>
        <td>डिप्लोमा इन मेकॅनिकल इंजिनियरिंग</td>
        <td>क्र. एसएससी २००५ / (१४९)०५ - उमाशि-२, दिनांक २०/६/२००५</td>
    </tr>
</table>

<h3>(iii) माजी सैनिक</h3>
<ul>
    <li>१५ वर्षे सैनिकी सेवा पूर्ण असणाऱ्यांच्या बाबतीत - नागरी परीक्षा इयत्ता १० वी उत्तीर्ण किंवा IASC प्रमाणपत्र आवश्यक.</li>
    <li>१५ वर्षे सैनिकी सेवा पूर्ण नसलेल्यांच्या बाबतीत - इयत्ता १२ वी परीक्षा उत्तीर्ण आवश्यक.</li>
</ul>

<h3>(iv) नक्षलग्रस्त भागासाठी विशेष तरतूद</h3>
<p>शासनाने घोषित केलेल्या नक्षलग्रस्त भागातील अनुसूचित जमातीचे उमेदवार किंवा नक्षलवाद्यांच्या हल्ल्यात अथवा नक्षलविरोधी कारवाईत मृत अथवा गंभीर जखमी झालेल्या पोलीस कर्मचारी यांच्या मुलांसाठी:</p>
<ul>
    <li>इयत्ता ७ वी परीक्षा उत्तीर्ण झालेले उमेदवार भरतीस पात्र असतील.</li>
</ul>

<h2>6.6) शारीरिक पात्रता:</h2>

<table border="1">
    <tr>
        <th>अ. क्र.</th>
        <th>शारीरिक पात्रता</th>
        <th>महिला उमेदवार</th>
        <th>पुरुष उमेदवार</th>
        <th>तृतीय पंथी उमेदवार</th>
    </tr>
    <tr>
        <td>1</td>
        <td>उंची</td>
        <td>१५८ से.मी. पेक्षा कमी नसावी</td>
        <td>१६५ से.मी. पेक्षा कमी नसावी</td>
        <td>(अ) स्वतःची लिंग ओळख महिला / तृतीय पंथी अशी केलेल्या व्यक्तींसाठी - १५८ से.मी.<br>(ब) स्वतःची लिंग ओळख पुरुष अशी केलेल्या व्यक्तीसाठी - १६५ से.मी.</td>
    </tr>
    <tr>
        <td>2</td>
        <td>छाती</td>
        <td>लागू नाही</td>
        <td>न फुगवता ७९ से.मी. पेक्षा कमी नसावी व फुगवलेली छाती यातील फरक ५ से.मी. पेक्षा कमी नसावा.</td>
        <td>छातीच्या मोजमापाची आवश्यकता नाही.</td>
    </tr>
</table>

<h3>(ii) सूट</h3>
<ul>
    <li>शासनाने नक्षलग्रस्त भाग म्हणून अधिसूचित केलेल्या क्षेत्रातील अनुसूचित जमातीचे उमेदवार किंवा नक्षलवाद्यांच्या हल्ल्यात मृत/गंभीर जखमी पोलीस कर्मचारी यांच्या मुलांकरिता छातीच्या मोजमापाची आवश्यकता नाही.</li>
</ul>

<p><strong>टीप:</strong> महाराष्ट्र सहायक पोलीस उपनिरीक्षक चालक, पोलीस हवालदार चालक, पोलीस नाईक चालक व पोलीस शिपाई चालक (सेवा प्रवेश) नियम, २०१९ मधील नियम ६ च्या अनुषंगाने नक्षलग्रस्त भागातील उमेदवारांसाठी शारीरिक पात्रतेत शिथिलता देण्याचा अधिकार अपर पोलीस महासंचालक, प्रशिक्षण व खास पथके, महाराष्ट्र राज्य, मुंबई यांना राहील. असे उमेदवार भरती झालेल्या जिल्ह्याच्या बाहेर बदलीस पात्र असणार नाहीत.</p>


<h2> अन्य अर्हता:</h2>

<h3>(i) वाहन परवाना</h3>
<p>महाराष्ट्र सहायक पोलीस उपनिरीक्षक चालक, पोलीस हवालदार चालक, पोलीस नाईक चालक व पोलीस शिपाई चालक (सेवाप्रवेश) नियम, २०१९ मधील नियम ६ चा उपखंड (१) (क) नुसार:</p>
<ul>
    <li>पोलीस शिपाई चालक पदासाठी अर्ज सादर करतेवेळी उमेदवाराकडे <strong>हलके वाहन (LMV-TR)</strong> चालविण्याचा वैध परवाना असणे आवश्यक.</li>
    <li>सर्वोच्च न्यायालय, नवी दिल्ली यांच्या निर्देशानुसार <strong>हलके वाहन (LMV) किंवा हलके वाहन (LMV-TR)</strong> यापैकी कोणताही एक वैध परवाना असल्यास अर्ज सादर करता येईल.</li>
</ul>

<h3>(ii) जड वाहन परवाना</h3>
<p>पोलीस शिपाई चालक पदावर नियुक्ती झालेल्या उमेदवारांना नियुक्तीच्या दिनांकापासून पुढील <strong>५ वर्षांत जड वाहन (HGV) आणि जड वाहन प्रवासी (HPMV)</strong> चालविण्याचा परवाना प्राप्त करणे बंधनकारक राहील.</p>

<h3>(iii) मद्य व मादक द्रव्ये सेवनासंबंधी अर्हता</h3>
<p>उमेदवार कोणतेही <strong>मादक द्रव्ये किंवा मद्य सेवन करुन वाहन चालविण्यासंदर्भातील मोटार वाहन अधिनियम, १९८८ मधील अपराधासाठी दोषी</strong> सिद्ध झालेला नसावा.</p>

<h3>(iv) गडचिरोली जिल्ह्यासाठी विशेष अर्हता</h3>
<ul>
    <li>गडचिरोली जिल्ह्यातील उमेदवारांसाठी <strong>१०० गुणांची गोंडी आणि माडीया भाषेची लेखी चाचणी</strong> द्यावी लागेल.</li>
    <li>फक्त गडचिरोली जिल्ह्यातील उमेदवारांना गडचिरोली जिल्हा पोलीस भरतीमध्ये भाग घेता येईल.</li>
    <li>तहसिलदारांकडून मिळालेला <strong>वास्तव्याचा दाखला (Residential Certificate)</strong> आवश्यक राहील.</li>
    <li>या उमेदवारांना <strong>गडचिरोली जिल्ह्याच्या बाहेर बदलीस परवानगी मिळणार नाही.</strong></li>
</ul>

<h3>(v) भाषा अर्हता</h3>
<p>मराठी व हिंदी भाषेचे ज्ञान आवश्यक आहे. माध्यमिक शालांत परीक्षेत मराठी / हिंदी विषयाचा समावेश नसल्यास, निवड झालेल्या उमेदवारांना एतदर्थ मंडळाची <strong>मराठी / हिंदी भाषा परीक्षा</strong> उत्तीर्ण होणे आवश्यक.</p>

<h3>(vi) संगणक अर्हता</h3>
<ul>
    <li>सामान्य प्रशासन विभागाच्या १९ मार्च २००३ च्या शासन निर्णयानुसार <strong>नियुक्तीच्या दिनांकापासून २ वर्षांच्या आत संगणक अर्हता प्राप्त करणे</strong> आवश्यक, अन्यथा सेवा समाप्त केली जाईल.</li>
    <li>शासन निर्णय दिनांक ४ फेब्रुवारी २०१३ नुसार माहिती तंत्रज्ञान संबंधित ८६ प्रमाणपत्रांपैकी कोणतेही एक प्रमाणपत्र असणे आवश्यक.</li>
</ul>

<h3>(vii) प्रमाणपत्रे</h3>
<p>शैक्षणिक अर्हता व इतर सर्व अर्हतेसंबंधी <strong>सर्व प्रमाणपत्रे कागदपत्र / प्रमाणपत्र पडताळणीच्या वेळी</strong> सादर करणे अनिवार्य.</p>

<h3>(viii) नागरी सेवा नियम</h3>
<ul>
    <li>नियुक्तीनंतर महाराष्ट्र नागरी सेवा (सेवेच्या सर्वसाधारण शर्ती) नियम १९८१ व इतर संबंधित नियमांचे पालन अनिवार्य.</li>
    <li>महाराष्ट्र पोलीस अधिनियम १९५१ व महाराष्ट्र पोलीस नियमावली, १९९९ मधील तरतुदी उमेदवारांसाठी बंधनकारक राहतील.</li>
</ul>

<h3>(ix) नवीन परिभाषीत अंशदान निवृत्ती वेतन योजना (NPS)</h3>
<ul>
    <li>१ नोव्हेंबर २००५ रोजी किंवा त्यानंतर निवड झालेल्या उमेदवारांना <strong>नवीन परिभाषीत अंशदान निवृत्ती वेतन योजना (DCPS)</strong> लागू होईल.</li>
    <li>महाराष्ट्र नागरी सेवा (निवृत्ती वेतनाचे अंशराशिकरण) नियम १९८४ व सर्वसाधारण भविष्य निर्वाह निधी योजना लागू राहणार नाही.</li>
    <li>शासन निर्णय दिनांक २१ ऑगस्ट २०१४ नुसार नवीन परिभाषीत अंशदान निवृत्ती वेतन योजना <strong>"राष्ट्रीय निवृत्ती वेतन योजना (NPS)"</strong> या नावाने लागू राहील.</li>
</ul>

<h3>(x) लहान कुटुंब प्रमाणपत्र</h3>
<ul>
    <li>गट अ, ब, क आणि ड मधील सेवा प्रवेशासाठी <strong>लहान कुटुंबाचे प्रतिज्ञापत्र</strong> आवश्यक आहे.</li>
    <li>सामान्य प्रशासन विभागाच्या २८ मार्च २००५ व १ जुलै २००५ च्या अधिसूचनेनुसार नमुना (अ) आवश्यक अर्हता म्हणून विहित आहे.</li>
</ul>


<h2>शारीरिक चाचणी:</h2>

<h3>(i) नियम व अटी</h3>
<p>महाराष्ट्र सहायक पोलीस उपनिरीक्षक चालक, पोलीस हवालदार चालक, पोलीस नाईक चालक व पोलीस शिपाई चालक (सेवाप्रवेश) नियम, २०१९ मधील तरतुदींनुसार आणि शासनाने वेळोवेळी सुधारीत केलेल्या तरतुदींनुसार पोलीस शिपाई चालक पदाच्या भरती प्रक्रियेत उमेदवारांची <strong>५० गुणांची शारीरिक चाचणी</strong> घेतली जाईल.</p>

<h3>(ii) पुरुष व महिला उमेदवारांसाठी शारीरिक चाचणी</h3>

<table border="1">
    <tr>
        <th>चाचणी प्रकार</th>
        <th>पुरुष उमेदवार (गुण)</th>
        <th>महिला उमेदवार (गुण)</th>
    </tr>
    <tr>
        <td>१६०० मीटर धावणे</td>
        <td>३०</td>
        <td>८०० मीटर धावणे - ३०</td>
    </tr>
    <tr>
        <td>गोळाफेक</td>
        <td>२०</td>
        <td>२०</td>
    </tr>
    <tr>
        <th>एकूण</th>
        <th>५०</th>
        <th>५०</th>
    </tr>
</table>

<h3>(iii) तृतीय पंथी उमेदवारांसाठी शारीरिक चाचणी</h3>

<table border="1">
    <tr>
        <th>लिंग ओळख</th>
        <th>पुरुष तृतीय पंथी (गुण)</th>
        <th>महिला तृतीय पंथी / पुरुष तृतीय पंथी (गुण)</th>
    </tr>
    <tr>
        <td>१६०० मीटर धावणे</td>
        <td>३०</td>
        <td>८०० मीटर धावणे - ३०</td>
    </tr>
    <tr>
        <td>गोळाफेक</td>
        <td>२०</td>
        <td>२०</td>
    </tr>
    <tr>
        <th>एकूण</th>
        <th>५०</th>
        <th>५०</th>
    </tr>
</table>

<h3>(iv) पोलीस शिपाई चालक पदासाठी कौशल्य चाचणी</h3>

<h4>(a) पात्रता:</h4>
<ul>
    <li>शारीरिक चाचणीत <strong>किमान ५०% गुण</strong> मिळविलेल्या उमेदवारांना लेखी परीक्षेसाठी पात्र ठरवले जाईल.</li>
    <li>शारीरिक चाचणी व कौशल्य चाचणी एकत्रित <strong>किमान ४०% गुण</strong> मिळविणे आवश्यक.</li>
</ul>

<h4>(b) कौशल्य चाचणीतील घटक:</h4>

<table border="1">
    <tr>
        <th>चाचणी प्रकार</th>
        <th>गुण</th>
    </tr>
    <tr>
        <td>हलके मोटार वाहन चालविण्याची चाचणी</td>
        <td>२५</td>
    </tr>
    <tr>
        <td>जीप प्रकारातील वाहन चालविण्याची चाचणी</td>
        <td>२५</td>
    </tr>
</table>

<h4>(c) विशेष सूचना:</h4>
<ul>
    <li>कौशल्य चाचणी ही <strong>केवळ अर्हता चाचणी</strong> असून त्यातील गुण गुणवत्ता यादीमध्ये समाविष्ट केले जाणार नाहीत.</li>
    <li>वाहन चालविण्यातील कौशल्य चाचणीचे निकष <strong>महासंचालकांकडून वेळोवेळी ठरवले जातील.</strong></li>
    <li>कौशल्य चाचणी घेताना <strong>प्रादेशिक परिवहन प्राधिकरणाच्या अधिकाऱ्यांचा समावेश</strong> असलेली समिती असणार.</li>
</ul>


<h2>6.9) लेखी चाचणी</h2>

<h3>(i) पात्रता</h3>
<p>शारीरिक चाचणीमध्ये किमान ५०% गुण मिळविणारे उमेदवार, संबंधित प्रवर्गातील जाहिरात दिलेल्या रिक्त पदांच्या १:१० या प्रमाणात १०० गुणांच्या लेखी चाचणीसाठी बोलावले जातील.</p>

<h3>(ii) कौशल्य चाचणी</h3>
<ul>
  <li>(अ) हलके मोटार वाहन चालविण्याची चाचणी - <strong>२५ गुण</strong></li>
  <li>(ब) जीप प्रकारातील वाहन चालविण्याची चाचणी - <strong>२५ गुण</strong></li>
</ul>
<p>सदर दोन्ही चाचण्यांमध्ये एकत्रित किमान <strong>४०% गुण</strong> मिळवणे आवश्यक आहे.</p>

<h3>(iii) कौशल्य चाचणीचे महत्त्व</h3>
<p>ही केवळ एक <strong>अर्हता चाचणी</strong> असून यात मिळालेले गुण गुणवत्ता यादीत समाविष्ट केले जाणार नाहीत.</p>

<h3>(iv) लेखी चाचणीबाबत महत्वाचे मुद्दे</h3>
<ul>
  <li>कौशल्य चाचणीत उत्तीर्ण झालेल्या उमेदवारांना लेखी परीक्षेसाठी बोलावले जाईल.</li>
  <li>लेखी परीक्षा <strong>९० मिनिटांची</strong> असेल आणि <strong>मराठी भाषेत</strong> घेतली जाईल.</li>
  <li>सर्व प्रश्न <strong>बहुपर्यायी स्वरुपाचे (MCQ)</strong> असतील.</li>
  <li>मैदानी चाचणी पार पडल्यानंतर लेखी परीक्षेची तारीख निश्चित केली जाईल.</li>
</ul>

<h3>(v) लेखी परीक्षेचे आयोजन</h3>
<p>संपूर्ण राज्यभर सर्व पोलीस घटकांमध्ये एका पदाकरिता <strong>एकाच दिवशी</strong> लेखी परीक्षा घेतली जाईल. अर्जदारांनी ऑनलाईन अर्ज भरताना ही बाब लक्षात घ्यावी.</p>

<h3>(vi) परीक्षेचा अभ्यासक्रम</h3>
<ul>
  <li><strong>अंकगणित</strong></li>
  <li><strong>सामान्य ज्ञान व चालू घडामोडी</strong></li>
  <li><strong>बुद्धिमत्ता चाचणी</strong></li>
  <li><strong>मराठी व्याकरण</strong></li>
  <li><strong>मोटार वाहन चालविणे / वाहतुकीबाबतचे नियम</strong></li>
</ul>

<h3>(vii) अंतिम गुणवत्ता यादी</h3>
<p>शारीरिक चाचणी आणि लेखी चाचणीमध्ये मिळालेल्या <strong>एकत्रित गुणांच्या आधारे</strong> गुणवत्ता यादी तयार केली जाईल. त्यानंतर जाहिरातीत नमूद केलेल्या रिक्त पदांनुसार अंतिम निवड यादी / प्रतीक्षा यादी शासनाने निर्गमित केलेल्या आदेशानुसार प्रसिद्ध केली जाईल.</p>
<p><em>(उदा. गृह विभाग शासन निर्णय क्रमांक पोलीस - १८१९ / प्र.क्र ३१६ / पोल - ५ अ, दिनांक १० / १२ / २०२० नुसार)</em></p>

<hr style="border: 1px solid #2563eb; margin: 20px 0;">


<h2>✅ पोलीस शिपाई बॅण्डस्मन:</h2>


<h2>वयोमर्यादा:</h2>

<p>अर्ज सादर करण्याचा अंतिम दिनांक म्हणजेच दिनांक dd/mm/yyyy रोजी किमान व कमाल वयोमर्यादा खालील प्रमाणे राहील:-</p>

<h3>i) सामान्य उमेदवारांसाठी वयोमर्यादा</h3>
<table border="1">
    <tr>
        <th>अ.क्र.</th>
        <th>प्रवर्ग</th>
        <th>किमान वयोमर्यादा</th>
        <th>कमाल वयोमर्यादा</th>
    </tr>
    <tr>
        <td>1</td>
        <td>खुला</td>
        <td>१८ वर्षे</td>
        <td>२८ वर्षे</td>
    </tr>
    <tr>
        <td>2</td>
        <td>मागास प्रवर्ग (अ.जाती, अ.जमाती, वि.जा.-अ, भ.ज.-ब, भ.ज.-क, भ.ज.-ड, वि.मा.प्र., इ.मा.व., एस.ई.बी.सी., इ.डब्ल्यू.एस.)</td>
        <td>१८ वर्षे</td>
        <td>३३ वर्षे</td>
    </tr>
    <tr>
        <td>3</td>
        <td>प्रकल्पग्रस्त उमेदवार</td>
        <td>१८ वर्षे</td>
        <td>४५ वर्षे</td>
    </tr>
    <tr>
        <td>4</td>
        <td>भूकंपग्रस्त उमेदवार</td>
        <td>१८ वर्षे</td>
        <td>४५ वर्षे</td>
    </tr>
    <tr>
        <td>5</td>
        <td>माजी सैनिक उमेदवार</td>
        <td>१८ वर्षे</td>
        <td>उमेदवाराच्या सशस्त्र दलात झालेल्या सेवेइतका कालावधी अधिक ३ वर्षे इतकी राहील.</td>
    </tr>
    <tr>
        <td>6</td>
        <td>पदवीधर / पदविकाधारक अंशकालीन उमेदवार</td>
        <td>१८ वर्षे</td>
        <td>५५ वर्षे</td>
    </tr>
    <tr>
        <td>7</td>
        <td>अनाथ</td>
        <td>१८ वर्षे</td>
        <td>३३ वर्षे</td>
    </tr>
</table>

<h3>ii) समांतर आरक्षणांतर्गत येणारे उमेदवार</h3>
<table border="1">
    <tr>
        <th>अ.क्र.</th>
        <th>प्रवर्ग</th>
        <th>किमान वयोमर्यादा</th>
        <th>कमाल वयोमर्यादा</th>
    </tr>
    <tr>
        <td>1</td>
        <td>महिला उमेदवार (खुला वर्ग)</td>
        <td>१८ वर्षे</td>
        <td>२८ वर्षे</td>
    </tr>
    <tr>
        <td>2</td>
        <td>महिला उमेदवार (मागास प्रवर्ग)</td>
        <td>१८ वर्षे</td>
        <td>३३ वर्षे</td>
    </tr>
    <tr>
        <td>3</td>
        <td>खेळाडू उमेदवार</td>
        <td>१८ वर्षे</td>
        <td>२८ वर्षे</td>
    </tr>
    <tr>
        <td>4</td>
        <td>पोलीस पाल्य</td>
        <td>१८ वर्षे</td>
        <td>२८+५ वर्षे</td>
    </tr>
    <tr>
        <td>5</td>
        <td>गृहरक्षक</td>
        <td>१८ वर्षे</td>
        <td>३३ वर्षे</td>
    </tr>
    <tr>
        <td>6</td>
        <td>माजी सैनिकावर अवलंबून असलेले (मुलगा, मुलगी, पत्नी) उमेदवार</td>
        <td>१८ वर्षे</td>
        <td>२८+३ वर्षे</td>
    </tr>
</table>


 <h2>शैक्षणीक अर्हताः</h2>

    <ul>
        <li>महाराष्ट्र माध्यामिक व उच्च माध्यमिक शिक्षण मंडळे अधिनियम, १९६५ (सन १९६५ चा महा. अधिनियम ४१) अन्वये प्रस्थापित केलेल्या विभागीय मंडळाकडून घेण्यात येणारी माध्यमिक शाळा प्रमाणपत्र (इयत्ता १० वी) परीक्षा उत्तीर्ण होणे आवश्यक आहे.</li>
    </ul>


    <h2>शारीरिक पात्रता</h2>

    <table border="1">
        <tr>
            <th>उमेदवार</th>
            <th>उंची</th>
            <th>छाती</th>
        </tr>
        <tr>
            <td>महिला उमेदवार</td>
            <td>१५५ से.मी. पेक्षा कमी नसावी</td>
            <td>-</td>
        </tr>
        <tr>
            <td>पुरुष उमेदवार</td>
            <td>१६५ से.मी. पेक्षा कमी नसावी</td>
            <td>न फुगवता ७९ से.मी. पेक्षा कमी नसावी व फुगवलेली छाती व न फुगवलेली छाती यामध्ये ५ से.मी. चा फरक असावा</td>
        </tr>
        <tr>
            <td>तृतीय पंथी (ट्रान्सजेंडर)</td>
            <td>
                (अ) लिंग ओळख महिला / तृतीय पंथी - १५५ से.मी. पेक्षा कमी नसावी<br>
                (ब) लिंग ओळख पुरुष - १६५ से.मी. पेक्षा कमी नसावी
            </td>
            <td>-</td>
        </tr>
    </table>

    <h3>सूट :</h3>
    <ul>
        <li><strong>नक्षलग्रस्त भागातील उमेदवार:</strong>
            <ul>
                <li>उंची: महिला व पुरुष उमेदवारांसाठी ४.० से.मी. ची सूट</li>
                <li>छाती: छातीच्या मोजमापाची आवश्यकता नाही</li>
            </ul>
        </li>
        <li><strong>खेळाडू उमेदवार:</strong> उंचीच्या अटीमध्ये २.५ से.मी. सूट</li>
        <li><strong>पोलीस दलातील कर्मचाऱ्यांच्या कुटुंबियांसाठी:</strong>
            <ul>
                <li>उंची: पुरुष व महिला उमेदवारांसाठी २.५ से.मी. सूट</li>
                <li>छाती: पुरुष उमेदवारांसाठी २ से.मी. न फुगवता व १.५ से.मी. फुगवून</li>
            </ul>
        </li>
        <li><strong>बॅण्डस्मन पदाच्या उमेदवारासाठी:</strong>
            <ul>
                <li>उंची: पुरुष व महिला उमेदवारांसाठी २.५ से.मी. सूट</li>
                <li>छाती: पुरुष उमेदवारांसाठी २ से.मी. न फुगवता व १.५ से.मी. फुगवून</li>
            </ul>
        </li>
    </ul>

    <h3>टीप:</h3>
    <p>महाराष्ट्र पोलीस शिपाई (सेवाप्रवेश) नियम, २०११ मधील नियम ३ नुसार, वरीलप्रमाणे शारिरीक पात्रता शिथिल करण्याचे अधिकार अपर पोलीस महासंचालक, प्रशिक्षण व खास पथके, महाराष्ट्र राज्य, मुंबई यांना राहतील.</p>

      <h2>अन्य अर्हताः</h2>

    <p>महाराष्ट्र पोलीस शिपाई (सेवाप्रवेश) नियम २०११ व त्यामध्ये वेळोवेळी सुधारणा केल्याबाबतचे शासन आदेशान्वये बॅण्डस्मन प्रात्यक्षिक चाचणी खालीलप्रमाणे घेण्यात येईल. सदरहू परीक्षा अर्हता परीक्षा म्हणून ग्राह्य धरण्यात येईल.</p>

    <h3>महाराष्ट्र पोलीस भरती - 2023 उमेदवारांकरीता सूचना</h3>

    <ul>
        <li><strong>बँड पथकातील पदासाठी अर्ज करणाऱ्या उमेदवारांना</strong> बँड पथकातील वाद्यांची माहिती असणे व वाद्य वाजविण्याचा अनुभव असणे आवश्यक राहील.</li>
        <li><strong>पोलीस बँड पथकातील उमेदवार निवडीसाठी</strong> गठीत करावयाच्या समितीत शक्यतो भारतीय सैन्य दलाच्या बँड पथकातील अधिकाऱ्यांचा समावेश करण्यात यावा.</li>
        <li><strong>पोलीस बँड पथकासाठी निवड करण्यात आलेल्या उमेदवारांना</strong> पोलीस मुख्यालयातील अन्य कर्तव्यही बजावणे आवश्यक राहिल.</li>
        <li><strong>पोलीस बँड पथकासाठी निवड करण्यात आलेले उमेदवार</strong> कार्यकारी शाखेत बदलीसाठी पात्र असणार नाहीत. मात्र हे उमेदवार जिल्ह्याच्या बाहेर फक्त इतर पोलीस घटकातील बँड पथकात बदलीस पात्र ठरतील.</li>
    </ul>



    <h2>शारीरिक चाचणी</h2>

    <p>महाराष्ट्र पोलीस शिपाई (सेवा प्रवेश) नियम, २०११ व त्यामध्ये शासनाने वेळोवेळी सुधारीत केलेल्या तरतुदींनुसार पोलीस शिपाई पदाच्या भरती प्रक्रियेत उमेदवारांची खालीलप्रमाणे ५० गुणांची शारीरिक चाचणी घेतली जाईल:</p>

    <h3>पुरुष व महिला उमेदवारांसाठी शारीरिक चाचणी</h3>

    <table border="1">
        <tr>
            <th>क्र.</th>
            <th>चाचणी प्रकार</th>
            <th>पुरुष उमेदवार (गुण)</th>
            <th>महिला उमेदवार (गुण)</th>
        </tr>
        <tr>
            <td>1</td>
            <td>१६०० मीटर धावणे</td>
            <td>२०</td>
            <td>-</td>
        </tr>
        <tr>
            <td>2</td>
            <td>८०० मीटर धावणे</td>
            <td>-</td>
            <td>२०</td>
        </tr>
        <tr>
            <td>3</td>
            <td>१०० मीटर धावणे</td>
            <td>१५</td>
            <td>१५</td>
        </tr>
        <tr>
            <td>4</td>
            <td>गोळाफेक</td>
            <td>१५</td>
            <td>१५</td>
        </tr>
        <tr>
            <th colspan="2">एकूण</th>
            <th>५०</th>
            <th>५०</th>
        </tr>
    </table>

    <h3>पुरुष / तृतीय पंथी व महिला तृतीय पंथी उमेदवारांसाठी शारीरिक चाचणी</h3>

    <table border="1">
        <tr>
            <th>क्र.</th>
            <th>चाचणी प्रकार</th>
            <th>पुरुष / तृतीय पंथी उमेदवार (गुण)</th>
            <th>महिला तृतीय पंथी (स्वतःची लिंग ओळख महिला / पुरुष / तृतीय पंथी अशी केलेले उमेदवार) (गुण)</th>
        </tr>
        <tr>
            <td>1</td>
            <td>१६०० मीटर धावणे</td>
            <td>२०</td>
            <td>-</td>
        </tr>
        <tr>
            <td>2</td>
            <td>८०० मीटर धावणे</td>
            <td>-</td>
            <td>२०</td>
        </tr>
        <tr>
            <td>3</td>
            <td>१०० मीटर धावणे</td>
            <td>१५</td>
            <td>१५</td>
        </tr>
        <tr>
            <td>4</td>
            <td>गोळाफेक</td>
            <td>१५</td>
            <td>१५</td>
        </tr>
        <tr>
            <th colspan="2">एकूण</th>
            <th>५०</th>
            <th>५०</th>
        </tr>
    </table>


    <h2>लेखी चाचणी</h2>
<ul>
    <li>शारीरिक चाचणीमध्ये किमान ५० टक्के गुण मिळविणारे उमेदवार, संबंधित प्रवर्गामधील जाहिरात दिलेल्या रिक्त पदांच्या १:१० या प्रमाणात १०० गुणांच्या लेखी चाचणीसाठी उपस्थित राहण्याकरीता बोलाविण्यास पात्र असतील.</li>
    <li>उमेदवारांना लेखी परीक्षेमध्ये किमान ४० टक्के गुण मिळवणे अनिवार्य आहे. लेखी परीक्षेमध्ये ४० टक्के पेक्षा कमी गुण असलेले उमेदवार अपात्र समजण्यात येतील.</li>
    <li>लेखी चाचणीचा कालावधी ९० मिनिटांचा असेल व लेखी चाचणी मराठी भाषेत घेण्यात येईल. सर्व प्रश्न बहुपर्यायी स्वरुपाचे राहतील. मैदानी चाचणी पार पडल्यानंतर लेखी परीक्षा घेण्याबाबतचा दिनांक निश्चित करण्यात येईल.</li>
    <li>संपूर्ण राज्यभर सर्व पोलीस घटकात एका पदाकरीता एकाच दिवशी लेखी परिक्षा आयोजित करण्यात येणार आहे. अर्जदारांनी ऑनलाईन आवेदन अर्ज भरतेवेळी सदरची बाब विचारात घेवूनच आवेदन अर्ज पूर्ण विचारांती भरावा.</li>
    <li>लेखी परीक्षेमध्ये खालील विषयांचा समावेश असेल:
        <ul>
            <li>अंकगणित</li>
            <li>सामान्य ज्ञान व चालू घडामोडी</li>
            <li>बुध्दीमत्ता चाचणी</li>
            <li>मराठी व्याकरण</li>
        </ul>
    </li>
    <li>वरील पदाकरिता शारिरीक चाचणी व लेखी चाचणीमध्ये प्राप्त झालेल्या एकत्रीत गुणांच्या आधारे गुणवत्ता यादी तयार करण्यात येईल. त्यानंतर जाहिरातीमध्ये दर्शविलेल्या रिक्त पदांनुसार अंतिम निवड यादी / प्रतीक्षा यादी शासनाने वेळोवेळी निर्गमित केलेल्या आदेशानुसार तयार करुन प्रसिद्ध करण्यात येईल. (उदा. गृह विभाग शासन निर्णय क्रमांक पोलीस - १८१९ / प्र. क्र ३१६ / पोल - ५ अ, दिनांक १०.१२.२०२० नुसार)</li>
</ul>



<hr style="border: 1px solid #2563eb; margin: 20px 0;">


<h2>✅ सशस्त्र पोलीस शिपाई: </h2>

<h2>महाराष्ट्र राज्य राखीव पोलीस बल सशस्त्र पोलीस शिपाई (पुरुष) (सेवाप्रवेश) नियम</h2>
<ul>
    <li>महाराष्ट्र राज्य राखीव पोलीस बल सशस्त्र पोलीस शिपाई (पुरुष) (सेवाप्रवेश) नियम, २०१२ मधील व त्यामध्ये शासनाने वेळोवेळी केलेल्या सुधारीत तरतुदींनुसार गृह विभागाच्या अधिपत्याखालील राज्य राखीव पोलीस बलातील सशस्त्र पोलीस शिपाई (गट- क) पदे भरण्यासाठी केवळ ऑनलाईन पध्दतीने अर्ज मागविण्यात येत आहेत.</li>
</ul>

<h2>सेवा प्रवेश नियम</h2>
<table border="1">
    <tr>
        <th>क्रमांक</th>
        <th>सेवा प्रवेश नियम</th>
    </tr>
    <tr>
        <td>1</td>
        <td>महाराष्ट्र राज्य पोलीस दलातील सशस्त्र पोलीस शिपाई या पदासाठी खालील सेवाप्रवेश नियम लागू राहतील.</td>
    </tr>
    <tr>
        <td>2</td>
        <td>राज्य राखीव पोलीस बलातील सशस्त्र पोलीस शिपाई पदासाठी महाराष्ट्र राज्य राखीव पोलीस बलातील सशस्त्र पोलीस शिपाई (पुरूष) (सेवा प्रवेश) नियम - २०१२ व त्यामध्ये वेळोवेळी करण्यात आलेल्या सुधारणांसह.</td>
    </tr>
</table>

<h2>अधिक माहितीसाठी संकेतस्थळे</h2>
<ul>
    <li><a href="https://www.policerecruitment2024.mahait.org" target="_blank">www.policerecruitment2024.mahait.org</a></li>
    <li><a href="https://www.mahapolice.gov.in" target="_blank">www.mahapolice.gov.in</a></li>
</ul>


<h2>वयोमर्यादा</h2>
<p>अर्ज सादर करण्याचा अंतिम दिनांक म्हणजेच दिनांक ३१.०३.२०२४ रोजी किमान व कमाल वयोमर्यादा खालील प्रमाणे राहील:</p>

<h3>(i) सामान्य प्रवर्गानुसार वयोमर्यादा</h3>
<table border="1">
    <tr>
        <th>अ.क्र.</th>
        <th>प्रवर्ग</th>
        <th>किमान वयोमर्यादा</th>
        <th>कमाल वयोमर्यादा</th>
    </tr>
    <tr>
        <td>1</td>
        <td>खुला</td>
        <td>१८ वर्षे</td>
        <td>२५ वर्षे</td>
    </tr>
    <tr>
        <td>2</td>
        <td>मागास प्रवर्ग (अ.जाती, अ.जमाती, वि.जा.- अ, भ.ज.-ब, भ.ज.-क, भ.ज.-ड, वि.मा.प्र., इ.मा.व., एस.ई.बी.सी., इ.डब्ल्यू.एस.)</td>
        <td>१८ वर्षे</td>
        <td>३० वर्षे</td>
    </tr>
    <tr>
        <td>3</td>
        <td>प्रकल्पग्रस्त उमेदवार</td>
        <td>१८ वर्षे</td>
        <td>४५ वर्षे</td>
    </tr>
    <tr>
        <td>4</td>
        <td>भूकंपग्रस्त उमेदवार</td>
        <td>१८ वर्षे</td>
        <td>४५ वर्षे</td>
    </tr>
    <tr>
        <td>5</td>
        <td>माजी सैनिक उमेदवार</td>
        <td>१८ वर्षे</td>
        <td>उमेदवाराच्या सशस्त्र दलात झालेल्या सेवेइतका कालावधी अधिक ३ वर्षे</td>
    </tr>
    <tr>
        <td>6</td>
        <td>अंशकालीन पदवीधर उमेदवार</td>
        <td>१८ वर्षे</td>
        <td>५५ वर्षे</td>
    </tr>
    <tr>
        <td>7</td>
        <td>अनाथ</td>
        <td>१८ वर्षे</td>
        <td>३० वर्षे</td>
    </tr>
</table>

<h3>(ii) समांतर आरक्षणांतर्गत येणारे उमेदवार</h3>
<table border="1">
    <tr>
        <th>अ.क्र.</th>
        <th>प्रवर्ग</th>
        <th>किमान वयोमर्यादा</th>
        <th>कमाल वयोमर्यादा</th>
    </tr>
    <tr>
        <td>1</td>
        <td>खेळाडू उमेदवार</td>
        <td>१८ वर्षे</td>
        <td>खुला वर्ग: २५+५ वर्षे, मागास प्रवर्ग: ३०+५ वर्षे</td>
    </tr>
    <tr>
        <td>2</td>
        <td>पोलीस पाल्य</td>
        <td>१८ वर्षे</td>
        <td>२५ वर्षे</td>
    </tr>
    <tr>
        <td>3</td>
        <td>गृहरक्षक</td>
        <td>१८ वर्षे</td>
        <td>३० वर्षे</td>
    </tr>
    <tr>
        <td>4</td>
        <td>माजी सैनिकावर अवलंबून असलेले (मुलगा) उमेदवार</td>
        <td>१८ वर्षे</td>
        <td>खुला वर्ग: २५+३ वर्षे, मागास प्रवर्ग: ३०+३ वर्षे</td>
    </tr>
</table>


<h2>शैक्षणिक अर्हता</h2>

<h3>(i) आवश्यक शैक्षणिक पात्रता</h3>
<ul>
    <li>महाराष्ट्र माध्यामिक व उच्च माध्यमिक शिक्षण मंडळे अधिनियम, १९६५ नुसार प्रस्थापित विभागीय मंडळाकडून घेण्यात येणारी <strong>उच्च माध्यमिक शाळा प्रमाणपत्र परीक्षा (इयत्ता १२ वी)</strong> किंवा शासनाने समकक्ष घोषित केलेली परीक्षा उत्तीर्ण असणे आवश्यक आहे.</li>
    <li>राष्ट्रीय मुक्त विद्यालय, नवी दिल्ली यांची <strong>सिनीयर सेकंडरी स्कूल परीक्षा</strong> तसेच <strong>CBSE बारावी परीक्षा</strong> या दोन्ही परीक्षा राज्य मंडळाच्या १२ वी परीक्षेस समकक्ष आहेत.</li>
</ul>

<h3>(ii) समकक्ष पात्रता</h3>
<table border="1">
    <tr>
        <th>अ.क्र.</th>
        <th>समकक्ष पात्रता</th>
        <th>संबंधित शासन निर्णय</th>
    </tr>
    <tr>
        <td>a)</td>
        <td>यशवंतराव चव्हाण मुक्त विद्यापीठ नाशिक – विद्यापीठाची पूर्व परीक्षा उत्तीर्ण व प्रथम वर्ष उत्तीर्ण / पदवी धारण</td>
        <td>शासन निर्णय क्र. साप्रवि आरजीडी १५/११/प्र.क्र.८९/१३, दिनांक २०/५/२०११</td>
    </tr>
    <tr>
        <td>b)</td>
        <td>विद्यापीठे, मानीव विद्यापीठे, ऐच्छिक मान्य शैक्षणिक संस्था प्रदान केलेल्या पदवीका समकक्ष</td>
        <td>महाराष्ट्र शासन, उच्च व तंत्र शिक्षण विभाग, दिनांक १४/६/१९९९ व २८/२/२००७</td>
    </tr>
    <tr>
        <td>c)</td>
        <td>व्यवसाय शिक्षण परीक्षा मंडळाने ०२ वर्षे कालावधीच्या अभ्यासक्रमांना उच्च शिक्षणासाठी २ स्तर समकक्ष</td>
        <td>महाराष्ट्र शासन, उच्च व तंत्र शिक्षण विभाग, दिनांक २८/९/२०१२ व २७/९/२०१८</td>
    </tr>
    <tr>
        <td>d)</td>
        <td>डिप्लोमा इन मेकॅनिकल इंजिनियरिंग</td>
        <td>महाराष्ट्र शासन शालेय शिक्षण व क्रीडा विभाग, शासन निर्णय क्र. एसएससी २००५ / (१४९)०५ - उमाशि-२, दिनांक २०/६/२००५</td>
    </tr>
</table>

<h3>(iii) माजी सैनिकांसाठी पात्रता</h3>
<ul>
    <li><strong>१५ वर्षे सैनिकी सेवा पूर्ण असणाऱ्यांसाठी</strong>: नागरी परीक्षा इयत्ता १० वी उत्तीर्ण किंवा <strong>Indian Army Special Certificate of Education (IASC)</strong> प्रमाणपत्र आवश्यक.</li>
    <li><strong>१५ वर्षे सैनिकी सेवा पूर्ण नसलेल्यांसाठी</strong>: इयत्ता १२ वी परीक्षा उत्तीर्ण असल्याचे प्रमाणपत्र आवश्यक.</li>
</ul>

<h3>(iv) नक्षलग्रस्त भागासाठी विशेष तरतूद</h3>
<ul>
    <li>शासनाने घोषित केलेल्या <strong>नक्षलग्रस्त भागातील अनुसूचित जमातीचे रहिवासी उमेदवार</strong>.</li>
    <li><strong>नक्षलवाद्यांच्या हल्ल्यात किंवा नक्षलविरोधी कारवाईत मृत अथवा गंभीर जखमी झालेल्या</strong>:
        <ul>
            <li>पोलीस बातमीदार</li>
            <li>पोलीस पाटील</li>
            <li>पोलीस कर्मचारी यांची मुले</li>
        </ul>
    </li>
    <li>वरील सर्व उमेदवार <strong>इयत्ता ७ वी परीक्षा उत्तीर्ण</strong> असले तरी भरतीस पात्र ठरतील.</li>
</ul>


<h2>शारीरिक पात्रता</h2>

<h3>पुरुष उमेदवारांसाठी</h3>
<ul>
    <li><strong>उंची:</strong> १६८ सेमी पेक्षा कमी नसावी.</li>
    <li><strong>छाती:</strong> 
        <ul>
            <li>न फुगवता: ७९ सेमी पेक्षा कमी नसावी.</li>
            <li>फुगवलेली छाती व न फुगवलेली छाती यातील फरक: ५ सेमी पेक्षा कमी नसावा.</li>
        </ul>
    </li>
</ul>

<h3>शारीरिक पात्रतेस सूट</h3>
<h4>(i) नक्षलग्रस्त भागातील उमेदवारांसाठी</h4>
<ul>
    <li>शासनाने घोषित केलेल्या नक्षलग्रस्त भागातील अनुसूचित जमातीचे उमेदवार.</li>
    <li>नक्षलवाद्यांच्या हल्ल्यात मृत/गंभीर जखमी झालेल्या:
        <ul>
            <li>पोलीस बातमीदार</li>
            <li>पोलीस पाटील</li>
            <li>पोलीस कर्मचारी यांच्या मुलांसाठी</li>
        </ul>
    </li>
    <li><strong>सूट:</strong> उंची २.५ सेमी.</li>
</ul>

<h4>(ii) महाराष्ट्र राज्य राखीव पोलीस बल</h4>
<ul>
    <li>सशस्त्र पोलीस शिपाई (पुरुष) साठी नक्षलग्रस्त भागातील उमेदवारांस शारीरिक पात्रतेत सूट देण्याचे अधिकार अपर पोलीस महासंचालक, प्रशिक्षण व खास पथके, महाराष्ट्र राज्य, मुंबई यांना राहतील.</li>
</ul>

<h4>(iii) खेळाडू उमेदवारांसाठी</h4>
<ul>
    <li>सर्व आवश्यक पात्रता अटी पूर्ण करणाऱ्या खेळाडूंना उंचीच्या अटीत <strong>२.५ सेमी सूट</strong>.</li>
</ul>

<h4>(iv) राज्य राखीव पोलीस बलातील कर्मचारी कुटुंबीयांसाठी</h4>
<ul>
    <li>बेपत्ता कर्मचारी किंवा वैद्यकीय कारणास्तव निवृत्त झालेल्या कर्मचाऱ्याच्या एका पात्र नातेवाईकास सूट.</li>
    <li><strong>सूट:</strong> 
        <ul>
            <li>उंची: २.५ सेमी.</li>
            <li>छाती: २ सेमी न फुगवता, १.५ सेमी फुगवून.</li>
        </ul>
    </li>
</ul>

<h2>इतर अर्हता</h2>

<h3>(i) लहान कुटुंब प्रतिज्ञापन</h3>
<ul>
    <li>गट अ, ब, क आणि ड मधील सेवा प्रवेशासाठी लहान कुटुंबाचे प्रतिज्ञापन सादर करणे आवश्यक.</li>
</ul>

<h3>(ii) भाषेचे ज्ञान</h3>
<ul>
    <li>मराठी व हिंदी भाषेचे ज्ञान आवश्यक.</li>
    <li>माध्यमिक परीक्षेत मराठी/हिंदी विषय नसेल तर, नियुक्तीनंतर परीक्षा उत्तीर्ण होणे आवश्यक.</li>
</ul>

<h3>(iii) संगणक अर्हता</h3>
<ul>
    <li>नियुक्तीच्या २ वर्षांच्या आत संगणक अर्हता प्राप्त करणे आवश्यक.</li>
    <li>शासन निर्देशानुसार ८६ संगणक प्रमाणपत्रांपैकी कोणतेही एक प्रमाणपत्र आवश्यक.</li>
</ul>

<h3>(iv) प्रमाणपत्रे सादरीकरण</h3>
<ul>
    <li>सर्व प्रमाणपत्रे कागदपत्र पडताळणीच्या वेळी सादर करणे अनिवार्य.</li>
</ul>

<h3>(v) सेवा नियम</h3>
<ul>
    <li>महाराष्ट्र नागरी सेवा नियम १९८१ व संबंधित अधिनियम, शासन निर्णय, परिपत्रकांचे पालन आवश्यक.</li>
</ul>

<h3>(vi) निवृत्ती वेतन योजना</h3>
<ul>
    <li>१ नोव्हेंबर २००५ रोजी किंवा त्यानंतर निवड झालेल्या उमेदवारांसाठी नवीन <strong>राष्ट्रीय निवृत्तीवेतन योजना (NPS)</strong> लागू.</li>
</ul>

<h3>(vii) गडचिरोली जिल्ह्यातील विशेष अट</h3>
<ul>
    <li>राज्य राखीव पोलीस बल गट क्र. १३ विसोरा, ता. वडसा (देसाईगंज) जिल्हा गडचिरोली साठी अर्ज करणाऱ्या उमेदवारांसाठी:</li>
    <ul>
        <li>गोंडी व माडीया भाषेची लेखी परीक्षा (१०० गुण) द्यावी लागेल.</li>
        <li>१५ वर्षे आंतर गट बदली पात्र राहणार नाही.</li>
    </ul>
</ul>



 <h2>शारीरिक चाचणी</h2>
    <p>महाराष्ट्र राज्य राखीव पोलीस बलातील सशस्त्र पोलीस शिपाई (पुरुष) (सेवाप्रवेश) नियम, २०१२ व त्यामध्ये शासनाने वेळोवेळी सुधारीत केलेल्या तरतुदींनुसार सशस्त्र पोलीस शिपाई पदाच्या भरती प्रक्रियेत उमेदवारांची खालीलप्रमाणे १०० गुणांची शारीरिक चाचणी घेतली जाईल.</p>

    <table border="1">
        <tr>
            <th>क्रमांक</th>
            <th>शारीरिक चाचणी प्रकार</th>
            <th>गुण</th>
        </tr>
        <tr>
            <td>१</td>
            <td>५ कि.मी. धावणे</td>
            <td>५०</td>
        </tr>
        <tr>
            <td>२</td>
            <td>१०० मीटर धावणे</td>
            <td>२५</td>
        </tr>
        <tr>
            <td>३</td>
            <td>गोळाफेक</td>
            <td>२५</td>
        </tr>
    </table>


     <h2>लेखी चाचणी</h2>
    <p>शारीरिक चाचणीत किमान ५०% गुण मिळविणारे उमेदवार संबंधित प्रवर्गातील रिक्त पदांच्या <b>१:१०</b> प्रमाणात १०० गुणांच्या लेखी परीक्षेसाठी पात्र असतील.</p>

    <table border="1">
        <tr>
            <th>विषय</th>
            <th>गुण</th>
        </tr>
        <tr>
            <td>अंकगणित</td>
            <td>२५</td>
        </tr>
        <tr>
            <td>सामान्य ज्ञान व चालू घडामोडी</td>
            <td>२५</td>
        </tr>
        <tr>
            <td>बुद्धीमत्ता चाचणी</td>
            <td>२५</td>
        </tr>
        <tr>
            <td>मराठी व्याकरण</td>
            <td>२५</td>
        </tr>
        <tr>
            <th>एकूण</th>
            <th>१००</th>
        </tr>
    </table>

    <h3>लेखी चाचणीसंदर्भातील महत्त्वाच्या सूचना:</h3>
    <ul>
        <li>लेखी परीक्षेमध्ये उमेदवारांना किमान <b>४०% गुण</b> मिळवणे अनिवार्य आहे. ४०% पेक्षा कमी गुण मिळाल्यास उमेदवार अपात्र ठरेल.</li>
        <li>लेखी चाचणी <b>९० मिनिटांची</b> असेल व मराठी भाषेत घेतली जाईल.</li>
        <li>सर्व प्रश्न बहुपर्यायी (MCQ) स्वरूपाचे असतील.</li>
        <li>मैदानी चाचणीनंतर लेखी परीक्षेची तारीख निश्चित केली जाईल.</li>
        <li>राज्य राखीव पोलीस बलातील सर्व गटांसाठी लेखी परीक्षा एकाच दिवशी होईल.</li>
        <li>शारीरिक आणि लेखी चाचणीमधील एकत्रित गुणांवर आधारित गुणवत्ता यादी तयार केली जाईल.</li>
        <li>गृह विभाग शासन निर्णय क्र. पोलीस - १८१९ / प्र . क्र ३१६ / पोल - ५ अ, दिनांक १०.१२.२०२० नुसार अंतिम निवड यादी तयार केली जाईल.</li>
    </ul>

          `,
          type: "html", // Type of content (e.g., HTML, array, URL)
        },
        {
          label: "Previous Year Papers",
          value: "papers",
          isVisible: true,
          content: [
            // { year: 2024, name: "Talathi Bharti 2024", link: null },
            // { year: 2023, name: "Talathi Bharti 2023", link: "#" },
          ],
          type: "array", // Type of content (array of objects)
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
          content: "https://policerecruitment2024.mahait.org/Forms/Home.aspx",
          type: "url", // Type of content (URL string)
        },
      ];

      // Simulate a delay (e.g., network request)
      setTimeout(() => {
        setTabConfig(dynamicConfig);
        setActiveTab(dynamicConfig[0]?.value || ""); // Set the first visible tab as active
      }, 1000);
    };

    fetchTabConfig();
  }, []);

  const scrollToSolvePaper = () => {
    if (solvePaperRef.current) {
      solvePaperRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Filter visible tabs
  const visibleTabs = tabConfig.filter((tab) => tab.isVisible);

  return (
    <section className="container mx-auto p-4 md:p-8 mt-16">
      {/* Horizontal Navigation Bar */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {visibleTabs.map((tab) => (
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
        {/* Render content based on activeTab */}
        {visibleTabs.map((tab) => {
          if (activeTab === tab.value) {
            switch (tab.type) {
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
