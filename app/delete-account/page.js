import React from "react";
import Footer from "@/components/Footer"; // Assuming you have a Footer component
import Headercopy from "@/components/Header"; // Assuming you have a Headercopy component
import AccountDeletionRequest from "./AccountDeletionRequest"; // The account deletion component

export const metadata = {
  title: "Delete Account",
};

const Page = () => {
  return (
    <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
      <Headercopy />
      <AccountDeletionRequest />
      <Footer />
    </div>
  );
};

export default Page;
