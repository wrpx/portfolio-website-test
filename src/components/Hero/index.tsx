import { FC } from 'react';
import { Link } from 'react-router-dom';

const Hero: FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-70px)] flex items-center py-16 overflow-hidden">
      {/* Background with gradient and dots */}
      <div className="absolute inset-0 bg-gradient-radial from-white via-section-bg to-section-bg bg-dots-lg opacity-30"></div>
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float delay-100"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full animate-float delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/5 rounded-full animate-float delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-slideInLeft">
            <h1 className="text-5xl md:text-6xl font-bold text-text mb-6 relative">
              Hi, I'm{' '}
              <span className="text-primary relative">
                WRPX
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/20"></span>
              </span>
            </h1>
          </div>

          <div className="animate-slideInRight">
            <p className="text-xl md:text-2xl text-light-text mb-8">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
            <Link
              to="/projects"
              className="btn btn-primary group relative overflow-hidden shadow-soft"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </Link>
            <Link
              to="/contact"
              className="btn btn-secondary group relative overflow-hidden"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full p-1">
              <div className="w-1.5 h-3 bg-primary/30 rounded-full mx-auto animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
