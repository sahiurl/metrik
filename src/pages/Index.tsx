
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ClientLogos } from "@/components/ClientLogos";
import { KeyMetrics } from "@/components/KeyMetrics";
import { ValueProposition } from "@/components/ValueProposition";
import { ComparisonGrid } from "@/components/ComparisonGrid";
import { ProductOfferings } from "@/components/ProductOfferings";
import { PricingSection } from "@/components/PricingSection";
import { CaseStudy } from "@/components/CaseStudy";
import { BespokeSection } from "@/components/BespokeSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFBF9] via-purple-50/30 to-blue-50/30 font-inter">
      <Navigation />
      <HeroSection />
      <ClientLogos />
      <KeyMetrics />
      <ValueProposition />
      <ComparisonGrid />
      <ProductOfferings />
      <PricingSection />
      <CaseStudy />
      <BespokeSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
