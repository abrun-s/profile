'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Player } from '@vimeo/player'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
}

const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
  const playerRef = useRef<HTMLDivElement>(null)
  const playerInstance = useRef<Player | null>(null)

  useEffect(() => {
    if (isOpen && playerRef.current && videoUrl) {
      // Extract video ID from Vimeo URL
      const videoId = videoUrl.split('/').pop()
      if (videoId) {
        playerInstance.current = new Player(playerRef.current, {
          id: videoId,
          width: 800,
          height: 450,
          autoplay: true
        })
      }
    }

    return () => {
      if (playerInstance.current) {
        playerInstance.current.destroy()
        playerInstance.current = null
      }
    }
  }, [isOpen, videoUrl])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white dark:bg-gray-800 rounded-lg p-6 max-w-4xl w-full mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="flex justify-center">
              <div ref={playerRef} className="w-full max-w-4xl"></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default VideoModal 