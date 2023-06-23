import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"
import banner from "./img/PropuestaBanner.png";


function Registro() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      email: email,
      password: password,
    };

    const newUserJson = JSON.stringify(newUser);

    const res = await fetch(`${process.env.URL_API}/register`, {
      method: "POST",
      body: newUserJson,
      headers: {
        "Content-type": "application/json",
      },
    });

    const responseBody = await res.json();
    if (!res.ok) {
      toast.error(responseBody.message);
      return;
    }

    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  
  return (
    <>
      <div>
        <Image src={banner} width={300} height={200} />
        <h2 className="p-4 flex text-sky-500 flex-col gap-4 w-72 text-2xl">
          {" "}
          Regístrate
        </h2>

        <form className="form" onSubmit={handleSubmit}>
          <div className="flex flex-col text-sm gap-1">
            <label htmlFor="userform">Username:</label>
            <input
              className="rounded-md max-w-sm shadow-lg border border-sky-200 p-2 m-2"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              value={username}
              required
            ></input>
          </div>

          <div className="flex flex-col text-sm gap-1">
            <label htmlFor="emailform">Email: </label>
            <input
              className="rounded-md max-w-sm shadow-lgl border border-sky-200 p-2 m-2"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              required
            ></input>
          </div>

          <fieldset className="flex flex-col text-sm gap-1">
            <label htmlFor="password">
              Password:
              <span
                className="cursor-pointer pl-4 "
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👀" : "🔒"}
              </span>
            </label>
            <input
              className="rounded-md max-w-sm shadow-lg border border-sky-200 p-2 m-2"
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col text-sm gap-1">
            <label htmlFor="password">
              Confirm password:
              <span
                className="cursor-pointer pl-4 "
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "👀" : "🔒"}
              </span>
            </label>
            <input
              className="rounded-md max-w-sm shadow-lg border border-sky-200 p-2 m-2"
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              value={confirmPassword}
              required
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordMatch(e.target.value === password);
              }}
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

        <div>
        <p className="text">
          ¿Tienes una cuenta?
          <Link href="/login"> Inicia sesión</Link>
        </p>
      </div>
      </div>

  
    </>
  );
}

export default Registro;
