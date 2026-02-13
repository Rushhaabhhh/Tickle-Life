"use client";

import "./globals.css";
import "./style.css";
import "./coin.css";

import React, { Suspense, useState, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

import Navbar from "./components/Navbar";
import Experience from "./components/Experience.jsx";
import Experience2 from "./components/Experience2.jsx";
import LoadingScreen from "./components/LoadingScreen";
import HeroText from "./components/HeroText";
import TabletForm from "./components/TabletForm";
import DollarCursor from "./components/DollarCursor";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [triggerExplosion, setTriggerExplosion] = useState(false);
  const [active] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (!isLoaded) {
      setMounted(true);
    }
  }, [isLoaded]);

  const handleExplosion = useCallback(() => {
    setTriggerExplosion((prev) => !prev);
  }, []);

  if (!mounted) {
    return (
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </head>
        <body
          className="flex flex-col min-h-screen inter-400 bg-background text-foreground"
          suppressHydrationWarning={true}
        >
          {!isLoaded && <LoadingScreen onFinish={() => setIsLoaded(true)} />}
        </body>
      </html>
    );
  }

  const cursorClass = pathname === "/" ? "cursor-none" : "cursor-auto";

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`flex flex-col inter-400 bg-background text-foreground ${cursorClass}`}
        suppressHydrationWarning={true}
      >
        {!isLoaded && <LoadingScreen onFinish={() => setIsLoaded(true)} />}

        <DollarCursor />
        <Navbar />
        <main className="flex-grow">
          <div className={pathname === "/" ? "w-full h-screen" : ""}>
            <Canvas
              shadows
              camera={{ position: [25, 30, -58], fov: 50 }}
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
