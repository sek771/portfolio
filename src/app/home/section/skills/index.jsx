"use client";

import {
  LinearTextGradient,
  RadialTextGradient,
  ConicTextGradient,
} from "react-text-gradients-and-animations";
import Cardskills from "@/app/components/tools/cardskills";
import data from "./data.json";
const Skills = () => {
  return (
    <section className="" id="Compétences">
      <div className="my-8">
        <h2 className="uppercase pt-10 text-4xl text-center neon">
          competences
        </h2>
      </div>
      <div className=" lg:flex lg:justify-center">
        <div className="lg:w-4/6 grid grid-cols-2 lg:grid lg:grid-cols-3 ">
          {data.map((jutsu) => {
            return (
              <div key={jutsu.id} className="m-7">
                <Cardskills key={jutsu.id} img={jutsu.img} p={jutsu.p} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
