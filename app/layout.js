// // import { Montserrat } from "next/font/google";
// // import "./globals.css";
// // import NextTopLoader from "nextjs-toploader";
// // import ContextProvider from "@/Context/Context";
// // import { DM_Sans, Arvo } from "next/font/google";
// // import { QuestionsProvider } from "@/Context/QuestionsContext";
// // import { AuthProvider } from "@/Context/AuthContext"; // Import AuthProvider
// // import { Analytics } from "@vercel/analytics/react";
// // import Script from "next/script"; // Import Script component

// // const inter = Montserrat({ subsets: ["latin"] });

// // export const metadata = {
// //   metadataBase: new URL("https://www.meadhikari.com"),
// //   title: { default: "Meadhikari", template: "%s - Meadhikari" },
// //   description: `🚀 The Best Exam Preparation App in Maharashtra! 🚀 , 📚 Access PYQs & resources for MPSC, Talathi, Gramsevak, Vanvibhag & more! ✅`,
// //   keywords:
// //     "Meadhikari, Previous year papers, Police bharti Papers, Talathi Papers, MPSC papers, MPSC Mock Test",
// //   twitter: { card: "summary_large_image" },
// // };

// // const dmSans = DM_Sans({
// //   subsets: ["latin"],
// //   weight: ["400", "500", "700"],
// // });

// // const arvo = Arvo({
// //   subsets: ["latin"],
// //   weight: ["400", "700"],
// // });

// // export default function RootLayout({ children }) {
// //   return (
// //     <html lang="en">
// //       <head>
// //         {/* Google Analytics Script */}
// //         <Script
// //           strategy="afterInteractive"
// //           src={`https://www.googletagmanager.com/gtag/js?id=G-VVBEXR90R7`}
// //         />
// //         <Script
// //           id="google-analytics"
// //           strategy="afterInteractive"
// //           dangerouslySetInnerHTML={{
// //             __html: `
// //               window.dataLayer = window.dataLayer || [];
// //               function gtag(){dataLayer.push(arguments);}
// //               gtag('js', new Date());
// //               gtag('config', 'G-VVBEXR90R7');
// //             `,
// //           }}
// //         />
// //       </head>
// //       <body className={`${dmSans.className} ${arvo.className}`}>
// //         <NextTopLoader color="#000" height={4} />
// //         <QuestionsProvider>
// //           <AuthProvider>
// //             <ContextProvider>{children}</ContextProvider>
// //           </AuthProvider>
// //         </QuestionsProvider>
// //         <Analytics />
// //       </body>
// //     </html>
// //   );
// // }

// import { Montserrat } from "next/font/google";
// import "./globals.css";
// import NextTopLoader from "nextjs-toploader";
// import ContextProvider from "@/Context/Context";
// import { DM_Sans, Arvo } from "next/font/google";
// import { QuestionsProvider } from "@/Context/QuestionsContext";
// import { AuthProvider } from "@/Context/AuthContext"; // Import AuthProvider
// import { Analytics } from "@vercel/analytics/react";
// import Script from "next/script"; // Import Script component
// import AppWrapper from "./AppWrapper";

// const inter = Montserrat({ subsets: ["latin"] });

// export const metadata = {
//   metadataBase: new URL("https://www.meadhikari.com"),
//   title: { default: "Meadhikari", template: "%s - Meadhikari" },
//   description: `🚀 The Best Exam Preparation App in Maharashtra! 🚀 , 📚 Access PYQs & resources for MPSC, Talathi, Gramsevak, Vanvibhag & more! ✅`,
//   keywords:
//     "Meadhikari, Previous year papers, Police bharti Papers, Talathi Papers, MPSC papers, MPSC Mock Test",
//   twitter: { card: "summary_large_image" },
// };

// const dmSans = DM_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
// });

// const arvo = Arvo({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Google Analytics Script */}
//         <Script
//           strategy="afterInteractive"
//           src={`https://www.googletagmanager.com/gtag/js?id=G-VVBEXR90R7`}
//         />
//         <Script
//           id="google-analytics"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-VVBEXR90R7');
//             `,
//           }}
//         />
//       </head>
//       <body className={`${dmSans.className} ${arvo.className}`}>
//         <NextTopLoader color="#000" height={4} />
//         <QuestionsProvider>
//           <AuthProvider>
//             <ContextProvider>
//               {/* Wrap the children with AppWrapper */}
//               <AppWrapper>{children}</AppWrapper>
//             </ContextProvider>
//           </AuthProvider>
//         </QuestionsProvider>
//         <Analytics />
//       </body>
//     </html>
//   );
// }

import { Montserrat, DM_Sans, Arvo } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import ContextProvider from "@/Context/Context";
import { QuestionsProvider } from "@/Context/QuestionsContext";
import { AuthProvider } from "@/Context/AuthContext";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import AppWrapper from "./AppWrapper";

// Define fonts
const montserrat = Montserrat({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
const arvo = Arvo({ subsets: ["latin"], weight: ["400", "700"] });

// Metadata for SEO
export const metadata = {
  metadataBase: new URL("https://www.meadhikari.com"),
  title: { default: "Meadhikari (M Adhikari)", template: "%s - Meadhikari" },
  description: `🚀 Meadhikari- The Best Exam Preparation App in Maharashtra! 🚀 Prepare for MPSC, Police Bharti 2025, Talathi, Gramsevak, and Vanvibhag exams with Previous Year Papers, Mock Tests, and Syllabus. ✅`,
  keywords: [
    "Meadhikari",
    "M Adhikari",
    "Previous year papers",
    "Police bharti Papers",
    "Talathi Papers",
    "mpsc papers",
    "MPSC Mock Test",
    "mpsc pyq",
    "mpsc previous year paper",
    "MPSC Exam Preparation in Maharashtra",
    "Police Bharti Syllabus Maharashtra",
    "Police Bharti Maharashtra",
    "Police Bharti 2025 Maharashtra",
    "Maha Police Bharti",
    "Maha Police Bharti 2025",
    "Talathi Previous Year Papers Maharashtra",
    "Talathi Paper Maharashtra",
    "Gram Sevak Paper Maharashtra",
    "Gramsevak Exam Preparation Maharashtra",
    "Vanvibhag Previous Papers Maharashtra",
    "MPSC Mock Test Maharashtra",
    "MPSC Paper Maharashtra",
    "Best Exam App in Maharashtra",
    "Free MPSC Study Material Maharashtra",
    "Online Mock Tests for MPSC Maharashtra",
    "Talathi Bharti 2023 Maharashtra",
    "Maharashtra Police Bharti Syllabus",
  ],

  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Canonical URL for /previous-year-papers */}
        <link
          rel="canonical"
          href="https://www.meadhikari.com/previous-year-papers"
        />

        {/* Google Analytics Script */}
        {/* <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-VVBEXR90R7`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VVBEXR90R7');
            `,
          }}
        /> */}

        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-5R6BZSNQ4E`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5R6BZSNQ4E');
            `,
          }}
        />
      </head>
      <body className={`${dmSans.className} ${arvo.className}`}>
        {/* Page Loader */}
        <NextTopLoader color="#000" height={4} />

        {/* Context Providers */}
        <QuestionsProvider>
          <AuthProvider>
            <ContextProvider>
              {/* Wrap the children with AppWrapper */}
              <AppWrapper>{children}</AppWrapper>
            </ContextProvider>
          </AuthProvider>
        </QuestionsProvider>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
