import React from 'react'
import Image from "next/image"

function Points() {
        const user = {
        points: {
          easy: 101,
          medium: 102,
          hard: 103
        },
        logos: {
            facil: '/img/DificultadFacil.png',
            media: '/img/DificultadMedia.png',
            dificil: '/img/DificultadDificil.png'
        }
      }
    const { points, logos } = user
    const { easy, medium, hard } = points
    const { facil, media, dificil } = logos


  return (
    <div className='p-5'>
          <h3 className='font-bold'>Puntuación por nivel</h3>
          <ul className='p-5'>
            <li className='flex items-center'><Image src={facil} width={50} height={50}/>: {easy}</li>
            <li className='flex items-center'><Image src={media} width={50} height={50}/>: {medium}</li>
            <li className='flex items-center'><Image src={dificil} width={50} height={50}/>: {hard}</li>
          </ul>
          
      </div>
  )
}

export default Points