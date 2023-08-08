"use client";

import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeaderDesktop = () => {
  return (
    <header>
      <div className="hidden lg:list-none lg:flex lg:items-center lg:justify-center lg:mb-5 lg:w-full lg:h-12 bg-cyan-800">
        
          <AnchorLink href="#Présentation" className="mx-5 my-10">
            Présentation
          </AnchorLink>
          <AnchorLink href="#Compétences" className="mx-5 my-10">
            Compétences
          </AnchorLink>
          <AnchorLink href="#Projet" className="mx-5 my-10">
            Projet
          </AnchorLink>
          <AnchorLink href="#Parcours" className="mx-5 my-10">
            Parcours
          </AnchorLink>
          <AnchorLink href="#Contact" className="mx-5 my-10">
            Contact
          </AnchorLink>
        
      </div>
    </header>
  );
};
export default HeaderDesktop;