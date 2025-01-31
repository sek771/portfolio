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
    <section className="mx-4" id="parcours">
      <div className="uppercase text-center my-8 ">
        <h1 className="text-4xl neon">parcours </h1>
      </div>
      <div className="flex justify-center  ">
        <div className="glass lg:w-4/6 lg:pr-20 h-[950px]">
          <Chrono items={data} mode="VERTICAL" hideControls={true} />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
