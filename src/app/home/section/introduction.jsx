"use client";

import Image from "next/image";
import IntroAnimation from "@/app/components/tools/animation/introduction";
import {
  LinearTextGradient,
  RadialTextGradient,
  ConicTextGradient,
} from "react-text-gradients-and-animations";

const Introduction = () => {
  return (
    <>
      <section
        className=" grid grid-cols-1 justify-items-center"
        id="Présentation"
      >
        <div className="grid justify-items-center">
          <div className="my-8">
            <h2 className="font-klein uppercase mt-5 text-center text-4xl lg:pb-24">
              <LinearTextGradient
                angle={20}
                colors={["#A67008", "#9F6409", "#993D00", "#B02909", "#A60810"]}
              >
                presentation
              </LinearTextGradient>
            </h2>
          </div>
          <div
            className="glass lg:w-1/2 lg:grid lg:grid-cols-2"
            data-aos="flip-left"
          >
            <div className="flex justify-center">
              <Image
                src="/introduction img/miles.png"
                width={150}
                height={150}
                alt="Picture of the author"
                className="rounded-full py-6 lg:p-8"
              />
            </div>
            <div className="font-aileron py-6 px-4 lg:grid lg:justify-items-center">
              <p>
                Bienvenue sur mon portfolio en développement web et web mobile !{" "}
              </p>

              <p>
                Je suis passionné par la création d&apos;expériences en ligne,
                et ce portfolio est l&apos;endroit idéal pour découvrir mes
                projets et mes compétences en développement.
              </p>
              <p>
                Au fil des mois, j&apos;ai acquis une expertise dans les
                langages de programmation tels que HTML, CSS, JavaScript, ainsi
                que dans les frameworks et bibliothèque tel que React. Mon
                objectif est de concevoir des sites web et des applications qui
                allient beauté, fonctionnalité et convivialité pour les
                utilisateurs.
              </p>
              <p>
                Dans ce portfolio, vous trouverez des exemples de projets variés
                sur lesquels j&apos;ai travaillé, allant de sites web réactifs
                et intuitifs à des applications web mobiles optimisées.
              </p>
              <p>
                N&apos;hésitez pas à explorer les différents projets et à me
                contacter si vous souhaitez en savoir plus sur mon parcours
                professionnel ou si vous avez des projets passionnants sur
                lesquels vous aimeriez que je travaille.
              </p>
              <p>Je vous remercie de visiter mon portfolio,</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
