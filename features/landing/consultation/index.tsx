import ConsultationForm from "./consultation-form";

const ConsultationSection = () => {
  return (
    <section
      id="consultation"
      className="scroll-mt-24 bg-gray-50 px-6 py-16 md:px-8 lg:scroll-mt-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-lg font-extrabold text-black-900 md:text-xl">
            فرم دریافت مشاوره
          </h2>

          <p className="mt-5 text-xs font-medium leading-7 text-black-600 md:text-sm">
            برای ارتقای بیزینس خود به دنبال فرصتی تازه هستید؟ فرم زیر را تکمیل
            کنید تا مشاوران ما به صورت کاملاً رایگان شما را راهنمایی کنند.
          </p>
        </div>

        <div className="mt-6">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
