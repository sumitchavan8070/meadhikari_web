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

// Default metadata (can be overridden by child pages)
export const metadata = {
  metadataBase: new URL("https://www.meadhikari.com"),
  title: { default: "Meadhikari", template: "%s - Meadhikari" },
  robots: "index, follow",
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  // Global Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Meadhikari",
    url: "https://www.meadhikari.com",
    logo: "https://www.meadhikari.com/logo.png",
    founder: {
      "@type": "Person",
      name: "S Chavan",
    },
    sameAs: [
      "https://t.me/meadhikariacademy",
      "https://play.google.com/store/apps/details?id=com.sc.meadhikari",
      "https://youtube.com/@meadhikariacademy",
      "https://instagram.com/meadhikariacademy",
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Global scripts (Google Analytics, Ads, etc.) */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7206995179171395"
          crossOrigin="anonymous"
        />
        <Script
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
        />
        {/* Global Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${dmSans.className} ${arvo.className}`}>
        <NextTopLoader color="#000" height={4} />
        <QuestionsProvider>
          <AuthProvider>
            <ContextProvider>
              {/* <AppWrapper> */}
              {children}

              {/* </AppWrapper> */}
            </ContextProvider>
          </AuthProvider>
        </QuestionsProvider>
        <Analytics />
      </body>
    </html>
  );
}
