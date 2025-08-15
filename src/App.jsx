import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { NavBar } from "./components/NavBar/NavBar";
import { Banner } from "./components/Banner/Banner";
import { Skills } from "./components/SkillsSection/Skills";
import { Certifications } from './components/CertificationsSection/Certifications';
import { Projects } from "./components/ProjectsSection/Projects";
import { Footer } from "./components/Footer/Footer";
import Experience from './components/ExperienceSection/Experience';
import CvSection from './components/CVSection/CvSection';
import Divider from './components/Divider/Divider';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00d4ff',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: 'CentraNo2, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <NavBar />
        <Banner />
        <div className="section-spacing-sm">
          <Skills />
        </div>
        <Divider />
        <div className="section-spacing-sm">
          <Certifications/>
        </div>
        <Divider />
        <div className="section-spacing-sm">
          <Experience/>
        </div>
        <Divider />
        <div className="section-spacing-sm">
          <Projects />
        </div>
        <Divider />
        <div className="section-spacing-sm">
          <CvSection/>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
