// import React, { useEffect, useRef } from "react";

// const StarCanvas = () => {
//   const canvasRef = useRef(null);
//   const animationFrameRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       init();
//     };

//     const numStars = 200;
//     let stars = [];
//     let planets = [];
//     let shootingStars = [];

//     class Star {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.radius = Math.random() * 1.5;
//         this.dx = (Math.random() - 0.5) * 0.3;
//         this.dy = (Math.random() - 0.5) * 0.3;
//         this.opacity = Math.random();
//         this.twinkleSpeed = Math.random() * 0.02;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
//         ctx.fill();
//       }

//       update() {
//         this.opacity += this.twinkleSpeed * (Math.random() > 0.5 ? 1 : -1);
//         this.opacity = Math.min(1, Math.max(0.3, this.opacity));
//         this.x += this.dx;
//         this.y += this.dy;
//         if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
//         this.draw();
//       }
//     }

//     class Planet {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.radius = Math.random() * 40 + 20;
//         this.color = `hsl(${Math.random() * 360}, 80%, 60%)`;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fillStyle = this.color;
//         ctx.shadowBlur = 20;
//         ctx.shadowColor = this.color;
//         ctx.fill();
//         ctx.shadowBlur = 0;
//       }
//     }

//     class ShootingStar {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = (Math.random() * canvas.height) / 2;
//         this.length = Math.random() * 80 + 30;
//         this.speed = Math.random() * 10 + 5;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.moveTo(this.x, this.y);
//         ctx.lineTo(this.x - this.length, this.y + this.length);
//         ctx.strokeStyle = "white";
//         ctx.lineWidth = 2;
//         ctx.stroke();
//       }

//       update() {
//         this.x += this.speed;
//         this.y += this.speed;
//         if (this.x > canvas.width || this.y > canvas.height) {
//           this.x = Math.random() * canvas.width;
//           this.y = (Math.random() * canvas.height) / 2;
//         }
//         this.draw();
//       }
//     }

//     const init = () => {
//       stars = Array.from({ length: numStars }, () => new Star());
//       planets = Array.from({ length: 5 }, () => new Planet());
//       shootingStars = Array.from({ length: 3 }, () => new ShootingStar());
//     };

//     const animate = () => {
//       ctx.fillStyle = "rgba(10, 10, 35, 0.9)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
//       gradient.addColorStop(0, "#0a0a23");
//       gradient.addColorStop(0.5, "#1b2957");
//       gradient.addColorStop(1, "#0a0a23");
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       stars.forEach((star) => star.update());
//       planets.forEach((planet) => planet.draw());
//       shootingStars.forEach((s) => s.update());

//       animationFrameRef.current = requestAnimationFrame(animate);
//     };

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     init();
//     animate();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="w-full h-full" />;
// };

// export default StarCanvas;
