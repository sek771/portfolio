"use client";

import {
  LinearTextGradient,
  RadialTextGradient,
  ConicTextGradient,
} from "react-text-gradients-and-animations";
import { Chrono } from "react-chrono";
import { data } from "./data";

const Timeline = () => {
  return (
    <section className="" id="parcours">
      <div className="uppercase text-center my-8 glass-titles">
        <h1 className="text-4xl">
          <LinearTextGradient
            angle={20}
            colors={["#A67008", "#9F6409", "#993D00", "#B02909", "#A60810"]}
          >
            parcours{" "}
          </LinearTextGradient>
        </h1>
      </div>
      <div className="flex justify-center lg:pr-40 lg:pl-40">
        <div className="glass w-3/4 lg:py-8 lg:pr-20 h-[950px]">
          <Chrono
            items={data}
            mode="VERTICAL"
            hideControls={true}
          />
        </div>
      </div>
      {/* <div className="pt-5 grid grid-cols-1 justify-items-center glass">
        <div className="mx-3" data-aos="filp-right">
          <li className="py-5 text-2xl">
            <LinearTextGradient angle={50} colors={["#114E99", "#F23713"]}>
              J&apos;ai obtenu mon brevet des colléges.
            </LinearTextGradient>
          </li>
          <li className="py-5 text-2xl">
            <LinearTextGradient angle={50} colors={["#992405", "#04996D"]}>
              J&apos;ai participé a un atelier d&apos;une semaine sur le
              développement web intitulé &quot;Digi&apos;code.&#34;
            </LinearTextGradient>
          </li>
          <li className="py-5 text-2xl">
            <LinearTextGradient angle={50} colors={["#419899", "#FFA36B"]}>
              J&apos;ai suivi une formation en développement web et web mobile,
              me permettant d&apos;obtenir une équivalence bac+2 en back-end et
              front-end.
            </LinearTextGradient>
          </li>
        </div>
      </div> */}
    </section>
  );
};

export default Timeline;
