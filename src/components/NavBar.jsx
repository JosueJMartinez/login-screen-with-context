import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Switch,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import styles from "../styles/NavBarStyles";
import { ThemeContext } from "../contexts/ThemeContext";
import { withLanguageContext } from "../contexts/LanguageContext";

const words = {
  english: {
    search: "Search",
    lang: "🇺🇸",
  },
  spanish: {
    search: "Buscar",
    lang: "🇪🇸",
  },
  french: {
    search: "Chercher",
    lang: "🇫🇷",
  },
};

class NavBar extends Component {
  static contextType = ThemeContext;
  render() {
    const { classes, languageContext } = this.props;
    const { isDarkMode, toggleIsDarkMode } = this.context;
    const { search, lang } = words[languageContext.language];

    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          color={isDarkMode ? "default" : "primary"}
        >
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
            >
              <span>{lang}</span>
            </IconButton>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              LDC
            </Typography>
            <Switch onClick={toggleIsDarkMode} />

            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles)(NavBar));
