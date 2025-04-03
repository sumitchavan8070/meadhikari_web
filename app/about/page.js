import Headercopy from "@/components/Headercopy";
import HeroSection from "./HeroSection";
import AppImagesSection from "./AppImagesSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import Footer from "@/components/Footer";
import OurPresenceSection from "./OurPresenceSection";

export const metadata = {
  title: "About",
};

const Page = () => {
  return (
    <div className="relative">
      <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
        <Headercopy />
        <HeroSection />
        <OurPresenceSection />
        <AppImagesSection />
        <WhyChooseUsSection />
        <section className="bg-[#F9FAFC]">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Page;
