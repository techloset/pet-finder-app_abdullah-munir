import { Link } from "react-router-dom";
import { FooterLinksList } from "../../constants/FooterLink";
import { useFooterLinks } from "./useFooterLinks";
import ArrowUp from "../../assets/images/nav/Arrow.png";

const FooterLinks = () => {
  const { isFooterOpen, toggleFooter } = useFooterLinks();
  return (
    <div className="block md:flex flex-wrap mx-auto">
      {FooterLinksList.map((link) => {
        return (
          <>
            <hr className="block md:hidden mt-7 w-full relative" />
            <div>
              <div className="inline-flex md:hidden flex-end pe-1">
                <button
                  onClick={toggleFooter}
                  title="Button"
                  type="button"
                  className="inline-flex items-center  text-sm text-white md:hidden font-bold"
                  aria-controls="footer"
                  aria-expanded={isFooterOpen ? "true" : "false"}
                >
                  {link.title}
                  <img src={ArrowUp} alt="" />
                </button>
              </div>
              <div
                className={`${
                  isFooterOpen ? "block" : "hidden"
                } w-full md:flex md:w-auto lg:w-auto md:order-1`}
                id="footer"
              >
                <div className=" flex flex-wrap md:p-0 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                  <div className="me-[19px]">
                    <ul className="text-white ">
                      <li>
                        <div className="text-sm font-['Arial'] uppercase leading-snug hidden md:block">
                          <Link to={"/"} className="font-bold">{link.title}</Link>
                        </div>
                      </li>
                      <li>
                        {link.links.map((link) => {
                          return (
                            <ul>
                              <li>
                                <div className="mt-[11px] text-[13px] leading-none">
                                  <Link to={"/"}>{link.title}</Link>
                                </div>
                              </li>
                            </ul>
                          );
                        })}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default FooterLinks;
