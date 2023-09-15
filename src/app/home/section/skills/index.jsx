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
    <section className=" overflow-x-hidden" id="Compétences">
      <div className="my-8">
        <h2 className="uppercase pt-10 text-4xl text-center neon">
          competences
        </h2>
      </div>

      <div className="mx-2  lg:mx-56 grid grid-cols-2 lg:grid lg:grid-cols-4 justify-center items-center">
        {data.map((jutsu) => {
          return (
            <div
              key={jutsu.id}
              className=" my-8 flex items-center justify-center"
            >
              <Cardskills
                className=" flex items-center justify-center"
                key={jutsu.id}
                img={jutsu.img}
                p={jutsu.p}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
