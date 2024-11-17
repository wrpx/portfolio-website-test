import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useApp } from '../../context/AppContext';
import Button from '../shared/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  const { state: { isMenuOpen }, toggleMenu } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      toggleMenu(); // Close menu when route changes
    }
  }, [location.pathname]);

  return (
    <nav className={`
      fixed w-full z-50 transition-all duration-300
      ${isScrolled ? 'bg-white shadow-lg dark:bg-gray-900' : 'bg-transparent'}
      ${isDarkMode ? 'dark' : ''}
    `}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? '🌞' : '🌙'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-6 flex flex-col justify-around ${isMenuOpen ? 'open' : ''}`}>
              <span className="w-full h-0.5 bg-gray-800 dark:bg-white transform transition-all"></span>
              <span className="w-full h-0.5 bg-gray-800 dark:bg-white transform transition-all"></span>
              <span className="w-full h-0.5 bg-gray-800 dark:bg-white transform transition-all"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`
          md:hidden transition-all duration-300 overflow-hidden
          ${isMenuOpen ? 'max-h-64' : 'max-h-0'}
        `}>
          <div className="py-4">
            <NavLinks />
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="mt-4 w-full"
              aria-label="Toggle theme"
            >
              {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = () => {
  const location = useLocation();
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className={`
            text-gray-800 dark:text-white hover:text-primary dark:hover:text-primary
            ${location.pathname === to ? 'text-primary font-semibold' : ''}
          `}
        >
          {label}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
