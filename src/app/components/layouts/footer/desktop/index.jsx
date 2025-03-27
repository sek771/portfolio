"use client";

import { TbFileCv } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlinePhoneIphone, MdOutlineEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";

const FooterDesktop = () => {
  return (
    <footer className="hidden lg:flex flex-col w-full bg-[#1C1F26] text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-12 px-6">
        {/* Logo et attribution */}
        <div className="flex flex-col items-center justify-center">
          <a href="http://sacko-portfolio.fr/" rel="noopener noreferrer">
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
          <p className="font-aileron text-center mt-2">Made by Sekou</p>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center justify-center">
          <ul className="font-aileron text-[#b28c2f] space-y-6">
            <li className="flex items-center">
              <MdOutlineEmail size={30} />
              <a
                href="mailto:contact@sacko-portfolio.fr"
                className="pl-4 text-lg hover:text-white transition duration-300"
                rel="noopener noreferrer"
              >
                contact@sacko-portfolio.fr
              </a>
            </li>
            <li className="flex items-center">
              <MdOutlinePhoneIphone size={30} />
              <a
                href="tel:0781664053"
                className="pl-4 text-lg hover:text-white transition duration-300"
              >
                07 81 66 40 53
              </a>
            </li>
            <li className="flex items-center">
              <GiPositionMarker size={30} />
              <a
                href="https://www.google.com/search?q=meaux"
                className="pl-4 text-lg hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meaux (77100)
              </a>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-col justify-center items-center text-[#b28c2f] space-y-6">
          <div className="flex items-center space-x-4">
            <FiGithub size={30} />
            <a
              href="https://github.com/sek771"
              className="text-lg hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <LuLinkedin size={30} />
            <a
              href="https://fr.linkedin.com/in/sekou-sacko-a93b1227a"
              className="text-lg hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <TbFileCv size={30} />
            <a
              href="https://sacko-portfolio.fr/docs/cv.pdf"
              className="text-lg hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV @Sekou
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col items-center py-4 font-aileron bg-[#1C1F26] border-t border-[#b28c2f]">
        <p className="text-[#b28c2f] text-sm">&copy; Tous droits réservés</p>
        <p className="text-[#b28c2f] text-sm">
          2023 - {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default FooterDesktop;
