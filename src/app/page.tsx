import HeroSection from '../components/sections/HeroSection';
import ProgramsSection from '../components/sections/ProgramsSection';
import ImpactStatsSection from '../components/sections/ImpactStatsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import PartnersSection from '../components/sections/PartnersSection';
import CTASection from '../components/sections/CTASection';
import ContactSection from '../components/sections/ContactSection';
import { getPrograms } from '../lib/contentful';

export default async function HomePage() {
  const programs = await getPrograms();

  return (
    <>
      <HeroSection />
      <ProgramsSection programs={programs} />
      <ImpactStatsSection />
      <ProjectsSection />
      <PartnersSection />
      <CTASection />
      <ContactSection />
    </>
  );
}