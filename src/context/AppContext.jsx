import { createContext, useState, useMemo } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const theme = useMemo(() => {
    return darkMode
      ? {
          background: "#0f172a",
          surface: "rgba(255,255,255,0.04)",
          text: "#f8fafc",
          subText: "rgba(255,255,255,0.6)",
          accent: "#3b82f6",
        }
      : {
          background: "#f8fafc",
          surface: "rgba(0,0,0,0.04)",
          text: "#0f172a",
          subText: "rgba(0,0,0,0.6)",
          accent: "#2563eb",
        };
  }, [darkMode]);

  return (
    <AppContext.Provider value={{ darkMode, toggleTheme, theme }}>
      {children}
    </AppContext.Provider>
  );
};