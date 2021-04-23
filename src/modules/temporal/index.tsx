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
    fontSize: "2rem",
    borderRadius: "10px",
    padding: "20px 0"
  },
  link:{
    color:"black",
    textDecorationLine: "none"
  }
}));

const Temporal : React.FC/*<HomeProps>*/ =() => {
  const classes = useStyles()
  
  return ( 
    <Grid container className={classes.box} alignItems="flex-end" justify="center" spacing={2} sm={12}>
      <Grid item md={3} sm={6} lg={2}>
        <Button fullWidth className={classes.button} size="large">
          <Link className={classes.link} to={"/"}>Create</Link>
        </Button>
      </Grid>
      <Grid item md={3} sm={6} lg={2}>
        <Button fullWidth className={classes.button} size="large">Discover</Button>
      </Grid>
    </Grid>
   );
}
 
export default Temporal 

