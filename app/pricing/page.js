import React from "react";
import PricePage from "./PricePage";
import Footer from "@/components/Footer"; // Assuming you have a Footer component
import Headercopy from "@/components/Headercopy";
import ContactUs from "./ContactUs";
import { contactInfo } from "../contact/contactInfo";
import OurPresenceSection from "../about/OurPresenceSection";

export const metadata = {
  title: "Pricing",
};

const Page = () => {
  return (
    <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
      <Headercopy />
      <PricePage />
      <Footer />
    </div>
  );
};

export default Page;
