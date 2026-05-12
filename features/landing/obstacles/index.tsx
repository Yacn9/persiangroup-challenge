import ObstaclesSwiper from "./obstacles-swiper";

const ObstaclesSection = () => {
  return (
    <section className="relative overflow-hidden bg-black-50 pb-16 lg:pb-9 lg:pt-7">
      <div className="absolute inset-x-0 top-0 h-54 bg-linear-to-b from-secondary via-primary to-primary lg:h-60" />

      <div className="relative mx-auto w-full max-w-7xl pt-11 lg:pt-0">
        <h2 className="mx-auto px-6 text-center text-lg font-bold text-white lg:max-w-none lg:text-xl ">
          موانع رایج در دریافت خدمات تولید محتوا برای کسب‌وکارها
        </h2>

        <ObstaclesSwiper />
      </div>
    </section>
  );
};

export default ObstaclesSection;
