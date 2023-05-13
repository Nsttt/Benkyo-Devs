import UserInfo from "./../user/user-info"
import Difficult from "./difficult/Difficult";

const Header = () => {
    return (
        <header className="flex-row justify-between flex-wrap fixed sm:flex-col">
            <UserInfo />
            <Difficult />
        </header>
    )
}

export default Header;
