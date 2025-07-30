'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Modal from 'react-modal'
import { workItems } from './(video)/page'
import  Player  from '@vimeo/player'

interface WorkItem {
  title: string
  type: 'video' | 'code'
  thumbnail: string
  videoUrl?: string
  appUrl?: string
  githubUrl?: string
  description: string
}

export default function Work() {
  useEffect(() => {
    Modal.setAppElement(document.body)
  }, []);

  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null)
  const [playbackTime, setPlaybackTime] = useState<number>(0)

  const openModal = (item: WorkItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
    setPlaybackTime(0)
  }

  const handleTimeUpdate = (iframe: HTMLIFrameElement) => {
    const player = new Player(iframe);
    player.getCurrentTime().then((time: number) => {
      setPlaybackTime(time);
    });
  }
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">My Work</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workItems.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div
              className="relative group cursor-pointer aspect-video"
              onMouseEnter={() => setHoveredVideo(item.title)}
              onMouseLeave={() => setHoveredVideo(null)}
              onClick={() => openModal(item)}
            >
              {item.type === 'video' ? (
                <div className="w-full h-full">
                  <iframe
                    src={
                      hoveredVideo === item.title
                        ? `${item.videoUrl}?autoplay=1&loop=1&background=1&muted=1`
                        : `${item.videoUrl}?autoplay=0&loop=1&background=1&muted=1`
                    }
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    title={item.title}
                    onLoad={(e) => handleTimeUpdate(e.target as HTMLIFrameElement)}
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
                    src={`${selectedItem.videoUrl}?autoplay=1&start=${Math.floor(
                      playbackTime
                    )}`}
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
