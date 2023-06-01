import { useState } from "react";
//import { logInUserService } from "..";
//import { useNavigate } from "react-router-dom";
//import { AuthContext } from "../";
//haría falta crear el authcontext 
//los services para recuperar la información del backend 

export const Login = () => {
  //const navigate = useNavigate();
  //const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pass, setPass] = useState("password");

  const verContraseña = () => {
    if (pass === "password") {
      setPass("text");
    } else {
      setPass("password");
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
     // const token = await logInUserService({ email, password });

      // login(token);
     
    } catch (error) {
      setError("Email o password incorrecto", error.message);
    }
  };
  return (
    <form onSubmit={handleForm} className="p-4 flex text-sky-500 flex-col gap-4 w-72">
      <h2 className="text-4xl">Login</h2>
      <fieldset className="flex flex-col text-sm gap-1">
        <label htmlFor="email" >Email:</label>
        <input className="rounded-md max-w-sm shadow-xl border border-sky-200 p-2"
          type="email"
          name="email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </fieldset>
      <fieldset className="flex flex-col text-sm gap-1">
        <label htmlFor="pass" >Password:<span className="cursor-pointer pl-4 "
        onClick={() => {
          verContraseña();
        }}
      > {pass=="text"?"🔒":"👀"}
      </span></label>
        <input
        className="rounded-md max-w-sm shadow-xl border-solid border border-sky-200 p-2"
          type={pass}
          name="pass"
          id="pass"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
            </fieldset>
      <button className="flex justify-center w-32 shadow-xl bg-sky-500 text-white rounded-md p-2 hover:bg-sky-600">Continuar</button>
      {error ? <p>{error}</p> : null}
    </form>
  );
};