"use client";

import { TbFileCv } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { slide as Menu } from "react-burger-menu";
import { styles } from "./styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";

const MenuNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const HideMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Menu styles={styles} isOpen={showMenu ? false : null}>
      <div className="font-aileron text-white">
        {/* Logo et attribution */}
        <div className="flex flex-col items-center pt-10 pb-10">
          <a href="http://localhost:3000">
            <svg
              width="300"
              height="150"
              viewBox="0 0 600 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Ailes Gauche */}
              <path
                d="M150 100 C80 70, 50 40, 60 30 C90 30, 130 70, 150 90"
                fill="none"
                stroke="#b28c2f"
                strokeWidth="6"
              />
              <path
                d="M140 120 C70 90, 30 60, 40 50 C70 50, 110 90, 130 110"
                fill="none"
                stroke="#b28c2f"
                strokeWidth="4"
              />
              <path
                d="M130 140 C60 110, 10 80, 20 70 C50 70, 90 110, 110 130"
                fill="none"
                stroke="#b28c2f"
                strokeWidth="3"
              />

              {/* Ailes Droite */}
              <path
                d="M450 100 C520 70, 550 40, 540 30 C510 30, 470 70, 450 90"
                fill="none"
                stroke="#b28c2f"
                strokeWidth="6"
              />
              <path
                d="M460 120 C530 90, 570 60, 560 50 C530 50, 490 90, 470 110"
                fill="none"
                stroke="#b28c2f"
                strokeWidth="4"
              />
              <path
                d="M470 140 C540 110, 590 80, 580 70 C550 70, 510 110, 490 130"
                fill="none"
                stroke="#b28c2f"
                strokeWidth="3"
              />

              {/* Texte SACKO Centré */}
              <text
                x="300"
                y="130"
                fontFamily="'Great Vibes', cursive"
                fontSize="70"
                fontWeight="bold"
                fill="#b28c2f"
                textAnchor="middle"
              >
                SACKO
              </text>
            </svg>
          </a>
          <h1 className="mt-4 text-xl text-center font-semibold">
            Seckou <span className="font-bold uppercase">Sacko</span>
          </h1>
          <h2 className="text-lg mt-2">contact@sacko-portfolio.fr</h2>
          <h2 className="text-lg">07 81 66 40 53</h2>
        </div>

        {/* Navigation */}
        <ul className="font-aileron text-lg mx-5">
          <li>
            <a
              href="http://localhost:3000"
              className="block py-2 text-center hover:text-[#b28c2f] transition duration-300"
            >
              Accueil
            </a>
          </li>
          <li className="py-2">
            <AnchorLink
              href="#introduction"
              offset={() => 100}
              onClick={() => HideMenu()}
              className="block text-center hover:text-[#b28c2f] transition duration-300"
            >
              Présentation
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#skills"
              offset={() => 100}
              onClick={() => HideMenu()}
              className="block py-2 text-center hover:text-[#b28c2f] transition duration-300"
            >
              Compétences
            </AnchorLink>
          </li>
          <li className="py-2">
            <AnchorLink
              href="#project"
              offset={() => 100}
              onClick={() => HideMenu()}
              className="block text-center hover:text-[#b28c2f] transition duration-300"
            >
              Projets
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#timeline"
              offset={() => 100}
              onClick={() => HideMenu()}
              className="block py-2 text-center hover:text-[#b28c2f] transition duration-300"
            >
              Parcours
            </AnchorLink>
          </li>
          <li className="pt-2">
            <AnchorLink
              href="#Contact"
              offset={() => 100}
              onClick={() => HideMenu()}
              className="block text-center hover:text-[#b28c2f] transition duration-300"
            >
              Contact
            </AnchorLink>
          </li>
        </ul>

        {/* Réseaux sociaux */}
        <div className="pt-6 grid grid-cols-3 gap-4">
          <div className="flex justify-center items-center">
            <a
              href="https://github.com/sek771"
              className="flex justify-center items-center hover:text-[#b28c2f] transition duration-300"
            >
              <FiGithub size={30} />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a
              href="https://fr.linkedin.com/in/sekou-sacko-a93b1227a"
              className="flex justify-center items-center hover:text-[#b28c2f] transition duration-300"
            >
              <LuLinkedin size={30} />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a
              href="sacko-portfolio/docs/cv.pdf"
              className="flex justify-center items-center hover:text-[#b28c2f] transition duration-300"
            >
              <TbFileCv size={30} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="font-aileron flex flex-col items-center pt-6">
          <p className="text-sm text-center text-[#b28c2f]">
            &copy; Tous droits réservés
          </p>
          <p className="text-sm text-center text-[#b28c2f]">
            2023 - {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </Menu>
  );
};

export default MenuNav;
