import HeroContent from "./components/hero-content";
import HeroVisual from "./components/hero-visual";

const HeroSection = () => {
  return (
    <section
      className="bg-background px-6 pb-20 pt-14 text-foreground md:px-10 md:pb-24 md:pt-20 lg:px-16"
      dir="rtl"
    >
      <div className="mx-auto flex w-full max-w-[390px] flex-col items-center md:max-w-[1064px] md:flex-row-reverse md:justify-between md:gap-12">
        <HeroVisual />
        <HeroContent />
      </div>
    </section>
  );
};

export default HeroSection;
