"use client";

import { TbFileCv } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { slide as Menu } from "react-burger-menu";
import { styles } from "./styles";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { SiFacebook } from "react-icons/si";
import { useState } from "react";

const MenuNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const HideMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Menu styles={styles} isOpen={showMenu === true ? false : null}>
      <div className="">
        <div className="font-aileron flex flex-col items-center pt-10 pb-20">
          <a href="http://localhost:3000">
            <svg
              width="300"
              height="150"
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
          <h1>
            Seckou <span className="font-bold uppercase">Sacko</span>
          </h1>
          <h2>contact@sacko-portfolio.fr</h2>
          <h2>07 81 66 40 53</h2>
        </div>
        <ul className="font-aileron mx-5">
          <li className="">
            <a href="http://localhost:3000">Accueil</a>
          </li>
          <li className="py-2">
            <AnchorLink
              href="#Présentation"
              offset={() => 100}
              onClick={() => HideMenu()}
            >
              Présentation
            </AnchorLink>
          </li>
          <li className="">
            <AnchorLink
              href="#Compétences"
              offset={() => 100}
              onClick={() => HideMenu()}
            >
              Compétences
            </AnchorLink>
          </li>
          <li className="py-2">
            <AnchorLink
              href="#Projet"
              offset={() => 100}
              onClick={() => HideMenu()}
            >
              Projets
            </AnchorLink>
          </li>
          <li className="">
            <AnchorLink
              href="#Parcours"
              offset={() => 100}
              onClick={() => HideMenu()}
            >
              Parcours
            </AnchorLink>
          </li>
          <li className="pt-2">
            <AnchorLink
              href="#Contact"
              offset={() => 100}
              onClick={() => HideMenu()}
            >
              Contact
            </AnchorLink>
          </li>
        </ul>
        <div className="pt-52 grid grid-cols-3">
          <div className="flex justify-center items-center">
            <a
              href="https://github.com/sek771"
              className="flex justify-center items-center"
            >
              <FiGithub size={25} />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a
              href="https://fr.linkedin.com/in/sekou-sacko-a93b1227a"
              className="flex justify-center items-center"
            >
              <LuLinkedin size={25} />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a
              href="sacko-portfolio/docs/cv.pdf"
              className="flex justify-center items-center"
            >
              <TbFileCv size={25} />
            </a>
          </div>
        </div>
        <div className="font-aileron flex flex-col items-center pt-4">
          <p>&copy; Tous droits réservés</p>
          <p>2023 - {new Date().getFullYear()}</p>
        </div>
      </div>
    </Menu>
  );
};

export default MenuNav;
