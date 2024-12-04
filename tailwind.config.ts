import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                primary: "#011627",
            },
            borderColor: {
                primary: "#1E2D3D",
                orange: "#FEA55F",
            },
            colors: {
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
