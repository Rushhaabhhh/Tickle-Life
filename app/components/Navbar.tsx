'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const navItems = [
  { title: 'Simulator', href: '/' },
  { title: 'Home', href: '/home' },
  { title: 'Industry', href: '/industry' },
  { title: 'Services', href: '/services' },
  { title: 'Resources', href: '/resources' },
  { title: 'Contact Us', href: '/contact-us' },
  { title: 'About Us', href: '/about-us' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-end p-6 bg-transparent">
        <button
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-xl font-bold"
        >
          {isOpen ? '×' : 'MENU'}
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`
          fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50
          transition-opacity duration-500
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col space-y-8 text-3xl font-bold text-white text-center">
          {navItems.map(({ title, href }) => (
            <Link
  key={href}
  href={href}
  onClick={() => setIsOpen(false)}
  className={`${
    pathname === href ? 'text-blue-400' : 'hover:text-blue-300'
  }`}
>
  {title}
</Link>

          ))}
        </nav>
      </div>
    </>
  )
}
