import React from 'react'
import LoginPage from './login'
import Link from 'next/link'
import Image from "next/image"




function Home() {
  const start = [
    {
      alt: "Start Game",
      img: "/img/START.png"
    }
  ];

  return (
    <section className='p-4 flex text-sky-500 flex-col gap-4 w-72 align-content: center'>
    <LoginPage />
      <p className="text-center text-sky-600 pt-5">Or</p>
    <hr/>
    <Link href="/game" className='flex justify-center p-8'>
      <Image src={start[0].img} alt={start[0].alt} width={200} height={200}/>
    </Link> 
    </section>
    
  )
}

export default Home