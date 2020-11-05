import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [language, setLanguage] = useState("spanish");

  const setLang = lang => {
		lang && setLanguage(lang)
	};

  return (
    <LanguageContext.Provider value={{ language, setLang }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
