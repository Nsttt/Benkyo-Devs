import React from 'react'

function Points() {
        const user = {
        username: 'Carol',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.',
        avatar: 'https://images.unsplash.com/photo-1621574539436-4b0b0b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVua3lvJTIwY2Fyb2wlMjBhdmF0YXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        points: {
          easy: 101,
          medium: 102,
          hard: 103
        },
        logos: {
            facil: 'img/DificultadFacil.png',
            media: 'img/DificultadMedia.png',
            dificil: 'img/DificultadDificil.png'
        }
      }
    const { points, logos } = user
    const { easy, medium, hard } = points
    const { facil, media, dificil } = logos


  return (
    <div className='p-5'>
          <h3 className='font-bold'>Puntuación por nivel</h3>
          <p><img src={facil}/>: {easy}</p>
          <p><img src={media}/>: {medium}</p>
          <p><img src={dificil}/>: {hard}</p>
      </div>
  )
}

export default Points