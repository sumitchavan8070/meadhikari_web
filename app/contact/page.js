import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/solid";
import Footer from "@/components/Footer";
import { ArrowNarrowRightIcon, AtSymbolIcon, CodeIcon, ChatIcon, PhoneIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Header from "@/components/Header";
import ContactForm from "@/components/contact/ContactForm";
import Features from "@/components/contact/Features";
import Feedback from "@/components/contact/Feedback";

const page = () => {
  return (
    <section>
      <Header />

      <Features />
      <Feedback />
      <ContactForm />
      <section className='bg-[#F9FAFC]'>
        <Footer />
      </section>

    </section>

  )
};

export default page;
