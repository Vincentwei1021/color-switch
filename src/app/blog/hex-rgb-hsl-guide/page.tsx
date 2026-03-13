import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HEX vs RGB vs HSL: A Complete Guide to CSS Color Formats",
  description: "Understand the differences between HEX, RGB, and HSL color formats for CSS. When to use each one, conversion formulas, and practical examples for designers and developers.",
  keywords: ["hex to rgb", "rgb vs hsl", "css color formats", "hex color code", "color conversion guide"],
  alternates: { canonical: "/blog/hex-rgb-hsl-guide" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "HEX vs RGB vs HSL: A Complete Guide to CSS Color Formats",
  description: "Understand the differences between HEX, RGB, and HSL color formats for CSS. When to use each one, conversion formulas, and practical examples for designers and developers.",
  datePublished: "2026-03-10",
  dateModified: "2026-03-10",
  author: { "@type": "Organization", name: "ColorSwitch" },
  publisher: { "@type": "Organization", name: "ColorSwitch" },
};

export default function HexRgbHslGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <article className="mx-auto max-w-3xl">
          <Link href="/blog" className="text-sm text-pink-600 dark:text-pink-400 hover:underline">← Back to Blog</Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            HEX vs RGB vs HSL: A Complete Guide to CSS Color Formats
          </h1>
          <time className="text-sm text-gray-400">March 10, 2026</time>

          <div className="mt-8 space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              CSS offers multiple ways to specify colors, and choosing the right format can make your stylesheets more readable, maintainable, and efficient. The three most common formats — HEX, RGB, and HSL — each have distinct strengths. This guide explains how each works, when to use them, and how to convert between them.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">HEX Colors: The Classic</h2>
            <p>
              HEX colors are the most widely used format in CSS and design tools. A HEX color code is a six-character string preceded by a hash symbol, where each pair of characters represents the red, green, and blue channels in hexadecimal (base-16) notation.
            </p>
            <pre className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4 text-sm overflow-x-auto"><code>{`/* Full 6-digit HEX */
color: #ec4899;

/* 3-digit shorthand (when each pair is identical) */
color: #f0f;    /* equivalent to #ff00ff */

/* 8-digit HEX with alpha (transparency) */
color: #ec489980;   /* 50% opacity */`}</code></pre>
            <p>
              <strong>When to use HEX:</strong> HEX is ideal for design tokens, style guides, and any context where you need a compact, universally recognized color value. Every design tool (Figma, Sketch, Photoshop) exports HEX by default. It&apos;s also the most common format in existing codebases.
            </p>
            <p>
              <strong>Limitation:</strong> HEX values are not intuitive to read. Can you tell what color <code>#7c3aed</code> is without a tool? Probably not. That&apos;s where RGB and HSL come in.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">RGB Colors: Direct Channel Control</h2>
            <p>
              RGB specifies colors by their red, green, and blue channel values, each ranging from 0 to 255. It&apos;s the format closest to how screens actually display color — by mixing light from red, green, and blue sub-pixels.
            </p>
            <pre className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4 text-sm overflow-x-auto"><code>{`/* Standard RGB */
color: rgb(236, 72, 153);

/* Modern syntax (CSS Color Level 4, no commas) */
color: rgb(236 72 153);

/* With alpha (transparency) */
color: rgb(236 72 153 / 0.5);

/* Legacy rgba() — still works but modern syntax preferred */
color: rgba(236, 72, 153, 0.5);`}</code></pre>
            <p>
              <strong>When to use RGB:</strong> RGB is useful when you need to programmatically manipulate individual color channels — for example, in JavaScript canvas operations, image processing, or when interpolating between colors. It&apos;s also more readable than HEX since the values are in familiar decimal notation.
            </p>
            <p>
              <strong>Limitation:</strong> RGB doesn&apos;t map well to human color perception. If you have <code>rgb(236, 72, 153)</code> and want a &quot;lighter version,&quot; which values do you change? All three? By how much? This is where HSL shines.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">HSL Colors: Human-Friendly</h2>
            <p>
              HSL stands for Hue, Saturation, and Lightness. It models colors the way humans naturally think about them: &quot;I want a blue (hue 240°) that&apos;s very vivid (saturation 100%) and medium brightness (lightness 50%).&quot;
            </p>
            <pre className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4 text-sm overflow-x-auto"><code>{`/* Standard HSL */
