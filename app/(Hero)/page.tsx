import { MainLayout } from "@/components/layout/MainLayout";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { PersonaCards } from "@/components/landing/PersonaCards";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { TractionSection } from "@/components/landing/TractionSection";
import { WaitlistCTA } from "@/components/landing/WaitlistCTA";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <PersonaCards />
      <ProductPreview />
      <TractionSection />
      <WaitlistCTA />
      <Footer />
    </MainLayout>
  );
}
