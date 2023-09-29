import { useState } from 'react';
import CardCopi from '@/components/card/CardCopi';
import datos from '../../../mocks/questions.json';

// import ErrorComponent from "./ErrorComponent";

const Card = () => {
    const [indexCardCurrent, setIndexCardCurrent] = useState(0);
    const data = datos.faciles[indexCardCurrent];

    const handleNextCard = () => {
        const nextIndexCard = indexCardCurrent + 1;

        if (nextIndexCard >= datos.faciles.length) {
            alert('No hay más preguntas');
            return;
        }

        setIndexCardCurrent(nextIndexCard);
    };

    if (!data) return <p>Cargando...</p>;

    return (
        <div className="flex flex-col items-center justify-content">
            <CardCopi data={data} />
        </div>
    );
};

export default Card;
