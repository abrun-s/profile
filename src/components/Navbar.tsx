import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Adam Brunson
          </Link>
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              About
            </Link>
            <Link href="/work" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Work
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 