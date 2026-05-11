"use client";

import { motion, type Transition } from "framer-motion";

import ChatBubbleIcon from "@/components/icons/chat-bubble-icon";

const chatBubbleTransition: Transition = {
  duration: 2.4,
  ease: "easeInOut",
  repeat: Infinity,
};

const chatBubbleMotion = {
  animate: {
    y: [0, -5, 0],
  },
  transition: chatBubbleTransition,
};

const HeroChatBubbles = () => {
  return (
    <>
      <motion.div
        className="absolute left-2 top-7 md:left-4 md:top-16"
        animate={chatBubbleMotion.animate}
        transition={chatBubbleMotion.transition}
      >
        <ChatBubbleIcon
          aria-hidden="true"
          className="h-[39px] w-[80px] drop-shadow-[0_5px_7px_rgba(0,0,0,0.1)] md:h-[55px] md:w-[115px]"
          bubbleClassName="fill-white"
          dotClassName="fill-[#6F6F6F]"
        />
      </motion.div>

      <motion.div
        className="absolute left-[17%] top-[76px] md:left-[15%] md:top-[142px]"
        animate={chatBubbleMotion.animate}
        transition={{ ...chatBubbleMotion.transition, delay: 0.25 }}
      >
        <ChatBubbleIcon
          aria-hidden="true"
          className="h-[34px] w-[72px] -scale-x-100 drop-shadow-[0_5px_7px_rgba(0,0,0,0.08)] md:h-[50px] md:w-[106px]"
          bubbleClassName="fill-[#E9E9E9]"
          dotClassName="fill-[#8A8A8A]"
        />
      </motion.div>
    </>
  );
};

export default HeroChatBubbles;
