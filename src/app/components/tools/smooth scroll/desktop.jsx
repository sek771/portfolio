import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const SsDesktop = () => (
  <div>
    <AnchorLink href="#introduction">Présentation</AnchorLink>
    <AnchorLink href="#skills">Compétences</AnchorLink>
    <AnchorLink href="#projects">Projets</AnchorLink>
    <AnchorLink href="#timeline">Parcours</AnchorLink>
    <AnchorLink href="#contact">Contact</AnchorLink>
    <section id="introduction">
      <h2>Présentation</h2>
    </section>
    <section id="skills">
      <h2>Compétences</h2>
    </section>
    <section id="Project">
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
