import HeroContent from "./components/hero-content";
import HeroVisual from "./components/hero-visual";

const HeroSection = () => {
  return (
    <section
      className="bg-background px-6 pb-20 pt-14 text-foreground"
      dir="rtl"
    >
      <div className="mx-auto flex w-full max-w-[390px] flex-col items-center">
        <HeroVisual />
        <HeroContent />
      </div>
    </section>
  );
};

export default HeroSection;
