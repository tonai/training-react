import logo from "../../logo.svg";

import "./Header.css"

function Header() {
  return (
    <div className="Header">
      <img className="Header__logo" src={logo} alt="logo"/>
    </div>
  );
}

export default Header;
