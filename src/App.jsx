import React from "react";
import { withStyles } from "@material-ui/core/styles";

import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import PageContent from "./components/PageContent";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

const styles = {
  // root: {
  //   height: "100%",
  // },
  // grid: {
  //   height: "100%",
  // },
};

function App(props) {
  const { classes } = props;

  return (
    <LanguageProvider>
      <ThemeProvider>
        <PageContent>
          <NavBar />
          <LoginForm className={classes.grid} />
        </PageContent>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default withStyles(styles)(App);
