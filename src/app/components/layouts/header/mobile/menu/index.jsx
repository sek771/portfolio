"use client";

import { TbFileCv } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu"
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
            <img src="/logo/logo.png" alt="" width={150} height={150} />
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
