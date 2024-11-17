import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-section-bg py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-light-text mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} WRPX. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-text hover:text-primary transition-colors"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-text hover:text-primary transition-colors"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-text hover:text-primary transition-colors"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
