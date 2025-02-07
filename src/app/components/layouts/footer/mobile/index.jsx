import { TbFileCv } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
const FooterMobile = () => {
  return (
    <footer className="w-full bg-[#1C1F26] lg:hidden">
      <hr />
      <div className="grid grid-cols-3 py-4">
        <a
          href="https://github.com/sek771"
          className="flex justify-center items-center"
        >
          <FiGithub size={25} />
        </a>
        <a
          href="https://fr.linkedin.com/in/sekou-sacko-a93b1227a"
          className="flex justify-center items-center"
        >
          <LuLinkedin size={25} />
        </a>
        <a
          href="sacko-portfolio/docs/cv.pdf"
          className="flex justify-center items-center"
        >
          <TbFileCv size={25} />
        </a>
      </div>
      <hr />
      <div className="flex flex-col items-center py-4">
        <p>&copy; Tous droits réservés</p>
        <p>2023 - {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};
export default FooterMobile;
