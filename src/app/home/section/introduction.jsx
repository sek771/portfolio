"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Introduction = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="grid justify-items-center bg-gray-900 text-white"
      id="Présentation"
    >
      <div className="lg:w-4/6 text-center my-8">
        {/* Titre animé */}
        <h1
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: "#b28c2f" }}
        >
          Présentation
        </h1>

        {/* Carte de présentation */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="border border-[#b28c2f] flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition lg:grid lg:grid-cols-2"
        >
          {/* Image animée */}
          <Image
            data-aos="zoom-in"
            data-aos-delay="500"
            src="/images/img.png"
            width={250}
            height={350}
            alt="Picture of the author"
            className="my-6 lg:m-8"
            priority
            unoptimized
          />

          {/* Texte animé */}
          <div
            data-aos="fade-left"
            data-aos-delay="700"
            className="font-aileron text-xl py-6 px-4 lg:text-left"
          >
            <p>
              Bienvenue sur mon portfolio en développement web et web mobile !
            </p>
            <p>
              Passionné par la création d&apos;expériences en ligne, j&apos;ai
              acquis une expertise en HTML, CSS, JavaScript et React.
            </p>
            <p>
              Vous trouverez ici des projets variés sur lesquels j&apos;ai
              travaillé.
            </p>
            <p>
              N&apos;hésitez pas à explorer et à me contacter pour en savoir
              plus.
            </p>
            <p>Merci de votre visite !</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
