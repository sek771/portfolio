"use client";

import { TbFileCv } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu"
import { MdOutlinePhoneIphone } from "react-icons/md"
import { MdOutlineEmail } from "react-icons/md"
import { GiPositionMarker } from "react-icons/gi"


const FooterDesktop = () => {
  return (
    <footer className="hidden lg:flex lg:flex-col w-full bg-cyan-800">
      <div className="grid grid-cols-3">
        <div className="flex flex-col items-center justify-center pt-8">
          <a href="http://sacko-portfolio.fr/">
          
            <img src="/logo/logo.png" alt="" width={200} height={200} />
          </a>
          <p className="font-aileron">Made by Sekou </p>
        </div>
        <div className="flex flex-col items-center justify-center pt-8">
          <ul className="font-aileron">
            <li>
              <p className="inline-flex">
                <MdOutlineEmail size={25} />
                <a href="mailto:contact@sacko-portfolio.fr" className="pl-2">
                  contact@sacko-portfolio.fr
                </a>
              </p>
            </li>
            <li className="py-4">
              <p className="inline-flex">
                <MdOutlinePhoneIphone size={25} />
                <a href="tel:07 81 66 40 53" className="pl-2">
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
                >
                  Meaux (77100)
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="pt-8 flex flex-col justify-center items-center">
          <div className="">
            <p className="inline-flex">
              <FiGithub size={25} />
              <a href="https://github.com/sek771" className="pl-2">
                github
              </a>
            </p>
          </div>
          <div className="py-4">
            <p className="inline-flex">
              <LuLinkedin size={25} />
              <a href="https://fr.linkedin.com/in/sekou-sacko-a93b1227a" className="pl-2">
                linkedin
              </a>
            </p>
          </div>
          <div className="">
            <p className="inline-flex">
              <TbFileCv size={25} />
              <a href="https://sacko-portfolio.fr/docs/cv.pdf" className="pl-2">
                @Sekou
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-2 font-aileron">
        <p>&copy; Tous droits réservés</p>
        <p>2023 - {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};
export default FooterDesktop;
