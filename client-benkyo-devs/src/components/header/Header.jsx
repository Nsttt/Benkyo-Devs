import UserInfo from "./../user/user-info"
import Difficult from "./difficult/Difficult";

const Header = () => {
    return (
        <header className="flex-row justify-between flex-wrap fixed top-0 left-0 right-0 sm:flex-col">
            <UserInfo />
            <Difficult />
        </header>
    )
}

export default Header;
