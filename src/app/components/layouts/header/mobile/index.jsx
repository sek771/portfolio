"use client";

import { slide as Menu } from "react-burger-menu";
import { styles } from "./styles";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeaderMobile = () => {
  return (
    <header className="lg:hidden ">
      <div>
        <Menu styles={styles}>
          <section>
            <div className="grid grid-cols-1 py-28 text-left text-2xl ">
              <div>
                <AnchorLink href="#Présentation" className="mx-5 my-10">
                  Présentation
                </AnchorLink>
              </div>
              <div>
                <AnchorLink href="#Compétences" className="mx-5 my-10">
                  Compétences
                </AnchorLink>
              </div>
              <div>
                <AnchorLink href="#Projet" className="mx-5 my-10">
                  Projet
                </AnchorLink>
              </div>
              <div>
                <AnchorLink href="#Parcours" className="mx-5 my-10">
                  Parcours
                </AnchorLink>
              </div>
              <div>
                <AnchorLink href="#Contact" className="mx-5 my-10">
                  Contact
                </AnchorLink>
              </div>
            </div>
          </section>
        </Menu>
      </div>
    </header>
  );
};
export default HeaderMobile;
