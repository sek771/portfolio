"use client";

import React from "react";
import Animation from "@/app/components/tools/animation/welcome";
import { TbFileCv } from "react-icons/tb";

const Header = () => {
  return (
    <section >
      <div className=" w-full h-screen bg-[url('/galaxy.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="text-yellow-200 w-full h-screen flex flex-col justify-center items-center">
          <img src="logo/logo.png" alt="" width={150} height={150} />
          <h1 className="font-klein text-center mx-4 py-10 lg:text-xl">
            Bonjour et bienvenue sur mon portfolio !
          </h1>
          <Animation />
          <div className="font-klein flex flex-col pt-20 lg:flex-row">
            <a
              href="http://sacko-portfolio.fr/docs/cv.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="uppercase lg:pr-8 my-3"
            >
              mon cv
            </a>

            <button className="uppercase lg:pl-8">Mes projets</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
