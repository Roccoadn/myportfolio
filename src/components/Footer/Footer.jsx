import './Footer.css'
import { LinkedinIcon, GitHubIcon } from '../IconsComponents/ReExport'

function Footer() {
    return (
        <footer id='footer'>
            <div>
                <ul>
                    <li><h3>Creado por <span>Roccoadn</span></h3></li>
                    <li><a href="https://www.linkedin.com/in/rocco-andreone"><LinkedinIcon/></a></li>
                    <li><a href="https://github.com/Roccoadn"><GitHubIcon/></a></li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;