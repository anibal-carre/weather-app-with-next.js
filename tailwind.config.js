/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "the-black": "#100E1D",
      "my-blue": "#1E213A",
      "my-white": "#E7E7EB",
      "second-white": "#A09FB1",
      "my-gray": "#585676",
      "second-gray": "#616475",
      "my-black": "#110E3C",
      "my-yellow": "#FFEC65",
      "my-zinc": "#6E707A",
      "second-zinc": "#88869D",
      "second-blue": "#3C47E9",
    },
  },
  plugins: [],
};
