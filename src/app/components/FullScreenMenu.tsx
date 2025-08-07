"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

interface FullScreenMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  const menuItems = ["Work", "About", "Services", "Contact"]

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button className="absolute top-6 right-6 text-gray-900" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="text-center">
            {menuItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="block text-4xl font-bold text-gray-900 mb-6 hover:text-gray-600 transition-colors"
                  onClick={onClose}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
