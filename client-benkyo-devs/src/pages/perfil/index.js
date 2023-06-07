import React, { useState } from 'react';
import Points from '@/components/perfil/points/points';
import AboutMe from '@/components/perfil/aboutme/about-me';
import Decks from '@/components/decks/Decks';



const Perfil = () => {
 
  return (
    <div className='grid grid-cols-2'>

      {/* Sección perfil */}
      <section className='shadow-lg p-3'>
        <AboutMe/>
        <hr/>
        <Points/>
      </section>

      {/* Sección Mazos */}
      <section className='m-5 text-center'>
          <p><Decks/></p>
      </section>

    </div>
  )
}

export default Perfil;