/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#app",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          main: "var(--color-primary-main)",
          light: "var(--color-primary-light)",
          lighter: "var(--color-primary-lighter)",
          dark: "var(--color-primary-dark)",
          darker: "var(--color-primary-darker)",
          contrastText: "var(--color-primary-contrastText)",
        },
        secondary: {
          main: "var(--color-secondary-main)",
          light: "var(--color-secondary-light)",
          lighter: "var(--color-secondary-lighter)",
          dark: "var(--color-secondary-dark)",
          darker: "var(--color-secondary-darker)",
          contrastText: "var(--color-secondary-contrastText)",
        },
        success: {
          main: "var(--color-success-main)",
          light: "var(--color-success-light)",
          lighter: "var(--color-success-lighter)",
          dark: "var(--color-success-dark)",
          contrastText: "var(--color-success-contrastText)",
        },
        info: {
          main: "var(--color-info-main)",
          light: "var(--color-info-light)",
          lighter: "var(--color-info-lighter)",
          dark: "var(--color-info-dark)",
          contrastText: "var(--color-info-contrastText)",
        },
        warning: {
          main: "var(--color-warning-main)",
          light: "var(--color-warning-light)",
          lighter: "var(--color-warning-lighter)",
          dark: "var(--color-warning-dark)",
          contrastText: "var(--color-warning-contrastText)",
        },
        error: {
          main: "var(--color-error-main)",
          light: "var(--color-error-light)",
          lighter: "var(--color-error-lighter)",
          dark: "var(--color-error-dark)",
          contrastText: "var(--color-error-contrastText)",
        },
        common: {
          black: "var(--color-common-black)",
          white: "var(--color-common-white)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          disabled: "var(--color-text-disabled)",
        },
        background: {
          paper: "var(--color-background-paper)",
          default: "var(--color-background-default)",
        },
        action: {
          active: "var(--color-action-active)",
          hover: "var(--color-action-hover)",
          selected: "var(--color-action-selected)",
          disabled: "var(--color-action-disabled)",
          disabledBackground: "var(--color-action-disabledBackground)",
          focus: "var(--color-action-focus)",
        },
        accelloBlue: "#04265F",
        landingbackground: "#F9F9FB",
        bgOpacity: "rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": 'radial-gradient(ellipse at center, #213149 -2%, black 100%)',
        "gradient-dash":
          "linear-gradient(87.93deg, #E9E6CE 3.83%, #97ADB1 87.25%);",
      },
      boxShadow: {
        difference:
          "0px 1px 2px rgba(34, 34, 38, 0.15), 0px 4px 6px rgba(34, 34, 38, 0.08);",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"], // Default Tailwind sans font

        inherit: ["inherit"],
        "nunito-sans": [
          "var(--font-nunito-sans)",
          "Nunito Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
        gilroy: ["gilroy"],
        gilroyLight: ["gilroy-light"],
        NexaBold: ["NexaBold"],
        NexaLight: ["NexaLight"],
      },
      zIndex: {
        mobileStepper: 1000,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
      },
      screens: {
        xs: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
