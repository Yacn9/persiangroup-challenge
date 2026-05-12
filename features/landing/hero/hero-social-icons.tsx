"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Like,
  LikeTag,
  MessageText1,
  Youtube,
} from "iconsax-reactjs";

import { cn } from "@/libs/cn.util";

const SOCIAL_ICONS = [
  {
    label: "ig",
    icon: Instagram,
    className: "-left-9 top-34 md:-left-8 md:top-44 lg:-left-10 lg:top-70",
  },
  {
    label: "fb",
    icon: Facebook,
    className: "-left-1 top-40 md:-left-2 md:top-52 lg:-left-2 lg:top-80",
  },
  {
    label: "youtube",
    icon: Youtube,
    className: "-left-10 top-44 md:-left-10 md:top-60 lg:-left-12 lg:top-88",
  },
  {
    label: "message",
    icon: MessageText1,
    className: "-right-3 top-24 md:right-0 md:top-38 lg:-right-1 lg:top-38",
  },
  {
    label: "love",
    icon: Like,
    className: "-right-10 top-18 md:-right-6 md:top-29 lg:-right-8 lg:top-26",
  },
  {
    label: "like",
    icon: LikeTag,
    className: "-right-2 top-12 md:right-0 md:top-20 lg:-right-1 lg:top-16",
  },
];

const HeroSocialIcons = () => {
  return (
    <>
      {SOCIAL_ICONS.map(({ label, icon: Icon, className }, index) => (
        <motion.span
          key={label}
          className={cn(
            "absolute flex items-center justify-center rounded-md border border-gray-50",
            className,
          )}
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 + index * 0.08, duration: 0.35 }}
        >
          <Icon
            aria-hidden="true"
            variant="Bold"
            className="size-4 xl:size-6 text-primary"
          />
        </motion.span>
      ))}
    </>
  );
};

export default HeroSocialIcons;
