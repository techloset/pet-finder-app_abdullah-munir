import { useState } from "react";
import logo from "../../assets/images/nav/Logo.png";
import HeartIcon from "../../assets/images/nav/HeartIcon.svg";
import ArrowUp from "../../assets/images/nav/Arrow.png";
import Menu from "../../assets/images/nav/IconMenu.svg";
import DropDown from "../dropDown/DropDown";

import { Link } from "react-router-dom";
import "../../App.css";

export default function Navbar() {
  const [isArrowUp, setIsArrowUp] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const showNavbar = () => {
    setShowNav((prevShow) => !prevShow);
  };
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const toggleArrow = () => {
    setIsArrowUp((prevState) => !prevState);
  };

  return (
    <>
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center mx-auto -my-1">
          <div className="flex flex-wrap items-center">
            <Link to={"/"} className="flex items-center space-x-3">
              <img
                src={logo}
                className="ps-1 md:ms-2 h-[50px] sm:h-[60px] md:h-[70px]"
                alt="Petfinder Logo"
              />
            </Link>
            <ul className="flex flex-wrap">
              <li className="">
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  className="text-customPurple rounded-lg text-constPurple  font-bold text-sm px-2 py-2.5 md:ms-2 mr-1 hidden md:inline-flex items-center"
                  type="button"
                  onClick={() => {
                    showNavbar();
                    toggleArrow();
                  }}
                >
                  All ABOUT PETS
                  <div className="w-3.5 h-[9px] relative flex-col justify-start items-start hidden md:inline-flex m-1">
                    <img
                      src={ArrowUp}
                      alt=""
                      className={`text-xl ${
                        isArrowUp
                          ? "rotate-180 ease-in-out duration-[340ms]"
                          : "ease-in-out duration-[340ms]"
                      }`}
                    />
                  </div>
                </button>
              </li>
              <li className="items-center inline-flex  md:hidden">
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  className="text-customPurple rounded-lg text-constPurple  font-bold text-sm px-2 py-2.5 md:ms-2 mr-1 md:hidden inline-flex items-center"
                  type="button"
                  onClick={() => {
                    showNavbar();
                    toggleArrow();
                  }}
                >
                  Find a pet
                  <div className="w-3.5 h-[9px] relative flex-col justify-start items-start md:hidden inline-flex m-1">
                    <img
                      src={ArrowUp}
                      alt=""
                      className={`text-xl ${
                        isArrowUp
                          ? "rotate-180 ease-in-out duration-[340ms]"
                          : "ease-in-out duration-[340ms]"
                      }`}
                    />
                  </div>
                </button>
              </li>
            </ul>
          </div>
          <div className="h-[70px] ms-auto me-2 my-auto">
            <img src={HeartIcon} alt="heart-icon" />
          </div>

          <div className="md:border-[1px] md:border-grey-100 h-[60px] "></div>

          <div className="inline-flex md:hidden flex-end pe-1">
            <button
              onClick={toggleNav}
              title="Button"
              type="button"
              className="inline-flex items-center w-[22px] h-9 text-sm text-gray-500 md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded={isNavOpen ? "true" : "false"}
            >
              <img src={Menu} alt="" />
            </button>
          </div>
          <div
            className={`${
              isNavOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto lg:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <div className=" flex flex-wrap md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <div className="flex flex-wrap ms-auto pe-2 lg:m-0">
                <button
                  type="button"
                  className="text-customGray font-[arial] font-bold rounded-lg text-sm px-4 py-2 text-center focus:ring-blue-800"
                >
                  Signup
                </button>
                <button
                  type="button"
                  className="text-customGray font-[arial] font-bold rounded-lg text-sm px-4 py-2 text-center focus:ring-blue-800"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        {showNav && <DropDown />}
      </nav>
    </>
  );
}
