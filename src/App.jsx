import {
  AppBar,
  Toolbar,
  Box,
  makeStyles,
  Typography,
} from "@material-ui/core";
import List from "./components/List";
import apiImage from "./logo.png";

const useStyles = makeStyles({
  title: {
    alignItems: "left",
  },
  imageLogo: {
    height: "30px",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Box>
      <AppBar position="static" className={classes.title}>
        <Toolbar>
          <Box pr={2}>
            <img className={classes.imageLogo} src={apiImage} alt="img prop" />
          </Box>
          <Typography variant="h6">Service Details Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <List></List>
    </Box>
  );
}

export default App;
