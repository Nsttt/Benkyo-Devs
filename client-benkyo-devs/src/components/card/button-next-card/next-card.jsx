import React from 'react'

function NextCard({ handleClick }) {
  return (
    <button 
      onClick={handleClick}
      className='flex justify-center items-center border-2 border-blue-500 p-3 rounded-xl w-40'>
      <img src={'img/arrowimg.webp'} width={100} />
    </button>
  
  )
}

export default NextCard