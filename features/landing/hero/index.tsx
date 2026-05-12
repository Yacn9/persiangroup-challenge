import HeroContent from "./hero-content";
import HeroVisual from "./hero-visual";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="scroll-mt-24 overflow-x-hidden bg-white lg:scroll-mt-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-14">
          <HeroVisual />
          <HeroContent />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
