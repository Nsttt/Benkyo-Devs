import datos from "../../../mocks/questions.json";

const CardCopi = () => {
  console.log(datos);
  return (
    // <h1>holasss hooyyyy</h1>
    <ul>
      <h1>Card</h1>
      {datos &&
        datos.faciles.map((dato) => {
          return (
            <div
              key={dato.id}
              className="flex items-center justify-center h-screen  "
            >
              <section className="felx flex-col flex items-center justify-center  bg-cyan-300 w-96-44 h-80 rounded-lg">
                <h1 className="text-blue-600 mb-10">CARD {dato.id}</h1>
                <p className="mb-10">{dato.pregunta}</p>
                <form className="">
                  <button
                    type="button"
                    className="bg-white text-2xl w-60 h-24 mx-10  border-solid border-2  rounded-lg"
                  >
                    {dato.opciones[1]}
                  </button>
                  <button className="bg-white text-2xl w-60 h-24 mx-10  border-solid border-2  rounded-lg">
                    {dato.opciones[0]}
                  </button>
                </form>

                {/* <p>{datos.respuesta}</p> */}
              </section>
            </div>
          );
        })}
    </ul>
  );
};

export default CardCopi;
