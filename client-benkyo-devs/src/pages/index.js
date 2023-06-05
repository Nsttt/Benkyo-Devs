import React from 'react'
import LoginPage from './login'
import Link from 'next/link'
import Image from "next/image"




function Home() {
  const start = [
    {
      alt: "Start Game",
      img: "img/START.png"
    }
  ];

  return (
    <>
    <LoginPage />
      <p className="text-center text-sky-600 pt-5">Or</p>
    <hr/>
    <Link href="/game" className='flex justify-center p-8'>
      <img src={start[0].img} alt={start[0].alt} width={200} height={200}/>
    </Link> 
    </>
    
  )
}

export default Home