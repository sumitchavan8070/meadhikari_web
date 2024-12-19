// import React from "react";
// import PaperLanding from "./PaperLanding";

// // Sample categoriesData (replace this with real data or fetching logic)
// const categoriesData = [
//   {
//     name: "Mathematics",
//     questionsData: [
//       {
//         title: "Algebra Basics",
//         time: "30 mins",
//         questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
//         marks: "100",
//         languages: ["English", "Hindi"],
//         attempted: 1500,
//         free: true,
//         live: false,
//       },
//       {
//         title: "Geometry Advanced",
//         time: "45 mins",
//         questions: [{ id: 1 }, { id: 2 }],
//         marks: "200",
//         languages: ["English"],
//         attempted: 2000,
//         free: false,
//         live: true,
//       },
//     ],
//   },
//   {
//     name: "Science",
//     questionsData: [
//       {
//         title: "Physics 101",
//         time: "40 mins",
//         questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
//         marks: "150",
//         languages: ["English"],
//         attempted: 1800,
//         free: true,
//         live: true,
//       },
//     ],
//   },
// ];

// export default function PaperLandingPage() {
//   return <PaperLanding categoriesData={categoriesData} />;
// }

"use client";

import React from "react";
import PaperLanding from "./PaperLanding";
import Headercopy from "@/components/Headercopy";
import Footer from "@/components/Footer";
import Sidebar from "./components/Sidebar";
import OfferStrip from "@/components/OfferStrip";

// Sample categoriesData (replace this with real data or fetching logic)
// const categoriesData = [
//   {
//     name: "Mathematics",
//     questionsData: [
//       {
//         title: "Algebra Basics",
//         time: "30 mins",
//         questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
//         marks: "100",
//         languages: ["English", "Hindi"],
//         attempted: 1500,
//         free: true,
//         live: false,
//       },
//       {
//         title: "Geometry Advanced",
//         time: "45 mins",
//         questions: [{ id: 1 }, { id: 2 }],
//         marks: "200",
//         languages: ["English"],
//         attempted: 2000,
//         free: false,
//         live: true,
//       },
//     ],
//   },
//   {
//     name: "Science",
//     questionsData: [
//       {
//         title: "Physics 101",
//         time: "40 mins",
//         questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
//         marks: "150",
//         languages: ["English"],
//         attempted: 1800,
//         free: true,
//         live: true,
//       },
//       {
//         title: "Physics 101",
//         time: "40 mins",
//         questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
//         marks: "150",
//         languages: ["English"],
//         attempted: 1800,
//         free: true,
//         live: true,
//       },
//       {
//         title: "Physics 101",
//         time: "40 mins",
//         questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
//         marks: "150",
//         languages: ["English"],
//         attempted: 1800,
//         free: true,
//         live: true,
//       },
//       {
//         title: "Physics 101",
//         time: "40 mins",
//         questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
//         marks: "150",
//         languages: ["English"],
//         attempted: 1800,
//         free: true,
//         live: true,
//       },
//       {
//         title: "Physics 101",
//         time: "40 mins",
//         questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
//         marks: "150",
//         languages: ["English"],
//         attempted: 1800,
//         free: true,
//         live: true,
//       },
//       {
//         title: "Physics 101",
//         time: "40 mins",
//         questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
//         marks: "150",
//         languages: ["English"],
//         attempted: 1800,
//         free: true,
//         live: true,
//       },
//       {
//         title: "Physics 101",
//         time: "40 mins",
//         questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
//         marks: "150",
//         languages: ["English"],
//         attempted: 1800,
//         free: true,
//         live: true,
//       },

//       {
//         title: "Physics 101",
//         time: "40 mins",
//         questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
//         marks: "150",
//         languages: ["English"],
//         attempted: 1800,
//         free: true,
//         live: true,
//       },
//       {
//         title: "Physics 101",
//         time: "40 mins",
//         questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
//         marks: "150",
//         languages: ["English"],
//         attempted: 1800,
//         free: true,
//         live: true,
//       },
//     ],
//   },
// ];

