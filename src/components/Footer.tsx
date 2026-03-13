import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-sm text-gray-500 dark:text-gray-400 sm:flex-row sm:justify-between sm:px-6">
        <p className="font-[family-name:var(--font-heading)]">&copy; {new Date().getFullYear()} ColorSwitch. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/" className="transition-colors hover:text-pink-600 dark:hover:text-pink-400">Home</Link>
          <Link href="/blog" className="transition-colors hover:text-pink-600 dark:hover:text-pink-400">Blog</Link>
          <Link href="/privacy" className="transition-colors hover:text-pink-600 dark:hover:text-pink-400">Privacy</Link>
          <Link href="/terms" className="transition-colors hover:text-pink-600 dark:hover:text-pink-400">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
