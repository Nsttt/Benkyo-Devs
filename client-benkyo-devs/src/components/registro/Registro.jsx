import React, { useContext, useState } from "react";
import Link from "next/link";

function Registro() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const [token, setToken] = useContext(TokenContext);

  const showPassword = () => {
    if (pass === "password") {
      setPass("text");
    } else {
      setPass("password");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerUser = {
      username: username,
      email: email,
      password: password,
    };

    // const serializedData = JSON.stringify(registerUser);

    // const res = await fetch(`${process.env.REACT_APP_BACKEND}/newUser`, {
    //   method: "POST",
    //   body: serializedData,
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // });

    const responseBody = await res.json();
    if (!res.ok) {
      console.error(responseBody.message);
      return;
    }

    setUsername("");
    setEmail("");
    setPassword("");
  };

  //   if (token) {
  //     return <Link href="/login"/>
  //   }

  return (
    <div className="p-4 flex text-sky-500 flex-col gap-4 w-72 align-content: center">
      <div>
        <img src={"/img/PropuestaBanner.png"} />
        <h2 className="p-4 flex text-sky-500 flex-col gap-4 w-72 text-4xl">
          {" "}
          Regístrate
        </h2>

        <form className="form" onSubmit={handleSubmit}>
          <div className="flex flex-col text-sm gap-1">
            <label htmlFor="userform">Username</label>
            <input
              className="rounded-md max-w-sm shadow-xl border border-sky-200 p-2 m-2"
              id="userform"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              value={username}
              required={true}
            ></input>
          </div>

          <div className="flex flex-col text-sm gap-1">
            <label htmlFor="emailform">Email</label>
            <input
              className="rounded-md max-w-sm shadow-xl border border-sky-200 p-2 m-2"
              id="emailform"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              required={true}
            ></input>
          </div>

          <fieldset className="flex flex-col text-sm gap-1">
            <label htmlFor="pass">
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
              className="rounded-md max-w-sm shadow-xl border border-sky-200 p-2 m-2"
              type={password}
              name="pass"
              id="pass"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>

          <fieldset className="flex flex-col text-sm gap-1">
            <label htmlFor="pass">
              Repeat password:
              <span
                className="cursor-pointer pl-4 "
                onClick={() => {
                  verContraseña();
                }}
              >
                {" "}
                {pass == "text" ? "🔒" : "👀"}
              </span>
            </label>
            <input
              className="rounded-md max-w-sm shadow-xl border border-sky-200 p-2 m-2"
              type={pass}
              name="pass"
              id="pass"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
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
