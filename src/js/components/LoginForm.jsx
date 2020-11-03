import React, { Component } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Paper,
  Typography,
  MenuItem,
  Select,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { withStyles } from "@material-ui/core/styles";

import styles from "../../styles/LoginFormStyles";

class LoginForm extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.root}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Sign In</Typography>
          <Select>
            <MenuItem>English</MenuItem>
            <MenuItem>French</MenuItem>
            <MenuItem>Spanish</MenuItem>
          </Select>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(LoginForm);
