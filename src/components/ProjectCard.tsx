'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  description: string
  image: string
  githubUrl: string
  liveUrl: string
  frameworks: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const getFrameworkIcon = (framework: string) => {
    const iconMap: { [key: string]: string } = {
      'React': 'fab fa-react',
      'Next.js': 'fas fa-arrow-right',
      'TypeScript': 'fab fa-js-square',
      'Node.js': 'fab fa-node-js',
      'MongoDB': 'fas fa-database',
      'Firebase': 'fas fa-fire',
      'Vue.js': 'fab fa-vuejs',
      'Vuex': 'fas fa-store',
      'Tailwind CSS': 'fas fa-palette',
      'JavaScript': 'fab fa-js-square',
      'HTML': 'fab fa-html5',
      'CSS': 'fab fa-css3-alt',
      'Python': 'fab fa-python',
      'Django': 'fab fa-python',
      'PostgreSQL': 'fas fa-database',
      'Docker': 'fab fa-docker',
      'AWS': 'fab fa-aws',
      'Git': 'fab fa-git-alt'
    }
    return iconMap[framework] || 'fas fa-code'
  }

  return (
    <motion.div
      className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Project Image */}
      <div className="relative aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80 flex items-center justify-center">
          <div className="text-center text-white">
            <i className="fas fa-code text-4xl mb-2"></i>
            <p className="font-semibold">{project.title}</p>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <i className="fab fa-github text-xl"></i>
            </Link>
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <i className="fas fa-external-link-alt text-xl"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        
        {/* Framework Icons */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.frameworks.map((framework, idx) => (
            <span
              key={idx}
              className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
            >
              <i className={getFrameworkIcon(framework)}></i>
              {framework}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-center"
          >
            <i className="fab fa-github mr-2"></i>
            Code
          </Link>
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
          >
            <i className="fas fa-external-link-alt mr-2"></i>
            Live
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard 