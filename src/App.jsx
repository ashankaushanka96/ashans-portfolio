import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Certifications } from './components/Certifications';
import Experience from './components/Experience';
import CvSection from './components/CvSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Certifications/>
      <Experience/>
      <Projects />
      <CvSection/>
      <Footer />
    </div>
  );
}

export default App;
