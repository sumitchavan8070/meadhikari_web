import ExamCategoryGrid from "@/components/ExamCategoryGrid";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Headercopy from "@/components/Headercopy";
import HeroBanner from "@/components/HeroBanner";
import OfferStrip from "@/components/OfferStrip";
import Stats from "@/components/Stats";
import OurPresenceSection from "./about/OurPresenceSection";
import PricePage from "./pricing/PricePage";
import ExamHero from "@/components/ExamHero";

// Homepage-specific metadata (overrides layout.js)
export const metadata = {
  title: "Meadhikari - Maharashtra's #1 Exam Preparation Platform",
  description:
    "🚀 Meadhikari- The Best Exam Preparation App in Maharashtra! 🚀 Prepare for MPSC, Police Bharti 2025, Talathi, Gramsevak, and Vanvibhag exams with Previous Year Papers, Mock Tests, and Syllabus. ✅",
  keywords: [
    "Meadhikari",
    "M Adhikari",
    "Meadhikari Academy",
    "MPSC Exam",
    "MPSC Previous Year Papers",
    "MPSC Mock Test",
    "MPSC Syllabus",
    "MPSC Preparation",
    "MPSC-B",
    "MPSC-C",
    "Police Bharti Maharashtra",
    "Police Bharti 2025",
    "Maha Police Bharti Syllabus",
    "Police Bharti Exam Pattern",
    "Talathi Bharti",
    "Talathi Exam Papers",
    "Talathi Syllabus in Marathi",
    "Krushi Sevak Bharti",
    "Krushi Sevak Syllabus",
    "Krushi Sevak Previous Papers",
    "Vanrakshak Bharti",
    "Vanrakshak Exam Preparation",
    "Gramsevak Exam",
    "Gramsevak Previous Papers",
    "TAIT Exam",
    "TAIT Previous Year Papers",
    "DMER Maharashtra",
    "DMER Exam Pattern",
    "PCMC Exam",
    "BMC Recruitment",

    "Maharashtra Government Exams",
    "Free Online Mock Tests",
    "Previous Year Papers PDF",
  ],
  alternates: {
    canonical: "https://www.meadhikari.com",
  },
};

export default function Home() {
  // Schema for homepage and exam categorie
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Meadhikari - The Best Exam Preparation App in Maharashtra!",
    url: "https://www.meadhikari.com",
    // Removed SearchAction since we don't have search
  };

  const examListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      // Exams with dedicated pages
      {
        "@type": "ListItem",
        position: 1,
        name: "Talathi Bharti",
        url: "https://www.meadhikari.com/exams/talathi-bharti",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Maharashtra Police Bharti",
        url: "https://www.meadhikari.com/exams/maharastra-police-bharti",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Vanrakshak Bharti",
        url: "https://www.meadhikari.com/exams/mahaforest-vanrakshak-bharti",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Krushi Sevak Bharti",
        url: "https://www.meadhikari.com/exams/krushi-sevak-bharti",
      },
    ],
  };

  return (
    <div className="overflow-x-hidden w-full pt-[23%] sm:pt-[23%] md:pt-[5%]">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(examListSchema) }}
      />

      {/* Page Content */}
      <OfferStrip />
      <Headercopy />
      <HeroBanner />
      <ExamCategoryGrid />
      {/* <ExamHero /> */}
      <Stats />
      <PricePage />
      <OurPresenceSection />
      <FAQ />
      <section className="bg-[#F9FAFC]">
        <Footer />
      </section>
    </div>
  );
}
