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
              <section className="felx flex-col flex items-center justify-center  bg-bg-card w-w-card h-h-card rounded-card ">
                <h1 className="text-blue-600 mb-10">CARD {dato.id}</h1>
                <p className="mb-10">{dato.pregunta}</p>
                <form className="">
                  <button
                    type="button"
                    className="bg-bg-btn text-f-sz-textcard w-w-btn h-h-btn  mx-10  border-solid border-2  rounded-card"
                  >
                    {dato.opciones[1]}
                  </button>
                  <button className="bg-bg-btn text-f-sz-textcard w-w-btn h-h-btn mx-10 w-btn border-solid border-2  rounded-card ">
                    {dato.opciones[0]}
                  </button>
                </form>

                {/* <p>{datos.respuesta}</p> */}
              </section>
            </div>
            // <li key={dato.id}>
            //   <Card dato={dato} />;
            // </li>
          );
        })}
    </ul>
  );
};

export default CardCopi;
