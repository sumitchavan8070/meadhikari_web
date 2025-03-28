// import Footer from "@/components/Footer";
// import Headercopy from "@/components/Headercopy";
// import OfferStrip from "@/components/OfferStrip";

// export default function NotFound() {
//   return (
//     <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
//       <Headercopy />
//       <OfferStrip />
//       <div style={{ textAlign: "center", padding: "50px" }}>
//         <h1 style={{ fontSize: "3rem" }}>404 - Page Not Found</h1>
//         <p>The page you are looking for does not exist.</p>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// app/not-found.js
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Headercopy from "@/components/Headercopy";
import OfferStrip from "@/components/OfferStrip";
import ConversionStripFirst from "@/components/ConversionStripFirst";

export default function NotFound() {
  return (
    <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
      <Headercopy />
      <OfferStrip />
      <ConversionStripFirst />
      <div className="text-center py-12">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for does not exist.
        </p>
      </div>
      <ConversionStripFirst />
      <Footer />
    </div>
  );
}
