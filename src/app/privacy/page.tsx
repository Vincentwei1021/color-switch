import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | ColorSwitch",
  description: "ColorSwitch privacy policy. All conversions happen in your browser.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-400">Last updated: March 10, 2026</p>
          <div className="mt-8 space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Your Data Stays on Your Device</h2>
            <p>ColorSwitch is a <strong>100% client-side tool</strong>. All color conversions happen entirely in your web browser. No data is sent to servers.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">No Data Collection</h2>
            <p>We do not collect, store, or transmit any color data you convert. No cookies for tracking, no accounts required.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Analytics</h2>
            <p>We may use privacy-friendly analytics for general traffic patterns. No personal information collected.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Advertising</h2>
            <p>We may display ads through Google AdSense. You can opt out of personalized ads at <a href="https://adssettings.google.com" className="text-pink-600 dark:text-pink-400 hover:underline" rel="noopener noreferrer" target="_blank">Google Ad Settings</a>.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Local Storage</h2>
            <p>We use localStorage for theme preference only. This data never leaves your device.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contact</h2>
            <p>Questions? privacy@toolboxlite.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
