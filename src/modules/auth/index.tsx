import React, { useEffect, useState } from "react"
import { Grid, Button, makeStyles } from "@material-ui/core"
import { Link } from "react-router-dom";

// export interface HomeProps {

// }

const useStyles = makeStyles((theme) => ({
  box: {
    height: `${0.7 * screen.height}px`
  },
  button: {
    backgroundColor: "white",
    padding: "20px 50px",
    fontSize: "2rem",
    borderRadius: "10px",
  },
  link:{
    color:"black",
    textDecorationLine: "none"
  }
}));

const Login : React.FC/*<HomeProps>*/ =() => {
  const classes = useStyles()
  
  return ( 
    <Grid container className={classes.box} alignItems="flex-end" justify="center">
      <Grid item >
        <Button className={classes.button} size="large">
          <Link className={classes.link} to="/temporal">Connect</Link>
        </Button>
      </Grid>
    </Grid>
   );
}
 
export default Login 

