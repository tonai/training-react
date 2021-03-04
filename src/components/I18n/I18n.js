import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import i18nContext from "../../contexts/i18n";

import en from "../../locale/en.json";
import fr from "../../locale/fr.json";

function I18n(props) {
  const { children } = props;
  const [language, setLanguage] = useState('en');

  const t = useCallback((string) => {
    switch(language) {
      case 'fr':
        return fr[string];

      case 'en':
        return en[string];

      default:
        return string;
    }
  }, [language]);

  const i18n = useMemo(() => ({
    t,
    language,
    setLanguage
  }), [t, language, setLanguage]);

  return (
    <i18nContext.Provider value={i18n}>
      {children}
    </i18nContext.Provider>
  );
}

export default I18n;