const categoriesData = [
  {
    name: "Mathematics",
    questionsData: [
      {
        title: "Algebra Basics",
        time: "30 mins",
        questions: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
          { id: 8 },
        ],
        marks: "100",
        languages: ["English", "Hindi"],
        attempted: 1500,
        free: true,
        live: false,
      },
      {
        title: "Geometry Advanced",
        time: "45 mins",
        questions: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
        marks: "200",
        languages: ["English"],
        attempted: 2000,
        free: false,
        live: true,
      },
      {
        title: "Basics",
        time: "30 mins",
        questions: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
          { id: 8 },
        ],
        marks: "100",
        languages: ["English", "Hindi"],
        attempted: 1500,
        free: true,
        live: false,
      },

      {
        title: "Algebra",
        time: "30 mins",
        questions: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
          { id: 8 },
        ],
        marks: "100",
        languages: ["English", "Hindi"],
        attempted: 1500,
        free: true,
        live: false,
      },

      {
        title: "Algebra2",
        time: "30 mins",
        questions: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
          { id: 8 },
        ],
        marks: "100",
        languages: ["English", "Hindi"],
        attempted: 1500,
        free: true,
        live: false,
      },
      {
        title: "Test",
        time: "30 mins",
        questions: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
          { id: 8 },
        ],
        marks: "100",
        languages: ["English", "Hindi"],
        attempted: 1500,
        free: true,
        live: false,
      },
    ],
  },
  {
    name: "Science",
    questionsData: [
      {
        title: "Physics 101",
        time: "40 mins",
        questions: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
          { id: 7 },
        ],
        marks: "150",
        languages: ["English"],
        attempted: 1800,
        free: true,
        live: true,
      },
      {
        title: "Chemistry Basics",
        time: "35 mins",
        questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
        marks: "120",
        languages: ["English", "French"],
        attempted: 1400,
        free: true,
        live: false,
      },
      {
        title: "Biology Advanced",
        time: "55 mins",
        questions: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
        marks: "200",
        languages: ["English"],
        attempted: 1600,
        free: false,
        live: true,
      },
    ],
  },
  {
    name: "History",
    questionsData: [
      {
        title: "World War II",
        time: "60 mins",
        questions: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
        marks: "180",
        languages: ["English"],
        attempted: 1000,
        free: true,
        live: true,
      },
      {
        title: "Ancient Civilizations",
        time: "40 mins",
        questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
        marks: "150",
        languages: ["English", "German"],
        attempted: 1200,
        free: false,
        live: false,
      },
      {
        title: "Modern History",
        time: "50 mins",
        questions: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
        marks: "200",
        languages: ["English"],
        attempted: 800,
        free: true,
        live: false,
      },
      {
        title: "Medieval History",
        time: "45 mins",
        questions: [{ id: 1 }, { id: 2 }],
        marks: "100",
        languages: ["English"],
        attempted: 500,
        free: false,
        live: true,
      },
    ],
  },
  {
    name: "Literature",
    questionsData: [
      {
        title: "Shakespeare's Plays",
        time: "30 mins",
        questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
        marks: "100",
        languages: ["English"],
        attempted: 1500,
        free: true,
        live: true,
      },
      {
        title: "Modern Literature",
        time: "45 mins",
        questions: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
        marks: "180",
        languages: ["English"],
        attempted: 1700,
        free: false,
        live: false,
      },
      {
        title: "Poetry Fundamentals",
        time: "25 mins",
        questions: [{ id: 1 }, { id: 2 }],
        marks: "80",
        languages: ["English"],
        attempted: 1300,
        free: true,
        live: true,
      },
      {
        title: "Epic Literature",
        time: "60 mins",
        questions: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
        marks: "200",
        languages: ["English"],
        attempted: 1400,
        free: false,
        live: false,
      },
      {
        title: "Classical Poetry",
        time: "35 mins",
        questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
        marks: "120",
        languages: ["English"],
        attempted: 1100,
        free: true,
        live: true,
      },
    ],
  },
  {
    name: "Technology",
    questionsData: [
      {
        title: "Web Development Basics",
        time: "30 mins",
        questions: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
        marks: "100",
        languages: ["English"],
        attempted: 1500,
        free: true,
        live: true,
      },
      {
        title: "Cloud Computing",
        time: "50 mins",
        questions: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
        marks: "150",
        languages: ["English"],
        attempted: 1200,
        free: false,
        live: false,
      },
      {
        title: "AI and Machine Learning",
        time: "60 mins",
        questions: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
          { id: 5 },
          { id: 6 },
        ],
        marks: "200",
        languages: ["English"],
        attempted: 1000,
        free: true,
        live: true,
      },
      {
        title: "Cyber Security",
        time: "40 mins",
        questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
        marks: "130",
        languages: ["English"],
        attempted: 800,
        free: false,
        live: true,
      },
      {
        title: "abc",
        time: "40 mins",
        questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
        marks: "130",
        languages: ["English"],
        attempted: 800,
        free: false,
        live: true,
      },

      {
        title: "Cyber",
        time: "40 mins",
        questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
        marks: "130",
        languages: ["English"],
        attempted: 800,
        free: false,
        live: true,
      },

      {
        title: "Security",
        time: "40 mins",
        questions: [{ id: 1 }, { id: 2 }, { id: 3 }],
        marks: "130",
        languages: ["English"],
        attempted: 800,
        free: false,
        live: true,
      },
    ],
  },
];

export default function PaperLandingPage() {
  return (
    <div className="w-full  overflow-x-hidden">
      {/* Header Section */}
      <Headercopy />

      <div className="w-full pt-[23%] sm:pt-[23%] md:pt-[5%]">
        {/* Add 5% margin-top */}
        <OfferStrip />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 pt-16 flex-col lg:flex-row w-full">
        {/* Sidebar Section */}
        <aside className="lg:block lg:w-64 bg-gray-100 border-r border-gray-200 shadow-md hidden lg:flex">
          <Sidebar />
        </aside>

        {/* Main Content Section */}
        <PaperLanding categoriesData={categoriesData} />
      </div>

      {/* Footer Section */}
      <footer className="bg-[#F9FAFC] py-6 mt-10 w-full">
        <Footer />
      </footer>
    </div>
  );
}
