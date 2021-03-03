import { Link } from "react-router-dom";

import logo from "../../logo.svg";

import "./Header.css"

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img className="Header__logo" src={logo} alt="logo"/>
      </Link>
    </div>
  );
}

export default Header;
