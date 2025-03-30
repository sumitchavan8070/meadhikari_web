import React from "react";
import Headercopy from "@/components/Headercopy";
import Footer from "@/components/Footer";
import PaperLandingPage from "./PaperLandingPage"; // Import the PaperLandingPage component
import axios from "axios";
import { BASE_URL } from "@/utils/globalStrings";

export const metadata = {
  title: "Previous Year Papers | MPSC, Talathi, Police Bharti Papers",
  description:
    "Find MPSC previous year papers, Talathi papers, Police Bharti papers, and more. Browse various categories and get access to the latest exam papers.",
  keywords:
    "MPSC, MPSC previous year paper, Talathi papers, Police Bharti papers, exam papers, previous year papers, government exams, question papers, MPSC exams, Talathi exams, Police Bharti exams",
  robots: "index, follow", // Allow search engines to index and follow the links
};
async function fetchCategoriesData() {
  try {
    // Fetch categories
    const categoryResponse = await axios.get(
      `${BASE_URL}/exam-categories/get-all-exam-category`
    );

    let categories = categoryResponse.data.map(
      ({ _id, catName, catShortName, image, categoryNumber }) => ({
        _id,
        name: catName.trim(),
        shortName: catShortName || "",
        image,
        categoryNumber,
        questionsData: [],
      })
    );

    // Sort categories by categoryNumber in ascending order
    categories.sort((a, b) => a.categoryNumber - b.categoryNumber);

    // console.log("Sorted Categories:", categories);

    // Fetch paper metadata for each category
    const papersPromises = categories.map((category) =>
      axios.get(`${BASE_URL}/papers/web/${category._id}`)
    );
    const papersResponses = await Promise.all(papersPromises);

    // Enrich categories with paper metadata
    const enrichedCategories = categories.map((category, index) => {
      const papersMetadata = papersResponses[index].data;

      // Sort papers by QPYear in descending order
      const sortedPapers = papersMetadata.sort((a, b) => b.QPYear - a.QPYear);

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

      return { ...category, questionsData };
    });

    return enrichedCategories;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default async function Page() {
  // Fetch data on the server
  const categoriesData = await fetchCategoriesData();

  return (
    <div className="w-full bg-gray-50 overflow-x-hidden">
      {/* Header */}
      <Headercopy />

      <PaperLandingPage categoriesData={categoriesData} />

      {/* Footer */}
      <footer className="bg-[#F9FAFC] py-6 mt-10 w-full">
        <Footer />
      </footer>
    </div>
  );
}
