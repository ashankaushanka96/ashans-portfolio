import { useMemo } from 'react';
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
import { PageBackground } from './components/common/PageBackground';
import { ColorModeProvider, useColorMode } from './contexts/ColorModeContext';

const buildTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#00d4ff',
    },
    secondary: {
      main: mode === 'dark' ? '#ffffff' : '#0f172a',
    },
    background: {
      default: mode === 'dark' ? '#070b14' : '#f4f6fb',
      paper: mode === 'dark' ? '#0f1626' : '#ffffff',
    },
    text: {
      primary: mode === 'dark' ? '#ffffff' : '#0f172a',
      secondary: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(15, 23, 42, 0.65)',
    },
  },
  typography: {
    fontFamily: 'CentraNo2, sans-serif',
  },
});

function ThemedApp() {
  const { mode } = useColorMode();
  const theme = useMemo(() => buildTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageBackground />
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

function App() {
  return (
    <ColorModeProvider>
      <ThemedApp />
    </ColorModeProvider>
  );
}

export default App;
