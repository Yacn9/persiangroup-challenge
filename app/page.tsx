import ScrollReveal from "@/components/layout/motion/scroll-reveal";
import ConsultationSection from "@/features/landing/consultation";
import FaqSection from "@/features/landing/faq";
import HeroSection from "@/features/landing/hero";
import ObstaclesSection from "@/features/landing/obstacles";

const Home = () => {
  return (
    <main>
      <ScrollReveal>
        <HeroSection />
      </ScrollReveal>

      <ScrollReveal>
        <ObstaclesSection />
      </ScrollReveal>

      <ScrollReveal>
        <ConsultationSection />
      </ScrollReveal>

      <ScrollReveal>
        <FaqSection />
      </ScrollReveal>
    </main>
  );
};

export default Home;
