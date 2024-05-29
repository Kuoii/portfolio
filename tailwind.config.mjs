/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            keyframes: {
                slideInR: {
                    "0%": { marginLeft: "-150%" },
                    "100%": { marginLeft: "" },
                },
                slideInL: {
                    "0%": { marginLeft: "150%" },
                    "100%": { marginLeft: "" },
                },
            },
        },
        animation: {
            "slide-in-right": "slideInR 2s",
            "slide-in-left": "slideInL 2s",
        },
    },
    plugins: [],
};
