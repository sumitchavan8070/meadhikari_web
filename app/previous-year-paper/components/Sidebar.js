import OurPresenceSection from "@/app/about/OurPresenceSection";
import ConversionStripSecond from "@/components/ConversionStripSecound";
import OfferBannerSecond from "@/components/OfferBannerSecond";

const Sidebar = () => {
  return (
    <div className="p-4 space-y-6">
      {/* <ConversionStripFirst /> */}
      <ConversionStripSecond />
      <OurPresenceSection />
      <OfferBannerSecond />
    </div>
  );
};

export default Sidebar;
