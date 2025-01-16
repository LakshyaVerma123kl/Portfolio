"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const stars = starsRef.current;
    if (!cursor || !stars) return;

    const trail: HTMLDivElement[] = [];
    const trailLength = 20;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      stars.style.transform = `translate(${x * 20}px, ${y * 20}px)`;

      const trailParticle = document.createElement("div");
      trailParticle.className = "lightsaber-trail-particle";
      trailParticle.style.left = `${e.clientX}px`;
      trailParticle.style.top = `${e.clientY}px`;
      document.body.appendChild(trailParticle);
      trail.push(trailParticle);

      if (trail.length > trailLength) {
        const oldestParticle = trail.shift();
        if (oldestParticle) {
          oldestParticle.style.width = "0px";
          oldestParticle.style.height = "0px";
          oldestParticle.style.opacity = "0";
          setTimeout(() => oldestParticle.remove(), 300);
        }
      }
    };

    const createStars = () => {
      const starTypes = ["star-bright", "star-dim", "star-red", "star-blue"];
      for (let i = 0; i < 2000; i++) {
        const star = document.createElement("div");
        star.className = `star ${
          starTypes[Math.floor(Math.random() * starTypes.length)]
        }`;
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        stars.appendChild(star);
      }
    };

    const createShootingStars = () => {
      for (let i = 0; i < 120; i++) {
        const shootingStar = document.createElement("div");
        shootingStar.className = "shooting-star";
        shootingStar.style.left = `${Math.random() * 100}%`;
        shootingStar.style.top = `${Math.random() * 100}%`;
        shootingStar.style.animationDelay = `${Math.random() * 10}s`;
        stars.appendChild(shootingStar);
      }
    };

    createStars();
    createShootingStars();
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      trail.forEach((particle) => particle.remove());
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="star-wars-bg">
          <div ref={starsRef} className="parallax-stars"></div>
        </div>
        <div
          ref={cursorRef}
          className="lightsaber-cursor"
          style={{
            width: "4px",
            height: "20px",
            backgroundColor: "#3b82f6",
            boxShadow:
              "0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6, 0 0 40px #3b82f6",
          }}
        ></div>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
