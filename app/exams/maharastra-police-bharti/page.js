// import React from "react";
// import Footer from "@/components/Footer"; // Assuming you have a Footer component
// import Headercopy from "@/components/Headercopy";
// import { BASE_URL } from "@/utils/globalStrings";
// import OfferStrip from "@/components/OfferStrip";
// import PoliceBhartiLandingPage from "./PoliceBhartiLandingPage";

// // Hardcoded production URL for SEO
// const PRODUCTION_URL = "https://www.meadhikari.com";

// export const metadata = {
//   title: "Police Bharti",
// };
// // Hardcoded category ID
// const CATEGORY_ID = "676d218c87745daecb72801c";

// // Fetch data directly in the component using async/await
// async function fetchPapers() {
//   try {
//     // Fetch papers for the hardcoded category ID
//     const response = await fetch(`${BASE_URL}/papers/web/${CATEGORY_ID}`);
//     if (!response.ok) {
//       throw new Error("Failed to fetch papers");
//     }
//     const papersMetadata = await response.json();

//     // Sort papers by QPYear in descending order
//     const sortedPapers = papersMetadata.sort((a, b) => b.QPYear - a.QPYear);

//     // Create questionsData array
//     const questionsData = sortedPapers.map((paper) => ({
//       title: paper.questionPaperName || paper.subCatName,
//       time: 60,
//       marks: paper.questionsLength,
//       questions: paper.questionsLength,
//       languages: ["Marathi"],
//       free: true,
//       live: paper.QPYear === new Date().getFullYear().toString(),
//       paper: paper,
//     }));

//     return questionsData;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// }

// export default async function Page() {
//   // Fetch data server-side
//   const questionsData = await fetchPapers();

//   return (
//     <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
//       <Headercopy />
//       <OfferStrip />
//       <PoliceBhartiLandingPage questionsData={questionsData} />
//       <Footer />
//     </div>
//   );
// }

import React from "react";
import Footer from "@/components/Footer"; // Assuming you have a Footer component
import Headercopy from "@/components/Headercopy";
import { BASE_URL } from "@/utils/globalStrings";
import OfferStrip from "@/components/OfferStrip";
import PoliceBhartiLandingPage from "./PoliceBhartiLandingPage";

// Hardcoded production URL for SEO
const PRODUCTION_URL = "https://www.meadhikari.com";

// Define metadata for SEO
export const metadata = {
  title:
    "Maharashtra Police Bharti Exam Preparation - Syllabus, Papers & Practice Tests",
  description:
    "Prepare for the Maharashtra Police Bharti exam with expert-curated syllabus, previous year papers, and practice tests. Get the latest updates on Police Bharti exam patterns and ace your preparation.",
  keywords:
    "police bharti 2025 ,police, maharashtra police, police bharti maharashtra, police bharti syllabus, maha police bharti syllabus, police bharti paper pattern, police bharti maths syllabus, police bharti marathi syllabus, police bharti questions, police bharti subject, police bharti syllabus in marathi, police bharti syllabus in marathi pdf, police bharti papers",
  robots: "index, follow",
  canonical: `${PRODUCTION_URL}/exams/maharashtra-police-bharti`, // Canonical URL
  // openGraph: {
  //   title: "Maharashtra Police Bharti Exam Preparation - Syllabus, Papers & Practice Tests",
  //   description:
  //     "Prepare for the Maharashtra Police Bharti exam with expert-curated syllabus, previous year papers, and practice tests. Get the latest updates on Police Bharti exam patterns and ace your preparation.",
  //   url: `${PRODUCTION_URL}/exams/maharashtra-police-bharti`,
  //   siteName: "Meadhikari",
  //   images: [
  //     {
  //       url: `${PRODUCTION_URL}/images/police-bharti-banner.jpg`, // Replace with actual image URL
  //       width: 1200,
  //       height: 630,
  //       alt: "Maharashtra Police Bharti Exam Preparation Banner",
  //     },
  //   ],
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Maharashtra Police Bharti Exam Preparation - Syllabus, Papers & Practice Tests",
  //   description:
  //     "Prepare for the Maharashtra Police Bharti exam with expert-curated syllabus, previous year papers, and practice tests. Get the latest updates on Police Bharti exam patterns and ace your preparation.",
  //   image: `${PRODUCTION_URL}/images/police-bharti-banner.jpg`, // Replace with actual image URL
  // },
};

// Hardcoded category ID
const CATEGORY_ID = "676d218c87745daecb72801c";

// Fetch data directly in the component using async/await
async function fetchPapers() {
  try {
    // Fetch papers for the hardcoded category ID
    const response = await fetch(`${BASE_URL}/papers/web/${CATEGORY_ID}`);
    if (!response.ok) {
      throw new Error("Failed to fetch papers");
    }
    const papersMetadata = await response.json();

    // Sort papers by QPYear in descending order
    const sortedPapers = papersMetadata.sort((a, b) => b.QPYear - a.QPYear);

    // Create questionsData array
    const questionsData = sortedPapers.map((paper) => ({
      title: paper.questionPaperName || paper.subCatName,
      time: 60,
      marks: paper.questionsLength,
      questions: paper.questionsLength,
      languages: ["Marathi"],
      free: true,
      live: paper.QPYear === new Date().getFullYear().toString(),
      paper: paper,
    }));

    return questionsData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function Page() {
  // Fetch data server-side
  const questionsData = await fetchPapers();

  return (
    <div className="pt-[23%] sm:pt-[23%] md:pt-[5%] overflow-hidden">
      <Headercopy />
      <OfferStrip />
      <PoliceBhartiLandingPage questionsData={questionsData} />
      <Footer />
    </div>
  );
}
