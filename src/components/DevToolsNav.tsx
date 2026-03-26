const devTools = [
  { name: "JSON Pretty", emoji: "🔤", url: "https://json.toolboxlite.com", slug: "json-pretty" },
  { name: "Epoch Now", emoji: "⏱️", url: "https://epoch.toolboxlite.com", slug: "epoch-now" },
  { name: "Color Switch", emoji: "🎨", url: "https://color.toolboxlite.com", slug: "color-switch" },
  { name: "IP Geek", emoji: "🌐", url: "https://ip.toolboxlite.com", slug: "ip-geek" },
  { name: "ScreenSnap", emoji: "📸", url: "https://screenshot.toolboxlite.com", slug: "screen-snap" },
];

export default function DevToolsNav({ currentSlug }: { currentSlug: string }) {
  const others = devTools.filter((t) => t.slug !== currentSlug);
  return (
    <section className="border-t border-gray-200 dark:border-gray-800 px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl">
          More Developer Tools
        </h2>
        <p className="mt-1 text-center text-sm text-gray-500 dark:text-gray-400">
          Free, no sign-up required
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {others.map((tool) => (
            <a
              key={tool.slug}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-5 text-center transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
            >
              <span className="text-2xl">{tool.emoji}</span>
              <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{tool.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
