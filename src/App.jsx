import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { Skills } from "./components/SkillsSection/Skills";
import { Certifications } from "./components/CertificationsSection/Certifications";
import { Projects } from "./components/ProjectsSection/Projects";
import { Footer } from "./components/Footer/Footer";
import Experience from "./components/ExperienceSection/Experience";
import CvSection from "./components/CVSection/CvSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skills />
      <Certifications />
      <Experience />
      <Projects />
      <CvSection />
      <Footer />
    </div>
  );
}

export default App;
