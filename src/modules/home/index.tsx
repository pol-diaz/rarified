import React from "react"
import { Box, Button, makeStyles } from "@material-ui/core"

// export interface HomeProps {
  
// }
 
const useStyles = makeStyles((theme) => ({
  home: {
    backgroundColor:"#3D3D3D",
    height: "100%"
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

const Home: React.FC/*<HomeProps>*/ = () => {
  const classes = useStyles()
  
  return ( 
    <Box className={classes.home}>
      hola
    </Box>
   );
}
 
export default Home;