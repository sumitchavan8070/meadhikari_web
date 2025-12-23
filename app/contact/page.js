import Footer from "@/components/Footer";
import Headercopy from "@/components/Header";
import HeroSection from "../about/HeroSection";
import OurPresenceSection from "../about/OurPresenceSection";
import ContactUs from "../pricing/ContactUs";
import { contactInfo } from "./contactInfo";

export const metadata = {
  title: "Contact",
};

const page = () => {
  return (
    <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
      <Headercopy />
      <HeroSection />
      <ContactUs contactInfo={contactInfo} />;
      <OurPresenceSection />
      <section className="bg-[#F9FAFC]">
        <Footer />
      </section>
    </div>
  );
};

export default page;
