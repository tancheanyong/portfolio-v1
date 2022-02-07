import { FaReact } from 'react-icons/fa';
import '../scss/about.scss';

const About = ({ theme }) => {
  return (
    <section className={theme ? "about container " : "about about-dark container "}>
      <h2>ABOUT ME</h2>
      <div className="about-content">
        <div className="picture-card picture-card-dark">
          <img src={require("../img/pfp.jpg")} alt="" />
          <p><FaReact /></p>
        </div>
        <div className={theme?"about-card":"about-card about-card-dark"}>
          <div className="about-card-deco">
            <div className="red-dot dot"></div>
            <div className="yel-dot dot"></div>
            <div className="green-dot dot"></div>
          </div>
          <div className="about-card-content">
            <h3>Hi</h3>
            <p>I am a front end web developer from Malaysia. I'm working with front end frameworks such as Bootstrap and React.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
