import { makeStyles } from "@material-ui/styles";
import Title from "./Component/Title";
import Tags from "./Component/Tags";
import Watch from "./Component/Watch";


const useStyles = makeStyles({
  appfile: {
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(390deg, black,magenta,violet)',
  }
})
function App() {
  const classes = useStyles();
  return (
      <div className={classes.appfile}>
        <Title />
        <Watch />
        <Tags />
      </div>
  );
}

export default App;
