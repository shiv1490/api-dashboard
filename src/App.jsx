import {
  AppBar,
  Toolbar,
  Box,
  makeStyles,
  Typography,
} from "@material-ui/core";
import List from "./components/List";

const useStyles = makeStyles({
  title: {
    alignItems: "center",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Box>
      <AppBar position="static" className={classes.title}>
        <Toolbar>
          <Typography variant="h6">API Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <List></List>
    </Box>
  );
}

export default App;
