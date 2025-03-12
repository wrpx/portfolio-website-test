import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useApp } from '../../../context/AppContext';

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
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-90"
          : "bg-gradient-to-b from-white via-gray-50 to-gray-50 opacity-70"
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
        <div className={`absolute top-20 left-10 w-20 h-20 ${isDarkMode ? "bg-primary/20" : "bg-primary/10"} rounded-full animate-float delay-100`}></div>
        <div className={`absolute bottom-20 right-10 w-32 h-32 ${isDarkMode ? "bg-secondary/20" : "bg-secondary/10"} rounded-full animate-float delay-300`}></div>
        <div className={`absolute top-1/3 right-1/4 w-16 h-16 ${isDarkMode ? "bg-primary/15" : "bg-primary/5"} rounded-full animate-float delay-500`}></div>
        <div className={`absolute bottom-1/3 left-1/4 w-24 h-24 ${isDarkMode ? "bg-secondary/15" : "bg-secondary/5"} rounded-full animate-float delay-700`}></div>
        
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
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 relative">
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
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110"
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
