const CardId = ({ datos }) => {
  return (
    <section class="bg-blue-400 p-4 m-4 rounded-xl">
      <h1>CARD {datos.id}</h1>
      <p>{datos.pregunta}</p>
      <p>{datos.opciones[1]}</p>
      <p>{datos.opciones[0]}</p>
      <p>{datos.respuesta}</p>
    </section>
  );
};

export default CardId;
