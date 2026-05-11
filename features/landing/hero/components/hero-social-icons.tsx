"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  MessageFavorite,
  MessageText,
  Youtube,
} from "iconsax-reactjs";

const SOCIAL_ICONS = [
  {
    label: "Instagram",
    icon: Instagram,
    className: "left-[7%] top-[64%]",
  },
  {
    label: "Facebook",
    icon: Facebook,
    className: "left-[15%] top-[77%]",
  },
  {
    label: "Youtube",
    icon: Youtube,
    className: "left-[2%] top-[88%]",
  },
  {
    label: "Message",
    icon: MessageText,
    className: "right-[7%] top-[22%]",
  },
  {
    label: "Favorite message",
    icon: MessageFavorite,
    className: "right-[2%] top-[37%]",
  },
];

const HeroSocialIcons = () => {
  return (
    <>
      {SOCIAL_ICONS.map(({ label, icon: Icon, className }, index) => (
        <motion.span
          key={label}
          className={`absolute flex h-6 w-6 items-center justify-center rounded-md bg-white text-[#7C3FDB] shadow-[0_6px_14px_rgba(124,63,219,0.16)] ${className}`}
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 + index * 0.08, duration: 0.35 }}
        >
          <Icon
            aria-hidden="true"
            color="currentColor"
            size={16}
            variant="Bold"
          />
        </motion.span>
      ))}
    </>
  );
};

export default HeroSocialIcons;
