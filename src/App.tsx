import React from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import theme from "./utils/theme";
import Main from "./main/Main";
import { configureTranslation } from "./utils/i18n";
import { Provider } from "react-redux";
import configureStore from "./utils/configureStore";

configureTranslation();

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Helmet>
        <title>River Kitty</title>
      </Helmet>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}

export default App;
