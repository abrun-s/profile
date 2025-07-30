

  interface WorkItem {
    title: string
    type: 'video' | 'code'
    thumbnail: string
    videoUrl?: string
    appUrl?: string
    githubUrl?: string
    description: string
  }

  export const workItems: WorkItem[] = [
    {
      title: 'Graphic Samples',
      type: 'video',
      thumbnail: 'https://player.vimeo.com/video/835433346',
      videoUrl: 'https://player.vimeo.com/video/835433346',
      description: 'A showcase of motion graphics and animation work.'
    },
    {
      title: 'Intermediate Next',
      type: 'code',
      thumbnail: '/images/project2.jpg',
      appUrl: 'https://your-app-url.com',
      githubUrl: 'https://github.com/abrun-s/intermediate-nextjs',
      description: 'A full-stack web application built with React and Node.js.'
    },
    {
      title: 'PawPal',
      type: 'code',
      thumbnail: '/images/project2.jpg',
      appUrl: 'https://your-app-url.com',
      githubUrl: 'https://github.com/abrun-s/PawPal',
      description: 'A full-stack web application built with React and Node.js.'
    },
    {
      title: 'cafe-react',
      type: 'code',
      thumbnail: '/images/project2.jpg',
      appUrl: 'https://your-app-url.com',
      githubUrl: 'https://github.com/abrun-s/cafe-react',
      description: 'Find a cafe that is laptop friendly in Tokyo.'
    }
  ]
