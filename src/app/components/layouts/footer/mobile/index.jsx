import { TbFileCv } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";

const FooterMobile = () => {
  return (
    <footer className="w-full bg-[#1C1F26] lg:hidden py-6">
      {/* Ligne de séparation */}
      <hr className="border-[#b28c2f] mb-6" />

      {/* Icônes de réseaux sociaux */}
      <div className="flex justify-around items-center mb-6">
        <a
          href="https://github.com/sek771"
          className="text-[#b28c2f] hover:text-white transition-colors duration-300"
        >
          <FiGithub size={30} />
        </a>
        <a
          href="https://fr.linkedin.com/in/sekou-sacko-a93b1227a"
          className="text-[#b28c2f] hover:text-white transition-colors duration-300"
        >
          <LuLinkedin size={30} />
        </a>
        <a
          href="sacko-portfolio/docs/cv.pdf"
          className="text-[#b28c2f] hover:text-white transition-colors duration-300"
        >
          <TbFileCv size={30} />
        </a>
      </div>

      {/* Copyright */}
      <hr className="border-[#b28c2f] mb-6" />
      <div className="text-center text-[#b28c2f]">
        <p>&copy; {new Date().getFullYear()} Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default FooterMobile;
