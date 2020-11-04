import React from "react";
import { withStyles } from "@material-ui/core/styles";

import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import PageContent from "./components/PageContent";

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
    <PageContent>
      <NavBar />

      <LoginForm className={classes.grid} />
    </PageContent>
  );
}

export default withStyles(styles)(App);
