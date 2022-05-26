import uniqid from 'uniqid';
import { projects } from '../../utility/data';
import ProjectContainer from '../ProjectContainer';

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Our Projects</h2>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
