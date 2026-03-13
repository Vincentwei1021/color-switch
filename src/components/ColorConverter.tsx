"use client";
import { useState, useCallback, useEffect } from "react";
import CopyButton from "./CopyButton";
import {
  hexToRgb, rgbToHex, rgbToHsl, hslToRgb, rgbToOklch, oklchToRgb,
  formatHex, formatRgb, formatHsl, formatOklch,
  type RGB, type HSL, type OKLCH,
} from "@/lib/colors";

type InputMode = "hex" | "rgb" | "hsl" | "oklch" | "picker";

export default function ColorConverter() {
  const [hex, setHex] = useState("#ec4899");
  const [rgb, setRgb] = useState<RGB>({ r: 236, g: 72, b: 153 });
  const [hsl, setHsl] = useState<HSL>({ h: 330, s: 81, l: 60 });
  const [oklch, setOklch] = useState<OKLCH>({ L: 0.656, C: 0.199, H: 349.8 });
  const [error, setError] = useState("");
  const [lastInput, setLastInput] = useState<InputMode>("hex");

  const updateFromRgb = useCallback((newRgb: RGB) => {
    setRgb(newRgb);
    setHex(rgbToHex(newRgb));
    setHsl(rgbToHsl(newRgb));
    setOklch(rgbToOklch(newRgb));
    setError("");
  }, []);

  // Sync when hex changes via picker
  useEffect(() => {
    if (lastInput !== "picker") return;
    const parsed = hexToRgb(hex);
    if (parsed) updateFromRgb(parsed);
  }, [hex, lastInput, updateFromRgb]);

  const handleHexChange = (val: string) => {
    setHex(val);
    setLastInput("hex");
    const parsed = hexToRgb(val);
    if (parsed) updateFromRgb(parsed);
    else setError("Invalid HEX value");
  };

  const handleRgbChange = (field: keyof RGB, val: string) => {
    const num = parseInt(val, 10);
    if (isNaN(num) || num < 0 || num > 255) { setError("RGB values must be 0-255"); return; }
    const newRgb = { ...rgb, [field]: num };
    setLastInput("rgb");
    updateFromRgb(newRgb);
  };

  const handleHslChange = (field: keyof HSL, val: string) => {
    const num = parseInt(val, 10);
    if (isNaN(num)) { setError("Invalid HSL value"); return; }
    if (field === "h" && (num < 0 || num > 360)) { setError("Hue must be 0-360"); return; }
    if ((field === "s" || field === "l") && (num < 0 || num > 100)) { setError("S/L must be 0-100"); return; }
    const newHsl = { ...hsl, [field]: num };
    setLastInput("hsl");
    const newRgb = hslToRgb(newHsl);
    updateFromRgb(newRgb);
  };

  const handleOklchChange = (field: keyof OKLCH, val: string) => {
    const num = parseFloat(val);
    if (isNaN(num)) { setError("Invalid OKLCH value"); return; }
    const newOklch = { ...oklch, [field]: num };
    setLastInput("oklch");
    const newRgb = oklchToRgb(newOklch);
    updateFromRgb(newRgb);
    setOklch(newOklch); // preserve user-entered values
  };

  const hexStr = formatHex(rgb);
  const rgbStr = formatRgb(rgb);
  const hslStr = formatHsl(hsl);
  const oklchStr = formatOklch(oklch);

  return (
    <section id="converter" className="px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-4xl space-y-6">

        {/* Color Preview + Picker */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl border-4 border-gray-200 shadow-lg dark:border-gray-600" style={{ backgroundColor: hexStr }}>
              <input
                type="color"
                value={hexStr}
                onChange={(e) => { setHex(e.target.value); setLastInput("picker"); }}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                aria-label="Color picker"
              />
              <div className="absolute bottom-2 left-2 rounded-md bg-black/50 px-2 py-1 text-xs font-mono text-white">
                {hexStr}
              </div>
            </div>
            <div className="flex-1 space-y-3 w-full">
              {/* HEX */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">HEX</label>
                <div className="flex gap-2">
                  <input value={hex} onChange={(e) => handleHexChange(e.target.value)} placeholder="#ec4899"
                    className="flex-1 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5 font-mono text-sm outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 dark:border-gray-600 dark:bg-gray-900 dark:text-white" />
                  <CopyButton text={hexStr} />
                </div>
              </div>
              {/* RGB */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">RGB</label>
                <div className="flex gap-2">
                  <div className="flex flex-1 gap-1">
                    {(["r", "g", "b"] as const).map((ch) => (
                      <input key={ch} type="number" min={0} max={255} value={rgb[ch]}
                        onChange={(e) => handleRgbChange(ch, e.target.value)}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 font-mono text-sm text-center outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                        placeholder={ch.toUpperCase()} />
                    ))}
                  </div>
                  <CopyButton text={rgbStr} />
                </div>
              </div>
              {/* HSL */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">HSL</label>
                <div className="flex gap-2">
                  <div className="flex flex-1 gap-1">
                    {(["h", "s", "l"] as const).map((ch) => (
                      <input key={ch} type="number" min={ch === "h" ? 0 : 0} max={ch === "h" ? 360 : 100} value={hsl[ch]}
                        onChange={(e) => handleHslChange(ch, e.target.value)}
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 font-mono text-sm text-center outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                        placeholder={ch.toUpperCase()} />
                    ))}
                  </div>
                  <CopyButton text={hslStr} />
                </div>
              </div>
              {/* OKLCH */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
                  OKLCH <span className="text-pink-500 text-[10px] ml-1">CSS New Standard ✨</span>
                </label>
                <div className="flex gap-2">
                  <div className="flex flex-1 gap-1">
                    <input type="number" step={0.01} min={0} max={1} value={oklch.L}
                      onChange={(e) => handleOklchChange("L", e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 font-mono text-sm text-center outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                      placeholder="L" />
                    <input type="number" step={0.01} min={0} max={0.5} value={oklch.C}
                      onChange={(e) => handleOklchChange("C", e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 font-mono text-sm text-center outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                      placeholder="C" />
                    <input type="number" step={1} min={0} max={360} value={oklch.H}
                      onChange={(e) => handleOklchChange("H", e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 font-mono text-sm text-center outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                      placeholder="H" />
                  </div>
                  <CopyButton text={oklchStr} />
                </div>
              </div>
            </div>
          </div>
          {error && <p className="mt-3 text-sm text-red-500 dark:text-red-400">⚠️ {error}</p>}
        </div>

        {/* CSS Output */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">📋 CSS Values — Click to Copy</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "HEX", value: hexStr, css: `color: ${hexStr};` },
              { label: "RGB", value: rgbStr, css: `color: ${rgbStr};` },
              { label: "HSL", value: hslStr, css: `color: ${hslStr};` },
              { label: "OKLCH", value: oklchStr, css: `color: ${oklchStr};` },
            ].map(({ label, css }) => (
              <div key={label} className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-900">
                <div>
                  <span className="text-xs font-semibold text-gray-400">{label}</span>
                  <p className="font-mono text-sm text-gray-800 dark:text-gray-200">{css}</p>
                </div>
                <CopyButton text={css} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
