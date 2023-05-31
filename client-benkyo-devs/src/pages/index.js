import React from 'react'
import LoginPage from './login'
import Link from 'next/link'
import Image from "next/image"




function Home() {
  const start= [
    {
      alt: "Start Game",
      img: "@/public/img/START.png"
    }
  ];

  return (
    <>
    <Link href="/game">
          <Image src={start.img} alt={start.alt} width={200} height={200}/>
    </Link>
    <LoginPage/>
    </>
    
  )
}

export default Home