import { projects } from '../../assets/data/projects';
import ProjectsCard from './ProjectsCard';

function ProjectsList() {
  return (
    <div className="projects-list">
      {projects.map((proj, index) => (
        <ProjectsCard
          key={proj.id}
          title={proj.title}
          description={proj.description}
          image={proj.image}
          repoUrl={proj.repoUrl}
          demoUrl={proj.demoUrl}
          techs={proj.techs}
          className={`box-${index + 1}`}
        />
      ))}
    </div>
  );
}

export default ProjectsList;
