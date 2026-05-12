"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CloseSquare,
  HamburgerMenu,
  ProfileCircle,
  SearchNormal1,
} from "iconsax-reactjs";
import { useEffect, useState } from "react";

import ScrollLink from "@/components/layout/scroll-link";
import Button from "@/components/ui/button";

const navItems = [
  { label: "خانه", href: "#hero" },
  { label: "طراحی سایت", href: "#hero" },
  { label: "کمپین‌های بازاریابی و تبلیغاتی", href: "#hero" },
  { label: "اتوماسیون و بازاریابی", href: "#consultation" },
  { label: "تولید محتوا", href: "#obstacles" },
  { label: "سئو", href: "#faq" },
  { label: "تماس با ما", href: "#consultation" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const openMenu = () => setIsMenuOpen(true);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 px-4 pt-4 backdrop-blur sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <nav
            aria-label="ناوبری اصلی"
            className="flex h-15 items-center justify-between bg-white px-3 shadow-[0_1px_0_rgba(20,20,20,0.04)] lg:h-20 lg:px-8"
          >
            <div className="flex gap-3">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="باز کردن منو"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                onClick={openMenu}
                className="rounded-lg border border-black-100 text-black-700 lg:hidden"
              >
                <HamburgerMenu
                  aria-hidden="true"
                  size={22}
                  color="currentColor"
                />
              </Button>
              <ScrollLink
                href="#hero"
                aria-label="لوگو"
                className="flex h-10 min-w-25 items-center justify-center rounded-xl bg-black-100 px-6 text-sm font-bold text-black-700"
              >
                logo
              </ScrollLink>
            </div>

            <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <ScrollLink
                    href={item.href}
                    className="whitespace-nowrap text-xs font-medium text-black-300 transition hover:text-black-900 xl:text-sm"
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="پروفایل"
                className="rounded-lg border border-black-100 text-black-700"
              >
                <ProfileCircle
                  aria-hidden="true"
                  size={22}
                  color="currentColor"
                />
              </Button>

              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="جستجو"
                className="rounded-lg border border-black-100 text-black-700"
              >
                <SearchNormal1
                  aria-hidden="true"
                  size={22}
                  color="currentColor"
                />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="بستن منو"
              className="fixed inset-0 z-60 bg-black-900/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            />

            <motion.aside
              id="mobile-navigation"
              dir="rtl"
              aria-label="منوی موبایل"
              className="fixed bottom-0 right-0 top-0 z-70 flex w-[min(320px,82vw)] flex-col bg-white px-6 py-6 shadow-[-20px_0_45px_rgba(20,20,20,0.18)] lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.32,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center justify-end">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label="بستن منو"
                  onClick={closeMenu}
                  className="rounded-lg border border-black-100 text-black-700"
                >
                  <CloseSquare
                    aria-hidden="true"
                    size={22}
                    color="currentColor"
                  />
                </Button>
              </div>

              <ul className="mt-8 flex flex-col divide-y divide-black-100">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <ScrollLink
                      href={item.href}
                      onNavigate={closeMenu}
                      className="block py-4 text-sm font-semibold text-black-700 transition hover:text-primary"
                    >
                      {item.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Header;
