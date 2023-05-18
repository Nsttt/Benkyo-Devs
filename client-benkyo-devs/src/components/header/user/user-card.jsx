const UserCard = ({name, languages}) => {
    return (
        <div>
            <h5>{name}</h5>
            <p>{languages}</p>
        </div>
    )
}

export default UserCard