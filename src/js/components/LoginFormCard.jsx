import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import ButtonGroup from "@material-ui/core/ButtonGroup";

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
              <Button>Login</Button>
              <Button>Sign Up</Button>
            </ButtonGroup>
          </CardActions>
        </form>
      </Card>
    );
  }
}

export default withStyles(styles)(LoginFormCard);
