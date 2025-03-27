"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Chrono } from "react-chrono";
import { data } from "./data";

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="text-center bg-gray-900" id="parcours">
      {/* Titre animé */}
      <h1
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold mb-12"
        style={{ color: "#b28c2f" }}
      >
        Parcours
      </h1>

      <div className="flex justify-center">
        <div
          data-aos="fade-right"
          className="border border-[#b28c2f] lg:w-4/6 lg:pr-20 p-6 rounded-lg shadow-lg bg-gray-800 border border-gray-700"
        >
          <Chrono
            items={data}
            mode="VERTICAL_ALTERNATING"
            hideControls
            theme={{
              primary: "#00bcd4",
              secondary: "#ff4081",
              cardBgColor: "#F2C164",
              titleColor: "#fff",
              titleColorActive: "#00bcd4",
              cardForeColor: "#e2e8f0",
            }}
            cardWidth={300}
            cardHeight={150}
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
