/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#1acbcb",
                "primary-dark": "#14a1a1",
                "background-light": "#fafafa",
                "background-dark": "#17191c",
                "card-light": "#ffffff",
                "card-dark": "#23262b",
                "accent-gold": "#FFD700",
                "accent-green": "#4ADF7F",
                "deep-blue": "#0e1b1b",
                // Company Dashboard specific colors
                "surface-light": "#ffffff",
                "surface-dark": "#212429",
                "border-light": "#e8f3f3",
                "border-dark": "#32383e",
                "text-main-light": "#0e1b1b",
                "text-main-dark": "#e8f3f3",
                "text-sub-light": "#4f9696",
                "text-sub-dark": "#94a3b8",
            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"],
                "body": ["Manrope", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "1rem",
                "xl": "1.5rem",
                "2xl": "2rem",
                "full": "9999px"
            },
            boxShadow: {
                "soft": "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
                "card": "0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)",
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}
