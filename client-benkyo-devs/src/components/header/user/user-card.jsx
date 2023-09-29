const UserCard = ({ name, surname, languages }) => {
    return (
        <section className="flex flex-col p-1">
            <p className="text-blue-500 text-sm ">
                {name} {surname}
            </p>
            <p className="text-xs">{languages}</p>
        </section>
    );
};
export default UserCard;
