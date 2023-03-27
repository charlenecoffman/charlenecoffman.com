import "./styles/App.css";
import { Grid, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import MainNavBar from "./components/navbar/MainNavBar";
import SocialLinks from "./components/SocialLinks";
import MainPage from "./components/MainPage";
import Resume from "./components/Resume";
import BottomSection from "./components/footer/BottomSection";
import FizzBuzz from "./components/FizzBuzz";
import Palindrome from "./components/Palindrome";
import CountOccurances from "./components/CountOccurances";
import Spotify from "./components/Spotify";
import MobProg from "./components/MobProg";
import Contact from "./components/Contact";
import Leaders from "./components/Leaders";
import PetProjects from "./components/PetProjects";
import theme from './styles/theme';

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
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <SocialLinks />
            <MainNavBar />
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/fizzbuzz" element={<FizzBuzz />} />
                <Route path="/palindrome" element={<Palindrome />} />
                <Route path="/countoccur" element={<CountOccurances />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/spotify" element={<Spotify />} />
                <Route path="/mob" element={<MobProg />} />
                <Route path="/leaders" element={<Leaders />} />
                <Route path="/projects" element={<PetProjects />} />
              </Routes>
            <BottomSection/>
          </BrowserRouter>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
}

export default App;
