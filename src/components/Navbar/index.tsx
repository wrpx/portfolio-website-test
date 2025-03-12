import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  const location = useLocation();
  const {
    state: { isMenuOpen },
    toggleMenu,
    isDarkMode
  } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      toggleMenu(); // Close menu when route changes
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? (isDarkMode 
              ? "bg-gray-900/95 backdrop-blur-md shadow-md py-2" 
              : "bg-white/95 backdrop-blur-md shadow-md py-2")
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled 
                ? (isDarkMode ? "text-white" : "text-primary") 
                : (isDarkMode ? "text-white text-shadow-light" : "text-primary text-shadow-dark")
            }`}
          >
            <span className="relative group">
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks isScrolled={isScrolled} isDarkMode={isDarkMode} />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="flex items-center"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 h-5 flex flex-col justify-between ${
                  isMenuOpen ? "open" : ""
                }`}
              >
                <span className={`block w-full h-0.5 transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                } ${
                  isScrolled 
                    ? (isDarkMode ? "bg-white" : "bg-text") 
                    : (isDarkMode ? "bg-white" : "bg-primary")
                }`}></span>
                
                <span className={`block w-full h-0.5 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                } ${
                  isScrolled 
                    ? (isDarkMode ? "bg-white" : "bg-text") 
                    : (isDarkMode ? "bg-white" : "bg-primary")
                }`}></span>
                
                <span className={`block w-full h-0.5 transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                } ${
                  isScrolled 
                    ? (isDarkMode ? "bg-white" : "bg-text") 
                    : (isDarkMode ? "bg-white" : "bg-primary")
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
          md:hidden transition-all duration-300 overflow-hidden
          ${isMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
        >
          <div className={`py-4 rounded-lg ${
            isDarkMode 
              ? "bg-gray-900/95 backdrop-blur-md shadow-md" 
              : "bg-white/95 backdrop-blur-md shadow-md"
          }`}>
            <NavLinks isMobile={true} isScrolled={isScrolled} isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = ({ isMobile = false, isScrolled = false, isDarkMode = false }) => {
  const location = useLocation();
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className={`${isMobile ? "flex flex-col space-y-4 px-4" : "flex space-x-8"}`}>
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className={`
            relative group ${isMobile ? "py-2" : ""}
            ${location.pathname === to 
              ? `font-semibold text-primary` 
              : isScrolled
                ? (isDarkMode ? "text-gray-200 hover:text-primary" : "text-gray-700 hover:text-primary")
                : (isDarkMode 
                    ? "text-white hover:text-primary text-shadow-light" 
                    : "text-gray-800 hover:text-primary text-shadow-dark")
            } transition-colors duration-300
          `}
        >
          {label}
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ${
            location.pathname === to ? "w-full" : "w-0"
          }`}></span>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
