import {BsCodeSlash,BsMoonStarsFill,BsSunFill} from 'react-icons/bs';
import '../scss/frontpage.scss';

const Frontpage = ({theme,changeTheme}) => {
  return (
    <section className={theme? 'frontpage':'frontpage frontpage-dark'}>
      <div className="frontpage-content">
          <p className='logo'><BsCodeSlash /></p> 
          <h1>Tan Chean Yong</h1>
          <h2>WEB DEVELOPER</h2>

          <input type="checkbox" id="checkbox" className='checkbox' onClick={changeTheme}/>
          <label className="toggle" htmlFor='checkbox'>
            <p>
              <BsMoonStarsFill />
              <BsSunFill />
            </p>
          </label>
      </div>
      <div className="frontpage-buttons">
        <a href="https://www.linkedin.com/in/tancheanyong/" target='_blank' className='frontpage-button front-linkedin'>LinkedIn</a>
        <a href="./documents/TanCheanYongResume.pdf" download className='frontpage-button front-resume'>Resume</a>
      </div>
    </section>
  );
};

export default Frontpage;
