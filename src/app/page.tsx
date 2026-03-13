import Header from "@/components/Header";
import ColorConverter from "@/components/ColorConverter";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { faqData } from "@/data/faq";

const webAppSchema = {
  "@context": "https://schema.org", "@type": "WebApplication",
  name: "ColorSwitch", url: "https://color.toolboxlite.com",
  description: "Free online color converter. Convert between HEX, RGB, HSL, and OKLCH color formats instantly. Color picker, one-click copy. 100% client-side.",
  applicationCategory: "DesignApplication", operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question", name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo",
  name: "How to Convert Colors Online",
  description: "Convert colors between HEX, RGB, HSL, and OKLCH using ColorSwitch.",
  step: [
    { "@type": "HowToStep", name: "Pick or enter a color", text: "Use the color picker or type a value in any format — HEX, RGB, HSL, or OKLCH." },
    { "@type": "HowToStep", name: "See all formats instantly", text: "All four color formats update simultaneously as you change any value." },
    { "@type": "HowToStep", name: "Copy the CSS value", text: "Click the Copy button next to any format to copy the ready-to-use CSS value." },
  ],
  tool: { "@type": "HowToTool", name: "ColorSwitch — Color Format Converter" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="px-4 pt-12 pb-4 sm:px-6 sm:pt-16 sm:pb-6">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <div className="mb-4 inline-block rounded-full bg-pink-100 px-4 py-1.5 text-sm font-semibold text-pink-700 dark:bg-pink-900/40 dark:text-pink-300">
              ✨ Now with OKLCH — The CSS New Standard
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Color Format<br />
              <span className="text-pink-600 dark:text-pink-400">Converter</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              Convert colors between HEX, RGB, HSL, and OKLCH instantly. Visual color picker, one-click CSS copy, and support for the latest CSS color standards. 100% private.
            </p>
          </div>
        </section>

        <ColorConverter />

        {/* Features */}
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Why Designers and Developers Choose ColorSwitch
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: "🎨", title: "4 Formats", desc: "Convert between HEX, RGB, HSL, and OKLCH in real time. All formats update simultaneously — change one, see them all." },
                { icon: "✨", title: "OKLCH Support", desc: "First-class support for CSS Color Level 4's oklch() function — the perceptually uniform color space recommended for modern CSS." },
                { icon: "👁️", title: "Visual Picker", desc: "Click the color preview to open your browser's native color picker. Select any color visually and see all format conversions instantly." },
                { icon: "🔒", title: "100% Private", desc: "All conversions happen in your browser. No servers, no data collection, no tracking. Just fast, reliable color conversion." },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-3 text-3xl">{f.icon}</div>
                  <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Color Format Reference */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 bg-white dark:bg-gray-800">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Color Format Quick Reference
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="py-3 text-left font-semibold text-gray-900 dark:text-white">Format</th>
                    <th className="py-3 text-left font-semibold text-gray-900 dark:text-white">Syntax</th>
                    <th className="py-3 text-left font-semibold text-gray-900 dark:text-white">Example</th>
                    <th className="py-3 text-left font-semibold text-gray-900 dark:text-white">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-300">
                  {[
                    ["HEX", "#RRGGBB", "#ec4899", "CSS shorthand, design tokens"],
                    ["RGB", "rgb(R, G, B)", "rgb(236, 72, 153)", "Direct channel control"],
                    ["HSL", "hsl(H, S%, L%)", "hsl(330, 81%, 60%)", "Intuitive color adjustment"],
                    ["OKLCH", "oklch(L C H)", "oklch(0.656 0.199 349.8)", "Perceptual uniformity, modern CSS"],
                  ].map(([format, syntax, example, best]) => (
                    <tr key={format} className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 font-semibold">{format}</td>
                      <td className="py-3 font-mono text-xs">{syntax}</td>
                      <td className="py-3 font-mono text-xs">{example}</td>
                      <td className="py-3">{best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <FAQ />

        {/* About */}
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">About ColorSwitch</h2>
            <div className="mt-4 space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-left sm:text-center">
              <p>
                <strong>ColorSwitch</strong> is a free <strong>color format converter</strong> built for designers, front-end developers, and anyone who works with CSS colors. Whether you need to convert a hex code from a design file to RGB for JavaScript, or try the new oklch() function for CSS Color Level 4, ColorSwitch handles all four major formats instantly.
              </p>
              <p>
                What makes ColorSwitch unique is <strong>OKLCH support</strong>. While most color converters only handle HEX, RGB, and HSL, ColorSwitch includes the <strong>OKLCH</strong> color space — the perceptually uniform format recommended by the CSS Color Level 4 specification. OKLCH produces more predictable results when adjusting lightness and saturation, making it ideal for design systems and accessible color palettes.
              </p>
              <p>
                All conversions run entirely in your browser — no data is sent to any server. ColorSwitch features a visual <strong>color picker</strong>, real-time format updates, one-click CSS copy, and supports both light and dark themes. It&apos;s the color tool you&apos;ll keep open all day.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
    </>
  );
}
