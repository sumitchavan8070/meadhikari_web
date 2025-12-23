import React from "react";
import Footer from "@/components/Footer"; // Assuming you have a Footer component
import Headercopy from "@/components/Header";
import { BASE_URL, LIVE_DOMAIN_URL } from "@/utils/globalStrings";
import OfferStrip from "@/components/OfferStrip";
import PoliceBhartiLandingPage from "./PoliceBhartiLandingPage";

const PRODUCTION_URL = LIVE_DOMAIN_URL;
const CANONICAL_URL = `${PRODUCTION_URL}/exams/maharashtra-police-bharti`;

// Define metadata for SEO
export const metadata = {
  title:
    "Maharashtra Police Bharti Exam Preparation - Syllabus, Papers & Practice Tests",
  description:
    "Prepare for the Maharashtra Police Bharti exam with expert-curated syllabus, previous year papers, and practice tests. Get the latest updates on Police Bharti exam patterns and ace your preparation.",
  keywords:
    "police bharti 2025 ,police, maharashtra police, police bharti maharashtra, police bharti syllabus, maha police bharti syllabus, police bharti paper pattern, police bharti maths syllabus, police bharti marathi syllabus, police bharti questions, police bharti subject, police bharti syllabus in marathi, police bharti syllabus in marathi pdf, police bharti papers",
  robots: "index, follow",
  alternates: {
    canonical: CANONICAL_URL,
  },
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
    <div className="overflow-x-hidden w-full">
      <Headercopy />
      <OfferStrip />
      
      <main>
        <PoliceBhartiLandingPage questionsData={questionsData} />
      </main>
      
      <Footer />
    </div>
  );
}
