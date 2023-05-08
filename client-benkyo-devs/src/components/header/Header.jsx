<<<<<<< HEAD
import Logo from "./logo";
import UserInfo from "./user/user-info";

const Header = () => {
	return (
		<header style={{ display: "flex" }}>
			<UserInfo />
			<Logo />
		</header>
	);
};
=======
// import Logo from "./logo"
// import UserInfo from "./../user/user-info"

const Header = () => {
    return (
        <header style={{display:'flex'}}>
            <h1>Header</h1>
            {/* <UserInfo /> */}
            {/* <Logo /> */}
        </header>
    )
}
>>>>>>> b3ac95c5dcc91db24e89f485ae11dc5e84a7d224

export default Header;
