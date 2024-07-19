import DateFormat from "enums/DateFormat";
import { createTheme, responsiveFontSizes, alpha } from "@mui/material/styles";
export const defaultTheme = customizeTheme();

/**
 *
 * @param {import("configs/TenantConfig").Tenant} tenant
 * @returns
 */
export function customizeLightTheme() {
  return responsiveFontSizes(
    customizeTheme({
      palette: {
        primary: {
          main: "#04265F",
          lighter: alpha("#04265F", 0.2),
        },
        success: {
          // ...defaultTheme.palette.success,
          main: "#06C167",
          lighter: alpha(defaultTheme.palette.success.main, 0.2),
        },
        warning: {
          // ...defaultTheme.palette.warning,
          main: "#FFCF70",
          lighter: alpha(defaultTheme.palette.warning.main, 0.2),
        },
        error: {
          // ...defaultTheme.palette.error,
          main: "#E85C4A",
          lighter: alpha(defaultTheme.palette.error.main, 0.2),
        },
        info: {
          ...defaultTheme.palette.info,
          lighter: alpha(defaultTheme.palette.info.main, 0.2),
        },
        background: {
          ...defaultTheme.palette.background,
          default: "#F5F6F7",
        },
        // text: {
        //   ...defaultTheme.palette.text,
        //   secondary: "#93A5AF",
        // },
      },
    })
  );
}

export function customizeDarkTheme() {
  return responsiveFontSizes(customizeTheme({ palette: { mode: "dark" } }));
}

/**
 *
 * @param {import("@mui/material").ThemeOptions} themeOptions
 */
