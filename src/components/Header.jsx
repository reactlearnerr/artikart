import { PiShoppingCartLight } from "react-icons/pi";
import { RxDividerVertical } from "react-icons/rx";
import Search from "./Search";
import { BsChevronDown } from "react-icons/bs";

const Header = () => {
  return (
    <header className="desktop-header">
      <div className="container">
        <div className="logo">
          <h3>artikart</h3>
        </div>
        <Search />
        <div className="profile">
          <span>Login / Signup</span>
          <span
            style={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            My account &nbsp; <BsChevronDown />
          </span>
        </div>
        <RxDividerVertical size={"2em"} />
        <div className="cart-cntr">
          <PiShoppingCartLight size={"2em"} />{" "}
          <span className="cart-count">2</span> <span>Cart</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
