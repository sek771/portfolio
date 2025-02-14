"use client";

import React, { useEffect, useRef } from "react";
import Animation from "@/app/components/tools/animation/welcome";
import { TbFileCv } from "react-icons/tb";

const Header = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    let stars = [];
    const numStars = 200;

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 1.5;
        this.dx = (Math.random() - 0.5) * 0.5;
        this.dy = (Math.random() - 0.5) * 0.5;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      }
      update() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
        this.draw();
      }
    }

    function init() {
      stars = Array.from({ length: numStars }, () => new Star());
    }

    function animate() {
      ctx.fillStyle = "rgb(16, 24, 40)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => star.update());
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    resizeCanvas();
    init();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Fond galaxie animé */}
      <div className="absolute inset-0 bg-black">
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </div>

      {/* Contenu */}
      <div className="relative z-10 text-yellow-200 w-full h-screen flex flex-col justify-center items-center">
        <svg
          className="md:w-72 lg:w-60 md:h-36 lg:h-24"
          viewBox="0 0 600 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ailes Gauche */}
          <path
            d="M150 100 C80 70, 50 40, 60 30 C90 30, 130 70, 150 90"
            fill="none"
            stroke="#F2A900"
            strokeWidth="6"
          />
          <path
            d="M140 120 C70 90, 30 60, 40 50 C70 50, 110 90, 130 110"
            fill="none"
            stroke="#F2A900"
            strokeWidth="4"
          />
          <path
            d="M130 140 C60 110, 10 80, 20 70 C50 70, 90 110, 110 130"
            fill="none"
            stroke="#F2A900"
            strokeWidth="3"
          />

          {/* Ailes Droite */}
          <path
            d="M450 100 C520 70, 550 40, 540 30 C510 30, 470 70, 450 90"
            fill="none"
            stroke="#F2A900"
            strokeWidth="6"
          />
          <path
            d="M460 120 C530 90, 570 60, 560 50 C530 50, 490 90, 470 110"
            fill="none"
            stroke="#F2A900"
            strokeWidth="4"
          />
          <path
            d="M470 140 C540 110, 590 80, 580 70 C550 70, 510 110, 490 130"
            fill="none"
            stroke="#F2A900"
            strokeWidth="3"
          />

          {/* Texte SACKO Centré */}
          <text
            x="300"
            y="130"
            fontFamily="'Great Vibes', cursive"
            fontSize="70"
            fontWeight="bold"
            fill="#F2A900"
            textAnchor="middle"
          >
            SACKO
          </text>
        </svg>

        <h1 className="font-klein text-center mx-4 py-10 lg:text-xl">
          Bonjour et bienvenue sur mon portfolio !
        </h1>
        <Animation />
        <div className="font-klein flex flex-col pt-20 lg:flex-row">
          <a
            href="http://sacko-portfolio.fr/docs/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase lg:pr-8 my-3"
          >
            Mon CV
          </a>
          <button className="uppercase lg:pl-8" aria-label="Voir mes projets">
            Mes projets
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
