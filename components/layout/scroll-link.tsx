"use client";

import Link from "next/link";
import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type MouseEvent,
} from "react";

interface ScrollLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  onNavigate?: () => void;
}

const scrollToHash = (href: string) => {
  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", window.location.pathname);
    return;
  }

  const targetId = href.replace(/^#/, "");
  const targetElement = document.getElementById(targetId);

  if (!targetElement) {
    return;
  }

  targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", href);
};

const ScrollLink = forwardRef<HTMLAnchorElement, ScrollLinkProps>(
  ({ href, onClick, onNavigate, ...props }, ref) => {
    const hrefString = href.toString();

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);

      if (event.defaultPrevented || !hrefString.startsWith("#")) {
        return;
      }

      event.preventDefault();
      scrollToHash(hrefString);
      onNavigate?.();
    };

    return <Link ref={ref} href={href} onClick={handleClick} {...props} />;
  },
);

ScrollLink.displayName = "ScrollLink";

export default ScrollLink;
