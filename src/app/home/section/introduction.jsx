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
        className=" grid grid-cols-1 justify-items-center  bg-gray-900"
        id="Présentation"
      >
        <div className="grid justify-items-center lg:w-4/6">
          <div className="my-8">
            <h2 className="font-klein uppercase mt-5 text-center text-4xl lg:pb-24 neon">
              presentation
            </h2>
          </div>
          <div>
            <div className="flex flex-col items-center text-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition lg:grid lg:grid-cols-2">
              <div className="flex justify-center">
                <img
                  src="/images/IMG_0587.jpg"
                  width={250}
                  height={350}
                  alt="Picture of the author"
                  className="rounded-full my-6 lg:m-8"
                />
              </div>
              <div className="font-aileron text-xl py-6 px-4 lg:grid lg:justify-items-center">
                <p>
                  Bienvenue sur mon portfolio en développement web et web mobile
                  !{" "}
                </p>

                <p>
                  Je suis passionné par la création d&apos;expériences en ligne,
                </p>
                <p>
                  Au fil des mois, j&apos;ai acquis une expertise dans les
                  langages de programmation tels que HTML, CSS, JavaScript,
                  ainsi que dans les frameworks et bibliothèque tel que React.
                </p>
                <p>
                  Dans ce portfolio, vous trouverez des exemples de projets
                  variés sur lesquels j&apos;ai travaillé.
                </p>
                <p>
                  N&apos;hésitez pas à explorer les différents projets et à me
                  contacter si vous souhaitez en savoir plus sur mon parcours
                  professionnel.
                </p>
                <p>Je vous remercie de visiter mon portfolio,</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
