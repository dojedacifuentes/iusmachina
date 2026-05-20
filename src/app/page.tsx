import { HeroSection } from '@/components/sections/HeroSection';
import { IusMachinaSection } from '@/components/sections/IusMachinaSection';
import { PromptLabSection } from '@/components/sections/PromptLabSection';
import { ToolkitSection } from '@/components/sections/ToolkitSection';
import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { SectorsSection } from '@/components/sections/SectorsSection';
import { DemoLabSection } from '@/components/sections/DemoLabSection';
import { WorkshopsSection } from '@/components/sections/WorkshopsSection';
import { MethodSection } from '@/components/sections/MethodSection';
import { CybersecuritySection } from '@/components/sections/CybersecuritySection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IusMachinaSection />
      <PromptLabSection />
      <ToolkitSection />
      <WhatWeDoSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <SectorsSection />
      <DemoLabSection />
      <WorkshopsSection />
      <MethodSection />
      <CybersecuritySection />
      <ContactSection />
    </>
  );
}
