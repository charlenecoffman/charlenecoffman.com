import "./App.css";
import { createTheme, Grid, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MainNavBar from "./components/navbar/MainNavBar";
import MainPage from "./components/MainPage";
import BottomSection from "./components/footer/BottomSection";

const theme = createTheme({
  palette: {
    primary: {
      main: "#797979",
      contrastText: "#FFFAFA",
    },
    secondary: {
      main: "#FFFAFA",
      contrastText: "#c4c4c4",
    },
    // warning: {},
  },
  typography: {
    fontFamily: "Uchen-Regular",
    fontSize: 18,
  },
});

function App() {
  const history = createBrowserHistory();

  // eslint-disable-next-line no-restricted-globals
  const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
  if (path) {
    history.replace(path);
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Router>
          <ThemeProvider theme={theme}>
            <MainNavBar />
            <Switch>
              <Route exact path="/">
                <MainPage />
              </Route>
            </Switch>
            <BottomSection />
          </ThemeProvider>
        </Router>
      </Grid>
    </Grid>
  );
}

export default App;
