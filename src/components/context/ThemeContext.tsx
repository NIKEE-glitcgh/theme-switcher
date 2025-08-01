import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeType, themes } from "../../components/styles/theme";

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>("theme1");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as ThemeType;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.body.className = themes[theme].className;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
};
