import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Jr. Developer & Motion Graphics Artist
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Creating beautiful experiences through code and motion
        </p>
        <Link 
          href="/work" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View My Work
        </Link>
      </section>

      {/* Featured Work */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured items will be added here */}
        </div>
      </section>
    </div>
  )
}
