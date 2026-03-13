"use client";
import { useState } from "react";
import { faqData } from "@/data/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqData.map((item, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.q}</span>
                <span className="ml-2 text-gray-400 transition-transform duration-200" style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
              </button>
              {open === i && (
                <div className="border-t border-gray-100 px-5 py-4 text-sm leading-relaxed text-gray-600 dark:border-gray-700 dark:text-gray-300 animate-fade-in">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
