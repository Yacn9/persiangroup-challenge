import HeroContent from "./hero-content";
import HeroVisual from "./hero-visual";

const HeroSection = () => {
  return (
    <section className="w-full bg-white overflow-x-hidden">
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
