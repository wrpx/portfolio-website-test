
const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">
            About Me
          </h1>
          <div className="prose prose-lg">
            <p className="text-light-text mb-6">
              Hello! I'm a passionate developer with a love for creating beautiful and functional web applications. 
              I specialize in modern web technologies and enjoy turning complex problems into simple, beautiful solutions.
            </p>
            <p className="text-light-text mb-6">
              With several years of experience in web development, I've worked on a variety of projects ranging from 
              small business websites to large-scale applications. I'm always eager to learn new technologies and improve my skills.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-text mb-8">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                'JavaScript/TypeScript',
                'React.js',
                'Node.js',
                'Tailwind CSS',
                'MongoDB',
                'Git',
                'Docker',
                'AWS',
                'UI/UX Design'
              ].map((skill) => (
                <div 
                  key={skill}
                  className="p-4 bg-section-bg rounded-lg text-center hover:transform hover:-translate-y-1 transition-transform"
                >
                  <span className="text-text">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-text mb-8">Experience</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold text-text">Senior Developer</h3>
                <p className="text-primary">2020 - Present</p>
                <p className="text-light-text mt-2">
                  Leading development of web applications and mentoring junior developers.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold text-text">Full Stack Developer</h3>
                <p className="text-primary">2018 - 2020</p>
                <p className="text-light-text mt-2">
                  Developed and maintained multiple web applications using modern technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-text mb-8">Education</h2>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-semibold text-text">Computer Science</h3>
              <p className="text-primary">University Name</p>
              <p className="text-light-text mt-2">2014 - 2018</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
