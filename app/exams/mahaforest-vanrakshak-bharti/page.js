import React from "react";
import Footer from "@/components/Footer"; // Assuming you have a Footer component
import Headercopy from "@/components/Headercopy";
import { BASE_URL } from "@/utils/globalStrings";
import OfferStrip from "@/components/OfferStrip";
import VanrakshakLandingPage from "./VanrakshakLandingPage";

// Hardcoded production URL for SEO
const PRODUCTION_URL = "https://www.meadhikari.com";

// Define metadata for SEO
export const metadata = {
  title:
    "Maharashtra Vanrakshak Bharti Exam Preparation - Syllabus, Papers & Practice Tests",
  description:
    "Prepare for the Maharashtra Vanrakshak Bharti exam with expert-curated syllabus, previous year papers, and practice tests. Get the latest updates on vanrakshak Bharti exam patterns and ace your preparation.",
  keywords:
    "vanrakshak bharti 2025 ,vanrakshak, maharashtra vanrakshak bharti, vanrakshak bharti maharashtra, vanrakshak bharti syllabus, maha vanrakshak bharti syllabus, vanrakshak bharti paper pattern,  vanrakshak bharti marathi syllabus, vanrakshak bharti questions, vanrakshak bharti subject, vanrakshak bharti syllabus in marathi, vanrakshak bharti syllabus in marathi pdf, vanrakshak bharti papers",
  robots: "index, follow",
  canonical: `${PRODUCTION_URL}/exams/mahaforest-vanrakshak-bharti`, // Canonical URL
};

// Hardcoded category ID
const CATEGORY_ID = "67a369d7927c1f06154f2ed9";

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
      <VanrakshakLandingPage questionsData={questionsData} />
      <Footer />
    </div>
  );
}
