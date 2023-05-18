import Difficult from "./difficult/difficult";
import UserInfo from "./user/user-info";

const Header = () => {
  return (
    <header className="flex flex-row flex-wrap justify-around">
      <UserInfo />
      <Difficult />
    </header>
  );
};

export default Header;
