import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.scss';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle theme">
      <span>{theme === 'light' ? '☾' : '☀'}</span>
    </button>
  );
}

export default ThemeToggle;
