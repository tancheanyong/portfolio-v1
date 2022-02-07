import '../scss/skills.scss';
import {FaBootstrap} from 'react-icons/fa';
import {IoLogoHtml5,IoLogoCss3,IoLogoJavascript,IoLogoSass,IoLogoReact,IoLogoNodejs} from 'react-icons/io5'

const Skills = () => {
  return (
    <section className='skills container'>
      <h2>SKILLS</h2>
      <div className="skills-cards">
        <div className="skills-card">
          <p className='skills-icon'><IoLogoHtml5 /></p>
          <p className='skills-name'>HTML 5</p>
        </div>
        <div className="skills-card">
          <p className='skills-icon'><IoLogoCss3 /></p>
          <p className='skills-name'>CSS 3</p>
        </div>
        <div className="skills-card">
          <p className='skills-icon'><IoLogoJavascript /></p>
          <p className='skills-name'>JavaScript</p>
        </div>
        <div className="skills-card">
          <p className='skills-icon'><IoLogoSass /></p>
          <p className='skills-name'>Sass</p>
        </div>
        <div className="skills-card">
          <p className='skills-icon'><FaBootstrap /></p>
          <p className='skills-name'>Bootstrap 5</p>
        </div>
        <div className="skills-card">
          <p className='skills-icon'><IoLogoReact /></p>
          <p className='skills-name'>React JS</p>
        </div>
        <div className="skills-card">
          <p className='skills-icon'><IoLogoNodejs /></p>
          <p className='skills-name'>Node JS</p>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
