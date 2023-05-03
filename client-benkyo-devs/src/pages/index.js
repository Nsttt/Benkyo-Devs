import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../components/header";

// TODO: *** eliminar dependencias que no se estén usando
import Image from "next/image";
import styles from "carol-88/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });

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
			<Header/>
		</>
	);
}
