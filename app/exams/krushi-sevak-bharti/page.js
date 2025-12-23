import React from "react";
import Footer from "@/components/Footer";
import Headercopy from "@/components/Header";
import { BASE_URL, LIVE_DOMAIN_URL } from "@/utils/globalStrings";
import OfferStrip from "@/components/OfferStrip";
import KrushisevakLandingPage from "./KrushisevakLandingPage";

// Hardcoded production URL for SEO
const PRODUCTION_URL = LIVE_DOMAIN_URL;
const CANONICAL_URL = `${PRODUCTION_URL}/exams/krushi-sevak-bharti`;

// Define metadata for SEO
export const metadata = {
  title:
    "Maharashtra Krushi Sevak Bharti Exam Preparation - Syllabus, Papers & Practice Tests",
  description:
    "Prepare for the Maharashtra Krushi Sevak Bharti exam with expert-curated syllabus, previous year papers, and practice tests. Get the latest updates on Krushi Sevak Bharti exam patterns and ace your preparation.",
  keywords:
    "krushi sevak bharti 2025 ,krushi sevak, maharashtra krushi sevak bharti, krushi sevak bharti maharashtra, krushi sevak bharti syllabus, maha krushi sevak bharti syllabus, krushi sevak bharti paper pattern, krushi sevak bharti marathi syllabus, krushi sevak bharti questions, krushi sevak bharti subject, krushi sevak bharti syllabus in marathi, krushi sevak bharti syllabus in marathi pdf, krushi sevak bharti papers",
  robots: "index, follow",
  alternates: {
    canonical: CANONICAL_URL,
  },
};

// Hardcoded category ID
const CATEGORY_ID = "67c5383e1dd9afe5ab1cc138";

async function fetchPapers() {
  try {
    const response = await fetch(`${BASE_URL}/papers/web/${CATEGORY_ID}`);
    if (!response.ok) throw new Error("Failed to fetch papers");
    const papersMetadata = await response.json();
    const sortedPapers = papersMetadata.sort((a, b) => b.QPYear - a.QPYear);

    return sortedPapers.map((paper) => ({
      title: paper.questionPaperName || paper.subCatName,
      time: 60,
      marks: paper.questionsLength,
      questions: paper.questionsLength,
      languages: ["Marathi"],
      free: true,
      live: paper.QPYear === new Date().getFullYear().toString(),
      paper: paper,
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function Page() {
  const questionsData = await fetchPapers();

  return (
    <div className="overflow-x-hidden w-full">
      <Headercopy />
      <OfferStrip />
      
      <main>
        <KrushisevakLandingPage questionsData={questionsData} />
      </main>
      
      <Footer />
    </div>
  );
}
