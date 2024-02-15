"use client";

import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AiFillHome } from "react-icons/ai";
import { RiPresentationFill } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { TbTimelineEventText } from "react-icons/tb";
import { BiSolidContact } from "react-icons/bi";
const HeaderDesktop = () => {
  return (
    <header>
      <nav className="hidden w-full lg:flex fixed top-0 z-50 flex-col bg-cyan-800">
        <div className="flex flex-row justify-around">
          <div className="">
            <a href="http://sacko-portfolio.fr">
              <img src="/logo/logo.png" alt="logo sacko portfolio" width={125} height={125} />
            </a>
          </div>
          <ul className="font-klein flex flex-row uppercase py-4">
            <li className="px-14 flex items-center  ">
              <AiFillHome className="ml-2" />
              <a href="http://sacko-portfolio.fr">Accueil</a>
            </li>
            <li className="px-14 flex items-center">
              <RiPresentationFill className="ml-2" />
              <AnchorLink href="#Présentation" offset={() => 100}>
                Présentation
              </AnchorLink>
            </li>
            <li className="px-14 flex items-center">
              <GiSkills />
              <AnchorLink href="#Compétences" offset={() => 100}>
                Compétences
              </AnchorLink>
            </li>
            <li className="px-14 flex items-center">
              <AiFillProject />
              <AnchorLink href="#Projet" offset={() => 100}>
                Projets
              </AnchorLink>
            </li>
            <li className="px-14 flex items-center">
              <TbTimelineEventText />
              <AnchorLink href="#Parcours" offset={() => 100}>
                Parcours
              </AnchorLink>
            </li>
            <li className="px-14 flex items-center">
              <BiSolidContact />
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
