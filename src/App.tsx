import React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import theme from "./utils/theme";
import Main from "./main/Main";
import { configureTranslation } from "./utils/i18n";

configureTranslation();

function App() {
  return (
    <>
      <Helmet>
        <title>River Kitty</title>
      </Helmet>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
