import { useState } from "react";

const Card = ({ dato }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <h1>{dato.id}</h1>
      <p>{dato.pregunta}</p>
      <p>{dato.opciones[1]}</p>
      <p>{dato.opciones[0]}</p>
      <section
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={handleClick}
      >
        Ver respuesta
      </section>
      <p>{dato.respuesta}</p>
      <button>siguiente Card</button>
    </>
  );
};

export default Card;
