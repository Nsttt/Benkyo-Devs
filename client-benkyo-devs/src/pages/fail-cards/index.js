import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function FailCards() {
    return (
        <div className="flex justify-center p-20">
            <Link href="/perfil">
                <Image
                    src={'/img/comingsoon.png'}
                    alt="Mensaje de error"
                    width={400}
                    height={400}
                ></Image>
            </Link>
        </div>
    );
}

export default FailCards;
