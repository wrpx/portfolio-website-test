import { FC, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`
        fixed w-full z-50 transition-all duration-500
        ${isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-soft' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-2xl font-bold text-primary hover:text-secondary transition-colors relative group"
          >
            WRPX
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-text hover:text-primary transition-colors relative"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <span
                className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45' : '-translate-y-1'
                }`}
              ></span>
              <span
                className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45' : 'translate-y-1'
                }`}
              ></span>
            </div>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-2">
            <Link 
              to="/" 
              className={`
                px-4 py-2 rounded-md transition-all duration-300 relative overflow-hidden
                ${location.pathname === '/' 
                  ? 'text-primary bg-primary/10' 
                  : 'text-text hover:text-primary hover:bg-primary/10'
                }
                before:content-[''] before:absolute before:inset-0 before:bg-primary/5
                before:transform before:scale-x-0 before:origin-left before:transition-transform
                hover:before:scale-x-100
              `}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`
                px-4 py-2 rounded-md transition-all duration-300 relative overflow-hidden
                ${location.pathname === '/about' 
                  ? 'text-primary bg-primary/10' 
                  : 'text-text hover:text-primary hover:bg-primary/10'
                }
                before:content-[''] before:absolute before:inset-0 before:bg-primary/5
                before:transform before:scale-x-0 before:origin-left before:transition-transform
                hover:before:scale-x-100
              `}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`
                px-4 py-2 rounded-md transition-all duration-300 relative overflow-hidden
                ${location.pathname === '/projects' 
                  ? 'text-primary bg-primary/10' 
                  : 'text-text hover:text-primary hover:bg-primary/10'
                }
                before:content-[''] before:absolute before:inset-0 before:bg-primary/5
                before:transform before:scale-x-0 before:origin-left before:transition-transform
                hover:before:scale-x-100
              `}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`
                px-4 py-2 rounded-md transition-all duration-300 relative overflow-hidden
                ${location.pathname === '/contact' 
                  ? 'text-primary bg-primary/10' 
                  : 'text-text hover:text-primary hover:bg-primary/10'
                }
                before:content-[''] before:absolute before:inset-0 before:bg-primary/5
                before:transform before:scale-x-0 before:origin-left before:transition-transform
                hover:before:scale-x-100
              `}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            md:hidden transition-all duration-500 overflow-hidden bg-white/80 backdrop-blur-md
            ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="py-4 space-y-2">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/projects', label: 'Projects' },
              { to: '/contact', label: 'Contact' }
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`
                  block px-4 py-2 transition-all duration-300
                  ${location.pathname === to 
                    ? 'text-primary bg-primary/10' 
                    : 'text-text hover:text-primary hover:bg-primary/10'
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
