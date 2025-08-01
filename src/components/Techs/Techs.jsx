import './Techs.css'
import { BoltIcon, JwtIcon, ExpressIcon, HtmlIcon, JsIcon, CssIcon, ReactIcon, NodeIcon, ScssIcon, ViteIcon, GitIcon, MongoIcon, InsomniaIcon, NpmIcon} from '../IconsComponents/ReExport';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Techs(){
    return(
        <section id='techs' data-aos="fade-up" data-aos-duration="900">
            <h1><BoltIcon/>Tecnologías y herramientas</h1>
            <div className="techs-container">
                <ul>
                    <li>
                        <h2>Front-End</h2>
                        <div className='techs-icons'>
                            <HtmlIcon />
                            <CssIcon />
                            <JsIcon />
                            <ReactIcon />
                            <ViteIcon />
                            <ScssIcon />
                            <GitIcon/>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h2>Back-End</h2>
                        <div className='techs-icons'>
                            <NodeIcon />
                            <MongoIcon />
                            <NpmIcon />
                            <ExpressIcon />
                            <InsomniaIcon />
                            <JwtIcon/>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Techs;