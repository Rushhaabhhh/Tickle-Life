"use client";

import "./globals.css";
import "./style.css";
import "./coin.css";

import React, { Suspense, useState, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Experience from "./components/Experience.jsx";
import Experience2 from "./components/Experience2.jsx";
import LoadingScreen from "./components/LoadingScreen";
import HeroText from "./components/HeroText";
import TabletForm from "./components/TabletForm";
import DollarCursor from "./components/DollarCursor";
import { usePathname } from "next/navigation";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <div
        className="flex flex-col min-h-screen inter-400 bg-background text-foreground"
        suppressHydrationWarning={true}
      >
        {!isLoaded && <LoadingScreen onFinish={() => setIsLoaded(true)} />}
      </div>
    );
  }

  const cursorClass = pathname === "/" ? "cursor-none" : "cursor-auto";
  const isHome = pathname === "/";

  return (
    <div
      className={`flex flex-col min-h-screen inter-400 bg-background text-foreground ${cursorClass}`}
      suppressHydrationWarning={true}
    >
      {!isLoaded && <LoadingScreen onFinish={() => setIsLoaded(true)} />}
      <DollarCursor />
      <Navbar />

      {/* 
        Canvas is isolated in a fixed/absolute container so its injected styles
        never affect the document flow that Navbar, main content, and Footer live in.
      */}
      <div
        style={{
          position: isHome ? "fixed" : "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: isHome ? "100vh" : "100%",
          zIndex: 0,
          pointerEvents: isHome ? "auto" : "none",
        }}
      >
        <Canvas
          shadows
          camera={{ position: [25, 30, -58], fov: 50 }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={null}>
            <color attach="background" args={["#111"]} />
            {isHome ? (
              <ScrollControls pages={3} damping={0.2}>
                <Experience
                  triggerExplosion={triggerExplosion}
                  active={active}
                  onHeartClick={handleExplosion}
                  isLoaded={isLoaded}
                />
              </ScrollControls>
            ) : (
              <Experience2
                active={active}
                triggerExplosion={false}
                isLoaded={isLoaded}
              />
            )}
          </Suspense>
        </Canvas>
      </div>

      {/* All page content sits above the Canvas in z-index */}
      <main className="relative z-10 flex-grow">
        {isHome && (
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

      {!isHome && <Footer />}
    </div>
  );
}
