import DevCard from '../../components/devCard/DevCard.jsx';

export default function AboutUs() {
    return (
        <main>
            <h1>About Us</h1>
            <p>
                {' '}
                Benkyo Devs ha sido desarrollada con cariño y amor y todo eso
                por el siguiente equipo:{' '}
            </p>
            <div className="flex flex-row items-center">
                <div className="flex flex-col items-center">
                    <h2>Frontend</h2>
                    <ul>
                        <DevCard
                            name="Jorge"
                            email="jorge@currante.com"
                            github="Git"
                            linkedin="LinkedIn"
                        />
                        <DevCard
                            name="Jorge"
                            email="mas@ejemplos"
                            github="Git"
                            linkedin="Linkedin"
                        />
                        <DevCard
                            name="Jorge"
                            email="mas@ejemplos"
                            github="Git"
                            linkedin="Linkedin"
                        />
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <h2>Backend</h2>
                    <ul>
                        <DevCard
                            name="Jorge"
                            email="mas@ejemplos"
                            github="Git"
                            linkedin="Linkedin"
                        />
                        <DevCard
                            name="Jorge"
                            email="mas@ejemplos"
                            github="Git"
                            linkedin="Linkedin"
                        />
                        <DevCard
                            name="Jorge"
                            email="mas@ejemplos"
                            github="Git"
                            linkedin="Linkedin"
                        />
                    </ul>
                </div>
            </div>
        </main>
    );
}
