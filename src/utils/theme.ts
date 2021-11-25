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
      main: "#8D3AA5",
      contrastText: "white",
    },
    secondary: {
      main: "#EA8478",
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
    borderRadius: 4,
  },
  typography: {
    h1: {
      color: "white",
      fontFamily: "Roboto Mono",
      fontWeight: "700",
      fontSize: "50px",
      lineHeight: "66px",
    },
    h2: {
      color: "white",
      fontFamily: "Roboto Mono",
      fontWeight: "700",
      fontSize: "46px",
    },
    h3: {
      color: "white",
      fontFamily: "Roboto Mono",
      fontWeight: "700",
      fontSize: "40px",
    },
    h4: {
      color: "white",
      fontFamily: "Roboto Mono",
      fontWeight: "700",
      fontSize: "34px",
    },
    subtitle1: {
      color: "white",
      fontFamily: "Nunito",
      fontWeight: "700",
      fontSize: "26px",
    },
    subtitle2: {
      color: "white",
      fontFamily: "Nunito",
      fontWeight: "700",
      fontSize: "18px",
    },
    body1: {
      color: "white",
      fontFamily: "Nunito",
      fontSize: "16px",
    },
    caption: {
      color: "#979E9C",
    },
    button: {
      fontFamily: "Poppins",
      fontSize: 14,
      fontWeight: 500,
      textTransform: "none",
    },
  },
});

export const defaultHeaderBg = {
  backgroundColor: "#15152B",
};
