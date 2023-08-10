"use client";

import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeaderDesktop = () => {
  return (
    <header>
      <nav className="hidden w-full lg:flex fixed top-0 z-50 flex-col bg-cyan-800">
        <div className="flex justify-center py-4">
          <a href="http://sacko-portfolio.fr">
            <img src="/logo/logo.png" alt="" width={125} height={125} />
          </a>
        </div>
        <div className="flex flex-row justify-around">
          <ul className="font-klein flex flex-row uppercase py-4">
            <li className="">
              <a href="http://sacko-portfolio.fr">Accueil</a>
            </li>
            <li className="px-8">
              <AnchorLink href="#Présentation" offset={() => 100}>
                Présentation
              </AnchorLink>
            </li>
            <li className="">
              <AnchorLink href="#Compétences" offset={() => 100}>
                Compétences
              </AnchorLink>
            </li>
            <li className="px-8">
              <AnchorLink href="#Projet" offset={() => 100}>
                Projets
              </AnchorLink>
            </li>
            <li className="">
              <AnchorLink href="#Parcours" offset={() => 100}>
                Parcours
              </AnchorLink>
            </li>
            <li className="pl-8">
              <AnchorLink href="#Contact" offset={() => 100}>
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default HeaderDesktop;
