import React from "react";

function NextCard({ handleNextCard }) {
  return (
    <button
      onClick={handleNextCard}
      className="flex justify-center items-center pt-10 rounded-xl w-40"
    >
      <img src={"img/flecha-correcta.png"} width={100} />
    </button>
  );
}

export default NextCard;
