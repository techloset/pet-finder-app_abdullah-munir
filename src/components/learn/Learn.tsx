import React from "react";
import Arrow from "../../assets/images/learnArrow/IconRight.svg";

const Learn: React.FC = () => {
  return (
    <div className="bg-slate-100 py-3">
      <a href="/" className="flex items-center justify-end text-center">
        <p className="text-#4D4751 font-sans text-base font-normal leading-relaxed sm:text-md">
          <span className="text-[#6504b5] font-arial text-base leading-normal underline sm:text-md">
            Learn more
          </span>
          <span className="ml-1">
            about how Purina and Petfinder are making a difference together.
          </span>
        </p>
        <img src={Arrow} alt="" className="size-6 ml" />
      </a>
    </div>
  );
};

export default Learn;
