import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';

const Hero = () => {
  const { isDarkMode } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseEffectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !mouseEffectRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;
      
      const moveX = ((mouseX / containerRect.width) - 0.5) * 20;
      const moveY = ((mouseY / containerRect.height) - 0.5) * 20;
      
      containerRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      
      mouseEffectRef.current.style.left = `${mouseX}px`;
      mouseEffectRef.current.style.top = `${mouseY}px`;
      mouseEffectRef.current.style.opacity = '0.15';

      setTimeout(() => {
        if (mouseEffectRef.current) {
          mouseEffectRef.current.style.opacity = '0';
        }
      }, 1000);
    };

    const handleMouseLeave = () => {
      if (containerRef.current) {
        containerRef.current.style.transform = 'translate(0px, 0px)';
      }
    };

    const container = containerRef.current;
    
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-70px)] flex items-center py-16 overflow-hidden">
      {/* Background with gradient and dots */}
      <div className={`absolute inset-0 ${
        isDarkMode
          ? "bg-gradient-to-b from-background-dark via-background-dark to-section-bg-dark opacity-80"
          : "bg-gradient-to-b from-white via-section-bg to-section-bg opacity-70"
      }`}></div>
      <div className="absolute inset-0 bg-dots-lg opacity-30"></div>
      
      {/* Mouse effect */}
      <div 
        ref={mouseEffectRef}
        className={`absolute w-96 h-96 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 filter blur-3xl opacity-0 transition-opacity duration-1000 ${
          isDarkMode ? "bg-primary/30" : "bg-primary/20"
        }`}
      ></div>
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-20 h-20 ${isDarkMode ? "bg-primary/15" : "bg-primary/10"} rounded-full animate-float delay-100`}></div>
        <div className={`absolute bottom-20 right-10 w-32 h-32 ${isDarkMode ? "bg-secondary/15" : "bg-secondary/10"} rounded-full animate-float delay-300`}></div>
        <div className={`absolute top-1/3 right-1/4 w-16 h-16 ${isDarkMode ? "bg-primary/10" : "bg-primary/5"} rounded-full animate-float delay-500`}></div>
        <div className={`absolute bottom-1/3 left-1/4 w-24 h-24 ${isDarkMode ? "bg-secondary/10" : "bg-secondary/5"} rounded-full animate-float delay-700`}></div>
        
        {/* Decorative lines */}
        <div className="absolute top-40 left-0 w-1/4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-40 right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-secondary/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={containerRef}
            className="text-center transition-transform duration-200 ease-out will-change-transform"
          >
            <div className="animate-slideInLeft">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
                <span className="text-gradient relative inline-block">
                  Hi, I'm <span className="text-primary">WRPX</span>
                </span>
              </h1>
            </div>

            <div className="animate-slideInRight">
              <p className="text-xl md:text-2xl text-light-text dark:text-light-text-dark mb-8 relative">
                <span className="relative inline-block">
                  Full Stack Developer & UI/UX Designer
                  <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></span>
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp mt-12">
              <Link
                to="/projects"
                className="btn btn-primary group relative overflow-hidden rounded-full flex items-center justify-center gap-2"
              >
                <span className="relative z-10">View My Work</span>
                <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </Link>
              <Link
                to="/contact"
                className="btn btn-secondary group relative overflow-hidden rounded-full flex items-center justify-center gap-2"
              >
                <span className="relative z-10">Contact Me</span>
                <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </Link>
            </div>

            {/* Social media links */}
            <div className="mt-12 flex justify-center space-x-6 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-text dark:text-light-text-dark hover:text-primary transition-colors duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-text dark:text-light-text-dark hover:text-primary transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-text dark:text-light-text-dark hover:text-primary transition-colors duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 ${isDarkMode ? 'border-primary/40' : 'border-primary/30'} rounded-full p-1 flex justify-center`}>
          <div className={`w-1.5 h-3 ${isDarkMode ? 'bg-primary/40' : 'bg-primary/30'} rounded-full animate-float`}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
