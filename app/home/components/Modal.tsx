'use client'

import React from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4 font-['IBM_Plex_Sans']">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[80vh] overflow-y-auto relative border-2 border-[#4A3A2E]/20 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-2xl text-[#4A3A2E] hover:text-[#2B1E17] cursor-pointer font-bold transition-colors"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
