import Difficult from "./difficult/difficult";
import UserInfo from "./user/user-info";

const Header = () => {
    return (
        <header className="display-inline flex-row justify-between flex-wrap fixed top-0 left-0 right-0 sm:flex-col">
            <UserInfo/>
            <UserInfo/>
            {/* <Difficult/> */}
        </header>
    )
}

export default Header;
