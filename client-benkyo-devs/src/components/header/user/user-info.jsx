import { useState, useEffect } from 'react';
import UserAvatar from './user-avatar';
import UserCard from './user-card';
import Link from 'next/link';

const UserInfo = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser({
            name: 'Julio',
            surname: 'Iglesias',
            languages: 'JavaScript',
            avatar: 'https://source.unsplash.com/random/400x400/?person',
        });
    }, []);

    if (!user) return;

    return (
        <Link href="/perfil">
            <section className="flex p-5 w-60 h-30 p-30 gap-2">
                <UserAvatar avatar={user.avatar} />
                <UserCard
                    name={user.name}
                    surname={user.surname}
                    languages={user.languages}
                />
            </section>
        </Link>
    );
};

export default UserInfo;
