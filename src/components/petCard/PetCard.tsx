import iconStrokedPaw from "../../assets/images/S2/p5.svg";

export default function PetCard() {
  return (
    <>
      <div className="w-[231.20px] h-[301.20px] mb-[108px] mx-2 mt-6 bg-violet-800 rounded-[10px] shadow flex-col justify-center items-start inline-flex hover:shadow-2xl">
        <div className="w-[231.20px] px-[30px] py-[30px] flex-col justify-center items-center inline-flex">
          <div className="w-[68px] grow shrink basis-0 py-[38px] flex-col justify-center items-center inline-flex">
            <div className="self-stretch grow shrink basis-0 flex-col justify-center items-center inline-flex">
              <div className="w-[68px] h-[70px] relative flex-col justify-start items-start flex">
                <img src={iconStrokedPaw} alt="" />
              </div>
            </div>
          </div>

          <div className="self-stretch h-[39.19px] pl-[11.12px] pr-[10.94px] pt-px pb-[1.60px] justify-center items-center inline-flex">
            <div className="w-[149.14px] h-[36.59px] text-center text-white text-sm font-normal font-['Arial'] leading-tight">
              10137 more pets
              <br />
              available on Petfinder
            </div>
          </div>
        </div>

        <button className="self-stretch h-16 pt-px border-t border-purple-950 justify-center items-center inline-flex hover:bg-purple-950 rounded-b-xl">
          <div className="grow shrink basis-0 self-stretch pl-[73.40px] pr-[73.21px] py-[18.5px] rounded-bl-[10px] rounded-br-[10px] justify-center items-center inline-flex">
            <div className="w-[84.59px] h-[18px] text-center text-white text-sm font-normal font-['Arial'] uppercase leading-snug inline-flex">
              Meet them
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
