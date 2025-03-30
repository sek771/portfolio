import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const handleClick = (e, id) => {
  e.preventDefault();
  const target = document.getElementById(id);

  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error(`L'élément avec l'ID "${id}" est introuvable.`);
  }
};

const SsDesktop = () => (
  <div>
    <a href="#introduction" onClick={(e) => handleClick(e, "introduction")}>
      Présentation
    </a>
    <a href="#skills" onClick={(e) => handleClick(e, "skills")}>
      Compétences
    </a>
    <a href="#projects" onClick={(e) => handleClick(e, "projects")}>
      Projets
    </a>
    <a href="#timeline" onClick={(e) => handleClick(e, "timeline")}>
      Parcours
    </a>
    <a href="#contact" onClick={(e) => handleClick(e, "contact")}>
      Contact
    </a>

    <section id="introduction">
      <h2>Présentation</h2>
    </section>
    <section id="skills">
      <h2>Compétences</h2>
    </section>
    <section id="projects">
      <h2>Projets</h2>
    </section>
    <section id="timeline">
      <h2>Parcours</h2>
    </section>
    <section id="contact">
      <h2>Contact</h2>
    </section>
  </div>
);

export default SsDesktop;
