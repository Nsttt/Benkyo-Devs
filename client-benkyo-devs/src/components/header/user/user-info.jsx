import { useState, useEffect } from 'react'
import UserAvatar from './user-avatar'
import UserCard from './user-card'

const UserInfo = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
        setUser({
            name: 'Julio',
            languages: "JavaScript",
            avatar: 'https://i.imgur.com/8Km9tLL.png'
        });
    }, [])

    if(!user) return;

    return (
        <>
            <UserAvatar avatar={user.avatar} />
            <UserCard name={user.name} languages={user.languages}/>
        </>
    )
}

export default UserInfo