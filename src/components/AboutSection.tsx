'use client'

import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <i className="fas fa-user-circle text-8xl mb-4"></i>
                  <p className="text-xl font-semibold">Adam Brunson</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 p-3 rounded-full shadow-lg"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <i className="fas fa-code text-xl"></i>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 bg-pink-400 text-white p-3 rounded-full shadow-lg"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <i className="fas fa-video text-xl"></i>
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              I'm a passionate developer and motion graphics artist with a love for creating 
              beautiful, interactive experiences. With expertise in both web development and 
              visual design, I bridge the gap between code and creativity.
            </motion.p>
            
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              My work spans from full-stack web applications to stunning motion graphics 
              and animations. I believe in the power of combining technical skills with 
              artistic vision to create memorable digital experiences.
            </motion.p>

            {/* Skills Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  <i className="fas fa-code mr-2 text-blue-500"></i>
                  Development
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  React, Next.js, TypeScript, Node.js, Full-stack development
                </p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  <i className="fas fa-video mr-2 text-purple-500"></i>
                  Motion Graphics
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  After Effects, Cinema 4D, Premiere Pro, Animation
                </p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  <i className="fas fa-palette mr-2 text-pink-500"></i>
                  Design
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  UI/UX, Visual Design, Brand Identity, Creative Direction
                </p>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  <i className="fas fa-rocket mr-2 text-green-500"></i>
                  Innovation
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Emerging Tech, Creative Problem Solving, User Experience
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 