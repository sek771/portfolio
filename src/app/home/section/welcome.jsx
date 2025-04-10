"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Animation from "@/app/components/tools/animation/welcome";

const Welcome = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const starsRef = useRef([]);
  const planetsRef = useRef([]);
  const shootingStarsRef = useRef([]);
  const ctxRef = useRef(null);

  // Fonction init déplacée ici
  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !ctxRef.current) return;

    // Déclaration des classes à l'intérieur de la fonction init
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 1.5;
        this.dx = (Math.random() - 0.5) * 0.3;
        this.dy = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random();
        this.twinkleSpeed = Math.random() * 0.02;
      }
      draw() {
        const ctx = ctxRef.current;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
      update() {
        this.opacity += this.twinkleSpeed * (Math.random() > 0.5 ? 1 : -1);
        this.opacity = Math.min(1, Math.max(0.3, this.opacity));
        this.x += this.dx;
        this.y += this.dy;
        const canvas = canvasRef.current;
        if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
        this.draw();
      }
    }

    class Planet {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 40 + 20;
        this.color = `hsl(${Math.random() * 360}, 80%, 60%)`;
      }
      draw() {
        const ctx = ctxRef.current;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    class ShootingStar {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = (Math.random() * canvas.height) / 2;
        this.length = Math.random() * 80 + 30;
        this.speed = Math.random() * 10 + 5;
      }
      draw() {
        const ctx = ctxRef.current;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.length, this.y + this.length);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      update() {
        const canvas = canvasRef.current;
        this.x += this.speed;
        this.y += this.speed;
        if (this.x > canvas.width || this.y > canvas.height) {
          this.x = Math.random() * canvas.width;
          this.y = (Math.random() * canvas.height) / 2;
        }
        this.draw();
      }
    }

    starsRef.current = Array.from({ length: 200 }, () => new Star());
    planetsRef.current = Array.from({ length: 5 }, () => new Planet());
    shootingStarsRef.current = Array.from(
      { length: 3 },
      () => new ShootingStar()
    );
  }, []);

  // Setup du canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctxRef.current = ctx;
  }, []);

  // Resize handler
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [init]);

  // Lancer l'animation
  useEffect(() => {
    const animate = () => {
      const canvas = canvasRef.current;
      const ctx = ctxRef.current;
      if (!canvas || !ctx) return;

      ctx.fillStyle = "rgba(10, 10, 35, 0.9)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "#0a0a23");
      gradient.addColorStop(0.5, "#1b2957");
      gradient.addColorStop(1, "#0a0a23");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => star.update());
      planetsRef.current.forEach((planet) => planet.draw());
      shootingStarsRef.current.forEach((s) => s.update());

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <motion.div
        className="relative z-10 text-yellow-200 w-full h-screen flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.svg
          className="md:w-72 lg:w-60 md:h-36 lg:h-24"
          viewBox="0 0 600 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
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
        </motion.svg>

        <motion.h1
          className="font-klein text-center mx-4 py-10 lg:text-xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Bonjour et bienvenue sur mon portfolio !
        </motion.h1>

        <Animation />

        <motion.div
          className="font-klein flex flex-col pt-20 lg:flex-row"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
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
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-blue-900 to-transparent" />
    </section>
  );
};

export default Welcome;
