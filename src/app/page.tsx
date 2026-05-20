import { HeroSection } from '@/components/sections/HeroSection';
import { AIEvaluationSection } from '@/components/sections/AIEvaluationSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { SavingsSimulator } from '@/components/sections/SavingsSimulator';
import { IusMachinaSection } from '@/components/sections/IusMachinaSection';
import { PromptLabSection } from '@/components/sections/PromptLabSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { MethodSection } from '@/components/sections/MethodSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { CybersecuritySection } from '@/components/sections/CybersecuritySection';
import { WorkshopsSection } from '@/components/sections/WorkshopsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AIEvaluationSection />
      <ProblemSection />
      <SolutionsSection />
      <SavingsSimulator />
      <IusMachinaSection />
      <PromptLabSection />
      <PortfolioSection />
      <MethodSection />
      <AboutSection />
      <CybersecuritySection />
      <WorkshopsSection />
      <ContactSection />
    </>
  );
}
