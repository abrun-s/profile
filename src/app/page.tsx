'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import VideoModal from '@/components/VideoModal'
import ProjectCard from '@/components/ProjectCard'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState('')
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  // Sample data - replace with your actual content
  const videoProjects = [
    {
      id: 1,
      title: "Motion Graphics Reel",
      description: "A showcase of my motion graphics work",
      videoUrl: "https://player.vimeo.com/video/123456789",
      thumbnail: "/video-thumb-1.jpg",
      frameworks: ["After Effects", "Cinema 4D", "Premiere Pro"]
    },
    {
      id: 2,
      title: "Brand Animation",
      description: "Corporate brand identity animation",
      videoUrl: "https://player.vimeo.com/video/987654321",
      thumbnail: "/video-thumb-2.jpg",
      frameworks: ["After Effects", "Illustrator", "Photoshop"]
    },
    {
      id: 3,
      title: "Product Demo",
      description: "Product demonstration video",
      videoUrl: "https://player.vimeo.com/video/456789123",
      thumbnail: "/video-thumb-3.jpg",
      frameworks: ["After Effects", "Cinema 4D"]
    }
  ]

  const codingProjects = [
    {
      id: 4,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution",
      image: "/project-1.jpg",
      githubUrl: "https://github.com/username/project1",
      liveUrl: "https://project1.com",
      frameworks: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Modern portfolio built with Next.js",
      image: "/project-2.jpg",
      githubUrl: "https://github.com/username/project2",
      liveUrl: "https://project2.com",
      frameworks: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      id: 6,
      title: "Task Management App",
      description: "Real-time task management application",
      image: "/project-3.jpg",
      githubUrl: "https://github.com/username/project3",
      liveUrl: "https://project3.com",
      frameworks: ["Vue.js", "Firebase", "Vuex"]
    }
  ]

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl)
    setIsVideoModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 z-10"></div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <motion.div 
          className="relative z-20 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold mb-6">
            Adam Brunson
          </h1>
          <p className="text-2xl mb-8">
            Developer & Motion Graphics Artist
          </p>
          <motion.button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Video Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Video Work
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div 
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                  onClick={() => handleVideoClick(project.videoUrl)}
                >
                  <div className="aspect-video bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                    <div className="text-center">
                      <i className="fas fa-play-circle text-4xl text-white mb-2"></i>
                      <p className="text-white font-semibold">{project.title}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <i className="fas fa-play text-4xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </div>
                </div>
                <div className="mt-4">
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
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Coding Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {codingProjects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={selectedVideo}
      />
    </div>
  )
}
