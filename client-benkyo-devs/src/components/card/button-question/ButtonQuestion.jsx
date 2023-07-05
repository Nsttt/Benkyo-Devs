import React from "react";

const ButtonQuestion = ({ texto, color, id }) => {
  return (
    <button
      type="button"
      title="button"
      id={id}
      className={`${color} text-1xl mx-7 order-solid border-2  rounded-lg mt-10 max-w-[20rem] w-fit h-fit p-8`}
      onClick={() => console.log("hola")}
    >
      {texto}
    </button>
  );
};

export default ButtonQuestion;