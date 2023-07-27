"use client";

import Card from "@/app/components/tools/card";
import data from "./data.json";

const Projects = () => {
  return (
    <section className="uppercase text-center px-5">
      <div>
        <h1 className="text-4xl pt-10 pb-5">projet</h1>
      </div>
      <div>
        <div className=" grid grid-cols-2 pt-5 w-full bg-gray-600 lg:flex lg:justify-center">
          {data.map((element) => {
            return (
              <Card
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
