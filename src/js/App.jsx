import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";

import NavBar from "./components/NavBar";
import LoginFormCard from "./components/LoginFormCard";

const styles = {
	root:{
		height:'100%'
	},
	grid:{
		height:'100%'
	}
}

function App(props) {
	const {classes} = props;
	
  return (
    <div className={classes.root}>
      <NavBar />
			<Grid className={classes.grid} container justify="center" alignItems="center"
			>
				<Grid item xs={11} sm={9} md={6} lg={4} >
					<LoginFormCard />
				</Grid>
			</Grid>
			
    </div>
  );
}

export default withStyles(styles)(App);
