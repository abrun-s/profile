'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Modal from 'react-modal'


interface WorkItem {
  id: string
  title: string
  type: 'video' | 'code'
  thumbnail: string
  videoUrl?: string
  appUrl?: string
  githubUrl?: string
  description: string
}

const workItems: WorkItem[] = [
  {
    id: 'project1',
    title: 'Motion Graphics Demo',
    type: 'video',
    thumbnail: 'https://player.vimeo.com/video/YOUR_VIDEO_ID/thumbnail',
    videoUrl: 'https://player.vimeo.com/video/YOUR_VIDEO_ID',
    description: 'A showcase of motion graphics and animation work.'
  },
  {
    id: 'project2',
    title: 'Intermediate Next',
    type: 'code',
    thumbnail: '/images/project2.jpg',
    appUrl: 'https://your-app-url.com',
    githubUrl: 'https://github.com/abrun-s/intermediate-nextjs',
    description: 'A full-stack web application built with React and Node.js.'
  },
  {
    id: 'project3',
    title: 'PawPal',
    type: 'code',
    thumbnail: '/images/project2.jpg',
    appUrl: 'https://your-app-url.com',
    githubUrl: 'https://github.com/abrun-s/PawPal',
    description: 'A full-stack web application built with React and Node.js.'
  },
  {
    id: 'project4',
    title: 'cafe-react',
    type: 'code',
    thumbnail: '/images/project2.jpg',
    appUrl: 'https://your-app-url.com',
    githubUrl: 'https://github.com/abrun-s/cafe-react',
    description: 'Find a cafe that is laptop friendly in Tokyo.'
  }
]

export default function Work() {
  useEffect(() => {
    Modal.setAppElement(document.body)
  }, []);

  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (item: WorkItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">My Work</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div
              className="relative group cursor-pointer aspect-video"
              onClick={() => openModal(item)}
            >
              {item.type === 'video' ? (
                <div className="w-full h-full">
                  <iframe
                    src={`${item.thumbnail}?autoplay=1&loop=1&background=1&muted=1`}
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    title={item.title}
                  />
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.type === 'video' ? 'Play Video' : 'View Project'}
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex space-x-4">
                {item.appUrl && (
                  <a
                    href={item.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View App
                  </a>
                )}
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        {selectedItem && (
          <div className="bg-white rounded-lg max-w-4xl mx-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              {selectedItem.type === 'video' && selectedItem.videoUrl && (
                <div className="aspect-video mb-4">
                  <iframe
                    src={selectedItem.videoUrl}
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    title={selectedItem.title}
                  />
                </div>
              )}

              <p className="text-gray-600 mb-4">{selectedItem.description}</p>

              <div className="flex space-x-4">
                {selectedItem.appUrl && (
                  <a
                    href={selectedItem.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View App
                  </a>
                )}
                {selectedItem.githubUrl && (
                  <a
                    href={selectedItem.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
