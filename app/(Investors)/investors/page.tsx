// app/investors/page.tsx
import { Metadata } from "next";
import HeroSection from "@/components/investors/HeroSection";
import ProblemSection from "@/components/investors/ProblemSection";
import SolutionSection from "@/components/investors/SolutionSection";
import MarketOpportunity from "@/components/investors/MarketOpportunity";
import BusinessModel from "@/components/investors/BusinessModel";
import TractionMetrics from "@/components/investors/TractionMetrics";
import CompetitiveAdvantage from "@/components/investors/CompetitiveAdvantage";
import TeamSection from "@/components/investors/TeamSection";
import InvestmentAsk from "@/components/investors/InvestmentAsk";
import ContactCTA from "@/components/investors/ContactCTA";
import DemoVideo from "@/components/DemoVideo";

export const metadata: Metadata = {
  title: "Investors | Sparta - Transforming Indian Youth Through Sports",
  description:
    "Join us in building the future of youth development in India. $2.3B market opportunity with clear path to profitability.",
  openGraph: {
    title: "Invest in Sparta - Youth Sports Revolution",
    description:
      "Addressing India's youth development crisis through competitive sports ecosystem",
    images: ["/og-investors.jpg"],
  },
};

export default function InvestorsPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <MarketOpportunity />
      <TractionMetrics />
      <BusinessModel />
      <CompetitiveAdvantage />
      <DemoVideo
        title="Sparta platform demo"
        subtitle="Clubs, evaluations, match scheduling, and GameTube—end to end."
        posterSrc="/sparta.png"
        mp4Src="/demo.mp4"
      />
      <TeamSection />
      <InvestmentAsk />
      <ContactCTA />
    </main>
  );
}
