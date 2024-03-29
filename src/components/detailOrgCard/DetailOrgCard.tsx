import { Link } from "react-router-dom";
import { FC } from "react";

import DefaultImg from "../../assets/images/default/Default.svg";

interface cardTypes {
  id: number;
  src: string;
  alt?: string;
  name: string;
  disc?: string;
}

const OrgCard: FC<cardTypes> = (props) => {
  return (
    <Link to={`/detail/${props.id}`}>
      <div className="w-auto mx-2 h-[500px] mb-4 cursor-pointer  bg-white rounded-xl hover:shadow-2xl">
        <div className="w-[270] sm:w-[393.33px] h-[281.66px] mt-6 bg-opacity-0">
          <img
            className="w-full h-[281.66px] rounded-tl-lg rounded-tr-lg object-cover"
            src={props.src || DefaultImg}
            alt={props.alt}
          />
          <div className="h-[250px]  ">
            <div>
              <div className="h-[20px] text-[#6605b5] text-xl">
                {props.name.slice(0, 10)}
              </div>

              <div className="h-[160px] mt-3">
                <div className="text-black mx-7">
                  {props.disc?.slice(0, 88)}...
                </div>
              </div>
              <div className="h-[30px]">
                <button className="text-black w-full border-t-[0.5px] border-[#dcdbdd] bg-white pt-2 pb-3 hover:bg-black hover:text-white rounded-b-xl">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrgCard;
