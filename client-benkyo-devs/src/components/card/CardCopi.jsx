import { useState } from "react";

const COLORS_ACTIONS = {
  success: "bg-green-400",
  error: "bg-red-400",
};
let color = "bg-white";
const CardCopiAwser = ({ opcion, respuesta, evaluted, setEvaluted }) => {
  const handleClick = () => {
    setEvaluted(true);
    setTimeout(() => {
      setEvaluted(false);
    }, 2000);
  };

  color =
    evaluted && opcion === respuesta
      ? COLORS_ACTIONS.success
      : COLORS_ACTIONS.error;

  return (
    <button
      onClick={() => handleClick()}
      type="button"
      className={`${
        evaluted ? color : "bg-white"
      } text-1xl mx-7  border-solid border-2  rounded-lg mt-10 max-w-[20rem] w-fit h-fit p-8`}
    >
      {opcion}
    </button>
  );
};

const CardCopi = ({ data }) => {
  if (!data) {
    return <ErrorComponent/>;
  }

  const { id, pregunta, opciones, respuesta } = data;
  const [evaluted, setEvaluted] = useState(false);

  return (
    <div key={id} className="flex items-center justify-center pt-10">
      <section className="flex flex-col items-center justify-center bg-sky-100 rounded-lg shadow-xl w-auto h-72 pt-3">
        <p className="mb-5 mx-4">{pregunta}</p>
        <form className="flex">
          <CardCopiAwser
            opcion={opciones[0]}
            respuesta={respuesta}
            evaluted={evaluted}
            setEvaluted={setEvaluted}
          />
          <CardCopiAwser
            opcion={opciones[1]}
            respuesta={respuesta}
            evaluted={evaluted}
            setEvaluted={setEvaluted}
          />
        </form>
      </section>
    </div>
  );
};

export default CardCopi;
