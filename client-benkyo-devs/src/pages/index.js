import React, { useEffect, useState } from "react";
import Login from "../components/login/Login.jsx";
import Link from "next/link";
import Footer from "../components/footer/index.js";
import GameImage from "../components/gameImage/GameImage.jsx";
import Registro from "../components/registro/Registro.jsx";

function Home() {
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    if (showRegister) {
      document.getElementById("login").style.display = "none";
      document.getElementById("registro").style.display = "block";
    } else {
      document.getElementById("login").style.display = "block";
      document.getElementById("registro").style.display = "none";
    }
  }, [showRegister]);

  return (
    <>
      <div className="flex flex-col items-center">
        <div id="login">
          <Login />
          <p className="text-sky-500">
            Si no tienes cuenta,{" "}
            <span className="underline">
              <p onClick={() => setShowRegister(!showRegister)}>regístrate.</p>
            </span>
          </p>
        </div>
        <div id="registro">
          <Registro />
          <p className="text-sky-500">
            Si tienes cuenta,{" "}
            <span className="underline">
              <p onClick={() => setShowRegister(!showRegister)}>
                inicia sesión.
              </p>
            </span>
          </p>
        </div>
        <p className="text-center text-sky-600 pt-5">Or</p>
        <hr />
        <GameImage size={200} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
