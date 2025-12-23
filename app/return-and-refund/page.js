import React from "react";
import Footer from "@/components/Footer"; // Assuming you have a Footer component
import Headercopy from "@/components/Header";
import ReturnAndRefundPolicy from "./ReturnAndRefundPolicy";

const Page = () => {
  return (
    <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
      <Headercopy />
      <ReturnAndRefundPolicy />
      <Footer />
    </div>
  );
};

export default Page;
