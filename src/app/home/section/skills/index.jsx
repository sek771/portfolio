"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "🚀" },
    { name: "Node.js", icon: "🌳" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Git", icon: "🔧" },
  ];

  return (
    <section id="skills" className="bg-gray-900 text-white py-16 text-center">
      {/* Titre animé */}
      <h1
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-extrabold mb-12 text-[#b28c2f]"
      >
        Compétences
      </h1>

      <div className="grid justify-items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-4">
          {skills.map(({ name, icon }, index) => (
            <div
              key={name}
              data-aos="zoom-in"
              data-aos-delay={index * 100} // Décalage progressif des animations
              className="border border-[#b28c2f] p-6 bg-gray-800 rounded-lg shadow-2xl hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <div className="text-4xl mb-6 flex justify-center">{icon}</div>
              <h3 className="text-xl font-semibold text-[#b28c2f]">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
