"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import { useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const starsRef = useRef<HTMLDivElement>(null);
  const starFieldRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const starField = starFieldRef.current;
    const stars = starsRef.current;
    if (!stars || !starField) return;

    const trail: HTMLDivElement[] = [];
    const trailLength = 10;

    // SUBTLE ENHANCEMENT 1: Improved mouse trail with fade
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      // Slightly more responsive parallax
      stars.style.transform = `translate(${x * 20}px, ${y * 20}px)`;

      const trailParticle = document.createElement("div");
      trailParticle.className = "lightsaber-trail-particle";
      trailParticle.style.left = `${e.clientX}px`;
      trailParticle.style.top = `${e.clientY}px`;
      
      // Add subtle color variation
      const hue = (x * 360) % 360;
      trailParticle.style.setProperty('--trail-hue', `${hue}`);
      
      document.body.appendChild(trailParticle);
      trail.push(trailParticle);

      if (trail.length > trailLength) {
        const oldestParticle = trail.shift();
        if (oldestParticle) {
          oldestParticle.style.opacity = "0";
          setTimeout(() => oldestParticle.remove(), 150);
        }
      }
    };

    // SUBTLE ENHANCEMENT 2: Slightly more star variation
    const createStars = () => {
      const layers = [
        { count: 450, size: 1, class: "star-dim", depth: 0.5 },
        { count: 250, size: 2, class: "star-bright", depth: 1 },
        { count: 100, size: 3, class: "star-glow", depth: 1.5 },
      ];

      layers.forEach((layer) => {
        for (let i = 0; i < layer.count; i++) {
          const star = document.createElement("div");
          star.className = `star ${layer.class}`;
          const size = Math.random() * layer.size + 1;
          star.style.width = `${size}px`;
          star.style.height = `${size}px`;
          star.style.left = `${Math.random() * 100}%`;
          star.style.top = `${Math.random() * 100}%`;
          star.style.transform = `scale(${layer.depth})`;
          star.style.animationDelay = `${Math.random() * 3}s`;
          
          // Add subtle twinkle variation
          if (Math.random() > 0.7) {
            star.style.animationDuration = `${2 + Math.random() * 2}s`;
          }
          
          stars.appendChild(star);
        }
      });

      const nebula = document.createElement("div");
      nebula.className = "nebula";
      stars.appendChild(nebula);
    };

    // SUBTLE ENHANCEMENT 3: More varied shooting stars
    const createShootingStars = () => {
      for (let i = 0; i < 15; i++) {
        const shootingStar = document.createElement("div");
        shootingStar.className = "shooting-star";
        shootingStar.style.top = `${Math.random() * 80}%`;
        shootingStar.style.right = `${Math.random() * 100}%`;
        const size = 2 + Math.random() * 4; // 2-6px
        shootingStar.style.width = `${size}px`;
        shootingStar.style.height = `${size}px`;
        const angle = 305 + Math.random() * 20; // 305-325deg
        shootingStar.style.setProperty("--start-angle", `${angle}deg`);
        shootingStar.style.animationDelay = `${Math.random() * 12 + i * 1.2}s`;
        shootingStar.style.animationDuration = `${2.5 + Math.random() * 2.5}s`;
        shootingStar.style.opacity = "0";
        starsRef.current?.appendChild(shootingStar);
      }
    };

    const createStarField = () => {
      const layers = 3;
      for (let i = 1; i <= layers; i++) {
        const layer = document.createElement("div");
        layer.className = `layer layer-${i}`;
        starField.appendChild(layer);
      }
    };

    // SUBTLE ENHANCEMENT 4: Smooth fade-in on load
    const initializeStarfield = () => {
      createStarField();
      createStars();
      createShootingStars();
      
      // Fade in effect
      setTimeout(() => setIsLoaded(true), 100);
    };

    initializeStarfield();
    document.addEventListener("mousemove", handleMouseMove);

    // SUBTLE ENHANCEMENT 5: Cleanup on visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        trail.forEach((particle) => particle.remove());
        trail.length = 0;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      trail.forEach((particle) => particle.remove());
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`star-wars-bg ${isLoaded ? 'loaded' : ''}`}>
          <div ref={starsRef} className="parallax-stars"></div>
          <div ref={starFieldRef} className="star-field"></div>
        </div>
        <Navigation />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
