import { createTheme } from "@mui/material/styles";

export const defaultContentPadding = {
  paddingLeft: {
    xs: 2,
    md: "5%",
    xl: "10%",
  },
  paddingRight: {
    xs: 2,
    md: "5%",
    xl: "10%",
  },
};

export default createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#60C0C2",
      contrastText: "white",
    },
    secondary: {
      main: "rgba(255, 255, 255, 0.1)",
      contrastText: "white",
    },
    info: {
      main: "#EEAB47",
      contrastText: "white",
    },
    background: {
      default: "#0E141D",
      paper: "#141B27",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    h1: {
      fontFamily: "Roboto Mono",
      fontStyle: "Bold",
      fontWeight: "700",
      fontSize: "50px",
      lineHeight: "66px",
    },
    caption: {
      color: "#979E9C",
    },
  },
});

export const defaultHeaderBg = {
  backgroundColor: "#15152B",
};
