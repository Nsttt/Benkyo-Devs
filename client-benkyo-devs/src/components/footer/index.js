const Footer = () => {
    return (
        <footer
            className="bg-sky-800 text-white text-center sticky bottom-0 p-8">
            ¡Hecho con ❤️ para estudiantes de programación!
            Dejale una estrella a este proyecto en
            <a
                href="https://github.com/Carol-88/Benkyo-Devs"
                className="text-green-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
            > Github
            </a>
        </footer>
    );
}
//probar sticky y bottom-0 para bajar el footer

export default Footer;