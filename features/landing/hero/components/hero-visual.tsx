"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import CircleIcon from "@/components/icons/circle-icon";

import HeroChatBubbles from "./hero-chat-bubbles";
import HeroSocialIcons from "./hero-social-icons";

const HeroVisual = () => {
  return (
    <motion.div
      className="relative h-[265px] w-full max-w-[344px] md:h-[430px] md:max-w-[560px] md:flex-1"
      initial={{ opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <CircleIcon
        aria-hidden="true"
        className="absolute left-1/2 top-5 h-[216px] w-[216px] -translate-x-1/2 md:top-4 md:h-[390px] md:w-[390px]"
      />

      <motion.div
        className="absolute inset-x-0 top-2 mx-auto h-[238px] w-full md:top-10 md:h-[348px] md:max-w-[520px]"
        initial={{ opacity: 0, y: 20, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/laptop.png"
          alt=""
          width={580}
          height={489}
          priority
          className="h-full w-full object-contain drop-shadow-[0_22px_18px_rgba(0,0,0,0.12)]"
        />
      </motion.div>

      <HeroChatBubbles />
      <HeroSocialIcons />
    </motion.div>
  );
};

export default HeroVisual;
