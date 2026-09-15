import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "color-mode";

const ColorModeContext = createContext({
  mode: "dark",
  toggleMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);

const getInitialMode = () => {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : "dark";
};

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", mode === "dark");
    root.setAttribute("data-theme", mode);
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const toggleMode = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

  const value = useMemo(() => ({ mode, toggleMode }), [mode]);

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
};
