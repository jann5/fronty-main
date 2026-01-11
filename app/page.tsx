import { Header } from '@/components/Header';
import { HeroVideoSection } from '@/components/sections/HeroVideoSection';
import { IntroSection } from '@/components/sections/IntroSection';
import { ModelsCarousel } from '@/components/sections/ModelsCarousel';
import { PhilosophySection } from '@/components/sections/PhilosophySection';

export default function Home() {
  return (
    <main className="bg-primary-white min-h-screen">
      <Header />
      <HeroVideoSection />
      <IntroSection />
      <ModelsCarousel />
      <PhilosophySection />
    </main>
  );
}
