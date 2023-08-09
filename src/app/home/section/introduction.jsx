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
            className="glass lg: lg:w-3/5 grid grid-cols-1 justify-items-center"
            data-aos="flip-left"
          >
            <div>
              <Image
                src="/introduction img/miles.png"
                width={150}
                height={150}
                alt="Picture of the author"
                className="rounded-full py-6 lg:pt-24"
              />
            </div>
            <div className="font-aileron py-6 px-4 lg:grid lg:justify-items-center">
              <p>
                Bonjour, je suis SEKOU SACKO, bienvenue sur mon portfolio en
                développement web et web mobile ! Découvrez mes projets et
                compétences en création de sites web. Passionné par la
                construction de sites beaux, fonctionnels et responsive.
                N'hésitez pas à explorer mes projets et à me contacter pour
                discuter de vos idées et projets passionnants.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
