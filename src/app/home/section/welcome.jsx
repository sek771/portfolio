"use client";

import Animation from "@/app/components/tools/animation/welcome";

const Header = () => {
  return (
    <section>
      <div className="w-full h-screen bg-[url('https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2023-04/mtg-i1.jpg?h=d1cb525d&itok=O-COkB2i')] bg-no-repeat bg-cover bg-center">
        <div className="text-red-500 w-full h-screen flex flex-col justify-center items-center">
          <img src="logo/logo.png" alt="" width={100} height={100} />
          <h1 className="font-klein text-center mx-4 py-10">
            Bonjour et bienvenue sur mon portfolio !
          </h1>
          <Animation />
          <div className="font-klein flex flex-col pt-20">
            <button>Mon cv</button>
            <button>Mes projets</button>
          </div>
        </div>
      </div>
      {/* <div>
        <div
          className="grid justify-items-center lg:text-center uppercase py-24 lg:grid lg:justify-items-center"
          data-aos="flip-up"
        >
          <div className="text-3xl lg:text-6xl lg:text-center lg:pt-80 lg:w-5/6 mx-10 glass text-center glass w-80 py-80">
            <Animation />
          </div>
        </div>
      </div> */}
    </section>
  );
};
export default Header;
