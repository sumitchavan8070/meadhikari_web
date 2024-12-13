"use client";
import Collection from "@/components/Collection";
import Company from "@/components/company";
import Features from "@/components/features";
import FeaturesCard from "@/components/featurescard";
import Footer from "@/components/Footer";
import Help from "@/components/help";
import HeroBanner from "@/components/HeroBanner";
import Support from "@/components/support";

export default function Home() {
  return (
    <div className="">

      <HeroBanner />
      <section className="bg-[#FFFFFF]">
        <Features />
      </section>

      <Help />
      <Support />

      <Company />


      <section className='bg-[#F9FAFC]'>
        <Footer />
      </section>

    </div>
  );
}
