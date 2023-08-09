import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { BsFileArrowUp } from "react-icons/bs";

const Scroll = () => {
  return (
    <div className="Scroll">
      <ScrollToTop
        smooth
        component={
          <div className="w-full h-full flex justify-center items-center hover:bg-blue-300 hover:text-red-500">
            <BsFileArrowUp size={25} />
          </div>
        }
      />
    </div>
  );
};

export default Scroll;
