import Button from "@/components/ui/button";
import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="order-2 text-center md:order-1 md:text-right font-bold">
      <h1 className="text-lg text-black-900 lg:text-2xl">
        کمپین‌های بازاریابی و تبلیغاتی
      </h1>

      <p className="mt-4.5 text-[14px] lg:text-lg text-black-500 mx-auto">
        آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوران رایگان ما
        به شما کمک می‌کنند تا مسیر موفقیت را پیدا کنید. همین حالا قدم اول را
        بردارید!
      </p>

      <p className="mt-4 text-xs font-semibold text-black-400 lg:text-base lg:font-bold lg:text-gray-900">
        جهت دریافت مشاوره رایگان با شماره زیر تماس بگیرید
      </p>

      <Button asChild className="mt-4 md:mt-9 min-w-36">
        <Link
          href="#contact"
          className="font-semibold text-xs lg:font-bold lg:text-lg"
        >
          دریافت مشاوره
        </Link>
      </Button>
    </div>
  );
};

export default HeroContent;
