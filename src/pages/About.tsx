import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
        
        <div className="flex items-center space-x-6 mb-8">
          <img 
            src="/images/adam_brun.png" 
            alt="Adam Brunson" 
            className="w-48 h-48 rounded-full object-cover"
          />
          <div>
            <p className="text-lg text-gray-700 mb-4">
              Hello! I'm Adam Brunson, a Jr. Developer and Professional Motion Graphics Artist.
              I combine my passion for coding with my creative skills in motion graphics to create
              engaging digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-vimeo text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">HTML5</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">CSS3</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">JavaScript</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">React</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Ruby</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Motion Graphics</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Video Editing</span>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700">
              Feel free to reach out to me at{' '}
              <a href="mailto:your.email@example.com" className="text-blue-600 hover:text-blue-800">
                your.email@example.com
              </a>
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default About; 