import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';

// Define the type for our work items
interface WorkItem {
  id: string;
  title: string;
  type: 'video' | 'code';
  thumbnail: string;
  videoUrl?: string;
  appUrl?: string;
  githubUrl?: string;
  description: string;
}

// Sample work items
const workItems: WorkItem[] = [
  {
    id: 'inverly',
    title: 'Inverly',
    type: 'code',
    thumbnail: '/images/Inverly_Screenshot.png',
    appUrl: '#',
    githubUrl: '#',
    description: 'A web application project'
  },
  {
    id: 'graphic-samples',
    title: 'Graphic Samples',
    type: 'video',
    thumbnail: 'https://player.vimeo.com/video/835433346?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479',
    videoUrl: 'https://player.vimeo.com/video/835433346?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479',
    description: 'Motion graphics portfolio piece'
  },
  // Add more work items here
];

const Work = () => {
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: WorkItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">My Work</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div 
              className="relative group cursor-pointer"
              onClick={() => openModal(item)}
            >
              {item.type === 'video' ? (
                <iframe
                  src={item.thumbnail}
                  className="w-full aspect-video"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title={item.title}
                />
              ) : (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full aspect-video object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view
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
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        {selectedItem && (
          <div className="bg-white p-4 rounded-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedItem.title}</h2>
            {selectedItem.type === 'video' && selectedItem.videoUrl && (
              <iframe
                src={selectedItem.videoUrl}
                className="w-full aspect-video"
                allow="autoplay; fullscreen; picture-in-picture"
                title={selectedItem.title}
              />
            )}
            <p className="mt-4 text-gray-600">{selectedItem.description}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Work; 