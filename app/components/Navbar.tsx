'use client'
import { Linke } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navItems = [
  { title: 'HOME', href: '/' },
  { title: 'ABOUT', href: '/about' },
  { title: 'CONTACT', href: '/contact' },
]

export default function FullscreenMenu() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Menu Button */}
      <nav className="fixed top-0 right-0 w-full z-50 flex justify-end p-6 bg-transparent">
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="text-white text-3xl font-bold outline-none hover:scale-110 transition"
        >
          ☰
        </button>
      </nav>

      {/* Overlay Fullscreen Menu */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-700 
        ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Video BG */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/cosmic-bg.mp4" type="video/mp4" />
        </video>
        {/* Optional: color overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 z-0" />

        {/* UI Layer */}
        <div className="relative z-10 flex flex-col h-full">

          {/* CLOSE Button and Misc on top-right */}
          <div className="w-full flex justify-end items-center pt-8 pr-12 gap-8 text-white text-base tracking-wide">
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-xl sm:text-2xl font-semibold tracking-widest cursor-pointer hover:scale-110 transition-colors duration-300 outline-none hover:text-[#b2ff2b]"
              style={{letterSpacing: '0.2em'}}
            >
              CLOSE
            </button>
          </div>

          {/* Main: Big Left Aligned Nav */}
          <div className="flex-1 flex flex-row">
            {/* Navigation */}
            <div className="flex flex-col justify-center pl-[8vw] pt-0" style={{height: '100%'}}>
              {navItems.map(({ title, href }, idx) => (
                <div key={href} className="flex flex-row items-center mb-2">
                  {pathname === href &&
                    <span className="text-[#b2ff2b] text-5xl mr-4 -ml-6">&#8250;</span> 
                  }
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`
                      ${pathname === href
                        ? 'text-[#b2ff2b]'
                        : 'text-white'}
                      hover:text-[#b2ff2b] transition-colors
                      font-sans
                      font-bold
                      tracking-tight
                      leading-none
                      text-[5.5vw]
                      md:text-[5vw]
                      lg:text-[4vw]
                      xl:text-[4vw]
                      2xl:text-[3.8vw]
                      opacity-95
                    `}
                    style={{
                      lineHeight: '1.0',
                      letterSpacing: '-0.04em',
                      textShadow: '2px 2px 24px rgba(0,0,0,0.12)'
                    }}
                  >
                    {title}
                  </Link>
                </div>
              ))}
            </div>

            {/* Side Content: Description Block */}
            <div className="flex-1 hidden md:flex items-center justify-center">
              <div className="ml-8 w-full max-w-sm text-right pr-10">
                <div className="text-white text-[1.3vw] font-sans opacity-95 leading-snug tracking-tight"
                  style={{textShadow: '0 1px 8px rgba(0,0,0,0.13)'}}>
                  Unlock an unparalleled DeFi<br/>
                  experience that perfectly<br/>
                  blends top-tier security with<br/>
                  seamless user interaction.
                </div>
                <div className="pt-7">
                  <span className="uppercase text-[0.9vw] font-semibold text-white opacity-80 tracking-widest border-b border-white/40 hover:text-[#b2ff2b] cursor-pointer" style={{letterSpacing: '0.12em'}}>
                    HATOM APP &nbsp; &#8250;
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom-left icon/social */}
          <div className="absolute bottom-10 left-12 text-white opacity-80 select-none">
            <a
              href="https://www.linkedin.com/in/YOUR_HANDLE"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-xs font-bold">in</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
