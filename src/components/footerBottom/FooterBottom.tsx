import { Link } from "react-router-dom";

import { FooterImg } from "../../constants/FooterLink";

const FooterBottom = () => {
  return (
    <div className="flex flex-wrap items-center bg-purple-950 min-h-[70px] px-[50px]">
      <div className="flex flex-col mx-auto lg:mx-0 lg:me-auto lg:flex-row flex-wrap order-2 md:order-1">
        <div className="text-white text-xs text-center font-normal font-['Helvetica'] leading-tight pe-[12.89px]">
          &copy;2023 Petfinder.com
        </div>
        <div className=" text-white text-xs font-normal text-center font-['Helvetica'] leading-tight lg:mb-0 lg:mt-0 mb-[32px] mt-[10px]">
          All trademarks are owned by Société des Produits Nestlé S.A., or used
          with permission.
        </div>
      </div>
      <div className="flex mx-auto lg:mx-0 md:my-0 md:ms-auto order-1 md:order-2 my-[30px]">
        {FooterImg.map((img, i) => {
          return (
            <div key={i}>
              <Link to={"/"}>
              <img className="h-[22px] w-[22px] mx-[15px]" src={img} alt="" />
            </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterBottom;
