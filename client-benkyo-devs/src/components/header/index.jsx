import Logo from "./logo"
import UserInfo from "./../user/user-info"

const Header = () => {
    return (
        <header style={{display:'flex'}}>
            <UserInfo />
            <Logo />
        </header>
    )
}

export default Header