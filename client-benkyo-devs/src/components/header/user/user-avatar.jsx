const UserAvatar = ({ avatar }) => {
	return <img src={avatar} className="rounded-full w-12 h-12 object-cover shadow-xl" alt="Foto de usuario" width="100" heigth="100" />;
};

export default UserAvatar;