color: hsl(330, 81%, 60%);

/* Modern syntax */
color: hsl(330 81% 60%);

/* With alpha */
color: hsl(330 81% 60% / 0.5);

/* The power of HSL: creating color variations */
--primary: hsl(330, 81%, 60%);
--primary-light: hsl(330, 81%, 80%);   /* same hue, lighter */
--primary-dark: hsl(330, 81%, 40%);    /* same hue, darker */
--primary-muted: hsl(330, 30%, 60%);   /* same hue, less saturated */`}</code></pre>
            <p>
              <strong>When to use HSL:</strong> HSL is the best format for <em>creating color systems</em>. When building a design system, you can define a base hue and generate an entire palette by varying saturation and lightness. It&apos;s also the most intuitive format for CSS custom properties (variables) because adjustments are meaningful: change lightness to get lighter/darker, change saturation to get more/less vivid.
            </p>
            <p>
              <strong>Limitation:</strong> HSL&apos;s lightness isn&apos;t perceptually uniform. A yellow at 50% lightness looks much brighter than a blue at 50% lightness because human eyes perceive these hues differently. This is the problem that OKLCH solves.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Quick Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="py-2 text-left font-semibold">Feature</th>
                    <th className="py-2 text-left font-semibold">HEX</th>
                    <th className="py-2 text-left font-semibold">RGB</th>
                    <th className="py-2 text-left font-semibold">HSL</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Readability", "Low", "Medium", "High"],
                    ["Compact", "✅ 7 chars", "❌ ~18 chars", "❌ ~18 chars"],
                    ["Design tools", "✅ Default", "✅ Common", "⚠️ Some"],
                    ["Color manipulation", "❌ Hard", "⚠️ Possible", "✅ Easy"],
                    ["Palette generation", "❌", "❌", "✅ Best"],
                    ["Perceptual uniform", "❌", "❌", "❌"],
                    ["Browser support", "All", "All", "All"],
                  ].map(([feat, hex, rgb, hsl]) => (
                    <tr key={feat} className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-2 font-medium">{feat}</td>
                      <td className="py-2">{hex}</td>
                      <td className="py-2">{rgb}</td>
                      <td className="py-2">{hsl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How to Convert Between Formats</h2>
            <p>
              The fastest way to convert between HEX, RGB, and HSL is to use an online tool like <Link href="/" className="text-pink-600 dark:text-pink-400 hover:underline">ColorSwitch</Link>. Type or paste a color in any format, and all other formats update instantly with one-click copy buttons for CSS values.
            </p>
            <p>
              For programmatic conversion in JavaScript, here&apos;s a quick HEX to RGB function:
            </p>
            <pre className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4 text-sm overflow-x-auto"><code>{`function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

hexToRgb('#ec4899'); // { r: 236, g: 72, b: 153 }`}</code></pre>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">The Future: OKLCH</h2>
            <p>
              If you&apos;re starting a new project in 2026, consider using <strong>OKLCH</strong> as your primary color format. It solves HSL&apos;s perceptual uniformity problem and is supported in all modern browsers. Check out our article on <Link href="/blog/oklch-css-colors" className="text-pink-600 dark:text-pink-400 hover:underline">OKLCH: The Future of CSS Colors</Link> for a deep dive.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Conclusion</h2>
            <p>
              There&apos;s no single &quot;best&quot; color format — each has its place. Use <strong>HEX</strong> for design tokens and compact notation, <strong>RGB</strong> for programmatic channel manipulation, <strong>HSL</strong> for building intuitive color systems, and <strong>OKLCH</strong> for perceptually accurate color work. The key is understanding what each format offers so you can choose the right one for each situation.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
