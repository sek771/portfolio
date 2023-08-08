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
          <div>
              <h2 className="uppercase mt-5 text-center text-4xl lg:pb-24">
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
                width={250}
                height={150}
                alt="Picture of the author"
                className="py-5 lg:pt-24 mb-10"
              />
            </div>

            <div className="lg:grid lg:justify-items-center">
              <div>
                <IntroAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
