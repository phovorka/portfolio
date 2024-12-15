/** @type {import("eslint").Linter.Config} */
const config = {
    env: {
        es2020: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
            sourceType: "module", // Allows for the use of imports
        },
    },
    plugins: ["check-file", "n", "@typescript-eslint"],
    extends: [
        "next/core-web-vitals",
        "next/typescript",
        "prettier",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    rules: {
        "no-console": "error",
        "react/react-in-jsx-scope": "off",
        "react/jsx-sort-props": ["error"],
        "prefer-template": ["error"],
        "check-file/filename-naming-convention": [
            "error",
            {
                "**/*.{ts,tsx}": "KEBAB_CASE",
            },
            {
                ignoreMiddleExtensions: true,
            },
        ],
        "check-file/folder-naming-convention": [
            "error",
            {
                "src/**/!^[.*": "KEBAB_CASE",
            },
        ],
    },
};
module.exports = config;
