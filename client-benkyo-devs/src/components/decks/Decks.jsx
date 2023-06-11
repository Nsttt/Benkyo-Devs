import React from 'react'
import Image from "next/image"

function Decks() {
  return (
    <div className='flex sm:flex-row flex-wrap justify-center'>
        <div className=" w-full rounded overflow-hidden shadow-lg p-3 mr-3">
            <div className="flex justify-center items-center">
                <Image src="/img/PropuestaLogo.png" alt="Sunset in the mountains" width={100} height={100} />
            </div>
            <div className="px-6 ">
                <div className="font-bold text-xl mb-2">
                    Crear Mazos
                </div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>

        <div className="w-80 rounded overflow-hidden shadow-lg p-3 mr-3">
            <div className="flex justify-center items-center">
                <Image src="/img/PropuestaLogo.png" alt="Sunset in the mountains" width={100} height={100} />
            </div>
            <div className="px-6 ">
                <div className="font-bold text-xl mb-2">
                    Guardados
                </div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
        
        <div className="w-80 rounded overflow-hidden shadow-lg p-3 mr-3">
            <div className="flex justify-center items-center">
                <Image src="/img/PropuestaLogo.png" alt="Sunset in the mountains" width={100} height={100} />
            </div>
            <div className="px-6 ">
                <div className="font-bold text-xl mb-2">
                    Fallos
                </div>
                <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    </div>
  )
}

export default Decks