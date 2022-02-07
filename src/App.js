import Frontpage from './components/Frontpage';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Project from './components/Project';
import './app.scss';
import { useState } from 'react';
import {projectsEdit} from './projectsEdit';
import { RiGhostSmileLine } from 'react-icons/ri';


function App() {
  const [theme, setTheme] = useState(true);
  const [contactLink, setContactLink] = useState(<RiGhostSmileLine />);
  const [projectNum, setprojectNum] = useState(0);
  const projectList = projectsEdit;

  const changeTheme = () => {
    if (theme == true) {
      setTheme(false);
    } else if (theme == false) {
      setTheme(true);
    }
  }

  return (
    <div className="App">
      <Frontpage theme={theme} changeTheme={changeTheme} />
      <About theme={theme} />
      <Projects theme={theme} setprojectNum={setprojectNum} projectList={projectList}/>
      <Skills />
      <Contacts theme={theme} contactLink={contactLink} setContactLink={setContactLink} />
      <Footer />
      <Project theme={theme} projectNum={projectNum} setprojectNum={setprojectNum} projectList={projectList} />
    </div>
  );
}

export default App;
