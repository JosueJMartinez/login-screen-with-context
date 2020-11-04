import React, { useContext } from "react";
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
import { LanguageContext } from "../contexts/LanguageContext";

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

function NavBar(props) {
  const { classes } = props;
  const { isDarkMode, toggleIsDarkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const { search, lang } = words[language];

  return (
    <div className={classes.root}>
      <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
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

export default withStyles(styles)(NavBar);
