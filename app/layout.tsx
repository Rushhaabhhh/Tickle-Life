"use client";
import './globals.css'
import './style.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import  React, { useState } from 'react'
import {Canvas} from '@react-three/fiber'
import Experience from './components/Experience.jsx';
import Experience2 from './components/Experience2.jsx'
import HeroText from './components/HeroText';
import TabletForm from './components/TabletForm';
import { usePathname } from "next/navigation";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [triggerExplosion, setTriggerExplosion] = useState(false);
const [active,setActive]= useState(false);
const handleExplosion = () => {
    // Toggle or trigger the explosion
    setTriggerExplosion((prev) => !prev); 
  };

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-inter bg-gray-100">
        <Navbar />
        <main className="flex-grow">
   
    <div className="w-full h-screen">
      <Canvas shadows camera={{ position: [40, -2, 3], fov: 50 }} dpr={[1,1.5]}>
        <color attach="background" args={["#111"]} />
          {/* Render based on page */}
              {(pathname === "/" ) ? (
                <Experience 
                  triggerExplosion={triggerExplosion}
                  active={active}
                  onHeartClick={handleExplosion}
                />
              ) : (
                <Experience2 active={active} triggerExplosion={undefined} onHeartClick={undefined} />
              )}
        </Canvas>
      </div>
<HeroText active={active} onExplosion={handleExplosion}/>
      <TabletForm triggerExplosion={triggerExplosion} trigger={undefined} formRef={undefined} />
          {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}