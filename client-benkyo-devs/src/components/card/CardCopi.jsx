import React, {useState} from 'react'

const COLORS_ACTIONS = {
  success: 'bg-green-400',
  error: 'bg-red-400',
};

const CardCopiAwser = ({ opcion, respuesta, evaluted, setEvaluted })  => {

  let color = 'bg-white';

  const handleClick = () => {
    setTimeout(() => {
      setEvaluted(true)
    }, 2000)
  }

  color = (evaluted && opcion === respuesta) 
    ? COLORS_ACTIONS.success 
    : COLORS_ACTIONS.error

  return (
    <button 
      onClick={() => handleClick()}
      type="button"
      className={`${color} text-2xl w-60 h-24 mx-10  border-solid border-2  rounded-lg`}>
      {opcion}
    </button>
  )
}

const CardCopi = ({ data }) => {

  if(!data) return <p>Error</p>

  const { id, pregunta, opciones, respuesta } = data;
  const [evaluted, setEvaluted] = useState(false);

  return (
    <div key={id} className="flex items-center justify-center">
      <section className="flex flex-col items-center justify-center bg-cyan-300 rounded-lg mb-3 p-3">
        <p className="mb-10">{pregunta}</p>
        <form className="flex">
          <CardCopiAwser opcion={opciones} respuesta={respuesta} evaluted={evaluted} setEvaluted={setEvaluted} />
        </form>
        {/* <p>{datos.respuesta}</p> */}
      </section>
    </div>
  );
};

export default CardCopi;
