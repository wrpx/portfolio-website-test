import { FC, useState, FormEvent } from 'react';

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text text-center mb-8">
            Get in Touch
          </h1>
          <p className="text-light-text text-center mb-12">
            Have a question or want to work together? Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-text mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-envelope text-primary w-8"></i>
                  <a href="mailto:your.email@example.com" className="text-light-text hover:text-primary transition-colors">
                    your.email@example.com
                  </a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone text-primary w-8"></i>
                  <span className="text-light-text">+1 234 567 890</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-primary w-8"></i>
                  <span className="text-light-text">Your Location</span>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-text mb-6">Follow Me</h2>
                <div className="flex space-x-4">
                  <a href="#" className="text-2xl text-primary hover:text-secondary transition-colors">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="text-2xl text-primary hover:text-secondary transition-colors">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-2xl text-primary hover:text-secondary transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-text font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-text font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-secondary transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
