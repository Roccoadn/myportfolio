import './Header.css'

function Header() {
    return (
        <header>
            <nav>
                <ul className='header-menu'>
                    <li><a href="#sobre-mi">Sobre mí</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;