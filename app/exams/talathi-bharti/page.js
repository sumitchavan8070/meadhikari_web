import React from "react";
import Footer from "@/components/Footer"; // Assuming you have a Footer component
import Headercopy from "@/components/Header";
import TalathiLandingPage from "./TalathiLandingPage";
import { BASE_URL, LIVE_DOMAIN_URL } from "@/utils/globalStrings";
import OfferStrip from "@/components/OfferStrip";

// Hardcoded production URL for
const PRODUCTION_URL = LIVE_DOMAIN_URL;
const CANONICAL_URL = `${PRODUCTION_URL}/exams/talathi-bharti`;

// Define metadata for SEO
export const metadata = {
  title: "Talathi Bharti Exam Preparation - Previous Year Papers & Syllabus",
  description:
    "Prepare for the Talathi Bharti exam with previous year question papers, syllabus, and expert resources. Get the latest updates and ace your Talathi exam preparation.",
  keywords:
    "talathi bharti 2025,talathi, talathi bharti, talathi papers, exam for talathi, question paper talathi, syllabus for talathi, syllabus for talathi exam, talathi bharti previous year question paper, talathi bharti question paper, talathi bharti syllabus, talathi bharti update, talathi exam paper, talathi exam question paper, talathi previous year question paper",
  robots: "index, follow",
  alternates: {
    canonical: CANONICAL_URL,
  },
};

// Hardcoded category ID
const CATEGORY_ID = "67289839f4b156fb4580b5ab";

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
        <TalathiLandingPage questionsData={questionsData} />
      </main>
      
      <Footer />
    </div>
  );
}
