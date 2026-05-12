"use client";

import { motion } from "framer-motion";
import ChatBubbleIcon from "@/components/icons/chat-bubble-icon";

const HeroChatBubbles = () => {
  return (
    <div className="absolute pointer-events-none flex flex-col top-12 -left-8 md:top-16 xl:top-28 xl:-left-21">
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.35 }}
      >
        <ChatBubbleIcon
          aria-hidden="true"
          className="w-18 sm:w-22 md:w-24 lg:w-40 h-auto aspect-8/3 mr-8 -scale-x-100 drop-shadow-lg"
          bubbleClassName="fill-background"
          dotClassName="fill-gray-900"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.35 }}
      >
        <ChatBubbleIcon
          aria-hidden="true"
          className="w-18 sm:w-22 md:w-24 lg:w-40 h-auto aspect-8/3 drop-shadow-lg"
          bubbleClassName="fill-gray-100"
          dotClassName="fill-gray-700"
        />
      </motion.div>
    </div>
  );
};

export default HeroChatBubbles;
