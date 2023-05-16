import Head from "next/head";
import Header from "../components/header/header";
import Card from "../components/card/Card";

export default function Home() {
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
        <link href="/dist/output.css" rel="stylesheet"></link>
      </Head>
      <Header />
      <main></main>
      <footer>//footer</footer>
    </>
  );
}
