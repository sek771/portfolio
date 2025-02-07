"use client";

import React, { useEffect } from "react";
import Animation from "@/app/components/tools/animation/welcome";
import Logo from "@/app/components/tools/logo";
import { TbFileCv } from "react-icons/tb";

const Header = () => {
  useEffect(() => {
    const canvas = document.getElementById("galaxyCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.fillStyle = "rgb(16, 24, 40)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => star.update());
    }

    init();
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Fond galaxie animé */}
      <div className="absolute inset-0 bg-black">
        <canvas id="galaxyCanvas" className="w-full h-full"></canvas>
      </div>

      {/* Contenu */}
      <div className="relative z-10 text-yellow-200 w-full h-screen flex flex-col justify-center items-center">
        <Logo />
        <h1 className="font-klein text-center mx-4 py-10 lg:text-xl">
          Bonjour et bienvenue sur mon portfolio !
        </h1>
        <Animation />
        <div className="font-klein flex flex-col pt-20 lg:flex-row">
          <a
            href="http://sacko-portfolio.fr/docs/cv.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="uppercase lg:pr-8 my-3"
          >
            Mon CV
          </a>
          <button className="uppercase lg:pl-8">Mes projets</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
