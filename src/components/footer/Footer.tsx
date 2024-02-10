import { useState } from "react";
import { Link } from "react-router-dom";

import FooterImg from "../../assets/images/Footer/SVG.svg";
import Facebook from "../../assets/images/Footer/Facebook.png";
import Twitter from "../../assets/images/Footer/Twitter.png";
import Instagram from "../../assets/images/Footer/instagram.png";
import Youtube from "../../assets/images/Footer/Youtube.svg";
import Pinterset from "../../assets/images/Footer/Pinterset.svg";
import Logo from "../../assets/images/Footer/Logo.png";
import ArrowUp from "../../assets/images/nav/Arrow.png";

const Footer = () => {
  const [isFooterOpen, setIsFooterOpen] = useState(false);
  const [isFooterTwoOpen, setIsFooterTwoOpen] = useState(false);
  const [isFooterThreeOpen, setIsFooterThreeOpen] = useState(false);
  const [isFooterFourOpen, setIsFooterFourOpen] = useState(false);
  const toggleFooter = () => {
    setIsFooterOpen(!isFooterOpen);
  };
  const toggleSecondFooter = () => {
    setIsFooterTwoOpen(!isFooterTwoOpen);
  };
  const toggleThirdFooter = () => {
    setIsFooterThreeOpen(!isFooterThreeOpen);
  };
  const toggleFouthFooter = () => {
    setIsFooterFourOpen(!isFooterFourOpen);
  };

  return (
    <>
      <div className="w-full h-11 text-black bg-red-600 justify-center items-center inline-flex">
        <img src={FooterImg} alt="" />
      </div>
      <footer className="bg-violet-800">
        <div className="flex flex-col mx-[15px] px-[50px] py-[40px]">
          <div className="">
            <img src={Logo} alt="" />
          </div>

          <div className="flex mt-[20px] flex-wrap-reverse items-end">
            <div className="block md:flex flex-wrap mx-auto">
              <hr className="block md:hidden mt-7 w-full relative" />
              <div>
                <div className="inline-flex md:hidden flex-end pe-1">
                  <button
                    onClick={toggleFooter}
                    title="Button"
                    type="button"
                    className="inline-flex items-center  text-sm text-white md:hidden"
                    aria-controls="navbar-sticky"
                    aria-expanded={isFooterOpen ? "true" : "false"}
                  >
                    RESOURCES
                    <img src={ArrowUp} alt="" />
                  </button>
                </div>
                <div
                  className={`${
                    isFooterOpen ? "block" : "hidden"
                  } w-full md:flex md:w-auto lg:w-auto md:order-1`}
                  id="navbar-sticky"
                >
                  <div className=" flex flex-wrap md:p-0 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                    <div className="me-[19px]">
                      <ul className="text-white ">
                        <li>
                          <div className="text-sm font-['Arial'] uppercase leading-snug hidden md:block">
                            RESOURCES
                          </div>
                        </li>
                        <li>
                          <div className="mt-[11px] text-[13px] leading-none">
                            FAQs
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Mobile App Download
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Partnerships
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            News Center
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Put Petfinder On Your Site
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            For Developers
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Contact Us
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <hr className="block md:hidden mt-7 w-full relative" />

                <div className="inline-flex md:hidden flex-end pe-1">
                  <button
                    onClick={toggleSecondFooter}
                    title="Button"
                    type="button"
                    className="inline-flex items-center text-sm text-white md:hidden"
                    aria-controls="navbar-sticky"
                    aria-expanded={isFooterTwoOpen ? "true" : "false"}
                  >
                    ADOPT OR GET INVOLVED
                    <img src={ArrowUp} alt="" />
                  </button>
                </div>
                <div
                  className={`${
                    isFooterTwoOpen ? "block" : "hidden"
                  } w-full md:flex md:w-auto lg:w-auto md:order-1`}
                  id="navbar-sticky"
                >
                  <div className=" flex flex-wrap md:p-0 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                    <div className="mx-[19px]">
                      <ul className="text-white">
                        <li>
                          <div className="text-sm font-['Arial'] uppercase leading-snug hidden md:block">
                            ADOPT OR GET INVOLVED
                          </div>
                        </li>
                        <li>
                          <div className="mt-[11px] text-[13px] leading-none">
                            All Adopt or Get Involved
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Adopting Pets
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Animal Shelters & Rescues
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Other Types of Pets
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <hr className="block md:hidden mt-7 w-full relative" />

                <div className="inline-flex md:hidden flex-end pe-1">
                  <button
                    onClick={toggleThirdFooter}
                    title="Button"
                    type="button"
                    className="inline-flex items-center text-sm text-white md:hidden"
                    aria-controls="navbar-sticky"
                    aria-expanded={isFooterThreeOpen ? "true" : "false"}
                  >
                    ABOUT DOGS & PUPPIES
                    <img src={ArrowUp} alt="" />
                  </button>
                </div>
                <div
                  className={`${
                    isFooterThreeOpen ? "block" : "hidden"
                  } w-full md:flex md:w-auto lg:w-auto md:order-1`}
                  id="navbar-sticky"
                >
                  <div className=" flex flex-wrap md:p-0 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                    <div className="mx-[19px]">
                      <ul className="text-white">
                        <li>
                          <div className="text-sm font-['Arial'] uppercase leading-snug hidden md:block">
                            ABOUT DOGS & PUPPIES
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Dog Adoption
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Dog Breeds
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Feeding Your Dog
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Dog Behavior
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Dog Health & Wellness
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Dog Training
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Other Dog Information
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <hr className="block md:hidden mt-7 w-full relative" />

                <div className="inline-flex md:hidden flex-end pe-1">
                  <button
                    onClick={toggleFouthFooter}
                    title="Button"
                    type="button"
                    className="inline-flex items-center text-sm text-white md:hidden"
                    aria-controls="navbar-sticky"
                    aria-expanded={isFooterFourOpen ? "true" : "false"}
                  >
                    ABOUT CATS & KITTENS
                    <img src={ArrowUp} alt="" />
                  </button>
                </div>
                <div
                  className={`${
                    isFooterFourOpen ? "block" : "hidden"
                  } w-full md:flex md:w-auto lg:w-auto md:order-1`}
                  id="navbar-sticky"
                >
                  <div className=" flex flex-wrap md:p-0 font-medium border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                    <div className="ms-[19px]">
                      <ul className="text-white">
                        <li>
                          <div className="text-sm font-['Arial'] uppercase leading-snug hidden md:block">
                            ABOUT CATS & KITTENS
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            All About Cats & Kittens
                          </div>
                        </li>
                        <li>
                          <div className="mt-[11px] text-[13px] leading-none">
                            Cat Adoption
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Cat Breeds
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Feeding Your Cat
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Cat Behavior
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Cat Health & Wellness
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Cat Training
                          </div>
                        </li>
                        <li>
                          <div className="pt-[13px] text-[13px]  leading-none">
                            Other Cat Information
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[330px] h-[170px] bg-purple-100 rounded-[10px] flex flex-col p-[23px] mx-auto">
              <div className="text-center mb-7 text-violet-800 text-sm leading-normal">
                To get the latest on pet adoption and pet
                <br />
                care, sign up for the Petfinder newsletter.
              </div>
              <button className="w-full bg-violet-800  border-2 rounded-full py-4 text-center hover:font-semibold ease-in-out duration-500 hover:shadow-none shadow-lg text-white hover:bg-white hover:text-violet-800 uppercase leading-tight">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex flex-wrap justify-center py-[42px] bg-violet-800">
        <Link
          to={"/"}
          className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight"
        >
          Shelter & Rescue Registration
        </Link>
        <div className="w-px h-2.5 my-auto bg-white"></div>
        <Link
          to={"/"}
          className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight"
        >
          Sitemap
        </Link>
        <div className="w-px h-2.5 my-auto bg-white"></div>
        <Link
          to={"/"}
          className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight"
        >
          Terms of Service
        </Link>
        <div className="w-px h-2.5 my-auto bg-white"></div>
        <Link
          to={"/"}
          className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight"
        >
          Notice at Collection
        </Link>
        <div className="w-px h-2.5 my-auto bg-white"></div>
        <Link
          to={"/"}
          className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight"
        >
          Privacy Policy (updated)
        </Link>
        <div className="w-px h-2.5 my-auto bg-white"></div>
        <Link
          to={"/"}
          className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight"
        >
          About Our Ads
        </Link>
        <div className="w-px h-2.5 my-auto bg-white"></div>
        <Link
          to={"/"}
          className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight"
        >
          Do Not Sell Or Share My Personal Information
        </Link>
        <div className="w-px h-2.5 my-auto bg-white"></div>
        <Link
          to={"/"}
          className="mx-[16.5px] py-2 text-white text-xs font-['Helvetica'] leading-tight"
        >
          Accessibility
        </Link>
      </div>
      <div className="flex flex-wrap items-center bg-purple-950 min-h-[70px] px-[50px]">
        <div className="flex flex-col mx-auto lg:mx-0 lg:me-auto lg:flex-row flex-wrap order-2 md:order-1">
          <div className="text-white text-xs text-center font-normal font-['Helvetica'] leading-tight pe-[12.89px]">
            &copy;2023 Petfinder.com
          </div>
          <div className=" text-white text-xs font-normal text-center font-['Helvetica'] leading-tight lg:mb-0 lg:mt-0 mb-[32px] mt-[10px]">
            All trademarks are owned by Société des Produits Nestlé S.A., or
            used with permission.
          </div>
        </div>
        <div className="flex mx-auto lg:mx-0 md:my-0 md:ms-auto order-1 md:order-2 my-[30px]">
          <Link to={"/"}>
            <img
              className="h-[22px] w-[22px] mx-[15px]"
              src={Facebook}
              alt=""
            />
          </Link>
          <Link to={"/"}>
            <img className="h-[22px] w-[22px] mx-[15px]" src={Twitter} alt="" />
          </Link>
          <Link to={"/"}>
            <img
              className="h-[22px] w-[22px] mx-[15px]"
              src={Instagram}
              alt=""
            />
          </Link>
          <Link to={"/"}>
            <img className="h-[22px] w-[22px] mx-[15px]" src={Youtube} alt="" />
          </Link>
          <Link to={"/"}>
            <img
              className="h-[22px] w-[22px] mx-[15px]"
              src={Pinterset}
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
