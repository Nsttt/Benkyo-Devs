import React from 'react'
import LoginPage from './login'
import Link from 'next/link'



function Home() {
  return (
    <>
    <Link href="/game">
      <button>Jugar</button>
    </Link>
    <LoginPage/>
    </>
    
  )
}

export default Home