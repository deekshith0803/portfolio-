/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#000000',
                'bg-secondary': '#0f0f0f',
                'bg-card': '#111111',
                'text-primary': '#ffffff',
                'text-secondary': '#b0b0b0',
                'text-dim': '#666666',
                'accent-gold': '#cfb160',
                'accent-red': '#e63946',
            },
            fontFamily: {
                'display': ['"Bebas Neue"', 'sans-serif'],
                'body': ['"Inter"', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-main': 'linear-gradient(to bottom, #0a0a0a 0%, #1a1a1a 100%)',
            },
            container: {
                center: true,
                padding: '3rem',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(10deg)' },
                },
                'float-reverse': {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(-10deg)' },
                },
                rotate: {
                    'from': { transform: 'translate(-50%, -50%) rotate(0deg)' },
                    'to': { transform: 'translate(-50%, -50%) rotate(360deg)' },
                },
                'spin-slow': {
                    'from': { transform: 'rotate(0deg)' },
                    'to': { transform: 'rotate(360deg)' }
                }
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-reverse': 'float-reverse 8s ease-in-out infinite',
                'spin-slow': 'spin-slow 20s linear infinite',
            }
        },
    },
    plugins: [],
}
