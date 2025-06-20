/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'midnight-plum': '#3E2F4B',
        'rose-blush': '#F3E9E5',
        'kashmir-gold': '#C9A065',
        'deep-graphite': '#2A2A2A',
        'warm-gray': '#7C7C7C',
        'pearl-white': '#FFFDFB',
        'dust-beige': '#E0D6CE',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Lato', 'Source Sans Pro', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'thread-weave': 'threadWeave 3s ease-in-out infinite',
      },
      backgroundImage: {
        'embroidery-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23C9A065\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3Ccircle cx=\"10\" cy=\"10\" r=\"1\"/%3E%3Ccircle cx=\"50\" cy=\"50\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};