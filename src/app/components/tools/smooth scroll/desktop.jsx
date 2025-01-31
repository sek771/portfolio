import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const SsDesktop = () => (
  <div>
    <AnchorLink href="#Présentation">Présentation</AnchorLink>
    <AnchorLink href="#Compétences">Compétences</AnchorLink>

    <section id="Présentation">
      <h2>Présentation</h2>
    </section>
    <section id="Compétences">
      <h2>Compétences</h2>
    </section>
  </div>
);

export default SsDesktop;
