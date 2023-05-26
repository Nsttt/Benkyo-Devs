import UserInfo from 'carol-88/components/header/user/user-info'
import AboutMe from 'carol-88/components/perfil/aboutme/about-me'
import React from 'react'

function perfil() {
  return (
            <div className='grid grid-cols-1 lg:grid-cols-3  gap-5 lg:grid-rows-4 p-8'>
            <section id='user' className='bg-orange-300 col-start-1 w-full h-full '>
                <UserInfo/>
            </section>

            <section id='points' className='bg-orange-300 col-start-2 col-span-2 box-border w-full h-full'>
                <p>points</p>
            </section>

            <section id='about' className='bg-orange-300 col-start-2 col-span-2 w-full h-full'>
               <AboutMe/>
            </section>

            <section id='start' className='bg-orange-300 col-start-2 col-span-1 w-full h-full'>
                <p>start</p>
            </section>

            <section id='decks' className='bg-orange-300 col-start-1 w-full h-full'>
                <p>decks</p>
            </section>

            <section id='saves' className='bg-orange-300 col-start-2 w-full h-full'>
                <p>saves</p>
            </section>

            <section id='fails' className='bg-orange-300 col-start-3 w-full h-full'>
                <p>fails</p>
            </section>

        </div>
        
        
    
        
    
  )
}

export default perfil