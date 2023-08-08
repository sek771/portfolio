"use client";

import Animation from "@/app/components/tools/animation/welcome";

const Header = () => {
  return (
    <section>
      <div>
        <div
          className="grid justify-items-center lg:text-center uppercase py-24 lg:grid lg:justify-items-center"
          data-aos="flip-up"
        >
          <div className="text-3xl lg:text-6xl lg:text-center lg:pt-80 lg:w-5/6 mx-10 glass text-center glass w-80 py-80">
            <Animation />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
