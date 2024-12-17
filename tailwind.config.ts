import type { Config } from "tailwindcss";

const PRIMARY_COLORS = {
    dark: "#01080E",
    base: "#011627",
    light: "#011221",
};

const SECONDARY_COLORS = {
    lightBlue: "#607B96",
    teal: "#3C9D93",
    blue: "#4D5BCE",
};

const ACCENT_COLORS = {
    orange: "#FEA55F",
    mint: "#43D9AD",
    pink: "#E99287",
    purple: "#C98BDF",
};

const COLORS = {
    primary: PRIMARY_COLORS,
    secondary: SECONDARY_COLORS,
    accent: ACCENT_COLORS,
    "dark-slate-blue": "#1E2D3D",
    "gradient-blue": "#4D5BCE",
    "gradient-mint": "#43D9AD",
};

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                ...COLORS,
            },
            borderColor: {
                primary: "#1E2D3D",
                orange: "#FEA55F",
            },
            colors: {
                ...COLORS,
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                mono: ["var(--font-fira-code)"],
            },
        },
    },
    plugins: [],
} satisfies Config;
