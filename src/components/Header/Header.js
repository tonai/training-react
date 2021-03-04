import { memo, useContext } from "react";
import { Link } from "react-router-dom";

import i18nContext from "../../contexts/i18n";

import logo from "../../logo.svg";

import "./Header.css"

function Header() {
  const { language, setLanguage } = useContext(i18nContext);

  function handleChange(event) {
    setLanguage(event.target.value)
  }

  return (
    <div className="Header">
      <Link to="/">
        <img className="Header__logo" src={logo} alt="logo"/>
      </Link>
      <div>
        <label>
          <input
            type="radio"
            value="fr"
            name="language"
            checked={language === 'fr'}
            onChange={handleChange}
          />
          fr
        </label>
        <label>
          <input
            type="radio"
            value="en"
            name="language"
            checked={language === 'en'}
            onChange={handleChange}
          />
          en
        </label>
      </div>
    </div>
  );
}

export default memo(Header);
