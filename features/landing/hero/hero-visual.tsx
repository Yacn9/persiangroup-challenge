import Image from "next/image";
import HeroChatBubbles from "./hero-chat-bubbles";
import HeroSocialIcons from "./hero-social-icons";

const HeroVisual = () => {
  return (
    <div className="order-1 flex w-full items-center justify-center md:order-2 border border-gray-100 border-b-0 rounded-lg md:border-none">
      <div className="relative aspect-square w-full max-w-56 sm:max-w-2xs md:max-w-xs lg:max-w-120">
        <Image
          src="/images/marketing-campaign.png"
          alt="کمپین‌های بازاریابی و تبلیغاتی"
          fill
          priority
          className="object-contain mt-7"
        />

        <HeroChatBubbles />
        <HeroSocialIcons />
      </div>
    </div>
  );
};

export default HeroVisual;
