import './Hero.css'
import { GitHubIcon, LinkedinIcon, CurriculumIcon } from '../IconsComponents/ReExport';

function Hero(){
    return(
        <section id='sobre-mi'>
                <div className='avatar-container'>
                    <div className='avatar'></div>
                    <div className='open-to-work'>Open to work</div>
                </div>
                <h1>¡Hola, soy Rocco!</h1>
                <p>
                    Mi nombre es Rocco Andreone y soy <span> Front End Web Developer,</span> tengo conocimientos de Back End,<br />
                    pero me identifico mas con el stack del Front e intento <span>siempre estar aprendiendo<br />
                    tecnologias y herramientas nuevas</span> para ser cada vez mejor. 
                </p>
                <ul className='hero-icons-ul'>
                    <li>
                        <button>
                            <a href="https://www.linkedin.com/in/rocco-andreone">
                                <LinkedinIcon /> Linkedin
                            </a>
                        </button>
                    </li>
                    <li>
                        <button>
                            <a href="https://github.com/Roccoadn">
                                <GitHubIcon /> GitHub
                            </a>
                        </button>
                    </li>
                    <li>
                        <button>
                            <a href="/pdf/cv-es.pdf" target="_blank" rel="noopener noreferrer">
                                <CurriculumIcon /> Curriculum
                            </a>
                        </button>
                    </li>
                </ul>
        </section>
    )
}

export default Hero;