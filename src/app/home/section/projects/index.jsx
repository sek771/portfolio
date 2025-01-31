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
    <section
      className="uppercase text-center lg:grid lg:justify-items-center mx-4"
      id="Projet"
    >
      <div className="my-8">
        <h1 className="text-4xl neon">projet</h1>
      </div>
      <div className=" lg:w-4/6 lg:">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:justify-items-center">
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
