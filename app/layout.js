import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import ContextProvider from "@/Context/Context";
import { DM_Sans, Arvo } from "next/font/google";
import { QuestionsProvider } from "@/Context/QuestionsContext";
import { AuthProvider } from "@/Context/AuthContext"; // Import AuthProvider

const inter = Montserrat({ subsets: ["latin"] });

// export const metadata = {
//   title: { default: "Meadhikari", template: "%s - Meadhikari" },
//   description: `Meadhikari is your ultimate test preparation companion, designed to help you succeed in various Maharashtra government exams with confidence. Our app provides access to a vast collection of previous year question papers (PYQ) and test preparation resources for exams like MPSC, Talathi, Gramsevak, Vanvibhag, and more.`,
//   twitter: { card: "summary_large_image" },
// };

export const metadata = {
  metadataBase: new URL("https://www.meadhikari.com"),
  title: { default: "Meadhikari", template: "%s - Meadhikari" },
  description: `Meadhikari is your ultimate test preparation companion, designed to help you succeed in various Maharashtra government exams with confidence. Our app provides access to a vast collection of previous year question papers (PYQ) and test preparation resources for exams like MPSC, Talathi, Gramsevak, Vanvibhag, and more.`,
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
