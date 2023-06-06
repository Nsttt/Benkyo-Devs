import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image"

function Registro() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const showPassword = () => {
    if (password === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      console.log("Nombre:", username);
      console.log("Email:", email);
      console.log("Contraseña:", password);
    } else {
      setPasswordMatch(false);
    }
  };
  return (
    <div className="p-4 flex text-sky-500 flex-col gap-4 w-72 align-content: center">
      <div>
        <Image src={"/img/PropuestaBanner.png"} width={300} height={200} />
        <h2 className="p-4 flex text-sky-500 flex-col gap-4 w-72 text-4xl">
          {" "}
          Regístrate
        </h2>

        <form className="form" onSubmit={handleSubmit}>
          <div className="flex flex-col text-sm gap-1">
            <label htmlFor="userform">Username:</label>
            <input
              className="rounded-md max-w-sm shadow-lg border border-sky-200 p-2 m-2"
              id="username"
              onChange={handleNameChange}
              type="text"
              value={name}
              required={true}
            ></input>
          </div>

          <div className="flex flex-col text-sm gap-1">
            <label htmlFor="emailform">Email: </label>
            <input
              className="rounded-md max-w-sm shadow-lgl border border-sky-200 p-2 m-2"
              id="email"
              onChange={handleEmailChange}
              type="email"
              value={email}
              required={true}
            ></input>
          </div>

          <fieldset className="flex flex-col text-sm gap-1">
            <label htmlFor="password">
              Password:
              <span
                className="cursor-pointer pl-4 "
                onClick={() => {
                  showPassword();
                }}
              >
                {" "}
                {password == "text" ? "🔒" : "👀"}
              </span>
            </label>
            <input
              className="rounded-md max-w-sm shadow-lg border border-sky-200 p-2 m-2"
              type={password}
              id="password"
              value={password}
              required
              onChange={handlePasswordChange}
            />
          </fieldset>

          <fieldset className="flex flex-col text-sm gap-1">
            <label htmlFor="password">
              Confirm password:
              <span
                className="cursor-pointer pl-4 "
                onClick={() => {
                  showPassword();
                }}
              >
                {" "}
                {confirmPassword == "text" ? "🔒" : "👀"}
              </span>
            </label>
            <input
              className="rounded-md max-w-sm shadow-lg border border-sky-200 p-2 m-2"
              type={password}
              id="confirm-password"
              value={confirmPassword}
              required
              onChange={handleConfirmPasswordChange}
            />
            {!passwordMatch && (
              <p className="text-red-500 text-sm mt-1">
                Las contraseñas no coinciden.
              </p>
            )}
          </fieldset>

          <div className="allForm">
            <button
              className="flex justify-center w-32 shadow-xl bg-sky-500 text-white rounded-md p-2 m-2 hover:bg-sky-600"
              type="submit"
            >
              Siguiente
            </button>
          </div>
        </form>
      </div>

      <div className="text-sky-500">
        <p className="text">
          ¿Tienes una cuenta?
          <Link href="/login"> Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}

export default Registro;
