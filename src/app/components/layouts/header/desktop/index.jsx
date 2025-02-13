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
              <svg
                width="150"
                height="75"
                viewBox="0 0 600 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Import d'une police Google en ligne */}
                <style>
                  {`
            @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
          `}
                </style>

                {/* Ailes Gauche */}
                <path
                  d="M150 100 C80 70, 50 40, 60 30 C90 30, 130 70, 150 90"
                  fill="none"
                  stroke="#F2A900"
                  strokeWidth="6"
                />
                <path
                  d="M140 120 C70 90, 30 60, 40 50 C70 50, 110 90, 130 110"
                  fill="none"
                  stroke="#F2A900"
                  strokeWidth="4"
                />
                <path
                  d="M130 140 C60 110, 10 80, 20 70 C50 70, 90 110, 110 130"
                  fill="none"
                  stroke="#F2A900"
                  strokeWidth="3"
                />

                {/* Ailes Droite */}
                <path
                  d="M450 100 C520 70, 550 40, 540 30 C510 30, 470 70, 450 90"
                  fill="none"
                  stroke="#F2A900"
                  strokeWidth="6"
                />
                <path
                  d="M460 120 C530 90, 570 60, 560 50 C530 50, 490 90, 470 110"
                  fill="none"
                  stroke="#F2A900"
                  strokeWidth="4"
                />
                <path
                  d="M470 140 C540 110, 590 80, 580 70 C550 70, 510 110, 490 130"
                  fill="none"
                  stroke="#F2A900"
                  strokeWidth="3"
                />

                {/* Texte SACKO Centré */}
                <text
                  x="300"
                  y="130"
                  fontFamily="'Great Vibes', cursive"
                  fontSize="70"
                  fontWeight="bold"
                  fill="#F2A900"
                  textAnchor="middle"
                >
                  SACKO
                </text>
              </svg>
            </a>
          </div>
          <ul className="text-[#f2a900] px-4 px-4 font-klein flex flex-row uppercase">
            <li className="flex items-center gap-x-2">
              <AiFillHome />
              <a href="http://sacko-portfolio.fr" aria-label="Accueil">
                Accueil
              </a>
            </li>
            <li className="px-4 flex items-center gap-x-2">
              <RiPresentationFill />
              <AnchorLink
                href="#Présentation"
                offset={() => 100}
                aria-label="Présentation"
              >
                Présentation
              </AnchorLink>
            </li>
            <li className="px-4 flex items-center gap-x-2">
              <GiSkills />
              <AnchorLink
                href="#Compétences"
                offset={() => 100}
                aria-label="Compétences"
              >
                Compétences
              </AnchorLink>
            </li>
            <li className="px-4 flex items-center gap-x-2">
              <AiFillProject />
              <AnchorLink
                href="#Projet"
                offset={() => 100}
                aria-label="Projets"
              >
                Projets
              </AnchorLink>
            </li>
            <li className="px-4 flex items-center gap-x-2">
              <TbTimelineEventText />
              <AnchorLink
                href="#Parcours"
                offset={() => 100}
                aria-label="Parcours"
              >
                Parcours
              </AnchorLink>
            </li>
            <li className="px-4 flex items-center gap-x-2">
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
