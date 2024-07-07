import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#f8f8f8",
      accent: "#f18080",
    },
    display: {
      main: "#f7AFBC",
    },
    button: {
      primary: "#ED8174",
      secondary: "#EEE4E3",
    },
    text: {
      primary: "#473838",
      secondary: "#F7AFBC",
      tertiary: "#9B9B9B",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    fontSize: 16,
    fontWeightRegular: 400,
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      textTransform: "none",
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: 1.5,
    },
    // You can also create custom variants
    display: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    subtitle: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#ED8174",
          "&:hover": {
            backgroundColor: "#EEE4E3",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ED8174",
          },
        },
      },
    },
  },
});
