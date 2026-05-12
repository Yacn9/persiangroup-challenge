"use client";

import { motion, type Transition } from "framer-motion";

import IconBase, { type IconProps } from "./base-icon";

const DOTS = [
  { cx: 28.4869, delay: 0 },
  { cx: 42.9565, delay: 0.15 },
  { cx: 57.426, delay: 0.3 },
];

const cyMid = 14.9217;
const cyUp = 11.8;

const easeInOut: [number, number, number, number] = [0.42, 0, 0.58, 1];

const baseTransition: Transition = {
  duration: 2,
  repeat: Infinity,
  repeatType: "loop",
  ease: easeInOut,
};

interface ChatBubbleIconProps extends IconProps {
  color?: string;
  dotColor?: string;
  bubbleClassName?: string;
  dotClassName?: string;
}

const ChatBubbleIcon = ({
  size = 64,
  color = "#ECECEC",
  dotColor = "#8A8A8A",
  bubbleClassName,
  dotClassName,
  title,
  ...props
}: ChatBubbleIconProps) => {
  return (
    <IconBase size={size} viewBox="8 1 70 34" title={title} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4 1.8087C9.40109 1.8087 8.59131 2.61848 8.59131 3.61739V26.6783C8.59131 27.6772 9.40109 28.487 10.4 28.487H67.3161L74.8109 34.3652V28.487H75.9652C76.9641 28.487 77.7739 27.6772 77.7739 26.6783V3.6174C77.7739 2.61848 76.9641 1.8087 75.9652 1.8087H10.4Z"
        fill={color}
        className={bubbleClassName}
      />

      {DOTS.map(({ cx, delay }) => (
        <motion.circle
          key={cx}
          cx={cx}
          r="3.61739"
          fill={dotColor}
          className={dotClassName}
          animate={{
            cy: [cyMid, cyUp, cyMid],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            ...baseTransition,
            delay,
          }}
        />
      ))}
    </IconBase>
  );
};

export default ChatBubbleIcon;
