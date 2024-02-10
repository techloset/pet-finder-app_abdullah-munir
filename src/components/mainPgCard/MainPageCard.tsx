import { FC } from "react";
import Button from "../button/Button"

interface PropsType{
    src:string;
    title:string;
    alt?: string;
    disc:string;
}

const card:FC<PropsType> = (props) => {
  return (
    <div className="text-center mx-[20.3px] my-2 md:my-0">
      <img
        className="mx-auto h-[100px] w-[100px] mb-[23px]"
        src={props.src}
        alt="..."
      />
      <div className=" h-[26px] mb-[31px] text-center text-violet-800 text-xl font-normal uppercase leading-loose">
        {props.title}
      </div>
      <div className="max-w-[371.39px] mb-[33px] h-[45px] text-center text-neutral-600 leading-[25px]">
        {props.disc}
      </div>
      <Button />
    </div>
  );
};

export default card;
