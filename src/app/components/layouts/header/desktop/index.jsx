"use client";

import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "@/app/components/tools/logo";
import { AiFillHome } from "react-icons/ai";
import { RiPresentationFill } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { TbTimelineEventText } from "react-icons/tb";
import { BiSolidContact } from "react-icons/bi";

const HeaderDesktop = () => {
  return (
    <header>
      <nav className="hidden w-full lg:flex fixed top-0 z-50 flex-col bg-[#1C1F26]">
        <div className="flex flex-row justify-around items-center py-4">
          <div>
            <a
              href="http://sacko-portfolio.fr"
              aria-label="Accueil - Sacko Portfolio"
            >
              <Logo width={125} height={125} />
            </a>
          </div>
          <ul className="font-klein flex flex-row uppercase">
            <li className="px-14 flex items-center gap-x-2">
              <AiFillHome />
              <a href="http://sacko-portfolio.fr" aria-label="Accueil">
                Accueil
              </a>
            </li>
            <li className="px-14 flex items-center gap-x-2">
              <RiPresentationFill />
              <AnchorLink
                href="#Présentation"
                offset={() => 100}
                aria-label="Présentation"
              >
                Présentation
              </AnchorLink>
            </li>
            <li className="px-14 flex items-center gap-x-2">
              <GiSkills />
              <AnchorLink
                href="#Compétences"
                offset={() => 100}
                aria-label="Compétences"
              >
                Compétences
              </AnchorLink>
            </li>
            <li className="px-14 flex items-center gap-x-2">
              <AiFillProject />
              <AnchorLink
                href="#Projet"
                offset={() => 100}
                aria-label="Projets"
              >
                Projets
              </AnchorLink>
            </li>
            <li className="px-14 flex items-center gap-x-2">
              <TbTimelineEventText />
              <AnchorLink
                href="#Parcours"
                offset={() => 100}
                aria-label="Parcours"
              >
                Parcours
              </AnchorLink>
            </li>
            <li className="px-14 flex items-center gap-x-2">
              <BiSolidContact />
              <AnchorLink
                href="#Contact"
                offset={() => 100}
                aria-label="Contact"
              >
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
