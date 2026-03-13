import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | ColorSwitch",
  description: "ColorSwitch terms of service.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Terms of Service</h1>
          <p className="mt-2 text-sm text-gray-400">Last updated: March 10, 2026</p>
          <div className="mt-8 space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Acceptance of Terms</h2>
            <p>By using ColorSwitch, you agree to these Terms. If you disagree, please do not use the Service.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Description of Service</h2>
            <p>ColorSwitch provides free, browser-based color format conversion tools. All processing runs in your browser.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Use of the Service</h2>
            <p>You may use ColorSwitch for any lawful purpose, personal and commercial.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">No Warranty</h2>
            <p>Provided &quot;as is&quot; without warranties. Color conversions may have minor rounding differences due to color space mathematics.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Limitation of Liability</h2>
            <p>We are not liable for any indirect, incidental, special, or consequential damages.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Changes</h2>
            <p>We may update these terms. Continued use constitutes acceptance.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contact</h2>
            <p>Questions? legal@toolboxlite.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
