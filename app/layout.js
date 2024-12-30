// // import { Montserrat } from "next/font/google";
// // import "./globals.css";
// // import NextTopLoader from "nextjs-toploader";
// // import ContextProvider from "@/Context/Context";
// // import { DM_Sans, Arvo } from "next/font/google";

// // const inter = Montserrat({ subsets: ["latin"] });

// // export const metadata = {
// //   title: "Meadhikari",
// //   description: "MPSC Test Preparation",
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
// //       <body className={`${dmSans.className} ${arvo.className}`}>
// //         <NextTopLoader color="#000" height={4} />
// //         <div>
// //           <ContextProvider>{children}</ContextProvider>
// //         </div>
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

// const inter = Montserrat({ subsets: ["latin"] });

// export const metadata = {
//   title: "Meadhikari",
//   description: "MPSC Test Preparation",
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
//       <body className={`${dmSans.className} ${arvo.className}`}>
//         <NextTopLoader color="#000" height={4} />
//         <QuestionsProvider>
//           <ContextProvider>{children}</ContextProvider>
//         </QuestionsProvider>
//       </body>
//     </html>
//   );
// }

// /app/layout.js or /app/_app.js (depending on your Next.js version)

import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import ContextProvider from "@/Context/Context";
import { DM_Sans, Arvo } from "next/font/google";
import { QuestionsProvider } from "@/Context/QuestionsContext";
import { AuthProvider } from "@/Context/AuthContext"; // Import AuthProvider

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Meadhikari",
  description: "MPSC Test Preparation",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} ${arvo.className}`}>
        <NextTopLoader color="#000" height={4} />
        <QuestionsProvider>
          <AuthProvider>
            {/* Wrap the children with AuthProvider */}
            <ContextProvider>{children}</ContextProvider>
          </AuthProvider>
        </QuestionsProvider>
      </body>
    </html>
  );
}
