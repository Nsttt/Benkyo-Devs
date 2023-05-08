import { useState, useEffect } from 'react'
import UserAvatar from './user-avatar'
import UserCard from './user-card'

const UserInfo = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
        setUser({
            name: 'Pedro',
            languages: ['JavaScript', 'SQL', 'Python'],
            avatar: 'https://i.imgur.com/8Km9tLL.png'
        });
    }, [user])

    if(!user) return;

    return (
        <>
            <UserAvatar url={user.avatar} />
            <UserCard />
        </>
    )
}

export default UserInfo