/*
  Recomendación
  El componente image de Next es una buena opción porque permite optimizar las imágenes
  documentación: https://nextjs.org/docs/api-reference/next/image
*/
import Image from 'next/image';
import { useState } from 'react';

/*
  Recomendación
  Es una buena prácticar cuando se repite el uso de algún componente, crear un array de objetos
  con los datos que se van a utilizar, en este caso, los datos de las dificultades
*/
const DIFICULTS = [
    {
        id: 1,
        name: 'Fácil',
        img: '/img/DificultadFacil.png',
    },
    {
        id: 2,
        name: 'Media',
        img: '/img/DificultadMedia.png',
    },
    {
        id: 3,
        name: 'Difícil',
        img: '/img/DificultadDificil.png',
    },
];

const DifficultySelector = () => {
    const [dificultIdSelected, setDificultIdSelected] = useState(
        DIFICULTS[0].id,
    );

    return (
        <section className="flex gap-3">
            {DIFICULTS.map((dificult) => {
                const { id, name, img } = dificult;

                const opacity =
                    dificultIdSelected === id ? 'opacity-100' : 'opacity-50';
                const grayScale =
                    dificultIdSelected === id ? 'grayscale-0' : 'grayscale';

                return (
                    <div
                        key={id}
                        className={`
              hover:opacity-100
              transition-all duration-500 ease-in-out
              flex flex-col items-center justify-center 
              cursor-pointer ${grayScale} ${opacity}
            `}
                        onClick={() => setDificultIdSelected(id)}
                    >
                        <Image src={img} alt={name} width={50} height={50} />
                        <p className="text-xs">{name}</p>
                    </div>
                );
            })}
        </section>
    );
};

export default DifficultySelector;
