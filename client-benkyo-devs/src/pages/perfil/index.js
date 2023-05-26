import UserInfo from 'carol-88/components/header/user/user-info'
import AboutMe from 'carol-88/components/perfil/aboutme/about-me'
import React from 'react'

function perfil() {
  return (
            <div className='grid grid-cols-3 gap-5 grid-rows-4 p-8'>
            <section id='user' className=''>
                <UserInfo/>
            </section>

            <section id='points' className='col-start-2 col-span-2'>
                <p>points</p>
            </section>

            <section id='about' className='col-start-2 col-span-2'>
               <AboutMe/>
            </section>

            <section id='start' className='col-start-2 col-span-1'>
                <p>start</p>
            </section>

            <section id='decks' className='col-start-1'>
                <p>decks</p>
            </section>

            <section id='saves' className='col-start-2'>
                <p>saves</p>
            </section>

            <section id='fails' className='col-start-3'>
                <p>fails</p>
            </section>

        </div>
        
        
    
        
    
  )
}

export default perfil