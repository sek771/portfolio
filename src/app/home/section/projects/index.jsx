"use client";

import Card from "@/app/components/tools/card";
import data from "./data.json";
import {
  LinearTextGradient,
  RadialTextGradient,
  ConicTextGradient,
} from "react-text-gradients-and-animations";

const Projects = () => {
  return (
    <section className="uppercase text-center px-5" id="Projet">
      <div>
        <h1 className="text-4xl pt-10 pb-5">
          {" "}
          <LinearTextGradient
            angle={20}
            colors={["#A67008", "#9F6409", "#993D00", "#B02909", "#A60810"]}
          >
            projet
          </LinearTextGradient>
        </h1>
      </div>
      <div>
        <div className="lg:grid lg:grid-cols-2 lg:justify-items-center grid grid-cols-1 py-6">
          {data.map((element) => {
            return (
              <Card
                key={element.id}
                title={element.title}
                img={element.img}
                onClick={() => alert(element.title)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
