const Card = ({ dato }) => {
  return (
    <>
      <h1>{dato.id}</h1>
      <p>{dato.pregunta}</p>
      <p>{dato.opciones[1]}</p>
      <p>{dato.opciones[0]}</p>
      <p>{dato.respuesta}</p>
      <button>siguiente Card</button>
    </>
  );
};

export default Card;

// crear efecto reverso en este archivo
