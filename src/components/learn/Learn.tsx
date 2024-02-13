import React from "react";
import Arrow from '../../assets/images/learnArrow/IconRight.svg';

const Learn: React.FC = () => {
  return (
    <div className="bg-slate-100 py-3">
      <a
        href="/"
        className="flex items-center justify-center text-center"
      >
        <p className="text-#4D4751 font-sans text-base font-normal leading-relaxed sm:text-lg ">
          <span className="text-blue-500 font-arial text-base leading-normal underline sm:text-lg ">
            Learn more
          </span>
          <span className="ml-1">
            about how Purina and Petfinder are making a difference together.
          </span>
        </p>
        {/* <RiArrowDropRightLine className="text-3xl ml-1" /> */}
        <img src={Arrow} alt="" className="w-6 h-6 ml"/>
      </a>
    </div>
  );
};

export default Learn;
