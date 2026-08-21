import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX, FiSearch } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ي</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-primary-700">اليمن</span>
              <span className="text-xs text-gray-500">دليل الأعمال</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition">
              الرئيسية
            </Link>
            <Link to="/directory" className="text-gray-700 hover:text-primary-600 transition">
              دليل الشركات
            </Link>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition">
              من نحن
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition">
              اتصل بنا
            </a>
          </div>

          {/* Search Button */}
          <div className="hidden sm:flex">
            <Link 
              to="/directory" 
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
            >
              <FiSearch size={18} />
              <span>بحث</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link 
              to="/" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsOpen(false)}
            >
              الرئيسية
            </Link>
            <Link 
              to="/directory" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsOpen(false)}
            >
              دليل الشركات
            </Link>
            <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              من نحن
            </a>
            <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              اتصل بنا
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
