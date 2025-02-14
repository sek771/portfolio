"use client";

import { TbFileCv } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlinePhoneIphone, MdOutlineEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";

const FooterDesktop = () => {
  return (
    <footer className="hidden lg:flex lg:flex-col w-full bg-[#1C1F26]">
      <div className="grid grid-cols-3">
        <div className="flex flex-col items-center justify-center pt-8">
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
          <p className="font-aileron">Made by Sekou</p>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center justify-center pt-8">
          <ul className="font-aileron text-[#b28c2f]">
            <li>
              <p className="inline-flex">
                <MdOutlineEmail size={25} />
                <a
                  href="mailto:contact@sacko-portfolio.fr"
                  className="pl-2"
                  rel="noopener noreferrer"
                >
                  contact@sacko-portfolio.fr
                </a>
              </p>
            </li>
            <li className="py-4">
              <p className="inline-flex">
                <MdOutlinePhoneIphone size={25} />
                <a href="tel:0781664053" className="pl-2">
                  07 81 66 40 53
                </a>
              </p>
            </li>
            <li>
              <p className="inline-flex">
                <GiPositionMarker size={25} />
                <a
                  href="https://www.google.com/search?q=meaux"
                  className="pl-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meaux (77100)
                </a>
              </p>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="pt-8 flex flex-col justify-center items-center text-[#b28c2f]">
          <div>
            <p className="inline-flex">
              <FiGithub size={25} />
              <a
                href="https://github.com/sek771"
                className="pl-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
          <div className="py-4">
            <p className="inline-flex">
              <LuLinkedin size={25} />
              <a
                href="https://fr.linkedin.com/in/sekou-sacko-a93b1227a"
                className="pl-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
          <div>
            <p className="inline-flex">
              <TbFileCv size={25} />
              <a
                href="https://sacko-portfolio.fr/docs/cv.pdf"
                className="pl-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Sekou
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col items-center py-2 font-aileron">
        <p>&copy; Tous droits réservés</p>
        <p>2023 - {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default FooterDesktop;
