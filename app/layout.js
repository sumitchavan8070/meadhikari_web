import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import ContextProvider from "@/Context/Context";
import { DM_Sans, Arvo } from 'next/font/google';


const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "A store for all your needs",
};


const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const arvo = Arvo({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body className={`${dmSans.className} ${arvo.className}`}>
        <NextTopLoader color="#000" height={4} />
        <div>

          <ContextProvider>
            {children}

          </ContextProvider>
        </div>

      </body>
    </html>
  );
}
