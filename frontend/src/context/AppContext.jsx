import React, { createContext, useState } from "react";

export const AppContext = createContext();


export const AppProvider = ({ children }) => {
  // Example global state
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState("en"); // 'en' for English, 'hi' for Hindi

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  return (
    <AppContext.Provider value={{ user, setUser, language, toggleLanguage }}>
      {children}
    </AppContext.Provider>
  );
};
