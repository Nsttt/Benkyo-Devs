import Link from 'next/link';

const GameImage = ({ size }) => {
    const start = [
        {
            alt: 'Start Game',
            img: 'img/START.png',
        },
    ];

    return (
        <Link href="/game" className="flex justify-center p-8">
            <img
                src={start[0].img}
                alt={start[0].alt}
                width={size}
                height={size}
            />
        </Link>
    );
};

export default GameImage;
