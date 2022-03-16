
import '../scss/projects.scss';

const Projects = ({ theme, setprojectNum, projectList }) => {
  return (
    <section className={theme ? 'projects container' : 'projects projects-dark container'}>
      <h2>PROJECTS</h2>
      <div className="project-cards">
        {projectList.slice(1).reverse().map(project=>{
          return (
            <button key={project.key} className="project-card" onClick={() => setprojectNum(project.key)}>
              <div className="img-div">
                <img src={project.imgMobile} alt="" />
              </div>
              <p>{project.title}</p>
            </button>
          )
        })}
       
      </div>
    </section>
  );
};

export default Projects;
