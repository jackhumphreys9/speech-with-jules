// Exact colors sampled from the logo. CSS variables of the same names live in global.css.
export type PaletteColor = "darkgreen" | "blue" | "green" | "red" | "pink" | "purple" | "star";

// Text color with the best WCAG contrast on each filled color.
// red (4.07:1) and purple (4.41:1) only pass AA for large text, so keep body copy off those fills.
export const textOn: Record<PaletteColor, "ink" | "white"> = {
  darkgreen: "white",
  blue: "ink",
  green: "ink",
  red: "ink",
  pink: "ink",
  purple: "white",
  star: "ink",
};
