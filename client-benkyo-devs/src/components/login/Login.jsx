import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
//import { logInUserService } from "..";
import { useRouter } from 'next/router';
//import { AuthContext } from "../";
//haría falta crear el authcontext
//los services para recuperar la información del backend

export default function Login() {
    //const navigate = useNavigate();
    //const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [pass, setPass] = useState('password');

    const router = useRouter();
    const verContraseña = () => {
        if (pass === 'password') {
            setPass('text');
        } else {
            setPass('password');
        }
    };

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            const user = await fetch(
                'http://localhost:4000/api/v1/user/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                },
            ).then((res) => res.json());

            console.log(user);
            router.push('/perfil');
        } catch (error) {
            setError('Email o password incorrecto', error.message);
        }
    };
    return (
        <form
            onSubmit={handleForm}
            className="p-4 flex text-sky-500 flex-col gap-4 w-72"
        >
            <Image src={'/img/PropuestaBanner.png'} width={300} height={200} />
            <h2 className="text-4xl">Login</h2>
            <fieldset className="flex flex-col text-sm gap-1">
                <label htmlFor="email">Email:</label>
                <input
                    className="rounded-md max-w-sm shadow-xl border border-sky-200 p-2"
                    type="email"
                    name="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
            </fieldset>
            <fieldset className="flex flex-col text-sm gap-1">
                <label htmlFor="pass">
                    Password:
                    <span
                        className="cursor-pointer pl-4 "
                        onClick={() => {
                            verContraseña();
                        }}
                    >
                        {' '}
                        {pass == 'text' ? '🔒' : '👀'}
                    </span>
                </label>
                <input
                    className="rounded-md max-w-sm shadow-xl border-solid border border-sky-200 p-2"
                    type={pass}
                    name="pass"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
            </fieldset>
            <button className="flex self-center  shadow-xl bg-sky-500 text-white rounded-md px-6 py-2 hover:bg-sky-600 text-center content-center">
                Continuar
            </button>
            {error ? <p>{error}</p> : null}
        </form>
    );
}
