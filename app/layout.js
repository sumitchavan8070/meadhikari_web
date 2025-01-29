import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import ContextProvider from "@/Context/Context";
import { DM_Sans, Arvo } from "next/font/google";
import { QuestionsProvider } from "@/Context/QuestionsContext";
import { AuthProvider } from "@/Context/AuthContext"; // Import AuthProvider
import { Analytics } from "@vercel/analytics/react";

const inter = Montserrat({ subsets: ["latin"] });

// export const metadata = {
//   metadataBase: new URL("https://www.meadhikari.com"),
//   title: { default: "Meadhikari", template: "%s - Meadhikari" },
//   description: `🚀 The Best Exam Preparation App in Maharashtra! 🚀 , 📚 Access PYQs & resources for MPSC, Talathi, Gramsevak, Vanvibhag & more! ✅`,
//   twitter: { card: "summary_large_image" },
// };

export const metadata = {
  metadataBase: new URL("https://www.meadhikari.com"),
  title: { default: "Meadhikari", template: "%s - Meadhikari" },
  description: `🚀 The Best Exam Preparation App in Maharashtra! 🚀 , 📚 Access PYQs & resources for MPSC, Talathi, Gramsevak, Vanvibhag & more! ✅`,
  keywords:
    "Meadhikari, Previous year papers, Police bharti Papers, Talathi Papers, MPSC papers, MPSC Mock Test",
  twitter: { card: "summary_large_image" },
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
