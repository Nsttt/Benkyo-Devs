import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Decks() {
    return (
        <div className="flex sm:flex-row flex-wrap justify-center">
            <Image
                src="/img/PropuestaBanner.png"
                width={600}
                height={100}
                alt="Logo Benkyo-Devs"
            />

            <Link href="/save-cards">
                <div className=" w-full rounded overflow-hidden shadow-lg h-full m-3 pb-3">
                    <div className="flex justify-center items-center">
                        <Image
                            src="/img/PropuestaLogo.png"
                            alt="Sunset in the mountains"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="px-6 ">
                        <div className="font-bold text-xl mb-2">Guardados</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
            </Link>

            <Link href="/fail-cards">
                <div className="w-full rounded overflow-hidden shadow-lg h-full m-3 pb-3">
                    <div className="flex justify-center items-center pt-3">
                        <Image
                            src="/img/PropuestaLogo.png"
                            alt="Sunset in the mountains"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="px-6 ">
                        <div className="font-bold text-xl mb-2">Fallos</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Decks;
