"use client";
import Collection from "@/components/Collection";
import Company from "@/components/company";
import FAQ from "@/components/FAQ";
import Features from "@/components/features";
import FeaturesCard from "@/components/featurescard";
import Footer from "@/components/Footer";
import Headercopy from "@/components/Headercopy";
import Help from "@/components/help";
import HeroBanner from "@/components/HeroBanner";
import OfferStrip from "@/components/OfferStrip";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import Support from "@/components/support";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <OfferStrip />
      <Headercopy />
      <HeroBanner />
      <Stats />

      {/* <section className="bg-[#FFFFFF]">
        <Features />
      </section> */}

      {/* <Help /> */}
      {/* <Support /> */}

      {/* <Company /> */}

      <Pricing />

      <Testimonials />

      <FAQ />

      <section className="bg-[#F9FAFC]">
        <Footer />
      </section>
    </div>
  );
}
