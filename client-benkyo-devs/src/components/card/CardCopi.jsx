const CardCopi = ({ data }) => {

  if(!data) return <p>Error</p>

  const { id, pregunta, opciones } = data;

  return (
    <div key={id} className="flex items-center justify-center">
      <section className="flex flex-col flex items-center justify-center bg-cyan-300 rounded-lg mb-3 p-3">
        <p className="mb-10">{pregunta}</p>
        <form className="flex">
          <button
            type="button"
            className="bg-white text-2xl w-60 h-24 mx-10  border-solid border-2  rounded-lg"
          >
            {opciones[1]}
          </button>
          <button className="bg-white text-2xl w-60 h-24 mx-10  border-solid border-2  rounded-lg">
            {opciones[0]}
          </button>
        </form>

        {/* <p>{datos.respuesta}</p> */}
      </section>
    </div>
  );
};

export default CardCopi;
