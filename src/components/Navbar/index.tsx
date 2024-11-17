import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "../../context/AppContext";

const Navbar = () => {
  const location = useLocation();
  const {
    state: { isMenuOpen },
    toggleMenu,
  } = useApp();

  useEffect(() => {
    if (isMenuOpen) {
      toggleMenu(); // Close menu when route changes
    }
  }, [location.pathname]);

  return (
    <nav className="fixed w-full z-50 bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-6 flex flex-col justify-around ${
                isMenuOpen ? "open" : ""
              }`}
            >
              <span className="w-full h-0.5 bg-white transform transition-all"></span>
              <span className="w-full h-0.5 bg-white transform transition-all"></span>
              <span className="w-full h-0.5 bg-white transform transition-all"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
          md:hidden transition-all duration-300 overflow-hidden
          ${isMenuOpen ? "max-h-64" : "max-h-0"}
        `}
        >
          <div className="py-4">
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = () => {
  const location = useLocation();
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className={`
            text-gray-200 hover:text-primary
            ${location.pathname === to ? "text-primary font-semibold" : ""}
          `}
        >
          {label}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
