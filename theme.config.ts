export const Theme = {
  theme1: {
    background: "#121212",
    foreground: "#fafafa",
    primary: {
      base: "#ae62d4",
      contrast: "#340f3c",
      shade: "#171717",
    },
    secondary: {
      base: "#67d3f9",
      contrast: "#1e40af",
      shade: "#e3eaff",
    },
    neutral: {
      base: "#a3a3a3",
      contrast: "#535054",
      shade: "#2e2e2e",
    },
    accent: {
      base: "#fdd226",
      contrast: "#ffb806",
      shade: "#fff6de",
    },
    highlight: {
      base: "#9fe3a1",
    },
  },
  theme2: {
    background: "#fafafa",
    foreground: "#1a1a1a",
    primary: {
      base: "#fe2695",
      contrast: "#ffc1e1",
      shade: "#fee8f7",
    },
    secondary: {
      base: "#7f56d9",
      contrast: "#a695fb",
      shade: "#f2f1ff",
    },
    neutral: {
      base: "#6d686c",
      contrast: "#afa3b0",
      shade: "#DCD1DC",
    },
    accent: {
      base: "#00a7ff",
      contrast: "#0082f3",
      shade: "#ddf3ff",
    },
    highlight: {
      base: "#cb2595",
    },
  },
};

//Access other theme colors
export const themeConfig = (
  theme: typeof Theme.theme1 | typeof Theme.theme2
) => ({
  background: theme.background,
  foreground: theme.foreground,
  primary: {
    DEFAULT: theme.primary.base,
    contrast: theme.primary.contrast,
    shade: theme.primary.shade,
  },
  secondary: {
    DEFAULT: theme.secondary.base,
    contrast: theme.secondary.contrast,
    shade: theme.secondary.shade,
  },
  neutral: {
    DEFAULT: theme.neutral.base,
    contrast: theme.neutral.contrast,
    shade: theme.neutral.shade,
  },
  accent: {
    DEFAULT: theme.accent.base,
    contrast: theme.accent.contrast,
    shade: theme.accent.shade,
  },
  highlight: {
    DEFAULT: theme.highlight.base,
  },
});