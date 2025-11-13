import Hero from './Components/Hero';
import AboutSection from './Components/AboutSection';
import ResearchSection from './Components/ResearchSection';
import PublicationsList from './Components/PublicationsList';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ResearchSection />
      <PublicationsList />
    </>
  );
}