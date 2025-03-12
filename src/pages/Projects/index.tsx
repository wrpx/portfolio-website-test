import { useApp } from "../../context/AppContext";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
    image: 'https://via.placeholder.com/600x400',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A responsive task management application with real-time updates.',
    image: 'https://via.placeholder.com/600x400',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with React and Tailwind CSS.',
    image: 'https://via.placeholder.com/600x400',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

const Projects = () => {
  const { isDarkMode } = useApp();
  
  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white text-center mb-8">
          My Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Here are some of the projects I've worked on. Each project represents different challenges
          and learning experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      <i className="fab fa-github mr-2"></i>
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
