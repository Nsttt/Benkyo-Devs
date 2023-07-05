import { useState ,useEffect} from "react";
import ButtonQuestion from "./button-question/ButtonQuestion";

const COLORS_ACTIONS = {
  success: "bg-green-400",
  error: "bg-red-400",
  unanswered: "bg-white",
};


const Card = ({ cardData, setIsAnswerCorrect }) => {
  const [buttonLeftColor, setButtonLeftColor] = useState(
    COLORS_ACTIONS.unanswered
  );
  const [buttonRightColor, setButtonRightColor] = useState(
    COLORS_ACTIONS.unanswered
  );

  const checkAnswer = (target) => {
    const isCorrect = target.textContent === respuesta;
    const color = isCorrect ? COLORS_ACTIONS.success : COLORS_ACTIONS.error;
    const otherColor = isCorrect
      ? COLORS_ACTIONS.error
      : COLORS_ACTIONS.success;
    if (target.id === "1") {
      setButtonLeftColor(color);
      setButtonRightColor(otherColor);
    } else {
      setButtonLeftColor(otherColor);
      setButtonRightColor(color);
    }
    if (isCorrect) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  if (!cardData) {
    return <ErrorComponent />;
  }

  useEffect(() => {
    addEventListener("click", (e) => {
      if (e.target.title === "button") {
        checkAnswer(e.target);
      }
      return () => {
        removeEventListener("click", (e) => {
          if (e.target.title === "button") {
            checkAnswer(e.target);
          }
        });
      };
    });
  }, []);

  const { id, pregunta, opciones, respuesta } = cardData;

  return (
    <div key={id} className="flex items-center justify-center pt-10">
      <section className="flex flex-col items-center justify-center bg-sky-100 rounded-lg shadow-xl w-auto h-72 pt-3"></section>
        <p className="mb-5 mx-4">{pregunta}</p>
        <form className="flex">
          <ButtonQuestion id="1" texto={opciones[0]} color={buttonLeftColor} />
          <ButtonQuestion id="2" texto={opciones[1]} color={buttonRightColor} />
        </form>
      </section>
    </div>
  );
};

export default Card;
