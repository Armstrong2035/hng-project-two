import { createTheme } from "@mui/material";

s;
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
