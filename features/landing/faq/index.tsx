import FaqAccordion from "./faq-accordion";

const FaqSection = () => {
  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-black-50 px-6 py-16 md:px-8 md:py-20 lg:scroll-mt-28"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-lg bg-white px-6 py-8 md:grid-cols-[1fr_2fr] md:gap-12 md:px-9 md:py-12">
        <div className="text-center md:text-right">
          <p className="text-2xl font-extrabold text-black-900">FAQ</p>

          <h2 className="mt-6 text-lg font-extrabold text-black-900 md:text-xl">
            سوالات متداولی که از ما می‌پرسید
          </h2>

          <p className="mt-4 text-sm font-medium leading-7 text-black-500">
            سوالات متداولی که ممکن است نیاز شما نیز باشند، در اینجا پاسخ داده
            شده‌اند.
          </p>
        </div>

        <FaqAccordion />
      </div>
    </section>
  );
};

export default FaqSection;
