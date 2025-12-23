import Footer from "@/components/Footer"; // Assuming you have a Footer component
import Headercopy from "@/components/Header";
import OfferStrip from "@/components/OfferStrip";
import PricePage from "./PricePage";

export const metadata = {
  title: "Pricing",
};

const Page = () => {
  return (
    <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
      <Headercopy />
      <OfferStrip />

      <PricePage />
      <Footer />
    </div>
  );
};

export default Page;
