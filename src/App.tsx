import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import "./styles.css";
import theme from "./theme";
import darkTheme from "./theme-dark";

import Layout from "./Components/Layout/Layout";


export const App: React.FunctionComponent = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const appTheme = React.useMemo(
    () => (prefersDarkMode ? darkTheme : theme),
    [prefersDarkMode],
    );
    return (
      <ThemeProvider theme={appTheme}>      
        <Router>
          <Layout />
        </Router>
      </ThemeProvider>
    );
}

export default App;