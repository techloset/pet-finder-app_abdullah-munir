import { Link } from "react-router-dom";

const FooterBottomLink = () => {
  return (
    <div className="flex flex-wrap justify-center py-[42px] bg-violet-800">
      <Link
        to={"/"}
        className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight cursor-pointer"
      >
        Shelter & Rescue Registration
      </Link>
      <div className="w-px h-2.5 my-auto bg-white"></div>
      <Link
        to={"/"}
        className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight cursor-pointer"
      >
        Sitemap
      </Link>
      <div className="w-px h-2.5 my-auto bg-white"></div>
      <Link
        to={"/"}
        className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight cursor-pointer"
      >
        Terms of Service
      </Link>
      <div className="w-px h-2.5 my-auto bg-white"></div>
      <Link
        to={"/"}
        className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight cursor-pointer"
      >
        Notice at Collection
      </Link>
      <div className="w-px h-2.5 my-auto bg-white"></div>
      <Link
        to={"/"}
        className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight cursor-pointer"
      >
        Privacy Policy (updated)
      </Link>
      <div className="w-px h-2.5 my-auto bg-white"></div>
      <Link
        to={"/"}
        className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight cursor-pointer"
      >
        About Our Ads
      </Link>
      <div className="w-px h-2.5 my-auto bg-white"></div>
      <Link
        to={"/"}
        className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight cursor-pointer"
      >
        Do Not Sell Or Share My Personal Information
      </Link>
      <div className="w-px h-2.5 my-auto bg-white"></div>
      <Link
        to={"/"}
        className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight cursor-pointer"
      >
        Accessibility
      </Link>
    </div>
  );
};

export default FooterBottomLink;
