import { FC } from "react";
import { Link } from "react-router-dom";


interface PropType{
    src:string;
    alt?:string;
    srcMini:string;
    altMini?:string;
    title:string;
    disc:string;
}

const PetBlogCard:FC<PropType> = (props) => {
  return (
        <div className="flex flex-col mx-2.5 items-center hover:shadow-lg mb-4 rounded-2xl">
          <img
            className="w-full sm:w-[600px] rounded-t-md bg-black h-[260px] relative"
            src={props.src}
            alt={props.alt}
          />
          <img
            className="rounded-[50px] z-20 top-[-44px] border-4 border-white w-[88px] h-[88px] relative"
            src={props.srcMini} alt={props.altMini}
          />
          <div className="w-full sm:w-[600px] top-[-105px] h-[18px] relative bg-white rounded-tl-[157px] rounded-tr-[157px]"></div>

          <div className=" h-[26px] mt-[-36px] text-center text-neutral-600 text-xl leading-normal">
            {props.title}
          </div>
          <div className=" h-5 text-center pb-[42px] pt-[34px] text-neutral-600 text-base leading-snug">
            {props.disc}
          </div>
          <Link
            to={"/"}
            className="h-[18px] my-5 text-center text-violet-800 text-sm uppercase leading-tight"
          >
            Read More
          </Link>
        </div>
  )
}


export default PetBlogCard