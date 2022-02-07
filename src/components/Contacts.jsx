import '../scss/contacts.scss';
import { IoLogoLinkedin, IoLogoGithub, IoMail, IoNewspaper } from 'react-icons/io5';
import {RiGhostSmileLine} from 'react-icons/ri';

const Contacts = ({theme,contactLink,setContactLink}) => {
  return (
    <section className={theme?'contacts container':'contacts contacts-dark container'}>
      <h2 onMouseOver={()=>setContactLink(<RiGhostSmileLine />)}>CONNECT WITH ME</h2>
      <div className="contacts-content">
        <div className="contacts-cards">
          <a className={theme?'contacts-icon':'contacts-icon contacts-icon-dark'} onMouseOver={()=>setContactLink('linkedin/tancheanyong')} href='https://www.linkedin.com/in/tancheanyong/' target='_blank'><IoLogoLinkedin /></a>
          <a className={theme?'contacts-icon':'contacts-icon contacts-icon-dark'} onMouseOver={()=>setContactLink('github/tancheanyong')} href='https://github.com/tancheanyong' target='_blank'><IoLogoGithub /></a>
          <p className={theme?'contacts-icon':'contacts-icon contacts-icon-dark'} 
          onMouseOver={()=>setContactLink('tancheanyong.gmail.com')} 
          onClick={() => {
            navigator.clipboard.writeText('tancheanyong.gmail.com');
            setContactLink('Email Copied!')
            }}>
              <IoMail /></p>
          <a className={theme?'contacts-icon':'contacts-icon contacts-icon-dark'} onMouseOver={()=>setContactLink('My Resume')} href="./documents/TanCheanYongResume.pdf" download><IoNewspaper /></a>
        </div>
        <div className="link-display" onMouseOver={()=>setContactLink(<RiGhostSmileLine />)}>
          <p className="contacts-link">{contactLink}</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
