'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import ProjectCard from '@/components/ProjectCard'
import VideoModal from '@/components/VideoModal'

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState('')
  const searchParams = useSearchParams()

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  // Sample data - replace with your actual content
  const allProjects = [
    // Video Projects
    {
      id: 1,
      title: "Motion Graphics Reel",
      description: "A showcase of my motion graphics work",
      videoUrl: "https://player.vimeo.com/video/123456789",
      thumbnail: "/video-thumb-1.jpg",
      frameworks: ["After Effects", "Cinema 4D", "Premiere Pro"],
      category: "video"
    },
    {
      id: 2,
      title: "Brand Animation",
      description: "Corporate brand identity animation",
      videoUrl: "https://player.vimeo.com/video/987654321",
      thumbnail: "/video-thumb-2.jpg",
      frameworks: ["After Effects", "Illustrator", "Photoshop"],
      category: "video"
    },
    {
      id: 3,
      title: "Product Demo",
      description: "Product demonstration video",
      videoUrl: "https://player.vimeo.com/video/456789123",
      thumbnail: "/video-thumb-3.jpg",
      frameworks: ["After Effects", "Cinema 4D"],
      category: "video"
    },
    // Coding Projects
    {
      id: 4,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution",
      image: "/project-1.jpg",
      githubUrl: "https://github.com/username/project1",
      liveUrl: "https://project1.com",
      frameworks: ["React", "Node.js", "MongoDB"],
      category: "coding"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Modern portfolio built with Next.js",
      image: "/project-2.jpg",
      githubUrl: "https://github.com/username/project2",
      liveUrl: "https://project2.com",
      frameworks: ["Next.js", "TypeScript", "Tailwind CSS"],
      category: "coding"
    },
    {
      id: 6,
      title: "Task Management App",
      description: "Real-time task management application",
      image: "/project-3.jpg",
      githubUrl: "https://github.com/username/project3",
      liveUrl: "https://project3.com",
      frameworks: ["Vue.js", "Firebase", "Vuex"],
      category: "coding"
    }
  ]

  const filteredProjects = allProjects.filter(project => {
    if (selectedCategory === 'all') return true
    return project.category === selectedCategory
  })

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl)
    setIsVideoModalOpen(true)
  }

  const categories = [
    { id: 'all', name: 'All Work', icon: 'fas fa-th' },
    { id: 'coding', name: 'Coding Work', icon: 'fas fa-code' },
    { id: 'video', name: 'Video Work', icon: 'fas fa-video' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My Work
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A collection of my projects and creative work
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <i className={category.icon}></i>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {project.category === 'video' ? (
                    // Video Project Card
                    <div className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div 
                        className="relative aspect-video bg-gray-300 dark:bg-gray-600 cursor-pointer"
                        onClick={() => handleVideoClick(project.videoUrl)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-80 flex items-center justify-center">
                          <div className="text-center text-white">
                            <i className="fas fa-play-circle text-4xl mb-2"></i>
                            <p className="font-semibold">{project.title}</p>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                          <i className="fas fa-play text-4xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.frameworks.map((framework, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full"
                            >
                              {framework}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Coding Project Card
                    <ProjectCard project={project} index={index} />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={selectedVideo}
      />
    </div>
  )
}