export function customizeTheme(themeOptions) {
  return createTheme({
    ...themeOptions,
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
      },
    },
    typography: {
      fontFamily: [
        "Nunito Sans",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
        "-apple-system",
        "BlinkMacSystemFont",
      ].join(),
      // htmlFontSize: 10,
      fontSize: 12,
      // color: "#000051",
      button: {
        textTransform: "none",
      },
    },
    components: {
      MuiIcon: {
        defaultProps: {
          baseClassName: "material-symbols-rounded",
        },
      },
      MuiDatePicker: {
        defaultProps: {
          inputFormat: DateFormat.FORMAT,
        },
      },
      MuiDesktopDatePicker: {
        defaultProps: {
          inputFormat: DateFormat.FORMAT,
        },
      },
      MuiMobileDatePicker: {
        defaultProps: {
          inputFormat: DateFormat.FORMAT,
        },
      },
      MuiTabs: {
        defaultProps: {
          variant: "scrollable",
          scrollButtons: "auto",
          allowScrollButtonsMobile: true,
        },
      },
      MuiLoadingButton: {
        defaultProps: {
          variant: "contained",
        },
      },

      MuiButton: {
        defaultProps: {
          disableElevation: true,
          variant: "contained",
          rounded: "circular",
        },
        variants: [
          {
            props: { rounded: "default" },
            style: () => ({ borderRadius: 16 }),
          },
          {
            props: { rounded: "square" },
            style: () => ({ borderRadius: 0 }),
          },
          {
            props: { rounded: "circular" },
            style: () => ({ borderRadius: 24 }),
          },
          {
            props: { size: "large" },
            style: () => ({ padding: "14px 22px" }),
          },
          {
            props: { size: "medium" },
            style: () => ({ padding: "10px 16px" }),
          },
        ],
        styleOverrides: {
          root: ({ theme, ownerState }) => {
            return {
              ...(!isNaN(Number(ownerState.rounded))
                ? { borderRadius: Number(ownerState.rounded) }
                : {}),
              ...(ownerState.variant === "soft"
                ? {
                    color:
                      theme.palette[ownerState.color]?.main ||
                      theme.palette.grey[500],
                    backgroundColor: alpha(
                      theme.palette[ownerState.color]?.main ||
                        theme.palette.grey[500],
                      0.2
                    ),
                    "&:hover": {
                      backgroundColor: alpha(
                        theme.palette[ownerState.color]?.main ||
                          theme.palette.grey[500],
                        0.3
                      ),
                    },
                  }
                : {}),
              ...(ownerState.variant === "soft"
                ? {
                    color:
                      theme.palette[ownerState.color]?.main ||
                      theme.palette.grey[500],
                    backgroundColor: alpha(
                      theme.palette[ownerState.color]?.main ||
                        theme.palette.grey[500],
                      0.2
                    ),
                    "&:hover": {
                      backgroundColor: alpha(
                        theme.palette[ownerState.color]?.main ||
                          theme.palette.grey[500],
                        0.3
                      ),
                    },
                  }
                : {}),
            };
          },
        },
      },
      MuiChip: {
        defaultProps: { variant: "soft" },
        styleOverrides: {
          root: ({ theme, ownerState }) => {
            return {
              ...(ownerState.variant === "soft"
                ? {
                    color:
                      theme.palette[ownerState.color]?.main ||
                      theme.palette.grey[500],
                    backgroundColor: alpha(
                      theme.palette[ownerState.color]?.main ||
                        theme.palette.grey[500],
                      0.2
                    ),
                    "&:hover": {
                      backgroundColor: alpha(
                        theme.palette[ownerState.color]?.main ||
                          theme.palette.grey[500],
                        0.3
                      ),
                    },
                  }
                : {}),
            };
          },
        },
      },
      MuiIconButton: {
        defaultProps: {},
        styleOverrides: {
          root: ({ theme, ownerState }) => {
            return {
              ...(!isNaN(Number(ownerState.rounded))
                ? { borderRadius: Number(ownerState.rounded) }
                : {
                    borderRadius: { square: 0, default: 8 }[ownerState.rounded],
                  }),
              ...(ownerState.variant === "contained"
                ? {
                    color:
                      theme.palette[ownerState.color]?.contrastText ||
                      theme.palette.text.primary,
                    backgroundColor:
                      theme.palette[ownerState.color]?.main ||
                      theme.palette.grey[500],
                    "&:hover": {
                      backgroundColor:
                        theme.palette[ownerState.color]?.dark ||
                        theme.palette.grey[700],
                    },
                  }
                : {}),
              ...(ownerState.variant === "soft"
                ? {
                    color:
                      theme.palette[ownerState.color]?.main ||
                      theme.palette.grey[500],
                    backgroundColor: alpha(
                      theme.palette[ownerState.color]?.main ||
                        theme.palette.grey[500],
                      0.2
                    ),
                    "&:hover": {
                      backgroundColor: alpha(
                        theme.palette[ownerState.color]?.main ||
                          theme.palette.grey[500],
                        0.3
                      ),
                    },
                  }
                : {}),
              ...(ownerState.variant === "outlined"
                ? {
                    border: `1px solid ${
                      theme.palette[ownerState.color]?.main ||
                      theme.palette.divider
                    }`,
                  }
                : {}),
            };
          },
        },
      },
      MuiInputLabel: {
        defaultProps: {
          classes: { asterisk: "text-error-main" },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: () => ({
            "&.MuiInputBase-formControl": {},
          }),
        },
      },
      MuiFilledInput: {
        defaultProps: { disableUnderline: true },
      },
      MuiOutlinedInput: {
        // defaultProps: { notched: false },
      },
      MuiTextField: {
        defaultProps: { variant: "outlined" },
        styleOverrides: {
          root: ({ ownerState }) => {
            return {
              "& .MuiFilledInput-input": {
                borderRadius: 16,
              },
              "& .MuiFormLabel-root": {
                // color: theme.palette.text.primary,
                color: "#757575",
              },

              "&:focus-within": {
                "& .MuiFormLabel-root": {
                  // color: theme.palette.text.primary,
                  color: "#757575",
                },
              },

              ...(ownerState.variant === "outlined"
                ? {
                    "& .MuiInputLabel-shrink": {
                      transform:
                        ownerState.size === "small"
                          ? "translate(14px, 4px) scale(0.60)"
                          : "translate(14px, 6px) scale(0.75)",
                    },

                    "& .MuiInputBase-root": {
                      backgroundColor: "#FFFFFF",
                      borderRadius: 8,
                      // paddingTop: ownerState.size === "small" ? 10 : 12,

                      "& > fieldset": {
                        border: "none",
                      },

                      "& .MuiInputAdornment-root": {
                        paddingTop: ownerState.size === "small" ? 10 : 12,
                      },

                      "& .MuiOutlinedInput-input": {
                        paddingTop: ownerState.size === "small" ? 15.5 : 22.5,
                        paddingBottom: ownerState.size === "small" ? 5.5 : 10.5,
                      },

                      "& + .MuiFormHelperText-root": {
                        // marginLeft: 0,
                      },
                    },

                    // "& .MuiInputAdornment-root.MuiInputAdornment-positionStart":
                    //   {
                    //     paddingTop:
                    //       ownerState.size === "small" ? "8.5px" : "18.5px",
                    //   },
                  }
                : {}),

              ...(ownerState.variant === "filled"
                ? {
                    "& .MuiInputBase-root": {
                      // backgroundColor: "#F3F2F1",

                      // "&:hover": {
                      //   backgroundColor: "#F3F2F1",
                      // },

                      // "&.Mui-focused": {
                      //   backgroundColor: "#F3F2F1",
                      // },

                      borderRadius: 8,
                      paddingTop: ownerState.size === "small" ? 1 : 2,
                      paddingBottom: ownerState.size === "small" ? 1 : 2,

                      "& .MuiInputBase-input": {
                        // borderRadius: 8,
                      },

                      // "& .MuiFilledInput-input": {
                      //   paddingTop:
                      //     ownerState.size === "small" ? "16.5px" : "25px",
                      //   paddingBottom:
                      //     ownerState.size === "small" ? "2.5px" : "8px",
                      // },

                      // "& .MuiInputBase-input": {
                      //   ...(!ownerState.label
                      //     ? { paddingTop: 12.5, paddingBottom: 12.5 }
                      //     : {}),
                      // },

                      "& + .MuiFormHelperText-root": {
                        // marginLeft: 0,
                      },
                    },
                  }
                : {}),
            };
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
          rounded: "circular",
        },
        variants: [
          {
            props: { rounded: "default" },
            style: () => ({}),
          },
          {
            props: { rounded: "square" },
            style: () => ({ borderRadius: 0 }),
          },
          {
            props: { rounded: "circular" },
            style: () => ({ borderRadius: 24 }),
          },
        ],
      },
      MuiDialog: {
        defaultProps: {
          maxWidth: "sm",
        },
        styleOverrides: {
          paper: ({ theme }) => {
            return {
              backgroundColor: theme.palette.background.default,
            };
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: ({ theme }) => ({
            ...theme.typography.h5,
            fontWeight: "bold",
          }),
        },
      },
      MuiSkeleton: {
        variants: [
          {
            props: { variant: "rectangular" },
            style: () => ({ borderRadius: 24 }),
          },
        ],
      },
    },
  });
}
