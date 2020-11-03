import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  ButtonGroup,
  Typography,
  TextField,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import styles from "../../styles/LoginFormCardStyles";

class LoginFormCard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.root} variant="outlined">
        <form>
          <CardContent className={classes.formPadding}>
            <Typography
              className={classes.title}
              variant="h5"
              component="h2"
            >
              Please Sign In
            </Typography>
            <TextField
              // value={input}
              // onChange={e => setInput(e.target.value)}
              className={classes.cardContentInputs}
              id="outlined-basic"
              label="Username"
              variant="outlined"
              fullWidth
            />
            <TextField
              // value={input}
              // onChange={e => setInput(e.target.value)}
              className={classes.cardContentInputs}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth
            />
          </CardContent>
          <CardActions className={classes.formPadding}>
            <ButtonGroup
              size="small"
              aria-label="sign-in/sign-up button group"
            >
              <Button color="primary">Login</Button>
              <Button color="secondary">Sign Up</Button>
            </ButtonGroup>
          </CardActions>
        </form>
      </Card>
    );
  }
}

export default withStyles(styles)(LoginFormCard);
