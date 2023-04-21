import styles from "./card.module.css";
import { useState, useEffect } from "react";

// const questions = [];

function props() {
    const [questionActual, setQuestionActual] = useState(0);
    const [answerActual, setAnswerActual] = useState (0);
    const [correctans, setCorrectans] = useState(false);
    const [finishedLvl, setFinishedLvl] = useState(false);

    function handleAnswwerSubmit(){
      //añadir estilos de preguntas (añadir pregunta y cual es la correcta)
      e.target.classList.add(correct ? "corrects" : "incorrects");
      //cambiar a la siguiente pregunta

      setTimeout(() => {
        if (questionActual === questions.length - 1) {
          setFinishedLvl(true);
        } else {
          setQuestionActual(questionActual + 1);
        }
      }, 1500);
      
     
    }


    if(finishedLvl) return (
      <main className="card">
        <div className="game.finished">
          <span></span>
          <button onClick={() = (window.location.href = "/")}>Volver a jugar</button>
        </div>
        </main>
    )
    
    return (
    <main className="card">
      <article>
        <section className="tittleques">
          <span> {questions.[questionActual].question} </span>
        </section>

        <section className="answerques">
       {questions[questionActual].answers.map((respuesta) = (
            <button key={answers.correct} onClick={() = handleAnswwerSubmit()} > {answers.correct} </button>
        ))}
        </section>

        <section className="answerques2">
       {questions[questionActual].answers.map((respuesta) = (
            <button key={answers.correct} onClick={() = handleAnswwerSubmit()} > {answers.correct} </button>
        ))}
        </section>

        <section className="difficultlvl">
          <h2>Dificultad</h2>
          <li>Baja</li>
          <li>Media</li>
          <li>Alta</li>
        </section>

        <section className="favanswer">
          Añadir pregunta a favoritos
        </section>
      </article>
    </main>
  );
}
