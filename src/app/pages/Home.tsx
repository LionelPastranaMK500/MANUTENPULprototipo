import { HeroSection } from "../components/home/HeroSection";
import { TrustBar } from "../components/home/TrustBar";
import { ServicesGrid } from "../components/home/ServicesGrid";
import { StatsSection } from "../components/home/StatsSection";
import { BlogSection } from "../components/home/BlogSection";
import { TrustpilotCard } from "../components/home/TrustpilotCard";
import { ContactForm } from "../components/home/ContactForm";

export function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <StatsSection />
      <BlogSection />
      <TrustpilotCard />
      <ContactForm />
    </div>
  );
}
