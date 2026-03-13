import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OKLCH: The Future of CSS Colors (and How to Use It Today)",
  description: "Why OKLCH is the recommended color format for modern CSS. How it works, browser support, migration from HSL, and practical examples for design systems.",
  keywords: ["oklch css", "oklch color", "css color level 4", "oklch vs hsl", "modern css colors"],
  alternates: { canonical: "/blog/oklch-css-colors" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "OKLCH: The Future of CSS Colors (and How to Use It Today)",
  description: "Why OKLCH is the recommended color format for modern CSS. How it works, browser support, migration from HSL, and practical examples for design systems.",
  datePublished: "2026-03-08",
  dateModified: "2026-03-08",
  author: { "@type": "Organization", name: "ColorSwitch" },
  publisher: { "@type": "Organization", name: "ColorSwitch" },
};

export default function OklchCssColors() {
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
            OKLCH: The Future of CSS Colors (and How to Use It Today)
          </h1>
          <time className="text-sm text-gray-400">March 8, 2026</time>

          <div className="mt-8 space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              The CSS Color Level 4 specification introduced several new color functions, and one stands out as a game-changer for web design: <strong>oklch()</strong>. Short for OKLab Lightness-Chroma-Hue, OKLCH is a perceptually uniform color space that solves long-standing problems with HSL and makes building accessible, consistent color palettes dramatically easier.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What&apos;s Wrong with HSL?</h2>
            <p>
              HSL (Hue, Saturation, Lightness) seems intuitive, but it has a fundamental flaw: <strong>its lightness channel is not perceptually uniform</strong>. This means that two colors with the same L value can look very different in brightness to the human eye.
            </p>
            <p>
              Try this experiment: create <code>hsl(60, 100%, 50%)</code> (bright yellow) and <code>hsl(240, 100%, 50%)</code> (bright blue). Both have L=50%, but the yellow looks dramatically brighter than the blue. This is because HSL&apos;s lightness is based on the mathematical midpoint of RGB channels, not on how human vision perceives brightness.
            </p>
            <p>
              This perceptual non-uniformity causes real problems in design systems. When you build a color palette by varying HSL lightness, the steps don&apos;t look evenly spaced. Contrast ratios are unpredictable. Accessible color pairs are hard to generate programmatically. OKLCH fixes all of this.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How OKLCH Works</h2>
            <p>
              OKLCH uses three channels, similar in concept to HSL but built on a perceptually accurate color model:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>L (Lightness):</strong> 0 = black, 1 = white. Unlike HSL, equal L values produce colors that genuinely look equally bright to human eyes.</li>
              <li><strong>C (Chroma):</strong> 0 = gray, higher = more vivid. Unlike saturation, chroma is an absolute measure — you can compare chroma values across different hues meaningfully.</li>
              <li><strong>H (Hue):</strong> 0-360 degrees on the color wheel, similar to HSL. But OKLCH&apos;s hue distribution is more perceptually even — the visual &quot;distance&quot; between hue steps is more consistent.</li>
            </ul>
            <pre className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4 text-sm overflow-x-auto"><code>{`/* OKLCH syntax */
color: oklch(0.656 0.199 349.8);
/*           L     C     H          */
/*     lightness chroma hue         */

/* With alpha */
color: oklch(0.656 0.199 349.8 / 0.5);

/* Using it in CSS custom properties */
:root {
  --pink-500: oklch(0.656 0.199 349.8);
  --pink-400: oklch(0.738 0.183 349.8);  /* lighter */
  --pink-600: oklch(0.564 0.205 349.8);  /* darker */
}`}</code></pre>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Why OKLCH Is Better for Design Systems</h2>
            <p>
              The perceptual uniformity of OKLCH makes it transformative for design systems and accessible color palettes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Predictable lightness steps:</strong> A 10-step lightness scale from L=0.1 to L=0.9 looks evenly spaced to the human eye. In HSL, the same scale looks uneven.</li>
              <li><strong>Reliable contrast ratios:</strong> Because lightness is perceptually accurate, you can predict WCAG contrast ratios from L values alone. If two colors have an L difference of 0.4+, they likely meet AA contrast requirements.</li>
              <li><strong>Consistent chroma across hues:</strong> In HSL, a &quot;fully saturated&quot; blue looks more vivid than a fully saturated yellow. In OKLCH, you can set the same chroma value across hues and get visually consistent vibrancy.</li>
              <li><strong>Better color interpolation:</strong> Gradients and animations in OKLCH space produce more natural-looking transitions with no muddy midpoints.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Browser Support in 2026</h2>
            <p>
              OKLCH has excellent browser support as of 2026:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chrome/Edge:</strong> Supported since version 111 (March 2023)</li>
              <li><strong>Safari:</strong> Supported since version 15.4 (March 2022)</li>
              <li><strong>Firefox:</strong> Supported since version 113 (May 2023)</li>
            </ul>
            <p>
              That covers over 95% of global browser usage. For the remaining edge cases, you can use a fallback:
            </p>
            <pre className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4 text-sm overflow-x-auto"><code>{`/* Fallback pattern */
.button {
  color: #ec4899;                        /* fallback */
  color: oklch(0.656 0.199 349.8);       /* modern browsers */
}

/* Or use @supports */
@supports (color: oklch(0 0 0)) {
  :root {
    --primary: oklch(0.656 0.199 349.8);
  }
}`}</code></pre>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Migrating from HSL to OKLCH</h2>
            <p>
              If you have an existing design system using HSL, here&apos;s how to migrate:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Step 1:</strong> Convert your existing HSL palette to OKLCH using <Link href="/" className="text-pink-600 dark:text-pink-400 hover:underline">ColorSwitch</Link>. Note the L, C, and H values for each color.</li>
              <li><strong>Step 2:</strong> Rebuild your lightness scale. Instead of HSL&apos;s arbitrary L values, use even L steps (e.g., 0.95, 0.85, 0.75, 0.65, 0.55, 0.45, 0.35, 0.25, 0.15).</li>
              <li><strong>Step 3:</strong> Keep chroma consistent across your scale. Typically, mid-range colors (L ≈ 0.5-0.7) can have higher chroma, while very light and very dark colors need lower chroma to stay in the sRGB gamut.</li>
              <li><strong>Step 4:</strong> Replace HSL values in your CSS custom properties with OKLCH, keeping HEX fallbacks for older browsers.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">OKLCH vs OKLab: What&apos;s the Difference?</h2>
            <p>
              CSS Color Level 4 defines both <code>oklab()</code> and <code>oklch()</code>. They use the same underlying color model but different coordinate systems. OKLab uses rectangular coordinates (L, a, b) — useful for color blending and interpolation. OKLCH uses polar coordinates (L, C, H) — more intuitive for designers because chroma and hue are separate, familiar concepts.
            </p>
            <p>
              For CSS stylesheets and design systems, <strong>OKLCH is generally preferred</strong> because it&apos;s easier to reason about. Use OKLab when you need to do color math (interpolation, mixing).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Practical Tips</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Watch gamut boundaries:</strong> Not all OKLCH values map to valid sRGB colors. Very high chroma + extreme lightness can produce out-of-gamut colors. Browsers will clamp them, but the result might not be what you expected.</li>
              <li><strong>Use relative color syntax:</strong> CSS Color Level 5 adds <code>oklch(from var(--base) calc(l + 0.1) c h)</code> for dynamic lightness adjustments. This is the future of theme generation.</li>
              <li><strong>Test with real content:</strong> Perceptual uniformity is great in theory, but always test your palette with actual UI components, text, and images.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Conclusion</h2>
            <p>
              OKLCH represents the biggest improvement in CSS color handling since HSL was introduced. Its perceptual uniformity makes building accessible, consistent color systems dramatically easier. With universal browser support in 2026, there&apos;s no reason not to adopt it in new projects. Use <Link href="/" className="text-pink-600 dark:text-pink-400 hover:underline">ColorSwitch</Link> to explore OKLCH values and convert your existing palette today.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
