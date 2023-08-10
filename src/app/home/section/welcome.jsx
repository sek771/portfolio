"use client";

import Animation from "@/app/components/tools/animation/welcome";

const Header = () => {
  return (
    <section>
      <div className="mt-20 w-full h-screen bg-[url('https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2023-04/mtg-i1.jpg?h=d1cb525d&itok=O-COkB2i')] bg-no-repeat bg-cover bg-center">
        <div className="text-red-500 w-full h-screen flex flex-col justify-center items-center">
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
              className="uppercase lg:pr-8"
            >
              Mon cv
            </a>
            <button className="uppercase lg:pl-8">Mes projets</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
