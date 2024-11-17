import { FC } from 'react';
import Hero from '@/components/Hero';

const Home: FC = () => {
  return (
    <div className="min-h-[calc(100vh-70px)]">
      <Hero />
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-8">
            Featured Projects
          </h2>
          <p className="text-light-text text-center max-w-2xl mx-auto mb-12">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will go here */}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-8">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-2">Frontend</h3>
              <p className="text-light-text">React, TypeScript, Tailwind CSS</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-2">Backend</h3>
              <p className="text-light-text">Node.js, Express, MongoDB</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-2">Design</h3>
              <p className="text-light-text">Figma, Adobe XD, UI/UX</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-2">Tools</h3>
              <p className="text-light-text">Git, Docker, AWS</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
