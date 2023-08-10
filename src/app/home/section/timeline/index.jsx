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
    </section>
  );
};

export default Timeline;
