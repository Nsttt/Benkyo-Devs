import { useState, useEffect } from 'react';
import Card from '@/components/card/Card';
import datos from '../../../mocks/questions.json';

// import ErrorComponent from "./ErrorComponent";

const GameScreen = () => {
    const [indexCardCurrent, setIndexCardCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const cardData = datos.faciles[indexCardCurrent];
    //
    useEffect(() => {
        if (isAnswerCorrect) {
            setScore(score + 1);
        }
    }, [isAnswerCorrect]);

    const handleNextCard = () => {
        const nextIndexCard = indexCardCurrent + 1;

        if (nextIndexCard >= datos.faciles.length) {
            alert('No hay más preguntas');
            return;
        }

        setIndexCardCurrent(nextIndexCard);
    };

    if (!cardData) return <p>Cargando...poner imagen</p>;

    return (
        <div className="flex flex-col items-center justify-content">
            <p>{score}</p>
            <Card cardData={cardData} setIsAnswerCorrect={setIsAnswerCorrect} />
        </div>
    );
};

export default GameScreen;
