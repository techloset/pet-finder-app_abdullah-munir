import Button from "../detailButton/DetailButton";
import { FC } from 'react';

interface sponsorCardTypes{
  name : string;
  src : string;
}

const DetailSponsorCard:FC<sponsorCardTypes> = (props) => {
  return (
    <div className="max-w-[270px] md:max-w-[393px] md:h-[21rem] pb-0 col-span-full lg:col-span-4 text-white p-8 rounded-xl shadow-lg mb-8 md:mb-0 bg-purple-700 mx-auto">
    <div className="">
      <div className="text-xl font-normal mt-6 text-center">
        Considering {props.name} for adoption?
      </div>
      <div className="rounded-3xl  text-center mt-10 bg-white border-2 text-purple-700 hover:bg-purple-950  hover:text-white hover:border-2 hover:bordre-white hover:shadow-2xl">
        <Button
          txt="START YOUR INQUIRY"
          cls="h-[45px] text-sm font-normal"
        />
      </div>
      <div className="flex items-center justify-center rounded-3xl h-[45PX] text-center mt-10 border-2 border-white hover:bg-purple-950   hover:shadow-2xl">
        <Button
          txt="READ FAQs"
          cls="h-[45px] text-sm font-normal"
        />
      </div>
      <div className="md:h-1 flex justify-around items-center mt-12 bg-purple-700 w-full border-t-black">
        <button className="text-center border-t-[1px] border-black pt-3 pb-6 px-[31px] md:px-[59px] hover:shadow-2xl bg-purple-700 hover:bg-purple-950 rounded-bl-xl">
          SPONSOR
        </button>
        <button className="flex gap-0 md:gap-4 border-t-[1px] border-black border-l-[1px] s pt-3 pb-6 px-[31px] md:px-[59px] hover:shadow-2xl bg-purple-700 hover:bg-purple-950 rounded-br-xl">
          <img src={props.src} alt="" />
          FAVORITE
        </button>
      </div>
    </div>
  </div>
  )
}

export default DetailSponsorCard