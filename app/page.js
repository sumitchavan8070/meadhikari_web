"use client";
import Collection from "@/components/Collection";
import Company from "@/components/company";
import ContentSectionHomePageFirst from "@/components/ContentSectionHomePageFirst";
import FAQ from "@/components/FAQ";
import Features from "@/components/features";
import FeaturesCard from "@/components/featurescard";
import Footer from "@/components/Footer";
import Headercopy from "@/components/Headercopy";
import Help from "@/components/help";
import HeroBanner from "@/components/HeroBanner";
import HomePageBlogSection from "@/components/HomePageBlogSection";
import OfferBannerSecond from "@/components/OfferBannerSecond";
import OfferStrip from "@/components/OfferStrip";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import Support from "@/components/support";
import Testimonials from "@/components/Testimonials";
import TestSeries from "@/components/TestSeries";
import OurPresenceSection from "./about/OurPresenceSection";
import PricePage from "./pricing/PricePage";

export default function Home() {
  return (
    <div className="pt-[23%] sm:pt-[23%] md:pt-[5%]">
      <OfferStrip />
      <Headercopy />
      <HeroBanner />
      {/* <Stats /> */}
      {/* <section className="bg-[#FFFFFF]">
        <Features />
      </section> */}
      {/* <Help /> */}
      {/* <Support /> */}
      {/* <Company /> */}
      {/* <TestSeries /> */}

      {/* <ContentSectionHomePageFirst /> */}
      <OfferBannerSecond />

      {/* <HomePageBlogSection /> */}

      {/* <Pricing /> */}
      <PricePage />
      <OurPresenceSection />

      <Testimonials />
      <FAQ />
      <section className="bg-[#F9FAFC]">
        <Footer />
      </section>
    </div>
  );
}
