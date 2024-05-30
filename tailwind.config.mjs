/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            keyframes: {
                slideInR: {
                    "0%": { marginLeft: "-150%", opacity: "0" },
                    "100%": { marginLeft: "", opacity: "1" },
                },
                slideInL: {
                    "0%": { marginLeft: "150%", opacity: "0" },
                    "100%": { marginLeft: "", opacity: "1" },
                },
            },
        },
        animation: {
            "slide-in-right": "slideInR 2s",
            "slide-in-right-delay": "slideInR 2s ease-out 0.5s forwards",
            "slide-in-left": "slideInL 2s",
        },
    },
    plugins: [],
};
