"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Add, Minus } from "iconsax-reactjs";
import { useState } from "react";

import faqItems from "./faq.data";

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4" dir="rtl">
      {faqItems.map((item, index) => {
        const isOpen = activeIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <article
            key={item.question}
            className="rounded-lg border border-black-100 bg-white"
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setActiveIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right"
            >
              <span className="text-sm font-bold text-black-800">
                {item.question}
              </span>

              <span
                aria-hidden="true"
                className="flex size-6 shrink-0 items-center justify-center rounded-full border border-black-200 text-black-700"
              >
                {isOpen ? (
                  <Minus aria-hidden="true" size={14} color="currentColor" />
                ) : (
                  <Add aria-hidden="true" size={14} color="currentColor" />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.section
                  id={panelId}
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-right text-sm font-medium leading-7 text-black-500">
                    {item.answer}
                  </p>
                </motion.section>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
