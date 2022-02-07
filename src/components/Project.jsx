import '../scss/project.scss';
import { IoClose, IoLogoGithub, IoCaretForwardCircleOutline } from 'react-icons/io5';

const Project = ({theme, projectNum, setprojectNum, projectList }) => {
  return (
    <section className={projectNum!=0 ? 'project' : 'project hide'}>
      <div className={theme?"project-container":'project-container project-dark'}>
        <button className="close-button" onClick={() => setprojectNum(0)}><IoClose /></button>
        <div className={theme?"project-window":'project-window window-dark'}>
          <div className="project-card-deco">
            <div className="red-dot dot"></div>
            <div className="yel-dot dot"></div>
            <div className="green-dot dot"></div>
          </div>
          <img src={projectList[projectNum].img} alt="" />
        </div>
        
        <div className="project-info">
          <h3>{projectList[projectNum].title}</h3>
          <p>{projectList[projectNum].desc}</p>
        </div>
        <div className="project-bottom">
          <div className="project-frameworks">
            {projectList[projectNum].frameworks.map(framework=>{
              return <span key={projectList[projectNum].key}>{framework}</span>
            })}
          </div>
          <div className={theme?"project-links":'project-links links-dark'}>
            <a title="View Source Code" target='_blank' href={projectList[projectNum].github}><IoLogoGithub /></a>
            <a title="View Live" target='_blank' href={projectList[projectNum].live}><IoCaretForwardCircleOutline /></a>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Project;
