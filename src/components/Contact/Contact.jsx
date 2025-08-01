import { PhoneIcon, LinkedinIcon, GitHubIcon } from '../IconsComponents/ReExport'
import ContactForm from "../ContactForm/ContactForm";
import './Contact.css'

function Contact() {
    return(
        <section id="contact">
            <h1><PhoneIcon/> Contacto</h1>
            <div className="contact-area">
                <div className="contact-links">
                    <p>En caso de que te interese contactarme,<br />
                        te dejo un espacio para poder hacerlo.
                    </p>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/rocco-andreone"><LinkedinIcon /></a></li>
                        <li><a href="https://github.com/Roccoadn"><GitHubIcon /></a></li>
                    </ul>
                </div>
                <ContactForm />
            </div>
        </section>
    )
};

export default Contact;