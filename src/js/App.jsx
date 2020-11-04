import React from "react";
import { withStyles } from "@material-ui/core/styles";

import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import PageContent from "./components/PageContent";
import { ThemeProvider } from "../contexts/ThemeContext";

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
    <ThemeProvider>
      <PageContent>
        <NavBar />
        <LoginForm className={classes.grid} />
      </PageContent>
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
