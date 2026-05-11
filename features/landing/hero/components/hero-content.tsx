const HeroContent = () => {
  return (
    <div className="mt-8 flex w-full flex-col items-center text-center">
      <h1 className="text-[22px] font-extrabold leading-[1.55] text-[#111111]">
        کمپین‌های بازاریابی و تبلیغاتی
      </h1>

      <p className="mt-5 max-w-[316px] text-[16px] font-semibold leading-[2] text-[#151515]">
        آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوره رایگان ما به
        شما کمک می‌کند تا مسیر موفقیت را پیدا کنید. همین حالا قدم اول را بردارید!
      </p>

      <p className="mt-6 text-[13px] font-medium leading-7 text-[#505050]">
        جهت دریافت مشاوره رایگان با شماره زیر تماس بگیرید
      </p>

      <button
        type="button"
        className="mt-5 h-[43px] rounded-lg bg-[#7C3FDB] px-8 text-[14px] font-bold text-white shadow-[0_10px_22px_rgba(124,63,219,0.2)] transition-transform active:scale-[0.98]"
      >
        دریافت مشاوره
      </button>
    </div>
  );
};

export default HeroContent;
