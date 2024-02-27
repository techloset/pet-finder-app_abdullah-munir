import { FC } from "react";
interface PropsType {
  src: string;
  text: string;
  title: string;
  className?: string;
}

const heroCard: FC<PropsType> = (props) => {
  return (
    <>
      <div className="mx-2 mt-[23px]">
        <div className="w-[181px] h-[154.59px] px-[51px] pt-[17px] pb-[20.59px] bg-white rounded-[10px] shadow border border-neutral-300  hover:shadow-lg hover:border-2 flex-col justify-center items-center gap-[18px] inline-flex">
          <div className="self-stretch w-[79px] h-[79px] justify-center items-center inline-flex">
            <img
              className="relative flex-col justify-start items-start flex"
              src={props.src}
              alt={props.text}
            />
          </div>
          <div className="w-[147.09px] h-5 text-center text-neutral-600 text-base font-normal leading-relaxed">
            {props.title}
          </div>
        </div>
      </div>
    </>
  );
};

export default heroCard;
