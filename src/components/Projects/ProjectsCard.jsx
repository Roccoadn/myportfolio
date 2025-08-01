import './Projects.css'
import TechIcon from '../IconsComponents/TechIcon';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function ProjectsCard({ title, description, image, repoUrl, demoUrl, techs, className}) {
  return (
    <div className={`projects-card ${className}`} data-aos="fade-up" data-aos-duration="900">
      <img src={image} alt={`Preview de ${title}`} />
      <div className='card-info-container'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="icons">
          {techs.map((tech, i) => (
            <TechIcon key={i} name={tech} />
          ))}
        </div>
        <div className='button-card-container'>
          <button>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="card-link">
              Ver repositorio
            </a>
          </button>
          <button>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="card-link">
              Ver Demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;