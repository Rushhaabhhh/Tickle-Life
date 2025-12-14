"use client";

import "./globals.css";
import "./style.css";
import "./coin.css";

import React, { Suspense, useState } from "react";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [triggerExplosion, setTriggerExplosion] = useState(false);
  const [active] = useState(false);

  const handleExplosion = () => {
    // Toggle or trigger the explosion
    setTriggerExplosion((prev) => !prev);
  };

  return (
    <html lang="en">
      <body
        className="flex flex-col min-h-screen font-inter bg-gray-100"
        style={{ cursor: pathname === "/" ? "none" : "auto" }}
      >
        <LoadingScreen />
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
                    />
                  </ScrollControls>
                ) : (
                  <Experience2
                    active={active}
                    triggerExplosion={undefined}
                  />
                )}
              </Suspense>
            </Canvas>
          </div>

          {pathname === "/" && (
            <>
              <HeroText
                active={active}
                onExplosion={handleExplosion}
              />
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
