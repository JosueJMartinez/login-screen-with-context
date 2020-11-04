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
					<InputLabel id="label">Age</InputLabel>
          <Select value='english'>
            <MenuItem value='English'>English</MenuItem>
            <MenuItem value='French'>French</MenuItem>
            <MenuItem value='Spanish'>Spanish</MenuItem>
          </Select>
					<form className={classes.form}>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor='email'>
								Email
							</InputLabel>
							<Input id='email' name='email' autoFocus />
						</FormControl>
						<FormControl margin="normal" required fullWidth>
							<InputLabel htmlFor='password'>
									Password
								</InputLabel>
								<Input id='password' name='password'  />
						</FormControl>
						<FormControlLabel control={<Checkbox color="primary" />} label="Remember Me" />
						<Button variant='contained' type='submit' fullWidth color='primary' className={classes.submit} >
							Sign In
						</Button>
						
					</form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(LoginForm);
