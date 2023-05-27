import Head from "next/head";
import { Login } from "carol-88/components/login/Login";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Benkyo Devs</title>
        <meta
          name="description"
          content="App de estudio de lenguajes de programacion"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Login />
      </main>
   
    </>
  );
}