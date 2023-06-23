
import DifficultySelector from "./dificulty-selector";
import UserInfo from "./user/user-info";

const Header = () => {
  return (
    <header className="flex flex-row flex-wrap justify-around">
      <DifficultySelector/>
    </header>
  );
};

export default Header;
