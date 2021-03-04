import { useState } from "react";

import i18nContext from "../../contexts/i18n";

import en from "../../locale/en.json";
import fr from "../../locale/fr.json";

function I18n(props) {
  const { children } = props;
  const [language, setLanguage] = useState('en');

  function t(string) {
    switch(language) {
      case 'fr':
        return fr[string];

      case 'en':
        return en[string];

      default:
        return string;
    }
  }

  const i18n = {
    t: t,
    language: language,
    setLanguage: setLanguage
  };

  return (
    <i18nContext.Provider value={i18n}>
      {children}
    </i18nContext.Provider>
  );
}

export default I18n;
