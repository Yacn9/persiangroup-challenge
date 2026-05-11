import IconBase, { type IconProps } from "./base-icon";

const CircleIcon = ({ size = 216, title, ...props }: IconProps) => {
  return (
    <IconBase size={size} viewBox="0 0 217 217" title={title} {...props}>
      <circle
        cx="108.974"
        cy="108.974"
        r="108.522"
        fill="#f2ecfc"
        stroke="#e3e3e3"
        strokeWidth="0.904348"
        strokeDasharray="0.9 3.62"
      />

      <circle
        cx="108.974"
        cy="108.972"
        r="91.3867"
        fill="white"
        stroke="#e3e3e3"
        strokeWidth="0.904348"
        strokeDasharray="0.9 3.62"
      />

      <circle
        cx="108.974"
        cy="108.974"
        r="74.2517"
        fill="#f2ecfc"
        stroke="#e3e3e3"
        strokeWidth="0.904348"
        strokeDasharray="0.9 3.62"
      />

      <circle
        cx="108.974"
        cy="108.975"
        r="57.1167"
        stroke="#ECECEC"
        strokeWidth="0.904348"
        strokeDasharray="0.9 3.62"
      />

      <defs>
        <radialGradient
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(108.974 279.896) rotate(-90) scale(170.922)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#FAFAFA" />
        </radialGradient>
      </defs>
    </IconBase>
  );
};

export default CircleIcon;
