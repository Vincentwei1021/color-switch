// Color conversion utilities — HEX ↔ RGB ↔ HSL ↔ OKLCH

export interface RGB { r: number; g: number; b: number; }
export interface HSL { h: number; s: number; l: number; }
export interface OKLCH { L: number; C: number; H: number; }

// ─── HEX ↔ RGB ─────────────────────────────────────────
export function hexToRgb(hex: string): RGB | null {
  const clean = hex.replace(/^#/, "");
  let r: number, g: number, b: number;
  if (clean.length === 3) {
    r = parseInt(clean[0] + clean[0], 16);
    g = parseInt(clean[1] + clean[1], 16);
    b = parseInt(clean[2] + clean[2], 16);
  } else if (clean.length === 6) {
    r = parseInt(clean.slice(0, 2), 16);
    g = parseInt(clean.slice(2, 4), 16);
    b = parseInt(clean.slice(4, 6), 16);
  } else return null;
  if (isNaN(r) || isNaN(g) || isNaN(b)) return null;
  return { r, g, b };
}

export function rgbToHex({ r, g, b }: RGB): string {
  const c = (v: number) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
  return `#${c(r)}${c(g)}${c(b)}`;
}

// ─── RGB ↔ HSL ──────────────────────────────────────────
export function rgbToHsl({ r, g, b }: RGB): HSL {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  let h = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rn: h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6; break;
      case gn: h = ((bn - rn) / d + 2) / 6; break;
      case bn: h = ((rn - gn) / d + 4) / 6; break;
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function hslToRgb({ h, s, l }: HSL): RGB {
  const sn = s / 100, ln = l / 100;
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };
  if (sn === 0) {
    const v = Math.round(ln * 255);
    return { r: v, g: v, b: v };
  }
  const q = ln < 0.5 ? ln * (1 + sn) : ln + sn - ln * sn;
  const p = 2 * ln - q;
  const hn = h / 360;
  return {
    r: Math.round(hue2rgb(p, q, hn + 1/3) * 255),
    g: Math.round(hue2rgb(p, q, hn) * 255),
    b: Math.round(hue2rgb(p, q, hn - 1/3) * 255),
  };
}

// ─── RGB ↔ OKLCH (via OKLab) ────────────────────────────
function srgbToLinear(c: number): number {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function linearToSrgb(c: number): number {
  return c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1/2.4) - 0.055;
}

export function rgbToOklch({ r, g, b }: RGB): OKLCH {
  const lr = srgbToLinear(r / 255), lg = srgbToLinear(g / 255), lb = srgbToLinear(b / 255);
  const l_ = 0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb;
  const m_ = 0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb;
  const s_ = 0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb;
  const l_c = Math.cbrt(l_), m_c = Math.cbrt(m_), s_c = Math.cbrt(s_);
  const L = 0.2104542553 * l_c + 0.7936177850 * m_c - 0.0040720468 * s_c;
  const a = 1.9779984951 * l_c - 2.4285922050 * m_c + 0.4505937099 * s_c;
  const bOk = 0.0259040371 * l_c + 0.7827717662 * m_c - 0.8086757660 * s_c;
  const C = Math.sqrt(a * a + bOk * bOk);
  let H = (Math.atan2(bOk, a) * 180) / Math.PI;
  if (H < 0) H += 360;
  return {
    L: Math.round(L * 1000) / 1000,
    C: Math.round(C * 1000) / 1000,
    H: Math.round(H * 10) / 10,
  };
}

export function oklchToRgb({ L, C, H }: OKLCH): RGB {
  const hRad = (H * Math.PI) / 180;
  const a = C * Math.cos(hRad), b = C * Math.sin(hRad);
  const l_c = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_c = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_c = L - 0.0894841775 * a - 1.2914855480 * b;
  const l_ = l_c * l_c * l_c, m_ = m_c * m_c * m_c, s_ = s_c * s_c * s_c;
  const lr = +4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_;
  const lg = -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_;
  const lb = -0.0041960863 * l_ - 0.7034186147 * m_ + 1.7076147010 * s_;
  return {
    r: Math.max(0, Math.min(255, Math.round(linearToSrgb(lr) * 255))),
    g: Math.max(0, Math.min(255, Math.round(linearToSrgb(lg) * 255))),
    b: Math.max(0, Math.min(255, Math.round(linearToSrgb(lb) * 255))),
  };
}

// ─── Format strings ─────────────────────────────────────
export function formatHex(rgb: RGB): string { return rgbToHex(rgb); }
export function formatRgb({ r, g, b }: RGB): string { return `rgb(${r}, ${g}, ${b})`; }
export function formatHsl({ h, s, l }: HSL): string { return `hsl(${h}, ${s}%, ${l}%)`; }
export function formatOklch({ L, C, H }: OKLCH): string { return `oklch(${L} ${C} ${H})`; }
