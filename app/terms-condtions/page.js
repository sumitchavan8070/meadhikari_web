import React from "react";
import Footer from "@/components/Footer"; // Assuming you have a Footer component
import Headercopy from "@/components/Headercopy";
import TermsAndConditions from "./TermsAndConditions";

export const metadata = {
  title: "Pricing",
};

const Page = () => {
  return (
    <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
      <Headercopy />
      <TermsAndConditions />
      <Footer />
    </div>
  );
};

export default Page;
