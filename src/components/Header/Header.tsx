import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../../components/styles/theme";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="header">
      <h1>🎨 Multi-Theme App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <select value={theme} onChange={(e) => setTheme(e.target.value as any)}>
          {Object.entries(themes).map(([key, val]) => (
            <option key={key} value={key}>
              {val.name}
            </option>
          ))}
        </select>
      </nav>
    </header>
  );
};

export default Header;
