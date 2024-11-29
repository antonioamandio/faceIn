/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        school: "url('/assets/school.jpg')",
      },
    },
  },
  plugins: [],
};
