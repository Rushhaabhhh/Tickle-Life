"use client";

import "./globals.css";
import "./style.css";
import "./coin.css";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { usePathname } from "next/navigation";

import Navbar from "./components/Navbar";
import Experience from "./components/Experience.jsx";
import Experience2 from "./components/Experience2.jsx";
import LoadingScreen from "./components/LoadingScreen";
import HeroText from "./components/HeroText";
import TabletForm from "./components/TabletForm";
import DollarCursor from "./components/DollarCursor";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [triggerExplosion, setTriggerExplosion] = useState(false);
  const [active] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Mount client-side state safely
  useEffect(() => {
    setMounted(true);
    const path = window.location.pathname;
    setPathname(path);
  }, []);

  const handleExplosion = () => {
    setTriggerExplosion((prev) => !prev);
  };

  if (!mounted) {
    return (
      <html lang="en">
        <body className="flex flex-col min-h-screen font-inter bg-gray-100">
          {!isLoaded && <LoadingScreen onFinish={() => setIsLoaded(true)} />}
        </body>
      </html>
    );
  }

  const cursorStyle = pathname === "/" ? "none" : "auto";

  return (
    <html lang="en">
      <body
        className="flex flex-col min-h-screen font-inter bg-gray-100"
        style={{ cursor: cursorStyle }}
        suppressHydrationWarning={true}
      >
        {!isLoaded && <LoadingScreen onFinish={() => setIsLoaded(true)} />}

        <DollarCursor />
        <Navbar />
        <main className="flex-grow">
          <DollarCursor />

          <div className="w-full h-screen">
            <Canvas
              shadows
              camera={{ position: [40, -2, 3], fov: 50 }}
              dpr={[1, 1.5]}
            >
              <Suspense fallback={null}>
                <color attach="background" args={["#111"]} />

                {pathname === "/" ? (
                  <ScrollControls pages={3} damping={0.2}>
                    <Experience
                      triggerExplosion={triggerExplosion}
                      active={active}
                      onHeartClick={handleExplosion}
                      isLoaded={isLoaded}
                    />
                  </ScrollControls>
                ) : (
                  <Experience2 active={active} triggerExplosion={false} isLoaded={isLoaded} />
                )}
              </Suspense>
            </Canvas>
          </div>

          {pathname === "/" && (
            <>
              <HeroText active={active} onExplosion={handleExplosion} />
              <TabletForm
                triggerExplosion={triggerExplosion}
                trigger={triggerExplosion}
                formRef={undefined}
              />
            </>
          )}

          {children}
        </main>
      </body>
    </html>
  );
}
