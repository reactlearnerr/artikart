import { PiShoppingCartLight } from "react-icons/pi";
import { RiMenuFill } from "react-icons/ri";
import Search from "./Search";
import { BsPerson } from "react-icons/bs";
const MobileHeader = () => {
  return (
    <header className="mobile-header">
      <div className="container">
        <div className="menu">
          <RiMenuFill size={"2em"} color="white" />
          <div className="logo">artikart</div>
        </div>

        <div className="menu-options">
          <div className="profile">
            <BsPerson size={"2em"} />
          </div>
          <div className="cart-cntr">
            <PiShoppingCartLight size={"2em"} />{" "}
            <span className="cart-count">2</span>
          </div>
        </div>
      </div>
      <Search />
    </header>
  );
};

export default MobileHeader;
