"use client";

import { slide as Menu } from "react-burger-menu";
import { styles } from "./styles";

const HeaderMobile = () => {
  return (
    <header className="flex lg:hidden">
      <Menu styles={styles}>
        <section className="" >
          <div className="grid grid-cols-1 py-28 text-left text-2xl ">
            <div>
              <img src="./mobile/logo/" alt="" />
            </div>
            <div className="pt-5">
              <a id="home" className="menu-item" href="#">
                Accueil
              </a>
            </div>
            <div className="pt-5">
              <a id="about" className="menu-item" href="#">
                Présentation
              </a>
            </div>
            <div className="pt-5">
              <a id="contact" className="menu-item" href="#">
                Projets
              </a>
            </div>
            <div className="pt-5">
              <a id="home" className="menu-item" href="#">
                Compétences
              </a>{" "}
            </div>
            <div className="pt-5">
              <a id="home" className="menu-item" href="#">
                Parcours
              </a>{" "}
            </div>
            <div className="pt-5">
              <a id="home" className="menu-item" href="#">
                Contract
              </a>{" "}
            </div>
            <div className="pt-5">
              <a id="home" className="menu-item" href="#">
                CV
              </a>
            </div>
          </div>
        </section>
      </Menu>
    </header>
  );
};
export default HeaderMobile;
