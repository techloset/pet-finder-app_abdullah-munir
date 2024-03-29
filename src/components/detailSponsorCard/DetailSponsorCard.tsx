import Button from "../detailButton/DetailButton";
import { FC } from "react";

interface sponsorCardTypes {
  name: string;
  src: string;
}

const DetailSponsorCard: FC<sponsorCardTypes> = (props) => {
  return (
    <div className="max-w-[300px] md:max-w-[450px] md:h-[19rem] pb-0 col-span-full lg:col-span-4 text-white p-8 rounded-xl shadow-lg mb-8 md:mb-0 bg-constPurple mx-auto">
      <div className="">
        <div className="text-xl font-normal mt-6 text-center">
          Considering {props.name} for adoption?
        </div>
        <div className="rounded-3xl  text-center mt-3 bg-white border-2 text-constPurple hover:bg-[#410078]  hover:text-white hover:border-2 hover:border-white hover:shadow-2xl">
          <Button txt="START YOUR INQUIRY" cls="h-[45px] text-sm font-normal" />
        </div>
        <div className="flex items-center justify-center rounded-3xl h-[45PX] text-center mt-10 border-2 border-white hover:bg-customPrime   hover:shadow-2xl">
          <Button txt="READ FAQs" cls="h-[45px] text-sm font-normal" />
        </div>
        <div className="md:h-1 flex justify-around items-center mt-12 bg-constPurple w-full border-t-black">
          <button className="text-center border-t-[1px] border-black pt-3 pb-6 px-[35.5px] md:px-[69px] lg:px-[68.5px] hover:shadow-2xl bg-constPurple hover:bg-customPrime rounded-bl-xl">
            SPONSOR
          </button>
          <button className="flex gap-0 md:gap-4 border-t-[1px] border-black border-l-[1px] s pt-3 pb-6 px-[35.5px] md:px-[69px] lg:px-[68.5px] hover:shadow-2xl bg-constPurple hover:bg-customPrime rounded-br-xl">
            <img src={props.src} alt="" />
            FAVORITE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailSponsorCard;
