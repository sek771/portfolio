"use client";

import Cardskills from "@/app/components/tools/cardskills";
import data from "./data.json";
const Skills = () => {
  return (
    <section className="px-5 " id="Compétences">
      <div className="py-16">
        <h2 className="uppercase pt-10 mx-10 text-4xl text-center">
          competences
        </h2>
      </div>
      <div
        className="lg:grid lg:grid-cols-3 grid grid-cols-2 justify-items-center py-5"
 
      >
        {data.map((jutsu) => {
          return <Cardskills key={jutsu.id} img={jutsu.img} p={jutsu.p} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
