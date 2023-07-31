"use client";

import Card from "@/app/components/tools/card";
import data from "./data.json";

const Projects = () => {
  return (
    <section className="uppercase text-center px-5  ">
      <div>
        <h1 className="text-4xl pt-10 pb-5">projet</h1>
      </div>
      <div>
        <div className="lg:grid lg:grid-cols-4 lg:justify-items-center grid grid-cols-2 justify-items-center px-6 bg-gray-600">
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
