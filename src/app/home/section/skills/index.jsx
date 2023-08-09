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
    <section className="px-5 " id="Compétences">
      <div className="my-8">
        <h2 className="uppercase pt-10 text-4xl text-center">
          <LinearTextGradient
            angle={20}
            colors={["#A67008", "#9F6409", "#993D00", "#B02909", "#A60810"]}
          >
            competences
          </LinearTextGradient>
        </h2>
      </div>
      <div className="grid grid-cols-2 justify-items-center py-5 lg:grid lg:grid-cols-3">
        {data.map((jutsu) => {
          return (
            <div key={jutsu.id} className="m-4">
              <Cardskills key={jutsu.id} img={jutsu.img} p={jutsu.p} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
