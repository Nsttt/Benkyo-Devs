import Difficult from "./difficult/Difficult";
import UserInfo from "./user/user-info";

const Header = () => {
  return (
    <header className="">
      <UserInfo />
      <Difficult />
    </header>
  );
};

export default Header;
