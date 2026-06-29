import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import LogoMark from '../LogoMark/LogoMark';
import './Navbar.scss';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/projects', label: t.nav.projects },
    { to: '/contact', label: t.nav.contact }
  ];

  return (
    <header className="navbar">
      <nav className="navbar__inner container">
        <NavLink className="navbar__brand" to="/" onClick={() => setMenuOpen(false)}>
          <LogoMark />
        </NavLink>

        <button
          className={`navbar__menu ${menuOpen ? 'active' : ''}`}
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar__links ${menuOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <div className="navbar__actions">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
