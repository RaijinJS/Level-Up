/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'image': "url('/image-from-rawpixel-id-12561076-jpeg.jpg')"
      }),
      fontFamily: {
        nunito: ['var(--font-nunito)'],
      }
    },
  },
  plugins: [],
};
