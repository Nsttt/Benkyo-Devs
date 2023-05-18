import Head from "next/head";
import Header from "../components/header/Header";
import CardCopi from "carol-88/components/card/CardCopi";
import NextCard from "carol-88/components/card/button-next-card/next-card";

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
      </Head>
      <Header />
      <main>
        <CardCopi />
        <NextCard/>
      </main>
      <footer>//footer</footer>
    </>
  );
}
