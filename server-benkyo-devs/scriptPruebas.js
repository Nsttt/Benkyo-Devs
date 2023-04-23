"use strict";

let muestra; // json de preguntas
let correct; //respuesta correcta
let index = 0;
let question = document.querySelector(".question");
let answers = document.querySelector(".answers");
let answerA = document.querySelector(".answerA");
let answerB = document.querySelector(".answerB");
let reverse = document.querySelector(".reverse");

answers.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    //comprobar que se presiona el li y no la section
    let answersPlayer = e.target.innerHTML; // definir que li presiona el jugador
    correct = muestra[index].correct;
    console.log(muestra[index].correct); // definir cual es la correcta
    if (answersPlayer === correct || answersPlayer !== correct) {
      // si el jugador acierta

      answers.style.display = "none";
      question.style.display = "none";
      setTimeout(() => {
        reverseCard(muestra[index]);
      }, 2000);
    }
    index++; // tanto si acierta como no se suma uno al índice que recorre las preguntas

    if (index < muestra.length) {
      //mientras que el indice sea menor que el tamaño del array se recorre el array
      writeQuestion(muestra[index]);
      writeAnswers(muestra[index]);
    } else if (index === muestra.length) {
      // cuando se llegue al final del array de preguntas
      //se ocultan las preguntas, respuestas
      answer.style.display = "none";
      question.style.display = "none";
    }

    return;
  }
});

//crear la funcion para sacar los datos del json
async function loadJSONData(url) {
  try {
    let response = await fetch(url);

    if (response.ok) {
      muestra = await response.json();
      console.log("dentro de muestra", muestra);
      return muestra;
    } else {
      console.log("hubo un error en loadjson");
    }

    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

function reverseCard(r) {
  reverse.innerHTML = r.reverse;
}
//Funcion para las preguntas
function writeQuestion(q) {
  question.textContent = q.question;
}

//Funcion para las respuestas
function writeAnswers(a) {
  answerA.textContent = a.answers[0];
  answerB.textContent = a.answers[1];
}

//Función principal que hace funcionar el juego. Alerta si hubo un error de carga
async function card() {
  try {
    muestra = await loadJSONData("muestra.json");
    console.log(muestra);
    //Sacar las preguntas en aleatorio sin repetir;
    let index;
    let j;
    let k;
    for (index = muestra.length; index; index--) {
      j = Math.floor(Math.random() * index);
      k = muestra[index - 1];
      muestra[index - 1] = muestra[j];
      muestra[j] = k;
    }

    writeQuestion(muestra[index]);
    writeAnswers(muestra[index]);

    correct = muestra[index].correct;
  } catch (error) {
    error = alert("Hubo un error en card");
  }
}
card();
