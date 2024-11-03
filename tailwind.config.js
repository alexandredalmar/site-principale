/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-radial":
          "radial-gradient(78.77% 78.77% at 71.71% 30.77%, #f0fcff 0%, #9bedff 67.21%, #98ecff 76.04%, #5be1ff 84.9%, #00bae2 94.79%)",
      },
      colors: {
        "button-primary": "#ec4899" /* pink*/,
        "button-primary-hover": "#1E40AF",
        "button-secondary": "#6B7280",
        "button-secondary-hover": "#4B5563",
        "button-danger": "#DC2626",
        "button-danger-hover": "#B91C1C",
      },
      spacing: {
        'custom-calc': "calc((100% - 1 * 1rem) / 2)"
      }
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],

  daisyui: {
    themes: ["light"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
