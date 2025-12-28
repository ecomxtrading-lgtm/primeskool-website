import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import WhyPrimeSkool from "@/components/WhyPrimeSkool";
import EntrepreneurVision from "@/components/EntrepreneurVision";
import ProductDiscovery from "@/components/ProductDiscovery";
import AboutCommunity from "@/components/AboutCommunity";
import Curriculum from "@/components/Curriculum";
import SuccessStories from "@/components/SuccessStories";
import Consultation from "@/components/Consultation";
import SupportProcess from "@/components/SupportProcess";
import LeadMagnet from "@/components/LeadMagnet";
import CaseLibrary from "@/components/CaseLibrary";
import Packages from "@/components/Packages";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import InView from "@/components/InView";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <InView>
        <Hero />
      </InView>
      <InView>
        <Marquee />
      </InView>
      <InView>
        <Features />
      </InView>
      <InView>
        <WhyPrimeSkool />
      </InView>
      <InView>
        <EntrepreneurVision />
      </InView>
      <InView>
        <ProductDiscovery />
      </InView>
      <InView>
        <AboutCommunity />
      </InView>
      <InView>
        <Curriculum />
      </InView>
      <InView>
        <SuccessStories />
      </InView>
      <InView>
        <Consultation />
      </InView>
      <InView>
        <SupportProcess />
      </InView>
      <InView>
        <LeadMagnet />
      </InView>
      <InView>
        <CaseLibrary />
      </InView>
      <InView>
        <Packages />
      </InView>
      <InView>
        <FAQ />
      </InView>
      <InView>
        <FinalCTA />
      </InView>
      <Footer />
    </div>
  );
};

export default Index;
