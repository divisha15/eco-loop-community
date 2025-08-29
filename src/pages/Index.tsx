import Hero from "@/components/Hero";
import ProcessSteps from "@/components/ProcessSteps";
import Features from "@/components/Features";
import PricingTiers from "@/components/PricingTiers";
import CommunityImpact from "@/components/CommunityImpact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProcessSteps />
      <Features />
      <PricingTiers />
      <CommunityImpact />
      <Footer />
    </div>
  );
};

export default Index;