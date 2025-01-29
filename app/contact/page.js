import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Footer from "@/components/Footer";
import {
  ArrowNarrowRightIcon,
  AtSymbolIcon,
  CodeIcon,
  ChatIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import Header from "@/components/Header";
import ContactForm from "@/components/contact/ContactForm";
import Features from "@/components/contact/Features";
import Feedback from "@/components/contact/Feedback";
import ContactUs from "../pricing/ContactUs";
import Headercopy from "@/components/Headercopy";
import { contactInfo } from "./contactInfo";
import OurPresenceSection from "../about/OurPresenceSection";
import HeroSection from "../about/HeroSection";

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
