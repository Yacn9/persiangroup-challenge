import type { ComponentType } from "react";
import AdvertisingEffectIcon from "@/components/icons/advertising-effect-icon";
import AdvertisingIcon from "@/components/icons/advertising-icon";
import ExpensesIcon from "@/components/icons/expenses-icon";
import GrowthPlanIcon from "@/components/icons/growth-plan";
import ManagementComplexityIcon from "@/components/icons/management-complexity-icon";
import StrategyIcon from "@/components/icons/strategy-icon";
import TimeIcon from "@/components/icons/time-icon";
import WasteFundsIcon from "@/components/icons/waste-funds-icon";

export interface IObstacleData {
  title: string;
  description: string;
  icon: ComponentType;
}

const obstacles: Array<IObstacleData> = [
  {
    title: "نگرانی از هزینه‌های تبلیغات",
    description:
      "برخی افراد ممکن است تصور کنند که تبلیغات هزینه‌بر است؛ اما پرشین سایت با ارائه سود بالا، این هزینه‌ها را جبران می‌کند.",
    icon: ExpensesIcon,
  },
  {
    title: "ترس از پیچیدگی مدیریت",
    description:
      "مدیران ممکن است نگران دشواری مدیریت کمپین‌ها باشند، اما ما تمامی فرآیندها را به ساده‌ترین شکل ممکن ارائه می‌دهیم.",
    icon: ManagementComplexityIcon,
  },
  {
    title: "تصور زمان‌بر بودن نتایج",
    description:
      "برخی از افراد نگران این هستند که نتایج تبلیغات دیر به دست آید، در حالی که پرشین سایت با سرعت بالا، شما را در دستیابی به نتایج مطلوب یاری می‌کند.",
    icon: TimeIcon,
  },
  {
    title: "ناآگاهی از تاثیر تبلیغات",
    description:
      " بسیاری از افراد نمی‌دانند که کمپین‌های تبلیغاتی چگونه می‌توانند منجر به افزایش فروش شوند؛ ما این تأثیرات را به وضوح برای شما نمایش خواهیم داد.",
    icon: AdvertisingEffectIcon,
  },
  {
    title: "نبود استراتژی مشخص",
    description:
      "نگران هماهنگی با اهداف کسب‌وکار خود نباشید؛ پرشین سایت برنامه‌ای متناسب با نیازهای شما طراحی خواهد کرد.",
    icon: StrategyIcon,
  },
  {
    title: "عدم تخصص تیم در تبلیغات",
    description:
      "اگر تیم شما تجربه کافی در زمینه تبلیغات ندارد، ما تمامی فرآیندها را به صورت حرفه‌ای و با کیفیت بالا انجام خواهیم داد.",
    icon: AdvertisingIcon,
  },
  {
    title: "دغدغه هدر رفتن بودجه",
    description:
      " اگر نگران عدم کسب نتیجه هستید، پرشین سایت با برنامه‌ریزی دقیق به شما اطمینان می‌دهد که از بودجه خود به بهترین نحو استفاده خواهید کرد.",
    icon: WasteFundsIcon,
  },
  {
    title: "نداشتن برنامه برای رشد",
    description:
      "اگر استراتژی مشخصی برای رشد ندارید، پرشین سایت نقشه راه جامعی برای شما طراحی خواهد کرد.",
    icon: GrowthPlanIcon,
  },
] as const;

export default obstacles;
