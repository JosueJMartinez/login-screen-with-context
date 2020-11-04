import React from "react";
import { withStyles } from "@material-ui/core/styles";

import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";

const styles = {
  root: {
    height: "100%",
  },
  grid: {
    height: "100%",
  },
};

function App(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <NavBar />

      <LoginForm className={classes.grid} />
    </div>
  );
}

export default withStyles(styles)(App);
