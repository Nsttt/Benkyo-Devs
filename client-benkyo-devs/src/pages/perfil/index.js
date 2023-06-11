import React, { useState } from 'react';
import Points from '@/components/perfil/points/points';
import AboutMe from '@/components/perfil/aboutme/about-me';
import Decks from '@/components/decks/Decks';



const Perfil = () => {
 
  return (
    <div className='grid md:grid-cols-[450px_minmax(800px,_1fr)_100px] md:grid-flow-row grid-cols-1 items-center justify-center'>

      {/* Sección perfil */}
      <section className='shadow-lg p-3 h-screen'>
        <AboutMe/>
        <hr/>
        <Points/>
      </section>

      {/* Sección Mazos */}
      <section className='m-5 text-center'>
          <p className='gap-2'><Decks/></p>
      </section>

    </div>
  )
}

export default Perfil;