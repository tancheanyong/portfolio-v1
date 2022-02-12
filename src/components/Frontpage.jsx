import ReactRotatingText from 'react-rotating-text';
import {BsCodeSlash,BsMoonStarsFill,BsSunFill} from 'react-icons/bs';
import '../scss/frontpage.scss';
import { useState } from 'react';

const Frontpage = ({theme,changeTheme}) => {
  const typeText=['WEB DEVELOPER','FRONTEND DEVELOPER','REACTJS DEVELOPER'];

  return (
    <section className={theme? 'frontpage':'frontpage frontpage-dark'}>
      <div className="frontpage-content">
          <p className='logo'><BsCodeSlash /></p> 
          <h1>Tan Chean Yong</h1>
          <h2><ReactRotatingText items={typeText} typingInterval={100} /></h2>
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
