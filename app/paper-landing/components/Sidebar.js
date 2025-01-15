// import React from "react";

import OurPresenceSection from "@/app/about/OurPresenceSection";
import OfferBannerSecond from "@/components/OfferBannerSecond";

const Sidebar = () => {
  const latestBlogs = [
    { title: "5 Tips to Crack Competitive Exams", link: "#" },
    { title: "How to Stay Motivated During Preparation", link: "#" },
    { title: "Best Resources for Online Study", link: "#" },
    { title: "Top Mistakes to Avoid in Exams", link: "#" },
    { title: "Effective Time Management Strategies", link: "#" },
  ];

  return (
    <div className="p-4 space-y-6">
      <OurPresenceSection />
      <OfferBannerSecond />
    </div>
  );
};

export default Sidebar;
