import './Projects.css'
import ProjectsList from './ProjectsList';
import { CodeIcon } from '../IconsComponents/ReExport'

function Projects(){
    return(
        <section id='projects'>
            <h1><CodeIcon/> Proyectos</h1>
            <ProjectsList></ProjectsList>
            <button className='repo-button'>
                <a href="https://github.com/Roccoadn?tab=repositories" target="_blank" rel="noopener noreferrer">
                    Ver más
                </a>
            </button>
        </section>
    )
}

export default Projects;