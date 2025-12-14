'use client';

import * as THREE from "three";
import React, { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

const RippleShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color("#00ffff") },
    uGlowIntensity: { value: 3.0 },
    uHaloSpread: { value: 0.3 },
    uRippleSpeed: { value: 1.5 },
    uRippleCount: { value: 3.0 },
    uOpacity: { value: 1.0 },
  },

  vertexShader: `
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor;
    uniform float uGlowIntensity;
    uniform float uHaloSpread;
    uniform float uRippleSpeed;
    uniform float uRippleCount;
    uniform float uOpacity;

    varying vec3 vPosition;

    void main() {
      float dist = length(vPosition.xy);

      float edgeGlow = smoothstep(0.8, 1.0, dist);
      float halo = smoothstep(1.0, 1.0 + uHaloSpread, dist);
      float baseGlow = (1.0 - halo) * edgeGlow;

      float ripple = 0.0;
      for (float i = 0.0; i < 3.0; i++) {
        float t = fract(uTime * uRippleSpeed - i / uRippleCount);
        float waveRadius = t * 5.5;
        float wave = 1.0 - smoothstep(0.0, 0.05, abs(dist - waveRadius));
        ripple += wave * (1.0 - t);
      }

      float totalGlow = (baseGlow + ripple) * uGlowIntensity;
      vec3 color = uColor * totalGlow;

      gl_FragColor = vec4(color, totalGlow * 0.9 * uOpacity);
    }
  `,
};

const FuturisticRing = ({
  color = "#00ffff",
  glowIntensity = 3.0,
  haloSpread = 0.3,
  innerRadius = 0.8,
  outerRadius = 10.9,
  rippleSpeed = 1.5,
  rippleCount = 3.0,
  segments = 128,
  rotation = [Math.PI / 2, 0, 0],
  ...props
}) => {
  const scroll = useScroll();
  const materialRef = useRef();
  const fadeRef = useRef(0);

  /* ---------- Responsive scale ---------- */
  const [responsiveScale, setResponsiveScale] = useState(9);

  useEffect(() => {
    const w = window.innerWidth;
    if (w < 480) setResponsiveScale(6);
    else if (w < 789) setResponsiveScale(7);
    else setResponsiveScale(9);
  }, []);

  /* ---------- Material ---------- */
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(RippleShader.uniforms),
      vertexShader: RippleShader.vertexShader,
      fragmentShader: RippleShader.fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
  }, []);

  /* ---------- Update uniforms ---------- */
  useEffect(() => {
    material.uniforms.uColor.value.set(color);
    material.uniforms.uGlowIntensity.value = glowIntensity;
    material.uniforms.uHaloSpread.value = haloSpread;
    material.uniforms.uRippleSpeed.value = rippleSpeed;
    material.uniforms.uRippleCount.value = rippleCount;
  }, [color, glowIntensity, haloSpread, rippleSpeed, rippleCount, material]);

  /* ---------- Frame loop ---------- */
  useFrame((_, delta) => {
    if (!materialRef.current) return;

    // time
    materialRef.current.uniforms.uTime.value += delta;

    // fade starts after 50% scroll
    const targetFade = THREE.MathUtils.clamp(
      (scroll.offset - 0.2) * 2,
      0,
      1
    );

    fadeRef.current = THREE.MathUtils.lerp(
      fadeRef.current,
      targetFade,
      0.1
    );

    materialRef.current.uniforms.uOpacity.value = 1 - fadeRef.current;
  });

  return (
    <mesh rotation={rotation} scale={responsiveScale} {...props}>
      <ringGeometry args={[innerRadius, outerRadius, segments]} />
      <primitive ref={materialRef} object={material} attach="material" />
    </mesh>
  );
};

export default FuturisticRing;
