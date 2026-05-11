import type { ReactNode, SVGProps } from "react";

interface IconBaseProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  title?: string;
  children: ReactNode;
}

const IconBase = ({
  size,
  width = size ?? 24,
  height = size ?? 24,
  viewBox = "0 0 24 24",
  title,
  children,
  ref,
  ...props
}: IconBaseProps) => {
  const isDecorative = !title;

  return (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={isDecorative}
      role={isDecorative ? undefined : "img"}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
};

export type IconProps = Omit<IconBaseProps, "children">;
export default IconBase;
