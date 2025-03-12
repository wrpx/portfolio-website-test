import Hero from '../../components/Hero';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useApp } from '../../context/AppContext';

// สร้างข้อมูลตัวอย่างสำหรับโปรเจกต์
const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React, Node.js, and MongoDB',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '/projects/1'
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool using OpenAI API and Next.js',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Next.js', 'OpenAI', 'TypeScript'],
    link: '/projects/2'
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'Comprehensive analytics dashboard for social media management',
    image: 'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'ChartJS', 'Firebase'],
    link: '/projects/3'
  }
];

// สร้างข้อมูลตัวอย่างสำหรับทักษะ
const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    icon: (
      <svg className="w-8 h-8 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL'],
    icon: (
      <svg className="w-8 h-8 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  },
  {
    category: 'Design',
    items: ['Figma', 'Adobe XD', 'UI/UX', 'Prototyping', 'Wireframing'],
    icon: (
      <svg className="w-8 h-8 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions'],
    icon: (
      <svg className="w-8 h-8 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

const Home = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { isDarkMode } = useApp();
  
  return (
    <div className="min-h-[calc(100vh-70px)]">
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-section-bg dark:bg-section-bg-dark relative overflow-hidden">
        {/* ตกแต่งพื้นหลัง */}
        <div className="absolute inset-0 bg-dots-lg opacity-30"></div>
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-secondary/5 dark:bg-secondary/10 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title text-4xl md:text-5xl font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-light-text dark:text-light-text-dark text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience in building modern, responsive, and user-friendly applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <Link
                key={project.id}
                to={project.link}
                className="group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div 
                  className={`card h-full overflow-hidden transition-all duration-500 ${
                    hoveredProject === project.id ? 'transform -translate-y-2 shadow-lg dark:shadow-lg' : ''
                  }`}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 text-xs bg-primary/90 text-white rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-text dark:text-text-dark group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-light-text dark:text-light-text-dark mb-4">{project.description}</p>
                    <div className="text-primary flex items-center font-medium group-hover:underline">
                      View Project
                      <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="btn btn-secondary group inline-flex items-center justify-center rounded-full py-3 px-8"
            >
              <span>View All Projects</span>
              <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title text-4xl md:text-5xl font-bold mb-6">
              My Skills
            </h2>
            <p className="text-light-text dark:text-light-text-dark text-lg max-w-2xl mx-auto">
              I specialize in building modern web applications using the latest technologies and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.map((skill) => (
              <div 
                key={skill.category}
                className="p-8 bg-card-bg dark:bg-card-bg-dark rounded-xl shadow-soft dark:shadow-soft-dark hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-card-border/20 dark:border-card-border-dark/30"
              >
                {skill.icon}
                <h3 className="text-xl font-semibold text-primary mb-4">{skill.category}</h3>
                <ul className="text-light-text dark:text-light-text-dark space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-16 bg-primary/5 dark:bg-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-lg opacity-30"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto bg-card-bg dark:bg-card-bg-dark rounded-2xl shadow-lg dark:shadow-lg p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-6">Ready to work together?</h2>
            <p className="text-light-text dark:text-light-text-dark text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life. I'm always open to new projects and collaborations.
            </p>
            <Link 
              to="/contact" 
              className="btn btn-primary group inline-flex items-center justify-center rounded-full py-3 px-8"
            >
              <span>Get in Touch</span>
              <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
