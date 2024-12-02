/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        school: "url('/assets/school.jpg')",
      },
    },
  },
  plugins: [],
};
